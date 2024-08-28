import os

# Get the directory where the script is located
PACKAGE_DIR = os.path.dirname(os.path.abspath(__file__))

# Get the root directory of the MindSearch project
PROJECT_ROOT = os.path.dirname(os.path.dirname(PACKAGE_DIR))

# Get the temp directory path, which is actually the working directory for executing the docker compose up command
TEMP_DIR = os.path.join(PACKAGE_DIR, "temp")

# Configuration file name list
TEMPLATE_FILES = ["backend.dockerfile", "docker-compose.yaml", "frontend.dockerfile"]
