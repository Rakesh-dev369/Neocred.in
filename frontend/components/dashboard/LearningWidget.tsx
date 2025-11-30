// Purpose: Learning widget component
"use client"

import { motion } from "framer-motion"
import { GraduationCap } from "lucide-react"

export function LearningWidget() {
  const progress = 70

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white/10 border border-white/10 rounded-2xl p-6 backdrop-blur-xl shadow-lg"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold flex items-center gap-2 text-white">
          <GraduationCap className="h-5 w-5 text-cyan-400" /> Learning Progress
        </h3>
        <span className="text-blue-200 text-sm">{progress}% complete</span>
      </div>

      <div className="w-full bg-white/10 rounded-full h-3 mb-3 overflow-hidden">
        <motion.div
          className="h-3 bg-gradient-to-r from-cyan-400 to-blue-500"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1 }}
        />
      </div>

      <p className="text-sm text-blue-200">
        Keep learning! Next topic: <span className="text-cyan-300 font-semibold">Understanding Credit Reports</span>.
      </p>
    </motion.div>
  )
}
