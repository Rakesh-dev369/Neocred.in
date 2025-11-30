"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  PieChart,
  TrendingUp,
  Landmark,
  ShieldCheck,
  Banknote,
  DollarSign,
  CheckCircle,
  XCircle,
  RotateCcw,
  Calculator,
  Target,
  BookOpen,
  Building2,
} from "lucide-react"

// Risk levels for color coding
const riskColors: Record<string, string> = {
  Low: "text-green-400",
  Medium: "text-yellow-400",
  High: "text-red-400",
}

// Mutual Fund category data
const types = [
  {
    category: "Equity Mutual Funds",
    desc: "Invest mostly in company shares. High growth potential, high volatility.",
    examples: ["Large Cap", "Mid Cap", "Small Cap", "ELSS (Tax saver)"],
    risk: "High",
  },
  {
    category: "Debt Mutual Funds",
    desc: "Invest in bonds, govt securities, corporate debt. Stable & low-medium risk.",
    examples: ["Liquid Funds", "Short Duration", "Corporate Bond Funds"],
    risk: "Low",
  },
  {
    category: "Hybrid Funds",
    desc: "Mix of equity + debt for balanced risk & growth.",
    examples: ["Aggressive Hybrid", "Balanced Advantage", "Conservative Hybrid"],
    risk: "Medium",
  },
  {
    category: "Solution-Oriented Funds",
    desc: "Designed for long-term goals like retirement or children’s education.",
    examples: ["Children’s Fund", "Retirement Fund"],
    risk: "Medium",
  },
  {
    category: "Other Schemes: Index, ETFs, FoFs",
    desc: "Low-cost options tracking market indices or other funds.",
    examples: ["Nifty Index Fund", "Gold ETF", "International FoFs"],
    risk: "Medium",
  },
]

