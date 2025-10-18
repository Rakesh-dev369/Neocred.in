# NeoCred Backend

## 🏗️ Complete Backend Tech Stack for Robust ML-Ready System

### **Core Framework**
- **FastAPI** - High-performance async API framework
- **Python 3.11+** - Latest Python version
- **Uvicorn** - ASGI server for development
- **Gunicorn** - Production WSGI server

### **Machine Learning & AI**
- **Scikit-learn** - Traditional ML algorithms
- **XGBoost** - Gradient boosting
- **LightGBM** - Fast gradient boosting
- **TensorFlow** - Deep learning framework
- **PyTorch** - Alternative deep learning
- **Pandas** - Data manipulation
- **NumPy** - Numerical computing
- **MLflow** - ML lifecycle management
- **Weights & Biases** - Experiment tracking

### **Database & Storage**
- ✅ **PostgreSQL** – Main relational DB (finance-grade reliability)
- ✅ **Redis** – Cache + session store
- ✅ **MongoDB** – For unstructured user or LLM logs

### **Data Processing & ETL**
- ✅ **Apache Airflow** – Workflow orchestration
- ✅ **Celery** – Background task queue (notifications, heavy jobs)
- ⚙️ **Apache Kafka** – Use later for event streaming (not MVP critical)
- ✅ **Dask** – Parallel computation for ML preprocessing
- ✅ **Great Expectations** – Data quality validation

## 🚀 Quick Start

### Development Mode
```bash
# Install dependencies
pip install -r requirements.txt

# Copy environment file
cp .env.example .env

# Start development server
python start.py
```

### Production Mode
```bash
# Set environment
export ENVIRONMENT=production

# Start production server
python start.py
```

### Docker Deployment
```bash
# Build image
docker build -t neocred-backend .

# Run container
docker run -p 8000:8000 neocred-backend
```

## 📁 Project Structure
```
backend/
├── main.py              # FastAPI application
├── start.py             # Startup script
├── gunicorn.conf.py     # Gunicorn configuration
├── requirements.txt     # Dependencies
├── Dockerfile          # Container configuration
├── .env.example        # Environment template
├── ml/                 # ML & AI Components
│   ├── __init__.py     # ML module init
│   ├── models.py       # ML models (XGBoost, LightGBM, TF, PyTorch)
│   ├── training.py     # Training pipeline with MLflow/W&B
│   ├── utils.py        # Data preprocessing utilities
│   └── config.py       # ML configuration
├── database/           # Database Components
│   ├── __init__.py     # Database module init
│   ├── postgresql.py   # PostgreSQL models and config
│   ├── redis_client.py # Redis cache and sessions
│   ├── mongodb.py      # MongoDB for unstructured data
│   └── connection.py   # Database connection manager
├── data_processing/    # Data Processing & ETL
│   ├── __init__.py     # Data processing module init
│   ├── celery_tasks.py # Background tasks with Celery
│   ├── dask_processing.py # Parallel processing with Dask
│   ├── data_validation.py # Data quality with Great Expectations
│   └── pipeline_config.py # Configuration for all components
├── airflow/            # Apache Airflow
│   └── dags/          # Airflow DAGs
│       └── financial_data_pipeline.py # Main data pipeline
└── README.md           # This file
```

## 🔧 Configuration

### Environment Variables
- `ENVIRONMENT`: development/production
- `PORT`: Server port (default: 8000)
- `DATABASE_URL`: PostgreSQL connection string
- `REDIS_URL`: Redis connection string
- `MONGODB_URL`: MongoDB connection string
- `OPENAI_API_KEY`: OpenAI API key
- `SECRET_KEY`: Application secret key

## 📊 API Documentation
- **Swagger UI**: http://localhost:8000/docs
- **ReDoc**: http://localhost:8000/redoc
- **Health Check**: http://localhost:8000/health

## 🛡️ Production Features
- **Gunicorn** with multiple workers
- **Health checks** and monitoring
- **CORS** configuration
- **Security** middleware
- **Docker** containerization
- **Environment-based** configuration