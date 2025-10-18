"use client"

import { motion } from "framer-motion"
import { Brain, Eye, GraduationCap, Handshake } from "lucide-react"

const trustPoints = [
  {
    icon: <Brain className="w-8 h-8 text-cyan-400" />,
    title: "AI-Driven Clarity",
    desc: "Every recommendation is backed by transparent data and reasoning, not hidden partnerships or ads.",
  },
  {
    icon: <Eye className="w-8 h-8 text-blue-400" />,
    title: "Transparent Comparisons",
    desc: "We show product pros, cons, and fees upfront — no fine print or marketing gimmicks.",
  },
  {
    icon: <GraduationCap className="w-8 h-8 text-emerald-400" />,
    title: "Education First",
    desc: "Understand financial products in depth before choosing them. Learn as you compare.",
  },
  {
    icon: <Handshake className="w-8 h-8 text-purple-400" />,
    title: "Zero Spam, Zero Pressure",
    desc: "You control what you explore. NeoCred never spams or sells your data.",
  },
]

export function TrustSection() {
  return (
    <section className="relative bg-gradient-to-b from-black via-gray-900 to-black text-white py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold mb-6"
        >
          Why <span className="text-cyan-300">NeoCred?</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-blue-100 mb-16 max-w-2xl mx-auto"
        >
          Because we believe finance should be simple, transparent, and empowering. NeoCred blends AI + education to guide you, not confuse you.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustPoints.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="bg-white/5 border border-white/10 backdrop-blur-xl p-6 rounded-2xl hover:border-cyan-400/40 hover:-translate-y-1 transition-all"
            >
              <div className="mb-4">{point.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{point.title}</h3>
              <p className="text-blue-200 text-sm">{point.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
