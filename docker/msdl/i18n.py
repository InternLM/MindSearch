# msdl/translations/i18n.py

import os
import i18n
import locale
from dotenv import load_dotenv, set_key, find_dotenv
from msdl.config import TRANSLATIONS_DIR, ENV_FILE_PATH
from pathlib import Path

# Load environment variables at module level
load_dotenv(ENV_FILE_PATH)

def get_env_variable(var_name, default=None):
    return os.getenv(var_name, default)

def set_env_variable(var_name, value):
    dotenv_file = find_dotenv(ENV_FILE_PATH)
    set_key(dotenv_file, var_name, value)
    # Reload environment variables after setting
    os.environ[var_name] = value

def get_system_language():
    try:
        return locale.getlocale()[0].split("_")[0]
    except:
        return "en"

def get_available_languages():
    """Get list of available language codes from translation files"""
    translations_path = Path(TRANSLATIONS_DIR)
    if not translations_path.exists():
        return ["en"]
    return [f.stem for f in translations_path.glob("*.yaml")]

def set_language(language_code):
    """Set the interaction language and persist it to .env file"""
    available_langs = get_available_languages()
    if language_code not in available_langs:
        print(f"Warning: Language '{language_code}' not available. Using 'en' instead.")
        language_code = "en"
    
    set_env_variable("LAUNCHER_INTERACTION_LANGUAGE", language_code)
    i18n.set("locale", language_code)


def setup_i18n():
    # Initialize i18n settings
    i18n.load_path.append(TRANSLATIONS_DIR)
    i18n.set("filename_format", "{locale}.{format}")
    i18n.set("file_format", "yaml")

    # Get language from environment
    env_language = get_env_variable("LAUNCHER_INTERACTION_LANGUAGE")
    if not env_language:
        # If no language is set, use English as default without saving to .env
        env_language = "en"

    # Force reload translations
    i18n.set("locale", None)  # Clear current locale
    i18n.set("locale", env_language)  # Set new locale


def t(key, **kwargs):
    return i18n.t(key, **kwargs)
