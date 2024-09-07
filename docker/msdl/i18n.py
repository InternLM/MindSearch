# msdl/translations/i18n_setup.py

import os
import i18n
import locale
from dotenv import load_dotenv, set_key, find_dotenv
from msdl.config import TRANSLATIONS_DIR, ENV_FILE_PATH


def get_env_variable(var_name, default=None):
    load_dotenv(ENV_FILE_PATH)
    return os.getenv(var_name, default)


def set_env_variable(var_name, value):
    dotenv_file = find_dotenv(ENV_FILE_PATH)
    set_key(dotenv_file, var_name, value)


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
    if not env_language:
        system_language = get_system_language()
        set_env_variable("LAUNCHER_INTERACTION_LANGUAGE", system_language)
        env_language = system_language

    i18n.set("locale", env_language)


def t(key, **kwargs):
    return i18n.t(key, **kwargs)
