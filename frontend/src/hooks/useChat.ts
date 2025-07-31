import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-hot-toast'
import { chatApi } from '@/api/client'
import { useChatStore } from '@/store/chatStore'
import type { ChatRequest } from '@/types/api'

export const useChat = () => {
  const { addMessage, setLoading, setSessionId, messages } = useChatStore()

  const sendMessageMutation = useMutation({
    mutationFn: chatApi.sendMessage,
    onMutate: (request) => {
      // Add user message immediately
      addMessage({
        text: request.message,
        sender: 'user',
        timestamp: new Date().toISOString(),
      })
      setLoading(true)
    },
    onSuccess: (response) => {
      // Add bot response
      addMessage({
        text: response.response,
        sender: 'bot',
        timestamp: new Date().toISOString(),
        suggestions: response.suggestions,
        toolLink: response.toolLink,
      })
      
      if (response.sessionId) {
        setSessionId(response.sessionId)
      }
      
      if (response.cached) {
        toast.success('Response served from cache ⚡')
      }
    },
    onError: (error: any) => {
      const errorMessage = error.response?.data?.detail || 'Failed to send message'
      
      addMessage({
        text: errorMessage,
        sender: 'bot',
        timestamp: new Date().toISOString(),
        isError: true,
      })
      
      toast.error(errorMessage)
    },
    onSettled: () => {
      setLoading(false)
    },
  })

  const sendMessage = (message: string) => {
    if (!message.trim()) return

    const request: ChatRequest = {
      message: message.trim(),
      conversationHistory: messages.slice(-10), // Last 10 messages for context
      systemPrompt: "You are FinBot, a helpful financial assistant specialized in Indian financial markets...",
      toolsContext: "Available tools: SIP Calculator, Budget Planner, Tax Saver, Home Loan Calculator...",
      userId: localStorage.getItem('user_id') || undefined,
    }

    sendMessageMutation.mutate(request)
  }

  return {
    sendMessage,
    isLoading: sendMessageMutation.isPending,
    error: sendMessageMutation.error,
  }
}