export default function Lesson_MutualFunds() {
  const [amount, setAmount] = useState(1000)
  const [years, setYears] = useState(5)

  const expectedReturn = (rate: number) =>
    amount * Math.pow(1 + rate / 12, years * 12)

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto space-y-10 text-blue-50"
    >
      {/* Header */}
      <div className="text-center space-y-3">
        <h1 className="text-3xl font-bold text-white flex items-center justify-center gap-2">
          <PieChart className="h-8 w-8 text-cyan-400" /> Types of Mutual Funds in India
        </h1>
        <p className="text-blue-200 text-lg">
          Choose based on your <strong>goal duration</strong> & <strong>risk tolerance</strong> ✅
        </p>
        <Disclaimer />
      </div>

      {/* 1️⃣ MF Category Cards */}
      <LessonCard title="1️⃣ Categories as per SEBI" icon={<Building2 className="h-5 w-5 text-cyan-300" />}>
        <div className="space-y-5">
          {types.map((t, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="bg-white/10 rounded-xl p-5 border border-white/10"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-white">{t.category}</h3>
                <span className={`${riskColors[t.risk]} text-sm`}>
                  ● {t.risk} Risk
                </span>
              </div>
              <p className="text-sm text-blue-200 mt-2">{t.desc}</p>

              <ul className="list-disc text-sm text-blue-100 mt-3 space-y-1 ml-3">
                {t.examples.map((e, j) => (
                  <li key={j}>{e}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </LessonCard>

      {/* 2️⃣ Return Potential Tool */}
      <LessonCard title="2️⃣ Approx. Growth Comparison (Try It)" icon={<Calculator className="h-5 w-5 text-green-300" />}>
        <div className="grid sm:grid-cols-2 gap-4">
          <InputField
            label="Monthly SIP Amount (₹)"
            value={amount}
            onChange={(e: any) => setAmount(Number(e.target.value))}
            icon={<DollarSign className="h-4 w-4 text-cyan-300" />}
          />
          <InputField
            label="Duration (years)"
            value={years}
            onChange={(e: any) => setYears(Number(e.target.value))}
            icon={<Landmark className="h-4 w-4 text-cyan-300" />}
          />
        </div>

        <div className="grid sm:grid-cols-3 gap-4 mt-4">
          <ReturnBox label="Debt (6% p.a.)" value={expectedReturn(0.06)} risk="Low" />
          <ReturnBox label="Hybrid (9% p.a.)" value={expectedReturn(0.09)} risk="Medium" />
          <ReturnBox label="Equity (12% p.a.)" value={expectedReturn(0.12)} risk="High" />
        </div>

        <p className="text-xs text-blue-200 mt-2">
          Only educational projections — real returns vary. 📉📈
        </p>
      </LessonCard>

      {/* 3️⃣ Smart Selection Guidance */}
      <LessonCard title="3️⃣ Match Fund Type to Your Goal" icon={<Target className="h-5 w-5 text-yellow-300" />}>
        <ul className="list-disc list-inside text-sm space-y-2">
          <li><strong>Short-term (0–2 yrs):</strong> Debt funds</li>
          <li><strong>Medium-term (3–5 yrs):</strong> Hybrid funds</li>
          <li><strong>Long-term (5+ yrs):</strong> Equity funds</li>
        </ul>
        <p className="text-xs text-blue-300 mt-2">
          ✅ Match <strong>duration + risk</strong> → smarter decision making  
          ❌ No product endorsements (SEBI rule)
        </p>
      </LessonCard>

      {/* 4️⃣ Key Takeaways */}
      <LessonCard title="📘 Quick Summary" icon={<BookOpen className="h-5 w-5 text-blue-300" />}>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Mutual Funds = professionally managed investing</li>
          <li>Return & risk depend on underlying assets</li>
          <li>Start with what fits your timeline & comfort</li>
        </ul>
      </LessonCard>

      {/* 5️⃣ Quiz */}
      <LessonCard title="💬 Quick Quiz">
        <QuizComponent />
      </LessonCard>
    </motion.section>
  )
}

/* ---------------- UI Components ---------------- */

function LessonCard({ title, children, icon }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="bg-white/10 p-6 rounded-2xl border border-white/10 shadow-lg space-y-3"
    >
      <h2 className="text-xl font-semibold text-white mb-1 flex items-center gap-2">
        {icon && icon}
        {title}
      </h2>
      <div className="text-blue-100 text-sm leading-relaxed">{children}</div>
    </motion.div>
  )
}

function Disclaimer() {
  return (
    <p className="text-xs text-yellow-300">
      ⚠️ Only educational. NeoCred is **not** a SEBI registered advisor.
    </p>
  )
}

function InputField({ label, value, onChange, icon }: any) {
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

function ReturnBox({ label, value, risk }: any) {
  return (
    <div className="rounded-xl p-4 bg-white/10 border border-white/10">
      <div className="flex items-center justify-between text-blue-200 text-xs">
        {label}
        <span className={riskColors[risk]}>{risk} Risk</span>
      </div>
      <div className="text-lg text-white font-semibold mt-1">
        ₹{Math.round(value).toLocaleString("en-IN")}
      </div>
    </div>
  )
}

/* ---------------- QUIZ ---------------- */

function QuizComponent() {
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [score, setScore] = useState(0)

  const quiz = [
    {
      question: "Equity funds usually have:",
      options: ["Low volatility", "High growth potential", "Fixed return", "No market link"],
      correct: "High growth potential",
    },
    {
      question: "Best fit for short-term goals (educational only):",
      options: ["Debt funds", "Equity funds", "Gold coins", "Crypto"],
      correct: "Debt funds",
    },
    {
      question: "Costs & risks are lower in:",
      options: ["Index funds", "Smallcap funds", "Crypto ETFs", "Unlisted shares"],
      correct: "Index funds",
    },
  ]

  const handleSelect = (qi: number, opt: string) =>
    !submitted && setAnswers((prev) => ({ ...prev, [qi]: opt }))

  const handleSubmit = () => {
    setScore(quiz.filter((q, i) => answers[i] === q.correct).length)
    setSubmitted(true)
  }

  const reset = () => {
    setAnswers({})
    setSubmitted(false)
    setScore(0)
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
              const selected = answers[qi] === opt
              const correct = opt === q.correct
              return (
                <motion.button
                  key={oi}
                  onClick={() => handleSelect(qi, opt)}
                  disabled={submitted}
                  whileHover={!submitted ? { scale: 1.02 } : {}}
                  className={`w-full text-left px-4 py-2 rounded-lg border transition-all ${
                    selected
                      ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white border-transparent"
                      : "bg-white/10 hover:bg-white/20 border-white/10"
                  } ${
                    submitted && correct ? "border-green-400 bg-green-500/10" : ""
                  } ${
                    submitted && selected && !correct
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
          disabled={Object.keys(answers).length < quiz.length}
          className="px-6 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-xl disabled:opacity-50"
        >
          Submit
        </motion.button>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center text-white space-y-3"
        >
          <div className="font-semibold text-lg flex items-center justify-center gap-2">
            {score === quiz.length ? (
              <>
                <CheckCircle className="text-green-400 h-5 w-5" /> Awesome! 🎯
              </>
            ) : (
              <>
                <XCircle className="text-yellow-400 h-5 w-5" /> {score}/{quiz.length} correct
              </>
            )}
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={reset}
            className="px-4 py-2 text-sm bg-white/10 hover:bg-white/20 rounded-lg"
          >
            <RotateCcw className="inline-block h-4 w-4 mr-1" /> Try Again
          </motion.button>
        </motion.div>
      )}
    </div>
  )
}
