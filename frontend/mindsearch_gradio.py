import json
import mimetypes
import os
import sys
import tempfile

import gradio as gr
import requests

sys.path.insert(0, os.path.dirname(__file__))

import schemdraw
from gradio_agentchatbot.agentchatbot import AgentChatbot
from gradio_agentchatbot.utils import ChatFileMessage, ChatMessage, ThoughtMetadata
from lagent.schema import AgentStatusCode
from schemdraw import flow

PLANNER_HISTORY = []
SEARCHER_HISTORY = []


def create_search_graph(adjacency_list: dict):
    import matplotlib.pyplot as plt

    plt.rcParams["font.sans-serif"] = ["SimHei"]

    with schemdraw.Drawing(fontsize=10, unit=1) as graph:
        node_pos, nodes, edges = {}, {}, []
        if "root" in adjacency_list:
            queue, layer, response_level = ["root"], 0, 0
            while queue:
                layer_len = len(queue)
                for i in range(layer_len):
                    node_name = queue.pop(0)
                    node_pos[node_name] = (layer * 5, -i * 3)
                    for item in adjacency_list[node_name]:
                        if item["name"] == "response":
                            response_level = max(response_level, (layer + 1) * 5)
                        else:
                            queue.append(item["name"])
                        edges.append((node_name, item["name"]))
                layer += 1
            for node_name, (x, y) in node_pos.items():
                if node_name == "root":
                    node = flow.Terminal().label(node_name).at((x, y)).color("pink")
                else:
                    node = flow.RoundBox(w=3.5, h=1.75).label(node_name).at((x, y)).color("teal")
                nodes[node_name] = node
            if response_level:
                response_node = (
                    flow.Terminal().label("response").at((response_level, 0)).color("orange")
                )
                nodes["response"] = response_node
            for start, end in edges:
                flow.Arc3(arrow="->").linestyle("--" if end == "response" else "-").at(
                    nodes[start].E
                ).to(nodes[end].W).color("grey" if end == "response" else "lightblue")
    return graph


def draw_search_graph(adjacency_list: dict, suffix=".png", dpi=360) -> str:
    g = create_search_graph(adjacency_list)
    path = tempfile.mktemp(suffix=suffix)
    g.save(path, dpi=dpi)
    return path


def rst_mem():
    """Reset the chatbot memory."""
    if PLANNER_HISTORY:
        PLANNER_HISTORY.clear()
    return [], [], 0


def format_response(gr_history, message, response, idx=-1):
    if idx < 0:
        idx = len(gr_history) + idx
    if message["stream_state"] == AgentStatusCode.STREAM_ING:
        gr_history[idx].content = response
    elif message["stream_state"] == AgentStatusCode.CODING:
        if gr_history[idx].thought_metadata.tool_name is None:
            gr_history[idx].content = gr_history[idx].content.split("<|action_start|>")[0]
            gr_history.insert(
                idx + 1,
                ChatMessage(
                    role="assistant",
                    content=response,
                    thought_metadata=ThoughtMetadata(tool_name="🖥️ Code Interpreter"),
                ),
            )
        else:
            gr_history[idx].content = response
    elif message["stream_state"] == AgentStatusCode.PLUGIN_START:
        if isinstance(response, dict):
            response = json.dumps(response, ensure_ascii=False, indent=4)
        if gr_history[idx].thought_metadata.tool_name is None:
            gr_history[idx].content = gr_history[idx].content.split("<|action_start|>")[0]
            gr_history.insert(
                idx + 1,
                ChatMessage(
                    role="assistant",
                    content="```json\n" + response,
                    thought_metadata=ThoughtMetadata(tool_name="🌐 Web Browser"),
                ),
            )
        else:
            gr_history[idx].content = "```json\n" + response
    elif message["stream_state"] == AgentStatusCode.PLUGIN_END and isinstance(response, dict):
        gr_history[idx].content = (
            f"```json\n{json.dumps(response, ensure_ascii=False, indent=4)}\n```"
        )
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


