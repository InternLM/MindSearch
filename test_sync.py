import os
import random
import sys
import time
from concurrent.futures import ThreadPoolExecutor, wait

sys.path.insert(0, os.path.dirname(__file__))

from mindsearch.agent import init_agent

agent = init_agent()
queries = [
    '上海今天穿什么衣服合适',
    '房屋养老金是骗局吗',
    '世预赛国足对日本、沙特结果如何，反映了什么问题',
    '如何看待近期江苏师范大学食堂争斗事件',
    'GPT-o1相较前作有哪些重大革新',
]


def process(q, sid):
    for _ in agent(q, session_id=sid):
        pass
    print(f'Session {sid} complete')


def main():
    samples = queries + [q + '?' for q in queries] + [
        q + "？" for q in queries
    ] + [q + '.' for q in queries] + [q + '。' for q in queries]
    random.shuffle(samples)
    tic = time.time()
    executor = ThreadPoolExecutor()
    tasks = [
        executor.submit(process, sample, i) for i, sample in enumerate(samples)
    ]
    wait(tasks)
    print(f'time elapsed: {time.time() - tic}')


if __name__ == "__main__":
    main()
