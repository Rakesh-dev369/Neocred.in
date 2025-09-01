"""Enterprise Monitoring & Health Checks"""
import time
import psutil
import asyncio
from datetime import datetime, timedelta
from typing import Dict, Any
import logging
from prometheus_client import Counter, Histogram, Gauge, generate_latest
from fastapi import Request
from config import settings
from database import get_db, update_system_health
import aiohttp

logger = logging.getLogger(__name__)

# Prometheus metrics
REQUEST_COUNT = Counter('http_requests_total', 'Total HTTP requests', ['method', 'endpoint', 'status'])
REQUEST_DURATION = Histogram('http_request_duration_seconds', 'HTTP request duration')
ACTIVE_CONNECTIONS = Gauge('active_connections', 'Active connections')
SYSTEM_MEMORY = Gauge('system_memory_percent', 'System memory usage percentage')
SYSTEM_CPU = Gauge('system_cpu_percent', 'System CPU usage percentage')
CACHE_HITS = Counter('cache_hits_total', 'Total cache hits')
CACHE_MISSES = Counter('cache_misses_total', 'Total cache misses')
OPENAI_REQUESTS = Counter('openai_requests_total', 'Total OpenAI API requests', ['status'])
NEWS_FETCH_DURATION = Histogram('news_fetch_duration_seconds', 'News fetching duration')

class HealthChecker:
    def __init__(self):
        self.last_check = {}
        self.check_interval = 60  # seconds
    
    async def check_openai_health(self) -> Dict[str, Any]:
        """Check OpenAI API health"""
        try:
            import openai
            client = openai.OpenAI(api_key=settings.openai_api_key)
            
            start_time = time.time()
            await asyncio.to_thread(client.models.list)
            response_time = time.time() - start_time
            
            return {
                "status": "healthy",
                "response_time": round(response_time, 3),
                "message": "OpenAI API accessible"
            }
        except Exception as e:
            return {
                "status": "unhealthy",
                "error": str(e),
                "message": "OpenAI API connection failed"
            }
    
    async def check_database_health(self) -> Dict[str, Any]:
        """Check database health"""
        try:
            from database import SessionLocal
            
            start_time = time.time()
            db = SessionLocal()
            
            # Simple query to test connection
            db.execute("SELECT 1")
            db.close()
            
            response_time = time.time() - start_time
            
            return {
                "status": "healthy",
                "response_time": round(response_time, 3),
                "message": "Database connection successful"
            }
        except Exception as e:
            return {
                "status": "unhealthy",
                "error": str(e),
                "message": "Database connection failed"
            }
    
    async def check_redis_health(self) -> Dict[str, Any]:
        """Check Redis health"""
        try:
            from cache import cache
            
            if not cache.redis_client:
                return {
                    "status": "degraded",
                    "message": "Redis not connected, using local cache"
                }
            
            start_time = time.time()
            await cache.redis_client.ping()
            response_time = time.time() - start_time
            
            return {
                "status": "healthy",
                "response_time": round(response_time, 3),
                "message": "Redis connection successful"
            }
        except Exception as e:
            return {
                "status": "unhealthy",
                "error": str(e),
                "message": "Redis connection failed"
            }
    
    async def check_news_feeds_health(self) -> Dict[str, Any]:
        """Check news feeds health"""
        try:
            feeds_to_check = [
                "https://economictimes.indiatimes.com/markets/rssfeeds/1977021501.cms",
                "https://www.livemint.com/rss/money"
            ]
            
            healthy_feeds = 0
            total_response_time = 0
            
            async with aiohttp.ClientSession(timeout=aiohttp.ClientTimeout(total=5)) as session:
                for feed_url in feeds_to_check:
                    try:
                        start_time = time.time()
                        async with session.get(feed_url) as response:
                            if response.status == 200:
                                healthy_feeds += 1
                            total_response_time += time.time() - start_time
                    except:
                        continue
            
            if healthy_feeds == 0:
                return {
                    "status": "unhealthy",
                    "message": "No news feeds accessible"
                }
            elif healthy_feeds < len(feeds_to_check):
                return {
                    "status": "degraded",
                    "healthy_feeds": healthy_feeds,
                    "total_feeds": len(feeds_to_check),
                    "avg_response_time": round(total_response_time / len(feeds_to_check), 3),
                    "message": "Some news feeds unavailable"
                }
            else:
                return {
                    "status": "healthy",
                    "healthy_feeds": healthy_feeds,
                    "avg_response_time": round(total_response_time / len(feeds_to_check), 3),
                    "message": "All news feeds accessible"
                }
        except Exception as e:
            return {
                "status": "unhealthy",
                "error": str(e),
                "message": "News feeds check failed"
            }
    
    async def get_system_metrics(self) -> Dict[str, Any]:
        """Get system performance metrics"""
        try:
            # CPU usage
            cpu_percent = psutil.cpu_percent(interval=1)
            SYSTEM_CPU.set(cpu_percent)
            
            # Memory usage
            memory = psutil.virtual_memory()
            SYSTEM_MEMORY.set(memory.percent)
            
            # Disk usage
            disk = psutil.disk_usage('/')
            
            return {
                "cpu_usage": f"{cpu_percent}%",
                "memory_usage": f"{memory.percent}%",
                "memory_available": f"{memory.available / 1024 / 1024:.0f}MB",
                "disk_usage": f"{disk.percent}%",
                "disk_free": f"{disk.free / 1024 / 1024 / 1024:.1f}GB"
            }
        except Exception as e:
            logger.error(f"Error getting system metrics: {e}")
            return {"error": "Unable to get system metrics"}
    
    async def comprehensive_health_check(self) -> Dict[str, Any]:
        """Perform comprehensive health check"""
        checks = {}
        
        # Run all health checks concurrently
        tasks = {
            "openai": self.check_openai_health(),
            "database": self.check_database_health(),
            "redis": self.check_redis_health(),
            "news_feeds": self.check_news_feeds_health()
        }
        
        results = await asyncio.gather(*tasks.values(), return_exceptions=True)
        
        for i, (service, task) in enumerate(tasks.items()):
            result = results[i]
            if isinstance(result, Exception):
                checks[service] = {
                    "status": "unhealthy",
                    "error": str(result)
                }
            else:
                checks[service] = result
        
        # Get system metrics
        system_metrics = await self.get_system_metrics()
        
        # Determine overall status
        statuses = [check.get("status", "unhealthy") for check in checks.values()]
        if all(status == "healthy" for status in statuses):
            overall_status = "healthy"
        elif any(status == "healthy" for status in statuses):
            overall_status = "degraded"
        else:
            overall_status = "unhealthy"
        
        return {
            "status": overall_status,
            "timestamp": datetime.now().isoformat(),
            "checks": checks,
            "system": system_metrics,
            "version": settings.app_version
        }

