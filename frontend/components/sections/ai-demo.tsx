"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Send } from "lucide-react"

export function InteractiveDemoSection() {
  const [input, setInput] = useState("")
  const [response, setResponse] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  const demoResponses: Record<string, string> = {
    "life insurance":
      "Neo AI: Based on your goal, a Term Life plan offers the best coverage for minimal cost. Focus on claim ratio >95%, low premium-to-cover ratio, and choose a 20+ year term.",
    "credit card":
      "Neo AI: For building credit, start with a low-limit secured card. Keep utilization <30% and pay full balance monthly to boost your score fast.",
    "personal loan":
      "Neo AI: Compare interest + processing fees. Always check prepayment flexibility and avoid hidden insurance add-ons.",
  }

  const handleAsk = () => {
    const key = Object.keys(demoResponses).find(k =>
      input.toLowerCase().includes(k)
    )
    const reply = key
      ? demoResponses[key]
      : "Neo AI: I can analyze any financial product — just ask about insurance, loans, or cards."

    setIsTyping(true)
    setResponse("")

    // Simulate typing effect
    let index = 0
    const interval = setInterval(() => {
      setResponse(prev => prev + reply[index])
      index++
      if (index === reply.length) {
        clearInterval(interval)
        setIsTyping(false)
      }
    }, 20)
  }

  return (
    <section
      id="ai-demo"
      className="relative hero-gradient text-white py-16"
    >
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold mb-4"
        >
          Try <span className="text-cyan-300">Neo AI</span> in Action
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-blue-100 mb-8 max-w-2xl mx-auto"
        >
          Ask anything about finance or products — Neo AI will guide you with
          unbiased, personalized insights.
        </motion.p>

        {/* Demo Chat Box */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-4 sm:p-6 max-w-2xl mx-auto shadow-lg">
          <div className="flex flex-col sm:flex-row gap-2 mb-4">
            <input
              type="text"
              placeholder='e.g. "Which life insurance is best for me?"'
              value={input}
              onChange={e => setInput(e.target.value)}
              className="flex-1 px-4 py-3 rounded-xl bg-white/10 text-white placeholder-blue-200 border border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-sm"
              suppressHydrationWarning
            />
            <button
              onClick={handleAsk}
              className="px-4 sm:px-5 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center gap-2 font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all whitespace-nowrap"
              suppressHydrationWarning
            >
              <span className="hidden sm:inline">Ask Neo</span>
              <span className="sm:hidden">Ask</span>
              <Send className="w-4 h-4" />
            </button>
          </div>

          {/* Response area */}
          <div className="bg-black/30 rounded-xl p-4 text-left min-h-[100px] font-mono text-sm whitespace-pre-wrap">
            {response ? (
              <motion.p
                key={response}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-blue-100"
              >
                {response}
                {isTyping && <span className="animate-pulse text-cyan-300">|</span>}
              </motion.p>
            ) : (
              <p className="text-blue-300/60">Neo AI is waiting for your question...</p>
            )}
          </div>
        </div>
      </div>

      {/* Decorative Glow */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
    </section>
  )
}
