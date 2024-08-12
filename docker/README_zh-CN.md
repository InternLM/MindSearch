# MindSearch Docker Compose 使用指南

## 🚀 使用 Docker Compose 快速启动

MindSearch 现在支持使用 Docker Compose 进行快速部署和启动。这种方法简化了环境配置过程，使您能够轻松运行整个系统。

### 前提条件

- 安装 Docker（Docker Compose V2 已集成到 Docker 中）
- NVIDIA GPU 和 NVIDIA Container Toolkit（对于 NVIDIA GPU 支持是必需的）

注意：较新版本的 Docker 已经整合了 Docker Compose V2，因此您可以直接使用 `docker compose` 命令，无需单独安装 docker-compose。

### 首次启动

在项目根目录下执行以下命令：

```bash
cd docker
docker compose up --build -d
```

这将构建必要的 Docker 镜像并在后台启动服务。

### 日常使用

启动服务：

```bash
cd docker
docker compose up -d
```

查看运行中的服务：

```bash
docker ps
```

停止服务：

```bash
docker compose down
```

### 配置说明

1. **环境变量设置**：
   系统会自动从您的环境中读取以下变量并传递给容器：

   - `OPENAI_API_KEY`：您的 OpenAI API 密钥（使用 GPT 模型时需要）
   - `OPENAI_API_BASE`：OpenAI API 的基础 URL（默认为 https://api.openai.com/v1）
   - `LANG`：设置语言，如 'en' 或 'zh'
   - `MODEL_FORMAT`：设置模型格式，如 'gpt4' 或 'internlm_server'

   您可以在运行 Docker Compose 命令前设置这些变量，例如：

   ```bash
   export OPENAI_API_KEY=your_api_key_here
   export OPENAI_API_BASE=https://your-custom-endpoint.com/v1
   export LANG=en
   export MODEL_FORMAT=gpt4
   docker compose up -d
   ```

2. **模型缓存**：
   容器会映射 `/root/.cache:/root/.cache` 路径。如果您使用本地运行大模型模式（`internlm_server`），模型文件将下载到此目录。如需更改存储位置，请修改 docker-compose.yaml 中的相应配置。

3. **GPU 支持**：
   当前配置默认使用 NVIDIA GPU。对于其他 GPU 类型（如 AMD 或 Apple M 系列），请参考 docker-compose.yaml 中的注释进行相应调整。

4. **服务端口**：
   默认 API 服务地址为 `http://0.0.0.0:8002`。如需更改，请修改 docker-compose.yaml 中的相应配置。

### 注意事项

- 首次运行时，根据您选择的模型和网络状况，可能需要一些时间来下载必要的模型文件。
- 确保您有足够的磁盘空间来存储模型文件和 Docker 镜像。
- 如果遇到权限问题，可能需要使用 sudo 运行 Docker 命令。

### 跨域访问注意事项

在访问前端时，需要特别注意避免跨域问题。目前的 Docker Compose 配置是项目的一个起点，但还没有完全解决所有生产环境中可能遇到的跨域问题。请注意以下几点：

1. **API 服务地址一致性**：
   确保 API 服务地址与您访问前端的服务地址保持一致。例如：
   - 本地部署时：使用 `0.0.0.0` 或 `127.0.0.1`
   - 局域网或公网部署时：使用相同的 IP 地址或域名

2. **当前限制**：
   目前的配置主要适用于开发和测试环境。在某些部署场景下，您可能仍会遇到跨域问题。

3. **未来改进**：
   为了提高系统的鲁棒性和适应更多的部署场景，我们计划在未来的版本中进行以下改进：
   - 修改服务端代码以适当配置 CORS（跨源资源共享）
   - 调整客户端代码以更灵活地处理 API 请求
   - 考虑引入反向代理方案

4. **临时解决方案**：
   在我们实现这些改进之前，如果您在特定环境中遇到跨域问题，可以考虑使用浏览器插件暂时禁用跨域限制（仅用于测试），或者使用简单的反向代理服务器。

5. **Docker 环境中的设置**：
   在 `docker-compose.yaml` 文件中，确保 `API_URL` 环境变量设置正确，例如：
   ```yaml
   environment:
     - API_URL=http://your-server-address:8002
   ```

我们感谢您的理解和耐心。MindSearch 仍处于早期阶段，我们正在努力改进系统的各个方面。您的反馈对我们非常重要，它帮助我们不断完善项目。如果您在使用过程中遇到任何问题或有任何建议，请随时向我们反馈。

通过使用 Docker Compose，您可以快速部署 MindSearch，而无需担心复杂的环境配置。这种方法特别适合快速测试和开发环境部署。如果您在部署过程中遇到任何问题，请查阅我们的故障排除指南或寻求社区支持。