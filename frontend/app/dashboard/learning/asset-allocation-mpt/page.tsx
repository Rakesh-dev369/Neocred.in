"use client"

import { useState, useMemo } from "react"
import { motion } from "framer-motion"
import {
  Sigma,
  LineChart,
  PieChart,
  Calculator,
  TrendingUp,
  ShieldCheck,
  CheckCircle,
  XCircle,
  RotateCcw,
  Activity,
  Layers3,
  BarChart3,
  Info,
  Gauge,
  Table,
} from "lucide-react"

/**
 * Lesson: Asset Allocation Strategies (Modern Portfolio Theory)
 * Level: Advanced (Educational Only — SEBI-compliant)
 * File: asset-allocation-mpt.tsx
 */

export default function Lesson_AssetAllocationMPT() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-5xl mx-auto space-y-10 text-blue-50"
    >
      {/* Header */}
      <header className="text-center space-y-3">
        <h1 className="text-3xl sm:text-4xl font-bold text-white flex items-center justify-center gap-2">
          <Sigma className="h-8 w-8 text-cyan-400" />
          Asset Allocation Strategies (MPT)
        </h1>
        <p className="text-blue-200 text-lg">
          Learn how to <strong>diversify intelligently</strong> using the science of risk and correlation — not just guesswork.
        </p>
        <Disclaimer />
      </header>

      <LessonCard title={<><Info className="h-5 w-5 text-emerald-400" /> 1️⃣ Modern Portfolio Theory — The Core Idea</>}>
        <ul className="list-disc list-inside text-sm space-y-2">
          <li>Developed by <strong>Harry Markowitz (1952)</strong>, it formalized diversification.</li>
          <li>The idea: combine assets with different risk/return profiles and <strong>low correlation</strong> to improve efficiency.</li>
          <li>The <strong>Efficient Frontier</strong> is the curve of optimal portfolios for each risk level.</li>
        </ul>
        <p className="text-xs text-blue-300 mt-2">
          Goal: minimize volatility without sacrificing expected return — or maximize return for a given risk.
        </p>
      </LessonCard>

      <LessonCard title={<><Calculator className="h-5 w-5 text-cyan-400" /> 2️⃣ Core Equations & Metrics</>}>
        <ul className="list-disc list-inside text-sm space-y-2">
          <li><strong>Portfolio Return:</strong> Rp = w₁R₁ + w₂R₂</li>
          <li><strong>Portfolio Risk (2 assets):</strong> σp = √(w₁²σ₁² + w₂²σ₂² + 2w₁w₂σ₁σ₂ρ₁₂)</li>
          <li><strong>Correlation (ρ):</strong> measures how assets move together. Range = −1 to +1.</li>
        </ul>
      </LessonCard>

      <PortfolioRiskCalculator />
      <EfficientFrontier />
      <AssetBehaviorTable />
      <PracticalAllocations />
      <KeyTakeaways />
      <QuizComponent />
    </motion.section>
  )
}

/* ---------------- Reusable Components ---------------- */

function LessonCard({ title, children }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="bg-white/10 p-6 rounded-2xl border border-white/10 shadow-lg space-y-3"
    >
      <h2 className="text-xl font-semibold text-white flex items-center gap-2">{title}</h2>
      <div className="text-blue-100 text-sm leading-relaxed">{children}</div>
    </motion.div>
  )
}

function Disclaimer() {
  return (
    <p className="text-xs text-yellow-300 flex items-center gap-2 justify-center">
      <ShieldCheck className="h-4 w-4" />
      Educational only — NeoCred is not a SEBI-registered advisor. No investment advice.
    </p>
  )
}

function NumberInput({ label, value, setValue, hint, icon }: any) {
  return (
    <div className="bg-white/10 rounded-xl p-4 border border-white/10">
      <label className="text-xs text-blue-200 mb-1 flex items-center gap-2">
        {icon} {label}
      </label>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="w-full p-2 rounded-lg bg-white/20 border border-white/10 text-white outline-none"
      />
      {hint && <p className="text-[11px] text-blue-300 mt-1">{hint}</p>}
    </div>
  )
}

