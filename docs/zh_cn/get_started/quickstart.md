# 快速上手

借助 Lagent 仅需几行代码就能构建大语言模型智能体。

## GPT-3.5 驱动的 ReWOO 智能体

下面是使用 GPT-3.5 运行 ReWOO 的示例

```python
# 从 Lagent 导入必要的模块和类
from lagent.agents import ReWOO
from lagent.actions import ActionExecutor, GoogleSearch
from lagent.llms import GPTAPI

# 初始化 LLM，你可能需要提供 API 密钥
llm = GPTAPI(model_type='gpt-3.5-turbo', key=['Your OPENAI_API_KEY'])

# 初始化 Goolge 搜索工具，你可能需要提供 API 密钥
search_tool = GoogleSearch(api_key='Your SERPER_API_KEY')

# 配置 ReWOO 智能体，创建聊天机器人
chatbot = ReWOO(
    llm=llm,  # 大语言模型实例
    action_executor=ActionExecutor(
        actions=[search_tool]  # 指定智能体可以调用的工具
    ),
)

# 询问问题并获取回复
response = chatbot.chat('What profession does Nicholas Ray and Elia Kazan have in common')

# 打印回复
print(response.response)
```

```python
>>> Film director.
```

## InterLM 驱动的 ReAct 智能体

注意，如果你想使用 HuggingFace 模型，请先运行 `pip install -e .[all]`

```python
# 从 Lagent 导入必要的模块和类
from lagent.agents import ReAct
from lagent.actions import ActionExecutor, GoogleSearch, PythonInterpreter
from lagent.llms import HFTransformer

from lagent.llms.meta_template import INTERNLM2_META as META

# 初始化 HFTransformer 模型
llm = HFTransformer(path='internlm/internlm2-chat-7b', meta_template=META)

# 初始化 Goolge 搜索工具，你可能需要提供 API 密钥
search_tool = GoogleSearch(api_key='Your SERPER_API_KEY')

# 初始化 Python 代码解释其
python_interpreter = PythonInterpreter()

# 配置 ReAct 智能体，创建聊天机器人
chatbot = ReAct(
    llm=llm,  # 大语言模型实例
    action_executor=ActionExecutor(
        actions=[search_tool, python_interpreter]),  # 指定智能体可以调用的工具
)
# 询问LaTeX格式的数学问题
response = chatbot.chat('若$z=-1+\sqrt{3}i$,则$\frac{z}{{z\overline{z}-1}}=\left(\ \ \right)$')

# 打印回复
print(response.response)
```

```python
>>> $-\\frac{1}{3}+\\frac{{\\sqrt{3}}}{3}i$
```

## 启动 ReAct 网页 App

```python
# 你需要先安装 streamlit
# pip install streamlit
streamlit run examples/react_web_demo.py
```

然后你可以通过下图所示UI界面进行对话
![image](https://github.com/InternLM/lagent/assets/24622904/3aebb8b4-07d1-42a2-9da3-46080c556f68)
