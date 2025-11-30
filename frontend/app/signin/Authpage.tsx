"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { User, Mail, Lock, Chrome, Apple } from "lucide-react"
import { supabase } from "@/lib/supabaseClient"
import { trackEvent } from "@/lib/analytics/events"

const quotes = [
  "Master your financial future with AI-powered insights.",
  "Smart decisions start with the right tools.",
  "Your journey to financial freedom begins here.",
  "Empowering India's financial literacy, one calculation at a time."
]

export default function AuthPage() {
  const [quoteIndex, setQuoteIndex] = useState(0)
  const [isSignUp, setIsSignUp] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState<string | null>(null)
  const router = useRouter()

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  // form state
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  // SIGN UP
  const handleSignUp = async (e?: React.FormEvent) => {
    e?.preventDefault()
    setErrorMsg(null)
    setLoading(true)
    
    console.log('Starting signup process...', { email, name })
    
    try {
      // Check if supabase client is initialized
      if (!supabase) {
        throw new Error('Supabase client not initialized')
      }
      
      // include name in user metadata
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: { 
          data: { full_name: name },
          emailRedirectTo: `${window.location.origin}/dashboard`
        },
      })
      
      console.log('Signup response:', { data, error })
      
      if (error) {
        console.error('Supabase signup error:', error)
        throw error
      }
      
      if (data.user) {
        setErrorMsg(null)
        // Store user name
        localStorage.setItem('userName', name)
        
        // Track signup event
        try {
          await trackEvent('user_signup', {
            user_id: data.user.id,
            email: data.user.email,
            provider: 'email',
            source: 'signup_form'
          })
        } catch (err) {
          console.warn('Analytics tracking failed:', err)
        }
        
        // New users go to welcome page first
        router.push("/welcome?source=signup")
      }
      
    } catch (err: any) {
      console.error('Signup error:', err)
      setErrorMsg(err.message || "Signup failed. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  // SIGN IN (email / password)
  const handleSignIn = async (e?: React.FormEvent) => {
    e?.preventDefault()
    setErrorMsg(null)
    setLoading(true)
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })
      if (error) throw error
      // Store user name if available
      if (data.user?.user_metadata?.full_name) {
        localStorage.setItem('userName', data.user.user_metadata.full_name)
      }
      
      // Track signin event
      try {
        await trackEvent('user_signin', {
          user_id: data.user.id,
          email: data.user.email,
          provider: 'email',
          source: 'signin_form'
        })
      } catch (err) {
        console.warn('Analytics tracking failed:', err)
      }
      
      // Redirect to dashboard (middleware will route based on user_stage)
      router.push("/dashboard")
    } catch (err: any) {
      setErrorMsg(err.message || "Login failed")
    } finally {
      setLoading(false)
    }
  }

  // OAuth (Google/Apple)
  const handleOAuth = async (provider: "google" | "apple") => {
    setErrorMsg(null)
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: process.env.NEXT_PUBLIC_FRONTEND_URL ? `${process.env.NEXT_PUBLIC_FRONTEND_URL}/auth/callback` : `${window.location.origin}/auth/callback`
        }
      })
      if (error) throw error
      
      // Track OAuth attempt
      try {
        await trackEvent('oauth_attempt', {
          provider: provider,
          source: 'auth_page'
        })
      } catch (err) {
        console.warn('Analytics tracking failed:', err)
      }
      
      // Supabase will redirect to the provider page; callback will handle the rest
    } catch (err: any) {
      setErrorMsg(err.message || "OAuth sign-in failed")
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-cyan-800 text-white">
      {/* Animated gradient orbs */}
      <div className="absolute w-[700px] h-[700px] bg-cyan-500/20 rounded-full blur-3xl top-0 left-0 -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
      <div className="absolute w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl bottom-0 right-0 translate-x-1/3 translate-y-1/3 animate-pulse"></div>

      <div className="relative z-10 w-full max-w-5xl mx-auto grid md:grid-cols-2 gap-8 p-6 md:p-12 items-center">
        {/* Left side omitted for brevity — keep your branding/quotes block */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hidden md:flex flex-col items-start justify-center p-10"
        >
          <h1 className="text-5xl font-extrabold leading-tight mb-6">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">NeoCred</span>
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
              "{quotes[quoteIndex]}"
            </motion.p>
          </AnimatePresence>

          <div className="mt-10 flex space-x-4">
            <Button variant="outline" className="border-cyan-300 text-cyan-300 hover:bg-cyan-500/10" onClick={() => (window.location.href = "/#learn")}>
              Learn More
            </Button>
            <Button className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold" onClick={() => (window.location.href = "/")}>
              Visit Website
            </Button>
          </div>
        </motion.div>

        {/* Right side — auth card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-8 md:p-10"
        >
          <motion.h2 className="text-3xl font-bold mb-6 text-center">
            {isSignUp ? "Create your account" : "Welcome back"}
          </motion.h2>

          {errorMsg && <div className="mb-4 text-sm text-rose-300">{errorMsg}</div>}

          <form
            onSubmit={isSignUp ? handleSignUp : handleSignIn}
            className="space-y-5"
          >
            {isSignUp && (
              <div>
                <label className="text-sm text-blue-100 mb-1 block">Full Name</label>
                <div className="flex items-center bg-white/10 rounded-xl px-3">
                  <User className="h-4 w-4 text-cyan-300" />
                  <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder="John Doe"
                    className="bg-transparent border-0 focus:ring-0 text-white placeholder-blue-200 flex-1"
                    required
                  />
                </div>
              </div>
            )}

            <div>
              <label className="text-sm text-blue-100 mb-1 block">Email</label>
              <div className="flex items-center bg-white/10 rounded-xl px-3">
                <Mail className="h-4 w-4 text-cyan-300" />
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="you@gmail.com"
                  className="bg-transparent border-0 focus:ring-0 text-white placeholder-blue-200 flex-1"
                  required
                />
              </div>
            </div>

            <div>
              <label className="text-sm text-blue-100 mb-1 block">Password</label>
              <div className="flex items-center bg-white/10 rounded-xl px-3">
                <Lock className="h-4 w-4 text-cyan-300" />
                <Input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="••••••••"
                  className="bg-transparent border-0 focus:ring-0 text-white placeholder-blue-200 flex-1"
                  required
                />
              </div>
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full mt-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold rounded-xl hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              {loading ? "Working..." : isSignUp ? "Create Account" : "Sign In"}
            </Button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-1 h-px bg-white/20" />
            <span className="text-blue-100 text-xs px-3">or continue with</span>
            <div className="flex-1 h-px bg-white/20" />
          </div>

          {/* Social Login */}
          <div className="flex flex-col space-y-3">
            <Button
              variant="outline"
              className="w-full flex items-center justify-center gap-3 border-white/20 bg-white/5 hover:bg-white/10 text-white font-medium"
              onClick={() => handleOAuth("google")}
            >
              <Chrome className="h-5 w-5 text-yellow-300" />
              Sign in with Google
            </Button>

            <Button
              variant="outline"
              className="w-full flex items-center justify-center gap-3 border-white/20 bg-white/5 hover:bg-white/10 text-white font-medium"
              onClick={() => handleOAuth("apple")}
            >
              <Apple className="h-5 w-5 text-gray-200" />
              Sign in with Apple
            </Button>
          </div>

          <motion.p className="text-center text-sm text-blue-200 mt-6">
            {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
            <button onClick={() => setIsSignUp(!isSignUp)} className="text-cyan-300 font-semibold hover:underline">
              {isSignUp ? "Sign In" : "Sign Up"}
            </button>
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}