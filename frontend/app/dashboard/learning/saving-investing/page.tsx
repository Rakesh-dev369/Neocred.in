"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  PiggyBank,
  TrendingUp,
  AlertCircle,
  Coins,
  Building,
  CheckCircle,
  XCircle,
  RotateCcw,
  Target,
  Calendar,
  BarChart3,
  MessageCircle,
  Calculator,
} from "lucide-react"

/**
 * Lesson: Difference Between Saving & Investing
 */

export default function Lesson_SavingInvesting() {
  const [amount, setAmount] = useState(10000)
  const [months, setMonths] = useState(12)

  const savingsRate = 0.035 // 3.5% annual – savings account & RD avg
  const investingRate = 0.12 // 12% long-term equity SIP

  const years = months / 12

  const savingsValue = amount * Math.pow(1 + savingsRate, years)
  const investingValue = amount * Math.pow(1 + investingRate, years)

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto space-y-10 text-blue-50"
    >
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3 flex items-center justify-center gap-3">
          <PiggyBank className="h-9 w-9 text-cyan-400" /> Saving vs Investing
        </h1>
        <p className="text-blue-200 text-lg">
          Learn when to protect money 🛡️ and when to grow it 📈
        </p>
      </div>

      {/* 1️⃣ What is Saving? */}
      <InfoCard title="1️⃣ What is Saving?" icon={<PiggyBank className="text-cyan-300" />}>
        <p>
          Saving means keeping your money safe for **short-term needs**.  
          It focuses on **security, liquidity** and **low risk**.
        </p>
        <ul className="text-sm text-blue-100 mt-3 space-y-2">
          <li>✅ Easy to withdraw anytime</li>
          <li>✅ Covers emergencies</li>
          <li>❌ Very low returns (2.5%–4%)</li>
        </ul>
        <p className="text-blue-300 text-sm mt-3"><strong>Best products:</strong> Savings A/c, FD, RD, Liquid funds</p>
      </InfoCard>

      {/* 2️⃣ What is Investing? */}
      <InfoCard title="2️⃣ What is Investing?" icon={<TrendingUp className="text-green-300" />}>
        <p>
          Investing means putting money into assets that **grow wealth over time**.  
          Focus: **Higher returns**, **long-term** growth.
        </p>
        <ul className="text-sm text-blue-100 mt-3 space-y-2">
          <li>✅ Beats inflation</li>
          <li>✅ Compounding makes money grow faster</li>
          <li>⚠️ Market ups & downs (short-term risk)</li>
        </ul>
        <p className="text-green-300 text-sm mt-3"><strong>Best products:</strong> Mutual Funds, Stocks, Gold, Real Estate</p>
      </InfoCard>

      {/* 3️⃣ Key Difference — Visual */}
      <LessonCard title="3️⃣ Saving vs Investing — Key Differences" icon={<BarChart3 className="h-5 w-5 text-blue-300" />}>
        <table className="w-full text-sm border-collapse text-blue-100">
          <thead>
            <tr className="border-b border-white/10 text-blue-200">
              <th className="p-2 text-left">Factor</th>
              <th className="p-2 text-left">Saving 💰</th>
              <th className="p-2 text-left">Investing 📈</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Purpose", "Safety & emergencies", "Growth & wealth creation"],
              ["Risk", "Very low", "Varies (low–high)"],
              ["Liquidity", "High (quick access)", "Medium/Low"],
              ["Returns", "3-5% yearly", "10-14% long-term average"],
              ["Ideal Duration", "Short-term (0–3 yrs)", "Long-term (5+ yrs)"],
              ["Example Products", "Savings A/c, FD, RD", "Mutual Funds, Stocks"],
            ].map(([factor, s, i], idx) => (
              <tr key={idx} className="border-b border-white/5">
                <td className="p-2">{factor}</td>
                <td className="p-2">{s}</td>
                <td className="p-2">{i}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </LessonCard>

      {/* 4️⃣ Mini Growth Tool */}
      <GrowthTool
        amount={amount}
        months={months}
        setAmount={setAmount}
        setMonths={setMonths}
        savingsValue={savingsValue}
        investingValue={investingValue}
      />

      {/* 5️⃣ When to Save vs Invest */}
      <LessonCard title="5️⃣ So, When Should You Save or Invest?" icon={<Target className="h-5 w-5 text-yellow-300" />}>
        <div className="grid sm:grid-cols-2 gap-4">
          <DecisionCard
            title="Save When"
            points={["Emergency fund", "Big purchase soon", "Income unstable", "Goal under 2–3 years"]}
            bg="bg-cyan-700/30"
          />
          <DecisionCard
            title="Invest When"
            points={["Retirement", "Child education", "Wealth creation", "Goal 5+ years away"]}
            bg="bg-green-700/30"
          />
        </div>
      </LessonCard>

      {/* Quiz */}
      <LessonCard title="💬 Quick Quiz">
        <QuizComponent />
      </LessonCard>
    </motion.section>
  )
}

