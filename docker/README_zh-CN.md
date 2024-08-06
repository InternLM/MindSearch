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

通过使用 Docker Compose，您可以快速部署 MindSearch，而无需担心复杂的环境配置。这种方法特别适合快速测试和生产环境部署。
