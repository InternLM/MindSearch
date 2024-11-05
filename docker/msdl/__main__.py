# msdl/__main__.py
import signal
import sys
from pathlib import Path

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
    get_existing_api_key,
    get_model_formats,
    modify_docker_compose,
    save_api_key_to_env,
    validate_api_key,
)


def signal_handler(signum, frame):
    print(t("TERMINATION_SIGNAL"))
    stop_and_remove_containers()
    sys.exit(0)


def copy_backend_dockerfile(choice):
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


def get_user_choices():
    backend_language_choices = [
        {
            "name": t("CHINESE"),
            "value": "cn"
        },
        {
            "name": t("ENGLISH"),
            "value": "en"
        },
    ]

    model_deployment_type = [
        {
            "name": t("CLOUD_MODEL"),
            "value": CLOUD_LLM_DOCKERFILE
        },
        {
            "name": t("LOCAL_MODEL"),
            "value": LOCAL_LLM_DOCKERFILE
        },
    ]

    backend_language = inquirer.select(
        message=t("BACKEND_LANGUAGE_CHOICE"),
        choices=backend_language_choices,
    ).execute()

    model = inquirer.select(
        message=t("MODEL_DEPLOYMENT_TYPE"),
        choices=model_deployment_type,
    ).execute()

    model_formats = get_model_formats(model)
    model_format = inquirer.select(
        message=t("MODEL_FORMAT_CHOICE"),
        choices=[{
            "name": format,
            "value": format
        } for format in model_formats],
    ).execute()

    # If the model is cloud_llm, ask for the API key
    if model == CLOUD_LLM_DOCKERFILE:
        env_var_name = {
            "internlm_silicon": "SILICON_API_KEY",
            "gpt4": "OPENAI_API_KEY",
            "qwen": "QWEN_API_KEY",
        }.get(model_format)

        existing_api_key = get_existing_api_key(env_var_name)

        if existing_api_key:
            use_existing = inquirer.confirm(
                message=t(
                    "CONFIRM_USE_EXISTING_API_KEY", ENV_VAR_NAME=env_var_name),
                default=True,
            ).execute()

            if use_existing:
                return backend_language, model, model_format
            else:
                print(
                    t("CONFIRM_OVERWRITE_EXISTING_API_KEY",
                      ENV_VAR_NAME=env_var_name))
        else:
            print(t("PLEASE_INPUT_NEW_API_KEY", ENV_VAR_NAME=env_var_name))

        while True:
            api_key = inquirer.secret(
                message=t(
                    "PLEASE_INPUT_NEW_API_KEY_FROM_ZERO",
                    ENV_VAR_NAME=env_var_name)).execute()
            cleaned_api_key = clean_api_key(api_key)

            if validate_api_key(cleaned_api_key, env_var_name, t):
                save_api_key_to_env(model_format, cleaned_api_key, t)
                break
            else:
                print(t("INVALID_API_KEY_FORMAT"))
                retry = inquirer.confirm(
                    message=t("RETRY_API_KEY_INPUT"), default=True).execute()
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
        # Check if TEMP_DIR exists, if not, create it
        if not TEMP_DIR.exists():
            TEMP_DIR.mkdir(parents=True, exist_ok=True)
            print(t("TEMP_DIR_CREATED", dir=str(TEMP_DIR)))

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

        print(t("DOCKER_LAUNCHER_COMPLETE"))
    except KeyboardInterrupt:
        print(t("KEYBOARD_INTERRUPT"))
        # stop_and_remove_containers()
        sys.exit(0)
    except Exception as e:
        print(t("UNEXPECTED_ERROR", error=str(e)))
        # stop_and_remove_containers()
        sys.exit(1)


if __name__ == "__main__":
    main()
