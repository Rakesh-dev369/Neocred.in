"""Sentry Error Tracking Configuration"""
import sentry_sdk
from sentry_sdk.integrations.fastapi import FastApiIntegration
from sentry_sdk.integrations.sqlalchemy import SqlalchemyIntegration
from sentry_sdk.integrations.redis import RedisIntegration
import os

def setup_sentry():
    """Initialize Sentry error tracking"""
    sentry_dsn = os.getenv("SENTRY_DSN")
    environment = os.getenv("ENVIRONMENT", "development")
    
    if sentry_dsn:
        sentry_sdk.init(
            dsn=sentry_dsn,
            environment=environment,
            traces_sample_rate=0.1,
            profiles_sample_rate=0.1,
            integrations=[
                FastApiIntegration(auto_enabling_integrations=True),
                SqlalchemyIntegration(),
                RedisIntegration(),
            ],
            before_send=filter_sensitive_data,
        )

def filter_sensitive_data(event, hint):
    """Filter sensitive data from Sentry events"""
    # Remove sensitive headers
    if 'request' in event and 'headers' in event['request']:
        headers = event['request']['headers']
        sensitive_headers = ['authorization', 'cookie', 'x-api-key']
        for header in sensitive_headers:
            if header in headers:
                headers[header] = '[Filtered]'
    
    # Remove sensitive form data
    if 'request' in event and 'data' in event['request']:
        data = event['request']['data']
        if isinstance(data, dict):
            sensitive_fields = ['password', 'token', 'secret']
            for field in sensitive_fields:
                if field in data:
                    data[field] = '[Filtered]'
    
    return event

def capture_exception(error: Exception, extra_data: dict = None):
    """Capture exception with additional context"""
    with sentry_sdk.push_scope() as scope:
        if extra_data:
            for key, value in extra_data.items():
                scope.set_extra(key, value)
        sentry_sdk.capture_exception(error)

def capture_message(message: str, level: str = "info", extra_data: dict = None):
    """Capture custom message"""
    with sentry_sdk.push_scope() as scope:
        if extra_data:
            for key, value in extra_data.items():
                scope.set_extra(key, value)
        sentry_sdk.capture_message(message, level=level)