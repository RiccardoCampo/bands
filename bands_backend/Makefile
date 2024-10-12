style:
	black --diff --fast --check --no-color .
	bandit --recursive --quiet .
	mypy .
	flake8 --config .flake .
	ruff check .
	isort --diff --quiet .

style-fix:
	black .
	ruff check --fix --fix-only .
	isort .

run:
	python manage.py runserver