style:
	black --diff --fast --check --no-color .
	bandit -c pyproject.toml --recursive --quiet .
	mypy .
	flake8 --config .flake .
	ruff check .
	isort --diff --quiet .

style-fix:
	black .
	ruff check --fix --fix-only .
	isort .

test:
	echo "Unit tests..."
	pytest
	echo "Integration tests..."
	python .\manage.py test tests.integration

run:
	python manage.py runserver
