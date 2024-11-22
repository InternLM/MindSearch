# msdl/utils.py

import os
import re
import shutil
import sys
import yaml
from functools import lru_cache
from pathlib import Path
from msdl.config import (
    BACKEND_DOCKERFILE_DIR,
    CLOUD_LLM_DOCKERFILE,
    FRONTEND_DOCKERFILE_DIR,
    LOCAL_LLM_DOCKERFILE,
    PACKAGE_DIR,
    REACT_DOCKERFILE,
    TEMP_DIR,
    ENV_FILE_PATH,
)
from msdl.i18n import t


@lru_cache(maxsize=None)
def get_env_variable(var_name, default=None):
    if ENV_FILE_PATH.exists():
        with ENV_FILE_PATH.open("r") as env_file:
            for line in env_file:
                if line.startswith(f"{var_name}="):
                    return line.strip().split("=", 1)[1]
    return os.getenv(var_name, default)


@lru_cache(maxsize=None)
def get_existing_api_key(env_var_name):
    env_vars = read_env_file()
    return env_vars.get(env_var_name)


@lru_cache(maxsize=None)
def read_env_file():
    env_vars = {}
    if ENV_FILE_PATH.exists():
        with ENV_FILE_PATH.open("r") as env_file:
            for line in env_file:
                if "=" in line and not line.strip().startswith("#"):
                    key, value = line.strip().split("=", 1)
                    env_vars[key] = value.strip('"').strip("'")
    return env_vars


def clean_api_key(api_key):
    cleaned_key = api_key.strip()
    cleaned_key = re.sub(r"\s+", "", cleaned_key)
    return cleaned_key


@lru_cache(maxsize=None)
def validate_api_key(api_key, key_type, t):
    basic_pattern = r"^sk-[A-Za-z0-9]+$"
    web_search_pattern = r"^[A-Za-z0-9_\-\.]+$"
    tencent_pattern = r"^[A-Za-z0-9]+$"

    validation_rules = {
        # Model API Keys
        "SILICON_API_KEY": basic_pattern,
        "OPENAI_API_KEY": basic_pattern,
        "QWEN_API_KEY": basic_pattern,
        # Search Engine API Keys
        "BING_SEARCH_API_KEY": web_search_pattern,
        "BRAVE_SEARCH_API_KEY": web_search_pattern,
        "GOOGLE_SERPER_API_KEY": web_search_pattern,
        "TENCENT_SEARCH_SECRET_ID": tencent_pattern,
        "TENCENT_SEARCH_SECRET_KEY": tencent_pattern,
        # Legacy support
        "WEB_SEARCH_API_KEY": web_search_pattern,
    }

    if key_type not in validation_rules:
        raise ValueError(t("UNKNOWN_API_KEY_TYPE", KEY_TYPE=key_type))

    pattern = validation_rules[key_type]
    return re.match(pattern, api_key) is not None


def save_api_key_to_env(key_type, api_key, t):
    """Save API key to .env file
    
    Args:
        key_type: Environment variable name or model format
        api_key: API key value
        t: Translation function
    """
    # Convert model format to env var name if needed
    env_var_name = {
        "internlm_silicon": "SILICON_API_KEY",
        "gpt4": "OPENAI_API_KEY",
        "qwen": "QWEN_API_KEY",
    }.get(key_type, key_type)  # If not a model format, use key_type directly

    if not validate_api_key(api_key, env_var_name, t):
        raise ValueError(t("INVALID_API_KEY", KEY_TYPE=env_var_name))

    env_vars = read_env_file()
    env_vars[env_var_name] = api_key

    with ENV_FILE_PATH.open("w") as env_file:
        for key, value in env_vars.items():
            env_file.write(f"{key}={value}\n")

    print(t("API_KEY_SAVED", ENV_VAR_NAME=env_var_name))


def ensure_directory(path):
    path = Path(path)
    if not path.exists():
        path.mkdir(parents=True, exist_ok=True)
        print(t("DIR_CREATED", dir=path))


def copy_templates_to_temp(template_files):
    template_dir = PACKAGE_DIR / "templates"

    ensure_directory(TEMP_DIR)

    for filename in template_files:
        src = template_dir / filename
        dst = TEMP_DIR / filename
        if src.exists():
            shutil.copy2(src, dst)
            print(t("FILE_COPIED", file=filename))
        else:
            print(t("FILE_NOT_FOUND", file=filename))
            sys.exit(1)


