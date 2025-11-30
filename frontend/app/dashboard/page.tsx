"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { supabase } from "@/lib/supabaseClient"
import {
  GraduationCap,
  CreditCard,
  Calculator,
  Sparkles,
  ArrowRight,
  Loader2,
} from "lucide-react"

const goals = [
  {
    id: "learn",
    title: "Learn Finance",
    icon: GraduationCap,
    desc: "Master money management and investments.",
    color: "from-cyan-400 to-blue-600",
  },
  {
    id: "credit",
    title: "Track Credit",
    icon: CreditCard,
    desc: "Monitor and boost your credit health.",
    color: "from-indigo-500 to-purple-500",
  },
  {
    id: "tools",
    title: "Use Tools",
    icon: Calculator,
    desc: "Make smarter decisions with smart tools.",
    color: "from-emerald-500 to-teal-400",
  },
  {
    id: "all",
    title: "Everything",
    icon: Sparkles,
    desc: "Unlock full NeoCred experience with AI.",
    color: "from-pink-500 to-rose-400",
  },
]

export default function StarterDashboard() {
  const [selectedGoal, setSelectedGoal] = useState<string>("")
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleContinue = async () => {
    if (!selectedGoal) return
    setLoading(true)
    try {
      const { data: { user } } = await supabase.auth.getUser()
      if (user) {
        await supabase
          .from("profiles")
          .update({ user_stage: "active" })
          .eq("id", user.id)
        localStorage.setItem("userGoal", selectedGoal)
        router.push("/dashboard/overview")
      }
    } catch (error) {
      console.error("Error updating user stage:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-950 to-black text-white p-6">
      {/* Floating Background Blobs */}
      <motion.div
        className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/30 rounded-full blur-3xl"
        animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 10 }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"
        animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 12 }}
      />

      <div className="relative z-10 w-full max-w-3xl text-center space-y-10">
        {/* Welcome Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Welcome to NeoCred 👋
          </h1>
          <p className="text-blue-200 text-lg">
            Let’s personalize your experience — what’s your main goal today?
          </p>
        </motion.div>

        {/* Goals Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {goals.map((goal) => (
            <motion.div
              key={goal.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setSelectedGoal(goal.id)}
              className={`relative cursor-pointer p-[2px] rounded-2xl transition-all duration-300 ${
                selectedGoal === goal.id
                  ? "bg-gradient-to-r from-blue-500 to-cyan-500 shadow-xl"
                  : "bg-white/10 hover:bg-white/20"
              }`}
            >
              <Card className="bg-gray-900/70 border-none text-center rounded-2xl h-full p-6 flex flex-col justify-center items-center">
                <div
                  className={`w-14 h-14 flex items-center justify-center rounded-full mb-3 bg-gradient-to-br ${goal.color}`}
                >
                  <goal.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-1">{goal.title}</h3>
                <p className="text-sm text-blue-200">{goal.desc}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Progress Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-4 flex justify-center"
        >
          <div className="w-64 h-2 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 to-cyan-400"
              animate={{ width: selectedGoal ? "100%" : "40%" }}
              transition={{ duration: 0.6 }}
            />
          </div>
        </motion.div>

        {/* Continue Button */}
        <div className="text-center mt-6">
          <Button
            onClick={handleContinue}
            disabled={!selectedGoal || loading}
            className="px-8 py-3 text-lg font-medium rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:opacity-90 transition disabled:opacity-50 shadow-lg"
          >
            {loading ? (
              <>
                <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                Setting up...
              </>
            ) : (
              <>
                Continue to Dashboard
                <ArrowRight className="ml-2 h-5 w-5" />
              </>
            )}
          </Button>
        </div>

        {/* Motivational Quote */}
        <p className="text-sm text-blue-300 mt-6 italic">
          “Small steps today lead to financial freedom tomorrow.” 💙
        </p>
      </div>
    </section>
  )
}
