FROM continuumio/miniconda3

ARG OPENAI_API_KEY
ENV OPENAI_API_KEY=${OPENAI_API_KEY}

ARG BING_API_KEY
ENV BING_API_KEY=${BING_API_KEY}

# 设置环境变量
ENV PATH=/opt/conda/bin:$PATH

# 克隆git仓库
RUN git clone https://github.com/InternLM/MindSearch.git /app

WORKDIR /app

# 创建并激活 fastapi 环境，并安装依赖包
RUN conda create --name fastapi python=3.10 -y && \
    conda run -n fastapi pip install -r requirements.txt && \
    conda clean --all -f -y

# 暴露 FastAPI 默认端口
EXPOSE 8000

# 启动 FastAPI 服务
CMD ["conda", "run", "--no-capture-output", "-n", "fastapi", "uvicorn", "mindsearch.app:app", "--host", "0.0.0.0", "--port", "8002"]
