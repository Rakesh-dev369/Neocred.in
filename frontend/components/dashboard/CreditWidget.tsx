// /app/dashboard/credit/CreditWidget.tsx
"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence, useSpring, useTransform } from "framer-motion"
import { CreditCard } from "lucide-react"

// Utility: map from score to gauge angle or percentage
function scoreToPercent(score: number, min = 300, max = 900) {
  const clamped = Math.min(max, Math.max(min, score))
  return (clamped - min) / (max - min)
}

interface MonthScore {
  month: string
  score: number
}

const sampleData: MonthScore[] = [
  { month: "Jan", score: 690 },
  { month: "Feb", score: 705 },
  { month: "Mar", score: 728 },
  { month: "Apr", score: 742 },
  { month: "May", score: 758 },
  { month: "Jun", score: 770 },
  { month: "Jul", score: 780 },
  { month: "Aug", score: 790 },
  { month: "Sep", score: 800 },
  { month: "Oct", score: 810 },
  { month: "Nov", score: 820 },
  { month: "Dec", score: 830 },
]

export function CreditWidget() {
  const [data, setData] = useState<MonthScore[]>(sampleData)
  const [selectedIndex, setSelectedIndex] = useState<number>(data.length - 1) // latest
  const selected = data[selectedIndex]

  const percent = scoreToPercent(selected.score)
  // Use a framer-motion spring or useSpring
  const animated = useSpring(0, { stiffness: 120, damping: 20 })
  const strokeOffset = useTransform(animated, [0, 1], [2 * Math.PI * 80, 0])

  useEffect(() => {
    animated.set(percent)
  }, [percent, animated])

  useEffect(() => {
    // If you fetch real data via API, do it here and setData
    // For example: fetch(`/api/credit/history?userId=...`)
    // setData(response)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white/10 border border-white/10 rounded-2xl p-6 backdrop-blur-xl shadow-lg"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-white flex items-center gap-2">
          <CreditCard className="h-5 w-5 text-cyan-400" /> Credit Health
        </h3>
      </div>

      {/* Gauge Section */}
      <div className="flex flex-col items-center justify-center">
        <motion.svg
          width={200}
          height={200}
          viewBox="0 0 200 200"
          className="mb-4"
        >
          <defs>
            <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f87171" />     {/* red */}
              <stop offset="50%" stopColor="#facc15" />    {/* yellow */}
              <stop offset="100%" stopColor="#22d3ee" />   {/* cyan/green */}
            </linearGradient>
          </defs>
          {/* Background arc */}
          <circle
            cx="100"
            cy="100"
            r="80"
            stroke="#374151"
            strokeWidth="15"
            fill="none"
          />
          {/* Foreground arc indicating score */}
          <motion.circle
            cx="100"
            cy="100"
            r="80"
            stroke="url(#gaugeGradient)"
            strokeWidth="15"
            fill="none"
            strokeDasharray={2 * Math.PI * 80}
            strokeDashoffset={strokeOffset}
            strokeLinecap="round"
            style={{ rotate: "-90deg", transformOrigin: "50% 50%" }}
          />
        </motion.svg>

        <div className="text-center">
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-4xl font-bold text-white"
          >
            {selected.score}
          </motion.div>
          <p className="text-blue-200 text-sm">Your score in {selected.month}</p>
        </div>
      </div>

      {/* Month Selector */}
      <div className="mt-6 grid grid-cols-3 gap-3">
        {data.map((item, idx) => (
          <button
            key={item.month}
            onClick={() => setSelectedIndex(idx)}
            className={`px-3 py-1 rounded-full text-sm font-medium transition ${
              idx === selectedIndex
                ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white"
                : "bg-white/10 text-blue-200 hover:bg-white/20"
            }`}
          >
            {item.month}
          </button>
        ))}
      </div>

      <p className="text-blue-200 text-sm mt-4">
        Keep your credit utilisation below 40 % and avoid missed payments for faster improvement.
      </p>
    </motion.div>
  )
}
