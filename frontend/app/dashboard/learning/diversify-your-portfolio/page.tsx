"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Layers,
  TrendingUp,
  Shield,
  Coins,
  IndianRupee,
  BarChart3,
  CheckCircle,
  XCircle,
  RotateCcw,
  BookOpen,
  Target,
  User,
  Clock,
  Calculator,
  Zap,
} from "lucide-react"

/**
 * Lesson: How to Diversify Your Portfolio (Equity, Debt, Gold)
 * Level: Intermediate
 * SEBI-Compliant: Educational Only (No product recommendations)
 */

export default function Lesson_DiversifyPortfolio() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-5xl mx-auto space-y-10 text-blue-50"
    >
      {/* Header */}
      <header className="text-center">
        <h1 className="text-3xl sm:text-4xl font-bold flex items-center justify-center gap-2">
          <Layers className="h-8 w-8 text-cyan-400" />
          Diversify Your Portfolio
        </h1>
        <p className="text-blue-200 text-lg mt-2">
          Spread your risk → Improve stability & potential returns ⚖️📈
        </p>
        <Disclaimer />
      </header>

      {/* 1️⃣ Why Diversify */}
      <LessonCard title="1️⃣ What is Diversification? Why It Matters" icon={<BookOpen className="h-5 w-5 text-cyan-400" />}>
        <p>
          Diversification means investing in **multiple asset classes** so that
          when one goes down, others may protect your wealth.
        </p>
        <ul className="list-disc list-inside text-blue-200 text-sm mt-2 space-y-1">
          <li>Smoother experience — fewer shocks</li>
          <li>Reduces risk without always reducing returns</li>
          <li>Protects your money during market crashes</li>
        </ul>
      </LessonCard>

      {/* 2️⃣ Assets */}
      <LessonCard title="2️⃣ Main Asset Classes for Indians" icon={<Target className="h-5 w-5 text-blue-400" />}>
        <div className="grid sm:grid-cols-3 gap-4">
          <AssetCard
            title="Equity"
            desc="High returns, high volatility. Good for long-term growth"
            icon={<TrendingUp className="h-6 w-6 text-green-300" />}
          />
          <AssetCard
            title="Debt"
            desc="Stable & lower risk. Good for income + short-term goals"
            icon={<Shield className="h-6 w-6 text-blue-300" />}
          />
          <AssetCard
            title="Gold"
            desc="Crisis protector. Hedge against inflation & currency risk"
            icon={<Coins className="h-6 w-6 text-yellow-300" />}
          />
        </div>

        <p className="text-xs text-blue-300 mt-3">
          ✅ Property, REITs, international equity can also be diversification options (Advanced levels)
        </p>
      </LessonCard>

      {/* 3️⃣ Risk Profile */}
      <RiskProfileSelector />

      {/* 4️⃣ Real Goal-Based Mix */}
      <LessonCard title="4️⃣ Smart Allocation Based on Goal Duration ⏳" icon={<Clock className="h-5 w-5 text-purple-400" />}>
        <ul className="text-blue-100 text-sm space-y-2 list-inside list-disc">
          <li><strong>Short term (&lt; 3 years):</strong> Debt 80–100%, Gold small, No equity</li>
          <li><strong>Medium term (3–7 years):</strong> Equity ~40–60%, Some Debt & Gold</li>
          <li><strong>Long term (7+ years):</strong> Equity 70–90% for growth</li>
        </ul>
        <p className="text-xs text-blue-300 mt-2">
          Timeline is more important than age ✅
        </p>
      </LessonCard>

      {/* 5️⃣ Interactive Diversification Tool */}
      <PortfolioAllocator />

      {/* Key Takeaways */}
      <LessonCard title="📘 Key Takeaways" icon={<Zap className="h-5 w-5 text-cyan-400" />}>
        <ul className="text-sm text-blue-100 space-y-2 list-disc list-inside">
          <li>Don’t put all eggs in one basket 🧺</li>
          <li>Mixing equity + debt + gold reduces big losses</li>
          <li>Align mix with **time horizon + emotional comfort**</li>
        </ul>
      </LessonCard>

      {/* 7️⃣ Quiz */}
      <LessonCard title="💬 Quick Quiz">
        <QuizComponent />
      </LessonCard>
    </motion.section>
  )
}

/* ======================================================= */
/* Components */
/* ======================================================= */

function LessonCard({ title, children, icon }: any) {
  return (
    <motion.div
      className="bg-white/10 p-6 rounded-2xl border border-white/10 shadow-lg space-y-3"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
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
    <p className="text-xs text-yellow-300 flex items-center gap-1 justify-center mt-2">
      Educational Only — Not SEBI registered. No product advice provided.
    </p>
  )
}

/* Asset Card */
function AssetCard({ title, desc, icon }: any) {
  return (
    <motion.div whileHover={{ scale: 1.05 }}
      className="rounded-xl border border-white/10 bg-white/10 p-4 text-center">
      <div className="mb-2 flex justify-center">{icon}</div>
      <h3 className="text-white font-semibold">{title}</h3>
      <p className="text-blue-200 text-xs mt-1">{desc}</p>
    </motion.div>
  )
}

