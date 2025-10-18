"""
Enterprise Database Connection Manager
Advanced connection pooling, monitoring, failover, and multi-database support
"""

import asyncio
import logging
from typing import Dict, Any, Optional, List
from contextlib import asynccontextmanager
from dataclasses import dataclass
from enum import Enum
import time
from sqlalchemy import create_engine, text
from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession
from sqlalchemy.orm import sessionmaker
from sqlalchemy.pool import QueuePool
import redis.asyncio as redis
from motor.motor_asyncio import AsyncIOMotorClient
import os

class DatabaseType(Enum):
    POSTGRESQL = "postgresql"
    REDIS = "redis"
    MONGODB = "mongodb"
    SQLITE = "sqlite"

@dataclass
class DatabaseConfig:
    """Database configuration with enterprise features"""
    url: str
    pool_size: int = 20
    max_overflow: int = 30
    pool_timeout: int = 30
    pool_recycle: int = 3600
    retry_attempts: int = 3
    retry_delay: float = 1.0
    health_check_interval: int = 60
    enable_monitoring: bool = True

class ConnectionPool:
    """Advanced connection pool with monitoring"""
    
    def __init__(self, config: DatabaseConfig, db_type: DatabaseType):
        self.config = config
        self.db_type = db_type
        self.engine = None
        self.async_engine = None
        self.client = None
        self.is_connected = False
        self.last_health_check = 0
        self.connection_count = 0
        self.error_count = 0
        self.logger = logging.getLogger(f"db.{db_type.value}")
    
    async def connect(self):
        """Establish database connection with retry logic"""
        for attempt in range(self.config.retry_attempts):
            try:
                if self.db_type == DatabaseType.POSTGRESQL:
                    await self._connect_postgresql()
                elif self.db_type == DatabaseType.REDIS:
                    await self._connect_redis()
                elif self.db_type == DatabaseType.MONGODB:
                    await self._connect_mongodb()
                
                self.is_connected = True
                self.logger.info(f"✅ {self.db_type.value} connected successfully")
                return
                
            except Exception as e:
                self.error_count += 1
                self.logger.error(f"❌ {self.db_type.value} connection attempt {attempt + 1} failed: {e}")
                if attempt < self.config.retry_attempts - 1:
                    await asyncio.sleep(self.config.retry_delay * (2 ** attempt))
                else:
                    raise
    
    async def _connect_postgresql(self):
        """Connect to PostgreSQL with advanced pooling"""
        self.engine = create_engine(
            self.config.url,
            poolclass=QueuePool,
            pool_size=self.config.pool_size,
            max_overflow=self.config.max_overflow,
            pool_timeout=self.config.pool_timeout,
            pool_recycle=self.config.pool_recycle,
            echo=False
        )
        
        async_url = self.config.url.replace("postgresql://", "postgresql+asyncpg://")
        self.async_engine = create_async_engine(
            async_url,
            pool_size=self.config.pool_size,
            max_overflow=self.config.max_overflow,
            pool_timeout=self.config.pool_timeout,
            pool_recycle=self.config.pool_recycle
        )
        
        # Test connection
        async with self.async_engine.begin() as conn:
            await conn.execute(text("SELECT 1"))
    
    async def _connect_redis(self):
        """Connect to Redis with connection pooling"""
        self.client = redis.from_url(
            self.config.url,
            max_connections=self.config.pool_size,
            retry_on_timeout=True,
            socket_keepalive=True,
            socket_keepalive_options={}
        )
        await self.client.ping()
    
    async def _connect_mongodb(self):
        """Connect to MongoDB with connection pooling"""
        self.client = AsyncIOMotorClient(
            self.config.url,
            maxPoolSize=self.config.pool_size,
            minPoolSize=5,
            maxIdleTimeMS=30000,
            serverSelectionTimeoutMS=5000
        )
        await self.client.admin.command('ping')
    
    async def health_check(self) -> bool:
        """Perform health check with caching"""
        current_time = time.time()
        if current_time - self.last_health_check < self.config.health_check_interval:
            return self.is_connected
        
        try:
            if self.db_type == DatabaseType.POSTGRESQL and self.async_engine:
                async with self.async_engine.begin() as conn:
                    await conn.execute(text("SELECT 1"))
            elif self.db_type == DatabaseType.REDIS and self.client:
                await self.client.ping()
            elif self.db_type == DatabaseType.MONGODB and self.client:
                await self.client.admin.command('ping')
            
            self.is_connected = True
            self.last_health_check = current_time
            return True
            
        except Exception as e:
            self.logger.error(f"Health check failed for {self.db_type.value}: {e}")
            self.is_connected = False
            self.error_count += 1
            return False
    
    async def disconnect(self):
        """Gracefully disconnect from database"""
        try:
            if self.db_type == DatabaseType.POSTGRESQL:
                if self.async_engine:
                    await self.async_engine.dispose()
                if self.engine:
                    self.engine.dispose()
            elif self.db_type == DatabaseType.REDIS and self.client:
                await self.client.close()
            elif self.db_type == DatabaseType.MONGODB and self.client:
                self.client.close()
            
            self.is_connected = False
            self.logger.info(f"🔌 {self.db_type.value} disconnected")
            
        except Exception as e:
            self.logger.error(f"Error disconnecting {self.db_type.value}: {e}")

