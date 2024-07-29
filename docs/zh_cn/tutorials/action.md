# 动作

动作，也被称为工具，提供了一套LLM驱动的智能体用来与真实世界交互并执行复杂任务的函数。

## 基本概念

### 工具 & 工具包

有两种类型的工具：

- 简单工具: 只提供一个API接口供调用。
- 工具包: 实现多个API接口，承担不同的子任务。

### 工具描述

在Lagent中，工具描述是一个刻画工具调用方式的字典，能够被LLM观察并用于决策。

对于简单工具，描述可按如下格式声明:

```python
TOOL_DESCRIPTION = {
    'name': 'bold',  # 工具名称
    'description': 'a function used to make text bold',  # 介绍工具的功能
    'parameters': [  # 这个工具所需要的参数列表
        {
            'name': 'text', 'type': 'STRING', 'description': 'input content'
        }
    ],
    'required': ['text'],  # 指定必需的参数名
}
```

在某些情况下，可能还包含 `return_data`，`parameter_description` 字段，分别描述返回内容及参数传递格式。

```{attention}
`parameter_description` 通常被动作的解析器自动插入到工具描述中，这部分将在[接口设计](#id6)中进行介绍。
```

对于工具包，描述非常相似，但嵌套了子方法

```python
TOOL_DESCRIPTION = {
    'name': 'PhraseEmphasis',  # 工具包的名字
    'description': 'a toolkit which provides different styles of text emphasis',  # 介绍工具包的功能
    'api_list': [
        {
            'name': 'bold',
            'description': 'make text bold',
            'parameters': [
                {
                    'name': 'text', 'type': 'STRING', 'description': 'input content'
                }
            ],
            'required': ['text']
        },
        {
            'name': 'italic',
            'description': 'make text italic',
            'parameters': [
                {
                    'name': 'text', 'type': 'STRING', 'description': 'input content'
                }
            ],
            'required': ['text']
        }
    ]
}
```

## 将函数转换为工具

对于已定义好的函数，无需人工添加额外的描述。在 Lagent 中，我们提供了一个修饰器 `tool_api`，它可以通过自动解析函数的类型提示和文档字符串来生成描述字典，并将其绑定到属性 `api_description`。

```python
from lagent import tool_api

@tool_api
def bold(text: str) -> str:
    """make text bold

    Args:
        text (str): input text

    Returns:
        str: bold text
    """
    return '**' + text + '**'


bold.api_description
```

```python
{'name': 'bold',
 'description': 'make text bold',
 'parameters': [{'name': 'text',
   'type': 'STRING',
   'description': 'input text'}],
 'required': ['text']}
```

一旦启用 `returns_named_value`，您应当声明返回值的名称，这将被处理成一个新的字段 `return_data`：

```python
@tool_api(returns_named_value=True)
def bold(text: str) -> str:
    """make text bold

    Args:
        text (str): input text

    Returns:
        bold_text (str): bold text
    """
    return '**' + text + '**'

bold.api_description
```

```python
{'name': 'bold',
 'description': 'make text bold',
 'parameters': [{'name': 'text',
   'type': 'STRING',
   'description': 'input text'}],
 'required': ['text'],
 'return_data': [{'name': 'bold_text',
   'description': 'bold text',
   'type': 'STRING'}]}
```

有时工具可能返回一个 `dict` 或 `tuple`，如果你想在 `return_data` 中详细说明每个成员的含义而不是把它们当作一个整体，设置 `explode_return=True` 并在文档字符串的 Returns 部分中罗列它们。

```python
@tool_api(explode_return=True)
def list_args(a: str, b: int, c: float = 0.0) -> dict:
    """Return arguments in dict format

    Args:
        a (str): a
        b (int): b
        c (float): c

    Returns:
        dict: input arguments
            - a (str): a
            - b (int): b
            - c: c
    """
    return {'a': a, 'b': b, 'c': c}
```

