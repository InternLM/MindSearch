import json
import os
import sys

import gradio as gr
import requests

sys.path.insert(0, os.path.dirname(__file__))

from gradio_agentchatbot.agentchatbot import AgentChatbot
from gradio_agentchatbot.utils import ChatMessage, ThoughtMetadata
from lagent.schema import AgentStatusCode

PLANNER_HISTORY = []
SEARCHER_HISTORY = []


def rst_mem(history_planner: list, history_searcher: list):
    """Reset the chatbot memory."""
    history_planner = []
    history_searcher = []
    if PLANNER_HISTORY:
        PLANNER_HISTORY.clear()
    return history_planner, history_searcher


def format_response(gr_history, message, response, idx=-1):
    if idx < 0:
        idx = len(gr_history) + idx
    if message["stream_state"] == AgentStatusCode.STREAM_ING:
        gr_history[idx].content = response
    elif message["stream_state"] == AgentStatusCode.CODING:
        action = response.split("<|action_start|><|interpreter|>")[-1].lstrip()
        if gr_history[idx].thought_metadata.tool_name is None:
            gr_history[idx].content = gr_history[idx].content.split(
                "<|action_start|><|interpreter|>"
            )[0]
            gr_history.insert(
                idx + 1,
                ChatMessage(
                    role="assistant",
                    content=action,
                    thought_metadata=ThoughtMetadata(tool_name="🖥️ Code Interpreter"),
                ),
            )
        else:
            gr_history[idx].content = action
    elif message["stream_state"] == AgentStatusCode.PLUGIN_START:
        action = response.split("<|action_start|><|plugin|>")[-1].lstrip()
        if gr_history[idx].thought_metadata.tool_name is None:
            gr_history[idx].content = gr_history[idx].content.split("<|action_start|><|plugin|>")[
                0
            ]
            gr_history.insert(
                idx + 1,
                ChatMessage(
                    role="assistant",
                    content="```json\n" + action,
                    thought_metadata=ThoughtMetadata(tool_name="🌐 Web Browser"),
                ),
            )
        else:
            gr_history[idx].content = "```json\n" + action
    elif message["stream_state"] == AgentStatusCode.PLUGIN_END and isinstance(response, dict):
        gr_history[
            idx
        ].content = f"```json\n{json.dumps(response, ensure_ascii=False, indent=4)}\n```"
    elif message["stream_state"] in [AgentStatusCode.CODE_RETURN, AgentStatusCode.PLUGIN_RETURN]:
        try:
            content = json.loads(message["content"])
        except json.decoder.JSONDecodeError:
            content = message["content"]
        if gr_history[idx].thought_metadata.tool_name:
            gr_history.insert(
                idx + 1,
                ChatMessage(
                    role="assistant",
                    content=(
                        content
                        if isinstance(content, str)
                        else f"\n```json\n{json.dumps(content, ensure_ascii=False, indent=4)}\n```\n"
                    ),
                    thought_metadata=ThoughtMetadata(tool_name="Execution"),
                ),
            )
            gr_history.insert(idx + 2, ChatMessage(role="assistant", content=""))


def predict(history_planner, history_searcher):
    def streaming(raw_response):
        for chunk in raw_response.iter_lines(
            chunk_size=8192, decode_unicode=False, delimiter=b"\n"
        ):
            if chunk:
                decoded = chunk.decode("utf-8")
                if decoded == "\r":
                    continue
                if decoded[:6] == "data: ":
                    decoded = decoded[6:]
                elif decoded.startswith(": ping - "):
                    continue
                response = json.loads(decoded)
                yield (
                    response["response"],
                    response["current_node"],
                    response["node"],
                    response["adjacency_list"],
                    response["inner_steps"],
                )

    global PLANNER_HISTORY
    PLANNER_HISTORY.extend(history_planner[-2:])

    url = "http://localhost:8002/solve"
    headers = {"Content-Type": "application/json"}
    data = {"inputs": PLANNER_HISTORY[-2].content}
    raw_response = requests.post(
        url, headers=headers, data=json.dumps(data), timeout=20, stream=True
    )

    node_id2msg_idx = {}
    for resp in streaming(raw_response):
        agent_message, node_name, nodes, _, history = resp
        if node_name:
            if node_name in ["root", "response"]:
                continue
            node = nodes[node_name]
            node_id = f'【{node_name}】{node["content"]}'
            agent_message, history = node["detail"], node["inner_steps"]
            response = (
                (
                    agent_message["formatted"]["action"]
                    if agent_message["stream_state"] == AgentStatusCode.PLUGIN_END
                    else agent_message["content"]
                )
                if agent_message["sender"].lower().endswith("agent")
                else history[-1]["content"]
            )
            if node_id not in node_id2msg_idx:
                node_id2msg_idx[node_id] = len(history_searcher) + 1
                history_searcher.append(ChatMessage(role="user", content=node_id))
                history_searcher.append(ChatMessage(role="assistant", content=""))
            offset = len(history_searcher)
            format_response(history_searcher, agent_message, response, node_id2msg_idx[node_id])
            flag, incr = False, len(history_searcher) - offset
            for key, value in node_id2msg_idx.items():
                if flag or key == node_id:
                    node_id2msg_idx[key] = value + incr
                    if not flag:
                        flag = True
            yield history_planner, history_searcher
        else:
            response = (
                agent_message["content"]
                if agent_message["sender"].lower().endswith("agent")
                else history[-1]["content"]
            )
            format_response(history_planner, agent_message, response)
            if agent_message["stream_state"] == AgentStatusCode.END:
                PLANNER_HISTORY = history
            yield history_planner, history_searcher
    return history_planner, history_searcher


with gr.Blocks() as demo:
    gr.HTML("""<h1 align="center">WebAgent Gradio Simple Demo</h1>""")
    with gr.Row():
        planner = AgentChatbot(
            label="planner",
            height=700,
            show_label=True,
            show_copy_button=True,
            bubble_full_width=False,
            render_markdown=True,
        )
        searcher = AgentChatbot(
            label="searcher",
            height=700,
            show_label=True,
            show_copy_button=True,
            bubble_full_width=False,
            render_markdown=True,
        )
    user_input = gr.Textbox(show_label=False, placeholder="inputs...", lines=5, container=False)
    with gr.Row():
        with gr.Column(scale=2):
            submitBtn = gr.Button("Submit")
        with gr.Column(scale=1, min_width=20):
            emptyBtn = gr.Button("Clear History")

    def user(query, history):
        history.append(ChatMessage(role="user", content=query))
        history.append(ChatMessage(role="assistant", content=""))
        return "", history

    submitBtn.click(user, [user_input, planner], [user_input, planner], queue=False).then(
        predict, [planner, searcher], [planner, searcher]
    )
    emptyBtn.click(rst_mem, [planner, searcher], [planner, searcher], queue=False)

demo.queue()
demo.launch(server_name="127.0.0.1", server_port=7882, inbrowser=True, share=False)