def predict(history_planner, history_searcher, node_cnt):

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
                    response["current_node"],
                    (
                        response["response"]["formatted"]["node"][response["current_node"]]
                        if response["current_node"]
                        else response["response"]
                    ),
                    response["response"]["formatted"]["adjacency_list"],
                )

    global PLANNER_HISTORY
    PLANNER_HISTORY.extend(history_planner[-3:])
    search_graph_msg = history_planner[-1]

    url = "http://localhost:8002/solve"
    data = {"inputs": PLANNER_HISTORY[-3].content}
    raw_response = requests.post(url, json=data, timeout=60, stream=True)

    node_id2msg_idx = {}
    for resp in streaming(raw_response):
        node_name, agent_message, adjacency_list = resp
        dedup_nodes = set(adjacency_list) | {
            val["name"] for vals in adjacency_list.values() for val in vals
        }
        if dedup_nodes and len(dedup_nodes) != node_cnt:
            node_cnt = len(dedup_nodes)
            graph_path = draw_search_graph(adjacency_list)
            search_graph_msg.file.path = graph_path
            search_graph_msg.file.mime_type = mimetypes.guess_type(graph_path)[0]
        if node_name:
            if node_name in ["root", "response"]:
                continue
            node_id = f'【{node_name}】{agent_message["content"]}'
            agent_message = agent_message["response"]
            response = (
                agent_message["formatted"]["action"]
                if agent_message["stream_state"]
                in [AgentStatusCode.PLUGIN_START, AgentStatusCode.PLUGIN_END]
                else agent_message["formatted"] and agent_message["formatted"].get("thought")
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
            yield history_planner, history_searcher, node_cnt
        else:
            response = (
                agent_message["formatted"]["action"]
                if agent_message["stream_state"]
                in [AgentStatusCode.CODING, AgentStatusCode.CODE_END]
                else agent_message["formatted"] and agent_message["formatted"].get("thought")
            )
            format_response(history_planner, agent_message, response, -2)
            if agent_message["stream_state"] == AgentStatusCode.END:
                PLANNER_HISTORY = history_planner
            yield history_planner, history_searcher, node_cnt
    return history_planner, history_searcher, node_cnt


with gr.Blocks(css=os.path.join(os.path.dirname(__file__), "css", "gradio_front.css")) as demo:
    with gr.Column(elem_classes="chat-box"):
        gr.HTML("""<h1 align="center">MindSearch Gradio Demo</h1>""")
        gr.HTML(
            """<p style="text-align: center; font-family: Arial, sans-serif;">
                MindSearch is an open-source AI Search Engine Framework with Perplexity.ai Pro performance.
                You can deploy your own Perplexity.ai-style search engine using either
                closed-source LLMs (GPT, Claude)
                or open-source LLMs (InternLM2.5-7b-chat).</p> """
        )
        gr.HTML(
            """
        <div style="text-align: center; font-size: 16px;">
        <a href="https://github.com/InternLM/MindSearch" style="margin-right: 15px;
         text-decoration: none; color: #4A90E2;" target="_blank">🔗 GitHub</a>
        <a href="https://arxiv.org/abs/2407.20183" style="margin-right: 15px;
         text-decoration: none; color: #4A90E2;" target="_blank">📄 Arxiv</a>
        <a href="https://huggingface.co/papers/2407.20183" style="margin-right:
         15px; text-decoration: none; color: #4A90E2;" target="_blank">📚 Hugging Face Papers</a>
        <a href="https://huggingface.co/spaces/internlm/MindSearch"
         style="text-decoration: none; color: #4A90E2;" target="_blank">🤗 Hugging Face Demo</a>
        </div>"""
        )
    gr.HTML(
        """
       <h1 align='right'><img
        src=
        'https://raw.githubusercontent.com/InternLM/MindSearch/98fd84d566fe9e3adc5028727f72f2944098fd05/assets/logo.svg'
         alt='MindSearch Logo1' class="logo" width="200"></h1> """
    )
    node_count = gr.State(0)
    with gr.Row():
        planner = AgentChatbot(
            label="planner",
            height=600,
            show_label=True,
            show_copy_button=True,
            bubble_full_width=False,
            render_markdown=True,
            elem_classes="chatbot-container",
        )
        searcher = AgentChatbot(
            label="searcher",
            height=600,
            show_label=True,
            show_copy_button=True,
            bubble_full_width=False,
            render_markdown=True,
            elem_classes="chatbot-container",
        )
    with gr.Row(elem_classes="chat-box"):
        # Text input area
        user_input = gr.Textbox(
            show_label=False,
            placeholder="Type your message...",
            lines=1,
            container=False,
            elem_classes="editor",
            scale=4,
        )
        # Buttons (now in the same Row)
        submitBtn = gr.Button("submit", variant="primary", elem_classes="toolbarButton", scale=1)
        clearBtn = gr.Button("clear", variant="secondary", elem_classes="toolbarButton", scale=1)
    with gr.Row(elem_classes="examples-container"):
        examples_component = gr.Examples(
            [
                ["Find legal precedents in contract law."],
                ["What are the top 10 e-commerce websites?"],
                ["Generate a report on global climate change."],
            ],
            inputs=user_input,
            label="Try these examples:",
        )

    def user(query, history):
        history.append(ChatMessage(role="user", content=query))
        history.append(ChatMessage(role="assistant", content=""))
        graph_path = draw_search_graph({"root": []})
        history.append(
            ChatFileMessage(
                role="assistant",
                file=gr.FileData(path=graph_path, mime_type=mimetypes.guess_type(graph_path)[0]),
            )
        )
        return "", history

    submitBtn.click(user, [user_input, planner], [user_input, planner], queue=False).then(
        predict,
        [planner, searcher, node_count],
        [planner, searcher, node_count],
    )
    clearBtn.click(rst_mem, None, [planner, searcher, node_count], queue=False)

demo.queue()
demo.launch(server_name="127.0.0.1", server_port=7882, inbrowser=True, share=False)
