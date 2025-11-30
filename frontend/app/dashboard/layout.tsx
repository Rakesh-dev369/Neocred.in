// Purpose: Main dashboard shell layout
"use client"

import { motion } from "framer-motion"
import { SidebarNav } from "@/components/dashboard/SidebarNav"
import { HeaderBar } from "@/components/dashboard/HeaderBar"
import { ReactNode } from "react"

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-blue-950 to-cyan-900 text-white">
      {/* Sidebar */}
      <SidebarNav />

      {/* Main Dashboard Content */}
      <div className="md:ml-52 flex flex-col min-h-screen relative">
        {/* Header */}
        <HeaderBar />

        {/* Scrollable Page */}
        <motion.main
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 p-6 md:p-10 overflow-y-auto scrollbar-thin scrollbar-thumb-blue-700/30"
        >
          {children}
        </motion.main>
      </div>
    </div>
  )
}
