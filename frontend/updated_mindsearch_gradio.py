import json
import gradio as gr
import requests
from lagent.schema import AgentStatusCode

def reset_memory():
    """
    Reset the chatbot memory.
    """
    global PLANNER_HISTORY, SEARCHER_HISTORY
    PLANNER_HISTORY = []
    SEARCHER_HISTORY = []
    return PLANNER_HISTORY, SEARCHER_HISTORY

def format_response(gr_history, agent_return):
    """
    Format and update the response in the history based on agent status.
    """
    state = agent_return['state']
    response = agent_return['response']
    
    if state in [AgentStatusCode.STREAM_ING, AgentStatusCode.ANSWER_ING]:
        gr_history[-1][1] = response
    elif state == AgentStatusCode.PLUGIN_START:
        thought = gr_history[-1][1].split('```')[0]
        if response.startswith('```'):
            gr_history[-1][1] = f"{thought}\n{response}"
    elif state == AgentStatusCode.PLUGIN_END:
        thought = gr_history[-1][1].split('```')[0]
        if isinstance(response, dict):
            gr_history[-1][1] = f"{thought}\n```json\n{json.dumps(response, ensure_ascii=False, indent=4)}\n```"
    elif state == AgentStatusCode.PLUGIN_RETURN:
        assert agent_return['inner_steps'][-1]['role'] == 'environment'
        item = agent_return['inner_steps'][-1]
        gr_history.append([None, f"```json\n{json.dumps(item['content'], ensure_ascii=False, indent=4)}\n```"])
        gr_history.append([None, ''])

def streaming(raw_response):
    """
    Stream and yield responses from the raw response.
    """
    for chunk in raw_response.iter_lines(chunk_size=8192, decode_unicode=False, delimiter=b'\n'):
        if chunk:
            decoded = chunk.decode('utf-8')
            if decoded == '\r' or decoded.startswith(': ping - '):
                continue
            if decoded.startswith('data: '):
                decoded = decoded[6:]
            response = json.loads(decoded)
            yield response['response'], response['current_node']

def predict(planner_history, searcher_history):
    """
    Predict and update the histories based on the agent's response.
    """
    global PLANNER_HISTORY
    PLANNER_HISTORY.append(dict(role='user', content=planner_history[-1][0]))
    new_search_turn = True

    url = 'http://localhost:8002/solve'
    headers = {'Content-Type': 'application/json'}
    data = {'inputs': PLANNER_HISTORY}

    try:
        raw_response = requests.post(url, headers=headers, data=json.dumps(data), timeout=20, stream=True)
        for response, node_name in streaming(raw_response):
            if node_name:
                if node_name in ['root', 'response']:
                    continue
                agent_return = response['nodes'][node_name]['detail']
                if new_search_turn:
                    searcher_history.append([agent_return['content'], ''])
                    new_search_turn = False
                format_response(searcher_history, agent_return)
                if agent_return['state'] == AgentStatusCode.END:
                    new_search_turn = True
                yield planner_history, searcher_history
            else:
                new_search_turn = True
                format_response(planner_history, response)
                if response['state'] == AgentStatusCode.END:
                    PLANNER_HISTORY = response['inner_steps']
                yield planner_history, searcher_history
    except requests.RequestException as e:
        print(f"Request failed: {e}")
    return planner_history, searcher_history

with gr.Blocks() as demo:
    gr.HTML("<h1 align='center'>WebAgent Gradio Simple Demo</h1>")
    
    with gr.Row():
        with gr.Column(scale=10):
            with gr.Row():
                with gr.Column():
                    planner = gr.Chatbot(label='planner', height=700, show_label=True, show_copy_button=True, bubble_full_width=False, render_markdown=True)
                with gr.Column():
                    searcher = gr.Chatbot(label='searcher', height=700, show_label=True, show_copy_button=True, bubble_full_width=False, render_markdown=True)
            with gr.Row():
                user_input = gr.Textbox(show_label=False, placeholder='inputs...', lines=5, container=False)
            with gr.Row():
                with gr.Column(scale=2):
                    submitBtn = gr.Button('Submit')
                with gr.Column(scale=1, min_width=20):
                    emptyBtn = gr.Button('Clear History')

    def user(query, history):
        return '', history + [[query, '']]

    submitBtn.click(user, [user_input, planner], [user_input, planner], queue=False).then(predict, [planner, searcher], [planner, searcher])
    emptyBtn.click(reset_memory, [], [planner, searcher], queue=False)

demo.queue()
demo.launch(server_name='127.0.0.1', server_port=7882, inbrowser=True, share=True)
