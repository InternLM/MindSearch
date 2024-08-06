## 🚀 Quick Start with Docker Compose

MindSearch now supports quick deployment and startup using Docker Compose. This method simplifies the environment configuration process, allowing you to easily run the entire system.

### Prerequisites

- Docker installed (Docker Compose V2 is integrated into Docker)
- NVIDIA GPU and NVIDIA Container Toolkit (required for NVIDIA GPU support)

Note: Recent versions of Docker have integrated Docker Compose V2, so you can use the `docker compose` command directly without installing docker-compose separately.

### First-time Startup

Execute the following commands in the project root directory:

```bash
cd docker
docker compose up --build -d
```

This will build the necessary Docker images and start the services in the background.

### Daily Usage

Start services:

```bash
cd docker
docker compose up -d
```

View running services:

```bash
docker ps
```

Stop services:

```bash
docker compose down
```

### Configuration Guide

1. **Environment Variables**:
   The system automatically reads and passes the following variables from your environment to the containers:

   - `OPENAI_API_KEY`: Your OpenAI API key (required when using GPT models)
   - `OPENAI_API_BASE`: Base URL for OpenAI API (default is https://api.openai.com/v1)
   - `LANG`: Set language, e.g., 'en' or 'zh'
   - `MODEL_FORMAT`: Set model format, e.g., 'gpt4' or 'internlm_server'

   You can set these variables before running the Docker Compose command, for example:

   ```bash
   export OPENAI_API_KEY=your_api_key_here
   export OPENAI_API_BASE=https://your-custom-endpoint.com/v1
   export LANG=en
   export MODEL_FORMAT=gpt4
   docker compose up -d
   ```

2. **Model Cache**:
   The container maps the `/root/.cache:/root/.cache` path. If you use the local large model mode (`internlm_server`), model files will be downloaded to this directory. To change the storage location, modify the corresponding configuration in docker-compose.yaml.

3. **GPU Support**:
   The current configuration is set up for NVIDIA GPUs by default. For other GPU types (such as AMD or Apple M series), please refer to the comments in docker-compose.yaml for appropriate adjustments.

4. **Service Ports**:
   The default API service address is `http://0.0.0.0:8002`. To change this, modify the corresponding configuration in docker-compose.yaml.

### Important Notes

- During the first run, depending on your chosen model and network conditions, it may take some time to download the necessary model files.
- Ensure you have sufficient disk space to store the model files and Docker images.
- If you encounter permission issues, you may need to use sudo to run Docker commands.

By using Docker Compose, you can quickly deploy MindSearch without worrying about complex environment configurations. This method is particularly suitable for rapid testing and production environment deployment.
