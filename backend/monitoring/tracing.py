"""OpenTelemetry Tracing (Optional)"""
from opentelemetry import trace
from opentelemetry.sdk.trace import TracerProvider
from opentelemetry.sdk.trace.export import BatchSpanProcessor
from opentelemetry.exporter.jaeger.thrift import JaegerExporter
from opentelemetry.instrumentation.fastapi import FastAPIInstrumentor
import os

def setup_tracing(app):
    """Setup distributed tracing with Jaeger (Optional)"""
    jaeger_endpoint = os.getenv("JAEGER_ENDPOINT")
    
    if not jaeger_endpoint:
        return None
    
    # Configure tracer
    trace.set_tracer_provider(TracerProvider())
    tracer = trace.get_tracer(__name__)
    
    # Configure Jaeger exporter
    jaeger_exporter = JaegerExporter(
        agent_host_name=os.getenv("JAEGER_HOST", "localhost"),
        agent_port=int(os.getenv("JAEGER_PORT", "6831")),
    )
    
    span_processor = BatchSpanProcessor(jaeger_exporter)
    trace.get_tracer_provider().add_span_processor(span_processor)
    
    # Instrument FastAPI
    FastAPIInstrumentor.instrument_app(app)
    
    return tracer

def trace_function(name: str):
    """Decorator to trace function calls"""
    def decorator(func):
        def wrapper(*args, **kwargs):
            tracer = trace.get_tracer(__name__)
            with tracer.start_as_current_span(name):
                return func(*args, **kwargs)
        return wrapper
    return decorator

# Global tracer instance
tracer = trace.get_tracer("neocred")