# MindSearch Docker Compose 使用指南

[English](README.md) | 简体中文

## 🚀 使用 Docker Compose 快速启动

MindSearch 支持使用 Docker Compose 进行快速部署和启动，简化了环境配置过程，让您能轻松运行整个系统。

### 前提条件

- Docker（已集成 Docker Compose V2）
- NVIDIA GPU 和 NVIDIA Container Toolkit（如需 NVIDIA GPU 支持）

注意：较新版本的 Docker 已整合 Docker Compose V2，可直接使用 `docker compose` 命令。

### 使用说明

所有命令都应在 `mindsearch/docker` 目录下执行。

#### 首次启动

```bash
docker compose up --build -d
```

#### 日常使用

启动服务：

```bash
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

#### 大版本更新

更新后重新构建镜像：

```bash
docker compose build --no-cache
docker compose up -d
```

### 配置说明

1. **环境变量设置**：
   系统自动读取以下环境变量：

   - `OPENAI_API_KEY`：OpenAI API 密钥
   - `OPENAI_API_BASE`：OpenAI API 基础 URL（默认：https://api.openai.com/v1）
   - `LANG`：语言设置（'en' 或 'cn'）
   - `MODEL_FORMAT`：模型格式（'gpt4' 或 'internlm_server'）

   设置示例：

   使用本地的 internlm2.5-7b-chat 模型:

   ```bash
   export LANG=cn
   export MODEL_FORMAT=internlm_server
   docker compose up -d
   ```

   使用 OpenAI 的 LLM 服务:

   ```bash
   export OPENAI_API_KEY=your_api_key_here
   export LANG=cn
   export MODEL_FORMAT=gpt4
   docker compose up -d
   ```

   使用 SiliconFlow 云端 LLM 服务：

   ```bash
   export SILICON_API_KEY=your_api_key_here
   export LANG=cn
   export MODEL_FORMAT=internlm_silicon
   docker compose up -d
   ```

2. **模型缓存**：
   容器映射 `/root/.cache:/root/.cache` 路径存储模型文件。

3. **GPU 支持**：
   默认配置使用 NVIDIA GPU。其他 GPU 类型请参考 docker-compose.yaml 中的注释。

4. **服务访问**：
   在 Docker Compose 环境中，前端容器可以通过 `http://backend:8002` 直接访问后端服务。

5. **后端服务器地址配置**：
   目前，更改后端服务器地址的方法是临时的。我们在 Dockerfile 中使用 sed 命令来修改 vite.config.ts 文件，以替换服务器代理地址。这种方法在开发环境中有效，但不适合生产环境。

### 注意事项

- 首次运行可能需要时间下载模型文件。
- 确保有足够磁盘空间存储模型和 Docker 镜像。
- 如遇权限问题，可能需要使用 sudo 运行 Docker 命令。

### 跨域访问说明

当前版本通过 Vite 开发模式临时解决跨域问题：

1. 前端 Dockerfile 使用 `npm start` 启动 Vite 开发服务器。
2. `vite.config.ts` 配置代理，将 `/solve` 路径请求代理到后端。

注意：

- 此方法适用于开发环境，不适合生产环境。
- 未来版本将实现更适合生产环境的跨域解决方案。
- 生产环境部署可能需要考虑其他跨域处理方法。

### 结语

感谢您的支持。MindSearch 正在不断改进，您的反馈对我们至关重要。如有任何问题或建议，请随时与我们联系。

Docker Compose 方法简化了 MindSearch 的部署流程，特别适合快速测试和开发环境。如遇部署问题，请参考故障排除指南或寻求社区支持。
