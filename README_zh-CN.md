<div id="top"></div>

<div align="center">

<img src="assets/logo.svg" style="width: 50%; height: auto;">

[🌐 Project Page](https://mindsearch.netlify.app/) | [📃 Paper](https://arxiv.org/abs/2407.20183) | [💻 Playground](https://mindsearch.openxlab.org.cn/)

[English](README.md) | 简体中文

<https://github.com/user-attachments/assets/0e5bdfa1-dad9-4f17-968d-2b812e64bf15>

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

### 步骤1: 依赖安装

```bash
pip install -r requirements.txt
```

### 步骤2: 启动 MindSearch API

启动 FastAPI 服务器

```bash
python -m mindsearch.app --lang en --model_format internlm_server
```

- `--lang`: 模型的语言，`en` 为英语，`zh` 为中文。
- `--model_format`: 模型的格式。
  `internlm_server` 为 InternLM2.5-7b-chat 本地服务器。
  `gpt4` 为 GPT4。
  如果您想使用其他模型，请修改 [models](./mindsearch/agent/models.py)

### 步骤3: 启动 MindSearch 前端

提供以下几种前端界面：

- React

```bash
# 安装 Node.js 和 npm
# 对于 Ubuntu
sudo apt install nodejs npm
# 对于 Windows
# 从 https://nodejs.org/zh-cn/download/prebuilt-installer 下载

cd frontend/React
npm install
npm start
```

- Gradio

```bash
python frontend/mindsearch_gradio.py
```

- Streamlit

```bash
streamlit run frontend/mindsearch_streamlit.py
```

## 🐞 本地调试

```bash
python mindsearch/terminal.py
```

## 📝 许可证

该项目按照 [Apache 2.0 许可证](LICENSE) 发行。

## 学术引用

如果此项目对您的研究有帮助，请参考如下方式进行引用：

```
@misc{chen2024mindsearchmimickinghumanminds,
      title={MindSearch: Mimicking Human Minds Elicits Deep AI Searcher},
      author={Zehui Chen and Kuikun Liu and Qiuchen Wang and Jiangning Liu and Wenwei Zhang and Kai Chen and Feng Zhao},
      year={2024},
      eprint={2407.20183},
      archivePrefix={arXiv},
      primaryClass={cs.CL},
      url={https://arxiv.org/abs/2407.20183},
}
```
