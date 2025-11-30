"""
Enterprise Configuration Management
Centralized configuration with environment-based settings
"""

import os
from typing import Dict, Any, List, Optional
from dataclasses import dataclass, field
from enum import Enum

class Environment(str, Enum):
    DEVELOPMENT = "development"
    STAGING = "staging"
    PRODUCTION = "production"
    TESTING = "testing"

class LogLevel(str, Enum):
    DEBUG = "DEBUG"
    INFO = "INFO"
    WARNING = "WARNING"
    ERROR = "ERROR"
    CRITICAL = "CRITICAL"

@dataclass
class DatabaseConfig:
    """Database configuration with connection pooling"""
    url: str
    pool_size: int = 20
    max_overflow: int = 30
    pool_timeout: int = 30
    pool_recycle: int = 3600
    retry_attempts: int = 3
    retry_delay: float = 1.0
    health_check_interval: int = 60
    enable_monitoring: bool = True

@dataclass
class SecurityConfig:
    """Security configuration"""
    secret_key: str
    algorithm: str = "HS256"
    access_token_expire_minutes: int = 30
    refresh_token_expire_days: int = 7
    password_min_length: int = 8
    max_login_attempts: int = 5
    lockout_duration_minutes: int = 15
    rate_limit_per_minute: int = 60

@dataclass
class LLMConfig:
    """LLM and AI configuration"""
    openai_api_key: str
    openai_model: str = "gpt-4-turbo-preview"
    anthropic_api_key: Optional[str] = None
    max_tokens: int = 4000
    temperature: float = 0.7
    timeout_seconds: int = 30
    retry_attempts: int = 3
    rate_limit_per_minute: int = 60
    enable_caching: bool = True
    cache_ttl_seconds: int = 3600

@dataclass
class MonitoringConfig:
    """Monitoring and observability configuration"""
    enable_prometheus: bool = True
    enable_sentry: bool = True
    enable_tracing: bool = True
    sentry_dsn: Optional[str] = None
    jaeger_endpoint: Optional[str] = None
    log_level: LogLevel = LogLevel.INFO
    metrics_port: int = 9090
    health_check_interval: int = 30

class EnterpriseConfig:
    """Enterprise configuration manager"""
    
    def __init__(self, environment: Environment = None):
        self.environment = environment or Environment(os.getenv("ENVIRONMENT", "development"))
        self._load_config()
    
    def _load_config(self):
        """Load configuration based on environment"""
        
        # Database Configuration
        self.database = DatabaseConfig(
            url=os.getenv("DATABASE_URL", self._get_default_db_url()),
            pool_size=int(os.getenv("DB_POOL_SIZE", "20")),
            max_overflow=int(os.getenv("DB_MAX_OVERFLOW", "30"))
        )
        
        # Security Configuration
        self.security = SecurityConfig(
            secret_key=os.getenv("SECRET_KEY", self._generate_secret_key()),
            access_token_expire_minutes=int(os.getenv("ACCESS_TOKEN_EXPIRE_MINUTES", "30")),
            max_login_attempts=int(os.getenv("MAX_LOGIN_ATTEMPTS", "5"))
        )
        
        # LLM Configuration
        self.llm = LLMConfig(
            openai_api_key=os.getenv("OPENAI_API_KEY", ""),
            openai_model=os.getenv("OPENAI_MODEL", "gpt-4-turbo-preview"),
            anthropic_api_key=os.getenv("ANTHROPIC_API_KEY"),
            max_tokens=int(os.getenv("LLM_MAX_TOKENS", "4000")),
            temperature=float(os.getenv("LLM_TEMPERATURE", "0.7"))
        )
        
        # Monitoring Configuration
        self.monitoring = MonitoringConfig(
            enable_prometheus=os.getenv("ENABLE_PROMETHEUS", "true").lower() == "true",
            enable_sentry=os.getenv("ENABLE_SENTRY", "true").lower() == "true",
            sentry_dsn=os.getenv("SENTRY_DSN"),
            log_level=LogLevel(os.getenv("LOG_LEVEL", "INFO"))
        )
        
        # Environment-specific overrides
        self._apply_environment_overrides()
    
    def _get_default_db_url(self) -> str:
        """Get default database URL based on environment"""
        if self.environment == Environment.PRODUCTION:
            return "postgresql://user:password@prod-db:5432/neocred"
        elif self.environment == Environment.STAGING:
            return "postgresql://user:password@staging-db:5432/neocred"
        elif self.environment == Environment.TESTING:
            return "sqlite:///./test.db"
        else:
            return "postgresql://user:password@localhost:5432/neocred"
    
    def _generate_secret_key(self) -> str:
        """Generate a secret key if not provided"""
        import secrets
        return secrets.token_urlsafe(32)
    
    def _apply_environment_overrides(self):
        """Apply environment-specific configuration overrides"""
        if self.environment == Environment.PRODUCTION:
            # Production optimizations
            self.database.pool_size = 50
            self.database.max_overflow = 100
            self.security.access_token_expire_minutes = 15
            self.monitoring.log_level = LogLevel.WARNING
            
        elif self.environment == Environment.DEVELOPMENT:
            # Development optimizations
            self.database.pool_size = 5
            self.database.max_overflow = 10
            self.monitoring.log_level = LogLevel.DEBUG
            self.llm.enable_caching = False
            
        elif self.environment == Environment.TESTING:
            # Testing optimizations
            self.database.pool_size = 1
            self.database.max_overflow = 5
            self.security.access_token_expire_minutes = 60
            self.monitoring.enable_prometheus = False
            self.monitoring.enable_sentry = False
    
    def get_database_url(self, async_driver: bool = False) -> str:
        """Get database URL with optional async driver"""
        if async_driver and "postgresql://" in self.database.url:
            return self.database.url.replace("postgresql://", "postgresql+asyncpg://")
        return self.database.url
    
    def is_production(self) -> bool:
        """Check if running in production"""
        return self.environment == Environment.PRODUCTION
    
    def is_development(self) -> bool:
        """Check if running in development"""
        return self.environment == Environment.DEVELOPMENT

# Global configuration instance
config = EnterpriseConfig()