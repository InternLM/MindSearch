# msdl/utils.py

import os
import re
import shutil
import sys

import yaml
from dotenv import load_dotenv
from msdl.config import (
    CLOUD_LLM_DOCKERFILE,
    LOCAL_LLM_DOCKERFILE,
    PACKAGE_DIR,
    TEMP_DIR,
)
from msdl.translations.i18n_setup import t


def clean_api_key(api_key):

    cleaned_key = api_key.strip()

    cleaned_key = re.sub(r"\s+", "", cleaned_key)
    return cleaned_key


def validate_api_key(api_key, key_type):

    basic_pattern = r"^sk-[A-Za-z0-9]+$"

    # Different API key types have different validation rules
    validation_rules = {
        "SILICON_API_KEY": basic_pattern,
        "OPENAI_API_KEY": basic_pattern,
        "QWEN_API_KEY": basic_pattern,
        # You can add more API key types here
    }

    if key_type not in validation_rules:
        raise ValueError(t("unknown_api_key_type", key_type=key_type))

    pattern = validation_rules[key_type]
    return re.match(pattern, api_key) is not None


def ensure_directory(path):
    if not os.path.exists(path):
        os.makedirs(path)
        print(t("dir_created", dir=path))


def copy_templates_to_temp(template_files):
    template_dir = os.path.join(PACKAGE_DIR, "templates")

    ensure_directory(TEMP_DIR)

    for filename in template_files:
        src = os.path.join(template_dir, filename)
        dst = os.path.join(TEMP_DIR, filename)
        if os.path.exists(src):
            shutil.copy2(src, dst)
            print(t("file_copied", file=filename))
        else:
            print(t("file_not_found", file=filename))
            sys.exit(1)


def save_api_key_to_env(model_format, api_key):
    env_file_path = os.path.join(TEMP_DIR, ".env")

    if model_format == "internlm_silicon":
        env_var_name = "SILICON_API_KEY"
    elif model_format == "gpt4":
        env_var_name = "OPENAI_API_KEY"
    elif model_format == "qwen":
        env_var_name = "QWEN_API_KEY"
    else:
        raise ValueError(t("unknown_model_format", model_format=model_format))

    if not validate_api_key(api_key, env_var_name):
        raise ValueError(t("invalid_api_key", key_type=env_var_name))

    env_vars = {}
    if os.path.exists(env_file_path):
        with open(env_file_path, "r") as env_file:
            for line in env_file:
                if "=" in line:
                    key, value = line.strip().split("=", 1)
                    env_vars[key] = value

    env_vars[env_var_name] = api_key

    with open(env_file_path, "w") as env_file:
        for key, value in env_vars.items():
            env_file.write(f"{key}={value}\n")

    print(t("api_key_saved", model=model_format))


def modify_docker_compose(selected_dockerfile, backend_language, model_format):
    docker_compose_path = os.path.join(TEMP_DIR, "docker-compose.yaml")

    with open(docker_compose_path, "r") as file:
        compose_data = yaml.safe_load(file)

    backend_service = compose_data["services"]["backend"]

    if "env_file" not in backend_service:
        backend_service["env_file"] = [".env"]
    elif ".env" not in backend_service["env_file"]:
        backend_service["env_file"].append(".env")

    if selected_dockerfile == CLOUD_LLM_DOCKERFILE:
        if "deploy" in backend_service:
            del backend_service["deploy"]
        backend_service["command"] = (
            f"python -m mindsearch.app --lang {backend_language} --model_format {model_format}"
        )
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
        backend_service["command"] = (
            f"python -m mindsearch.app --lang {backend_language} --model_format {model_format}"
        )
    else:
        raise ValueError(t("unknown_dockerfile", dockerfile=selected_dockerfile))

    with open(docker_compose_path, "w") as file:
        yaml.dump(compose_data, file)

    print(
        t(
            "docker_compose_updated",
            mode=(
                t("cloud")
                if selected_dockerfile == CLOUD_LLM_DOCKERFILE
                else t("local")
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
        raise ValueError(t("unknown_model_type", model_type=model_type))
