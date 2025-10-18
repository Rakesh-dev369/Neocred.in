"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, Lock, User, Apple, Chrome } from "lucide-react"

const quotes = [
  "Empower your financial journey with clarity.",
  "AI that teaches you, not sells to you.",
  "Smarter finance begins with smarter learning.",
  "Welcome to the future of financial confidence.",
]

export default function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(false)
  const [quoteIndex, setQuoteIndex] = useState(0)

  // Check URL parameter to determine initial mode
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    if (urlParams.get('mode') === 'signup') {
      setIsSignUp(true)
    }
  }, [])

  // Rotate quotes smoothly every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-cyan-800 text-white">
      {/* Animated gradient orbs */}
      <div className="absolute w-[700px] h-[700px] bg-cyan-500/20 rounded-full blur-3xl top-0 left-0 -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
      <div className="absolute w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl bottom-0 right-0 translate-x-1/3 translate-y-1/3 animate-pulse"></div>

      {/* Main container */}
      <div className="relative z-10 w-full max-w-5xl mx-auto grid md:grid-cols-2 gap-4 md:gap-8 p-4 md:p-12 items-center">
        {/* Mobile Branding */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="md:hidden text-center mb-4"
        >
          <h1 className="text-3xl font-extrabold mb-2">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              NeoCred
            </span>
          </h1>
          <p className="text-blue-100 text-sm">
            "{quotes[quoteIndex]}"
          </p>
        </motion.div>

        {/* Left side - Quotes + Branding (Desktop) */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hidden md:flex flex-col items-start justify-center p-10"
        >
          <h1 className="text-5xl font-extrabold leading-tight mb-6">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              NeoCred
            </span>
          </h1>

          <AnimatePresence mode="wait">
            <motion.p
              key={quoteIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.8 }}
              className="text-blue-100 text-lg italic max-w-md"
            >
              “{quotes[quoteIndex]}”
            </motion.p>
          </AnimatePresence>

          <div className="mt-10 flex space-x-4">
            <Button
              variant="outline"
              className="border-cyan-300 text-cyan-600 hover:bg-cyan-600/10"
              asChild
            >
              <a href="/#learn">Learn More</a>
            </Button>
            <Button className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold" asChild>
              <a href="/">Visit Website</a>
            </Button>
          </div>
        </motion.div>

        {/* Right side - Auth Card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-6 md:p-10"
        >
          <motion.h2
            key={isSignUp ? "signup" : "signin"}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-center"
          >
            {isSignUp ? "Create your account" : "Welcome back"}
          </motion.h2>

          {/* Form */}
          <motion.form
            key={isSignUp ? "signup-form" : "signin-form"}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4 md:space-y-5"
          >
            {isSignUp && (
              <div>
                <label className="text-sm text-blue-100 mb-1 block">
                  Full Name
                </label>
                <div className="flex items-center bg-white/10 rounded-xl px-3">
                  <User className="h-4 w-4 text-cyan-300" />
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="bg-transparent border-0 focus:ring-0 text-white placeholder-blue-200 flex-1 outline-none px-3 py-2"
                    suppressHydrationWarning
                  />
                </div>
              </div>
            )}

            <div>
              <label className="text-sm text-blue-100 mb-1 block">Email</label>
              <div className="flex items-center bg-white/10 rounded-xl px-3">
                <Mail className="h-4 w-4 text-cyan-300" />
                <input
                  type="email"
                  placeholder="you@gmail.com"
                  className="bg-transparent border-0 focus:ring-0 text-white placeholder-blue-200 flex-1 outline-none px-3 py-2"
                  suppressHydrationWarning
                />
              </div>
            </div>

            <div>
              <label className="text-sm text-blue-100 mb-1 block">Password</label>
              <div className="flex items-center bg-white/10 rounded-xl px-3">
                <Lock className="h-4 w-4 text-cyan-300" />
                <input
                  type="password"
                  placeholder="••••••••"
                  className="bg-transparent border-0 focus:ring-0 text-white placeholder-blue-200 flex-1 outline-none px-3 py-2"
                  suppressHydrationWarning
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full mt-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold rounded-xl hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              {isSignUp ? "Create Account" : "Sign In"}
            </Button>
          </motion.form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-1 h-px bg-white/20"></div>
            <span className="text-blue-100 text-xs px-3">or continue with</span>
            <div className="flex-1 h-px bg-white/20"></div>
          </div>

          {/* Social Login Buttons */}
          <div className="flex flex-col space-y-3">
            <Button
              variant="outline"
              className="w-full flex items-center justify-center gap-3 border-white/20 bg-white/5 hover:bg-white/10 text-white font-medium"
            >
              <Chrome className="h-5 w-5 text-yellow-300" />
              <span className="hidden sm:inline">Sign in with Google</span>
              <span className="sm:hidden">Google</span>
            </Button>
            <Button
              variant="outline"
              className="w-full flex items-center justify-center gap-3 border-white/20 bg-white/5 hover:bg-white/10 text-white font-medium"
            >
              <Apple className="h-5 w-5 text-gray-200" />
              <span className="hidden sm:inline">Sign in with Apple</span>
              <span className="sm:hidden">Apple</span>
            </Button>
          </div>

          {/* Toggle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-center text-sm text-blue-200 mt-6"
          >
            {isSignUp ? "Already have an account?" : "Don’t have an account?"}{" "}
            <button
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-cyan-300 font-semibold hover:underline"
              suppressHydrationWarning
            >
              {isSignUp ? "Sign In" : "Sign Up"}
            </button>
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
