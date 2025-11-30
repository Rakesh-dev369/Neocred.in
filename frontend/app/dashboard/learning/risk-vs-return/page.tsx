"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  TrendingUp,
  TrendingDown,
  ShieldAlert,
  Brain,
  ArrowUp,
  ArrowDown,
  BarChart3,
  CheckCircle,
  XCircle,
  RotateCcw,
  Info,
  BookOpen,
  Activity,
  User,
  Target,
} from "lucide-react"

/*
Understanding Risk vs Return
Intermediate • SEBI-compliant educational content
*/

export default function Lesson_RiskVsReturn() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-5xl mx-auto space-y-10 text-blue-50"
    >
      {/* Header */}
      <header className="text-center space-y-2">
        <h1 className="text-3xl sm:text-4xl font-bold flex items-center justify-center gap-2">
          <ShieldAlert className="h-8 w-8 text-yellow-400" />
          Understanding Risk vs Return
        </h1>
        <p className="text-blue-200 text-lg">
          Higher return ≠ better — it often means **higher volatility** 📉📈
        </p>
        <Disclaimer />
      </header>

      {/* 1️⃣ Concept */}
      <LessonCard title="1️⃣ What Does Risk Mean in Investing?" icon={<BookOpen className="h-5 w-5 text-cyan-400" />}>
        <p className="text-sm leading-relaxed">
          In markets, **risk** means the chance that investment returns may be **lower than expected**
          — even negative for a while.
        </p>
        <p className="text-sm text-blue-300 mt-2">
          If prices move wildly → **high risk**  
          If prices move slowly → **low risk**
        </p>
      </LessonCard>

      {/* 2️⃣ Risk vs Return Chart */}
      <LessonCard title="2️⃣ Risk vs Return — General Thumb Rule" icon={<BarChart3 className="h-5 w-5 text-blue-400" />}>
        <div className="grid md:grid-cols-4 gap-4">
          <AssetRiskBox label="FDs / Savings" risk="Low" return="Low" />
          <AssetRiskBox label="Debt Mutual Funds" risk="Low-Medium" return="Low-Medium" />
          <AssetRiskBox label="Hybrid Funds" risk="Medium" return="Medium" />
          <AssetRiskBox label="Equity / Stocks" risk="High" return="High" />
        </div>
      </LessonCard>

      {/* 3️⃣ Volatility Simulator */}
      <VolatilitySimulator />

      {/* 4️⃣ Behavioral Risk */}
      <LessonCard title="4️⃣ Why Do Investors Lose Money? (Behavioral Risk)" icon={<Brain className="h-5 w-5 text-red-400" />}>
        <ul className="list-disc list-inside text-sm space-y-2">
          <li>Buying high out of **FOMO**</li>
          <li>Selling low out of **fear**</li>
          <li>Checking market daily → panic decisions</li>
          <li>Chasing “hot tips” or social media hype</li>
        </ul>
        <div className="text-xs text-blue-300 mt-2">
          ✅ Controlling emotions is more important than predicting markets.
        </div>
      </LessonCard>

      {/* 5️⃣ Risk Profile */}
      <LessonCard title="5️⃣ Know Your Risk Profile (Self Check)" icon={<User className="h-5 w-5 text-purple-400" />}>
        <ul className="list-disc list-inside text-sm space-y-2">
          <li><strong>Conservative:</strong> Prefer stability, short-term goals</li>
          <li><strong>Moderate:</strong> Balance growth + safety</li>
          <li><strong>Aggressive:</strong> Long horizon, can handle volatility</li>
        </ul>
        <p className="text-xs text-blue-300 mt-1">
          ✅ Invest according to your comfort and goal duration  
          ❌ "High return" cannot be chased blindly
        </p>
      </LessonCard>

      {/* 6️⃣ Key Takeaways */}
      <LessonCard title="📘 Key Takeaways" icon={<Target className="h-5 w-5 text-cyan-400" />}>
        <ul className="list-disc list-inside text-sm space-y-2">
          <li>Risk & return are **directly linked**</li>
          <li>Volatility is normal, especially in equities</li>
          <li>Your **time horizon** decides suitable risk level</li>
        </ul>
      </LessonCard>

      {/* Quiz */}
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
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y:0 }}
      transition={{ duration: 0.4 }}
      className="bg-white/10 p-6 rounded-2xl border border-white/10 shadow-lg space-y-3"
    >
      <h2 className="text-xl font-semibold text-white flex items-center gap-2">
        {icon} {title}
      </h2>
      <div className="text-blue-100 text-sm">{children}</div>
    </motion.div>
  )
}

