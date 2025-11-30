"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  BarChart3,
  ShieldCheck,
  Building2,
  ArrowUp,
  ArrowDown,
  CheckCircle,
  XCircle,
  RotateCcw,
  LineChart,
  DollarSign,
  TrendingUp,
  FileText,
  Calculator,
  ShoppingCart,
  BookOpen,
} from "lucide-react"

export default function Lesson_StockMarketBasics() {
  const [price, setPrice] = useState(100)
  const [buys, setBuys] = useState(0)
  const [sells, setSells] = useState(0)
  const priceImpact = price + buys * 2 - sells * 2

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto space-y-10 text-blue-50"
    >
      {/* Header */}
      <header className="text-center space-y-3">
        <h1 className="text-3xl sm:text-4xl font-bold flex items-center justify-center gap-2 text-white">
          <BarChart3 className="h-8 w-8 text-cyan-400" /> 
          How the Stock Market Works
        </h1>
        <p className="text-lg text-blue-200">
          Where companies raise money ⚙️ and investors build wealth 📈 — a regulated marketplace.
        </p>
      </header>

      {/* Section 1: What is a Stock Market */}
      <LessonCard title="1️⃣ What is a Stock Market?" icon={<Building2 className="h-5 w-5 text-cyan-300" />}>
        <p>
          A stock market is a platform where people **buy & sell** ownership in companies
          through **shares**.
        </p>
        <p className="text-blue-300 text-sm mt-2">
          When you buy a share → you own a **small part** of that company.
        </p>
      </LessonCard>

      {/* Section 2: Indian Exchanges */}
      <LessonCard title="2️⃣ India's Main Stock Exchanges" icon={<BarChart3 className="h-5 w-5 text-blue-300" />}>
        <div className="grid sm:grid-cols-2 gap-4">
          <ExchangeBox
            name="NSE — National Stock Exchange"
            desc="Largest in India • NIFTY 50 index"
            color="from-blue-700/30 to-cyan-600/30"
          />
          <ExchangeBox
            name="BSE — Bombay Stock Exchange"
            desc="Oldest in Asia • SENSEX index"
            color="from-purple-700/30 to-pink-600/30"
          />
        </div>
        <p className="text-blue-200 text-xs mt-2">
          Prices on both remain almost identical due to market efficiency.
        </p>
      </LessonCard>

      {/* Section 3: SEBI Role */}
      <LessonCard title="3️⃣ Who Regulates the Market? (SEBI)" icon={<ShieldCheck className="h-5 w-5 text-green-300" />}>
        <div className="flex items-center gap-2 mb-2 text-blue-100">
          <ShieldCheck className="h-5 w-5 text-green-300" />
          Securities and Exchange Board of India
        </div>
        <ul className="list-disc list-inside text-sm space-y-2">
          <li>Protects investors</li>
          <li>Prevents scams & fraud</li>
          <li>Ensures fair price discovery (no manipulation)</li>
        </ul>
        <Disclaimer />
      </LessonCard>

      {/* Section 4: IPO to Listing */}
      <LessonCard title="4️⃣ How are Stocks Traded? (IPO → Listing → Market)" icon={<FileText className="h-5 w-5 text-purple-300" />}>
        <ol className="list-decimal list-inside text-blue-100 space-y-2 text-sm">
          <li>Company applies to SEBI for approval ✅</li>
          <li>Releases **IPO** → public can apply</li>
          <li>Share listed on NSE/BSE</li>
          <li>Now open trading → price goes up/down each second</li>
        </ol>
      </LessonCard>

      {/* Section 5: Price Movement */}
      <LessonCard title="5️⃣ Why Does Stock Price Change?" icon={<TrendingUp className="h-5 w-5 text-green-300" />}>
        <p>Price depends on **demand vs supply**:</p>
        <div className="flex items-center justify-center gap-5 my-4">
          <ArrowUp className="text-green-400" />
          <span className="text-white text-lg">More Buyers → Price Up</span>
          <ArrowDown className="text-red-400" /> 
          <span className="text-white text-lg">More Sellers → Price Down</span>
        </div>
      </LessonCard>

      {/* Section 6: Interactive Price Simulation */}
      <LessonCard title="6️⃣ Try It — Price Simulator" icon={<Calculator className="h-5 w-5 text-green-300" />}>
        <p className="text-sm text-blue-200 mb-3">Tap Buy/Sell to see impact 👇</p>

        <div className="rounded-xl p-6 bg-white/10 border border-white/10 text-center space-y-4">
          <div className="text-blue-200 text-xs">Market Price</div>
          <div className="text-3xl font-bold text-white">₹{priceImpact}</div>

          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => setBuys((b) => b + 1)}
              disabled={buys >= 10}
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-green-600 to-emerald-500 text-white"
            >
              BUY +
            </button>
            <button
              onClick={() => setSells((s) => s + 1)}
              disabled={sells >= 10}
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-red-600 to-pink-500 text-white"
            >
              SELL −
            </button>
          </div>
        </div>
      </LessonCard>

      {/* Section 7: Order Types */}
      <LessonCard title="7️⃣ Buy/Sell — Order Basics" icon={<ShoppingCart className="h-5 w-5 text-blue-300" />}>
        <ul className="list-disc list-inside text-sm text-blue-100 space-y-2">
          <li><strong>Market Order</strong> — Fast, at current price</li>
          <li><strong>Limit Order</strong> — You set the price</li>
        </ul>
        <p className="text-xs text-blue-400 mt-3">
          (No product suggestions — educational only ✅)
        </p>
      </LessonCard>

      {/* Takeaways */}
      <LessonCard title="📘 Key Takeaways" icon={<BookOpen className="h-5 w-5 text-yellow-300" />}>
        <ul className="list-disc list-inside text-sm text-blue-100 space-y-2">
          <li>Markets help companies raise capital & investors build wealth</li>
          <li>SEBI protects retail investors</li>
          <li>Price changes every moment due to demand-supply</li>
        </ul>
      </LessonCard>

      {/* Quiz */}
      <LessonCard title="💬 Quick Quiz">
        <QuizComponent />
      </LessonCard>
    </motion.section>
  )
}

