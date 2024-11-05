import asyncio
import json
import logging
import random
from typing import Dict, List, Union

import janus
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.requests import Request
from pydantic import BaseModel, Field
from sse_starlette.sse import EventSourceResponse

from mindsearch.agent import init_agent


def parse_arguments():
    import argparse

    parser = argparse.ArgumentParser(description="MindSearch API")
    parser.add_argument("--host", default="0.0.0.0", type=str, help="Service host")
    parser.add_argument("--port", default=8002, type=int, help="Service port")
    parser.add_argument("--lang", default="cn", type=str, help="Language")
    parser.add_argument("--model_format", default="internlm_server", type=str, help="Model format")
    parser.add_argument("--search_engine", default="BingSearch", type=str, help="Search engine")
    parser.add_argument("--asy", default=False, action="store_true", help="Agent mode")
    return parser.parse_args()


args = parse_arguments()
app = FastAPI(docs_url="/")
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class GenerationParams(BaseModel):
    inputs: Union[str, List[Dict]]
    session_id: int = Field(default_factory=lambda: random.randint(0, 999999))
    agent_cfg: Dict = dict()


def _postprocess_agent_message(message: dict) -> dict:
    content, fmt = message["content"], message["formatted"]
    current_node = content["current_node"] if isinstance(content, dict) else None
    if current_node:
        message["content"] = None
        for key in ["ref2url"]:
            fmt.pop(key, None)
        graph = fmt["node"]
        for key in graph.copy():
            if key != current_node:
                graph.pop(key)
        if current_node not in ["root", "response"]:
            node = graph[current_node]
            for key in ["memory", "session_id"]:
                node.pop(key, None)
            node_fmt = node["response"]["formatted"]
            if isinstance(node_fmt, dict) and "thought" in node_fmt and "action" in node_fmt:
                node["response"]["content"] = None
                node_fmt["thought"] = (
                    node_fmt["thought"] and node_fmt["thought"].split("<|action_start|>")[0]
                )
                if isinstance(node_fmt["action"], str):
                    node_fmt["action"] = node_fmt["action"].split("<|action_end|>")[0]
    else:
        if isinstance(fmt, dict) and "thought" in fmt and "action" in fmt:
            message["content"] = None
            fmt["thought"] = fmt["thought"] and fmt["thought"].split("<|action_start|>")[0]
            if isinstance(fmt["action"], str):
                fmt["action"] = fmt["action"].split("<|action_end|>")[0]
        for key in ["node"]:
            fmt.pop(key, None)
    return dict(current_node=current_node, response=message)


async def run(request: GenerationParams, _request: Request):
    async def generate():
        try:
            queue = janus.Queue()
            stop_event = asyncio.Event()

            # Wrapping a sync generator as an async generator using run_in_executor
            def sync_generator_wrapper():
                try:
                    for response in agent(inputs, session_id=session_id):
                        queue.sync_q.put(response)
                except Exception as e:
                    logging.exception(f"Exception in sync_generator_wrapper: {e}")
                finally:
                    # Notify async_generator_wrapper that the data generation is complete.
                    queue.sync_q.put(None)

            async def async_generator_wrapper():
                loop = asyncio.get_event_loop()
                loop.run_in_executor(None, sync_generator_wrapper)
                while True:
                    response = await queue.async_q.get()
                    if response is None:  # Ensure that all elements are consumed
                        break
                    yield response
                stop_event.set()  # Inform sync_generator_wrapper to stop

            async for message in async_generator_wrapper():
                response_json = json.dumps(
                    _postprocess_agent_message(message.model_dump()),
                    ensure_ascii=False,
                )
                yield {"data": response_json}
                if await _request.is_disconnected():
                    break
        except Exception as exc:
            msg = "An error occurred while generating the response."
            logging.exception(msg)
            response_json = json.dumps(
                dict(error=dict(msg=msg, details=str(exc))), ensure_ascii=False
            )
            yield {"data": response_json}
        finally:
            await stop_event.wait()  # Waiting for async_generator_wrapper to stop
            queue.close()
            await queue.wait_closed()
            agent.agent.memory.memory_map.pop(session_id, None)

    inputs = request.inputs
    session_id = request.session_id
    agent = init_agent(
        lang=args.lang,
        model_format=args.model_format,
        search_engine=args.search_engine,
    )
    return EventSourceResponse(generate(), ping=300)


async def run_async(request: GenerationParams, _request: Request):
    async def generate():
        try:
            async for message in agent(inputs, session_id=session_id):
                response_json = json.dumps(
                    _postprocess_agent_message(message.model_dump()),
                    ensure_ascii=False,
                )
                yield {"data": response_json}
                if await _request.is_disconnected():
                    break
        except Exception as exc:
            msg = "An error occurred while generating the response."
            logging.exception(msg)
            response_json = json.dumps(
                dict(error=dict(msg=msg, details=str(exc))), ensure_ascii=False
            )
            yield {"data": response_json}
        finally:
            agent.agent.memory.memory_map.pop(session_id, None)

    inputs = request.inputs
    session_id = request.session_id
    agent = init_agent(
        lang=args.lang,
        model_format=args.model_format,
        search_engine=args.search_engine,
        use_async=True,
    )
    return EventSourceResponse(generate(), ping=300)


app.add_api_route("/solve", run_async if args.asy else run, methods=["POST"])

if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host=args.host, port=args.port, log_level="info")
