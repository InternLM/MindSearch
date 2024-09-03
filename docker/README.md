# MSDL (MindSearch Docker Launcher) User Guide

English | [简体中文](README_zh-CN.md)

## Introduction

MSDL (MindSearch Docker Launcher) is a command-line tool designed to simplify the deployment process of MindSearch. It helps users configure and launch the Docker environment for MindSearch through an interactive interface, reducing the complexity of deployment. MSDL primarily serves as a scaffold for deploying containers and does not involve optimization of MindSearch's core logic.

## Prerequisites

- Python 3.7 or higher
- Docker (Docker Compose included; most newer Docker versions have it integrated)
- Git (for cloning the repository)
- Stable internet connection
- Sufficient disk space (required space varies depending on the selected deployment option)

## Installation Steps

1. Clone the MindSearch repository:
   ```bash
   git clone https://github.com/InternLM/MindSearch.git # If you have already cloned the repository, you can skip this step.
   cd MindSearch/docker
   ```

2. Install MSDL:
   ```bash
   pip install -e .
   ```

## Usage

After installation, you can run the MSDL command from any directory:

```bash
msdl
```

Follow the interactive prompts for configuration:
- Choose the language for the Agent (Chinese or English; this only affects the language of prompts).
- Select the model deployment type (local model or cloud model).
- Choose the model format:
  - Currently, only `internlm_silicon` works properly for cloud models.
  - For local models, only `internlm_server` has passed tests and runs correctly.
- Enter the necessary API keys (e.g., SILICON_API_KEY).

MSDL will automatically perform the following actions:
- Copy and configure the necessary Dockerfile and docker-compose.yaml files.
- Build Docker images.
- Launch Docker containers.

## Deployment Options Comparison

### Cloud Model Deployment (Recommended)

**Advantages**:
- Lightweight deployment with minimal disk usage (frontend around 510MB, backend around 839MB).
- No need for high-performance hardware.
- Easy to deploy and maintain.
- You can freely use the `internlm/internlm2_5-7b-chat` model via SiliconCloud.
- High concurrency, fast inference speed.

**Instructions**:
- Select the "Cloud Model" option.
- Choose "internlm_silicon" as the model format.
- Enter the SiliconCloud API Key (register at https://cloud.siliconflow.cn/ to obtain it).

**Important Notes**:
- The `internlm/internlm2_5-7b-chat` model is freely accessible on SiliconCloud.
- MindSearch has no financial relationship with SiliconCloud; this service is recommended solely because it provides valuable resources to the open-source community.

### Local Model Deployment

**Features**:
- Uses the `openmmlab/lmdeploy` image.
- Based on the PyTorch environment.
- Requires significant disk space (backend container 15GB+, model 15GB+, totaling 30GB+).
- Requires a powerful GPU (12GB or more of VRAM recommended).

**Instructions**:
- Select the "Local Model" option.
- Choose "internlm_server" as the model format.

**Relevant Links**:
- lmdeploy image: https://hub.docker.com/r/openmmlab/lmdeploy/tags
- InternLM2.5 project: https://huggingface.co/internlm/internlm2_5-7b-chat

## Notes

- Currently, only the `internlm_silicon` format works properly for cloud models, and only the `internlm_server` format has passed tests for local models.
- The language selection only affects the language of the Agent's prompts and does not change the language of the React frontend.
- The first run might take a long time to download necessary model files and Docker images.
- When using cloud models, ensure a stable network connection.

## Troubleshooting

1. Ensure the Docker service is running.
2. Check if there is sufficient disk space.
3. Ensure all necessary environment variables are set correctly.
4. Check if the network connection is stable.
5. Verify the validity of API keys (e.g., for cloud models).

If problems persist, check the Issues section in the MindSearch GitHub repository or submit a new issue.

## Privacy and Security

MSDL is a locally executed tool and does not transmit any API keys or sensitive information. All configuration information is stored in the `msdl/temp/.env` file, used only to simplify the deployment process.

## Updating MSDL

To update MSDL to the latest version, follow these steps:

1. Navigate to the MindSearch directory.
2. Pull the latest code:
   ```bash
   git pull origin main
   ```
3. Reinstall MSDL:
   ```bash
   cd docker
   pip install -e .
   ```

## Conclusion

If you have any questions or suggestions, feel free to submit an issue on GitHub or contact us directly. Thank you for using MindSearch and MSDL!