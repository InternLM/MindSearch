<div id="top"></div>

<div align="center">

<img src="assets/logo.svg" style="width: 50%; height: auto;">

[🌐 Project Page](https://mindsearch.netlify.app/) | [📃 Paper](<>) | [💻 Playground](https://mindsearch.openxlab.org.cn/)

[English](README.md) | 简体中文

https://github.com/user-attachments/assets/0e5bdfa1-dad9-4f17-968d-2b812e64bf15

</div>
</p>

## ✨ MindSearch: Mimicking Human Minds Elicits Deep AI Searcher

MindSearch 是一个开源的 AI 搜索引擎框架，具有与 Perplexity.ai Pro 相同的性能。您可以轻松部署它来构建您自己的搜索引擎，可以使用闭源 LLM（如 GPT、Claude）或开源 LLM（如 InternLM2.5-7b-chat）。其拥有以下特性：

- 🤔 **任何想知道的问题**：MindSearch 通过搜索解决你在生活中遇到的各种问题
- 📚 **深度知识探索**：MindSearch 通过数百网页的浏览，提供更广泛、深层次的答案
- 🔍 **透明的解决方案路径**：MindSearch 提供了思考路径、搜索关键词等完整的内容，提高回复的可信度和可用性。
- 💻 **多种用户界面**：为用户提供各种接口，包括 React、Gradio、Streamlit 和本地调试。根据需要选择任意类型。
- 🧠 **动态图构建过程**：MindSearch 将用户查询分解为图中的子问题节点，并根据 WebSearcher 的搜索结果逐步扩展图。

<div align="center">

<img src="assets/teaser.gif">

</div>

## ⚡️ MindSearch VS 其他 AI 搜索引擎

在深度、广度和生成响应的准确性三个方面，对 ChatGPT-Web、Perplexity.ai（Pro）和 MindSearch 的表现进行比较。评估结果基于 100 个由人类专家精心设计的现实问题，并由 5 位专家进行评分\*。

<div align="center">
<img src="assets/mindsearch_openset.png" width="90%">
</div>
* 所有实验均在 2024 年 7 月 7 日之前完成。

## ⚽️ 构建您自己的 MindSearch

### 依赖安装

```bash
pip install -r requirements.txt
```

### 启动 MindSearch API

启动 FastAPI 服务器

```bash
python mindsearch/app.py
```

### 启动 MindSearch 前端

提供以下几种前端界面：

- React

```bash
cd frontend/React
npm install
npm start
```

- Gradio

```bash
python frontend/gradio.py
```

- Streamlit

```bash
streamlit run frontend/streamlit.py
```

## 🐞 本地调试

```bash
python mindsearch/terminal.py
```

## 📝 许可证

该项目按照 [Apache 2.0 许可证](LICENSE) 发行。
