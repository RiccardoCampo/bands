FROM python:3.13-slim AS base

ENV PYTHONFAULTHANDLER=1 \
    PYTHONHASHSEED=random \
    PYTHONUNBUFFERED=1

RUN mkdir app
WORKDIR /app

# Install dependencies required to build and use mysqlclient package
RUN apt-get update && \
    apt-get install -y default-libmysqlclient-dev

# Stage 1: Base build stage
FROM base AS builder

# Install uv
COPY --from=ghcr.io/astral-sh/uv:latest /uv /uvx /bin/

# Install dependencies required to build mysqlclient package
RUN apt-get install -y pkg-config python3-dev build-essential

COPY pyproject.toml ./
RUN uv sync --no-dev --no-install-project

# Stage 2: Production stage
FROM base AS final

COPY --from=builder /app/.venv ./.venv
COPY bands bands
COPY bands_backend bands_backend
COPY manage.py entrypoint.sh ./

RUN useradd -m -r appuser && \
   chown -R appuser /app

USER appuser
