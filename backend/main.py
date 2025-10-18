"""
NeoCred Enterprise Backend - FastAPI Application
Advanced Enterprise Architecture with Unified Components
"""

from fastapi import FastAPI, HTTPException, Depends, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.middleware.trustedhost import TrustedHostMiddleware
from fastapi.middleware.gzip import GZipMiddleware
from contextlib import asynccontextmanager
import uvicorn
import logging
from dotenv import load_dotenv
import os

# Enterprise imports
from config import config
from config.ssl_config import configure_ssl_security, get_cors_origins
from models import Base
from database.connection import db_manager
from auth.routes import router as auth_router
from auth.rate_limiter import limiter, rate_limit_handler
from slowapi.errors import RateLimitExceeded
from api.enterprise_routes import router as api_router
from monitoring.prometheus import setup_prometheus
from monitoring.sentry_config import setup_sentry
from monitoring.logging import setup_logging
from monitoring.tracing import setup_tracing
from monitoring.middleware import MonitoringMiddleware
from monitoring.health_check import router as health_router
from realtime.websocket_routes import router as websocket_router
from realtime.sse_routes import router as sse_router
from credit_analysis.routes import router as credit_router
from automl.routes import router as intelligence_router
from llm_automl.routes import router as llm_automl_router

# Load environment variables
load_dotenv()

# Setup logging
logging.basicConfig(
    level=config.monitoring.log_level.value,
    format="[%(asctime)s] %(levelname)s in %(module)s: %(message)s"
)
logger = logging.getLogger(__name__)

@asynccontextmanager
async def lifespan(app: FastAPI):
    """Enterprise application lifespan with comprehensive startup/shutdown"""
    # Startup
    logger.info("🚀 NeoCred Enterprise Backend Starting...")
    logger.info(f"Environment: {config.environment.value}")
    logger.info(f"Database Pool Size: {config.database.pool_size}")
    
    try:
        # Initialize monitoring
        setup_logging()
        if config.monitoring.enable_sentry:
            setup_sentry()
        
        # Connect to databases
        await db_manager.connect_all()
        
        # Health check
        health_status = await db_manager.health_check()
        logger.info(f"Database Health: {health_status}")
        
        logger.info("✅ Enterprise backend startup completed")
        
    except Exception as e:
        logger.error(f"❌ Startup failed: {e}")
        raise
    
    yield
    
    # Shutdown
    logger.info("🛑 NeoCred Enterprise Backend Shutting down...")
    try:
        await db_manager.disconnect_all()
        logger.info("✅ Graceful shutdown completed")
    except Exception as e:
        logger.error(f"❌ Shutdown error: {e}")

# Initialize Enterprise FastAPI app
app = FastAPI(
    title="NeoCred Enterprise API",
    description="Advanced AI-Powered Financial Platform with Enterprise Features",
    version="2.0.0",
    docs_url="/docs" if not config.is_production() else None,
    redoc_url="/redoc" if not config.is_production() else None,
    openapi_url="/openapi.json" if not config.is_production() else None,
    lifespan=lifespan
)

# Enterprise middleware stack
app.add_middleware(GZipMiddleware, minimum_size=1000)

# Configure SSL and security
configure_ssl_security(app)

# Rate limiting
app.state.limiter = limiter
app.add_exception_handler(RateLimitExceeded, rate_limit_handler)

# Monitoring setup
if config.monitoring.enable_prometheus:
    setup_prometheus(app)
if config.monitoring.enable_tracing:
    setup_tracing(app)
app.add_middleware(MonitoringMiddleware)

# CORS Configuration with SSL support
app.add_middleware(
    CORSMiddleware,
    allow_origins=get_cors_origins(),
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allow_headers=["*"],
)

# Include routers
app.include_router(auth_router)
app.include_router(api_router)
app.include_router(health_router)
app.include_router(websocket_router, prefix="/realtime")
app.include_router(sse_router, prefix="/realtime")
app.include_router(credit_router)
app.include_router(intelligence_router)
app.include_router(llm_automl_router)

# Optional GraphQL endpoint
graphql_app = GraphQLRouter(schema)
app.include_router(graphql_app, prefix="/graphql")

# Enterprise Health Check
@app.get("/health")
async def health_check():
    """Comprehensive enterprise health check"""
    health_data = await db_manager.health_check()
    
    return {
        "status": "healthy" if health_data["overall_healthy"] else "unhealthy",
        "service": "NeoCred Enterprise Backend",
        "version": "2.0.0",
        "environment": config.environment.value,
        "timestamp": health_data["timestamp"],
        "databases": health_data["databases"],
        "metrics": health_data["metrics"]
    }

# Metrics endpoint
@app.get("/metrics")
async def get_metrics():
    """Get system metrics"""
    return db_manager.get_metrics()

# Configuration endpoint (development only)
if config.is_development():
    @app.get("/config")
    async def get_config():
        """Get current configuration (development only)"""
        return {
            "environment": config.environment.value,
            "database_pool_size": config.database.pool_size,
            "monitoring_enabled": config.monitoring.enable_prometheus,
            "log_level": config.monitoring.log_level.value
        }

# Root endpoint
@app.get("/")
async def root():
    """Root endpoint"""
    return {
        "message": "NeoCred Backend API",
        "version": "2.0.0",
        "docs": "/docs"
    }

if __name__ == "__main__":
    port = int(os.getenv("PORT", 8000))
    host = "0.0.0.0" if config.is_production() else "127.0.0.1"
    
    uvicorn.run(
        "main:app",
        host=host,
        port=port,
        reload=config.is_development(),
        log_level=config.monitoring.log_level.value.lower(),
        access_log=not config.is_production()
    )