"use client"

import { motion } from "framer-motion"
import { Brain, BookOpen, CheckCircle } from "lucide-react"

const solutions = [
  {
    icon: BookOpen,
    title: "Learn",
    desc: "Understand every financial product in plain language. No jargon, no bias — just clear, interactive education built for real people.",
  },
  {
    icon: Brain,
    title: "Compare",
    desc: "Our AI analyzes thousands of data points and shows the best options tailored to your goals, credit health, and risk profile.",
  },
  {
    icon: CheckCircle,
    title: "Choose Smart",
    desc: "Make confident decisions with personalized recommendations, tools, and insights — backed by data, not commissions.",
  },
]

export function SolutionSection() {
  return (
    <section className="relative bg-white text-gray-900 py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold mb-6"
        >
          The <span className="text-blue-600">NeoCred</span> Solution
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-600 max-w-2xl mx-auto mb-10"
        >
          We combine financial education, AI intelligence, and unbiased product guidance — so you can finally make smart money decisions with confidence.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {solutions.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * i, duration: 0.6 }}
              className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 rounded-2xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center mx-auto mb-6">
                <s.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16"
        >
          <a
            href="/signin?mode=signup"
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-semibold shadow-md hover:shadow-lg hover:-translate-y-1 transition-transform"
          >
            Start Your Journey
          </a>
        </motion.div>
      </div>

      {/* Background gradient decorations */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-200/30 rounded-full blur-3xl -z-10"></div>
    </section>
  )
}
