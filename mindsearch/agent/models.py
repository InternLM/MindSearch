import os

from lagent.llms import (SENSENOVA_API, GPTAPI, INTERNLM2_META, HFTransformerCasualLM,
                         LMDeployClient, LMDeployServer)

internlm_server = dict(type=LMDeployServer,
                       path='internlm/internlm2_5-7b-chat',
                       model_name='internlm2',
                       meta_template=INTERNLM2_META,
                       top_p=0.8,
                       top_k=1,
                       temperature=0,
                       max_new_tokens=8192,
                       repetition_penalty=1.02,
                       stop_words=['<|im_end|>'])

internlm_client = dict(type=LMDeployClient,
                       model_name='internlm2_5-7b-chat',
                       url='http://127.0.0.1:23333',
                       meta_template=INTERNLM2_META,
                       top_p=0.8,
                       top_k=1,
                       temperature=0,
                       max_new_tokens=8192,
                       repetition_penalty=1.02,
                       stop_words=['<|im_end|>'])

internlm_hf = dict(type=HFTransformerCasualLM,
                   path='internlm/internlm2_5-7b-chat',
                   meta_template=INTERNLM2_META,
                   top_p=0.8,
                   top_k=None,
                   temperature=1e-6,
                   max_new_tokens=8192,
                   repetition_penalty=1.02,
                   stop_words=['<|im_end|>'])
# openai_api_base needs to fill in the complete chat api address, such as: https://api.openai.com/v1/chat/completions
gpt4 = dict(type=GPTAPI,
            model_type='gpt-4o-mini',
            key=os.environ.get('OPENAI_API_KEY', 'YOUR OPENAI API KEY'),
            openai_api_base=os.environ.get('OPENAI_API_BASE', 'https://api.openai.com/v1/chat/completions'),
            max_new_tokens=24576,
            )

# First, apply for SenseNova's ak and sk from SenseTime staff
# Then, generated SENSENOVA_API_KEY using lagent.utils.gen_key.auto_gen_jwt_token(ak, sk) here
# https://github.com/InternLM/lagent/blob/ffc4ca71b4bcdbfb3a69bc0dccfa2dcc584a474d/lagent/utils/gen_key.py#L23

# If you want to switch to the locally deployed SenseNova model, you need to add the model name and context-window-length here
# https://github.com/winer632/lagent/blob/a5284a9af4c373a3ac666c51d6cef6de1e1de509/lagent/llms/sensenova.py#L21
# You also need to change the SENSENOVA_API_BASE environment variable to the API address of the local inference framework
sensenova = dict(type=SENSENOVA_API,
            model_type='SenseChat-5',
            key=os.environ.get('SENSENOVA_API_KEY', 'YOUR SENSENOVA API KEY'),
            sensenova_api_base=os.environ.get('SENSENOVA_API_BASE', 'https://api.sensenova.cn/v1/llm/chat-completions'),
            max_new_tokens=24576,
            )

url = 'https://dashscope.aliyuncs.com/api/v1/services/aigc/text-generation/generation'
qwen = dict(type=GPTAPI,
            model_type='qwen-max-longcontext',
            key=os.environ.get('QWEN_API_KEY', 'YOUR QWEN API KEY'),
            openai_api_base=url,
            meta_template=[
                dict(role='system', api_role='system'),
                dict(role='user', api_role='user'),
                dict(role='assistant', api_role='assistant'),
                dict(role='environment', api_role='system')
            ],
            top_p=0.8,
            top_k=1,
            temperature=0,
            max_new_tokens=4096,
            repetition_penalty=1.02,
            stop_words=['<|im_end|>'])
