// Purpose: AI advisor component
"use client"

import { motion } from "framer-motion"
import { Send, Bot, Loader2 } from "lucide-react"
import { useState } from "react"

// HTML entity decoder for React
const decodeHtmlEntities = (text: string): string => {
  const textarea = document.createElement('textarea')
  textarea.innerHTML = text
  return textarea.value
}

// Simple markdown formatter for chat messages
const formatMessage = (text: string) => {
  // Decode HTML entities using browser's built-in decoder
  const decodedText = decodeHtmlEntities(text)
  
  return decodedText
    .split('\n')
    .map((line, index) => {
      const trimmedLine = line.trim()
      
      // Handle headings (## text)
      if (trimmedLine.startsWith('## ')) {
        return (
          <div key={index} className="font-bold text-lg mt-4 mb-2 text-cyan-300">
            {trimmedLine.replace('## ', '')}
          </div>
        )
      }
      
      // Handle main bullet points (• text)
      if (trimmedLine.startsWith('• ')) {
        return (
          <div key={index} className="ml-2 mb-2">
            <span className="text-cyan-400 mr-2">•</span>
            <span>{trimmedLine.replace('• ', '')}</span>
          </div>
        )
      }
      
      // Handle sub-bullets (- text after bullet)
      if (trimmedLine.startsWith('- ')) {
        return (
          <div key={index} className="ml-8 mb-1 text-blue-200">
            <span className="text-blue-400 mr-2">-</span>
            <span>{trimmedLine.replace('- ', '')}</span>
          </div>
        )
      }
      
      // Handle empty lines
      if (trimmedLine === '') {
        return <div key={index} className="h-1"></div>
      }
      
      // Regular text
      return (
        <div key={index} className="mb-1 ml-2">
          {trimmedLine}
        </div>
      )
    })
}

export function AIAdvisor() {
  const [message, setMessage] = useState("")
  const currentMessage = message // Store current message before clearing
  const [loading, setLoading] = useState(false)
  const [chat, setChat] = useState([
    { from: "bot", text: "Hi! I'm Neo, your AI finance advisor. How can I help today?" },
  ])

  const handleSend = async () => {
    if (!message.trim() || loading) return
    
    const currentMessage = message
    const userMsg = { from: "user", text: currentMessage }
    setChat(prev => [...prev, userMsg])
    setMessage("")
    setLoading(true)

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8001'
      
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), 15000) // 15s timeout
      
      const response = await fetch(`${apiUrl}/api/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: currentMessage,
          context: {
            user_type: 'financial_advisor_user',
            conversation_history: chat.slice(-2), // Reduce context
            platform: 'neocred_dashboard'
          }
        }),
        signal: controller.signal
      })
      
      clearTimeout(timeoutId)

      console.log('Response status:', response.status)
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`)
      }

      const data = await response.json()
      console.log('Response data:', data)
      const botMsg = { from: "bot", text: data.response || "I'm having trouble processing that. Could you try rephrasing?" }
      setChat(prev => [...prev, botMsg])
    } catch (error) {
      console.error('AI Advisor error:', error)
      
      let fallbackResponse = "Response took too long. Here's a quick answer:"
      
      // Quick responses based on keywords
      const msg = currentMessage.toLowerCase()
      if (msg.includes('sip') || msg.includes('investment')) {
        fallbackResponse = "SIP: Start with ₹1000-5000 monthly. Diversify across equity funds."
      } else if (msg.includes('saving') || msg.includes('save')) {
        fallbackResponse = "Save 20% of income. Build 6-month emergency fund first."
      } else if (msg.includes('credit') || msg.includes('score')) {
        fallbackResponse = "Credit score: Pay on time, keep utilization <30%."
      } else {
        fallbackResponse = "Request timed out. Please try a shorter question."
      }
      
      const errorMsg = { from: "bot", text: fallbackResponse }
      setChat(prev => [...prev, errorMsg])
    } finally {
      setLoading(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white/10 border border-white/10 rounded-2xl p-6 backdrop-blur-xl shadow-lg"
    >
      <div className="flex items-center gap-2 mb-4">
        <Bot className="h-5 w-5 text-cyan-400" />
        <h3 className="text-xl font-semibold text-white">AI Advisor</h3>
      </div>

      <div className="h-64 overflow-y-auto space-y-3 mb-4 scrollbar-thin scrollbar-thumb-white/20">
        {chat.map((c, i) => (
          <div
            key={i}
            className={`p-3 rounded-xl w-fit max-w-[80%] ${
              c.from === "bot" ? "bg-blue-900/40 text-blue-100" : "bg-cyan-700/60 text-white ml-auto"
            }`}
          >
            <div>{c.from === "bot" ? formatMessage(c.text) : c.text}</div>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2">
        <input
          className="flex-1 p-3 bg-white/10 rounded-xl border border-white/10 text-white placeholder-blue-200 outline-none"
          placeholder="Ask about investments, credit, or savings..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          disabled={loading}
        />
        <button
          onClick={handleSend}
          disabled={loading || !message.trim()}
          className="p-3 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl hover:opacity-90 transition disabled:opacity-50"
        >
          {loading ? (
            <Loader2 className="h-5 w-5 text-white animate-spin" />
          ) : (
            <Send className="h-5 w-5 text-white" />
          )}
        </button>
      </div>
    </motion.div>
  )
}