function Disclaimer() {
  return (
    <p className="text-xs text-yellow-300 flex items-center justify-center gap-1">
      <Info className="h-4 w-4" />
      Educational only — Not investment advice. NeoCred is not SEBI-registered.
    </p>
  )
}

function AssetRiskBox({ label, risk, return: ret }: any) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="rounded-xl p-4 bg-white/10 border border-white/10 text-center"
    >
      <div className="text-white font-medium">{label}</div>
      <div className="text-green-300 text-sm">{ret} Return</div>
      <div className="text-red-300 text-xs">{risk} Risk</div>
    </motion.div>
  )
}

/* ---------------- Volatility Simulator ---------------- */

function VolatilitySimulator() {
  const [base, setBase] = useState(100)
  const [shock, setShock] = useState(10)

  const up = base + shock
  const down = base - shock

  return (
    <LessonCard title="3️⃣ Try It — Market Volatility Simulation" icon={<Activity className="h-5 w-5 text-green-400" />}>
      <div className="grid sm:grid-cols-3 gap-4">
        <InputField
          label="Stock Price (₹)"
          value={base}
          onChange={(e: any) => setBase(Number(e.target.value))}
        />
        <InputField
          label="Volatility %"
          value={shock}
          onChange={(e: any) => setShock(Number(e.target.value))}
        />
        <div className="rounded-xl p-4 bg-white/10 border border-white/10 text-center">
          <div className="text-blue-200 text-xs">Possible Range</div>
          <div className="text-white font-semibold mt-1">
            ₹{down} — ₹{up}
          </div>
        </div>
      </div>
      <p className="text-xs text-blue-400 mt-2">
        Higher volatility → price swings wider → higher emotional stress
      </p>
    </LessonCard>
  )
}

function InputField({ label, value, onChange }: any) {
  return (
    <div className="bg-white/10 rounded-xl p-4 border border-white/10">
      <label className="text-xs text-blue-200 mb-1 block">{label}</label>
      <input
        type="number"
        value={value}
        onChange={onChange}
        className="w-full p-2 rounded-lg bg-white/20 border border-white/10 text-white outline-none"
      />
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
      question: "Which typically has the highest risk?",
      options: ["Savings Account", "Equity Mutual Fund", "Govt bond", "Fixed Deposit"],
      correct: "Equity Mutual Fund",
    },
    {
      question: "More volatility means:",
      options: ["More stability", "Less emotional stress", "Higher risk", "Guaranteed returns"],
      correct: "Higher risk",
    },
    {
      question: "Who should take higher risk?",
      options: [
        "Someone needing money in 1 year",
        "Someone emotionally uncomfortable with losses",
        "Someone with 10+ year horizon",
        "Someone investing for short-term shopping",
      ],
      correct: "Someone with 10+ year horizon",
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
        <div key={qi} className="bg-white/5 p-4 rounded-xl border border-white/10">
          <p className="font-medium text-blue-100 mb-3">
            Q{qi + 1}: {q.question}
          </p>

          {q.options.map((opt, oi) => {
            const isSelected = answers[qi] === opt
            const isCorrect = opt === q.correct
            return (
              <motion.button
                key={oi}
                onClick={() => handleSelect(qi, opt)}
                disabled={submitted}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className={`w-full text-left px-4 py-2 rounded-lg border mb-2 transition
                  ${
                    isSelected
                      ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white border-transparent"
                      : "bg-white/10 hover:bg-white/20 border-white/10"
                  }
                  ${
                    submitted && isCorrect
                      ? "border-green-400 bg-green-500/10"
                      : submitted && isSelected && !isCorrect
                      ? "border-red-400 bg-red-500/10"
                      : ""
                  }
                `}
              >
                {opt}
              </motion.button>
            )
          })}
        </div>
      ))}

      {!submitted ? (
        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={handleSubmit}
          disabled={Object.keys(answers).length < quiz.length}
          className="px-6 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-xl disabled:opacity-50"
        >
          Submit
        </motion.button>
      ) : (
        <div className="text-center space-y-3">
          <div className="text-lg font-semibold text-white flex justify-center gap-2">
            {score === quiz.length ? (
              <>
                <CheckCircle className="text-green-400 h-6 w-6" /> Outstanding! 🎯
              </>
            ) : (
              <>
                <XCircle className="text-yellow-400 h-6 w-6" /> {score}/{quiz.length} correct
              </>
            )}
          </div>
          <motion.button
            onClick={reset}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 text-sm bg-white/10 hover:bg-white/20 rounded-lg"
          >
            <RotateCcw className="inline-block h-4 w-4 mr-1" /> Try Again
          </motion.button>
        </div>
      )}
    </div>
  )
}
