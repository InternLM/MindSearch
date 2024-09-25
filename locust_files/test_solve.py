import json
import random
import time

from locust import HttpUser, between, task

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


class MindSearchUser(HttpUser):
    wait_time = between(1, 3)

    @task
    def my_task(self):
        payload = {
            'inputs': random.choice(queries),
            'session_id': random.randint(0, 999999)
        }
        with self.client.post(
                "/solve", json=payload, catch_response=True,
                stream=True) as response:
            is_success = True
            start_perf_counter = time.perf_counter()
            try:
                for _ in streaming(response):
                    pass
            except:
                is_success = False
            response.request_meta['response_time'] += (
                time.perf_counter() - start_perf_counter) * 1000
            if response.status_code == 200 and is_success:
                response.success()
            else:
                error_message = ("Unexpected status code: " +
                                 str(response.status_code)
                                 if response.status_code != 200 else
                                 "Streaming response error")
                response.failure(error_message)
