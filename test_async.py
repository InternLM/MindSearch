import asyncio
import json
import os
import random
import sys
import time
from concurrent.futures import ThreadPoolExecutor, wait

import aiohttp
import requests

sys.path.insert(0, os.path.dirname(__file__))

from mindsearch.agent import init_agent

agent = init_agent(use_async=True)
queries = [
    '上海今天穿什么衣服合适',
    # '苏州和南京天气情况',
    '房屋养老金是骗局吗',
    '世预赛国足对日本、沙特结果如何，反映了什么问题',
    '如何看待近期江苏师范大学食堂争斗事件',
    'GPT-o1相较前作有哪些重大革新',
]


def streaming(raw_response):
    for chunk in raw_response.iter_lines(
            chunk_size=8192, decode_unicode=False, delimiter=b"\n"):
        if chunk:
            decoded = chunk.decode("utf-8")
            if decoded == "\r":
                continue
            if decoded[:6] == "data: ":
                decoded = decoded[6:]
            elif decoded.startswith(": ping - "):
                continue
            response = json.loads(decoded)
            yield (
                response["response"],
                response["current_node"],
                response["node"],
                response["adjacency_list"],
                response["inner_steps"],
            )


async def process(q, sid):
    async for _ in agent(q, session_id=sid):
        await asyncio.sleep(0)
    print(f'Session {sid} complete')
    return await asyncio.sleep(0)


# def process(q, sid):
#     resp = requests.post('http://127.0.0.1:8002/solve', json={'inputs': q})
#     for _ in streaming(resp):
#         print(_[1])
#         # pass
#     print(f'Session {sid} complete')


async def run(inp):
    async with aiohttp.ClientSession(
            timeout=aiohttp.ClientTimeout(3 * 3600)) as session:
        tasks = [process(sample, i, session) for i, sample in enumerate(inp)]
        await asyncio.gather(*tasks)


def main():
    # samples = queries
    samples = queries + [q + '?' for q in queries] + [
        q + "？" for q in queries
    ] + [q + '.' for q in queries] + [q + '。' for q in queries]
    samples *= 2
    # samples = samples[:5]
    random.shuffle(samples)
    # process('你好', 1000000)
    tic = time.time()

    loop = asyncio.new_event_loop()
    asyncio.set_event_loop(loop)
    loop.run_until_complete(
        asyncio.gather(
            *[process(sample, i) for i, sample in enumerate(samples)]))
    # loop.run_until_complete(run(samples))

    # executor = ThreadPoolExecutor()
    # tasks = [
    #     executor.submit(process, sample, i) for i, sample in enumerate(samples)
    # ]
    # wait(tasks)
    print(f'time elapsed: {time.time() - tic}')


if __name__ == "__main__":
    main()