def modify_docker_compose(model_type, backend_language, model_format, search_engine):
    """Modify docker-compose.yaml based on user choices"""
    docker_compose_path = os.path.join(TEMP_DIR, "docker-compose.yaml")
    with open(docker_compose_path, "r") as file:
        compose_data = yaml.safe_load(file)

    # Set the name of the project
    compose_data["name"] = "mindsearch"

    # Configure backend service
    backend_service = compose_data["services"]["backend"]
    
    # Set environment variables
    if "environment" not in backend_service:
        backend_service["environment"] = []

    # Add or update environment variables
    env_vars = {
        "LANG": backend_language,
        "MODEL_FORMAT": model_format,
        "SEARCH_ENGINE": search_engine
    }

    # Ensure .env file is included
    if "env_file" not in backend_service:
        backend_service["env_file"] = [".env"]
    elif ".env" not in backend_service["env_file"]:
        backend_service["env_file"].append(".env")

    # Set command with all parameters
    command = f"python -m mindsearch.app --lang {backend_language} --model_format {model_format} --search_engine {search_engine}"
    backend_service["command"] = command

    # Convert environment variables to docker-compose format
    backend_service["environment"] = [
        f"{key}={value}" for key, value in env_vars.items()
    ]

    # Configure based on model type
    if model_type == CLOUD_LLM_DOCKERFILE:
        if "deploy" in backend_service:
            del backend_service["deploy"]
        # Remove volumes for cloud deployment
        if "volumes" in backend_service:
            del backend_service["volumes"]
    elif model_type == LOCAL_LLM_DOCKERFILE:
        # Add GPU configuration for local deployment
        if "deploy" not in backend_service:
            backend_service["deploy"] = {
                "resources": {
                    "reservations": {
                        "devices": [
                            {"driver": "nvidia", "count": 1, "capabilities": ["gpu"]}
                        ]
                    }
                }
            }
        # Add volume for cache in local deployment
        backend_service["volumes"] = ["/root/.cache:/root/.cache"]
    else:
        raise ValueError(t("UNKNOWN_DOCKERFILE", dockerfile=model_type))

    # Save the modified docker-compose.yaml
    with open(docker_compose_path, "w") as file:
        yaml.dump(compose_data, file)

    print(
        t(
            "docker_compose_updated",
            mode=(t("CLOUD") if model_type == CLOUD_LLM_DOCKERFILE else t("LOCAL")),
            format=model_format,
        )
    )


def get_model_formats(model_type):
    if model_type == CLOUD_LLM_DOCKERFILE:
        return ["internlm_silicon", "qwen", "gpt4"]
    elif model_type == LOCAL_LLM_DOCKERFILE:
        return ["internlm_server", "internlm_client", "internlm_hf"]
    else:
        raise ValueError(t("UNKNOWN_MODEL_TYPE", model_type=model_type))


def copy_backend_dockerfile(choice):
    """Copy backend Dockerfile to temp directory based on user choice"""
    source_file = Path(BACKEND_DOCKERFILE_DIR) / choice
    dest_file = "backend.dockerfile"
    source_path = PACKAGE_DIR / "templates" / source_file
    dest_path = TEMP_DIR / dest_file

    if not source_path.exists():
        raise FileNotFoundError(t("FILE_NOT_FOUND", file=source_file))

    dest_path.parent.mkdir(parents=True, exist_ok=True)
    dest_path.write_text(source_path.read_text())
    print(
        t(
            "BACKEND_DOCKERFILE_COPIED",
            source_path=str(source_path),
            dest_path=str(dest_path),
        ))


def copy_frontend_dockerfile():
    """Copy frontend Dockerfile to temp directory"""
    source_file = Path(FRONTEND_DOCKERFILE_DIR) / REACT_DOCKERFILE
    dest_file = "frontend.dockerfile"
    source_path = PACKAGE_DIR / "templates" / source_file
    dest_path = TEMP_DIR / dest_file

    if not source_path.exists():
        raise FileNotFoundError(t("FILE_NOT_FOUND", file=source_file))

    dest_path.parent.mkdir(parents=True, exist_ok=True)
    dest_path.write_text(source_path.read_text())
    print(
        t(
            "FRONTEND_DOCKERFILE_COPIED",
            source_path=str(source_path),
            dest_path=str(dest_path),
        ))
