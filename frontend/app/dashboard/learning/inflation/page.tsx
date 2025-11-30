"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  TrendingUp,
  Wallet,
  BarChart3,
  Sparkles,
  Banknote,
  CheckCircle,
  XCircle,
  RotateCcw,
} from "lucide-react"

/**
 * Lesson: Inflation Explained with Real-Life Examples
 */

export default function Lesson_InflationExplained() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto space-y-10 text-blue-50"
    >
      {/* Header */}
      <div className="text-center space-y-3">
        <h1 className="text-3xl sm:text-4xl font-bold text-white flex items-center justify-center gap-2">
          <TrendingUp className="h-8 w-8 text-cyan-400" /> Inflation Explained with Real-Life Examples
        </h1>
        <p className="text-blue-200 text-lg max-w-2xl mx-auto">
          Inflation silently eats away your purchasing power every year.  
          Let’s understand what it is, how it affects your money, and how to beat it through smart investing.
        </p>
      </div>

      {/* 1️⃣ What is Inflation */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white/10 p-6 rounded-2xl backdrop-blur-lg border border-white/10 shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-white mb-3 flex items-center gap-2"><TrendingUp className="h-6 w-6 text-red-400" /> 1️⃣ What is Inflation?</h2>
        <p className="text-blue-100 leading-relaxed">
          <strong>Inflation</strong> means a general increase in the prices of goods and services over time.  
          When prices rise, the same ₹100 buys fewer goods — your <strong>money loses value</strong>.
        </p>
        <div className="bg-white/5 p-4 rounded-xl mt-4 border border-white/10 text-sm text-blue-100">
          Example: In 2010, 1 litre of petrol cost ₹50.  
          In 2025, it costs ₹105. That’s over **100% increase in price** — your purchasing power halved.
        </div>
      </motion.div>

      {/* 2️⃣ Types of Inflation */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-blue-700/20 to-cyan-600/20 p-6 rounded-2xl border border-white/10 shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-white mb-3 flex items-center gap-2"><BarChart3 className="h-6 w-6 text-blue-400" /> 2️⃣ Types of Inflation</h2>
        <ul className="list-disc list-inside text-blue-100 space-y-2">
          <li><strong>Demand-Pull Inflation:</strong> Too much demand, not enough supply (e.g., housing boom).</li>
          <li><strong>Cost-Push Inflation:</strong> When raw materials or fuel costs increase.</li>
          <li><strong>Imported Inflation:</strong> When global price hikes (like crude oil) affect India.</li>
        </ul>
      </motion.div>

      {/* 3️⃣ How Inflation Affects You */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white/10 p-6 rounded-2xl backdrop-blur-lg border border-white/10 shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-white mb-3 flex items-center gap-2"><Wallet className="h-6 w-6 text-orange-400" /> 3️⃣ How Inflation Affects You</h2>
        <p className="text-blue-100 leading-relaxed">
          Inflation reduces your **purchasing power** — meaning your savings can buy less each year.  
          This is why simply keeping money in a savings account isn’t enough.
        </p>
        <div className="bg-white/5 p-4 rounded-xl mt-4 border border-white/10 text-sm text-blue-100">
          Example: ₹1,00,000 kept in a bank at 3% interest while inflation is 6% →  
          Real return = 3% - 6% = <strong>–3%</strong> (you’re actually losing value).
        </div>
      </motion.div>

      {/* 4️⃣ Real-Life Example — Grocery Basket */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-blue-800/20 to-cyan-700/20 p-6 rounded-2xl border border-white/10 shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-white mb-3 flex items-center gap-2"><Banknote className="h-6 w-6 text-green-400" /> 4️⃣ Real-Life Example — The Grocery Basket</h2>
        <table className="w-full text-sm text-blue-100 border-collapse">
          <thead>
            <tr className="border-b border-white/10 text-blue-200">
              <th className="p-2 text-left">Item</th>
              <th className="p-2 text-left">Price in 2010 (₹)</th>
              <th className="p-2 text-left">Price in 2025 (₹)</th>
              <th className="p-2 text-left">Increase</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="p-2">1 Litre Milk</td><td className="p-2">25</td><td className="p-2">65</td><td className="p-2">+160%</td></tr>
            <tr><td className="p-2">1 Kg Rice</td><td className="p-2">35</td><td className="p-2">70</td><td className="p-2">+100%</td></tr>
            <tr><td className="p-2">Cooking Oil (1L)</td><td className="p-2">60</td><td className="p-2">150</td><td className="p-2">+150%</td></tr>
          </tbody>
        </table>
        <p className="mt-3 text-blue-100">
          This means ₹100 in 2010 is worth only ₹40–₹50 today — that’s inflation in real life.
        </p>
      </motion.div>

      {/* 5️⃣ Inflation Rate in India (Historical View) */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white/10 p-6 rounded-2xl backdrop-blur-lg border border-white/10 shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-white mb-3 flex items-center gap-2"><BarChart3 className="h-6 w-6 text-purple-400" /> 5️⃣ Inflation in India — Historical Average</h2>
        <ul className="list-disc list-inside text-blue-100 space-y-2">
          <li>Average Inflation (2000–2025): <strong>~6%</strong></li>
          <li>Lowest: ~2.5% (2017) | Highest: ~11% (2012)</li>
          <li>Target by RBI (Monetary Policy): <strong>2–6%</strong></li>
        </ul>
        <p className="mt-3 text-blue-100">
          RBI controls inflation through repo rate changes — higher interest → less borrowing → slower inflation.
        </p>
      </motion.div>

      {/* 6️⃣ Beating Inflation — Investment Strategy */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-blue-900/20 to-cyan-800/20 p-6 rounded-2xl border border-white/10 shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-white mb-3 flex items-center gap-2"><TrendingUp className="h-6 w-6 text-cyan-400" /> 6️⃣ Beating Inflation — Smart Investing</h2>
        <p className="text-blue-100 leading-relaxed">
          To grow your wealth faster than inflation, you must earn **real returns** — higher than inflation rate.  
          Here’s how:
        </p>
        <ul className="list-disc list-inside text-blue-100 mt-3 space-y-2">
          <li><strong>FD (6%)</strong> — barely beats inflation.</li>
          <li><strong>Equity Mutual Funds (10–12%)</strong> — long-term inflation-beating returns.</li>
          <li><strong>Gold (7–8%)</strong> — good during inflationary periods.</li>
          <li><strong>Real Estate (8–10%)</strong> — long-term inflation hedge.</li>
        </ul>
      </motion.div>

      {/* 7️⃣ Key Takeaways */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white/10 p-6 rounded-2xl backdrop-blur-lg border border-white/10 shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-white mb-3 flex items-center gap-2"><Sparkles className="h-6 w-6 text-yellow-400" /> 📘 Key Takeaways</h2>
        <ul className="list-disc list-inside text-blue-100 space-y-2">
          <li>Inflation reduces money’s value over time.</li>
          <li>Even low inflation (5%) halves value in ~14 years.</li>
          <li>Invest in inflation-beating assets like equity and gold.</li>
          <li>Track India’s CPI & RBI rate announcements for awareness.</li>
        </ul>
      </motion.div>

      {/* 8️⃣ Quiz Section */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white/10 p-6 rounded-2xl backdrop-blur-lg border border-white/10 shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-white mb-3">💬 Quick Quiz & Challenge</h2>
        <QuizComponent />
      </motion.div>
    </motion.section>
  )
}

/* ---------------------------
   Quiz Component
---------------------------- */
function QuizComponent() {
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [score, setScore] = useState(0)

  const quiz = [
    {
      question: "What does inflation mean?",
      options: [
        "Increase in money’s value",
        "Increase in prices and fall in money’s purchasing power",
        "Increase in savings",
        "Decrease in production",
      ],
      correct: "Increase in prices and fall in money’s purchasing power",
    },
    {
      question: "If inflation is 6% and your savings account gives 3%, your real return is:",
      options: ["3%", "9%", "–3%", "6%"],
      correct: "–3%",
    },
    {
      question: "Which asset class usually beats inflation in long term?",
      options: ["Savings Account", "Equity Mutual Funds", "Fixed Deposit", "Cash"],
      correct: "Equity Mutual Funds",
    },
  ]

  const handleSelect = (qIndex: number, option: string) => {
    if (!submitted) setAnswers((prev) => ({ ...prev, [qIndex]: option }))
  }

  const handleSubmit = () => {
    let correctCount = 0
    quiz.forEach((q, i) => {
      if (answers[i] === q.correct) correctCount++
    })
    setScore(correctCount)
    setSubmitted(true)
  }

  const handleReset = () => {
    setAnswers({})
    setSubmitted(false)
    setScore(0)
  }

  return (
    <div className="space-y-6 text-blue-100">
      {quiz.map((q, qIndex) => (
        <motion.div
          key={qIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: qIndex * 0.08 }}
          className="bg-white/5 p-4 rounded-xl border border-white/10"
        >
          <p className="font-medium mb-3">Q{qIndex + 1}: {q.question}</p>
          <div className="space-y-2">
            {q.options.map((option, i) => {
              const isSelected = answers[qIndex] === option
              const isCorrect = option === q.correct

              return (
                <motion.button
                  key={i}
                  onClick={() => handleSelect(qIndex, option)}
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
                  {option}
                </motion.button>
              )
            })}
          </div>
        </motion.div>
      ))}

      {!submitted ? (
        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={handleSubmit}
          disabled={Object.keys(answers).length < quiz.length}
          className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-2 rounded-xl text-sm font-medium disabled:opacity-50"
        >
          Submit Answers
        </motion.button>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4"
        >
          <div className="flex justify-center items-center gap-2 text-lg font-semibold">
            {score === quiz.length ? (
              <>
                <CheckCircle className="text-green-400 h-6 w-6" /> Excellent! You understood inflation 🎉
              </>
            ) : (
              <>
                <XCircle className="text-yellow-400 h-6 w-6" /> You got {score}/{quiz.length} correct.
              </>
            )}
          </div>
          <button
            onClick={handleReset}
            className="flex items-center justify-center mx-auto text-sm bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg"
          >
            <RotateCcw className="h-4 w-4 mr-2" /> Try Again
          </button>
        </motion.div>
      )}
    </div>
  )
}
