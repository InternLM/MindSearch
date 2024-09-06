import json
import logging
import queue
import re
import uuid
from collections import defaultdict
from concurrent.futures import ThreadPoolExecutor
from copy import deepcopy
from typing import Dict, List, Tuple

from lagent.actions import BaseAction
from lagent.schema import AgentMessage, AgentStatusCode, ModelStatusCode
from lagent.utils import GeneratorWithReturn

from .streaming import StreamingAgentForInternLM


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


class WebSearchGraph:
    SEARCHER_CONFIG = {}

    def __init__(self):
        self.nodes: Dict[str, Dict[str, str]] = {}
        self.adjacency_list: Dict[str, List[str]] = defaultdict(list)
        self.executor = ThreadPoolExecutor(max_workers=10)
        self.future_to_query = dict()
        self.searcher_resp_queue = queue.Queue()

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

        def _search_node_stream():
            agent = SearcherAgent(**self.SEARCHER_CONFIG)
            session_id = uuid.uuid4().int
            searcher_message = AgentMessage(sender="SearcherAgent", content="")
            for searcher_message in agent(
                question=node_content,
                topic=self.nodes["root"]["content"],
                history=parent_response,
                session_id=session_id,
            ):
                if isinstance(searcher_message.formatted, dict):
                    searcher_message.formatted["node_content"] = node_content
                # self.nodes[node_name]["inner_step"] = agent.state_dict(session_id=session_id)
                self.nodes[node_name]["inner_steps"] = agent.get_steps(session_id)
                self.nodes[node_name]["session_id"] = session_id
                self.nodes[node_name]["response"] = searcher_message.content
                self.nodes[node_name]["detail"] = searcher_message.model_dump()
                self.searcher_resp_queue.put((node_name, self.nodes[node_name], []))

        self.future_to_query[
            self.executor.submit(_search_node_stream)
        ] = f"{node_name}-{node_content}"

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


class ExecutionAction(BaseAction):
    def run(self, command, local_dict, global_dict, yield_graph=False):
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
        exec(command, local_dict, global_dict)

        # 匹配所有 graph.node 中的内容
        node_list = re.findall(r"graph.node\((.*?)\)", command)
        graph: WebSearchGraph = global_dict["graph"]
        while True:
            if (
                all(task.done() for task in graph.future_to_query)
                and graph.searcher_resp_queue.empty()
            ):
                break
            while not graph.searcher_resp_queue.empty():
                node_name, _, _ = graph.searcher_resp_queue.get(timeout=60)
                if yield_graph:
                    for neighbors in graph.adjacency_list.values():
                        for neighbor in neighbors:
                            if not (
                                neighbor["name"] in graph.nodes
                                and "inner_steps" in graph.nodes[neighbor["name"]]
                            ):
                                neighbor["state"] = 2
                            else:
                                if (
                                    graph.nodes[neighbor["name"]]["detail"]["stream_state"]
                                    == AgentStatusCode.END
                                ):
                                    neighbor["state"] = 3
                                else:
                                    neighbor["state"] = 1
                    if all(
                        "detail" in node
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
                        )
        res = [graph.nodes[node.strip().strip('"').strip("'")] for node in node_list]
        return res, graph.nodes, graph.adjacency_list


class MindSearchAgent(StreamingAgentForInternLM):
    def __init__(
        self,
        searcher_cfg: dict,
        summary_prompt: str,
        finish_condition=lambda m: "add_response_node" in m.content,
        max_turn: int = 10,
        **kwargs,
    ):
        WebSearchGraph.SEARCHER_CONFIG = searcher_cfg
        super().__init__(finish_condition=finish_condition, max_turn=max_turn, **kwargs)
        self.summary_prompt = summary_prompt
        self.action = ExecutionAction()

    def forward(self, message: AgentMessage, session_id=0, **kwargs):
        if isinstance(message, str):
            message = AgentMessage(sender="user", content=message)
        _graph_state = dict(node={}, adjacency_list={}, ref2url={})
        local_dict, global_dict = {}, globals()
        for _ in range(self.max_turn):
            last_agent_state = AgentStatusCode.SESSION_READY
            for message in self.agent(message, session_id=session_id, **kwargs):
                if isinstance(message.formatted, dict) and message.formatted.get("tool_type"):
                    if message.stream_state == ModelStatusCode.END:
                        message.stream_state = last_agent_state + 1
                    else:
                        message.stream_state = (
                            AgentStatusCode.PLUGIN_START
                            if message.formatted["tool_type"] == "plugin"
                            else AgentStatusCode.CODING
                        )
                else:
                    message.stream_state = AgentStatusCode.STREAM_ING
                message.formatted.update(deepcopy(_graph_state))
                yield message
                last_agent_state = message.stream_state
            if message.formatted["tool_type"]:
                gen = GeneratorWithReturn(
                    self.action.run(message.content, local_dict, global_dict, True)
                )
                for graph_exec in gen:
                    graph_exec.formatted["ref2url"] = deepcopy(_graph_state["ref2url"])
                    yield graph_exec

                reference, references_url = self.generate_references_from_graph(gen.ret[1])
                _graph_state.update(
                    node=gen.ret[1], adjacency_list=gen.ret[2], ref2url=references_url
                )
                if self.finish_condition(message):
                    message = AgentMessage(
                        sender="ActionExecutor",
                        content=self.summary_prompt,
                        formatted=deepcopy(_graph_state),
                        stream_state=message.stream_state + 1,  # plugin or code return
                    )
                    # summarize the references to generate the final answer
                    for message in self.agent(message, session_id=session_id, **kwargs):
                        message.formatted.update(deepcopy(_graph_state))
                        yield message
                    return
                message = AgentMessage(
                    sender="ActionExecutor",
                    content=reference,
                    formatted=deepcopy(_graph_state),
                    stream_state=message.stream_state + 1,  # plugin or code return
                )
                yield message
            else:
                message.stream_state = AgentStatusCode.END
                yield message

    def generate_references_from_graph(
        self, graph: Dict[str, dict]
    ) -> Tuple[str, Dict[int, dict]]:
        ptr, references, references_url = 0, [], {}
        for name, data_item in graph.items():
            if name in ["root", "response"]:
                continue
            # only search once at each node, thus the result offset is 2
            assert data_item["inner_steps"][2]["role"] == "environment"
            ref2url = {
                int(k): v for k, v in json.loads(data_item["inner_steps"][2]["content"]).items()
            }
            updata_ref, ref2url, added_ptr = self.update_ref(data_item["response"], ref2url, ptr)
            ptr += added_ptr
            references.append(f'## {data_item["content"]}\n\n{updata_ref}')
            references_url.update(ref2url)
        return "\n\n".join(references), references_url

    @staticmethod
    def update_ref(ref: str, ref2url: Dict[str, str], ptr: int) -> str:
        numbers = list({int(n) for n in re.findall(r"\[\[(\d+)\]\]", ref)})
        numbers = {n: idx + 1 for idx, n in enumerate(numbers)}
        updated_ref = re.sub(
            r"\[\[(\d+)\]\]",
            lambda match: f"[[{numbers[int(match.group(1))] + ptr}]]",
            ref,
        )
        updated_ref2url = {}
        if numbers:
            try:
                assert all(elem in ref2url for elem in numbers)
            except Exception as exc:
                logging.info(f"Illegal reference id: {str(exc)}")
            if ref2url:
                updated_ref2url = {
                    numbers[idx] + ptr: ref2url[idx] for idx in numbers if idx in ref2url
                }
        return updated_ref, updated_ref2url, len(numbers) + 1
