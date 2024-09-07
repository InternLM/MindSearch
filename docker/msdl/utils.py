# msdl/utils.py

import os
import re
import shutil
import sys
import yaml
from functools import lru_cache
from pathlib import Path
from msdl.config import (
    CLOUD_LLM_DOCKERFILE,
    LOCAL_LLM_DOCKERFILE,
    PACKAGE_DIR,
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

    validation_rules = {
        "SILICON_API_KEY": basic_pattern,
        "OPENAI_API_KEY": basic_pattern,
        "QWEN_API_KEY": basic_pattern,
    }

    if key_type not in validation_rules:
        raise ValueError(t("UNKNOWN_API_KEY_TYPE", KEY_TYPE=key_type))

    pattern = validation_rules[key_type]
    return re.match(pattern, api_key) is not None


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


def save_api_key_to_env(model_format, api_key, t):
    env_var_name = {
        "internlm_silicon": "SILICON_API_KEY",
        "gpt4": "OPENAI_API_KEY",
        "qwen": "QWEN_API_KEY",
    }.get(model_format)

    if not env_var_name:
        raise ValueError(t("UNKNOWN_MODEL_FORMAT", MODEL_FORMAT=model_format))

    if not validate_api_key(api_key, env_var_name, t):
        raise ValueError(t("INVALID_API_KEY", KEY_TYPE=env_var_name))

    env_vars = read_env_file()
    env_vars[env_var_name] = api_key

    with ENV_FILE_PATH.open("w") as env_file:
        for key, value in env_vars.items():
            env_file.write(f"{key}={value}\n")

    print(t("API_KEY_SAVED", ENV_VAR_NAME=env_var_name))


def modify_docker_compose(selected_dockerfile, backend_language, model_format):
    docker_compose_path = TEMP_DIR / "docker-compose.yaml"

    with docker_compose_path.open("r") as file:
        compose_data = yaml.safe_load(file)

    # Set the name of the project (Docker Compose will convert it to lowercase)
    compose_data["name"] = "mindsearch"

    backend_service = compose_data["services"]["backend"]

    if "env_file" not in backend_service:
        backend_service["env_file"] = [".env"]
    elif ".env" not in backend_service["env_file"]:
        backend_service["env_file"].append(".env")

    command = f"python -m mindsearch.app --lang {backend_language} --model_format {model_format}"

    if selected_dockerfile == CLOUD_LLM_DOCKERFILE:
        if "deploy" in backend_service:
            del backend_service["deploy"]
        backend_service["command"] = command
        # Use Cloud LLM Dockerfile: Remove volumes
        if "volumes" in backend_service:
            del backend_service["volumes"]
    elif selected_dockerfile == LOCAL_LLM_DOCKERFILE:
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
        backend_service["command"] = command
        # Use Local LLM Dockerfile: Add volume for cache
        backend_service["volumes"] = ["/root/.cache:/root/.cache"]
    else:
        raise ValueError(t("UNKNOWN_DOCKERFILE", dockerfile=selected_dockerfile))

    with docker_compose_path.open("w") as file:
        yaml.dump(compose_data, file)

    print(
        t(
            "docker_compose_updated",
            mode=(
                t("CLOUD")
                if selected_dockerfile == CLOUD_LLM_DOCKERFILE
                else t("LOCAL")
            ),
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
