from InquirerPy import inquirer
import sys
import os
from pathlib import Path

from msdl.config import (
    CLOUD_LLM_DOCKERFILE,
    LOCAL_LLM_DOCKERFILE,
)
from msdl.i18n import (
    t,
    get_available_languages,
    set_language,
    get_env_variable,
)
from msdl.utils import (
    clean_api_key,
    get_model_formats,
    get_existing_api_key,
    save_api_key_to_env,
    validate_api_key,
)

SEARCH_ENGINES = {
    "DuckDuckGoSearch": {
        "name": "DuckDuckGo",
        "key": "DUCKDUCKGO",
        "requires_key": False,
        "env_var": None
    },
    "BingSearch": {
        "name": "Bing",
        "key": "BING",
        "requires_key": True,
        "env_var": "WEB_SEARCH_API_KEY"
    },
    "BraveSearch": {
        "name": "Brave",
        "key": "BRAVE",
        "requires_key": True,
        "env_var": "WEB_SEARCH_API_KEY"
    },
    "GoogleSearch": {
        "name": "Google Serper",
        "key": "GOOGLE",
        "requires_key": True,
        "env_var": "WEB_SEARCH_API_KEY"
    },
    "TencentSearch": {
        "name": "Tencent",
        "key": "TENCENT",
        "requires_key": True,
        "env_vars": ["TENCENT_SEARCH_SECRET_ID", "TENCENT_SEARCH_SECRET_KEY"]
    }
}

def get_language_choice():
    """Get user's language preference"""
    def _get_language_options():
        available_langs = get_available_languages()
        lang_choices = {
            "en": "English",
            "zh_CN": "中文"
        }
        return [{"name": f"{lang_choices.get(lang, lang)}", "value": lang} for lang in available_langs]

    current_lang = get_env_variable("LAUNCHER_INTERACTION_LANGUAGE")
    if not current_lang:
        lang_options = _get_language_options()
        language = inquirer.select(
            message=t("SELECT_INTERFACE_LANGUAGE"),
            choices=lang_options,
            default="en"
        ).execute()
        
        if language:
            set_language(language)
            sys.stdout.flush()
            restart_program()

def get_backend_language():
    """Get user's backend language preference"""
    return inquirer.select(
        message=t("SELECT_BACKEND_LANGUAGE"),
        choices=[
            {"name": t("CHINESE"), "value": "cn"},
            {"name": t("ENGLISH"), "value": "en"},
        ],
        default="cn",
    ).execute()

def get_model_choice():
    """Get user's model deployment type preference"""
    model_deployment_type = [
        {
            "name": t("CLOUD_MODEL"),
            "value": CLOUD_LLM_DOCKERFILE
        },
        {
            "name": t("LOCAL_MODEL"),
            "value": LOCAL_LLM_DOCKERFILE
        },
    ]

    return inquirer.select(
        message=t("MODEL_DEPLOYMENT_TYPE"),
        choices=model_deployment_type,
    ).execute()

def get_model_format(model):
    """Get user's model format preference"""
    model_formats = get_model_formats(model)
    return inquirer.select(
        message=t("MODEL_FORMAT_CHOICE"),
        choices=[{
            "name": format,
            "value": format
        } for format in model_formats],
    ).execute()

def handle_api_key_input(model, model_format):
    """Handle API key input and validation"""
    if model != CLOUD_LLM_DOCKERFILE:
        return

    env_var_name = {
        "internlm_silicon": "SILICON_API_KEY",
        "gpt4": "OPENAI_API_KEY",
        "qwen": "QWEN_API_KEY",
    }.get(model_format)

    existing_api_key = get_existing_api_key(env_var_name)

    if existing_api_key:
        use_existing = inquirer.confirm(
            message=t("CONFIRM_USE_EXISTING_API_KEY", ENV_VAR_NAME=env_var_name),
            default=True,
        ).execute()

        if use_existing:
            return

        print(t("CONFIRM_OVERWRITE_EXISTING_API_KEY", ENV_VAR_NAME=env_var_name))
    else:
        print(t("PLEASE_INPUT_NEW_API_KEY", ENV_VAR_NAME=env_var_name))

    while True:
        api_key = inquirer.secret(
            message=t("PLEASE_INPUT_NEW_API_KEY_FROM_ZERO", ENV_VAR_NAME=env_var_name)
        ).execute()
        cleaned_api_key = clean_api_key(api_key)

        if validate_api_key(cleaned_api_key, env_var_name, t):
            save_api_key_to_env(model_format, cleaned_api_key, t)
            break
        else:
            print(t("INVALID_API_KEY_FORMAT"))
            retry = inquirer.confirm(
                message=t("RETRY_API_KEY_INPUT"), default=True
            ).execute()
            if not retry:
                print(t("API_KEY_INPUT_CANCELLED"))
                sys.exit(1)

