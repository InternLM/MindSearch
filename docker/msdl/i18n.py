# msdl/translations/i18n_setup.py

import os
import i18n
import locale
from msdl.config import TEMP_DIR, TRANSLATIONS_DIR


def get_env_variable(var_name, default=None):
    env_file_path = os.path.join(TEMP_DIR, ".env")
    if os.path.exists(env_file_path):
        with open(env_file_path, "r") as env_file:
            for line in env_file:
                if line.startswith(f"{var_name}="):
                    return line.strip().split("=", 1)[1]
    return os.getenv(var_name, default)


def get_system_language():
    try:
        return locale.getlocale()[0].split("_")[0]
    except:
        return "en"


def setup_i18n():
    i18n.load_path.append(TRANSLATIONS_DIR)
    i18n.set("filename_format", "{locale}.{format}")
    i18n.set("file_format", "yaml")

    env_language = get_env_variable("LAUNCHER_INTERACTION_LANGUAGE")
    if env_language:
        i18n.set("locale", env_language)
    else:
        i18n.set("locale", get_system_language())


def t(key, **kwargs):
    return i18n.t(key, **kwargs)
