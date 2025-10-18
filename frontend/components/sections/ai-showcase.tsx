"use client"

import { motion } from "framer-motion"
import { Brain, BarChart3, Search, BookOpen } from "lucide-react"

const modules = [
  {
    icon: <Search className="w-8 h-8 text-cyan-400" />,
    title: "Smart Product Finder",
    desc: "AI scans thousands of financial products and recommends the best one tailored to your goals.",
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-blue-400" />,
    title: "AI Credit Insight",
    desc: "Understand and improve your credit score with predictive insights and score-boosting strategies.",
  },
  {
    icon: <Brain className="w-8 h-8 text-purple-400" />,
    title: "Smart Compare",
    desc: "Compare insurance, cards, and loans side-by-side with hidden costs and real customer metrics.",
  },
  {
    icon: <BookOpen className="w-8 h-8 text-emerald-400" />,
    title: "EduAI Coach",
    desc: "Neo AI turns complex finance into easy, actionable lessons that grow your financial IQ.",
  },
]

export function AIShowcaseSection() {
  return (
    <section id="ai-showcase" className="relative bg-black text-white py-16 overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold mb-4"
        >
          Power of <span className="text-cyan-300">Neo AI</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-blue-100 mb-12 max-w-2xl mx-auto"
        >
          Explore how NeoCred blends Education + AI to redefine how people understand, compare, and choose financial products.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {modules.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              className="bg-white/5 border border-white/10 backdrop-blur-xl p-6 rounded-2xl hover:border-cyan-400/40 hover:-translate-y-1 transition-all shadow-lg"
            >
              <div className="mb-4">{m.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{m.title}</h3>
              <p className="text-blue-200 text-sm">{m.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
