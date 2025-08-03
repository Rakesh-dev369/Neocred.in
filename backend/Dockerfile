FROM python:3.11-slim

WORKDIR /app

# Install dependencies in one layer
COPY requirements.txt .
RUN pip install --no-cache-dir fastapi uvicorn openai python-dotenv

COPY . .

CMD ["uvicorn", "main_simple:app", "--host", "0.0.0.0", "--port", "8080"]