class EnterpriseDatabaseManager:
    """Enterprise-grade database manager with advanced features"""
    
    def __init__(self):
        self.pools: Dict[DatabaseType, ConnectionPool] = {}
        self.logger = logging.getLogger("db.manager")
        self.monitoring_enabled = True
        self.metrics = {
            "total_connections": 0,
            "active_connections": 0,
            "failed_connections": 0,
            "health_checks": 0
        }
        self._setup_default_configs()
    
    def _setup_default_configs(self):
        """Setup default database configurations"""
        configs = {
            DatabaseType.POSTGRESQL: DatabaseConfig(
                url=os.getenv("DATABASE_URL", "postgresql://user:password@localhost/neocred"),
                pool_size=20,
                max_overflow=30
            ),
            DatabaseType.REDIS: DatabaseConfig(
                url=os.getenv("REDIS_URL", "redis://localhost:6379/0"),
                pool_size=10,
                max_overflow=20
            ),
            DatabaseType.MONGODB: DatabaseConfig(
                url=os.getenv("MONGODB_URL", "mongodb://localhost:27017/neocred"),
                pool_size=15,
                max_overflow=25
            )
        }
        
        for db_type, config in configs.items():
            self.pools[db_type] = ConnectionPool(config, db_type)
    
    async def connect_all(self):
        """Connect to all configured databases"""
        self.logger.info("🚀 Initializing enterprise database connections...")
        
        connection_tasks = []
        for pool in self.pools.values():
            connection_tasks.append(pool.connect())
        
        try:
            await asyncio.gather(*connection_tasks, return_exceptions=True)
            connected_dbs = [db_type.value for db_type, pool in self.pools.items() if pool.is_connected]
            self.logger.info(f"🎉 Connected to databases: {', '.join(connected_dbs)}")
            
        except Exception as e:
            self.logger.error(f"❌ Database initialization failed: {e}")
            raise
    
    async def disconnect_all(self):
        """Disconnect from all databases"""
        self.logger.info("🛑 Shutting down database connections...")
        
        disconnect_tasks = []
        for pool in self.pools.values():
            if pool.is_connected:
                disconnect_tasks.append(pool.disconnect())
        
        await asyncio.gather(*disconnect_tasks, return_exceptions=True)
        self.logger.info("👋 All database connections closed")
    
    @asynccontextmanager
    async def get_session(self, db_type: DatabaseType = DatabaseType.POSTGRESQL):
        """Get database session with automatic cleanup"""
        pool = self.pools.get(db_type)
        if not pool or not pool.is_connected:
            raise ConnectionError(f"Database {db_type.value} not connected")
        
        if db_type == DatabaseType.POSTGRESQL:
            async_session = sessionmaker(pool.async_engine, class_=AsyncSession, expire_on_commit=False)
            async with async_session() as session:
                try:
                    yield session
                    await session.commit()
                except Exception:
                    await session.rollback()
                    raise
        else:
            yield pool.client
    
    async def health_check(self) -> Dict[str, Any]:
        """Comprehensive health check with metrics"""
        health_results = {}
        overall_healthy = True
        
        for db_type, pool in self.pools.items():
            is_healthy = await pool.health_check()
            health_results[db_type.value] = {
                "healthy": is_healthy,
                "connection_count": pool.connection_count,
                "error_count": pool.error_count,
                "last_check": pool.last_health_check
            }
            if not is_healthy:
                overall_healthy = False
        
        self.metrics["health_checks"] += 1
        
        return {
            "overall_healthy": overall_healthy,
            "databases": health_results,
            "metrics": self.metrics,
            "timestamp": time.time()
        }
    
    def get_metrics(self) -> Dict[str, Any]:
        """Get database performance metrics"""
        return {
            "pools": {
                db_type.value: {
                    "connected": pool.is_connected,
                    "connection_count": pool.connection_count,
                    "error_count": pool.error_count
                }
                for db_type, pool in self.pools.items()
            },
            "global_metrics": self.metrics
        }

# Global enterprise database manager instance
db_manager = EnterpriseDatabaseManager()