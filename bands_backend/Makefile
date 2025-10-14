style:
	bandit -c pyproject.toml --recursive --quiet .
	mypy .
	ruff check .
	isort --diff --quiet .

style-fix:
	ruff check --fix --fix-only .
	isort .

test:
	pytest

run:
	python manage.py runserver
