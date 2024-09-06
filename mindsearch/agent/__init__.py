import os
from datetime import datetime

from lagent.actions import WebBrowser
from lagent.agents.stream import get_plugin_prompt
from lagent.prompts import InterpreterParser, PluginParser
from lagent.utils import create_object

from . import models as llm_factory
from .mindsearch_agent import MindSearchAgent
from .mindsearch_prompt import (
    FINAL_RESPONSE_CN,
    FINAL_RESPONSE_EN,
    GRAPH_PROMPT_CN,
    GRAPH_PROMPT_EN,
    searcher_context_template_cn,
    searcher_context_template_en,
    searcher_input_template_cn,
    searcher_input_template_en,
    searcher_system_prompt_cn,
    searcher_system_prompt_en,
)

LLM = {}


def init_agent(lang="cn", model_format="internlm_server", search_engine="BingSearch"):
    llm = LLM.get(model_format, None)
    if llm is None:
        llm_cfg = getattr(llm_factory, model_format)
        if llm_cfg is None:
            raise NotImplementedError
        llm = create_object(llm_cfg)
        LLM[model_format] = llm

    date = datetime.now().strftime("The current date is %Y-%m-%d.")
    plugins = [WebBrowser(searcher_type=search_engine, topk=6)]
    agent = MindSearchAgent(
        llm=llm,
        template=date,
        output_format=InterpreterParser(
            template=GRAPH_PROMPT_CN if lang == "cn" else GRAPH_PROMPT_EN
        ),
        searcher_cfg=dict(
            llm=llm,
            plugins=plugins,
            template=date,
            output_format=PluginParser(
                template=searcher_system_prompt_cn if lang == "cn" else searcher_system_prompt_en,
                tool_info=get_plugin_prompt(plugins),
            ),
            user_input_template=searcher_input_template_cn
            if lang == "cn"
            else searcher_input_template_en,
            user_context_template=searcher_context_template_cn
            if lang == "cn"
            else searcher_context_template_en,
        ),
        summary_prompt=FINAL_RESPONSE_CN if lang == "cn" else FINAL_RESPONSE_EN,
        max_turn=10,
    )
    return agent
