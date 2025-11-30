"use client"

import React, { useState, useMemo } from "react"
import { motion } from "framer-motion"
import {
  TrendingUp,
  Layers,
  CalendarRange,
  Calculator,
  Target,
  ShieldCheck,
  Scale,
  Brain,
  CheckCircle,
  XCircle,
  RotateCcw,
  Wallet,
  BarChart,
} from "lucide-react"

/**
 * Lesson: Building a Long-Term Investment Strategy (5–20 years)
 * Level: Advanced (Educational Only; SEBI-compliant)
 * File: long-term-investment-strategy/page.tsx
 */

export default function Lesson_LongTermInvestmentStrategy() {
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
          <TrendingUp className="h-8 w-8 text-emerald-400" />
          Building a Long-Term Investment Strategy
        </h1>
        <p className="text-blue-200 text-lg">
          Learn how to design a portfolio for compounding growth, minimize risk, and achieve financial goals across 5–20 years using disciplined and diversified investing.
        </p>
        <Disclaimer />
      </header>

      {/* 1️⃣ Why Long-Term Investing Works */}
      <LessonCard icon={<CalendarRange className="h-5 w-5 text-cyan-300" />} title="1️⃣ Why Long-Term Investing Works">
        <ul className="list-disc list-inside text-sm text-blue-100 space-y-1">
          <li><strong>Time = Edge:</strong> The longer you stay invested, the more compounding smooths volatility and amplifies growth.</li>
          <li><strong>Power of patience:</strong> Markets reward long-term behavior — not short-term predictions.</li>
          <li><strong>Wealth generation:</strong> 80–90% of wealth creation comes from time in market, not timing the market.</li>
        </ul>
      </LessonCard>

      {/* 2️⃣ Defining Goals & Time Horizon */}
      <LessonCard icon={<Target className="h-5 w-5 text-purple-300" />} title="2️⃣ Defining Goals & Time Horizon">
        <div className="grid md:grid-cols-2 gap-4">
          <BulletCard
            title="Short-Term Goals (0–5 years)"
            points={[
              "Emergency fund, car, vacation, small home renovation.",
              "Focus on capital preservation (FDs, Liquid Funds, Short-Term Debt).",
            ]}
          />
          <BulletCard
            title="Medium-Term Goals (5–10 years)"
            points={[
              "Higher education, down payment, business setup.",
              "Balanced allocation between equity (40–60%) and debt (40–60%).",
            ]}
          />
          <BulletCard
            title="Long-Term Goals (10–20+ years)"
            points={[
              "Retirement, wealth building, children’s future corpus.",
              "Higher equity exposure (60–80%) for compounding advantage.",
            ]}
          />
        </div>
      </LessonCard>

      {/* 3️⃣ Strategic Asset Allocation */}
      <LessonCard icon={<Layers className="h-5 w-5 text-amber-300" />} title="3️⃣ Strategic Asset Allocation — The Core of Long-Term Planning">
        <ul className="list-disc list-inside text-sm text-blue-100 space-y-1">
          <li><strong>Asset classes:</strong> Equity, Debt, Gold, Real Estate, International Diversification.</li>
          <li><strong>Dynamic vs Strategic:</strong> Strategic = stable allocation; Dynamic = adjusts based on valuation or macro trends.</li>
          <li><strong>Thumb rule:</strong> (100 − Age) = % of Equity Exposure (approximation).</li>
          <li>For a 30-year-old → 70% Equity, 25% Debt, 5% Gold/REITs.</li>
        </ul>
      </LessonCard>

      {/* 4️⃣ Compounding & SIP Discipline */}
      <LessonCard icon={<Wallet className="h-5 w-5 text-green-300" />} title="4️⃣ Compounding & SIP Discipline">
        <div className="grid md:grid-cols-2 gap-4">
          <BulletCard
            title="How Compounding Builds Wealth"
            points={[
              "Earnings generate more earnings over time (snowball effect).",
              "Example: ₹10,000/month @12% for 20 years → ~₹98 lakh.",
              "Missing early years reduces final corpus drastically.",
            ]}
          />
          <BulletCard
            title="SIP Discipline"
            points={[
              "Invest regularly irrespective of market mood.",
              "Step-up SIPs annually by 10–15% to match income growth.",
              "Avoid stopping SIPs during market corrections — that’s when units are cheaper.",
            ]}
          />
        </div>
      </LessonCard>

      {/* 5️⃣ Risk Management & Review */}
      <LessonCard icon={<Scale className="h-5 w-5 text-red-300" />} title="5️⃣ Risk Management & Periodic Review">
        <ul className="list-disc list-inside text-sm text-blue-100 space-y-1">
          <li><strong>Diversify:</strong> Across sectors, geographies, and instruments.</li>
          <li><strong>Rebalance:</strong> Once a year to restore original asset mix.</li>
          <li><strong>Insurance:</strong> Protect income sources — term & health cover are essential shields.</li>
          <li><strong>Don’t chase returns:</strong> Stick to process, not noise.</li>
        </ul>
      </LessonCard>

      {/* 6️⃣ Goal-Based Growth Calculator */}
      <GrowthCalculator />

      {/* 7️⃣ Behavioral Discipline & Common Mistakes */}
      <LessonCard icon={<Brain className="h-5 w-5 text-rose-300" />} title="7️⃣ Behavioral Discipline & Common Mistakes">
        <div className="grid md:grid-cols-2 gap-4">
          <BulletCard
            title="Behavioral Biases"
            points={[
              "Recency bias — judging returns based on recent trends.",
              "Loss aversion — fear of short-term dips leads to poor timing.",
              "Overconfidence — overtrading or chasing ‘hot’ themes.",
            ]}
          />
          <BulletCard
            title="Avoid These Mistakes"
            points={[
              "Frequent portfolio churn.",
              "Ignoring tax efficiency.",
              "Following social media ‘tips’ without research.",
              "Not aligning portfolio to goals or risk profile.",
            ]}
          />
        </div>
      </LessonCard>

      {/* 💬 Quick Quiz */}
      <QuizBlock />
    </motion.section>
  )
}

