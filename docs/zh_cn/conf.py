# Configuration file for the Sphinx documentation builder.
#
# This file only contains a selection of the most common options. For a full
# list see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Path setup --------------------------------------------------------------

# If extensions (or modules to document with autodoc) are in another directory,
# add these directories to sys.path here. If the directory is relative to the
# documentation root, use os.path.abspath to make it absolute, like shown here.

import os
import re
import sys

sys.path.insert(0, os.path.abspath('../..'))

# -- Project information -----------------------------------------------------
project = 'Lagent'
copyright = '2020-2030, InternLM'
author = 'InternLM'
language = 'zh_CN'

# The full version, including alpha/beta/rc tags
version_file = '../../lagent/version.py'
with open(version_file) as f:
    exec(compile(f.read(), version_file, 'exec'))
__version__ = locals()['__version__']
release = __version__

# -- General configuration ---------------------------------------------------

# Add any Sphinx extension module names here, as strings. They can be
# extensions coming with Sphinx (named 'sphinx.ext.*') or your custom
# ones.
extensions = [
    'sphinx_rtd_theme',
    'myst_nb',
    'autoapi.extension',
    'sphinx_markdown_tables',
    'sphinx.ext.autodoc',
    'sphinx.ext.napoleon',
    'sphinx.ext.viewcode',
]

nb_output_stderr = 'remove-warn'
autodoc_typehints = 'description'

# sphinx-autoapi configuration
autoapi_dirs = ['../../lagent']
autoapi_options = [
    'members',
    'undoc-members',
    'show-inheritance',
    'show-module-summary',
]
autoapi_ignore = ['*migrations*', '*command.py', '*cli.py']
autoapi_template_dir = '_templates/autoapi'
autoapi_add_toctree_entry = False

# Add any paths that contain templates here, relative to this directory.
templates_path = ['_templates']

# List of patterns, relative to source directory, that match files and
# directories to ignore when looking for source files.
# This pattern also affects html_static_path and html_extra_path.
exclude_patterns = []

# -- Options for HTML output -------------------------------------------------

# The theme to use for HTML and HTML Help pages.  See the documentation for
# a list of builtin themes.
#
html_theme = 'sphinx_rtd_theme'
html_theme_options = {
    'navigation_depth': 3,
    'titles_only': False,
    'style_nav_header_background': '#4fabab',
}
html_context = {
    'display_github': True,
    'github_host': 'github.com',
    'github_user': 'InternLM',
    'github_repo': 'lagent',
    'github_version': 'main',
    'conf_py_path': '/docs/zh_cn/',
}
html_title = 'Lagent'
html_logo = '../imgs/lagent_logo.png'
html_favicon = '../imgs/lagent_icon.png'

master_doc = 'index'

# Add any paths that contain custom static files (such as style sheets) here,
# relative to this directory. They are copied after the builtin static files,
# so a file named 'default.css' will overwrite the builtin 'default.css'.
html_static_path = ['_static']


def custom_skip(app, what, name, obj, skip, options):
    if what in ['data', 'function', 'class'] and re.search('logger', name):
        skip = True
    return skip


def setup(sphinx):
    sphinx.connect('autoapi-skip-member', custom_skip)
