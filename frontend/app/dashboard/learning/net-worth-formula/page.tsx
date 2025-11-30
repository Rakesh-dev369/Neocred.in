"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Wallet,
  CheckCircle,
  XCircle,
  RotateCcw,
  TrendingUp,
  AlertTriangle,
  PlusCircle,
  MinusCircle,
  Calculator,
  Info,
  Users,
  Sparkles,
} from "lucide-react"

/**
 * Lesson: Understanding Net Worth — Assets − Liabilities = Net Worth
 */

export default function Lesson_NetWorthFormula() {
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
          <Wallet className="h-8 w-8 text-cyan-400" /> Net Worth = Assets − Liabilities
        </h1>
        <p className="text-blue-200 text-lg max-w-2xl mx-auto">
          Net worth tells your **true financial strength**.  
          The goal: grow assets 📈 and reduce liabilities 📉 over time.
        </p>
      </div>

      {/* 1️⃣ What is Net Worth? */}
      <LessonCard title={<><Calculator className="h-6 w-6 text-blue-400 inline mr-2" />1️⃣ What is Net Worth?</>}>
        <p>
          Net worth is the value of what you **own** (assets) minus what you **owe** (liabilities).
        </p>
        <div className="text-center bg-white/10 p-4 rounded-xl border border-white/10 mt-4">
          <span className="text-lg font-semibold text-white">
            ✅ Net Worth = Assets − Liabilities
          </span>
        </div>
        <p className="text-blue-200 text-sm mt-3">
          Positive Net Worth → You own more than you owe ✅  
          Negative Net Worth → You owe more than you own ❌
        </p>
      </LessonCard>

      {/* 2️⃣ Why Net Worth Matters */}
      <LessonCard title={<><Info className="h-6 w-6 text-green-400 inline mr-2" />2️⃣ Why Net Worth Matters</>}>
        <ul className="list-disc list-inside space-y-2">
          <li>Shows **true financial health** not visible from income alone.</li>
          <li>Helps plan savings, investments, loans, and milestones.</li>
          <li>Lets you track yearly progress → wealth building.</li>
        </ul>
      </LessonCard>

      {/* 3️⃣ Example of a Young Indian */}
      <LessonCard title={<><Users className="h-6 w-6 text-purple-400 inline mr-2" />3️⃣ Example — Indian Working Professional</>}>
        <table className="w-full text-sm border-collapse text-blue-100">
          <thead>
            <tr className="border-b border-white/10 text-blue-200">
              <th className="p-2 text-left">Category</th>
              <th className="p-2 text-left">Amount (₹)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="p-2">Bank Savings</td><td className="p-2">₹1,00,000</td></tr>
            <tr><td className="p-2">Mutual Funds</td><td className="p-2">₹50,000</td></tr>
            <tr><td className="p-2 text-blue-300">Total Assets</td><td className="p-2 text-blue-300 font-semibold">₹1,50,000</td></tr>
            <tr><td className="p-2">Credit Card Bill</td><td className="p-2">₹30,000</td></tr>
            <tr><td className="p-2">Education Loan Balance</td><td className="p-2">₹60,000</td></tr>
            <tr><td className="p-2 text-red-300">Total Liabilities</td><td className="p-2 text-red-300 font-semibold">₹90,000</td></tr>
          </tbody>
        </table>
        <div className="mt-3 font-semibold text-white">
          ✅ Net Worth = ₹1,50,000 − ₹90,000 ={" "}
          <span className="text-cyan-300">₹60,000</span> ✅
        </div>
      </LessonCard>

      {/* 4️⃣ Calculator */}
      <NetWorthCalculator />

      {/* 5️⃣ Key Takeaways */}
      <LessonCard title={<><Sparkles className="h-6 w-6 text-yellow-400 inline mr-2" />📘 Key Takeaways</>}>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>Increase **assets** (investments, savings, business income).</li>
          <li>Reduce **liabilities** (loans, credit card dues).</li>
          <li>Track net worth every year → Wealth Score 🚀</li>
        </ul>
      </LessonCard>

      {/* Quiz */}
      <LessonCard title="💬 Quick Quiz">
        <QuizComponent />
      </LessonCard>
    </motion.section>
  )
}

