// Purpose: Tools grid component
"use client"

import { motion } from "framer-motion"
import { Calculator, BarChart3, PiggyBank, Receipt } from "lucide-react"

const tools = [
  { title: "SIP Calculator", icon: PiggyBank },
  { title: "EMI Planner", icon: Calculator },
  { title: "Budget Splitter", icon: Receipt },
  { title: "Tax Saver Tool", icon: BarChart3 },
]

export function ToolsGrid() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white/10 border border-white/10 rounded-2xl p-6 backdrop-blur-xl shadow-lg"
    >
      <h3 className="text-xl font-semibold mb-4 text-white">Your Smart Tools</h3>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {tools.map((tool, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center justify-center bg-gradient-to-br from-blue-900/40 to-cyan-700/40 rounded-xl p-4 text-center border border-white/10 hover:shadow-md transition-all cursor-pointer"
          >
            <tool.icon className="h-6 w-6 text-cyan-300 mb-2" />
            <p className="text-sm text-blue-100">{tool.title}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
