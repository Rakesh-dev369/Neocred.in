"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  PieChart,
  TrendingUp,
  Wallet,
  Coins,
  CheckCircle,
  XCircle,
  RotateCcw,
  LineChart,
  Calculator,
  AlertTriangle,
  CheckSquare,
  Lightbulb,
  Building2,
} from "lucide-react"

export default function Lesson_MutualFundsSIP() {
  const [monthly, setMonthly] = useState(2000)
  const [years, setYears] = useState(10)
  const annualRate = 0.12 // Expected equity MF long-term returns
  const months = years * 12
  const r = annualRate / 12

  // SIP Future Value formula
  const factor = (Math.pow(1 + r, months) - 1) / r
  const futureValue = monthly * factor * (1 + r)

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
          <PieChart className="h-8 w-8 text-cyan-400" /> Mutual Funds & SIP Guide
        </h1>
        <p className="text-blue-200 text-lg">
          Let experts grow your money 📈 — small monthly investments, big future results
        </p>
      </div>

      {/* 1️⃣ What are Mutual Funds */}
      <LessonCard title="1️⃣ What is a Mutual Fund?" icon={<Building2 className="h-5 w-5 text-cyan-300" />}>
        <p>
          A Mutual Fund pools money from many investors and a professional fund manager
          invests it in:
        </p>
        <ul className="list-disc list-inside text-sm text-blue-100 mt-2 space-y-1">
          <li>📈 Stocks (Equity funds)</li>
          <li>📊 Bonds (Debt funds)</li>
          <li>🏦 Mix of both (Hybrid funds)</li>
        </ul>
        <p className="text-blue-200 text-sm mt-2">
          You get **units** proportionate to your investment → value grows as fund value grows.
        </p>
      </LessonCard>

      {/* 2️⃣ Types of Mutual Funds */}
      <LessonCard title="2️⃣ Types of Mutual Funds (Simple View)" icon={<PieChart className="h-5 w-5 text-blue-300" />}>
        <div className="grid sm:grid-cols-3 gap-3">
          <FundTypeCard
            title="Equity Funds"
            desc="High growth • Long-term • Higher risk"
            color="from-green-700/30 to-emerald-600/30"
            icon={<TrendingUp className="h-6 w-6 text-green-300" />}
          />
          <FundTypeCard
            title="Debt Funds"
            desc="Stable • Low-medium risk • Short-term"
            color="from-blue-700/30 to-cyan-600/30"
            icon={<Wallet className="h-6 w-6 text-cyan-300" />}
          />
          <FundTypeCard
            title="Hybrid Funds"
            desc="Balanced mix • Medium risk"
            color="from-purple-700/30 to-pink-600/30"
            icon={<PieChart className="h-6 w-6 text-pink-300" />}
          />
        </div>
      </LessonCard>

      {/* 3️⃣ SIP Concept */}
      <LessonCard title="3️⃣ What is SIP (Systematic Investment Plan)?" icon={<Coins className="h-5 w-5 text-green-300" />}>
        <p>
          SIP means investing **a fixed amount every month** into a Mutual Fund.
        </p>
        <ul className="list-disc list-inside text-blue-100 text-sm mt-2 space-y-1">
          <li>✅ Easy & disciplined investing</li>
          <li>✅ Works with salary cycle</li>
          <li>✅ Rupee-cost averaging → buy more units when market is low</li>
          <li>✅ Power of compounding → exponential growth</li>
        </ul>
      </LessonCard>

      {/* 4️⃣ Growth Calculator */}
      <LessonCard title="4️⃣ SIP Growth Calculator — Try it!" icon={<Calculator className="h-5 w-5 text-green-300" />}>
        <div className="grid sm:grid-cols-2 gap-4">
          <Input
            label="Monthly SIP (₹)"
            value={monthly}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMonthly(Number(e.target.value))}
            icon={<Coins className="h-4 w-4 text-cyan-300" />}
          />
          <Input
            label="Investment Duration (years)"
            value={years}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setYears(Number(e.target.value))}
            icon={<LineChart className="h-4 w-4 text-cyan-300" />}
          />
        </div>

        {/* Result */}
        <div className="rounded-xl mt-4 p-5 bg-gradient-to-r from-green-700/30 to-teal-600/30 border border-white/10">
          <div className="text-blue-200 text-sm">Future Value</div>
          <div className="text-white font-semibold text-2xl mt-1">
            ₹{futureValue.toLocaleString("en-IN", { maximumFractionDigits: 0 })}
          </div>
          <p className="text-xs text-blue-300 mt-1">
            (Assuming 12% annual compounding)
          </p>
        </div>
      </LessonCard>

      {/* 5️⃣ Risk vs Return */}
      <LessonCard title="5️⃣ Risk vs Return — Thumb Rule" icon={<AlertTriangle className="h-5 w-5 text-yellow-300" />}>
        <p>High growth = High risk • Long-term reduces risk ✔</p>
        <img
          src="https://via.placeholder.com/600x200?text=Risk+vs+Return+Chart"
          alt="risk-return"
          className="rounded-xl opacity-80"
        />
        <p className="text-blue-200 text-sm mt-2">
          Invest in equity only when goal is **5+ years away**
        </p>
      </LessonCard>

      {/* 6️⃣ When to Invest in MFs */}
      <LessonCard title="6️⃣ When is SIP right for you?" icon={<CheckSquare className="h-5 w-5 text-green-300" />}>
        <ul className="list-disc list-inside space-y-2 text-sm text-blue-100">
          <li>✅ You want to build wealth in long run</li>
          <li>✅ You can invest monthly</li>
          <li>✅ You understand short-term market ups/downs</li>
        </ul>
      </LessonCard>

      {/* 7️⃣ NeoCred Tip */}
      <LessonCard title="7️⃣ NeoCred Recommendation" icon={<Lightbulb className="h-5 w-5 text-yellow-300" />}>
        <p className="text-sm text-blue-100 leading-relaxed">
          Start with a **Nifty 50 Index Fund**  
          Minimum tracking error • Low costs • Consistent returns  
          Perfect for beginners ✅
        </p>
      </LessonCard>

      {/* Quiz */}
      <LessonCard title="💬 Quick Quiz">
        <QuizComponent />
      </LessonCard>
    </motion.section>
  )
}

