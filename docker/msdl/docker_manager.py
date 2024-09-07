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
    compose_file = os.path.join(TEMP_DIR, "docker-compose.yaml")

    # Read the docker-compose.yaml file
    try:
        with open(compose_file, "r") as file:
            compose_config = yaml.safe_load(file)
    except Exception as e:
        print(t("COMPOSE_FILE_READ_ERROR", error=str(e)))
        return

    # Get project name and service names
    project_name = compose_config.get("name", "mindsearch")
    service_names = list(compose_config.get("services", {}).keys())

    # Use only the project name as the container prefix
    container_prefix = f"{project_name}_"

    try:
        # 1. Try to stop containers using the current docker-compose.yaml
        subprocess.run(
            docker_compose_cmd + ["-f", compose_file, "down", "-v", "--remove-orphans"],
            check=True,
        )
    except subprocess.CalledProcessError:
        print(t("CURRENT_COMPOSE_STOP_FAILED"))

    # 2. Attempt to clean up potentially existing containers, regardless of the success of the previous step
    try:
        # List all containers (including stopped ones)
        result = subprocess.run(
            ["docker", "ps", "-a", "--format", "{{.Names}}"],
            check=True,
            capture_output=True,
            text=True,
        )
        all_containers = result.stdout.splitlines()

        # 3. Filter out containers belonging to our project
        project_containers = [
            c
            for c in all_containers
            if c.startswith(container_prefix)
            or any(c == f"{project_name}-{service}" for service in service_names)
        ]

        if project_containers:
            # 4. Force stop and remove these containers
            for container in project_containers:
                try:
                    subprocess.run(["docker", "stop", container], check=True)
                    subprocess.run(["docker", "rm", "-f", container], check=True)
                    print(t("CONTAINER_STOPPED_AND_REMOVED", container=container))
                except subprocess.CalledProcessError as e:
                    print(t("CONTAINER_STOP_ERROR", container=container, error=str(e)))

        # 5. Clean up potentially leftover networks
        try:
            subprocess.run(["docker", "network", "prune", "-f"], check=True)
            print(t("NETWORKS_PRUNED"))
        except subprocess.CalledProcessError as e:
            print(t("NETWORK_PRUNE_ERROR", error=str(e)))

    except subprocess.CalledProcessError as e:
        print(t("DOCKER_LIST_ERROR", error=str(e)))

    print(t("CONTAINERS_STOPPED_AND_REMOVED"))


def run_docker_compose():
    docker_compose_cmd = get_docker_command()
    try:
        print(t("STARTING_CONTAINERS_WITH_BUILD"))
        subprocess.run(
            docker_compose_cmd
            + [
                "-f",
                os.path.join(TEMP_DIR, "docker-compose.yaml"),
                "--env-file",
                os.path.join(TEMP_DIR, ".env"),
                "up",
                "-d",
                "--build",
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
