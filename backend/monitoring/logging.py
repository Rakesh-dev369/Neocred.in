"""Structured Logging Configuration"""
import structlog
import logging
import sys
import os
from datetime import datetime

def setup_logging():
    """Configure structured logging"""
    log_level = os.getenv("LOG_LEVEL", "INFO").upper()
    
    # Configure structlog
    structlog.configure(
        processors=[
            structlog.stdlib.filter_by_level,
            structlog.stdlib.add_logger_name,
            structlog.stdlib.add_log_level,
            structlog.stdlib.PositionalArgumentsFormatter(),
            structlog.processors.TimeStamper(fmt="iso"),
            structlog.processors.StackInfoRenderer(),
            structlog.processors.format_exc_info,
            structlog.processors.UnicodeDecoder(),
            structlog.processors.JSONRenderer()
        ],
        context_class=dict,
        logger_factory=structlog.stdlib.LoggerFactory(),
        wrapper_class=structlog.stdlib.BoundLogger,
        cache_logger_on_first_use=True,
    )
    
    # Configure standard logging
    logging.basicConfig(
        format="%(message)s",
        stream=sys.stdout,
        level=getattr(logging, log_level),
    )

# Create logger instance
logger = structlog.get_logger("neocred")

def log_request(method: str, path: str, status_code: int, duration: float):
    """Log HTTP request"""
    logger.info(
        "HTTP request",
        method=method,
        path=path,
        status_code=status_code,
        duration_ms=round(duration * 1000, 2)
    )

def log_error(error: Exception, context: dict = None):
    """Log error with context"""
    logger.error(
        "Application error",
        error=str(error),
        error_type=type(error).__name__,
        context=context or {}
    )

def log_business_event(event: str, data: dict = None):
    """Log business events"""
    logger.info(
        "Business event",
        event=event,
        data=data or {}
    )