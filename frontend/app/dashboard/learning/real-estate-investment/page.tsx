"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import {
  Building2,
  Home,
  LineChart,
  BarChart3,
  Calculator,
  ShieldCheck,
  CheckCircle,
  XCircle,
  RotateCcw,
} from "lucide-react"

/**
 * Lesson: Real Estate Investment Analysis — ROI, IRR, Cash Flow
 * Level: Advanced (Educational Only; SEBI-compliant)
 * File: real-estate-investment.tsx
 */

export default function RealEstateInvestment() {
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [score, setScore] = useState(0)

  const quiz = [
    {
      question: "Which metric accounts for the time value of money in real estate returns?",
      options: ["ROI", "IRR", "Gross Yield", "Payback Period"],
      correct: "IRR",
    },
    {
      question: "What is Net Operating Income (NOI)?",
      options: [
        "Rental Income minus Operating Expenses",
        "Total Project Cost minus ROI",
        "Loan EMI minus Rent",
        "Capital Gain divided by Rent",
      ],
      correct: "Rental Income minus Operating Expenses",
    },
    {
      question: "Which factor reduces your real estate ROI the most if ignored?",
      options: ["Property tax", "Vacancy rate", "Brokerage fee", "Maintenance cost"],
      correct: "Vacancy rate",
    },
  ]

  const handleSelect = (i: number, opt: string) => {
    if (!submitted) setAnswers((prev) => ({ ...prev, [i]: opt }))
  }

  const handleSubmit = () => {
    const s = quiz.filter((q, i) => answers[i] === q.correct).length
    setScore(s)
    setSubmitted(true)
  }

  const reset = () => {
    setAnswers({})
    setSubmitted(false)
    setScore(0)
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-6xl mx-auto space-y-10 text-blue-50"
    >
      {/* Header */}
      <header className="text-center space-y-3">
        <h1 className="text-3xl sm:text-4xl font-bold text-white flex items-center justify-center gap-2">
          <Building2 className="h-8 w-8 text-cyan-400" />
          Real Estate Investment Analysis
        </h1>
        <p className="text-blue-200 text-lg">
          Understand ROI, IRR, and Cash Flow — the key metrics to evaluate real estate investments in India.
        </p>
        <Disclaimer />
      </header>

      {/* 1️⃣ What Makes Real Estate an Investment */}
      <LessonCard icon={<Home className="h-5 w-5 text-cyan-300" />} title="1️⃣ What Makes Real Estate an Investment">
        <p>
          Real estate isn’t just about buying property — it’s about <strong>cash flow, capital appreciation, and leverage</strong>.
          Investors earn from:
        </p>
        <ul className="list-disc list-inside mt-2 text-sm text-blue-100 space-y-1">
          <li>📈 <strong>Capital Appreciation</strong> — rise in property value over time.</li>
          <li>💰 <strong>Rental Yield</strong> — recurring income from tenants.</li>
          <li>⚙️ <strong>Leverage Effect</strong> — returns magnified using borrowed funds.</li>
        </ul>
      </LessonCard>

      {/* 2️⃣ Understanding ROI, IRR & Cash Flow */}
      <LessonCard icon={<Calculator className="h-5 w-5 text-cyan-300" />} title="2️⃣ ROI, IRR, and Cash Flow Explained">
        <div className="grid md:grid-cols-3 gap-4">
          <MetricCard
            title="Return on Investment (ROI)"
            value="(Net Profit ÷ Total Investment) × 100"
            desc="Simple metric to estimate overall profitability. Ignores time value of money."
          />
          <MetricCard
            title="Internal Rate of Return (IRR)"
            value="Discount rate where NPV = 0"
            desc="Accounts for time value of money; ideal for long-term project comparisons."
          />
          <MetricCard
            title="Cash Flow"
            value="Net Rent - (Expenses + EMI)"
            desc="Measures monthly income or deficit from a property investment."
          />
        </div>
      </LessonCard>

      {/* 3️⃣ Components of Cash Flow */}
      <LessonCard icon={<BarChart3 className="h-5 w-5 text-green-300" />} title="3️⃣ Components of Cash Flow">
        <ul className="list-disc list-inside text-sm text-blue-100 space-y-1">
          <li><strong>Gross Rental Income:</strong> Total rent collected from tenants.</li>
          <li><strong>Operating Expenses:</strong> Maintenance, property tax, insurance, etc.</li>
          <li><strong>Financing Costs:</strong> EMIs, loan interest, or mortgage payments.</li>
          <li><strong>Net Cash Flow:</strong> What remains after all outflows — ideally positive.</li>
        </ul>
      </LessonCard>

      {/* 4️⃣ ROI & IRR Comparison */}
      <LessonCard icon={<LineChart className="h-5 w-5 text-emerald-400" />} title="4️⃣ ROI vs IRR — Key Differences">
        <table className="w-full text-sm border-collapse text-blue-100">
          <thead className="bg-white/10 text-blue-200 text-xs uppercase">
            <tr>
              <th className="p-2 border-b border-white/10 text-left">Parameter</th>
              <th className="p-2 border-b border-white/10 text-left">ROI</th>
              <th className="p-2 border-b border-white/10 text-left">IRR</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-white/10">
              <td className="p-2">Time Value of Money</td>
              <td className="p-2">❌ Ignores</td>
              <td className="p-2">✅ Considers</td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="p-2">Use Case</td>
              <td className="p-2">Quick snapshot for single-year returns</td>
              <td className="p-2">Multi-year project or rental investment</td>
            </tr>
            <tr>
              <td className="p-2">Calculation Complexity</td>
              <td className="p-2">Simple arithmetic</td>
              <td className="p-2">Requires iterative computation</td>
            </tr>
          </tbody>
        </table>
      </LessonCard>

      {/* 5️⃣ Common Mistakes */}
      <LessonCard icon={<ShieldCheck className="h-5 w-5 text-amber-400" />} title="5️⃣ Common Mistakes in Real Estate Analysis">
        <ul className="list-disc list-inside text-sm text-blue-100 space-y-1">
          <li>Ignoring <strong>vacancy rates</strong> and <strong>maintenance costs</strong>.</li>
          <li>Not considering <strong>time value of money</strong> for long projects.</li>
          <li>Overestimating appreciation and underestimating property taxes.</li>
          <li>Not including <strong>transaction costs</strong> (stamp duty, registration, etc.).</li>
        </ul>
      </LessonCard>

      {/* 6️⃣ Practical Application */}
      <LessonCard icon={<Building2 className="h-5 w-5 text-purple-400" />} title="6️⃣ Applying the Metrics — Example">
        <p className="text-sm text-blue-100">
          Suppose you bought a flat for ₹60 L. Annual rent is ₹3 L, and yearly expenses total ₹50 K.
        </p>
        <ul className="list-disc list-inside text-sm text-blue-100 mt-2">
          <li><strong>ROI</strong> = (3 L − 0.5 L) ÷ 60 L × 100 = 4.1%</li>
          <li><strong>IRR</strong> = Computed using projected inflows/outflows (typically 8–10%)</li>
          <li><strong>Cash Flow</strong> = Rent − EMI − Expenses = Monthly net inflow or deficit</li>
        </ul>
      </LessonCard>

      {/* 7️⃣ How to Evaluate */}
      <LessonCard icon={<Calculator className="h-5 w-5 text-cyan-400" />} title="7️⃣ How to Evaluate Real Estate Investments">
        <ul className="list-disc list-inside text-sm text-blue-100 space-y-1">
          <li>Compute <strong>ROI, IRR, and Cash Flow</strong> before purchase.</li>
          <li>Include <strong>all hidden costs</strong> — stamp duty, legal fees, renovation.</li>
          <li>Compare with <strong>REITs or other asset classes</strong> for diversification.</li>
          <li>Factor in <strong>liquidity and exit timeline</strong> — property resale can take time.</li>
        </ul>
      </LessonCard>

      {/* 8️⃣ 💬 Quick Quiz */}
      <LessonCard title="💬 Quick Quiz">
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
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center space-y-3">
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
    </motion.section>
  )
}

/* ---------------- Helper Components ---------------- */

function LessonCard({ title, icon, children }: { title: string; icon?: React.ReactNode; children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="bg-white/10 p-6 rounded-2xl border border-white/10 shadow-lg space-y-3"
    >
      <h2 className="text-xl font-semibold text-white flex items-center gap-2">
        {icon} {title}
      </h2>
      <div className="text-blue-100 text-sm leading-relaxed">{children}</div>
    </motion.div>
  )
}

function Disclaimer() {
  return (
    <p className="text-xs text-yellow-300 flex items-center gap-2 justify-center">
      <ShieldCheck className="h-4 w-4" /> Educational only — NeoCred is not a SEBI-registered advisor. Content is for awareness.
    </p>
  )
}

function MetricCard({ title, value, desc }: { title: string; value: string; desc: string }) {
  return (
    <div className="p-4 rounded-xl border border-white/10 bg-white/10">
      <div className="text-white font-semibold mb-1">{title}</div>
      <div className="text-cyan-300 text-sm">{value}</div>
      <p className="text-xs text-blue-200 mt-1">{desc}</p>
    </div>
  )
}