```python
{'name': 'list_args',
 'description': 'Return arguments in dict format',
 'parameters': [{'name': 'a', 'type': 'STRING', 'description': 'a'},
  {'name': 'b', 'type': 'NUMBER', 'description': 'b'},
  {'name': 'c', 'type': 'FLOAT', 'description': 'c'}],
 'required': ['a', 'b'],
 'return_data': [{'name': 'a', 'description': 'a', 'type': 'STRING'},
  {'name': 'b', 'description': 'b', 'type': 'NUMBER'},
  {'name': 'c', 'description': 'c'}]}
```

```{warning}
目前仅支持 Google 格式的 Python 文档字符串。
```

## 接口设计

`BaseAction(description=None, parser=JsonParser, enable=True)` 是所有动作应该继承的基类，它接收三个初始化参数：

- **description**：一个工具描述的字典，用于设置实例属性 `description`。通常不需要显式地传递这个参数，因为 `BaseAction` 的元类将查找被 `tool_api` 装饰的方法，并组装它们的 `api_description` 构造一个类属性 `__tool_description__`，如果实例化时 `description` 为空，那么该实例属性将置为 `__tool_description__`。

- **parser**：`BaseParser` 类，用于实例化一个动作解析器校验 `description` 所描述的工具的参数。例如，`JsonParser` 会要求模型在调用工具时传入一个 JSON 格式字符串或者 Python 字典，为了让 LLM 感知到该指令，它会在 `description` 中插入一个 `parameter_description` 字段。

  ```python
  from lagent import BaseAction

  action = BaseAction(
      {
          'name': 'bold',
          'description': 'a function used to make text bold',
          'parameters': [
              {
                  'name': 'text', 'type': 'STRING', 'description': 'input content'
              }
          ],
          'required': ['text']
      }
  )
  action.description
  ```

  ```python
  {'name': 'bold',
   'description': 'a function used to make text bold',
   'parameters': [{'name': 'text',
   'type': 'STRING',
   'description': 'input content'}],
   'required': ['text'],
   'parameter_description': '如果调用该工具，你必须使用Json格式 {key: value} 传参，其中key为参数名称'}
  ```

- **enable**: 指明该动作是否生效。

### 自定义动作

一个简单工具必须实现 `run` 方法，而工具包则应当避免将各子API名称定义为该保留字段。

```{tip}
对于非工具包的 Action，`run` 允许不被 `tool_api` 装饰，除非你想提示返回信息。
```

```python
class Bold(BaseAction):

    def run(self, text: str):
        """make text bold

        Args:
            text (str): input text

        Returns:
            str: bold text
        """
        return '**' + text + '**'

class PhraseEmphasis(BaseAction):
    """a toolkit which provides different styles of text emphasis"""

    @tool_api
    def bold(self, text):
        """make text bold

        Args:
            text (str): input text

        Returns:
            str: bold text
        """
        return '**' + text + '**'

    @tool_api
    def italic(self, text):
        """make text italic

        Args:
            text (str): input text

        Returns:
            str: italic text
        """
        return '*' + text + '*'

# 查看默认工具描述
# Bold.__tool_description__, PhraseEmphasis.__tool_description__
```

### 自动注册

任何 `BaseAction` 的子类都会自动被注册。你可以使用 `list_tools()` 和 `get_tool()` 来查看所有工具类并通过工具名进行初始化。

```python
from lagent import list_tools, get_tool

list_tools()
```

```python
['BaseAction',
 'InvalidAction',
 'NoAction',
 'FinishAction',
 'ArxivSearch',
 'BINGMap',
 'GoogleScholar',
 'GoogleSearch',
 'IPythonInterpreter',
 'PPT',
 'PythonInterpreter',
 'Bold',
 'PhraseEmphasis']
```

创建一个 `PhraseEmphasis` 对象。

```python
action = get_tool('PhraseEmphasis')
action.description
```

