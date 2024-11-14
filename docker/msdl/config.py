# msdl/config.py

from pathlib import Path


class FileSystemManager:

    @staticmethod
    def ensure_dir(dir_path):
        """Ensure the directory exists, create if it doesn't"""
        path = Path(dir_path)
        if not path.exists():
            path.mkdir(parents=True, exist_ok=True)
        return path

    @staticmethod
    def ensure_file(file_path, default_content=""):
        """Ensure the file exists, create if it doesn't"""
        path = Path(file_path)
        if not path.parent.exists():
            FileSystemManager.ensure_dir(path.parent)
        if not path.exists():
            with open(path, "w") as f:
                f.write(default_content)
        return path


# Get the directory where the script is located
PACKAGE_DIR = Path(__file__).resolve().parent

# Get the root directory of the MindSearch project
PROJECT_ROOT = PACKAGE_DIR.parent.parent

# Get the temp directory path, which is actually the working directory for executing the docker compose up command
TEMP_DIR = FileSystemManager.ensure_dir(PACKAGE_DIR / "temp")

# Configuration file name list
TEMPLATE_FILES = ["docker-compose.yaml"]

# Backend Dockerfile directory
BACKEND_DOCKERFILE_DIR = "backend"

# Backend Dockerfile name
CLOUD_LLM_DOCKERFILE = "cloud_llm.dockerfile"
LOCAL_LLM_DOCKERFILE = "local_llm.dockerfile"

# Frontend Dockerfile directory
FRONTEND_DOCKERFILE_DIR = "frontend"

# Frontend Dockerfile name
REACT_DOCKERFILE = "react.dockerfile"

# i18n translations directory
TRANSLATIONS_DIR = FileSystemManager.ensure_dir(PACKAGE_DIR / "translations")

# Get the path of the .env file
ENV_FILE_PATH = FileSystemManager.ensure_file(TEMP_DIR / ".env")
