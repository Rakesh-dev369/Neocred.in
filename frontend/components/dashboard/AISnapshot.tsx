"use client"

import { motion } from "framer-motion"
import { BarChart3, TrendingUp, Zap } from "lucide-react"

export function AISnapshot() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-r from-blue-900/70 via-blue-800/60 to-cyan-700/60 rounded-2xl p-8 border border-white/10 shadow-xl text-white backdrop-blur-xl"
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Your AI Financial Overview</h2>
        <Zap className="h-6 w-6 text-cyan-300" />
      </div>

      <p className="text-blue-100 text-sm mb-6">
        “NeoCred AI predicts your credit score may improve by <span className='text-cyan-300 font-semibold'>+15 points</span> next month with consistent EMI payments.”
      </p>

      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white/10 rounded-xl p-4 text-center">
          <h3 className="text-3xl font-bold text-cyan-300">742</h3>
          <p className="text-sm text-blue-200">Credit Score</p>
        </div>

        <div className="bg-white/10 rounded-xl p-4 text-center">
          <h3 className="text-3xl font-bold text-cyan-300">₹ 18,450</h3>
          <p className="text-sm text-blue-200">Avg Monthly Savings</p>
        </div>

        <div className="bg-white/10 rounded-xl p-4 text-center">
          <h3 className="text-3xl font-bold text-cyan-300">+8%</h3>
          <p className="text-sm text-blue-200">Credit Utilization</p>
        </div>
      </div>
    </motion.div>
  )
}
