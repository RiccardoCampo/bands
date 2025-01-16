FROM python:3.13-slim AS base

ENV PYTHONFAULTHANDLER=1 \
    PYTHONHASHSEED=random \
    PYTHONUNBUFFERED=1

RUN mkdir app
WORKDIR /app

# Install dependencies required to build mysqlclient package
RUN apt-get update && \
    apt-get install -y default-libmysqlclient-dev

# Stage 1: Base build stage
FROM base AS builder

# Install dependencies required to build mysqlclient package
RUN apt-get install -y pkg-config python3-dev build-essential

ENV PIP_DEFAULT_TIMEOUT=100 \
    PIP_DISABLE_PIP_VERSION_CHECK=1 \
    PIP_NO_CACHE_DIR=1 \
    POETRY_VERSION=2.0.1

RUN pip install "poetry==$POETRY_VERSION"

COPY pyproject.toml ./
RUN poetry config virtualenvs.in-project true && \
    poetry install --only=main --no-root

# Stage 2: Production stage
FROM base AS final

COPY --from=builder /app/.venv ./.venv
COPY bands bands
COPY bands_backend bands_backend
COPY manage.py entrypoint.sh ./

RUN useradd -m -r appuser && \
   chown -R appuser /app

USER appuser