/* ===================== Reusable Components ===================== */

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
      <ShieldCheck className="h-4 w-4" />
      Educational only — NeoCred is not a SEBI-registered advisor. This is general financial education, not personalized advice.
    </p>
  )
}

function BulletCard({ title, points }: { title: string; points: string[] }) {
  return (
    <div className="rounded-xl p-4 border border-white/10 bg-white/10">
      <div className="text-white font-semibold mb-1">{title}</div>
      <ul className="list-disc list-inside text-sm text-blue-100 space-y-1">
        {points.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </div>
  )
}

/* ===================== Calculator ===================== */

function GrowthCalculator() {
  const [monthlyInvestment, setMonthlyInvestment] = useState(10000)
  const [years, setYears] = useState(15)
  const [expectedReturn, setExpectedReturn] = useState(10)

  const futureValue = useMemo(() => {
    const r = expectedReturn / 100 / 12
    const n = years * 12
    return monthlyInvestment * ((Math.pow(1 + r, n) - 1) / r) * (1 + r)
  }, [monthlyInvestment, years, expectedReturn])

  return (
    <LessonCard icon={<Calculator className="h-5 w-5 text-cyan-300" />} title="6️⃣ Goal-Based Growth Calculator (Illustrative)">
      <div className="grid md:grid-cols-3 gap-4">
        <NumberInput label="Monthly Investment (₹)" value={monthlyInvestment} setValue={setMonthlyInvestment} />
        <NumberInput label="Investment Horizon (years)" value={years} setValue={setYears} />
        <NumberInput label="Expected Return (%)" value={expectedReturn} setValue={setExpectedReturn} />
      </div>

      <div className="grid md:grid-cols-3 gap-4 mt-4">
        <StatBox label="Final Corpus (est.)" value={`₹${fmt(futureValue)}`} highlight />
        <StatBox label="Total Invested" value={`₹${fmt(monthlyInvestment * 12 * years)}`} />
        <StatBox label="Total Growth" value={`₹${fmt(futureValue - monthlyInvestment * 12 * years)}`} />
      </div>

      <p className="text-xs text-blue-300 mt-2">
        Based on SIP future value formula; compounding works best when you stay invested and avoid emotional withdrawals.
      </p>
    </LessonCard>
  )
}

function NumberInput({ label, value, setValue }: { label: string; value: number; setValue: (v: number) => void }) {
  return (
    <div className="bg-white/10 rounded-xl p-4 border border-white/10">
      <label className="text-xs text-blue-200 mb-1 block">{label}</label>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="w-full p-2 rounded-lg bg-white/20 border border-white/10 text-white outline-none"
      />
    </div>
  )
}

function StatBox({ label, value, highlight = false }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div
      className={`rounded-xl p-4 border border-white/10 ${
        highlight ? "bg-gradient-to-r from-emerald-600/20 to-teal-600/20" : "bg-white/10"
      }`}
    >
      <div className="text-[11px] uppercase tracking-wide text-blue-200">{label}</div>
      <div className={`text-white font-semibold ${highlight ? "text-lg" : ""}`}>{value}</div>
    </div>
  )
}

/* ===================== Quiz ===================== */

function QuizBlock() {
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [score, setScore] = useState(0)

  const quiz = [
    {
      question: "What’s the biggest advantage of long-term investing?",
      options: [
        "Predicting short-term stock prices",
        "Leveraging compounding & time to smooth volatility",
        "Avoiding all risk entirely",
        "Guaranteed returns every year",
      ],
      correct: "Leveraging compounding & time to smooth volatility",
    },
    {
      question: "How often should you rebalance your long-term portfolio?",
      options: ["Every week", "Every year or during large deviations", "Every month", "Never"],
      correct: "Every year or during large deviations",
    },
    {
      question: "For a 30-year-old investor, an ideal starting allocation could be:",
      options: ["90% debt, 10% equity", "70% equity, 25% debt, 5% gold", "All real estate", "100% gold ETFs"],
      correct: "70% equity, 25% debt, 5% gold",
    },
  ]

  const select = (i: number, opt: string) => {
    if (!submitted) setAnswers((p) => ({ ...p, [i]: opt }))
  }

  const submit = () => {
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
                  onClick={() => select(qi, opt)}
                  disabled={submitted}
                  whileHover={!submitted ? { scale: 1.03 } : {}}
                  className={`w-full text-left px-4 py-2 rounded-lg border mb-2 transition-all ${
                    isSelected
                      ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white border-transparent"
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
            onClick={submit}
            whileHover={{ scale: 1.05 }}
            disabled={Object.keys(answers).length < quiz.length}
            className="px-6 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white disabled:opacity-50"
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
  )
}

/* ===================== Utils ===================== */

function fmt(n: number) {
  return n.toLocaleString("en-IN", { maximumFractionDigits: 0 })
}
