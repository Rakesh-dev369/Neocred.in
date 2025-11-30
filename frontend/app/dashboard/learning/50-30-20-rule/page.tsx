"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Wallet,
  Coins,
  HandHeart,
  TrendingUp,
  CheckCircle,
  XCircle,
  RotateCcw,
  Calculator,
  AlertTriangle,
  Lightbulb,
  MessageCircle,
  BarChart3,
} from "lucide-react"

export default function Lesson_503020Rule() {
  const [income, setIncome] = useState(50000)

  const needs = income * 0.5
  const wants = income * 0.3
  const savings = income * 0.2

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
          <Wallet className="h-8 w-8 text-cyan-400" />
          50 • 30 • 20 — Smart Budgeting
        </h1>
        <p className="text-lg text-blue-200">
          A powerful formula to **manage expenses + build savings consistently**
        </p>
      </div>

      {/* Sections */}
      <LessonCard title="1️⃣ What is the 50/30/20 Rule?" icon={<BarChart3 className="h-5 w-5 text-cyan-300" />}>
        <p className="mb-3">
          Divide your monthly income into 3 buckets:
        </p>
        <ul className="space-y-2 text-sm text-blue-100">
          <li>✅ 50% — Essentials (needs you cannot avoid)</li>
          <li>✅ 30% — Lifestyle & comfort (wants)</li>
          <li>✅ 20% — Savings + Investments (future wealth)</li>
        </ul>
      </LessonCard>

      <LessonCard title="2️⃣ Expense Categories – India Examples" icon={<Coins className="h-5 w-5 text-blue-300" />}>
        <div className="grid sm:grid-cols-3 gap-4">
          <CategoryBox
            percent="50%"
            title="Needs"
            items={["Rent", "Groceries", "Transport", "EMIs", "Bills"]}
            icon={<Wallet className="text-blue-300" />}
          />
          <CategoryBox
            percent="30%"
            title="Wants"
            items={["Dining out", "Netflix/Swiggy", "Shopping", "Trips"]}
            icon={<HandHeart className="text-purple-300" />}
          />
          <CategoryBox
            percent="20%"
            title="Savings"
            items={["SIP", "FD/RD", "Insurance", "Emergency fund"]}
            icon={<TrendingUp className="text-green-300" />}
          />
        </div>
      </LessonCard>

      {/* Calculator */}
      <LessonCard title="3️⃣ Calculate Your Own 50/30/20 Budget" icon={<Calculator className="h-5 w-5 text-green-300" />}>
        <p className="text-sm text-blue-200 mb-3">
          Enter your monthly income
        </p>
        <input
          type="number"
          value={income}
          onChange={(e) => setIncome(Number(e.target.value))}
          className="w-full p-3 rounded-lg bg-white/20 border border-white/10 text-white"
        />

        <div className="grid sm:grid-cols-3 gap-4 mt-5">
          <BreakdownBox label="Needs (50%)" value={needs} />
          <BreakdownBox label="Wants (30%)" value={wants} />
          <BreakdownBox label="Savings (20%)" value={savings} highlight />
        </div>
      </LessonCard>

      {/* Key Mistakes */}
      <LessonCard title="4️⃣ Common Mistakes to Avoid" icon={<AlertTriangle className="h-5 w-5 text-red-300" />}>
        <ul className="list-disc list-inside text-blue-100 text-sm space-y-2">
          <li>Overspending on lifestyle & EMIs 😬</li>
          <li>Zero emergency fund — risky during job loss ⚠️</li>
          <li>No track of monthly spending — leaks everywhere 🕳️</li>
        </ul>
      </LessonCard>

      {/* Tips */}
      <LessonCard title="5️⃣ Pro Tips for Success" icon={<Lightbulb className="h-5 w-5 text-yellow-300" />}>
        <ul className="list-disc list-inside space-y-2 text-sm text-blue-100">
          <li>Automate monthly SIP ✅</li>
          <li>Track spending using apps ✅</li>
          <li>Review % whenever income changes ✅</li>
          <li>If 50% needs too high → Cut EMIs, move to cheaper rent ✅</li>
        </ul>
      </LessonCard>

      {/* Quiz */}
      <LessonCard title="💬 Quick Quiz">
        <QuizComponent />
      </LessonCard>
    </motion.section>
  )
}

/* UI Components */
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

function CategoryBox({ percent, title, items, icon }: any) {
  return (
    <div className="rounded-xl p-5 bg-white/10 border border-white/10 text-center space-y-2">
      <div className="text-2xl font-bold text-white">{percent}</div>
      <div className="text-white font-semibold text-lg flex gap-1 justify-center items-center">
        {icon} {title}
      </div>
      <ul className="text-xs text-blue-200 space-y-1 mt-2">
        {items.map((x: string, i: number) => <li key={i}>• {x}</li>)}
      </ul>
    </div>
  )
}

function BreakdownBox({ label, value, highlight = false }: any) {
  return (
    <div className={`rounded-xl p-4 border border-white/10 ${highlight ? "bg-gradient-to-r from-blue-600/20 to-cyan-500/20" : "bg-white/10"}`}>
      <div className="text-blue-200 text-xs">{label}</div>
      <div className="text-white font-semibold text-lg mt-1">
        ₹{value.toLocaleString("en-IN")}
      </div>
    </div>
  )
}

/* Quiz Section */
function QuizComponent() {
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [score, setScore] = useState(0)

  const quiz = [
    {
      question: "How much should go to savings?",
      options: ["10%", "20%", "30%", "40%"],
      correct: "20%",
    },
    {
      question: "Which belongs to ‘Wants’ category?",
      options: ["Rent", "Groceries", "Spotify Subscription", "Insurance"],
      correct: "Spotify Subscription",
    },
    {
      question: "50% category is mainly for:",
      options: ["Luxury", "Unplanned spends", "Essentials", "Shopping"],
      correct: "Essentials",
    },
  ]

  const handleSelect = (q: number, opt: string) => {
    if (!submitted) setAnswers((prev) => ({ ...prev, [q]: opt }))
  }

  const handleSubmit = () => {
    const correct = quiz.filter((q, i) => answers[i] === q.correct).length
    setScore(correct)
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
          <p className="font-medium text-blue-100 mb-3">Q{qi + 1}: {q.question}</p>
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
          className="px-6 py-2 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white disabled:opacity-40"
          disabled={Object.keys(answers).length < quiz.length}
        >
          Submit
        </motion.button>
      ) : (
        <div className="text-center space-y-3">
          <div className="text-lg font-semibold flex justify-center gap-2 text-white">
            {score === quiz.length ? (
              <>
                <CheckCircle className="text-green-400 h-6 w-6" /> Excellent! 🎉
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
            className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm"
          >
            <RotateCcw className="inline-block h-4 w-4 mr-1" /> Try Again
          </motion.button>
        </div>
      )}
    </div>
  )
}
