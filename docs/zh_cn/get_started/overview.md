# 总览

本章节将介绍 Lagent 的架构，并提供 Lagent 详细教程的链接。

## Lagent 是什么

Lagent 是一个开源的 LLM 智能体框架，允许使用者快速将一个大语言模型转换成智能体，并提供一些典型工具来激发大语言模型的潜能。Lagent 框架图如下：

![image](https://github.com/InternLM/lagent/assets/24351120/e104171e-4baf-43b3-8e6d-90cff1b298b6)

Lagent 包含三个主要模块：agents，llms 和 actions。

- **agents** 实现了多种智能体，如 ReAct，AutoGPT。
- **llms** 支持多种大语言模型，包括在 HuggingFace 上托管的开源模型（Llama-2, InterLM）及 GPT3.5/4 等闭源模型。
- **actions** 包含一系列工具，并提供工具执行器来统一管理。

## 如何使用

以下是帮助您了解关于 Lagent 更多信息的详细教程：

1. 安装请参考 [README](https://github.com/InternLM/lagent/blob/main/README.md).

2. 一些构建智能体的实例 [examples](https://github.com/InternLM/lagent/tree/main/examples)，直接运行脚本即可，如 `python examples/react_example.py`.
