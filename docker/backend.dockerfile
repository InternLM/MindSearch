# 使用 openmmlab/lmdeploy:test-cu12 作为基础镜像
FROM openmmlab/lmdeploy:test-cu12

# 设置工作目录
WORKDIR /root

# 安装 Git
RUN apt-get update && apt-get install -y git && apt-get clean && rm -rf /var/lib/apt/lists/*

# 复制 mindsearch 文件夹到容器的 /root 目录
COPY mindsearch /root/mindsearch

# 安装指定的依赖包
# 其中lmdeploy依赖已经被基础镜像包含了, 无需重复安装
RUN pip install --no-cache-dir \
    duckduckgo_search==5.3.1b1 \
    einops \
    fastapi \
    gradio \
    janus \
    pyvis \
    sse-starlette \
    termcolor \
    uvicorn \
    git+https://github.com/InternLM/lagent.git