/* Risk Profile Selector */
function RiskProfileSelector() {
  const profiles = [
    { id: "low", label: "Conservative (Low Risk)", equity: 20, debt: 70, gold: 10 },
    { id: "medium", label: "Moderate (Balanced)", equity: 50, debt: 40, gold: 10 },
    { id: "high", label: "Aggressive (Growth)", equity: 75, debt: 15, gold: 10 },
  ]
  const [selected, setSelected] = useState("medium")

  return (
    <LessonCard title="3️⃣ Your Risk Profile" icon={<User className="h-5 w-5 text-green-400" />}>
      <div className="space-y-3">
        {profiles.map((p) => (
          <button
            key={p.id}
            onClick={() => setSelected(p.id)}
            className={`w-full text-left px-4 py-3 rounded-xl border transition ${
              selected === p.id
                ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white"
                : "bg-white/10 border-white/10 hover:bg-white/20 text-blue-200"
            }`}
          >
            {p.label}
          </button>
        ))}
      </div>
      <p className="text-xs text-blue-300 mt-2">
        Pick the one that fits your comfort & goal duration ✅
      </p>
    </LessonCard>
  )
}

/* Portfolio Allocator */
function PortfolioAllocator() {
  const [equity, setEquity] = useState(50)
  const [debt, setDebt] = useState(40)
  const [gold, setGold] = useState(10)

  const total = equity + debt + gold
  const score = total === 100 ? equity * 0.7 + debt * 0.2 + gold * 0.1 : 0

  return (
    <LessonCard title="5️⃣ Build Your Portfolio — Try Live Allocation" icon={<Calculator className="h-5 w-5 text-amber-400" />}>
      <p className="text-blue-200 text-sm mb-3">
        Allocate percentages that add up to <strong>100%</strong>
      </p>

      <div className="grid md:grid-cols-3 gap-4">
        <SliderBox label="Equity %" value={equity} setValue={setEquity} color="from-green-500" />
        <SliderBox label="Debt %" value={debt} setValue={setDebt} color="from-blue-500" />
        <SliderBox label="Gold %" value={gold} setValue={setGold} color="from-yellow-500" />
      </div>

      <div className="rounded-xl bg-white/10 border border-white/10 mt-4 p-4">
        <p className="text-blue-200 text-sm">Total Allocation</p>
        <div className={`text-xl font-semibold ${
          total === 100 ? "text-white" : "text-red-400"
        }`}>
          {total}% {total !== 100 && "❌ Must be 100%"}
        </div>
      </div>

      {total === 100 && (
        <div className="mt-4">
          <p className="text-blue-200 text-xs mb-1">Portfolio Health Score (illustrative)</p>
          <div className="text-white text-lg font-semibold">{score.toFixed(0)} / 100</div>
          <p className="text-blue-300 text-[11px] mt-1">
            Balanced diversified portfolio = higher score ✅
          </p>
        </div>
      )}
    </LessonCard>
  )
}

function SliderBox({ label, value, setValue, color }: any) {
  return (
    <div>
      <label className="text-xs text-blue-200">{label}</label>
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className={`w-full mt-2 accent-blue-500`}
      />
      <div className={`font-semibold text-sm mt-1 text-white`}>{value}%</div>
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
      question: "Diversification is used for:",
      options: ["Maximizing highest return only", "Reducing overall risk", "Eliminating all risk", "Doubling money fast"],
      correct: "Reducing overall risk",
    },
    {
      question: "Which asset protects during crisis & high inflation?",
      options: ["Equity", "Debt", "Gold", "Insurance"],
      correct: "Gold",
    },
    {
      question: "Short-term goals (&lt; 3 yrs) should avoid:",
      options: ["Debt", "Gold", "Equity", "Liquid funds"],
      correct: "Equity",
    },
  ]

  const pick = (i: number, o: string) => !submitted && setAnswers({ ...answers, [i]: o })
  const submit = () => {
    setScore(quiz.filter((q, i) => q.correct === answers[i]).length)
    setSubmitted(true)
  }
  const reset = () => { setAnswers({}), setSubmitted(false), setScore(0) }

  return (
    <div className="space-y-6">
      {quiz.map((q, i) => (
        <motion.div key={i}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/5 p-4 rounded-xl border border-white/10"
        >
          <p className="font-medium text-blue-100 mb-3">Q{i + 1}: {q.question}</p>
          {q.options.map((o, j) => {
            const isSel = answers[i] === o
            const isCor = o === q.correct
            return (
              <motion.button key={j} disabled={submitted}
                onClick={() => pick(i, o)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className={`w-full text-left px-4 py-2 rounded-lg border mb-2 transition
                  ${isSel ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white border-transparent"
                    : "bg-white/10 hover:bg-white/20 border-white/10"}
                  ${
                    submitted && isCor ? "border-green-400 bg-green-500/10" : ""
                  } ${
                    submitted && isSel && !isCor
                      ? "border-red-400 bg-red-500/10"
                      : ""
                  }`}
              >
                {o}
              </motion.button>
            )
          })}
        </motion.div>
      ))}

      {!submitted ? (
        <motion.button whileHover={{ scale: 1.05 }}
          onClick={submit}
          disabled={Object.keys(answers).length < quiz.length}
          className="px-6 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-xl disabled:opacity-50"
        >
          Submit
        </motion.button>
      ) : (
        <div className="text-center text-white space-y-3">
          <div className="text-lg font-semibold flex justify-center gap-2">
            {score === quiz.length ?
              (<><CheckCircle className="h-6 w-6 text-green-400" /> Perfect! 🎯</>) :
              (<><XCircle className="h-6 w-6 text-yellow-400" /> {score}/{quiz.length} correct</>)
            }
          </div>
          <motion.button onClick={reset}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm">
            <RotateCcw className="inline-block h-4 w-4 mr-1" /> Try Again
          </motion.button>
        </div>
      )}
    </div>
  )
}