/* ====================
   Net Worth Calculator
==================== */
function NetWorthCalculator() {
  const [assets, setAssets] = useState<number>(0)
  const [liabilities, setLiabilities] = useState<number>(0)

  const netWorth = assets - liabilities
  const positive = netWorth >= 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-blue-900/20 to-cyan-800/20 rounded-2xl p-6 border border-white/10 space-y-4 shadow-lg"
    >
      <h2 className="text-xl font-semibold text-white mb-2 flex items-center gap-2">
        <TrendingUp className="h-5 w-5 text-cyan-300" /> Your Net Worth Calculator
      </h2>

      <div className="grid md:grid-cols-2 gap-4">
        <InputField
          label="Total Assets (₹)"
          value={assets}
          icon={PlusCircle}
          onChange={(e: any) => setAssets(Number(e.target.value))}
        />
        <InputField
          label="Total Liabilities (₹)"
          value={liabilities}
          icon={MinusCircle}
          onChange={(e: any) => setLiabilities(Number(e.target.value))}
        />
      </div>

      <div className="text-center mt-4">
        <div className="text-lg text-blue-100">Your Net Worth:</div>
        <div
          className={`text-3xl font-bold mt-1 ${
            positive ? "text-green-400" : "text-red-400"
          }`}
        >
          ₹{netWorth.toLocaleString("en-IN")}
        </div>
        <div className="text-sm mt-1 text-blue-200">
          {positive
            ? "✅ You're building wealth—great job!"
            : "⚠️ You owe more than you own—time to reduce debt!"}
        </div>
      </div>
    </motion.div>
  )
}

/* Reusable Lesson Card */
function LessonCard({ title, children }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="bg-white/10 p-6 rounded-2xl backdrop-blur-lg border border-white/10 shadow-lg space-y-3"
    >
      <h2 className="text-xl font-semibold text-white mb-1">{title}</h2>
      <div className="text-blue-100 text-sm leading-relaxed">{children}</div>
    </motion.div>
  )
}

/* Input Component */
function InputField({ label, value, onChange, icon: Icon }: any) {
  return (
    <div className="bg-white/10 p-4 rounded-xl border border-white/10">
      <label className="text-sm text-blue-200 flex items-center gap-2 mb-2">
        <Icon className="h-4 w-4 text-cyan-300" />
        {label}
      </label>
      <input
        type="number"
        placeholder="Enter amount"
        value={value}
        onChange={onChange}
        className="w-full p-2 rounded-lg bg-white/20 border border-white/10 text-white outline-none"
      />
    </div>
  )
}

/* =====================
    Quiz Component
===================== */
function QuizComponent() {
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [score, setScore] = useState(0)

  const quiz = [
    {
      question: "Net worth formula is:",
      options: [
        "Assets + Liabilities",
        "Assets − Liabilities",
        "Liabilities − Assets",
        "Income − Expenses",
      ],
      correct: "Assets − Liabilities",
    },
    {
      question: "If you owe more than you own, net worth becomes:",
      options: ["Positive", "Zero", "Negative", "Same always"],
      correct: "Negative",
    },
    {
      question: "Best way to increase net worth:",
      options: [
        "Buy more liabilities",
        "Increase assets & reduce debt",
        "Take more loans",
        "Spend everything you earn",
      ],
      correct: "Increase assets & reduce debt",
    },
  ]

  const handleSelect = (i: number, option: string) => {
    if (!submitted) setAnswers((prev) => ({ ...prev, [i]: option }))
  }

  const handleSubmit = () => {
    let correctCount = quiz.filter((q, i) => answers[i] === q.correct).length
    setScore(correctCount)
    setSubmitted(true)
  }

  const handleReset = () => {
    setAnswers({})
    setSubmitted(false)
    setScore(0)
  }

  return (
    <div className="space-y-6">
      {quiz.map((q, i) => {
        const selected = answers[i]
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white/5 p-4 rounded-xl border border-white/10"
          >
            <p className="font-medium mb-3 text-blue-100">
              Q{i + 1}: {q.question}
            </p>
            <div className="space-y-2">
              {q.options.map((option, j) => {
                const isCorrect = option === q.correct
                return (
                  <motion.button
                    key={j}
                    onClick={() => handleSelect(i, option)}
                    disabled={submitted}
                    whileHover={!submitted ? { scale: 1.03 } : {}}
                    className={`w-full text-left px-4 py-2 rounded-lg border transition-all ${
                      selected === option
                        ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white border-transparent"
                        : "bg-white/10 hover:bg-white/20 border-white/10"
                    } ${
                      submitted && isCorrect
                        ? "border-green-400 bg-green-500/10"
                        : submitted && selected === option && !isCorrect
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
        )
      })}

      {!submitted ? (
        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={handleSubmit}
          disabled={Object.keys(answers).length < quiz.length}
          className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-2 rounded-xl font-medium disabled:opacity-50"
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
                <CheckCircle className="text-green-400 h-6 w-6" /> Excellent! You understand Net Worth 🎉
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
