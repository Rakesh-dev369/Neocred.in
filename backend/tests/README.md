# Testing & Quality Module

## Features Implemented ✅

### Pytest Core Framework
- Async test support with pytest-asyncio
- Test fixtures for database and client setup
- Coverage reporting with pytest-cov
- Configurable test markers and settings

### Factory Boy Test Data
- User, ChatSession, FinancialData factories
- Faker integration for realistic test data
- Sequence and SubFactory relationships
- Fuzzy choice for enum fields

### Code Quality Tools
- **Black** - Code formatting (88 char line length)
- **Flake8** - Code linting with custom rules
- **MyPy** - Static type checking
- **Locust** - Load testing (optional)

### Test Structure
```
tests/
├── conftest.py          # Pytest configuration & fixtures
├── factories.py         # Factory Boy test data factories
├── test_auth.py         # Authentication endpoint tests
├── test_api.py          # API endpoint tests
├── test_models.py       # Database model tests
├── test_async.py        # Async operation tests
└── load_test.py         # Locust load testing
```

## Quick Start

### Run Tests
```bash
# All tests with coverage
pytest --cov=. --cov-report=term-missing

# Specific test file
pytest tests/test_auth.py

# Async tests only
pytest -m asyncio

# With coverage HTML report
pytest --cov=. --cov-report=html
```

### Code Quality
```bash
# Format code
black .

# Check formatting
black --check .

# Lint code
flake8 .

# Type check
mypy .

# Run all quality checks
python scripts/quality_check.py
```

### Load Testing
```bash
# Start load test
locust -f tests/load_test.py --host=http://localhost:8000

# Web UI at http://localhost:8089
```

## Configuration Files

### pytest.ini
- Test discovery settings
- Coverage configuration
- Async mode enabled
- Custom markers

### pyproject.toml
- Black formatting rules
- MyPy type checking settings
- Module overrides for third-party packages

### .flake8
- Line length: 88 characters
- Ignore specific rules (E203, E501, W503)
- Per-file ignores for __init__.py and tests

## Test Examples

### Basic Test
```python
def test_health_check(client):
    response = client.get("/health")
    assert response.status_code == 200
```

### Async Test
```python
@pytest.mark.asyncio
async def test_create_user(db_session):
    user = await create_user(db_session, user_data)
    assert user.email == "test@example.com"
```

### Factory Usage
```python
def test_user_creation():
    user = UserFactory(email="test@example.com")
    assert user.email == "test@example.com"
```

## Quality Standards

- **Test Coverage**: Minimum 80%
- **Code Style**: Black formatting enforced
- **Type Safety**: MyPy strict mode
- **Linting**: Flake8 with custom rules
- **Performance**: Load testing with Locust

## Development Workflow

1. **Write Tests First** (TDD approach)
2. **Run Quality Checks** before commits
3. **Maintain Coverage** above 80%
4. **Format Code** with Black
5. **Type Annotations** for all functions

## Makefile Commands

```bash
make test          # Run tests with coverage
make lint          # Run Flake8 linting
make format        # Format code with Black
make type-check    # Run MyPy type checking
make quality-check # Run all quality checks
make load-test     # Run Locust load tests
```