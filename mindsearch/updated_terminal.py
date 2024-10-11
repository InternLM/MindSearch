from datetime import datetime
from lagent.actions import ActionExecutor, BingBrowser
from lagent.llms import INTERNLM2_META, LMDeployServer
from mindsearch.agent.mindsearch_agent import MindSearchAgent, MindSearchProtocol
from mindsearch.agent.mindsearch_prompt import (
    FINAL_RESPONSE_CN, FINAL_RESPONSE_EN, GRAPH_PROMPT_CN, GRAPH_PROMPT_EN,
    searcher_context_template_cn, searcher_context_template_en,
    searcher_input_template_cn, searcher_input_template_en,
    searcher_system_prompt_cn, searcher_system_prompt_en
)

# Configuration
lang = 'cn'
date_str = datetime.now().strftime('The current date is %Y-%m-%d.')

# Language-specific selections
if lang == 'cn':
    graph_prompt = GRAPH_PROMPT_CN
    final_response = FINAL_RESPONSE_CN
    searcher_system_prompt = searcher_system_prompt_cn
    searcher_input_template = searcher_input_template_cn
    searcher_context_template = searcher_context_template_cn
else:
    graph_prompt = GRAPH_PROMPT_EN
    final_response = FINAL_RESPONSE_EN
    searcher_system_prompt = searcher_system_prompt_en
    searcher_input_template = searcher_input_template_en
    searcher_context_template = searcher_context_template_en

# Initialize LLM
llm = LMDeployServer(
    path='internlm/internlm2_5-7b-chat',
    model_name='internlm2',
    meta_template=INTERNLM2_META,
    top_p=0.8,
    top_k=1,
    temperature=0,
    max_new_tokens=8192,
    repetition_penalty=1.02,
    stop_words=['']
)

# Configure protocols
main_protocol = MindSearchProtocol(
    meta_prompt=date_str,
    interpreter_prompt=graph_prompt,
    response_prompt=final_response
)

searcher_protocol = MindSearchProtocol(
    meta_prompt=date_str,
    plugin_prompt=searcher_system_prompt
)

# Configure searcher
searcher_cfg = {
    'llm': llm,
    'plugin_executor': ActionExecutor(BingBrowser(searcher_type='DuckDuckGoSearch', topk=6)),
    'protocol': searcher_protocol,
    'template': {
        'input': searcher_input_template,
        'context': searcher_context_template
    }
}

# Create the agent
agent = MindSearchAgent(llm=llm, protocol=main_protocol, searcher_cfg=searcher_cfg, max_turn=10)

# Execute Chat
for agent_return in agent.stream_chat('上海今天适合穿什么衣服'):
    pass
