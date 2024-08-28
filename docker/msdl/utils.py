import os
import shutil
import sys
from msdl.config import TEMP_DIR, PACKAGE_DIR
from msdl.translations.i18n_setup import t


def ensure_directory(path):
    if not os.path.exists(path):
        os.makedirs(path)
        print(t("dir_created", dir=path))


def copy_templates_to_temp(template_files):
    template_dir = os.path.join(PACKAGE_DIR, "templates")

    ensure_directory(TEMP_DIR)

    for filename in template_files:
        src = os.path.join(template_dir, filename)
        dst = os.path.join(TEMP_DIR, filename)
        if os.path.exists(src):
            shutil.copy2(src, dst)
            print(t("file_copied", file=filename))
        else:
            print(t("file_not_found", file=filename))
            sys.exit(1)
