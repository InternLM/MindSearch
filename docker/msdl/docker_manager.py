# msdl/docker_manager.py

import os
import subprocess
import sys
from functools import lru_cache

import yaml
from msdl.config import PROJECT_ROOT, TEMP_DIR
from msdl.i18n import t


@lru_cache(maxsize=1)
def get_docker_command():
    try:
        subprocess.run(
            ["docker", "compose", "version"], check=True, capture_output=True
        )
        return ["docker", "compose"]
    except subprocess.CalledProcessError:
        try:
            subprocess.run(
                ["docker-compose", "--version"], check=True, capture_output=True
            )
            return ["docker-compose"]
        except subprocess.CalledProcessError:
            print(t("DOCKER_COMPOSE_NOT_FOUND"))
            sys.exit(1)


@lru_cache(maxsize=1)
def check_docker_install():
    try:
        subprocess.run(["docker", "--version"], check=True, capture_output=True)
        docker_compose_cmd = get_docker_command()
        subprocess.run(
            docker_compose_cmd + ["version"], check=True, capture_output=True
        )
        print(t("DOCKER_INSTALLED"))
        return True
    except subprocess.CalledProcessError as e:
        print(t("DOCKER_INSTALL_ERROR", error=str(e)))
        return False
    except FileNotFoundError:
        print(t("DOCKER_NOT_FOUND"))
        return False


def stop_and_remove_containers():
    docker_compose_cmd = get_docker_command()
    try:
        subprocess.run(
            docker_compose_cmd
            + [
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
    docker_compose_cmd = get_docker_command()
    try:
        print(t("BUILDING_IMAGES"))
        subprocess.run(
            docker_compose_cmd
            + [
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
            docker_compose_cmd
            + [
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


def main():
    if check_docker_install():
        update_docker_compose_paths()
        run_docker_compose()
    else:
        sys.exit(1)


if __name__ == "__main__":
    main()
