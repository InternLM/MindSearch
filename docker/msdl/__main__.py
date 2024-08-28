import signal
import sys
from msdl.config import PACKAGE_DIR, PROJECT_ROOT, TEMP_DIR, TEMPLATE_FILES
from msdl.translations.i18n_setup import setup_i18n, t
from msdl.utils import copy_templates_to_temp
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
        copy_templates_to_temp(TEMPLATE_FILES)
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
