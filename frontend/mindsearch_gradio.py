import json

import gradio as gr
import requests
from lagent.schema import AgentStatusCode

PLANNER_HISTORY = []
SEARCHER_HISTORY = []



def rst_mem(history_planner: list, history_searcher: list):
    '''
    Reset the chatbot memory.
    '''
    history_planner = []
    history_searcher = []
    if PLANNER_HISTORY:
        PLANNER_HISTORY.clear()
    return history_planner, history_searcher


def format_response(gr_history, agent_return):
    if agent_return['state'] in [
            AgentStatusCode.STREAM_ING, AgentStatusCode.ANSWER_ING
    ]:
        gr_history[-1][1] = agent_return['response']
    elif agent_return['state'] == AgentStatusCode.PLUGIN_START:
        thought = gr_history[-1][1].split('```')[0]
        if agent_return['response'].startswith('```'):
            gr_history[-1][1] = thought + '\n' + agent_return['response']
    elif agent_return['state'] == AgentStatusCode.PLUGIN_END:
        thought = gr_history[-1][1].split('```')[0]
        if isinstance(agent_return['response'], dict):
            gr_history[-1][
                1] = thought + '\n' + f'```json\n{json.dumps(agent_return["response"], ensure_ascii=False, indent=4)}\n```'  # noqa: E501
    elif agent_return['state'] == AgentStatusCode.PLUGIN_RETURN:
        assert agent_return['inner_steps'][-1]['role'] == 'environment'
        item = agent_return['inner_steps'][-1]
        gr_history.append([
            None,
            f"```json\n{json.dumps(item['content'], ensure_ascii=False, indent=4)}\n```"
        ])
        gr_history.append([None, ''])
    return

def predict(history_planner, history_searcher):

    def streaming(raw_response):
        for chunk in raw_response.iter_lines(chunk_size=8192,
                                             decode_unicode=False,
                                             delimiter=b'\n'):
            if chunk:
                decoded = chunk.decode('utf-8')
                if decoded == '\r':
                    continue
                if decoded[:6] == 'data: ':
                    decoded = decoded[6:]
                elif decoded.startswith(': ping - '):
                    continue
                response = json.loads(decoded)
                yield (response['response'], response['current_node'])

    global PLANNER_HISTORY
    PLANNER_HISTORY.append(dict(role='user', content=history_planner[-1][0]))
    new_search_turn = True

    url = 'http://localhost:8002/solve'
    headers = {'Content-Type': 'application/json'}
    data = {'inputs': PLANNER_HISTORY}
    raw_response = requests.post(url,
                                 headers=headers,
                                 data=json.dumps(data),
                                 timeout=20,
                                 stream=True)

    for resp in streaming(raw_response):
        agent_return, node_name = resp
        if node_name:
            if node_name in ['root', 'response']:
                continue
            agent_return = agent_return['nodes'][node_name]['detail']
            if new_search_turn:
                history_searcher.append([agent_return['content'], ''])
                new_search_turn = False
            format_response(history_searcher, agent_return)
            if agent_return['state'] == AgentStatusCode.END:
                new_search_turn = True
            yield history_planner, history_searcher
        else:
            new_search_turn = True
            format_response(history_planner, agent_return)
            if agent_return['state'] == AgentStatusCode.END:
                PLANNER_HISTORY = agent_return['inner_steps']
            yield history_planner, history_searcher
    return history_planner, history_searcher


examples = [
    ["Find legal precedents in contract law."],
    ["What are the top 10 e-commerce websites?"],
    ["Generate a report on global climate change."],
]
import os
css_path = os.path.join(os.path.dirname(__file__), "css", "test1.css")
with gr.Blocks(css=css_path) as demo:
    with gr.Column(elem_classes="chat-box"):
        gr.HTML("""<h1 align="center">MindSearch Gradio Demo</h1>""")
        gr.HTML("""<p style="text-align: center; font-family: Arial, sans-serif;">
                MindSearch is an open-source AI Search Engine Framework with Perplexity.ai Pro performance. You can deploy your own Perplexity.ai-style search engine using either closed-source LLMs (GPT, Claude)
                or open-source LLMs (InternLM2.5-7b-chat).</p> """)
        gr.HTML("""
        <div style="text-align: center; font-size: 16px;">
        <a href="https://github.com/InternLM/MindSearch" style="margin-right: 15px; text-decoration: none; color: #4A90E2;" target="_blank">🔗 GitHub</a>
        <a href="https://arxiv.org/abs/2407.20183" style="margin-right: 15px; text-decoration: none; color: #4A90E2;" target="_blank">📄 Arxiv</a>
        <a href="https://huggingface.co/papers/2407.20183" style="margin-right: 15px; text-decoration: none; color: #4A90E2;" target="_blank">📚 Hugging Face Papers</a>
        <a href="https://huggingface.co/spaces/internlm/MindSearch" style="text-decoration: none; color: #4A90E2;" target="_blank">🤗 Hugging Face Demo</a>
        </div>""")
    gr.HTML("""
       <h1 align='right'><img src='https://raw.githubusercontent.com/InternLM/MindSearch/98fd84d566fe9e3adc5028727f72f2944098fd05/assets/logo.svg' alt='MindSearch Logo1' class="logo"></h1>
       """)

    with gr.Row():
        with gr.Column(scale=10):
            with gr.Row():
                with gr.Column():
                    planner = gr.Chatbot(label='planner',
                                         show_label=True,
                                         show_copy_button=True,
                                         bubble_full_width=False,
                                         render_markdown=True,
                                         elem_classes="chatbot-container")
                with gr.Column():
                    searcher = gr.Chatbot(label='searcher',
                                          show_label=True,
                                          show_copy_button=True,
                                          bubble_full_width=False,
                                          render_markdown=True,
                                          elem_classes="chatbot-container")

            with gr.Row(elem_classes="chat-box"):
                # Text input area
                user_input = gr.Textbox(
                    show_label=False,
                    placeholder="Type your message...",
                    lines=1,
                    container=False,
                    elem_classes="editor"
                )
                # Buttons (now in the same Row)
                submitBtn = gr.Button("submit", variant="primary", elem_classes="toolbarButton")
                clearBtn = gr.Button("clear", variant="secondary", elem_classes="toolbarButton")
            with gr.Row(elem_classes="examples-container"):
                examples_component = gr.Examples(examples, inputs=user_input,
                                                label="Try these examples:")

    def user(query, history):
        return '', history + [[query, '']]

    def submit_example(example):
        return user(example[0], planner.value)



    submitBtn.click(user, [user_input, planner], [user_input, planner],
                    queue=False).then(predict, [planner, searcher],
                                      [planner, searcher])
    clearBtn.click(rst_mem, [planner, searcher], [planner, searcher],
                   queue=False)

demo.queue()
demo.launch(server_name='127.0.0.1',
            server_port=7884,
            inbrowser=True,
            share=True)