function StatBox({ label, value }: any) {
  return (
    <div className="rounded-xl p-4 border border-white/10 bg-white/10">
      <div className="text-[11px] uppercase tracking-wide text-blue-200">{label}</div>
      <div className="text-white font-semibold text-lg">{value}</div>
    </div>
  )
}

/* 3️⃣ Portfolio Risk Calculator */
function PortfolioRiskCalculator() {
  const [w1, setW1] = useState(0.6)
  const [r1, setR1] = useState(10)
  const [sd1, setSd1] = useState(12)
  const [w2, setW2] = useState(0.4)
  const [r2, setR2] = useState(6)
  const [sd2, setSd2] = useState(7)
  const [corr, setCorr] = useState(0.3)

  const portfolioReturn = w1 * r1 + w2 * r2
  const portfolioSD = Math.sqrt(
    w1 ** 2 * sd1 ** 2 + w2 ** 2 * sd2 ** 2 + 2 * w1 * w2 * sd1 * sd2 * corr
  )

  return (
    <LessonCard title={<><Calculator className="h-5 w-5 text-cyan-300" /> 3️⃣ Portfolio Risk Calculator — Try It</>}>
      <div className="grid md:grid-cols-3 gap-4">
        <NumberInput label="Weight 1" value={w1} setValue={setW1} hint="0–1" />
        <NumberInput label="Return 1 (%)" value={r1} setValue={setR1} />
        <NumberInput label="Volatility 1 (%)" value={sd1} setValue={setSd1} />
        <NumberInput label="Weight 2" value={w2} setValue={setW2} hint="0–1" />
        <NumberInput label="Return 2 (%)" value={r2} setValue={setR2} />
        <NumberInput label="Volatility 2 (%)" value={sd2} setValue={setSd2} />
        <NumberInput label="Correlation (ρ)" value={corr} setValue={setCorr} hint="−1 to +1" icon={<Gauge className="h-4 w-4 text-cyan-300" />} />
      </div>
      <div className="grid sm:grid-cols-3 gap-4 mt-4">
        <StatBox label="Portfolio Return" value={`${portfolioReturn.toFixed(2)}%`} />
        <StatBox label="Portfolio Risk" value={`${portfolioSD.toFixed(2)}%`} />
        <StatBox label="Diversification Benefit" value={corr <= 0 ? "High" : corr < 0.5 ? "Moderate" : "Low"} />
      </div>
    </LessonCard>
  )
}

/* 4️⃣ Efficient Frontier */
function EfficientFrontier() {
  return (
    <LessonCard title={<><LineChart className="h-5 w-5 text-purple-400" /> 4️⃣ Efficient Frontier — Concept</>}>
      <p>
        The <strong>Efficient Frontier</strong> shows the optimal portfolios offering the
        highest expected return for each risk level. Portfolios below it are inefficient.
      </p>
      <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-xl p-4 mt-3">
        <p className="text-sm text-blue-100">
          💡 Visualize expected return (Y-axis) vs risk (X-axis). The curve shows the best portfolios.
        </p>
      </div>
    </LessonCard>
  )
}

