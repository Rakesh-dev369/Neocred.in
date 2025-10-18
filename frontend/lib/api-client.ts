/**
 * API Configuration for Production
 * Handles backend communication with Fly.io
 */

const API_CONFIG = {
  // Base URLs
  BACKEND_URL: process.env.NEXT_PUBLIC_API_URL || 'https://neocred-backend.fly.dev',
  FRONTEND_URL: process.env.NEXT_PUBLIC_FRONTEND_URL || 'https://neocred.in',
  
  // API endpoints
  ENDPOINTS: {
    AUTH: '/auth',
    CHAT: '/api/v1/chat',
    HEALTH: '/health',
    METRICS: '/api/v1/metrics',
    USERS: '/api/v1/users',
    FINANCIAL_DATA: '/api/v1/financial-data',
    ML_MODELS: '/api/v1/models',
  },
  
  // Request configuration
  TIMEOUT: 30000, // 30 seconds
  RETRY_ATTEMPTS: 3,
  RETRY_DELAY: 1000, // 1 second
  
  // Headers
  DEFAULT_HEADERS: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
};

/**
 * API Client with error handling and retries
 */
class APIClient {
  private baseURL: string;
  private timeout: number;
  private retryAttempts: number;
  private retryDelay: number;

  constructor() {
    this.baseURL = API_CONFIG.BACKEND_URL;
    this.timeout = API_CONFIG.TIMEOUT;
    this.retryAttempts = API_CONFIG.RETRY_ATTEMPTS;
    this.retryDelay = API_CONFIG.RETRY_DELAY;
  }

  /**
   * Make HTTP request with retry logic
   */
  async request(endpoint: string, options: RequestInit = {}): Promise<any> {
    const url = `${this.baseURL}${endpoint}`;
    
    const config: RequestInit = {
      ...options,
      headers: {
        ...API_CONFIG.DEFAULT_HEADERS,
        ...options.headers,
      },
    };

    for (let attempt = 1; attempt <= this.retryAttempts; attempt++) {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), this.timeout);

        const response = await fetch(url, {
          ...config,
          signal: controller.signal,
        });

        clearTimeout(timeoutId);

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }

        return await response.json();
      } catch (error) {
        console.error(`API request attempt ${attempt} failed:`, error);
        
        if (attempt === this.retryAttempts) {
          throw error;
        }
        
        // Wait before retry
        await new Promise(resolve => setTimeout(resolve, this.retryDelay * attempt));
      }
    }
  }

  // HTTP methods
  async get(endpoint: string, headers?: Record<string, string>) {
    return this.request(endpoint, { method: 'GET', headers });
  }

  async post(endpoint: string, data?: any, headers?: Record<string, string>) {
    return this.request(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
      headers,
    });
  }

  async put(endpoint: string, data?: any, headers?: Record<string, string>) {
    return this.request(endpoint, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers,
    });
  }

  async delete(endpoint: string, headers?: Record<string, string>) {
    return this.request(endpoint, { method: 'DELETE', headers });
  }

  /**
   * Health check
   */
  async healthCheck() {
    try {
      const response = await this.get(API_CONFIG.ENDPOINTS.HEALTH);
      return response.success;
    } catch (error) {
      console.error('Health check failed:', error);
      return false;
    }
  }
}

// Export singleton instance
export const apiClient = new APIClient();
export { API_CONFIG };
export default apiClient;