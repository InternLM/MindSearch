# msdl/docker_manager.py

import subprocess
import sys, os
import yaml
from msdl.config import TEMP_DIR, PROJECT_ROOT
from msdl.i18n import t


def check_docker_install():
    try:
        subprocess.run(["docker", "--version"], check=True, capture_output=True)
        subprocess.run(
            ["docker", "compose", "version"], check=True, capture_output=True
        )
        print(t("DOCKER_INSTALLED"))
    except subprocess.CalledProcessError as e:
        print(t("DOCKER_INSTALL_ERROR", error=str(e)))
        sys.exit(1)
    except FileNotFoundError:
        print(t("DOCKER_NOT_FOUND"))
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
        print(t("CONTAINERS_STOPPED"))
    except subprocess.CalledProcessError as e:
        print(t("CONTAINER_STOP_ERROR", error=str(e)))


def run_docker_compose():
    try:
        print(t("BUILDING_IMAGES"))
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
        print(t("IMAGES_BUILT"))

        print(t("STARTING_CONTAINERS"))
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
        print(t("CONTAINERS_STARTED"))
    except subprocess.CalledProcessError as e:
        print(t("DOCKER_ERROR", error=str(e)))
        print(t("DOCKER_OUTPUT"))
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

    print(t("PATHS_UPDATED"))