/* 5️⃣ Asset Behavior Table */
function AssetBehaviorTable() {
  const rows = [
    ["Equity", "High", "High", "Growth, inflation hedge"],
    ["Debt", "Low–Medium", "Low", "Stable income"],
    ["Gold", "Medium", "Low/Negative", "Crisis hedge"],
    ["REITs", "Medium", "Medium", "Income + inflation link"],
    ["International Equity", "High", "Medium", "Diversification"],
  ]
  return (
    <LessonCard title={<><Table className="h-5 w-5 text-emerald-400" /> 5️⃣ Asset Classes — Typical Risk/Return</>}>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse text-blue-100">
          <thead className="bg-white/10 text-blue-200 text-xs uppercase">
            <tr>
              <th className="p-2 text-left">Asset</th>
              <th className="p-2 text-left">Expected Return</th>
              <th className="p-2 text-left">Volatility</th>
              <th className="p-2 text-left">Role</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className="border-b border-white/10">
                <td className="p-2 text-white font-medium">{r[0]}</td>
                <td className="p-2">{r[1]}</td>
                <td className="p-2">{r[2]}</td>
                <td className="p-2">{r[3]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </LessonCard>
  )
}

/* 6️⃣ Practical Allocations */
function PracticalAllocations() {
  return (
    <LessonCard title={<><PieChart className="h-5 w-5 text-green-400" /> 6️⃣ Practical Allocation Styles</>}>
      <div className="grid md:grid-cols-3 gap-4 text-sm text-blue-100">
        {[
          { name: "💼 Conservative", items: ["Equity 20%", "Debt 65%", "Gold 10%", "Cash 5%"] },
          { name: "⚖️ Balanced", items: ["Equity 50%", "Debt 35%", "Gold 10%", "Cash 5%"] },
          { name: "🚀 Aggressive", items: ["Equity 75%", "Debt 15%", "Gold 5%", "Cash 5%"] },
        ].map((plan, i) => (
          <div key={i} className="bg-white/10 border border-white/10 rounded-xl p-4">
            <p className="font-semibold text-white mb-2">{plan.name}</p>
            <ul className="list-disc list-inside space-y-1">{plan.items.map((it) => <li key={it}>{it}</li>)}</ul>
          </div>
        ))}
      </div>
    </LessonCard>
  )
}
/* 7️⃣ Key Takeaways */
function KeyTakeaways() {
  return (
    <LessonCard title={<><Layers3 className="h-5 w-5 text-green-400" /> 7️⃣ Key Takeaways</>}>
      <ul className="list-disc list-inside text-sm space-y-2">
        <li>Diversify among assets with <strong>low correlation</strong>.</li>
        <li>Asset mix drives long-term performance more than individual stock picks.</li>
        <li>Rebalance periodically to maintain target risk-return ratio.</li>
        <li>Efficient frontier shifts as market dynamics change — review yearly.</li>
      </ul>
    </LessonCard>
  )
}

/* 8️⃣ Quiz */
function QuizComponent() {
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [score, setScore] = useState(0)

  const quiz = [
    {
      question: "Diversification benefit is highest when correlation is:",
      options: ["+1", "0", "−1"],
      correct: "−1",
    },
    {
      question: "Efficient frontier shows:",
      options: [
        "All possible portfolios",
        "Only optimal risk-return portfolios",
        "Random portfolios",
      ],
      correct: "Only optimal risk-return portfolios",
    },
    {
      question: "Main goal of MPT is to:",
      options: [
        "Maximize return for given risk",
        "Maximize risk for return",
        "Avoid all risk entirely",
      ],
      correct: "Maximize return for given risk",
    },
  ]

  const handleSelect = (i: number, opt: string) => {
    if (!submitted) setAnswers((p) => ({ ...p, [i]: opt }))
  }

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
    <LessonCard title={<>💬 Quick Quiz</>}>
      <div className="space-y-6">
        {quiz.map((q, qi) => (
          <motion.div
            key={qi}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white/5 p-4 rounded-xl border border-white/10"
          >
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
                  whileHover={!submitted ? { scale: 1.03 } : {}}
                  className={`w-full text-left px-4 py-2 rounded-lg border mb-2 transition-all ${
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
          </motion.div>
        ))}

        {!submitted ? (
          <motion.button
            onClick={handleSubmit}
            whileHover={{ scale: 1.05 }}
            disabled={Object.keys(answers).length < quiz.length}
            className="px-6 py-2 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white disabled:opacity-50"
          >
            Submit
          </motion.button>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center space-y-3"
          >
            <div className="text-lg font-semibold flex justify-center gap-2 text-white">
              {score === quiz.length ? (
                <>
                  <CheckCircle className="text-green-400 h-6 w-6" /> Excellent! 🎯
                </>
              ) : (
                <>
                  <XCircle className="text-yellow-400 h-6 w-6" /> {score}/{quiz.length} correct
                </>
              )}
            </div>
            <button
              onClick={reset}
              className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm flex items-center mx-auto"
            >
              <RotateCcw className="h-4 w-4 mr-2" /> Try Again
            </button>
          </motion.div>
        )}
      </div>
    </LessonCard>
  )
}
