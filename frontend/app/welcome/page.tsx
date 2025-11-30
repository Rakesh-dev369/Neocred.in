"use client"

import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, BarChart3, Calculator, Sparkles } from "lucide-react"

export default function WelcomePage() {
  const router = useRouter()
  const [quoteIndex, setQuoteIndex] = useState(0)

  const quotes = [
    "Welcome to NeoCred — where learning meets financial confidence.",
    "AI that teaches you before it advises you.",
    "Your financial journey starts with knowledge.",
    "Learn, grow, and master your credit story with NeoCred."
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const handleSelect = (goal: string) => {
    localStorage.setItem("userGoal", goal)
    router.push("/dashboard")
  }

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-950 via-blue-800 to-cyan-700 text-white text-center px-4 py-8">
      {/* Greeting Animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-6 sm:mb-8"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight">👋 Welcome to <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">NeoCred</span></h1>

        <AnimatePresence mode="wait">
          <motion.p
            key={quoteIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.6 }}
            className="text-base sm:text-lg text-blue-100 px-2"
          >
            {quotes[quoteIndex]}
          </motion.p>
        </AnimatePresence>
      </motion.div>

      {/* Goal Selection */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-6 sm:mt-8 max-w-4xl w-full px-2"
      >
        {[
          { title: "Learn Finance", icon: GraduationCap, color: "from-cyan-500 to-blue-500" },
          { title: "Track Credit", icon: BarChart3, color: "from-emerald-500 to-teal-500" },
          { title: "Use Tools", icon: Calculator, color: "from-indigo-500 to-purple-500" },
          { title: "All-in-One", icon: Sparkles, color: "from-rose-500 to-orange-400" }
        ].map((goal, i) => (
          <Card
            key={i}
            className="cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all bg-white/10 backdrop-blur-lg border border-white/10"
            onClick={() => handleSelect(goal.title)}
          >
            <CardContent className="flex flex-col items-center justify-center p-4 sm:p-6">
              <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-r ${goal.color} flex items-center justify-center mb-3 sm:mb-4`}>
                <goal.icon className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold">{goal.title}</h3>
            </CardContent>
          </Card>
        ))}
      </motion.div>

      <div className="mt-6 sm:mt-10">
        <Button
          onClick={() => router.push("/dashboard")}
          className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-xl font-semibold hover:shadow-lg transition-all text-sm sm:text-base"
        >
          Skip → Dashboard
        </Button>
      </div>
    </section>
  )
}
