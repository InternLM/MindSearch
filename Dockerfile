FROM continuumio/miniconda3

ARG OPENAI_API_KEY
ENV OPENAI_API_KEY=${OPENAI_API_KEY}

ARG BING_API_KEY
ENV BING_API_KEY=${BING_API_KEY}

# Setting environment variables
ENV PATH=/opt/conda/bin:$PATH

# Cloning the git repository
RUN git clone https://github.com/InternLM/MindSearch.git /app

WORKDIR /app

# Create and activate the fastapi environment and install dependencies
RUN conda create --name fastapi python=3.10 -y && \
    conda run -n fastapi pip install -r requirements.txt && \
    conda clean --all -f -y

# Exposing the FastAPI Default Port
EXPOSE 8002

# Setting up the entry point
ENTRYPOINT ["/bin/bash", "-c", "source /opt/conda/etc/profile.d/conda.sh && conda activate fastapi && python -m mindsearch.app \"$@\" && exec uvicorn mindsearch.app:app --host 0.0.0.0 --port 8002"]
