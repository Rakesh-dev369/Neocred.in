"use client"

import { motion } from "framer-motion"
import { AlertTriangle, Layers, EyeOff, DollarSign } from "lucide-react"

const problems = [
  {
    icon: AlertTriangle,
    title: "Too Many Choices",
    desc: "Dozens of financial products, endless marketing — but no one explains what actually fits *you*.",
  },
  {
    icon: Layers,
    title: "Complex Information",
    desc: "Financial jargon and hidden terms make it hard to understand what’s good or risky.",
  },
  {
    icon: EyeOff,
    title: "Biased Recommendations",
    desc: "Most sites push products for commissions, not your benefit — trust becomes a problem.",
  },
  {
    icon: DollarSign,
    title: "No Personalized Guidance",
    desc: "Everyone’s financial journey is unique. Yet most advice is one-size-fits-all.",
  },
]

export function ProblemSection() {
  return (
    <section className="relative bg-[#0A2540] text-white py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold mb-6"
        >
          The <span className="text-cyan-400">Problem</span> We’re Solving
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-blue-200 max-w-2xl mx-auto mb-10"
        >
          Most people struggle to make confident financial choices — not because they lack money, but because they lack clarity. We’re here to change that.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          {problems.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * i, duration: 0.6 }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 card-hover border border-white/10"
            >
              <p.icon className="w-10 h-10 text-cyan-400 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
              <p className="text-blue-200 text-sm">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Glow effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
    </section>
  )
}