def get_search_engine():
    """Get user's preferred search engine and handle API key if needed"""
    search_engine = inquirer.select(
        message=t("SELECT_SEARCH_ENGINE"),
        choices=[{
            "name": f"{t(f'SEARCH_ENGINE_{info["key"]}')} ({t('NO_API_KEY_NEEDED') if not info['requires_key'] else t('API_KEY_REQUIRED')})",
            "value": engine
        } for engine, info in SEARCH_ENGINES.items()],
    ).execute()

    engine_info = SEARCH_ENGINES[search_engine]
    
    if engine_info['requires_key']:
        if search_engine == "TencentSearch":
            # Handle Tencent's special case with two keys
            for env_var in engine_info['env_vars']:
                is_id = "ID" in env_var
                message = t("TENCENT_ID_REQUIRED") if is_id else t("TENCENT_KEY_REQUIRED")
                existing_key = get_existing_api_key(env_var)
                if existing_key:
                    use_existing = inquirer.confirm(
                        message=t("CONFIRM_USE_EXISTING_API_KEY", ENV_VAR_NAME=env_var),
                        default=True,
                    ).execute()
                    if not use_existing:
                        _handle_api_key_input(env_var, message)
                else:
                    _handle_api_key_input(env_var, message)
        else:
            # Handle standard case with single WEB_SEARCH_API_KEY
            env_var = engine_info['env_var']
            existing_key = get_existing_api_key(env_var)
            if existing_key:
                use_existing = inquirer.confirm(
                    message=t("CONFIRM_USE_EXISTING_API_KEY", ENV_VAR_NAME=env_var),
                    default=True,
                ).execute()
                if not use_existing:
                    _handle_api_key_input(env_var, t("WEB_SEARCH_KEY_REQUIRED"))
            else:
                _handle_api_key_input(env_var, t("WEB_SEARCH_KEY_REQUIRED"))
    
    print(t("SEARCH_ENGINE_CONFIGURED", engine=engine_info['name']))
    return search_engine

def _handle_api_key_input(env_var_name, message=None):
    """Handle API key input and validation for a given environment variable"""
    if message is None:
        message = t("PLEASE_INPUT_NEW_API_KEY", ENV_VAR_NAME=env_var_name)
    print(message)
    
    while True:
        api_key = inquirer.secret(
            message=t("PLEASE_INPUT_NEW_API_KEY_FROM_ZERO", ENV_VAR_NAME=env_var_name)
        ).execute()
        cleaned_api_key = clean_api_key(api_key)

        if validate_api_key(cleaned_api_key, env_var_name, t):
            save_api_key_to_env(env_var_name, cleaned_api_key, t)
            break
        else:
            print(t("INVALID_API_KEY_FORMAT"))
            retry = inquirer.confirm(
                message=t("RETRY_API_KEY_INPUT"), default=True
            ).execute()
            if not retry:
                print(t("API_KEY_INPUT_CANCELLED"))
                sys.exit(1)

def restart_program():
    """Restart the current program with the same arguments"""
    print(t("LANGUAGE_CHANGED_RESTARTING"))
    python = sys.executable
    os.execl(python, python, *sys.argv)

def get_user_choices():
    """Get all user choices in a single function"""
    # Get language preference
    get_language_choice()
    
    # Get backend language
    backend_language = get_backend_language()
    
    # Get model choice
    model = get_model_choice()
    
    # Get model format
    model_format = get_model_format(model)
    
    # Get search engine choice
    search_engine = get_search_engine()
    
    # Handle API key if needed
    handle_api_key_input(model, model_format)
    
    return backend_language, model, model_format, search_engine
