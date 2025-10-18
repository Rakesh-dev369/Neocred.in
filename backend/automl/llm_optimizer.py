"""LLM Optimization Tools - Tiktoken, Tenacity, Redis Caching"""
import tiktoken
import redis
from tenacity import retry, stop_after_attempt, wait_exponential, retry_if_exception_type
import openai
import json
import hashlib
from typing import Dict, Any, Optional
import os
from datetime import timedelta

class LLMOptimizer:
    """Optimize LLM calls with token counting, retry logic, and caching"""
    
    def __init__(self):
        self.redis_client = None
        self.setup_redis()
        self.encoding = tiktoken.encoding_for_model("gpt-4")
        
    def setup_redis(self):
        """Setup Redis client for caching"""
        redis_url = os.getenv("REDIS_URL", "redis://localhost:6379")
        try:
            self.redis_client = redis.from_url(redis_url, decode_responses=True)
            self.redis_client.ping()
        except:
            print("⚠️ Redis not available - LLM caching disabled")
            self.redis_client = None
    
    def count_tokens(self, text: str, model: str = "gpt-4") -> int:
        """Count tokens in text for cost optimization"""
        try:
            encoding = tiktoken.encoding_for_model(model)
            return len(encoding.encode(text))
        except:
            # Fallback estimation
            return len(text.split()) * 1.3
    
    def optimize_prompt(self, prompt: str, max_tokens: int = 4000) -> str:
        """Optimize prompt to fit within token limits"""
        current_tokens = self.count_tokens(prompt)
        
        if current_tokens <= max_tokens:
            return prompt
        
        # Truncate prompt intelligently
        lines = prompt.split('\n')
        optimized_lines = []
        token_count = 0
        
        for line in lines:
            line_tokens = self.count_tokens(line)
            if token_count + line_tokens <= max_tokens:
                optimized_lines.append(line)
                token_count += line_tokens
            else:
                break
        
        return '\n'.join(optimized_lines)
    
    def get_cache_key(self, prompt: str, model: str, temperature: float) -> str:
        """Generate cache key for LLM response"""
        cache_data = f"{prompt}:{model}:{temperature}"
        return f"llm_cache:{hashlib.md5(cache_data.encode()).hexdigest()}"
    
    def get_cached_response(self, prompt: str, model: str = "gpt-4", temperature: float = 0.1) -> Optional[str]:
        """Get cached LLM response"""
        if not self.redis_client:
            return None
        
        cache_key = self.get_cache_key(prompt, model, temperature)
        try:
            cached = self.redis_client.get(cache_key)
            if cached:
                return json.loads(cached)
        except:
            pass
        
        return None
    
    def cache_response(self, prompt: str, response: str, model: str = "gpt-4", 
                      temperature: float = 0.1, ttl: int = 3600):
        """Cache LLM response"""
        if not self.redis_client:
            return
        
        cache_key = self.get_cache_key(prompt, model, temperature)
        try:
            self.redis_client.setex(
                cache_key, 
                ttl, 
                json.dumps(response)
            )
        except:
            pass
    
    @retry(
        stop=stop_after_attempt(3),
        wait=wait_exponential(multiplier=1, min=4, max=10),
        retry=retry_if_exception_type((openai.RateLimitError, openai.APITimeoutError))
    )
    async def call_llm_with_retry(self, client, messages: list, model: str = "gpt-4-turbo-preview", 
                                temperature: float = 0.1) -> str:
        """Call LLM with retry logic and caching"""
        
        # Create prompt string for caching
        prompt = json.dumps(messages)
        
        # Check cache first
        cached_response = self.get_cached_response(prompt, model, temperature)
        if cached_response:
            return cached_response
        
        # Optimize prompt for token limits
        optimized_prompt = self.optimize_prompt(prompt, max_tokens=3500)
        optimized_messages = json.loads(optimized_prompt) if optimized_prompt != prompt else messages
        
        try:
            # Make API call
            response = await client.chat.completions.create(
                model=model,
                messages=optimized_messages,
                temperature=temperature,
                max_tokens=1000
            )
            
            result = response.choices[0].message.content
            
            # Cache the response
            self.cache_response(prompt, result, model, temperature)
            
            return result
            
        except Exception as e:
            print(f"LLM call failed: {e}")
            raise
    
    def get_cost_estimate(self, prompt: str, response: str = "", model: str = "gpt-4-turbo-preview") -> Dict[str, Any]:
        """Estimate cost of LLM call"""
        
        # Token costs per 1K tokens (approximate)
        costs = {
            "gpt-4-turbo-preview": {"input": 0.01, "output": 0.03},
            "gpt-4": {"input": 0.03, "output": 0.06},
            "gpt-3.5-turbo": {"input": 0.001, "output": 0.002}
        }
        
        input_tokens = self.count_tokens(prompt)
        output_tokens = self.count_tokens(response) if response else 500  # Estimated
        
        model_costs = costs.get(model, costs["gpt-4-turbo-preview"])
        
        input_cost = (input_tokens / 1000) * model_costs["input"]
        output_cost = (output_tokens / 1000) * model_costs["output"]
        total_cost = input_cost + output_cost
        
        return {
            "input_tokens": input_tokens,
            "output_tokens": output_tokens,
            "total_tokens": input_tokens + output_tokens,
            "input_cost_usd": input_cost,
            "output_cost_usd": output_cost,
            "total_cost_usd": total_cost,
            "model": model
        }
    
    def clear_cache(self, pattern: str = "llm_cache:*"):
        """Clear LLM cache"""
        if not self.redis_client:
            return 0
        
        try:
            keys = self.redis_client.keys(pattern)
            if keys:
                return self.redis_client.delete(*keys)
            return 0
        except:
            return 0
    
    def get_cache_stats(self) -> Dict[str, Any]:
        """Get cache statistics"""
        if not self.redis_client:
            return {"cache_available": False}
        
        try:
            keys = self.redis_client.keys("llm_cache:*")
            total_size = 0
            
            for key in keys[:100]:  # Sample first 100 keys
                try:
                    size = len(self.redis_client.get(key) or "")
                    total_size += size
                except:
                    continue
            
            return {
                "cache_available": True,
                "total_keys": len(keys),
                "estimated_size_bytes": total_size,
                "sample_keys": min(len(keys), 100)
            }
        except:
            return {"cache_available": False, "error": "Cache stats unavailable"}

# Global LLM optimizer
llm_optimizer = LLMOptimizer()