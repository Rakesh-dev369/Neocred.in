// Purpose: Rewards panel component
"use client"

import { motion } from "framer-motion"
import { Trophy, Star, Medal } from "lucide-react"

export function RewardsPanel() {
  const badges = [
    { title: "Savings Starter", icon: Star },
    { title: "Credit Hero", icon: Medal },
    { title: "Planner Pro", icon: Trophy },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white/10 border border-white/10 rounded-2xl p-6 backdrop-blur-xl shadow-lg"
    >
      <h3 className="text-xl font-semibold mb-4 text-white flex items-center gap-2">
        <Trophy className="h-5 w-5 text-yellow-400" /> Rewards & Achievements
      </h3>

      <div className="flex gap-4 mb-6">
        {badges.map((b, i) => (
          <div
            key={i}
            className="bg-gradient-to-br from-blue-900/40 to-cyan-700/40 border border-white/10 rounded-xl p-4 flex flex-col items-center w-28 hover:scale-105 transition"
          >
            <b.icon className="h-6 w-6 text-yellow-300 mb-2" />
            <p className="text-sm text-blue-100 text-center">{b.title}</p>
          </div>
        ))}
      </div>

      <div className="bg-white/10 p-4 rounded-xl text-center">
        <p className="text-lg font-semibold text-cyan-300">1,250 XP</p>
        <p className="text-sm text-blue-200">Keep learning to unlock exclusive insights!</p>
      </div>
    </motion.div>
  )
}