/* ---------- UI Components ---------- */

function LessonCard({ title, children, icon }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="bg-white/10 p-6 rounded-2xl backdrop-blur-lg border border-white/10 shadow-lg space-y-3"
    >
      <h2 className="text-xl font-semibold text-white mb-1 flex items-center gap-2">
        {icon && icon}
        {title}
      </h2>
      <div className="text-blue-100 text-sm leading-relaxed">{children}</div>
    </motion.div>
  )
}

function ExchangeBox({ name, desc, color }: any) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className={`rounded-2xl p-5 bg-gradient-to-r ${color} border border-white/10`}
    >
      <div className="text-white font-semibold mb-1">{name}</div>
      <p className="text-xs text-blue-200">{desc}</p>
    </motion.div>
  )
}

function Disclaimer() {
  return (
    <p className="text-xs text-yellow-300 mt-2">
      ⚠️ Educational purpose only — Not investment advice.  
      NeoCred is not a SEBI registered advisor (yet).
    </p>
  )
}

/* ---------- Quiz ---------- */

function QuizComponent() {
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [score, setScore] = useState(0)

  const quiz = [
    {
      question: "Who regulates Indian stock markets?",
      options: ["SEBI", "NIFTY", "BSE", "NASSCOM"],
      correct: "SEBI",
    },
    {
      question: "What causes price to rise?",
      options: ["More selling", "More buying", "Same buyers & sellers", "RBI announcement only"],
      correct: "More buying",
    },
    {
      question: "IPO stands for?",
      options: ["Initial Price Offer", "Internal Public Order", "Initial Public Offering", "Investment Portfolio Option"],
      correct: "Initial Public Offering",
    },
  ]

  const handleSelect = (i: number, opt: string) => {
    if (!submitted) setAnswers((prev) => ({ ...prev, [i]: opt }))
  }

  const handleSubmit = () => {
    setScore(quiz.filter((q, i) => answers[i] === q.correct).length)
    setSubmitted(true)
  }

  const reset = () => {
    setSubmitted(false)
    setScore(0)
    setAnswers({})
  }

  return (
    <div className="space-y-6">
      {quiz.map((q, qi) => (
        <motion.div
          key={qi}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: qi * 0.08 }}
          className="bg-white/5 p-4 rounded-xl border border-white/10"
        >
          <p className="font-medium text-blue-100 mb-3">
            Q{qi + 1}: {q.question}
          </p>
          <div className="space-y-2">
            {q.options.map((opt, oi) => {
              const isCorrect = opt === q.correct
              const isSelected = answers[qi] === opt
              return (
                <motion.button
                  key={oi}
                  onClick={() => handleSelect(qi, opt)}
                  disabled={submitted}
                  whileHover={!submitted ? { scale: 1.02 } : {}}
                  className={`w-full text-left px-4 py-2 rounded-lg border transition-all ${
                    isSelected
                      ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white border-transparent"
                      : "bg-white/10 hover:bg-white/20 border-white/10"
                  } ${
                    submitted && isCorrect
                      ? "border-green-400 bg-green-500/10"
                      : submitted && isSelected && !isCorrect
                      ? "border-red-400 bg-red-500/10"
                      : ""
                  }`}
                >
                  {opt}
                </motion.button>
              )
            })}
          </div>
        </motion.div>
      ))}

      {!submitted ? (
        <motion.button
          onClick={handleSubmit}
          whileHover={{ scale: 1.05 }}
          className="px-6 py-2 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white disabled:opacity-50"
          disabled={Object.keys(answers).length < quiz.length}
        >
          Submit
        </motion.button>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center text-white space-y-3"
        >
          <div className="text-lg font-semibold flex justify-center gap-2">
            {score === quiz.length ? (
              <>
                <CheckCircle className="text-green-400 h-6 w-6" /> Fantastic! 🎯
              </>
            ) : (
              <>
                <XCircle className="text-yellow-400 h-6 w-6" /> {score}/{quiz.length} correct
              </>
            )}
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={reset}
            className="px-4 py-2 bg-white/10 hover:bg-white/20 text-sm rounded-lg"
          >
            <RotateCcw className="inline-block h-4 w-4 mr-1" /> Try Again
          </motion.button>
        </motion.div>
      )}
    </div>
  )
}
