// Purpose: Dashboard sidebar navigation component
"use client"

import { motion } from "framer-motion"
import {
  Home, GraduationCap, CreditCard, Calculator,
  Bot, Trophy, Settings, LogOut
} from "lucide-react"
import { useRouter } from "next/navigation"
import { usePathname } from "next/navigation"

const navItems = [
  { name: "Dashboard", icon: Home, path: "/dashboard" },
  { name: "Learning", icon: GraduationCap, path: "/dashboard/learning" },
  { name: "Neo Tools", icon: Calculator, path: "/dashboard/tools" },
  { name: "Credit Score", icon: CreditCard, path: "/dashboard/credit" },
  { name: "Neo AI", icon: Bot, path: "/dashboard/advisor" },
  { name: "Rewards", icon: Trophy, path: "/dashboard/rewards" },
  { name: "Settings", icon: Settings, path: "/dashboard/settings" },
]

export function SidebarNav() {
  const router = useRouter()
  const pathname = usePathname()
  
  return (
    <aside className="hidden md:flex flex-col w-52 bg-white/10 backdrop-blur-lg border-r border-white/10 p-6 space-y-8 fixed left-0 top-0 h-screen z-10">
      {/* Brand */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-2"
      >
        <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center text-xl font-bold">
          ₹
        </div>
        <h1 className="text-2xl font-extrabold tracking-tight">NeoCred</h1>
      </motion.div>

      {/* Navigation */}
      <nav className="flex flex-col gap-2">
        {navItems.map((item) => {
          const isActive = pathname === item.path
          return (
            <motion.button
              key={item.name}
              whileHover={{ scale: 1.03 }}
              onClick={() => router.push(item.path)}
              className={`flex items-center gap-3 px-3 py-2 rounded-xl transition-all
              ${isActive
                ? "bg-gradient-to-r from-blue-600 to-cyan-500 shadow-lg text-white"
                : "hover:bg-white/10 text-blue-100"
              }`}
            >
              <item.icon className="h-5 w-5" />
              <span className="font-medium">{item.name}</span>
            </motion.button>
          )
        })}
      </nav>

      {/* Logout */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        className="mt-auto flex items-center gap-3 px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 transition-all"
        onClick={() => router.push("/auth")}
      >
        <LogOut className="h-5 w-5" />
        <span>Logout</span>
      </motion.button>
    </aside>
  )
}