/* ===================== UI Components ===================== */

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

function FundTypeCard({ title, desc, color, icon }: any) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className={`rounded-2xl p-5 bg-gradient-to-r ${color} border border-white/10`}
    >
      <div className="flex items-center gap-2 mb-2 text-white font-semibold">
        {icon} {title}
      </div>
      <p className="text-xs text-blue-100">{desc}</p>
    </motion.div>
  )
}

function Input({ label, value, onChange, icon }: any) {
  return (
    <div className="bg-white/10 border border-white/10 rounded-xl p-4">
      <label className="text-xs text-blue-200 flex items-center gap-2 mb-1">
        {icon} {label}
      </label>
      <input
        type="number"
        value={value}
        onChange={onChange}
        className="w-full p-2 bg-white/20 rounded-lg text-white outline-none"
      />
    </div>
  )
}

/* ===================== Quiz ===================== */

function QuizComponent() {
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [score, setScore] = useState(0)

  const quiz = [
    {
      question: "SIP works best for:",
      options: ["1-year goals", "Long-term wealth", "Lottery returns", "Daily expenses"],
      correct: "Long-term wealth",
    },
    {
      question: "A Mutual Fund invests in:",
      options: ["Only gold", "Only fixed deposits", "Stocks/Bonds", "Nothing"],
      correct: "Stocks/Bonds",
    },
    {
      question: "Returns in equity funds are:",
      options: ["Guaranteed", "High but not guaranteed", "Fixed by RBI", "Same as FD"],
      correct: "High but not guaranteed",
    },
  ]

  const handleSelect = (qi: number, opt: string) => {
    if (!submitted) setAnswers((prev) => ({ ...prev, [qi]: opt }))
  }

  const handleSubmit = () => {
    setScore(quiz.filter((q, i) => answers[i] === q.correct).length)
    setSubmitted(true)
  }

  const reset = () => {
    setAnswers({})
    setScore(0)
    setSubmitted(false)
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
                  className={`w-full text-left px-4 py-2 border rounded-lg transition-all ${
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
          whileHover={{ scale: 1.05 }}
          onClick={handleSubmit}
          className="px-6 py-2 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white disabled:opacity-50"
          disabled={Object.keys(answers).length < quiz.length}
        >
          Submit Answers
        </motion.button>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center text-white space-y-3"
        >
          <div className="flex justify-center items-center gap-2 text-lg font-semibold">
            {score === quiz.length ? (
              <>
                <CheckCircle className="text-green-400 h-6 w-6" /> Perfect! 🎯
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