```python
{'name': 'PhraseEmphasis',
 'description': 'a toolkit which provides different styles of text emphasis',
 'api_list': [{'name': 'bold',
   'description': 'make text bold',
   'parameters': [{'name': 'text',
     'type': 'STRING',
     'description': 'input text'}],
   'required': ['text'],
   'parameter_description': '如果调用该工具，你必须使用Json格式 {key: value} 传参，其中key为参数名称'},
  {'name': 'italic',
   'description': 'make text italic',
   'parameters': [{'name': 'text',
     'type': 'STRING',
     'description': 'input text'}],
   'required': ['text'],
   'parameter_description': '如果调用该工具，你必须使用Json格式 {key: value} 传参，其中key为参数名称'}]}
```

## 工具调用

### 执行工具

`Action` 的 `__call__` 方法需要传入两个参数

- `inputs`: 其类型与动作绑定的 `BaseParser` 相关，通常是由大语言模型生成的字符串。
  - `JsonParser`: 允许传入 JSON 格式字符串或 Python 字典。
  - `TupleParser`: 允许传入字面量为元组的字符串或 Python 元组。
- `name`: 调用哪个 API，默认为 `run`。

工具会返回一个封装了调用细节的 `ActionReturn` 对象。

- `args`: 一个字典，表示该动作的入参。
- `type`: 动作名称。
- `result`: 以字典为成员的列表，每个字典包含两个键——'type' 和 'content'，发生异常时该字段为 `None`。
- `errmsg`: 错误信息，默认为 `None`。

以下是一个例子：

```python
from lagent import IPythonInterpreter, TupleParser

action1 = IPythonInterpreter()
ret = action1('{"command": "import math;math.sqrt(100)"}')
print(ret.result)
ret = action1({'command': 'import math;math.sqrt(100)'})
print(ret.result)

action2 = IPythonInterpreter(parser=TupleParser)
ret = action2('("import math;math.sqrt(100)", )')
print(ret.result)
ret = action2(('import math;math.sqrt(100)',))
print(ret.result)
```

```python
[{'type': 'text', 'content': '10.0'}]
[{'type': 'text', 'content': '10.0'}]
[{'type': 'text', 'content': '10.0'}]
[{'type': 'text', 'content': '10.0'}]
```

### 动态触发

Lagent 提供 `ActionExecutor` 接口管理多个工具，它会将工具包的 `api_list` 平展并将各 API 更名为 `{tool_name}.{api_name}`。

```python
from lagent import ActionExecutor, ArxivSearch, IPythonInterpreter

executor = ActionExecutor(actions=[ArxivSearch(), IPythonInterpreter()])
executor.get_actions_info()  # 该结果会作为LLM系统提示词的一部分
```

```python
[{'name': 'ArxivSearch.get_arxiv_article_information',
  'description': 'Run Arxiv search and get the article meta information.',
  'parameters': [{'name': 'query',
    'type': 'STRING',
    'description': 'the content of search query'}],
  'required': ['query'],
  'return_data': [{'name': 'content',
    'description': 'a list of 3 arxiv search papers',
    'type': 'STRING'}],
  'parameter_description': '如果调用该工具，你必须使用Json格式 {key: value} 传参，其中key为参数名称'},
 {'name': 'IPythonInterpreter',
  'description': "When you send a message containing Python code to python, it will be executed in a stateful Jupyter notebook environment. python will respond with the output of the execution or time out after 60.0 seconds. The drive at '/mnt/data' can be used to save and persist user files. Internet access for this session is disabled. Do not make external web requests or API calls as they will fail.",
  'parameters': [{'name': 'command',
    'type': 'STRING',
    'description': 'Python code'},
   {'name': 'timeout',
    'type': 'NUMBER',
    'description': 'Upper bound of waiting time for Python script execution.'}],
  'required': ['command'],
  'parameter_description': '如果调用该工具，你必须使用Json格式 {key: value} 传参，其中key为参数名称'}]
```

通过动作执行器来触发一个工具

```python
ret = executor('IPythonInterpreter', '{"command": "import math;math.sqrt(100)"}')
ret.result
```

```python
[{'type': 'text', 'content': '10.0'}]
```
