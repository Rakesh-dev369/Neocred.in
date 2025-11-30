// Purpose: Badges & gamification page
"use client"

import { motion } from "framer-motion"
import { Trophy, Star, Medal, Gift, Target, TrendingUp } from "lucide-react"

const badges = [
  { title: "Credit Hero", desc: "Maintained 700+ credit score for 3 months", icon: Medal },
  { title: "Savings Starter", desc: "Built 3-month emergency fund", icon: Star },
  { title: "Smart Learner", desc: "Completed 5 AI-guided lessons", icon: Trophy },
  { title: "Budget Pro", desc: "Used tools consistently for 30 days", icon: Target },
]

const leaderboard = [
  { name: "Rakesh K", xp: 2450 },
  { name: "Priya Sharma", xp: 2200 },
  { name: "Amit Verma", xp: 1950 },
  { name: "Sneha Patel", xp: 1800 },
  { name: "Rahul Iyer", xp: 1600 },
]

export default function RewardsPage() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen space-y-10"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
        <div>
          <h1 className="text-3xl font-bold text-white flex items-center gap-2">
            <Trophy className="h-7 w-7 text-yellow-400" /> Rewards & Achievements
          </h1>
          <p className="text-blue-200 text-sm mt-1">
            Every smart financial move earns you XP, badges, and exclusive perks.
          </p>
        </div>
      </div>

      {/* XP Overview */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-yellow-400/40 to-orange-500/30 border border-white/10 rounded-2xl p-6 backdrop-blur-xl shadow-lg"
      >
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-white mb-1">Your XP Summary</h2>
            <p className="text-blue-100 text-sm">You’re leveling up fast — keep going!</p>
          </div>
          <div className="text-right">
            <h3 className="text-4xl font-bold text-yellow-300">2,450 XP</h3>
            <p className="text-sm text-blue-100">Level 5 — Finfluencer 🧠</p>
          </div>
        </div>

        <div className="mt-5 bg-white/10 rounded-full h-4 overflow-hidden">
          <motion.div
            className="h-4 bg-gradient-to-r from-yellow-400 to-orange-500"
            initial={{ width: 0 }}
            animate={{ width: "70%" }}
            transition={{ duration: 1 }}
          />
        </div>
      </motion.div>

      {/* Badges Section */}
      <div>
        <h2 className="text-xl font-semibold text-white mb-4">Your Achievements</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map((badge, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-blue-900/40 to-cyan-700/40 border border-white/10 rounded-2xl p-5 backdrop-blur-lg text-center shadow-lg"
            >
              <badge.icon className="h-8 w-8 mx-auto text-yellow-300 mb-3" />
              <h3 className="text-lg font-semibold text-white mb-1">{badge.title}</h3>
              <p className="text-sm text-blue-200">{badge.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Leaderboard */}
      <div>
        <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-cyan-300" /> Top Performers
        </h2>

        <div className="bg-white/10 border border-white/10 rounded-2xl p-6 backdrop-blur-xl">
          <div className="grid grid-cols-3 text-blue-200 text-sm font-medium border-b border-white/10 pb-2 mb-2">
            <span>Rank</span>
            <span>User</span>
            <span className="text-right">XP</span>
          </div>

          {leaderboard.map((user, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="grid grid-cols-3 items-center py-3 border-b border-white/5 text-blue-100"
            >
              <span>#{i + 1}</span>
              <span className="font-medium">{user.name}</span>
              <span className="text-right text-yellow-300 font-semibold">{user.xp}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Rewards CTA */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="bg-gradient-to-r from-blue-800/50 to-cyan-700/50 border border-white/10 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4 text-white backdrop-blur-xl shadow-lg"
      >
        <div>
          <h3 className="text-xl font-semibold mb-1">🎁 Redeem Your Rewards</h3>
          <p className="text-blue-200 text-sm">
            Convert XP into premium features, access personalized insights, or unlock early access tools.
          </p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-gradient-to-r from-yellow-400 to-orange-500 px-6 py-3 rounded-xl font-semibold text-white shadow-lg"
        >
          <Gift className="h-4 w-4 inline-block mr-2" />
          Redeem Now
        </motion.button>
      </motion.div>
    </motion.section>
  )
}
