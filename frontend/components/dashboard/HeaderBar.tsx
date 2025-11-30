// Purpose: Dashboard header bar component
"use client"

import { Bell, Wallet, Settings } from "lucide-react"
import { motion } from "framer-motion"

export function HeaderBar() {
  const userName = "Rakesh"

  return (
    <header className="sticky top-0 z-40 bg-white/10 backdrop-blur-lg border-b border-white/10 p-4 flex items-center justify-between">
      <div>
        <h2 className="text-xl font-semibold">Good Afternoon, <span className="text-cyan-300">{userName}</span> 👋</h2>
        <p className="text-sm text-blue-200 mt-1">Your financial confidence is improving daily.</p>
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition">
          <Bell className="h-5 w-5 text-blue-200" />
        </button>
        <button className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition">
          <Wallet className="h-5 w-5 text-blue-200" />
        </button>
        <button className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition">
          <Settings className="h-5 w-5 text-blue-200" />
        </button>
        <motion.img
          src="https://api.dicebear.com/7.x/identicon/svg?seed=NeoCredUser"
          alt="User Avatar"
          className="h-10 w-10 rounded-full border border-white/20"
          whileHover={{ scale: 1.1 }}
        />
      </div>
    </header>
  )
}
