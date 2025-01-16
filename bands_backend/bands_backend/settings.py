"""
Django settings for bands_backend project.
"""

import os
from pathlib import Path

APP_ENVIRONMENT = os.environ.get("APP_ENVIRONMENT", "LOCAL")

if APP_ENVIRONMENT == "LOCAL":
    from dotenv import load_dotenv

    load_dotenv()

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent

SECRET_KEY = os.getenv("SECRET_KEY")

DEBUG = bool(os.environ.get("DEBUG", default=0))

ALLOWED_HOSTS: list[str] = os.environ.get("DJANGO_ALLOWED_HOSTS", "127.0.0.1").split(",")


# Application definition

INSTALLED_APPS = [
    "bands",
    "rest_framework",
    "django.contrib.contenttypes",
    "django.contrib.auth",
    "corsheaders",
]

MIDDLEWARE: list[str] = ["corsheaders.middleware.CorsMiddleware"]

CORS_ALLOW_ALL_ORIGINS = True

ROOT_URLCONF = "bands_backend.urls"

WSGI_APPLICATION = "bands_backend.wsgi.application"


# Database

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.mysql",
        "HOST": os.getenv("DATABASE_HOST"),
        "PORT": os.getenv("DATABASE_PORT"),
        "USER": os.getenv("DATABASE_USERNAME"),
        "PASSWORD": os.getenv("DATABASE_PASSWORD"),
        "NAME": os.getenv("DATABASE_NAME"),
    }
}

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.debug",
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
            ],
        },
    },
]

# REST Framework

REST_FRAMEWORK = {
    "PAGE_SIZE": 5,
    "DEFAULT_PAGINATION_CLASS": "rest_framework.pagination.PageNumberPagination",
    "EXCEPTION_HANDLER": "bands.exception_handler.custom_exception_handler",
}
