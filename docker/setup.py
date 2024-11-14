from setuptools import find_packages, setup

setup(
    name="msdl",
    version="0.1.1",
    description="MindSearch Docker Launcher",
    packages=find_packages(),
    python_requires=">=3.7",
    install_requires=[
        "pyyaml>=6.0",
        "python-i18n>=0.3.9",
        "inquirerpy>=0.3.4",
        "python-dotenv>=0.19.1",
    ],
    entry_points={
        "console_scripts": [
            "msdl=msdl.__main__:main",
        ],
    },
    include_package_data=True,
    package_data={
        "msdl": ["translations/*.yaml", "templates/*"],
    },
)
