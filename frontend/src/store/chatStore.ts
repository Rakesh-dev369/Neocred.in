import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { ChatMessage } from '@/types/api'

interface ChatState {
  messages: ChatMessage[]
  isLoading: boolean
  sessionId: string | null
  darkMode: boolean
  
  // Actions
  addMessage: (message: ChatMessage) => void
  setLoading: (loading: boolean) => void
  setSessionId: (sessionId: string) => void
  clearMessages: () => void
  toggleDarkMode: () => void
  updateMessage: (id: string, updates: Partial<ChatMessage>) => void
  deleteMessage: (id: string) => void
}

export const useChatStore = create<ChatState>()(
  persist(
    (set) => ({
      messages: [],
      isLoading: false,
      sessionId: null,
      darkMode: false,
      
      addMessage: (message) =>
        set((state) => ({
          messages: [...state.messages, { ...message, id: message.id || Date.now().toString() }],
        })),
      
      setLoading: (loading) => set({ isLoading: loading }),
      
      setSessionId: (sessionId) => set({ sessionId }),
      
      clearMessages: () => set({ messages: [], sessionId: null }),
      
      toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
      
      updateMessage: (id, updates) =>
        set((state) => ({
          messages: state.messages.map((msg) =>
            msg.id === id ? { ...msg, ...updates } : msg
          ),
        })),
      
      deleteMessage: (id) =>
        set((state) => ({
          messages: state.messages.filter((msg) => msg.id !== id),
        })),
    }),
    {
      name: 'chat-store',
      partialize: (state) => ({
        messages: state.messages,
        sessionId: state.sessionId,
        darkMode: state.darkMode,
      }),
    }
  )
)