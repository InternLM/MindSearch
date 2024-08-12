from datetime import datetime

from lagent.actions import ActionExecutor, BingBrowser
from lagent.llms import INTERNLM2_META, LMDeployServer

from mindsearch.agent.mindsearch_agent import (MindSearchAgent,
                                               MindSearchProtocol)
from mindsearch.agent.mindsearch_prompt import (
    FINAL_RESPONSE_CN, FINAL_RESPONSE_EN, GRAPH_PROMPT_CN, GRAPH_PROMPT_EN,
    searcher_context_template_cn, searcher_context_template_en,
    searcher_input_template_cn, searcher_input_template_en,
    searcher_system_prompt_cn, searcher_system_prompt_en)

lang = 'cn'
llm = LMDeployServer(path='internlm/internlm2_5-7b-chat',
                     model_name='internlm2',
                     meta_template=INTERNLM2_META,
                     top_p=0.8,
                     top_k=1,
                     temperature=0,
                     max_new_tokens=8192,
                     repetition_penalty=1.02,
                     stop_words=['<|im_end|>'])

agent = MindSearchAgent(
    llm=llm,
    protocol=MindSearchProtocol(
        meta_prompt=datetime.now().strftime('The current date is %Y-%m-%d.'),
        interpreter_prompt=GRAPH_PROMPT_CN
        if lang == 'cn' else GRAPH_PROMPT_EN,
        response_prompt=FINAL_RESPONSE_CN
        if lang == 'cn' else FINAL_RESPONSE_EN),
    searcher_cfg=dict(
        llm=llm,
        plugin_executor=ActionExecutor(
            BingBrowser(searcher_type='DuckDuckGoSearch', topk=6)),
        protocol=MindSearchProtocol(
            meta_prompt=datetime.now().strftime(
                'The current date is %Y-%m-%d.'),
            plugin_prompt=searcher_system_prompt_cn
            if lang == 'cn' else searcher_system_prompt_en,
        ),
        template=dict(input=searcher_input_template_cn
                      if lang == 'cn' else searcher_input_template_en,
                      context=searcher_context_template_cn
                      if lang == 'cn' else searcher_context_template_en)),
    max_turn=10)

for agent_return in agent.stream_chat('上海今天适合穿什么衣服'):
    pass
