# MSDL (MindSearch Docker Launcher) 使用指南

[English](README.md) | 简体中文

## 简介

MSDL (MindSearch Docker Launcher) 是一个专为简化 MindSearch 部署过程而设计的命令行工具。它通过交互式界面帮助用户轻松配置和启动 MindSearch 的 Docker 环境，降低了部署的复杂性。MSDL 主要作为部署容器的脚手架，不涉及 MindSearch 核心逻辑的优化。

## 环境要求

- Python 3.7 或更高版本
- Docker (需包含 Docker Compose，新版本的 Docker 通常已集成)
- Git (用于克隆仓库)
- 稳定的网络连接
- 充足的磁盘空间（根据选择的部署方案，所需空间有所不同）

## 安装步骤

1. 克隆 MindSearch 仓库:
   ```bash
   git clone https://github.com/InternLM/MindSearch.git # 已经克隆过的，可以忽略执行此步骤
   cd MindSearch/docker
   ```

2. 安装 MSDL:
   ```bash
   pip install -e .
   ```

## 使用方法

安装完成后，您可以在任意目录下运行 MSDL 命令：

```bash
msdl
```

按照交互式提示进行配置:
- 选择 Agent 使用的语言（中文或英文，仅影响 Agent 的提示词语言）
- 选择模型部署类型（本地模型或云端模型）
- 选择模型格式
  - 云端模型目前只有 internlm_silicon 能够正常运行
  - 本地模型目前只有 internlm_server 通过测试，能正常运行
- 输入必要的 API 密钥（如 SILICON_API_KEY）

MSDL 将自动执行以下操作:
- 复制并配置必要的 Dockerfile 和 docker-compose.yaml 文件
- 构建 Docker 镜像
- 启动 Docker 容器

## 部署方案比较

### 云端模型部署（推荐）

**优势**:
- 轻量级部署，磁盘占用小（前端约 510MB，后端约 839MB）
- 无需高性能硬件
- 部署和维护简单
- 使用 SiliconCloud 可免费调用 internlm/internlm2_5-7b-chat 模型
- 高并发量，推理速度快

**使用说明**:
- 选择"云端模型"选项
- 选择 "internlm_silicon" 作为模型格式
- 输入 SiliconCloud API Key（需在 https://cloud.siliconflow.cn/ 注册获取）

**重要说明**:
- internlm/internlm2_5-7b-chat 模型在 SiliconCloud 上可以免费调用，但 API Key 仍需妥善保管好。
- MindSearch 项目与 SiliconCloud 并无利益关系，只是使用它能更好地体验 MindSearch 的效果，感谢 SiliconCloud 为开源社区所做的贡献。

### 本地模型部署

**特点**:
- 使用 openmmlab/lmdeploy 镜像
- 基于 PyTorch 环境
- 需要大量磁盘空间（后端容器 15GB+，模型 15GB+，总计 30GB 以上）
- 需要强大的 GPU（建议 12GB 或以上显存）

**使用说明**:
- 选择"本地模型"选项
- 选择 "internlm_server" 作为模型格式

**相关链接**:
- lmdeploy 镜像: https://hub.docker.com/r/openmmlab/lmdeploy/tags
- InternLM2.5 项目: https://huggingface.co/internlm/internlm2_5-7b-chat

## 注意事项

- 云端模型目前只有 internlm_silicon 格式能够正常运行，本地模型只有 internlm_server 格式通过测试能正常运行。
- 选择语言只会影响 Agent 的提示词语言，不会改变 React 前端的界面语言。
- 首次运行可能需要较长时间来下载必要的模型文件和 Docker 镜像。
- 使用云端模型时，请确保网络连接稳定。

## 故障排除

1. 确保 Docker 服务正在运行。
2. 检查是否有足够的磁盘空间。
3. 确保所有必要的环境变量已正确设置。
4. 检查网络连接是否正常。
5. 验证 API Key 是否有效（如使用云端模型）。

如果问题持续，请查看 MindSearch 的 GitHub 仓库中的 Issues 部分，或提交新的 Issue。

## 隐私和安全

MSDL 是纯本地执行的工具，不会上报任何 API Key 或其他敏感信息。所有配置信息存储在 `msdl/temp/.env` 文件中，仅用于简化部署过程。

## 更新 MSDL

要更新 MSDL 到最新版本，请执行以下步骤:

1. 进入 MindSearch 目录
2. 拉取最新的代码:
   ```bash
   git pull origin main
   ```
3. 重新安装 MSDL:
   ```bash
   cd docker
   pip install -e .
   ```

## 结语

如有任何问题或建议，欢迎在 GitHub 上提交 Issue 或直接联系我们。感谢您使用 MindSearch 和 MSDL！