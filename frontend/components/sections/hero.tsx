// components/sections/hero.tsx
"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden hero-gradient text-white py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-6xl font-bold leading-tight"
        >
          Master Your <span className="text-cyan-300">Financial Future</span> with AI
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-6 text-lg text-blue-100 max-w-2xl mx-auto"
        >
          Learn. Analyze. Choose Smart. Get transparent financial education and AI-powered product recommendations that fit your goals.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-10 flex justify-center gap-4 relative z-10"
        >
          <a
            href="/signin?mode=signup"
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-transform"
          >
            Get Started <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#ai-demo"
            className="px-6 py-3 bg-white/10 border border-white/20 rounded-xl font-semibold text-white hover:bg-white/20 hover:-translate-y-1 transition-transform inline-flex items-center"
          >
            Watch Demo
          </a>
        </motion.div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.1),_transparent_60%)] -z-10"></div>
    </section>
  )
}
