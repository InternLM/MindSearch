# Use openmmlab/lmdeploy:latest-cu12 as the base image
# Note: Before using this Dockerfile, you should visit https://hub.docker.com/r/openmmlab/lmdeploy/tags
# to select a base image that's compatible with your specific GPU architecture.
# The 'latest-cu12' tag is used here as an example, but you should choose the most 
# appropriate tag for your setup (e.g., cu11 for CUDA 11, cu12 for CUDA 12, etc.)
FROM openmmlab/lmdeploy:latest-cu12

# Set the working directory
WORKDIR /root

# Install Git
RUN apt-get update && apt-get install -y git && apt-get clean && rm -rf /var/lib/apt/lists/*

# Copy the mindsearch folder to the /root directory of the container
COPY mindsearch /root/mindsearch

# Install specified dependency packages
# Note: lmdeploy dependency is already included in the base image, no need to reinstall
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

RUN pip install --no-cache-dir -U griffe==0.48.0