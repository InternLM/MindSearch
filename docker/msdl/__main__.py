# msdl/__main__.py
import signal
import sys
import argparse
import os
from pathlib import Path

from msdl.config import (
    BACKEND_DOCKERFILE_DIR,
    FRONTEND_DOCKERFILE_DIR,
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
from msdl.i18n import (
    setup_i18n,
    t,
)
from msdl.utils import (
    copy_templates_to_temp,
    copy_backend_dockerfile,
    copy_frontend_dockerfile,
    modify_docker_compose,
)
from msdl.user_interaction import get_user_choices


def signal_handler(signum, frame):
    print(t("TERMINATION_SIGNAL"))
    stop_and_remove_containers()
    sys.exit(0)


def parse_args():
    parser = argparse.ArgumentParser(description=t("CLI_DESCRIPTION"))
    parser.add_argument('--language', '-l', 
                      help=t("LANGUAGE_HELP"),
                      choices=["en", "zh_CN"],
                      default=None)
    parser.add_argument('--config-language', action='store_true',
                      help=t("CONFIG_LANGUAGE_HELP"))
    return parser.parse_args()


def main():
    # Setup signal handler
    signal.signal(signal.SIGINT, signal_handler)
    signal.signal(signal.SIGTERM, signal_handler)

    # Initialize i18n
    setup_i18n()

    # Parse command line arguments
    args = parse_args()
    if args.language:
        # set_language(args.language)
        # Reinitialize i18n with new language
        setup_i18n()

    try:
        # Check if TEMP_DIR exists, if not, create it
        if not TEMP_DIR.exists():
            TEMP_DIR.mkdir(parents=True, exist_ok=True)
            print(t("TEMP_DIR_CREATED", dir=str(TEMP_DIR)))

        check_docker_install()

        # Get user choices using the new module
        backend_language, model, model_format, search_engine = get_user_choices()

        # Copy template files
        copy_templates_to_temp(TEMPLATE_FILES)

        # Copy Dockerfiles
        copy_backend_dockerfile(model)
        copy_frontend_dockerfile()

        # Update paths in docker-compose.yml
        update_docker_compose_paths()

        # Modify docker-compose.yml based on user choices
        modify_docker_compose(model, backend_language, model_format, search_engine)

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
