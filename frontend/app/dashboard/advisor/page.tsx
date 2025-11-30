// Purpose: AI chat & insights page
"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Send, Bot, User, Sparkles, Lightbulb, BookOpen } from "lucide-react"

// HTML entity decoder for React (SSR-safe)
const decodeHtmlEntities = (text: string): string => {
  if (typeof window === 'undefined') {
    // Server-side: manual replacement
    return text
      .replace(/&#39;/g, "'")
      .replace(/&amp;/g, "&")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&quot;/g, '"')
  }
  // Client-side: use DOM
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

interface ChatMessage {
  from: "user" | "bot"
  text: string
}

export default function AdvisorPage() {
  const [chat, setChat] = useState<ChatMessage[]>([
    {
      from: "bot",
      text: "👋 Hi! I'm Neo — your AI finance advisor. How can I help you today?",
    },
  ])
  const [message, setMessage] = useState("")
  const chatEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [chat])

  const handleSend = async () => {
    if (!message.trim()) return

    const currentMessage = message
    const userMsg: ChatMessage = { from: "user", text: currentMessage }
    setChat((prev) => [...prev, userMsg])
    setMessage("")

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8001'
      const response = await fetch(`${apiUrl}/api/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: currentMessage,
          context: {
            user_type: 'financial_advisor_user',
            conversation_history: chat.slice(-5),
            platform: 'neocred_dashboard'
          }
        })
      })

      if (!response.ok) {
        throw new Error('API call failed')
      }

      const data = await response.json()
      const botMsg: ChatMessage = { from: "bot", text: data.response || "I'm having trouble processing that." }
      setChat((prev) => [...prev, botMsg])
    } catch (error) {
      console.error('AI Advisor error:', error)
      
      // Fallback responses based on keywords
      const msg = currentMessage.toLowerCase()
      let fallbackResponse = "I'm experiencing some technical difficulties. Please try again."
      
      if (msg.includes('sip') || msg.includes('investment')) {
        fallbackResponse = "SIP (Systematic Investment Plan) is a great way to invest regularly. Start with ₹1000-5000 monthly based on your income."
      } else if (msg.includes('saving') || msg.includes('save') || msg.includes('plan')) {
        fallbackResponse = "For savings, follow the 50-30-20 rule: 50% needs, 30% wants, 20% savings. Build an emergency fund of 6 months expenses first."
      } else if (msg.includes('credit') || msg.includes('score')) {
        fallbackResponse = "Maintain credit utilization below 30%, pay bills on time for a good credit score."
      } else if (msg.includes('mutual') || msg.includes('fund')) {
        fallbackResponse = "Mutual funds pool money from investors to buy diversified portfolios. Start with SIP in equity funds for long-term growth."
      }
      
      const errorMsg: ChatMessage = { from: "bot", text: fallbackResponse }
      setChat((prev) => [...prev, errorMsg])
    }
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex flex-col"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-white flex items-center gap-2">
          <Bot className="h-7 w-7 text-cyan-400" /> AI Advisor
        </h1>
        <p className="text-blue-200 text-sm">Ask me anything about your finances 🧠</p>
      </div>

      {/* Chat Window */}
      <div className="flex-1 bg-gradient-to-br from-blue-900/60 to-cyan-800/40 border border-white/10 rounded-2xl p-6 shadow-inner backdrop-blur-xl overflow-y-auto space-y-4">
        {chat.map((msg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`flex items-start gap-3 ${
              msg.from === "user" ? "justify-end" : "justify-start"
            }`}
          >
            {msg.from === "bot" && (
              <div className="bg-white/10 border border-white/10 rounded-xl p-3 max-w-[75%] shadow-md text-blue-100">
                <div className="flex items-center gap-2 mb-1">
                  <Bot className="h-4 w-4 text-cyan-300" />
                  <span className="text-sm font-semibold text-cyan-200">Neo</span>
                </div>
                <div className="text-sm">{formatMessage(msg.text)}</div>
              </div>
            )}

            {msg.from === "user" && (
              <div className="bg-cyan-600/70 rounded-xl p-3 max-w-[75%] shadow-md text-white">
                <div className="flex items-center gap-2 mb-1">
                  <User className="h-4 w-4 text-white/90" />
                  <span className="text-sm font-semibold">You</span>
                </div>
                <p className="text-sm">{msg.text}</p>
              </div>
            )}
          </motion.div>
        ))}
        <div ref={chatEndRef} />
      </div>

      {/* Suggestion Bar */}
      <div className="flex flex-wrap gap-3 mt-5">
        {[
          { icon: Lightbulb, text: "How to improve my credit score?" },
          { icon: Sparkles, text: "Best saving plan for my income" },
          { icon: BookOpen, text: "Explain mutual funds simply" },
        ].map((s, i) => (
          <motion.button
            key={i}
            whileHover={{ scale: 1.05 }}
            onClick={() => setMessage(s.text)}
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl px-4 py-2 text-sm text-blue-100"
          >
            <s.icon className="h-4 w-4 text-cyan-300" />
            {s.text}
          </motion.button>
        ))}
      </div>

      {/* Input Bar */}
      <div className="flex items-center gap-2 mt-4">
        <input
          type="text"
          placeholder="Type your question..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          className="flex-1 bg-white/10 border border-white/10 rounded-xl p-3 text-white placeholder-blue-200 outline-none focus:ring-2 focus:ring-cyan-500"
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={handleSend}
          className="p-3 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl hover:opacity-90 transition"
        >
          <Send className="h-5 w-5 text-white" />
        </motion.button>
      </div>
    </motion.section>
  )
}