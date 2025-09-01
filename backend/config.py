"""Enterprise Configuration Management"""
from pydantic_settings import BaseSettings
from typing import Optional
import os

class Settings(BaseSettings):
    # App Configuration
    app_name: str = "NeoCred FinBot API"
    app_version: str = "2.0.0"
    environment: str = "production"
    debug: bool = False
    
    # Server Configuration
    host: str = "0.0.0.0"
    port: int = 8001
    workers: int = 4
    
    # Security
    secret_key: str = "your-secret-key-change-in-production"
    allowed_hosts: str = "neocred.in,*.neocred.in,localhost,127.0.0.1"
    
    # OpenAI Configuration
    openai_api_key: str
    openai_model: str = "gpt-4-turbo-preview"
    openai_max_tokens: int = 800
    openai_temperature: float = 0.7
    
    # Database Configuration
    database_url: str = "sqlite:///./neocred.db"
    
    # Redis Configuration
    redis_url: str = "redis://localhost:6379/0"
    redis_cache_ttl: int = 1800  # 30 minutes
    
    # Rate Limiting
    rate_limit_requests: int = 100
    rate_limit_window: int = 60  # seconds
    chat_rate_limit: int = 10    # requests per minute
    
    # Caching
    cache_enabled: bool = True
    news_cache_ttl: int = 1800   # 30 minutes
    digest_cache_ttl: int = 3600 # 1 hour
    
    # Circuit Breaker
    circuit_breaker_failure_threshold: int = 5
    circuit_breaker_recovery_timeout: int = 30
    
    # Monitoring
    metrics_enabled: bool = True
    log_level: str = "INFO"
    
    # External APIs
    request_timeout: int = 10
    max_retries: int = 3
    
    class Config:
        env_file = ".env"
        case_sensitive = False

settings = Settings()