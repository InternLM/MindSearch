import signal
import sys
import os
from InquirerPy import inquirer
from msdl.config import (
    PACKAGE_DIR,
    PROJECT_ROOT,
    TEMP_DIR,
    TEMPLATE_FILES,
    CLOUD_LLM_DOCKERFILE,
    LOCAL_LLM_DOCKERFILE,
    BACKEND_DOCKERFILE_DIR,
    FRONTEND_DOCKERFILE_DIR,
    REACT_DOCKERFILE,
)
from msdl.translations.i18n_setup import setup_i18n, t
from msdl.utils import copy_templates_to_temp, modify_docker_compose
from msdl.docker_manager import (
    check_docker_install,
    stop_and_remove_containers,
    run_docker_compose,
    update_docker_compose_paths,
)


def signal_handler(signum, frame):
    print(t("termination_signal"))
    stop_and_remove_containers()
    sys.exit(0)


def get_user_choice():
    choices = [
        {"name": t("cloud_model"), "value": CLOUD_LLM_DOCKERFILE},
        {"name": t("local_model"), "value": LOCAL_LLM_DOCKERFILE},
    ]
    return inquirer.select(
        message=t("model_choice"),
        choices=choices,
    ).execute()


def copy_backend_dockerfile(choice):
    source_file = os.path.join(BACKEND_DOCKERFILE_DIR, choice)
    dest_file = "backend.dockerfile"
    source_path = os.path.join(PACKAGE_DIR, "templates", source_file)
    dest_path = os.path.join(TEMP_DIR, dest_file)

    if not os.path.exists(source_path):
        raise FileNotFoundError(t("file_not_found", file=source_file))

    os.makedirs(os.path.dirname(dest_path), exist_ok=True)
    with open(source_path, "r") as src, open(dest_path, "w") as dst:
        dst.write(src.read())
    print(t("dockerfile_copied", src=source_file, dst=dest_file))


def copy_frontend_dockerfile():
    source_file = os.path.join(FRONTEND_DOCKERFILE_DIR, REACT_DOCKERFILE)
    dest_file = "frontend.dockerfile"
    source_path = os.path.join(PACKAGE_DIR, "templates", source_file)
    dest_path = os.path.join(TEMP_DIR, dest_file)

    if not os.path.exists(source_path):
        raise FileNotFoundError(t("file_not_found", file=source_file))

    os.makedirs(os.path.dirname(dest_path), exist_ok=True)
    with open(source_path, "r") as src, open(dest_path, "w") as dst:
        dst.write(src.read())
    print(t("dockerfile_copied", src=source_file, dst=dest_file))


def main():
    setup_i18n(PACKAGE_DIR)

    signal.signal(signal.SIGINT, signal_handler)
    signal.signal(signal.SIGTERM, signal_handler)

    print(t("package_dir", dir=PACKAGE_DIR))
    print(t("project_root", dir=PROJECT_ROOT))
    print(t("temp_dir", dir=TEMP_DIR))
    print(t("docker_launcher_start"))

    try:
        check_docker_install()

        # Get user choice
        model_choice = get_user_choice()

        # Copy backend Dockerfile to temp
        copy_backend_dockerfile(model_choice)

        # Copy frontend Dockerfile to temp
        copy_frontend_dockerfile()

        # Copy templates to temp
        copy_templates_to_temp(TEMPLATE_FILES)

        # Modify docker-compose.yaml
        modify_docker_compose(model_choice)

        update_docker_compose_paths()
        stop_and_remove_containers()
        run_docker_compose()

        print(t("docker_launcher_complete"))
    except KeyboardInterrupt:
        print(t("keyboard_interrupt"))
        stop_and_remove_containers()
        sys.exit(0)
    except Exception as e:
        print(t("unexpected_error", error=str(e)))
        stop_and_remove_containers()
        sys.exit(1)


if __name__ == "__main__":
    main()
