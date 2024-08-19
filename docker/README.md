# MindSearch Docker Compose User Guide

English | [简体中文](README_zh-CN.md)

## 🚀 Quick Start with Docker Compose

MindSearch now supports quick deployment and startup using Docker Compose. This method simplifies the environment configuration process, allowing you to easily run the entire system.

### Prerequisites

- Docker (Docker Compose V2 is integrated into Docker)
- NVIDIA GPU and NVIDIA Container Toolkit (required for NVIDIA GPU support)

Note: Newer versions of Docker have integrated Docker Compose V2, so you can use the `docker compose` command directly without a separate installation of docker-compose.

### Usage Instructions

All commands should be executed in the `mindsearch/docker` directory.

#### First-time Startup

```bash
docker compose up --build -d
```

#### Daily Use

Start services:

```bash
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

#### Major Version Updates

Rebuild images after a major update:

```bash
docker compose build --no-cache
docker compose up -d
```

### Configuration Details

1. **Environment Variables**:
   The system automatically reads the following variables from your environment:

   - `OPENAI_API_KEY`: Your OpenAI API key
   - `OPENAI_API_BASE`: OpenAI API base URL (default: https://api.openai.com/v1)
   - `LANG`: Language setting ('en' or 'cn')
   - `MODEL_FORMAT`: Model format ('gpt4' or 'internlm_server')

   Example setup:

   Using local internlm2.5-7b-chat model:

   ```bash
   export LANG=cn
   export MODEL_FORMAT=internlm_server
   docker compose up -d
   ```

   Using OpenAI's API:

   ```bash
   export OPENAI_API_KEY=your_api_key_here
   export LANG=en
   export MODEL_FORMAT=gpt4
   docker compose up -d
   ```

   Using SiliconFlow's cloud LLM service:

   ```bash
   export SILICON_API_KEY=your_api_key_here
   export LANG=en
   export MODEL_FORMAT=internlm_silicon
   docker compose up -d
   ```

2. **Model Cache**:
   The container maps the `/root/.cache:/root/.cache` path to store model files.

3. **GPU Support**:
   The default configuration uses NVIDIA GPUs. For other GPU types, please refer to the comments in docker-compose.yaml.

4. **Service Access**:
   In the Docker Compose environment, the frontend container can directly access the backend service via `http://backend:8002`.

5. **Backend Server Address Configuration**:
   Currently, the method for changing the backend server address is temporary. We use a sed command in the Dockerfile to modify the vite.config.ts file to replace the server proxy address. This method is effective in the development environment but not suitable for production.

### Important Notes

- The first run may take some time to download necessary model files, depending on your chosen model and network conditions.
- Ensure you have sufficient disk space to store model files and Docker images.
- If you encounter permission issues, you may need to use sudo to run Docker commands.

### Cross-Origin Access Note

In the current version, we temporarily solve the cross-origin access issue by using Vite's development mode in the frontend Docker container:

1. The frontend Dockerfile uses the `npm start` command to start the Vite development server.
2. In the `vite.config.ts` file, we configure proxy settings to forward requests for the `/solve` path to the backend service.

Please note:

- This method is effective in the development environment but not suitable for production use.
- We plan to implement a more robust cross-origin solution suitable for production environments in future versions.
- If you plan to deploy this project in a production environment, you may need to consider other cross-origin handling methods, such as configuring backend CORS policies or using a reverse proxy server.

### Conclusion

We appreciate your understanding and patience. MindSearch is still in its early stages, and we are working hard to improve various aspects of the system. Your feedback is very important to us as it helps us continuously refine the project. If you encounter any issues or have any suggestions during use, please feel free to provide feedback.

By using Docker Compose, you can quickly deploy MindSearch without worrying about complex environment configurations. This method is particularly suitable for rapid testing and development environment deployment. If you encounter any problems during deployment, please refer to our troubleshooting guide or seek community support.
