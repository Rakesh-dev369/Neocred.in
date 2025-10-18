"use client"

import { motion } from "framer-motion"
import { BookOpen, Cpu, Zap, PieChart } from "lucide-react"

const lessons = [
  {
    icon: <BookOpen className="w-7 h-7 text-cyan-300" />,
    title: "Product Basics",
    desc: "What is this product, who needs it, and how it works — explained simply.",
  },
  {
    icon: <Cpu className="w-7 h-7 text-blue-300" />,
    title: "AI Insights",
    desc: "How our AI evaluates products and the signals it uses to recommend options.",
  },
  {
    icon: <Zap className="w-7 h-7 text-emerald-300" />,
    title: "Practical Checks",
    desc: "Concrete checklist: fees, fine print, claim ratios, and real customer metrics.",
  },
  {
    icon: <PieChart className="w-7 h-7 text-purple-300" />,
    title: "Compare Like a Pro",
    desc: "Side-by-side comparisons and real cost calculations so you choose with confidence.",
  },
]

export function LearningSection() {
  return (
    <section id="learn" className="relative bg-white text-gray-900 py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold mb-4"
        >
          Learn to <span className="text-blue-600">Choose Smart</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="text-gray-600 max-w-2xl mx-auto mb-10"
        >
          Bite-sized lessons and practical checklists for every financial product — from insurance to loans and cards.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {lessons.map((l, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <div className="mb-3">{l.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{l.title}</h3>
              <p className="text-gray-600 text-sm">{l.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Sample micro-courses / quick cards */}
        <div className="grid md:grid-cols-3 gap-6">
          <motion.div className="p-6 rounded-2xl bg-white/60 border border-gray-200 shadow card-hover">
            <h4 className="font-semibold mb-2">Life Insurance — Quick Guide</h4>
            <p className="text-sm text-gray-700 mb-4">Understand term vs ULIP, premium factors, and buying checklist.</p>
            <a className="text-sm font-semibold text-blue-600" href="/product/life-insurance">Open guide →</a>
          </motion.div>

          <motion.div className="p-6 rounded-2xl bg-white/60 border border-gray-200 shadow card-hover">
            <h4 className="font-semibold mb-2">Credit Score 101</h4>
            <p className="text-sm text-gray-700 mb-4">How scores are built and 5 steps to improve yours fast.</p>
            <a className="text-sm font-semibold text-blue-600" href="/learn/credit-score">Open guide →</a>
          </motion.div>

          <motion.div className="p-6 rounded-2xl bg-white/60 border border-gray-200 shadow card-hover">
            <h4 className="font-semibold mb-2">Compare Loans</h4>
            <p className="text-sm text-gray-700 mb-4">Use our checklist to spot hidden fees and real cost of borrowing.</p>
            <a className="text-sm font-semibold text-blue-600" href="/tools/loan-compare">Open tool →</a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12"
        >
          <a
            href="/signin?mode=signup"
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-semibold shadow-md hover:shadow-lg hover:-translate-y-1 transition-transform"
          >
            🎓 Start Learning — It's Free
          </a>
        </motion.div>
      </div>
    </section>
  )
}
