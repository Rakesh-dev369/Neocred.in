# NeoCred Backend Makefile

.PHONY: help install test lint format type-check quality-check load-test jupyter lab security-check setup-devops clean

help:
	@echo "NeoCred Backend Development Commands"
	@echo "===================================="
	@echo "install       Install dependencies"
	@echo "test          Run tests with coverage"
	@echo "lint          Run code linting"
	@echo "format        Format code with Black"
	@echo "type-check    Run type checking with MyPy"
	@echo "quality-check Run all quality checks"
	@echo "load-test     Run load tests with Locust"
	@echo "jupyter       Start Jupyter Notebook"
	@echo "lab           Start JupyterLab"
	@echo "security-check Run security analysis"
	@echo "setup-devops  Setup DevOps environment"
	@echo "clean         Clean cache and temp files"

install:
	pip install -r requirements.txt

test:
	pytest --cov=. --cov-report=term-missing --cov-report=html

lint:
	flake8 .

format:
	black .

type-check:
	mypy .

quality-check:
	python scripts/quality_check.py

load-test:
	locust -f tests/load_test.py --host=http://localhost:8000

jupyter:
	jupyter notebook --port=8888 --no-browser --allow-root

lab:
	jupyterlab --port=8888 --no-browser --allow-root

security-check:
	python scripts/security_check.py

setup-devops:
	python scripts/setup_devops.py

clean:
	find . -type d -name "__pycache__" -exec rm -rf {} +
	find . -type f -name "*.pyc" -delete
	rm -rf .pytest_cache
	rm -rf .mypy_cache
	rm -rf htmlcov
	rm -rf .coverage
	rm -rf .ipynb_checkpoints