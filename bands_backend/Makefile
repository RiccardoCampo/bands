style:
	bandit -c pyproject.toml --recursive --quiet .
	mypy .
	ruff check .
	isort --diff --quiet .

style-fix:
	ruff check --fix --fix-only .
	isort .

test:
	echo "Unit tests..."
	pytest
	echo "Integration tests..."
	python .\manage.py test tests.integration

run:
	python manage.py runserver