/* Components */

function InfoCard({ title, children, icon }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white/10 p-6 rounded-2xl border border-white/10 shadow-lg space-y-3"
    >
      <div className="flex items-center gap-2">
        {icon}
        <h2 className="text-xl font-semibold text-white">{title}</h2>
      </div>
      <div className="text-blue-100 text-sm">{children}</div>
    </motion.div>
  )
}

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

/* Mini Growth Tool */
function GrowthTool({ amount, months, setAmount, setMonths, savingsValue, investingValue }: any) {
  return (
    <LessonCard title="4️⃣ Small Change, Big Difference — See It Yourself" icon={<Calculator className="h-5 w-5 text-green-300" />}>
      <div className="grid sm:grid-cols-2 gap-4">
        <Input label="Amount (₹)" value={amount} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAmount(Number(e.target.value))} icon={<Coins />} />
        <Input label="Duration (months)" value={months} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMonths(Number(e.target.value))} icon={<Calendar />} />
      </div>

      <div className="grid sm:grid-cols-2 gap-4 mt-4">
        <ValueCard label="If You SAVE" value={savingsValue} icon={<PiggyBank className="text-cyan-300" />} />
        <ValueCard label="If You INVEST" value={investingValue} icon={<TrendingUp className="text-green-300" />} highlight />
      </div>
    </LessonCard>
  )
}

function Input({ label, value, onChange, icon }: {
  label: string
  value: number
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  icon: React.ReactNode
}) {
  return (
    <div className="p-4 bg-white/10 rounded-xl border border-white/10">
      <label className="text-xs text-blue-200 flex items-center gap-2 mb-1">{icon} {label}</label>
      <input
        type="number"
        value={value}
        onChange={onChange}
        className="w-full p-2 rounded-lg bg-white/20 border border-white/10 text-white outline-none"
      />
    </div>
  )
}

function ValueCard({ label, value, icon, highlight = false }: any) {
  return (
    <div className={`rounded-xl p-4 border border-white/10 ${highlight ? "bg-gradient-to-r from-green-700/30 to-teal-600/30" : "bg-white/10"}`}>
      <div className="text-sm text-blue-200 flex items-center gap-2">
        {icon} {label}
      </div>
      <div className="text-xl font-semibold text-white mt-2">
        ₹{value.toLocaleString("en-IN", { maximumFractionDigits: 0 })}
      </div>
    </div>
  )
}

function DecisionCard({ title, points, bg }: any) {
  return (
    <div className={`${bg} rounded-xl p-5 border border-white/10`}>
      <h3 className="font-semibold text-white mb-2 text-lg flex items-center gap-2">
        <Target className="h-4 w-4 text-blue-200" /> {title}
      </h3>
      <ul className="list-disc list-inside text-sm text-blue-100 space-y-1">
        {points.map((p: string, i: number) => <li key={i}>{p}</li>)}
      </ul>
    </div>
  )
}

/* Quiz */
function QuizComponent() {
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [score, setScore] = useState(0)

  const quiz = [
    {
      question: "Which is best for wealth creation over 10 years?",
      options: ["Savings Account", "Equity SIP", "RD", "Cash at home"],
      correct: "Equity SIP",
    },
    {
      question: "Savings are ideal for:",
      options: ["Emergency fund", "25-year goal", "High-risk bets", "Crypto"],
      correct: "Emergency fund",
    },
    {
      question: "Investing involves:",
      options: ["No risk", "Lower returns than FD", "Market ups & downs", "Zero patience"],
      correct: "Market ups & downs",
    },
  ]

  const handleSelect = (i: number, option: string) => {
    if (!submitted) setAnswers((p) => ({ ...p, [i]: option }))
  }

  const handleSubmit = () => {
    setScore(quiz.filter((q, i) => answers[i] === q.correct).length)
    setSubmitted(true)
  }

  const handleReset = () => {
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
          <p className="font-medium text-blue-100 mb-3">Q{qi + 1}: {q.question}</p>
          <div className="space-y-2">
            {q.options.map((option, oi) => {
              const isCorrect = option === q.correct
              const isSelected = answers[qi] === option
              return (
                <motion.button
                  key={oi}
                  onClick={() => handleSelect(qi, option)}
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
          className="px-6 py-2 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white disabled:opacity-40"
          disabled={Object.keys(answers).length < quiz.length}
        >
          Submit Answers
        </motion.button>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center space-y-3"
        >
          <div className="font-semibold text-lg text-white flex justify-center gap-2">
            {score === quiz.length ? (
              <>
                <CheckCircle className="text-green-400 h-6 w-6" /> You nailed it🎯
              </>
            ) : (
              <>
                <XCircle className="text-yellow-400 h-6 w-6" /> {score}/{quiz.length} correct!
              </>
            )}
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={handleReset}
            className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm"
          >
            <RotateCcw className="inline-block h-4 w-4 mr-1" /> Try again
          </motion.button>
        </motion.div>
      )}
    </div>
  )
}
