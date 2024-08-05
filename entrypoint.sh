#!/bin/bash

# Handle argparse arguments
python app.py "$@"

# start uvicorn
exec conda run --no-capture-output -n fastapi uvicorn mindsearch.app:app --host 0.0.0.0 --port 8002 --reload
