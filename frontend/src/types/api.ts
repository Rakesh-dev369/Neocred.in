export interface ChatRequest {
  message: string
  conversationHistory: ChatMessage[]
  systemPrompt: string
  toolsContext: string
  userId?: string
  sessionId?: string
}

export interface ChatResponse {
  response: string
  suggestions: string[]
  toolLink?: string
  success: boolean
  responseTime?: number
  tokensUsed?: number
  cached: boolean
  sessionId: string
}

export interface ChatMessage {
  id?: string
  text: string
  sender: 'user' | 'bot'
  timestamp: string
  suggestions?: string[]
  toolLink?: string
  isError?: boolean
}

export interface HealthResponse {
  status: string
  api_key_configured: boolean
  openai_status: string
  cache_enabled: boolean
  cache_size: number
  version: string
  timestamp: number
  uptime?: string
}

export interface StatsResponse {
  total_requests: number
  active_users: number
  cache_enabled: boolean
  cache_size: number
  cache_hit_rate?: number
  avg_response_time?: number
  rate_limit_window: string
  max_requests_per_user: number
  popular_topics?: string[]
}

export interface ApiError {
  detail: string
  status_code: number
}