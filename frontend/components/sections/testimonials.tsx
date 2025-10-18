"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const testimonials = [
  {
    name: "Aditi Sharma",
    role: "College Student",
    message:
      "NeoCred made finance actually make sense to me. The AI-guided lessons are gold — I now understand insurance and credit scores easily.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aditi",
  },
  {
    name: "Rohit Kumar",
    role: "First-time Investor",
    message:
      "I finally understood my credit score for the first time. The platform explains everything step-by-step without feeling overwhelming.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rohit",
  },
  {
    name: "Sneha Patel",
    role: "Working Professional",
    message:
      "It doesn’t feel like a spammy product site — NeoCred genuinely helps me learn and choose smarter financial options.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sneha",
  },
  {
    name: "Harish Rao",
    role: "Entrepreneur",
    message:
      "Love how transparent NeoCred is. It’s like having a personal AI advisor that teaches and compares everything clearly.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Harish",
  },
]

export function TestimonialsSection() {
  return (
    <section className="relative bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold mb-6"
        >
          Trusted by <span className="text-cyan-300">Learners</span> & <span className="text-blue-400">Achievers</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-blue-100 mb-16 max-w-2xl mx-auto"
        >
          Hear what our community says about learning and growing with NeoCred.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="bg-white/5 border border-white/10 backdrop-blur-xl p-6 rounded-2xl hover:border-cyan-400/40 hover:-translate-y-1 transition-all shadow-lg"
            >
              <div className="flex flex-col items-center text-center">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  width={64}
                  height={64}
                  className="rounded-full mb-4 border border-cyan-400/30"
                />
                <p className="text-sm text-blue-100 mb-4">“{t.message}”</p>
                <h4 className="font-semibold text-white">{t.name}</h4>
                <p className="text-xs text-blue-300">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
