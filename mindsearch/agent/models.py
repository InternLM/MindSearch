import os

from dotenv import load_dotenv
from lagent.llms import (
  GPTStyleAPI,
    GPTAPI,
    INTERNLM2_META,
    HFTransformerCasualLM,
    LMDeployClient,
    LMDeployServer,
)

internlm_server = dict(
    type=LMDeployServer,
    path="internlm/internlm2_5-7b-chat",
    model_name="internlm2_5-7b-chat",
    meta_template=INTERNLM2_META,
    top_p=0.8,
    top_k=1,
    temperature=0,
    max_new_tokens=8192,
    repetition_penalty=1.02,
    stop_words=["<|im_end|>"],
)

internlm_client = dict(
    type=LMDeployClient,
    model_name="internlm2_5-7b-chat",
    url="http://127.0.0.1:23333",
    meta_template=INTERNLM2_META,
    top_p=0.8,
    top_k=1,
    temperature=0,
    max_new_tokens=8192,
    repetition_penalty=1.02,
    stop_words=["<|im_end|>"],
)

internlm_hf = dict(
    type=HFTransformerCasualLM,
    path="internlm/internlm2_5-7b-chat",
    meta_template=INTERNLM2_META,
    top_p=0.8,
    top_k=None,
    temperature=1e-6,
    max_new_tokens=8192,
    repetition_penalty=1.02,
    stop_words=["<|im_end|>"],
)
# openai_api_base needs to fill in the complete chat api address, such as: https://api.openai.com/v1/chat/completions
gpt4 = dict(
    type=GPTAPI,
    model_type="gpt-4-turbo",
    key=os.environ.get("OPENAI_API_KEY", "YOUR OPENAI API KEY"),
    api_base=os.environ.get("OPENAI_API_BASE",
                            "https://api.openai.com/v1/chat/completions"),
)

api_base = 'http://192.168.26.213:13000/v1/chat/completions' # oneapi
# model_name =  "Baichuan2-Turbo"
model_name ="deepseek-r1-14b"
gptstyle = dict(
    type=GPTStyleAPI,
    model_type=model_name,
    # key=os.environ.get("OPENAI_STYLE_API_KEY", "sk-IXgCTwuoEwxL1CiBE4744688D8094521B70f4aDeE6830c5e"),
    # api_base=os.environ.get("OPENAI_STYLE_API_BASE",api_base),
    key="sk-CZOUavQGNzkkQjZr626908A0011040F8B743C526F315D6Ee",
    api_base=api_base,
)

url = "https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions"
qwen = dict(
    type=GPTAPI,
    model_type="qwen-max-longcontext",
    key=os.environ.get("QWEN_API_KEY", "YOUR QWEN API KEY"),
    api_base=url,
    meta_template=[
        dict(role="system", api_role="system"),
        dict(role="user", api_role="user"),
        dict(role="assistant", api_role="assistant"),
        dict(role="environment", api_role="system"),
    ],
    top_p=0.8,
    top_k=1,
    temperature=0,
    max_new_tokens=4096,
    repetition_penalty=1.02,
    stop_words=["<|im_end|>"],
)

internlm_silicon = dict(
    type=GPTAPI,
    model_type="internlm/internlm2_5-7b-chat",
    key=os.environ.get("SILICON_API_KEY", "YOUR SILICON API KEY"),
    api_base="https://api.siliconflow.cn/v1/chat/completions",
    meta_template=[
        dict(role="system", api_role="system"),
        dict(role="user", api_role="user"),
        dict(role="assistant", api_role="assistant"),
        dict(role="environment", api_role="system"),
    ],
    top_p=0.8,
    top_k=1,
    temperature=0,
    max_new_tokens=8192,
    repetition_penalty=1.02,
    stop_words=["<|im_end|>"],
)
