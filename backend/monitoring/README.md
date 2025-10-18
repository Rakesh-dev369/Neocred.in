# Monitoring & Observability Module

## Features Implemented ✅

### Prometheus Metrics Collection
- Request count, duration, status codes
- Business metrics: active users, chat messages, calculator usage
- System metrics: CPU, memory, disk usage
- Custom metrics endpoint at `/metrics`

### Grafana Dashboard Visualization
- Pre-configured dashboard for NeoCred metrics
- Request rate and response time graphs
- Active users and chat message counters
- System resource monitoring

### Sentry Error Tracking
- Automatic error capture and reporting
- Sensitive data filtering
- Performance monitoring
- Custom error context

### Structured Logging
- JSON-formatted logs with structlog
- Request/response logging
- Business event tracking
- Configurable log levels

### Optional Distributed Tracing
- OpenTelemetry integration
- Jaeger exporter for trace visualization
- Function-level tracing decorators
- FastAPI auto-instrumentation

## Quick Start

### 1. Environment Setup
```env
SENTRY_DSN=https://your-sentry-dsn@sentry.io/project-id
ENVIRONMENT=production
LOG_LEVEL=INFO
ENABLE_METRICS=true
```

### 2. Start Monitoring Stack
```bash
docker-compose -f docker-compose.monitoring.yml up -d
```

### 3. Access Dashboards
- **Prometheus**: http://localhost:9090
- **Grafana**: http://localhost:3000 (admin/admin)
- **Jaeger**: http://localhost:16686

### 4. Metrics Endpoints
- `/metrics` - Prometheus metrics
- `/health` - Enhanced health check
- `/metrics/business` - Business metrics

## Custom Metrics Usage

```python
from monitoring.prometheus import track_chat_message, track_calculator_usage

# Track business events
track_chat_message()
track_calculator_usage("sip_calculator")
```

## Error Tracking

```python
from monitoring.sentry_config import capture_exception, capture_message

# Track errors
capture_exception(error, {"user_id": 123})
capture_message("Custom event", "info", {"data": "value"})
```

## Logging

```python
from monitoring.logging import logger, log_business_event

# Structured logging
logger.info("User action", user_id=123, action="login")
log_business_event("calculator_used", {"type": "sip", "amount": 10000})
```

## Monitoring Stack Components

- **✅ Prometheus** - Metrics collection and storage
- **✅ Grafana** - Dashboard visualization and alerting
- **✅ Sentry** - Error tracking and performance monitoring
- **⚙️ Jaeger** - Optional distributed tracing
- **⚙️ ELK Stack** - Use later for deep log analytics

## Production Considerations

1. **Resource Usage**: Monitor CPU/memory impact
2. **Data Retention**: Configure Prometheus retention policies
3. **Alerting**: Set up Grafana alerts for critical metrics
4. **Security**: Secure monitoring endpoints in production
5. **Sampling**: Adjust tracing sample rates for performance