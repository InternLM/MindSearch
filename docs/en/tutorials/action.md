# Action

Actions, also called **tools**, provide a suite of functions LLM-driven agents can use to interact with the real world and perform complex tasks.

## Basic Concepts

### Tool & Toolkit

There are two categories of tools:

- tool: provide only one API to call.
- toolkit: implement multiple APIs that undertake different sub-tasks.

### Tool Description

In Lagent, the tool description is a dictionary containing the action's core information of usage, observed by LLMs for decision-making.

For simple tools, the description can be created as follows

```python
TOOL_DESCRIPTION = {
    'name': 'bold',  # name of the tool
    'description': 'a function used to make text bold',  # introduce the tool's function
    'parameters': [  # a list of parameters the tool take.
        {
            'name': 'text', 'type': 'STRING', 'description': 'input content'
        }
    ],
    'required': ['text'],  # specify names of parameters required
}
```

In some situations there may be optional `return_data`, `parameter_description` keys describing the returns and argument passing format respectively.

```{attention}
`parameter_description` is usually inserted into the tool description automatically by the action's parser. It will be introduced in [Interface Design](#interface-design) .
```

For toolkits, the description is very similar but nest submethods

```python
TOOL_DESCRIPTION = {
    'name': 'PhraseEmphasis',  # name of the toolkit
    'description': 'a toolkit which provides different styles of text emphasis',  # introduce the tool's function
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

## Make Functions Tools

It's not necessary to prepare an extra description for a defined function. In Lagent we provide a decorator `tool_api` which can conveniently turn a function into a tool by automatically parsing the function's typehints and dosctrings to generate the description dictionary and binding it to an attribute `api_description`.

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

Once `returns_named_value` is enabled you should declare the name of the return data, which will be processed to form a new field `return_data`:

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

Sometimes the tool may return a `dict` or `tuple`, and you want to elaborate each member in `return_data` rather than take them as a whole. Set `explode_return=True` and list them in the return part of docstrings.

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
Only Google style Python docstrings is currently supported.
```

## Interface Design

`BaseAction(description=None, parser=JsonParser, enable=True)` is the base class all actions should inherit from. It takes three initialization arguments

- **description**: a tool description dictionary, used set instance attribute `description`. Mostly you don't need explicitly pass this argument since the meta class of `BaseAction` will search methods decorated by `tool_api` and assemble their `api_description` as a class attribute `__tool_description__`, and if the initial `description` is left null, then `__tool_description__` will be copied as `description`.

- **parser**: `BaseParser` class. It will instantialize a parser used to validate the arguments of APIs in `description`.

  For example, `JsonParser` requires arguments passed in the format of JSON or `dict`. To make LLMs aware of this, It inserts a field `parameter_description` into the `description`.

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

- **enable**: specify whether the tool is available.

### Custom Action

A simple tool must have its `run` method implemented, while APIs of toolkits should avoid naming conflicts with this reserved word.

```{tip}
`run` is allowed not to be decorated by `tool_api` for simple tools unless you want to hint the return data.
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

# Inspect the default description
# Bold.__tool_description__, PhraseEmphasis.__tool_description__
```

### Auto-registration

Any subclass of `BaseAction` will be registered automatically. You can use `list_tools()` and `get_tool()` to view all tools and initialize by name.

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

Create a `PhraseEmphasis` object

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

## Tool Calling

### Run a Tool

`__call__` method of `Action` takes two arguments

- `inputs`: It depends on the action's parser. Often a string in specific formats generated by LLMs.
  - `JsonParser`: Allow passing arguments in the format of JSON string or Python `dict`.
  - `TupleParser`: Allow passing arguments in the format of tuple string format or Python `tuple`.
- `name`: Which API to call. Default is `run`.

It returns an `ActionReturn` object which encapsulates calling details

- `args`: Dictionary of action inputs.
- `type`: Action name.
- `result`: List of dicts. Each contains two keys: 'type' and 'content'. when errors occur, it is `None`.
- `errmsg`: Error message. Default is `None`.

Below is an example

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

### Dynamic Invocation

Lagent provides an `ActionExecutor` to manage multiple tools. It will flatten `api_list` of toolkits and rename each `{tool_name}.{api_name}`.

```python
from lagent import ActionExecutor, ArxivSearch, IPythonInterpreter

executor = ActionExecutor(actions=[ArxivSearch(), IPythonInterpreter()])
executor.get_actions_info()  # This information is fed to LLMs as the tool meta prompt
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

Trigger an action through the executor

```python
ret = executor('IPythonInterpreter', '{"command": "import math;math.sqrt(100)"}')
ret.result
```

```python
[{'type': 'text', 'content': '10.0'}]
```
