"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import {
  User,
  ShieldCheck,
  Bell,
  Sun,
  Moon,
  LogOut,
  Edit3,
  Loader2,
  CheckCircle2,
} from "lucide-react"
import { createClient } from "@supabase/supabase-js"

// ✅ Initialize Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default function SettingsPage() {
  const [darkMode, setDarkMode] = useState(true)
  const [notifications, setNotifications] = useState(true)
  const [twoFA, setTwoFA] = useState(false)
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState<any>(null)
  const [saving, setSaving] = useState(false)
  const [success, setSuccess] = useState(false)

  // Fetch current user data
  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await supabase.auth.getUser()
      setUser(data.user)
      setLoading(false)
    }
    fetchUser()
  }, [])

  const handleToggle = async (type: string) => {
    if (saving) return
    setSaving(true)

    switch (type) {
      case "darkMode":
        setDarkMode(!darkMode)
        break
      case "notifications":
        setNotifications(!notifications)
        break
      case "2fa":
        setTwoFA(!twoFA)
        break
    }

    // Simulate API update delay
    setTimeout(() => {
      setSaving(false)
      setSuccess(true)
      setTimeout(() => setSuccess(false), 1500)
    }, 600)
  }

  const handleLogout = async () => {
    await supabase.auth.signOut()
    window.location.href = "/signin"
  }

  if (loading)
    return (
      <div className="flex items-center justify-center h-screen text-blue-300">
        <Loader2 className="animate-spin h-6 w-6 mr-2" />
        Loading settings...
      </div>
    )

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
            <ShieldCheck className="h-7 w-7 text-cyan-400" /> Account Settings
          </h1>
          <p className="text-blue-200 text-sm mt-1">
            Manage your profile, preferences, and security options.
          </p>
        </div>
        {success && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center text-green-400 text-sm"
          >
            <CheckCircle2 className="h-5 w-5 mr-1" /> Preferences updated!
          </motion.div>
        )}
      </div>

      {/* Profile Section */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white/10 border border-white/10 rounded-2xl p-6 backdrop-blur-xl shadow-lg"
      >
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center text-white text-xl font-semibold">
            {user?.email?.charAt(0).toUpperCase() || "U"}
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-white">
              {user?.user_metadata?.full_name || "NeoCred User"}
            </h2>
            <p className="text-blue-200 text-sm">{user?.email}</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 py-2 rounded-xl text-sm font-medium"
          >
            <Edit3 className="h-4 w-4 inline-block mr-2" />
            Edit Profile
          </motion.button>
        </div>
      </motion.div>

      {/* Preferences Section */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Appearance */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white/10 border border-white/10 rounded-2xl p-6 backdrop-blur-lg shadow-lg"
        >
          <h3 className="text-lg font-semibold text-white flex items-center gap-2 mb-4">
            <Sun className="h-5 w-5 text-yellow-400" /> Appearance
          </h3>
          <div className="flex items-center justify-between">
            <p className="text-blue-200 text-sm">Dark Mode</p>
            <motion.div
              whileTap={{ scale: 0.95 }}
              onClick={() => handleToggle("darkMode")}
              className={`w-14 h-7 rounded-full flex items-center cursor-pointer transition ${
                darkMode
                  ? "bg-gradient-to-r from-blue-600 to-cyan-500"
                  : "bg-white/20"
              }`}
            >
              <div
                className={`w-6 h-6 bg-white rounded-full shadow-md transform transition ${
                  darkMode ? "translate-x-7" : "translate-x-1"
                }`}
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Notifications */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white/10 border border-white/10 rounded-2xl p-6 backdrop-blur-lg shadow-lg"
        >
          <h3 className="text-lg font-semibold text-white flex items-center gap-2 mb-4">
            <Bell className="h-5 w-5 text-cyan-400" /> Notifications
          </h3>
          <div className="flex items-center justify-between">
            <p className="text-blue-200 text-sm">Enable Email Alerts</p>
            <motion.div
              whileTap={{ scale: 0.95 }}
              onClick={() => handleToggle("notifications")}
              className={`w-14 h-7 rounded-full flex items-center cursor-pointer transition ${
                notifications
                  ? "bg-gradient-to-r from-blue-600 to-cyan-500"
                  : "bg-white/20"
              }`}
            >
              <div
                className={`w-6 h-6 bg-white rounded-full shadow-md transform transition ${
                  notifications ? "translate-x-7" : "translate-x-1"
                }`}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Security Section */}
      <motion.div
        whileHover={{ scale: 1.01 }}
        className="bg-white/10 border border-white/10 rounded-2xl p-6 backdrop-blur-lg shadow-lg"
      >
        <h3 className="text-lg font-semibold text-white flex items-center gap-2 mb-4">
          <ShieldCheck className="h-5 w-5 text-green-400" /> Security
        </h3>
        <div className="flex items-center justify-between mb-4">
          <p className="text-blue-200 text-sm">
            Enable Two-Factor Authentication (2FA)
          </p>
          <motion.div
            whileTap={{ scale: 0.95 }}
            onClick={() => handleToggle("2fa")}
            className={`w-14 h-7 rounded-full flex items-center cursor-pointer transition ${
              twoFA
                ? "bg-gradient-to-r from-green-600 to-emerald-500"
                : "bg-white/20"
            }`}
          >
            <div
              className={`w-6 h-6 bg-white rounded-full shadow-md transform transition ${
                twoFA ? "translate-x-7" : "translate-x-1"
              }`}
            />
          </motion.div>
        </div>

        <div className="text-right mt-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={handleLogout}
            className="px-5 py-2 rounded-xl bg-gradient-to-r from-red-600 to-orange-500 text-white font-medium shadow-lg"
          >
            <LogOut className="h-4 w-4 inline-block mr-2" />
            Log Out
          </motion.button>
        </div>
      </motion.div>
    </motion.section>
  )
}
