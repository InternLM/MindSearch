import asyncio
import json
import logging
from dataclasses import asdict
from typing import Dict, List, Union

import janus
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from lagent.schema import AgentStatusCode
from pydantic import BaseModel
from sse_starlette.sse import EventSourceResponse

from src.agent import init_agent

app = FastAPI(docs_url='/')

app.add_middleware(CORSMiddleware,
                   allow_origins=['*'],
                   allow_credentials=True,
                   allow_methods=['*'],
                   allow_headers=['*'])


class GenerationParams(BaseModel):
    inputs: Union[str, List[Dict]]
    agent_cfg: Dict = dict()


@app.post('/solve')
async def run(request: GenerationParams):

    def convert_adjacency_to_tree(adjacency_input, root_name):

        def build_tree(node_name):
            node = {'name': node_name, 'children': []}
            if node_name in adjacency_input:
                for child in adjacency_input[node_name]:
                    child_node = build_tree(child['name'])
                    child_node['state'] = child['state']
                    child_node['id'] = child['id']
                    node['children'].append(child_node)
            return node

        return build_tree(root_name)

    async def generate():
        try:
            queue = janus.Queue()

            # 使用 run_in_executor 将同步生成器包装成异步生成器
            def sync_generator_wrapper():
                try:
                    for response in agent.stream_chat(inputs):
                        queue.sync_q.put(response)
                except KeyError as e:
                    logging.error(f'KeyError in sync_generator_wrapper: {e}')

            async def async_generator_wrapper():
                loop = asyncio.get_event_loop()
                loop.run_in_executor(None, sync_generator_wrapper)
                while True:
                    response = await queue.async_q.get()
                    yield response
                    if not isinstance(
                            response,
                            tuple) and response.state == AgentStatusCode.END:
                        break

            async for response in async_generator_wrapper():
                if isinstance(response, tuple):
                    agent_return, node_name = response
                else:
                    agent_return = response
                    node_name = None
                adjacency_list = convert_adjacency_to_tree(
                    agent_return.adjacency_list, 'root')
                assert adjacency_list[
                    'name'] == 'root' and 'children' in adjacency_list
                agent_return.adjacency_list = adjacency_list['children']
                response_json = json.dumps(dict(response=asdict(agent_return),
                                                current_node=node_name),
                                           ensure_ascii=False)
                yield {'data': response_json}
                # yield f'data: {response_json}\n\n'
        except Exception as exc:
            msg = 'An error occurred while generating the response.'
            logging.exception(msg)
            response_json = json.dumps(
                dict(error=dict(msg=msg, details=str(exc))),
                ensure_ascii=False)
            yield {'data': response_json}
            # yield f'data: {response_json}\n\n'

    inputs = request.inputs
    agent = init_agent(**request.agent_cfg)
    return EventSourceResponse(generate())


if __name__ == '__main__':
    import uvicorn
    uvicorn.run(app, host='0.0.0.0', port=8002, log_level='info')
