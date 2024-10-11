import asyncio
import queue
import random
import re
import uuid
from collections import defaultdict
from concurrent.futures import ThreadPoolExecutor
from copy import deepcopy
from threading import Thread
from typing import Dict, List

from lagent.actions import BaseAction
from lagent.schema import AgentMessage, AgentStatusCode

from .streaming import AsyncStreamingAgentForInternLM, StreamingAgentForInternLM


class SearcherAgent(StreamingAgentForInternLM):
    def __init__(
        self,
        user_input_template: str = "{question}",
        user_context_template: str = None,
        **kwargs,
    ):
        self.user_input_template = user_input_template
        self.user_context_template = user_context_template
        super().__init__(**kwargs)

    def forward(
        self,
        question: str,
        topic: str,
        history: List[dict] = None,
        session_id=0,
        **kwargs,
    ):
        message = [self.user_input_template.format(question=question, topic=topic)]
        if history and self.user_context_template:
            message = [self.user_context_template.format_map(item) for item in history] + message
        message = "\n".join(message)
        return super().forward(message, session_id=session_id, **kwargs)


class AsyncSearcherAgent(AsyncStreamingAgentForInternLM):
    def __init__(
        self,
        user_input_template: str = "{question}",
        user_context_template: str = None,
        **kwargs,
    ):
        self.user_input_template = user_input_template
        self.user_context_template = user_context_template
        super().__init__(**kwargs)

    async def forward(
        self,
        question: str,
        topic: str,
        history: List[dict] = None,
        session_id=0,
        **kwargs,
    ):
        message = [self.user_input_template.format(question=question, topic=topic)]
        if history and self.user_context_template:
            message = [self.user_context_template.format_map(item) for item in history] + message
        message = "\n".join(message)
        async for message in super().forward(message, session_id=session_id, **kwargs):
            yield message


class WebSearchGraph:
    is_async = False
    SEARCHER_CONFIG = {}
    _SEARCHER_LOOP = []
    _SEARCHER_THREAD = []

    def __init__(self):
        self.nodes: Dict[str, Dict[str, str]] = {}
        self.adjacency_list: Dict[str, List[dict]] = defaultdict(list)
        self.future_to_query = dict()
        self.searcher_resp_queue = queue.Queue()
        self.executor = ThreadPoolExecutor(max_workers=10)
        self.n_active_tasks = 0

    def add_root_node(
        self,
        node_content: str,
        node_name: str = "root",
    ):
        """添加起始节点

        Args:
            node_content (str): 节点内容
            node_name (str, optional): 节点名称. Defaults to 'root'.

        """
        self.nodes[node_name] = dict(content=node_content, type="root")
        self.adjacency_list[node_name] = []

    def add_node(
        self,
        node_name: str,
        node_content: str,
    ):
        """添加搜索子问题节点

        Args:
            node_name (str): 节点名称
            node_content (str): 子问题内容

        Returns:
            str: 返回搜索结果
        """
        self.nodes[node_name] = dict(content=node_content, type="searcher")
        self.adjacency_list[node_name] = []

        parent_nodes = []
        for start_node, adj in self.adjacency_list.items():
            for neighbor in adj:
                if (
                    node_name == neighbor
                    and start_node in self.nodes
                    and "response" in self.nodes[start_node]
                ):
                    parent_nodes.append(self.nodes[start_node])
        parent_response = [
            dict(question=node["content"], answer=node["response"]) for node in parent_nodes
        ]

        if self.is_async:

            async def _async_search_node_stream():
                cfg = {
                    **self.SEARCHER_CONFIG,
                    "plugins": deepcopy(self.SEARCHER_CONFIG.get("plugins")),
                }
                agent, session_id = AsyncSearcherAgent(**cfg), random.randint(0, 999999)
                searcher_message = AgentMessage(sender="SearcherAgent", content="")
                try:
                    async for searcher_message in agent(
                        question=node_content,
                        topic=self.nodes["root"]["content"],
                        history=parent_response,
                        session_id=session_id,
                    ):
                        self.nodes[node_name]["response"] = searcher_message.model_dump()
                        self.nodes[node_name]["memory"] = agent.state_dict(session_id=session_id)
                        self.nodes[node_name]["session_id"] = session_id
                        self.searcher_resp_queue.put((node_name, self.nodes[node_name], []))
                    self.searcher_resp_queue.put((None, None, None))
                except Exception as exc:
                    self.searcher_resp_queue.put((exc, None, None))

            self.future_to_query[
                asyncio.run_coroutine_threadsafe(
                    _async_search_node_stream(), random.choice(self._SEARCHER_LOOP)
                )
            ] = f"{node_name}-{node_content}"
            # self.future_to_query[
            #     self.executor.submit(asyncio.run, _async_search_node_stream())
            # ] = f"{node_name}-{node_content}"
        else:

            def _search_node_stream():
                cfg = {
                    **self.SEARCHER_CONFIG,
                    "plugins": deepcopy(self.SEARCHER_CONFIG.get("plugins")),
                }
                agent, session_id = SearcherAgent(**cfg), random.randint(0, 999999)
                searcher_message = AgentMessage(sender="SearcherAgent", content="")
                try:
                    for searcher_message in agent(
                        question=node_content,
                        topic=self.nodes["root"]["content"],
                        history=parent_response,
                        session_id=session_id,
                    ):
                        self.nodes[node_name]["response"] = searcher_message.model_dump()
                        self.nodes[node_name]["memory"] = agent.state_dict(session_id=session_id)
                        self.nodes[node_name]["session_id"] = session_id
                        self.searcher_resp_queue.put((node_name, self.nodes[node_name], []))
                    self.searcher_resp_queue.put((None, None, None))
                except Exception as exc:
                    self.searcher_resp_queue.put((exc, None, None))

            self.future_to_query[
                self.executor.submit(_search_node_stream)
            ] = f"{node_name}-{node_content}"

        self.n_active_tasks += 1

    def add_response_node(self, node_name="response"):
        """添加回复节点

        Args:
            thought (str): 思考过程
            node_name (str, optional): 节点名称. Defaults to 'response'.

        """
        self.nodes[node_name] = dict(type="end")
        self.searcher_resp_queue.put((node_name, self.nodes[node_name], []))

    def add_edge(self, start_node: str, end_node: str):
        """添加边

        Args:
            start_node (str): 起始节点名称
            end_node (str): 结束节点名称
        """
        self.adjacency_list[start_node].append(dict(id=str(uuid.uuid4()), name=end_node, state=2))
        self.searcher_resp_queue.put(
            (start_node, self.nodes[start_node], self.adjacency_list[start_node])
        )

    def reset(self):
        self.nodes = {}
        self.adjacency_list = defaultdict(list)

    def node(self, node_name: str) -> str:
        return self.nodes[node_name].copy()

    @classmethod
    def start_loop(cls, n: int = 32):
        if not cls.is_async:
            raise RuntimeError("Event loop cannot be launched as `is_async` is disabled")

        assert len(cls._SEARCHER_LOOP) == len(cls._SEARCHER_THREAD)
        for i, (loop, thread) in enumerate(
            zip(cls._SEARCHER_LOOP.copy(), cls._SEARCHER_THREAD.copy())
        ):
            if not (loop.is_running() and thread.is_alive()):
                cls._SEARCHER_LOOP.pop(i)
                cls._SEARCHER_THREAD.pop(i)

        while len(cls._SEARCHER_THREAD) < n:

            def _start_loop():
                loop = asyncio.new_event_loop()
                asyncio.set_event_loop(loop)
                cls._SEARCHER_LOOP.append(loop)
                loop.run_forever()

            thread = Thread(target=_start_loop, daemon=True)
            thread.start()
            cls._SEARCHER_THREAD.append(thread)


