import os
from datetime import datetime

from lagent.actions import ActionExecutor, BingBrowser
from lagent.llms import LMDeployPipeline

from .mindsearch_agent import MindSearchAgent, MindSearchProtocol
from .mindsearch_prompt import (FINAL_RESPONSE_CN, GRAPH_PROMPT_CN,
                                searcher_context_template_cn,
                                searcher_input_template_cn,
                                searcher_system_prompt_cn)

llm = LMDeployPipeline(path='internlm/internlm2_5-7b',
                       model_name='internlm2',
                       meta_template=[
                           dict(role='system', api_role='system'),
                           dict(role='user', api_role='user'),
                           dict(role='assistant', api_role='assistant'),
                           dict(role='environment', api_role='environment')
                       ],
                       top_p=0.8,
                       top_k=1,
                       temperature=0,
                       max_new_tokens=8192,
                       repetition_penalty=1.02,
                       stop_words=['<|im_end|>'])


def init_agent(lang='cn', model_format='pipeline'):

    agent = MindSearchAgent(
        llm=llm,
        protocol=MindSearchProtocol(meta_prompt=datetime.now().strftime(
            'The current date is %Y-%m-%d.'),
                                    interpreter_prompt=GRAPH_PROMPT_CN,
                                    response_prompt=FINAL_RESPONSE_CN),
        searcher_cfg=dict(
            llm=llm,
            plugin=ActionExecutor(
                BingBrowser(
                    api_key=os.environ.get('BING_API_KEY', 'YOUR_BING_API'))),
            protocol=MindSearchProtocol(
                meta_prompt=datetime.now().strftime(
                    'The current date is %Y-%m-%d.'),
                plugin_prompt=searcher_system_prompt_cn,
            ),
            template=dict(input=searcher_input_template_cn,
                          context=searcher_context_template_cn)))
    return agent
