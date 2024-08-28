import os
import i18n
import locale


def setup_i18n(script_dir):
    translations_dir = os.path.dirname(os.path.abspath(__file__))
    i18n.load_path.append(translations_dir)
    i18n.set("filename_format", "{locale}.{format}")
    i18n.set("file_format", "yaml")
    i18n.set("locale", get_system_language())


def get_system_language():
    try:
        return locale.getlocale()[0].split("_")[0]
    except:
        return "en"


def t(key, **kwargs):
    return i18n.t(key, **kwargs)
