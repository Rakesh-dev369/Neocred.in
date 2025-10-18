"""Prometheus Metrics Collection"""
from prometheus_client import Counter, Histogram, Gauge, generate_latest
from prometheus_fastapi_instrumentator import Instrumentator
import time
import psutil
import os

# Custom metrics
REQUEST_COUNT = Counter('neocred_requests_total', 'Total requests', ['method', 'endpoint', 'status'])
REQUEST_DURATION = Histogram('neocred_request_duration_seconds', 'Request duration', ['method', 'endpoint'])
ACTIVE_USERS = Gauge('neocred_active_users', 'Number of active users')
CHAT_MESSAGES = Counter('neocred_chat_messages_total', 'Total chat messages')
CALCULATOR_USAGE = Counter('neocred_calculator_usage_total', 'Calculator usage', ['calculator_type'])

# System metrics
CPU_USAGE = Gauge('neocred_cpu_usage_percent', 'CPU usage percentage')
MEMORY_USAGE = Gauge('neocred_memory_usage_bytes', 'Memory usage in bytes')
DISK_USAGE = Gauge('neocred_disk_usage_percent', 'Disk usage percentage')

def setup_prometheus(app):
    """Setup Prometheus metrics for FastAPI"""
    instrumentator = Instrumentator(
        should_group_status_codes=False,
        should_ignore_untemplated=True,
        should_respect_env_var=True,
        should_instrument_requests_inprogress=True,
        excluded_handlers=["/metrics", "/health"],
        env_var_name="ENABLE_METRICS",
        inprogress_name="neocred_requests_inprogress",
        inprogress_labels=True,
    )
    
    instrumentator.instrument(app).expose(app, endpoint="/metrics")
    return instrumentator

def update_system_metrics():
    """Update system resource metrics"""
    CPU_USAGE.set(psutil.cpu_percent())
    MEMORY_USAGE.set(psutil.virtual_memory().used)
    DISK_USAGE.set(psutil.disk_usage('/').percent)

def track_chat_message():
    """Track chat message count"""
    CHAT_MESSAGES.inc()

def track_calculator_usage(calculator_type: str):
    """Track calculator usage"""
    CALCULATOR_USAGE.labels(calculator_type=calculator_type).inc()

def track_active_users(count: int):
    """Update active users count"""
    ACTIVE_USERS.set(count)