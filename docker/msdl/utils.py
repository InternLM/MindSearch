# msdl/utils.py

import os
import shutil
import sys

import yaml
from msdl.config import (
    CLOUD_LLM_DOCKERFILE,
    LOCAL_LLM_DOCKERFILE,
    PACKAGE_DIR,
    TEMP_DIR,
)
from msdl.translations.i18n_setup import t


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


def modify_docker_compose(selected_dockerfile):
    docker_compose_path = os.path.join(TEMP_DIR, "docker-compose.yaml")

    with open(docker_compose_path, "r") as file:
        compose_data = yaml.safe_load(file)

    backend_service = compose_data["services"]["backend"]

    if selected_dockerfile == CLOUD_LLM_DOCKERFILE:
        # Remove GPU configuration if it exists
        if "deploy" in backend_service:
            del backend_service["deploy"]
        # Modify command to use cloud LLM
        backend_service["command"] = (
            "python -m mindsearch.app --lang ${LANG:-cn} --model_format ${MODEL_FORMAT:-internlm_silicon}"
        )
    elif selected_dockerfile == LOCAL_LLM_DOCKERFILE:
        # Add GPU configuration if it does not exist
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
        # Modify command to use local LLM
        backend_service["command"] = (
            "python -m mindsearch.app --lang ${LANG:-cn} --model_format ${MODEL_FORMAT:-internlm_server}"
        )
    else:
        raise ValueError(f"未知的 Dockerfile: {selected_dockerfile}")

    with open(docker_compose_path, "w") as file:
        yaml.dump(compose_data, file)

    print(
        t(
            "docker_compose_updated",
            mode="cloud" if selected_dockerfile == CLOUD_LLM_DOCKERFILE else "local",
        )
    )
