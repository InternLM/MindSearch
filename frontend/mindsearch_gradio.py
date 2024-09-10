import json

import gradio as gr
import requests
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
    if message["stream_state"] in [
        AgentStatusCode.STREAM_ING,
        AgentStatusCode.CODING,
    ]:  # , AgentStatusCode.ANSWER_ING
        gr_history[idx][1] = response.replace("<|action_start|><|interpreter|>\n", "\n")
    elif message["stream_state"] == AgentStatusCode.PLUGIN_START:
        thought = gr_history[idx][1].split("<|action_start|><|plugin|>")[0].split("\n```json\n")[0]
        action = response.split("<|action_start|><|plugin|>")[-1]
        gr_history[idx][1] = thought + "\n```json\n" + action
    elif message["stream_state"] == AgentStatusCode.PLUGIN_END:
        thought = gr_history[idx][1].split("\n```json\n")[0]
        if isinstance(response, dict):
            gr_history[idx][1] = (
                thought + f"\n```json\n{json.dumps(response, ensure_ascii=False, indent=4)}\n```"
            )
    elif message["stream_state"] in [AgentStatusCode.CODE_RETURN, AgentStatusCode.PLUGIN_RETURN]:
        try:
            content = json.loads(message["content"])
        except json.decoder.JSONDecodeError:
            content = message["content"]
        gr_history.insert(
            idx + 1,
            [
                None,
                content
                if isinstance(content, str)
                else f"```json\n{json.dumps(content, ensure_ascii=False, indent=4)}\n```",
            ],
        )
        gr_history.insert(idx + 2, [None, ""])


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
    PLANNER_HISTORY.append(dict(role="user", content=history_planner[-1][0]))

    url = "http://localhost:8002/solve"
    headers = {"Content-Type": "application/json"}
    data = {"inputs": PLANNER_HISTORY[-1]["content"]}
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
                node_id2msg_idx[node_id] = len(history_searcher)
                history_searcher.append([node_id, ""])
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
        with gr.Column(scale=10):
            with gr.Row():
                with gr.Column():
                    planner = gr.Chatbot(
                        label="planner",
                        height=700,
                        show_label=True,
                        show_copy_button=True,
                        bubble_full_width=False,
                        render_markdown=True,
                    )
                with gr.Column():
                    searcher = gr.Chatbot(
                        label="searcher",
                        height=700,
                        show_label=True,
                        show_copy_button=True,
                        bubble_full_width=False,
                        render_markdown=True,
                    )
            with gr.Row():
                user_input = gr.Textbox(
                    show_label=False, placeholder="inputs...", lines=5, container=False
                )
            with gr.Row():
                with gr.Column(scale=2):
                    submitBtn = gr.Button("Submit")
                with gr.Column(scale=1, min_width=20):
                    emptyBtn = gr.Button("Clear History")

    def user(query, history):
        return "", history + [[query, ""]]

    submitBtn.click(user, [user_input, planner], [user_input, planner], queue=False).then(
        predict, [planner, searcher], [planner, searcher]
    )
    emptyBtn.click(rst_mem, [planner, searcher], [planner, searcher], queue=False)

demo.queue()
demo.launch(server_name="127.0.0.1", server_port=7882, inbrowser=True, share=False)
