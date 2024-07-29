import os
from datetime import datetime

from lagent.actions import ActionExecutor, BingBrowser

import src.agent.models as llm_factory
from src.agent.mindsearch_agent import MindSearchAgent, MindSearchProtocol
from src.agent.mindsearch_prompt import (
    FINAL_RESPONSE_CN, FINAL_RESPONSE_EN, GRAPH_PROMPT_CN, GRAPH_PROMPT_EN,
    searcher_context_template_cn, searcher_context_template_en,
    searcher_input_template_cn, searcher_input_template_en,
    searcher_system_prompt_cn, searcher_system_prompt_en)

LLM = {}


def init_agent(lang='cn', model_format='internlm_server'):
    llm = LLM.get(model_format, None)
    if llm is None:
        llm_cfg = getattr(llm_factory, model_format)
        if llm_cfg is None:
            raise NotImplementedError
        llm = llm_cfg.pop('type')(**llm_cfg)
        LLM[model_format] = llm

    agent = MindSearchAgent(
        llm=llm,
        protocol=MindSearchProtocol(meta_prompt=datetime.now().strftime(
            'The current date is %Y-%m-%d.'),
                                    interpreter_prompt=GRAPH_PROMPT_CN
                                    if lang == 'cn' else GRAPH_PROMPT_EN,
                                    response_prompt=FINAL_RESPONSE_CN
                                    if lang == 'cn' else FINAL_RESPONSE_EN),
        searcher_cfg=dict(
            llm=llm,
            plugin_executor=ActionExecutor(
                BingBrowser(
                    api_key=os.environ.get('BING_API_KEY', 'YOUR_BING_API'))),
            protocol=MindSearchProtocol(
                meta_prompt=datetime.now().strftime(
                    'The current date is %Y-%m-%d.'),
                plugin_prompt=searcher_system_prompt_cn
                if lang == 'cn' else searcher_system_prompt_en,
            ),
            template=dict(input=searcher_input_template_cn
                          if lang == 'cn' else searcher_input_template_en,
                          context=searcher_context_template_cn
                          if lang == 'cn' else searcher_context_template_en)))
    return agent
