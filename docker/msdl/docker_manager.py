# msdl/docker_manager.py

import subprocess
import sys, os
import yaml
from msdl.config import TEMP_DIR, PROJECT_ROOT
from msdl.translations.i18n_setup import t


def check_docker_install():
    try:
        subprocess.run(["docker", "--version"], check=True, capture_output=True)
        subprocess.run(
            ["docker", "compose", "version"], check=True, capture_output=True
        )
        print(t("docker_installed"))
    except subprocess.CalledProcessError as e:
        print(t("docker_install_error", error=str(e)))
        sys.exit(1)
    except FileNotFoundError:
        print(t("docker_not_found"))
        sys.exit(1)


def stop_and_remove_containers():
    try:
        subprocess.run(
            [
                "docker",
                "compose",
                "-f",
                os.path.join(TEMP_DIR, "docker-compose.yaml"),
                "down",
                "-v",
            ],
            check=True,
        )
        print(t("containers_stopped"))
    except subprocess.CalledProcessError as e:
        print(t("container_stop_error", error=str(e)))


def run_docker_compose():
    try:
        print(t("building_images"))
        subprocess.run(
            [
                "docker",
                "compose",
                "-f",
                os.path.join(TEMP_DIR, "docker-compose.yaml"),
                "--env-file",
                os.path.join(TEMP_DIR, ".env"),
                "build",
            ],
            check=True,
        )
        print(t("images_built"))

        print(t("starting_containers"))
        subprocess.run(
            [
                "docker",
                "compose",
                "-f",
                os.path.join(TEMP_DIR, "docker-compose.yaml"),
                "--env-file",
                os.path.join(TEMP_DIR, ".env"),
                "up",
                "-d",
            ],
            check=True,
        )
        print(t("containers_started"))
    except subprocess.CalledProcessError as e:
        print(t("docker_error", error=str(e)))
        print(t("docker_output"))
        print(e.output.decode() if e.output else "No output")
        stop_and_remove_containers()
        sys.exit(1)


def update_docker_compose_paths():
    docker_compose_path = os.path.join(TEMP_DIR, "docker-compose.yaml")

    with open(docker_compose_path, "r") as file:
        compose_data = yaml.safe_load(file)

    for service in compose_data["services"].values():
        if "build" in service:
            if "context" in service["build"]:
                if service["build"]["context"] == "..":
                    service["build"]["context"] = PROJECT_ROOT
                else:
                    service["build"]["context"] = os.path.join(
                        PROJECT_ROOT, service["build"]["context"]
                    )

            if "dockerfile" in service["build"]:
                dockerfile_name = os.path.basename(service["build"]["dockerfile"])
                service["build"]["dockerfile"] = os.path.join(TEMP_DIR, dockerfile_name)

    with open(docker_compose_path, "w") as file:
        yaml.dump(compose_data, file)

    print(t("paths_updated"))
