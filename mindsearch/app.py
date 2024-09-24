import asyncio
import json
import logging
import uuid
from typing import Dict, List, Union

import janus
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
from sse_starlette.sse import EventSourceResponse

from mindsearch.agent import init_agent


def parse_arguments():
    import argparse

    parser = argparse.ArgumentParser(description="MindSearch API")
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
    session_id: int = Field(default_factory=lambda: uuid.uuid4().int)
    agent_cfg: Dict = dict()


async def run(request: GenerationParams):
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
                    dict(
                        response=message.model_dump(),
                        current_node=message.content["current_node"]
                        if isinstance(message.content, dict)
                        else None,
                        memory=agent.state_dict(session_id),
                    ),
                    ensure_ascii=False,
                )
                yield {"data": response_json}
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
    return EventSourceResponse(generate())


async def run_async(request: GenerationParams):
    async def generate():
        try:
            async for message in agent(inputs, session_id=session_id):
                response_json = json.dumps(
                    dict(
                        response=message.model_dump(),
                        current_node=message.content["current_node"]
                        if isinstance(message.content, dict)
                        else None,
                        memory=agent.state_dict(session_id),
                    ),
                    ensure_ascii=False,
                )
                yield {"data": response_json}
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
    return EventSourceResponse(generate())


app.add_api_route("/solve", run_async if args.asy else run, methods=["POST"])

if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=8002, log_level="info")
