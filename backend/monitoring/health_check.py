"""Health Check Endpoint with Monitoring"""
from fastapi import APIRouter
from .prometheus import update_system_metrics, ACTIVE_USERS
from .logging import log_business_event
import asyncio
import psutil

router = APIRouter()

@router.get("/health")
async def health_check():
    """Enhanced health check with metrics"""
    # Update system metrics
    update_system_metrics()
    
    # Get system info
    cpu_percent = psutil.cpu_percent()
    memory = psutil.virtual_memory()
    disk = psutil.disk_usage('/')
    
    health_data = {
        "status": "healthy",
        "service": "NeoCred Backend",
        "version": "2.0.0",
        "system": {
            "cpu_percent": cpu_percent,
            "memory_percent": memory.percent,
            "disk_percent": disk.percent / disk.total * 100
        }
    }
    
    # Log health check
    log_business_event("health_check", health_data)
    
    return health_data

@router.get("/metrics/business")
async def business_metrics():
    """Business-specific metrics endpoint"""
    return {
        "active_users": ACTIVE_USERS._value._value,
        "system_health": "ok"
    }