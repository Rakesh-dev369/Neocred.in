import time
import os
from typing import Callable, Any
from circuitbreaker import circuit

# Circuit breaker configuration
FAILURE_THRESHOLD = int(os.getenv("CIRCUIT_BREAKER_FAILURE_THRESHOLD", "5"))
RECOVERY_TIMEOUT = int(os.getenv("CIRCUIT_BREAKER_RECOVERY_TIMEOUT", "30"))

class OpenAICircuitBreaker:
    def __init__(self):
        self.failure_threshold = FAILURE_THRESHOLD
        self.recovery_timeout = RECOVERY_TIMEOUT
        
    @circuit(failure_threshold=FAILURE_THRESHOLD, recovery_timeout=RECOVERY_TIMEOUT)
    async def call_openai(self, func: Callable, *args, **kwargs) -> Any:
        """Wrapper for OpenAI API calls with circuit breaker"""
        try:
            result = await func(*args, **kwargs)
            return result
        except Exception as e:
            # Log the failure
            print(f"OpenAI API call failed: {e}")
            raise

    def is_circuit_open(self) -> bool:
        """Check if circuit breaker is open"""
        return hasattr(self.call_openai, '_circuit_breaker') and \
               self.call_openai._circuit_breaker.current_state == 'open'

# Global circuit breaker instance
openai_circuit_breaker = OpenAICircuitBreaker()