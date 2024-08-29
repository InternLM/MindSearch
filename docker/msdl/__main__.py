# msdl/__main__.py

import os
import signal
import sys

from InquirerPy import inquirer
from msdl.config import (
    BACKEND_DOCKERFILE_DIR,
    CLOUD_LLM_DOCKERFILE,
    FRONTEND_DOCKERFILE_DIR,
    LOCAL_LLM_DOCKERFILE,
    PACKAGE_DIR,
    PROJECT_ROOT,
    REACT_DOCKERFILE,
    TEMP_DIR,
    TEMPLATE_FILES,
)
from msdl.docker_manager import (
    check_docker_install,
    run_docker_compose,
    stop_and_remove_containers,
    update_docker_compose_paths,
)
from msdl.i18n import setup_i18n, t
from msdl.utils import (
    clean_api_key,
    copy_templates_to_temp,
    get_model_formats,
    modify_docker_compose,
    save_api_key_to_env,
    validate_api_key,
    get_existing_api_key,
)


def signal_handler(signum, frame):
    print(t("termination_signal"))
    stop_and_remove_containers()
    sys.exit(0)


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


def get_user_choices():
    backend_language_choices = [
        {"name": t("chinese"), "value": "cn"},
        {"name": t("english"), "value": "en"},
    ]

    model_choices = [
        {"name": t("cloud_model"), "value": CLOUD_LLM_DOCKERFILE},
        {"name": t("local_model"), "value": LOCAL_LLM_DOCKERFILE},
    ]

    backend_language = inquirer.select(
        message=t("backend_language_choice"),
        choices=backend_language_choices,
    ).execute()

    model = inquirer.select(
        message=t("model_choice"),
        choices=model_choices,
    ).execute()

    model_formats = get_model_formats(model)
    model_format = inquirer.select(
        message=t("model_format_choice"),
        choices=[{"name": format, "value": format} for format in model_formats],
    ).execute()

    # If the model is cloud_llm, ask for the API key
    if model == CLOUD_LLM_DOCKERFILE:
        env_var_name = {
            "internlm_silicon": "SILICON_API_KEY",
            "gpt4": "OPENAI_API_KEY",
            "qwen": "QWEN_API_KEY",
        }.get(model_format)

        env_file_path = os.path.join(TEMP_DIR, ".env")
        existing_api_key = get_existing_api_key(env_file_path, env_var_name)

        if existing_api_key:
            use_existing = inquirer.confirm(
                message=t("USE_EXISTING_API_KEY", MODEL=model_format.upper()),
                default=True,
            ).execute()

            if use_existing:
                return backend_language, model, model_format
            else:
                print(t("OVERWRITE_EXISTING_API_KEY", MODEL=model_format.upper()))
        else:
            print(t("INPUT_NEW_API_KEY", MODEL=model_format.upper()))

        while True:
            api_key = inquirer.secret(
                message=t("API_KEY_PROMPT", MODEL=model_format.upper())
            ).execute()
            cleaned_api_key = clean_api_key(api_key)

            if validate_api_key(cleaned_api_key, env_var_name, t):
                save_api_key_to_env(model_format, cleaned_api_key, t)
                break
            else:
                print(t("INVALID_API_KEY_FORMAT"))
                retry = inquirer.confirm(
                    message=t("RETRY_API_KEY_INPUT"), default=True
                ).execute()
                if not retry:
                    print(t("API_KEY_INPUT_CANCELLED"))
                    sys.exit(1)

    return backend_language, model, model_format


def main():
    # Set the display language of the msdl launcher (based on the system language)
    setup_i18n()

    signal.signal(signal.SIGINT, signal_handler)
    signal.signal(signal.SIGTERM, signal_handler)

    try:
        check_docker_install()

        # Get user choices
        backend_language, model_choice, model_format = get_user_choices()

        # Copy backend Dockerfile to temp directory
        copy_backend_dockerfile(model_choice)

        # Copy frontend Dockerfile to temp directory
        copy_frontend_dockerfile()

        # Copy templates to temp directory
        copy_templates_to_temp(TEMPLATE_FILES)

        # Modify docker-compose.yaml
        modify_docker_compose(model_choice, backend_language, model_format)

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