# Global health checker instance
health_checker = HealthChecker()

# Monitoring middleware
async def monitoring_middleware(request: Request, call_next):
    """Monitor request metrics"""
    start_time = time.time()
    
    # Get endpoint and method
    endpoint = request.url.path
    method = request.method
    
    try:
        response = await call_next(request)
        status_code = response.status_code
    except Exception as e:
        status_code = 500
        logger.error(f"Request failed: {e}")
        raise
    finally:
        # Record metrics
        duration = time.time() - start_time
        
        REQUEST_COUNT.labels(method=method, endpoint=endpoint, status=status_code).inc()
        REQUEST_DURATION.observe(duration)
        
        # Log slow requests
        if duration > 5.0:
            logger.warning(f"Slow request: {method} {endpoint} took {duration:.2f}s")
    
    return response

# Performance monitoring
class PerformanceMonitor:
    def __init__(self):
        self.request_times = []
        self.error_count = 0
        self.total_requests = 0
    
    def record_request(self, duration: float, success: bool = True):
        """Record request performance"""
        self.request_times.append(duration)
        self.total_requests += 1
        
        if not success:
            self.error_count += 1
        
        # Keep only last 1000 requests
        if len(self.request_times) > 1000:
            self.request_times = self.request_times[-1000:]
    
    def get_stats(self) -> Dict[str, Any]:
        """Get performance statistics"""
        if not self.request_times:
            return {"message": "No requests recorded"}
        
        avg_time = sum(self.request_times) / len(self.request_times)
        max_time = max(self.request_times)
        min_time = min(self.request_times)
        
        # Calculate percentiles
        sorted_times = sorted(self.request_times)
        p95_index = int(0.95 * len(sorted_times))
        p99_index = int(0.99 * len(sorted_times))
        
        return {
            "total_requests": self.total_requests,
            "error_count": self.error_count,
            "error_rate": f"{(self.error_count / self.total_requests * 100):.2f}%",
            "avg_response_time": f"{avg_time:.3f}s",
            "min_response_time": f"{min_time:.3f}s",
            "max_response_time": f"{max_time:.3f}s",
            "p95_response_time": f"{sorted_times[p95_index]:.3f}s",
            "p99_response_time": f"{sorted_times[p99_index]:.3f}s"
        }

# Global performance monitor
performance_monitor = PerformanceMonitor()

# Alerting system (simple implementation)
class AlertManager:
    def __init__(self):
        self.alerts = []
        self.thresholds = {
            "cpu_usage": 80,
            "memory_usage": 85,
            "error_rate": 5,
            "response_time": 5.0
        }
    
    async def check_alerts(self):
        """Check for alert conditions"""
        alerts = []
        
        # Check system metrics
        try:
            cpu_percent = psutil.cpu_percent()
            memory_percent = psutil.virtual_memory().percent
            
            if cpu_percent > self.thresholds["cpu_usage"]:
                alerts.append({
                    "type": "high_cpu",
                    "message": f"High CPU usage: {cpu_percent}%",
                    "severity": "warning"
                })
            
            if memory_percent > self.thresholds["memory_usage"]:
                alerts.append({
                    "type": "high_memory",
                    "message": f"High memory usage: {memory_percent}%",
                    "severity": "warning"
                })
        except Exception as e:
            logger.error(f"Error checking system alerts: {e}")
        
        # Check performance metrics
        perf_stats = performance_monitor.get_stats()
        if isinstance(perf_stats, dict) and "error_rate" in perf_stats:
            error_rate = float(perf_stats["error_rate"].rstrip("%"))
            if error_rate > self.thresholds["error_rate"]:
                alerts.append({
                    "type": "high_error_rate",
                    "message": f"High error rate: {error_rate}%",
                    "severity": "critical"
                })
        
        return alerts

# Global alert manager
alert_manager = AlertManager()

# Metrics endpoint
async def get_prometheus_metrics():
    """Get Prometheus metrics"""
    return generate_latest()