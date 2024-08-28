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


def modify_docker_compose(selected_dockerfile, backend_language):
    docker_compose_path = os.path.join(TEMP_DIR, "docker-compose.yaml")

    with open(docker_compose_path, "r") as file:
        compose_data = yaml.safe_load(file)

    backend_service = compose_data["services"]["backend"]

    if selected_dockerfile == CLOUD_LLM_DOCKERFILE:
        if "deploy" in backend_service:
            del backend_service["deploy"]
        backend_service["command"] = (
            f"python -m mindsearch.app --lang {backend_language} --model_format ${{MODEL_FORMAT:-internlm_silicon}}"
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
            f"python -m mindsearch.app --lang {backend_language} --model_format ${{MODEL_FORMAT:-internlm_server}}"
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
        )
    )