class ExecutionAction(BaseAction):
    """Tool used by MindSearch planner to execute graph node query."""

    def run(self, command, local_dict, global_dict, stream_graph=False):
        def extract_code(text: str) -> str:
            text = re.sub(r"from ([\w.]+) import WebSearchGraph", "", text)
            triple_match = re.search(r"```[^\n]*\n(.+?)```", text, re.DOTALL)
            single_match = re.search(r"`([^`]*)`", text, re.DOTALL)
            if triple_match:
                return triple_match.group(1)
            elif single_match:
                return single_match.group(1)
            return text

        command = extract_code(command)
        exec(command, global_dict, local_dict)

        # 匹配所有 graph.node 中的内容
        node_list = re.findall(r"graph.node\((.*?)\)", command)
        graph: WebSearchGraph = local_dict["graph"]
        while graph.n_active_tasks:
            while not graph.searcher_resp_queue.empty():
                node_name, _, _ = graph.searcher_resp_queue.get(timeout=60)
                if isinstance(node_name, Exception):
                    raise node_name
                if node_name is None:
                    graph.n_active_tasks -= 1
                    continue
                if stream_graph:
                    for neighbors in graph.adjacency_list.values():
                        for neighbor in neighbors:
                            # state  1进行中，2未开始，3已结束
                            if not (
                                neighbor["name"] in graph.nodes
                                and "response" in graph.nodes[neighbor["name"]]
                            ):
                                neighbor["state"] = 2
                            elif (
                                graph.nodes[neighbor["name"]]["response"]["stream_state"]
                                == AgentStatusCode.END
                            ):
                                neighbor["state"] = 3
                            else:
                                neighbor["state"] = 1
                    if all(
                        "response" in node
                        for name, node in graph.nodes.items()
                        if name not in ["root", "response"]
                    ):
                        yield AgentMessage(
                            sender=self.name,
                            content=dict(current_node=node_name),
                            formatted=dict(
                                node=deepcopy(graph.nodes),
                                adjacency_list=deepcopy(graph.adjacency_list),
                            ),
                            stream_state=AgentStatusCode.STREAM_ING,
                        )
        res = [graph.nodes[node.strip().strip('"').strip("'")] for node in node_list]
        return res, graph.nodes, graph.adjacency_list
