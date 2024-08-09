# MindSearch Docker Compose User Guide

## 🚀 Quick Start with Docker Compose

MindSearch now supports quick deployment and startup using Docker Compose. This method simplifies the environment configuration process, allowing you to easily run the entire system.

### Prerequisites

- Docker installed (Docker Compose V2 is integrated into Docker)
- NVIDIA GPU and NVIDIA Container Toolkit (required for NVIDIA GPU support)

Note: Newer versions of Docker have integrated Docker Compose V2, so you can directly use the `docker compose` command without installing docker-compose separately.

### First-time Startup

Execute the following commands in the project root directory:

```bash
cd docker
docker compose up --build -d
```

This will build the necessary Docker images and start the services in the background.

### Daily Use

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

### Configuration Instructions

1. **Environment Variable Settings**:
   The system will automatically read the following variables from your environment and pass them to the containers:

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
   The container maps the `/root/.cache:/root/.cache` path. If you use the local large model mode (`internlm_server`), model files will be downloaded to this directory. To change the storage location, please modify the corresponding configuration in docker-compose.yaml.

3. **GPU Support**:
   The current configuration defaults to using NVIDIA GPUs. For other GPU types (such as AMD or Apple M series), please refer to the comments in docker-compose.yaml for appropriate adjustments.

4. **Service Ports**:
   The default API service address is `http://0.0.0.0:8002`. To change this, please modify the corresponding configuration in docker-compose.yaml.

### Notes

- During the first run, depending on your chosen model and network conditions, it may take some time to download the necessary model files.
- Ensure you have sufficient disk space to store model files and Docker images.
- If you encounter permission issues, you may need to use sudo to run Docker commands.

### Cross-Origin Access Considerations

When accessing the frontend, it's important to be aware of potential cross-origin issues. The current Docker Compose configuration is a starting point for the project but doesn't fully resolve all cross-origin problems that might be encountered in a production environment. Please note the following points:

1. **API Service Address Consistency**:
   Ensure that the API service address matches the address you use to access the frontend. For example:

   - For local deployment: Use `0.0.0.0` or `127.0.0.1`
   - For LAN or public network deployment: Use the same IP address or domain name

2. **Current Limitations**:
   The current configuration is primarily suitable for development and testing environments. You may still encounter cross-origin issues in certain deployment scenarios.

3. **Future Improvements**:
   To enhance the system's robustness and adapt to more deployment scenarios, we plan to implement the following improvements in future versions:

   - Modify server-side code to properly configure CORS (Cross-Origin Resource Sharing)
   - Adjust client-side code to handle API requests more flexibly
   - Consider introducing reverse proxy solutions

4. **Temporary Solutions**:
   Before we implement these improvements, if you encounter cross-origin issues in specific environments, you can consider using browser plugins to temporarily disable cross-origin restrictions (for testing purposes only) or using a simple reverse proxy server.

5. **Docker Environment Settings**:
   In the `docker-compose.yaml` file, ensure that the `API_URL` environment variable is set correctly, for example:
   ```yaml
   environment:
     - API_URL=http://your-server-address:8002
   ```

We appreciate your understanding and patience. MindSearch is still in its early stages, and we are working hard to improve various aspects of the system. Your feedback is very important to us as it helps us continually refine the project. If you encounter any issues or have any suggestions during use, please feel free to provide feedback.

By using Docker Compose, you can quickly deploy MindSearch without worrying about complex environment configurations. This method is particularly suitable for rapid testing and development environment deployments. If you encounter any problems during deployment, please refer to our troubleshooting guide or seek community support.
