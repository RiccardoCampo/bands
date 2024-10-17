"""
Django settings for bands_backend project.
"""

import os
from pathlib import Path

from dotenv import load_dotenv

load_dotenv()

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent

SECRET_KEY = os.getenv("SECRET_KEY")

DEBUG = True

ALLOWED_HOSTS: list[str] = []


# Application definition

INSTALLED_APPS = ["bands", "rest_framework", "django.contrib.contenttypes", "django.contrib.auth"]

MIDDLEWARE: list[str] = []

ROOT_URLCONF = "bands_backend.urls"

WSGI_APPLICATION = "bands_backend.wsgi.application"


# Database

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.mysql",
        "HOST": os.getenv("DB_HOST"),
        "PORT": os.getenv("DB_PORT"),
        "USER": os.getenv("DB_USER"),
        "PASSWORD": os.getenv("DB_PASSWORD"),
        "NAME": os.getenv("DB_NAME"),
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
