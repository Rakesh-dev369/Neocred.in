"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  LineChart,
  Calculator,
  TrendingUp,
  Sparkles,
  CheckCircle,
  XCircle,
  RotateCcw,
  DollarSign,
  BarChart3,
  Building2,
  Clock,

} from "lucide-react"

/**
 * Lesson: Interest Explained — Simple vs Compound
 */

export default function Lesson_InterestExplained() {
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
          <LineChart className="h-8 w-8 text-cyan-400" /> Interest Explained — Simple vs Compound
        </h1>
        <p className="text-blue-200 text-lg max-w-2xl mx-auto">
          Interest is how your money grows (or what you pay on loans).  
          Let’s understand how <strong>Simple Interest (SI)</strong> and <strong>Compound Interest (CI)</strong> work — and why compounding is called the "8th Wonder of the World".
        </p>
      </div>

      {/* 1️⃣ What is Interest? */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white/10 p-6 rounded-2xl backdrop-blur-lg border border-white/10 shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-white mb-3 flex items-center gap-2"><DollarSign className="h-6 w-6 text-green-400" /> 1️⃣ What is Interest?</h2>
        <p className="text-blue-100 leading-relaxed">
          <strong>Interest</strong> is the cost of borrowing money or the reward for saving/investing money.  
          It’s usually expressed as a percentage of the principal amount (your base money).
        </p>
        <div className="bg-white/5 p-4 rounded-xl mt-4 border border-white/10 text-sm text-blue-100">
          Example: If you invest ₹10,000 at 10% annual interest —  
          <strong>Interest = ₹1,000/year</strong> (Simple Interest).
        </div>
      </motion.div>

      {/* 2️⃣ Simple Interest Formula */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-blue-700/20 to-cyan-700/20 p-6 rounded-2xl border border-white/10 shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-white mb-3 flex items-center gap-2"><Calculator className="h-6 w-6 text-blue-400" /> 2️⃣ Simple Interest (SI)</h2>
        <p className="text-blue-100 leading-relaxed">
          In <strong>Simple Interest</strong>, you earn or pay interest only on the <strong>original amount</strong> (principal).  
          The interest does not grow — it stays fixed.
        </p>
        <div className="bg-white/5 p-4 rounded-xl mt-4 border border-white/10 text-center text-blue-100">
          <strong>Formula:</strong> SI = (P × R × T) / 100  
          <br />
          <small>Where P = Principal, R = Rate, T = Time</small>
        </div>
        <p className="mt-4 text-sm text-blue-100">
          Example: ₹10,000 at 10% for 3 years → SI = (10,000 × 10 × 3) / 100 = ₹3,000  
          Total Amount = ₹13,000
        </p>
      </motion.div>

      {/* 3️⃣ Compound Interest Formula */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white/10 p-6 rounded-2xl backdrop-blur-lg border border-white/10 shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-white mb-3 flex items-center gap-2"><TrendingUp className="h-6 w-6 text-purple-400" /> 3️⃣ Compound Interest (CI)</h2>
        <p className="text-blue-100 leading-relaxed">
          In <strong>Compound Interest</strong>, you earn interest on both your <strong>principal and previous interest</strong>.  
          This creates a “snowball effect” — your money grows faster with time.
        </p>
        <div className="bg-white/5 p-4 rounded-xl mt-4 border border-white/10 text-center text-blue-100">
          <strong>Formula:</strong> A = P(1 + R/100)<sup>T</sup>  
          <br />
          <small>Compound Interest = A - P</small>
        </div>
        <p className="mt-4 text-sm text-blue-100">
          Example: ₹10,000 at 10% for 3 years → A = 10,000(1 + 10/100)³ = ₹13,310  
          <br />Interest earned = ₹3,310 (vs ₹3,000 in SI)
        </p>
      </motion.div>

      {/* 4️⃣ Visual Comparison */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-blue-900/30 to-cyan-700/20 p-6 rounded-2xl border border-white/10 shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-white mb-3 flex items-center gap-2"><BarChart3 className="h-6 w-6 text-cyan-400" /> 4️⃣ Simple vs Compound Interest — Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-blue-100 border-collapse">
            <thead>
              <tr className="border-b border-white/10 text-blue-200">
                <th className="p-2 text-left">Year</th>
                <th className="p-2 text-left">Simple Interest (₹)</th>
                <th className="p-2 text-left">Compound Interest (₹)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="p-2">1</td><td className="p-2">1,000</td><td className="p-2">1,000</td></tr>
              <tr><td className="p-2">2</td><td className="p-2">2,000</td><td className="p-2">2,100</td></tr>
              <tr><td className="p-2">3</td><td className="p-2">3,000</td><td className="p-2">3,310</td></tr>
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-blue-100">
          The longer the period, the larger the gap — that’s the **power of compounding**!
        </p>
      </motion.div>

      {/* 5️⃣ Real-Life Applications */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white/10 p-6 rounded-2xl backdrop-blur-lg border border-white/10 shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-white mb-3 flex items-center gap-2"><Building2 className="h-6 w-6 text-orange-400" /> 5️⃣ Real-Life Applications</h2>
        <ul className="list-disc list-inside text-blue-100 space-y-2">
          <li>Simple Interest → used in <strong>personal loans</strong> and <strong>short-term borrowings</strong>.</li>
          <li>Compound Interest → used in <strong>FDs, RDs, Mutual Funds, PPF</strong>.</li>
          <li>Always prefer CI-based growth for long-term investments.</li>
        </ul>
      </motion.div>

      {/* 6️⃣ The Compounding Effect */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-cyan-600/20 to-blue-700/20 p-6 rounded-2xl border border-white/10 shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-white mb-3 flex items-center gap-2"><Clock className="h-6 w-6 text-yellow-400" /> 6️⃣ The Compounding Effect — Time is Power!</h2>
        <p className="text-blue-100 leading-relaxed">
          Compounding rewards <strong>time and consistency</strong>.  
          Even small amounts can grow massively if invested early.
        </p>
        <div className="bg-white/5 p-4 rounded-xl mt-4 border border-white/10 text-sm text-blue-100">
          Example: ₹5,000/month for 20 years @10% → grows to ₹38.3 Lakhs  
          But for 10 years only → ₹10.3 Lakhs  
          ⏳ <strong>Starting early = 4x more wealth!</strong>
        </div>
      </motion.div>

      {/* 7️⃣ Key Takeaways */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white/10 p-6 rounded-2xl backdrop-blur-lg border border-white/10 shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-white mb-3 flex items-center gap-2"><Sparkles className="h-6 w-6 text-pink-400" /> 📘 Key Takeaways</h2>
        <ul className="list-disc list-inside text-blue-100 space-y-2">
          <li>Simple Interest = steady, predictable returns.</li>
          <li>Compound Interest = exponential growth over time.</li>
          <li>Start early — time is the biggest multiplier.</li>
          <li>Use compounding for wealth creation, not debt!</li>
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
      question: "Which interest gives 'interest on interest'?",
      options: ["Simple Interest", "Compound Interest", "Flat Rate", "None"],
      correct: "Compound Interest",
    },
    {
      question: "What is the formula for Simple Interest?",
      options: [
        "P × R × T / 100",
        "P(1 + R/100)^T",
        "R × T / P",
        "P × T / R",
      ],
      correct: "P × R × T / 100",
    },
    {
      question: "If ₹10,000 grows to ₹13,310 in 3 years, what type of interest is applied?",
      options: ["Simple", "Compound", "Flat", "Mixed"],
      correct: "Compound",
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
                <CheckCircle className="text-green-400 h-6 w-6" /> Outstanding! You mastered interest 🎉
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
