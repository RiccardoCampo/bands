#!/bin/bash

echo "Apply database migrations"
export DATABASE_USERNAME=root
export DATABASE_PASSWORD=$MYSQL_ROOT_PASSWORD

.venv/bin/python manage.py migrate


echo "Starting server"
export DATABASE_USERNAME=$DATABASE_APP_USERNAME
export DATABASE_PASSWORD=$DATABASE_APP_USER_PASSWORD

if [[ $USE_SSL == 1 ]]; then
  echo "Using SSL"
	.venv/bin/gunicorn --certfile=certificate.pem --keyfile=privatekey.pem --bind 0.0.0.0:8000 bands_backend.wsgi:application
else
	.venv/bin/gunicorn --bind 0.0.0.0:8000 bands_backend.wsgi:application
fi