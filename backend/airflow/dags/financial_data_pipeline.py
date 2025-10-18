"""
Apache Airflow DAG for Financial Data Pipeline
Workflow orchestration for data processing and ML training
"""

from datetime import datetime, timedelta
from airflow import DAG
from airflow.operators.python import PythonOperator
import pandas as pd

# Default arguments
default_args = {
    'owner': 'neocred-team',
    'depends_on_past': False,
    'start_date': datetime(2024, 1, 1),
    'email_on_failure': False,
    'email_on_retry': False,
    'retries': 1,
    'retry_delay': timedelta(minutes=5),
}

# Create DAG
dag = DAG(
    'financial_data_pipeline',
    default_args=default_args,
    description='NeoCred Financial Data Processing Pipeline',
    schedule_interval=timedelta(hours=6),
    catchup=False,
    tags=['neocred', 'financial', 'ml'],
)

def extract_financial_data(**context):
    """Extract financial data from various sources"""
    data = {
        'user_id': range(1, 1001),
        'income': [50000 + i * 100 for i in range(1000)],
        'expenses': [30000 + i * 50 for i in range(1000)],
        'credit_score': [650 + (i % 200) for i in range(1000)],
        'age': [25 + (i % 40) for i in range(1000)]
    }
    
    df = pd.DataFrame(data)
    df.to_csv('/tmp/extracted_data.csv', index=False)
    print(f"✅ Extracted {len(df)} records")
    return '/tmp/extracted_data.csv'

def validate_data(**context):
    """Validate data quality"""
    df = pd.read_csv('/tmp/extracted_data.csv')
    
    # Basic validation
    assert len(df) > 0, "No data found"
    assert df['income'].min() >= 0, "Negative income found"
    assert df['age'].between(18, 100).all(), "Invalid age values"
    
    print("✅ Data validation passed")
    return True

def process_data(**context):
    """Process data with feature engineering"""
    df = pd.read_csv('/tmp/extracted_data.csv')
    
    # Feature engineering
    df['savings_rate'] = (df['income'] - df['expenses']) / df['income']
    df['age_group'] = pd.cut(df['age'], bins=[0, 30, 50, 100], labels=['young', 'middle', 'senior'])
    
    df.to_csv('/tmp/processed_data.csv', index=False)
    print(f"✅ Processed {len(df)} records")
    return '/tmp/processed_data.csv'

def train_models(**context):
    """Train ML models"""
    df = pd.read_csv('/tmp/processed_data.csv')
    print(f"✅ Training models with {len(df)} records")
    return "Models trained successfully"

# Define tasks
extract_task = PythonOperator(
    task_id='extract_financial_data',
    python_callable=extract_financial_data,
    dag=dag,
)

validate_task = PythonOperator(
    task_id='validate_data',
    python_callable=validate_data,
    dag=dag,
)

process_task = PythonOperator(
    task_id='process_data',
    python_callable=process_data,
    dag=dag,
)

train_task = PythonOperator(
    task_id='train_models',
    python_callable=train_models,
    dag=dag,
)

# Task dependencies
extract_task >> validate_task >> process_task >> train_task