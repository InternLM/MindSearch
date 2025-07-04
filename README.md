<div id="top"></div>

<div align="center">

<picture>
  <source srcset="assets/logo.svg" media="(prefers-color-scheme: light)">
  <source srcset="assets/logo-darkmode.svg" media="(prefers-color-scheme: dark)">
  <img src="assets/logo.svg" alt="Logo" width="50%">
</picture>

[📃 Paper](https://arxiv.org/abs/2407.20183) | [💻 Demo](https://internlm-chat.intern-ai.org.cn/)

English | [简体中文](README_zh-CN.md)

<https://github.com/user-attachments/assets/44ffe4b9-be26-4b93-a77b-02fed16e33fe>

</div>
</p>

## ✨ MindSearch: Mimicking Human Minds Elicits Deep AI Searcher

## 📅 Changelog

## 📅 Changelog

- 2025/10/20: 🎉 Our paper has been accepted by ICLR 2025! 👉 [[Conference Link](https://iclr.cc/virtual/2025/poster/27772)] 👈
  -  Stay tuned for the latest updates and the full-paper poster!
- 2024/11/05: 🥳 MindSearch is now deployed on Puyu! 👉 [Try it](https://internlm-chat.intern-ai.org.cn/) 👈
  -  Refactored the agent module based on [Lagent v0.5](https://github.com/InternLM/lagent) for better performance in concurrency.
  -  Improved the UI to embody the simultaneous multi-query search.


## ⚽️ Build Your Own MindSearch

### Step1: Dependencies Installation

```bash
git clone https://github.com/InternLM/MindSearch
cd MindSearch
pip install -r requirements.txt
```

### Step2: Setup Environment Variables

Before setting up the API, you need to configure environment variables. Rename the `.env.example` file to `.env` and fill in the required values.

```bash
mv .env.example .env
# Open .env and add your keys and model configurations
```

### Step3: Setup MindSearch API

Setup FastAPI Server.

```bash
python -m mindsearch.app --lang en --model_format internlm_server --search_engine DuckDuckGoSearch --asy 
```

- `--lang`: language of the model, `en` for English and `cn` for Chinese.
- `--model_format`: format of the model.
  - `internlm_server` for InternLM2.5-7b-chat with local server. (InternLM2.5-7b-chat has been better optimized for Chinese.)
  - `gpt4` for GPT4.
    if you want to use other models, please modify [models](./mindsearch/agent/models.py)
- `--search_engine`: Search engine.
  - `DuckDuckGoSearch` for search engine for DuckDuckGo.
  - `BingSearch` for Bing search engine.
  - `BraveSearch` for Brave search web api engine.
  - `GoogleSearch` for Google Serper web search api engine.
  - `TencentSearch` for Tencent search api engine.
  
  Please set your Web Search engine API key as the `WEB_SEARCH_API_KEY` environment variable unless you are using `DuckDuckGo`, or `TencentSearch` that requires secret id as `TENCENT_SEARCH_SECRET_ID` and secret key as `TENCENT_SEARCH_SECRET_KEY`.
- `--asy`: deploy asynchronous agents.

### Step4: Setup MindSearch Frontend

Providing following frontend interfaces,

- React

First configurate the backend URL for Vite proxy.

```bash
HOST="127.0.0.1"  # modify as you need
PORT=8002
sed -i -r "s/target:\s*\"\"/target: \"${HOST}:${PORT}\"/" frontend/React/vite.config.ts
```

```bash
# Install Node.js and npm
# for Ubuntu
sudo apt install nodejs npm

# for windows
# download from https://nodejs.org/zh-cn/download/prebuilt-installer

# Install dependencies

cd frontend/React
npm install
npm start
```

Details can be found in [React](./frontend/React/README.md)

- Gradio

```bash
python frontend/mindsearch_gradio.py
```

- Streamlit

```bash
streamlit run frontend/mindsearch_streamlit.py
```

## 🌐 Change Web Search API

To use a different type of web search API, modify the `searcher_type` attribute in the `searcher_cfg` located in `mindsearch/agent/__init__.py`. Currently supported web search APIs include:

- `GoogleSearch`
- `DuckDuckGoSearch`
- `BraveSearch`
- `BingSearch`
- `TencentSearch`

For example, to change to the Brave Search API, you would configure it as follows:

```python
BingBrowser(
    searcher_type='BraveSearch',
    topk=2,
    api_key=os.environ.get('BRAVE_API_KEY', 'YOUR BRAVE API')
)
```

## 🐞 Using the Backend Without Frontend

For users who prefer to interact with the backend directly, use the `backend_example.py` script. This script demonstrates how to send a query to the backend and process the response.

```bash
python backend_example.py
```

Make sure you have set up the environment variables and the backend is running before executing the script.

## 🐞 Debug Locally

```bash
python -m mindsearch.terminal
```

## 📝 License

This project is released under the [Apache 2.0 license](LICENSE).

## Citation

If you find this project useful in your research, please consider cite:

```
@article{chen2024mindsearch,
  title={MindSearch: Mimicking Human Minds Elicits Deep AI Searcher},
  author={Chen, Zehui and Liu, Kuikun and Wang, Qiuchen and Liu, Jiangning and Zhang, Wenwei and Chen, Kai and Zhao, Feng},
  journal={arXiv preprint arXiv:2407.20183},
  year={2024}
}
```

## Our Projects

Explore our additional research on large language models, focusing on LLM agents.

- [Lagent](https://github.com/InternLM/lagent): A lightweight framework for building LLM-based agents
- [AgentFLAN](https://github.com/InternLM/Agent-FLAN): An innovative approach for constructing and training with high-quality agent datasets (ACL 2024 Findings)
- [T-Eval](https://github.com/open-compass/T-Eval): A Fine-grained tool utilization evaluation benchmark (ACL 2024)
