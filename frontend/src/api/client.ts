import axios from 'axios'
import type { ChatRequest, ChatResponse, HealthResponse, StatsResponse } from '@/types/api'

const API_BASE_URL = (import.meta as any).env.VITE_API_URL || 'http://localhost:8001'

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Request interceptor
apiClient.interceptors.request.use(
  (config) => {
    // Add auth token if available
    const token = localStorage.getItem('auth_token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

// Response interceptor
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('auth_token')
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)

export const chatApi = {
  sendMessage: async (request: ChatRequest): Promise<ChatResponse> => {
    const response = await apiClient.post<ChatResponse>('/api/chat', request)
    return response.data
  },
}

export const systemApi = {
  getHealth: async (): Promise<HealthResponse> => {
    const response = await apiClient.get<HealthResponse>('/health')
    return response.data
  },
  
  getStats: async (): Promise<StatsResponse> => {
    const response = await apiClient.get<StatsResponse>('/api/stats')
    return response.data
  },
  
  clearCache: async (): Promise<{ success: boolean; message: string }> => {
    const response = await apiClient.post('/api/clear-cache')
    return response.data
  },
}