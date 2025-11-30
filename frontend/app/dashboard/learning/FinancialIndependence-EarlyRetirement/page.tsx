"use client"

import React, { useState, useMemo } from "react"
import { motion } from "framer-motion"
import {
  Flame,
  Calculator,
  PiggyBank,
  Briefcase,
  Wallet,
  ChartLine,
  ShieldCheck,
  Target,
  Scale,
  CheckCircle,
  XCircle,
  RotateCcw,
} from "lucide-react"

/**
 * Lesson: Financial Independence & Early Retirement (FIRE Movement)
 * Level: Advanced (Educational Only; SEBI-compliant)
 * File: financialindependence-earlyretirement/page.tsx
 */

export default function Lesson_FinancialIndependenceEarlyRetirement() {
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
          <Flame className="h-8 w-8 text-orange-400" />
          Financial Independence & Early Retirement
        </h1>
        <p className="text-blue-200 text-lg">
          Learn how to achieve financial freedom by designing a life where work becomes optional, not mandatory — using saving, investing, and lifestyle optimization strategies.
        </p>
        <Disclaimer />
      </header>

      {/* 1️⃣ Understanding FIRE */}
      <LessonCard icon={<Target className="h-5 w-5 text-cyan-300" />} title="1️⃣ Understanding the FIRE Movement">
        <ul className="list-disc list-inside text-sm text-blue-100 space-y-1">
          <li><strong>FIRE</strong> = <em>Financial Independence, Retire Early</em> — reaching a point where passive income covers all living expenses.</li>
          <li><strong>Goal:</strong> Create enough invested wealth so that you can live off your portfolio safely without mandatory employment.</li>
          <li><strong>Origin:</strong> Popularized in the US, but adaptable to Indian inflation, expenses, and investment realities.</li>
        </ul>
      </LessonCard>

      {/* 2️⃣ The Math of Financial Independence */}
      <LessonCard icon={<Calculator className="h-5 w-5 text-purple-300" />} title="2️⃣ The Math Behind Financial Independence">
        <div className="grid md:grid-cols-2 gap-4">
          <BulletCard
            title="Core Formula"
            points={[
              "Annual Expenses × 25 = Target Corpus (based on 4% withdrawal rule).",
              "For Indian inflation (~6%), safer withdrawal may be 3.5%–3.8%.",
              "Example: ₹10 lakh annual expense → ₹2.6–2.8 crore FIRE corpus.",
            ]}
          />
          <BulletCard
            title="Key Ratios"
            points={[
              "Savings Rate = (Income – Expenses) / Income.",
              "Faster FIRE = Higher Savings Rate + Higher Returns + Lower Expenses.",
              "Aim for 50–70% savings during accumulation years if possible.",
            ]}
          />
        </div>
      </LessonCard>

      {/* 3️⃣ Types of FIRE */}
      <LessonCard icon={<Wallet className="h-5 w-5 text-emerald-300" />} title="3️⃣ Types of FIRE (Choose Your Path)">
        <div className="grid md:grid-cols-2 gap-4">
          <BulletCard
            title="Lean FIRE"
            points={[
              "Frugal lifestyle, minimal expenses (~₹20–30K/month).",
              "Requires smaller corpus but higher lifestyle discipline.",
              "Popular among solo earners or minimalists.",
            ]}
          />
          <BulletCard
            title="Fat FIRE"
            points={[
              "Higher expense lifestyle with luxuries & comfort.",
              "Requires larger corpus (~₹5–10 crore+).",
              "Usually achieved by high-income professionals or entrepreneurs.",
            ]}
          />
          <BulletCard
            title="Barista FIRE"
            points={[
              "Partial retirement — working part-time for passion or perks.",
              "Eases pressure on investments in early years.",
              "Balances purpose with security.",
            ]}
          />
          <BulletCard
            title="Coast FIRE"
            points={[
              "Invest early, then let compounding grow portfolio while working stress-free.",
              "Can take breaks or shift careers mid-way.",
              "Common among mid-career earners focusing on time freedom.",
            ]}
          />
        </div>
      </LessonCard>

      {/* 4️⃣ FIRE Readiness Calculator */}
      <FireCalculator />

      {/* 5️⃣ Building the FIRE Portfolio */}
      <LessonCard icon={<ChartLine className="h-5 w-5 text-amber-300" />} title="5️⃣ Building a FIRE Portfolio (India-Optimized)">
        <ul className="list-disc list-inside text-sm text-blue-100 space-y-1">
          <li><strong>Core Allocation:</strong> Equity (Index + Flexi Cap) 50–70%, Debt (Gilt, PPF, EPF) 20–40%, Gold/REITs 5–10%.</li>
          <li><strong>Low-cost index funds:</strong> Key to long-term compounding with minimal expense drag.</li>
          <li><strong>Emergency fund:</strong> 6–12 months expenses separate; do not include in FIRE corpus.</li>
          <li><strong>Asset rebalancing:</strong> Annual review to maintain target allocation as per market shifts.</li>
        </ul>
      </LessonCard>

      {/* 6️⃣ Risks, Inflation & Sequence of Returns */}
      <LessonCard icon={<Scale className="h-5 w-5 text-red-300" />} title="6️⃣ Major Risks to FIRE Success">
        <div className="grid md:grid-cols-2 gap-4">
          <BulletCard
            title="Financial Risks"
            points={[
              "Sequence of Returns Risk — early market crashes can erode corpus.",
              "High inflation reduces real returns; review withdrawal rate regularly.",
              "Overestimating returns or underestimating expenses.",
            ]}
          />
          <BulletCard
            title="Personal & Lifestyle Risks"
            points={[
              "Boredom, loss of purpose after retirement.",
              "Healthcare costs — need strong insurance & medical fund.",
              "Family obligations, dependents, or lifestyle inflation over time.",
            ]}
          />
        </div>
      </LessonCard>

      {/* 7️⃣ FIRE in India — Legal, Tax & Reality Check */}
      <LessonCard icon={<Briefcase className="h-5 w-5 text-cyan-300" />} title="7️⃣ FIRE in India — Legal, Tax & Practical Insights">
        <ul className="list-disc list-inside text-sm text-blue-100 space-y-1">
          <li><strong>Taxation:</strong> FIRE doesn’t mean tax-free. LTCG, STCG, dividends, and rental income remain taxable.</li>
          <li><strong>Health Insurance:</strong> Maintain a comprehensive family floater with top-up even post-retirement.</li>
          <li><strong>Withdrawal management:</strong> Use SWP, laddered debt funds, or systematic redemptions from mutual funds.</li>
          <li><strong>Compliance:</strong> Ensure PAN-KYC, nominee, and estate documentation are in place before early retirement.</li>
        </ul>
      </LessonCard>

      {/* 💬 Quick Quiz */}
      <QuizBlock />
    </motion.section>
  )
}

/* ===================== Reusable Blocks ===================== */

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
      Educational only — NeoCred is not a SEBI-registered advisor. Numbers shown are illustrations; verify your plan with a financial planner.
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

function FireCalculator() {
  const [annualExpense, setAnnualExpense] = useState(600000)
  const [withdrawRate, setWithdrawRate] = useState(4)
  const [expectedReturn, setExpectedReturn] = useState(9)
  const [inflation, setInflation] = useState(6)
  const [years, setYears] = useState(15)

  const corpusNeeded = useMemo(() => (annualExpense * 100) / withdrawRate, [annualExpense, withdrawRate])
  const futureExpense = useMemo(() => annualExpense * Math.pow(1 + inflation / 100, years), [annualExpense, inflation, years])
  const futureCorpus = useMemo(() => (futureExpense * 100) / withdrawRate, [futureExpense, withdrawRate])

  return (
    <LessonCard icon={<Calculator className="h-5 w-5 text-cyan-300" />} title="4️⃣ FIRE Readiness Calculator (Illustrative)">
      <div className="grid md:grid-cols-3 gap-4">
        <NumberInput label="Current Annual Expenses (₹)" value={annualExpense} setValue={setAnnualExpense} />
        <NumberInput label="Withdrawal Rate (%)" value={withdrawRate} setValue={setWithdrawRate} />
        <NumberInput label="Expected Return (%)" value={expectedReturn} setValue={setExpectedReturn} />
        <NumberInput label="Inflation Rate (%)" value={inflation} setValue={setInflation} />
        <NumberInput label="Years Until Retirement" value={years} setValue={setYears} />
      </div>

      <div className="grid md:grid-cols-3 gap-4 mt-4">
        <StatBox label="Current FIRE Corpus Needed" value={`₹${fmt(corpusNeeded)}`} />
        <StatBox label={`Future Annual Expense (${years} yrs)`} value={`₹${fmt(futureExpense)}`} />
        <StatBox label="Future FIRE Corpus Needed" value={`₹${fmt(futureCorpus)}`} highlight />
      </div>

      <p className="text-xs text-blue-300 mt-2">
        Illustrative only. Real planning requires cashflow projections, inflation-adjusted returns, and personalized asset allocation.
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
        highlight ? "bg-gradient-to-r from-orange-600/20 to-yellow-600/20" : "bg-white/10"
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
      question: "Which formula helps estimate FIRE corpus?",
      options: [
        "Annual Expense × 25 (4% rule)",
        "Income ÷ Tax Rate",
        "Loan EMI × 12",
        "Monthly Rent × 100",
      ],
      correct: "Annual Expense × 25 (4% rule)",
    },
    {
      question: "Which FIRE type suits a minimalist lifestyle?",
      options: ["Fat FIRE", "Lean FIRE", "Barista FIRE", "Coast FIRE"],
      correct: "Lean FIRE",
    },
    {
      question: "Main risk for early retirees withdrawing from equity corpus?",
      options: [
        "Sequence of Returns Risk",
        "Fixed Deposit Maturity Risk",
        "Gold Price Drop Risk",
        "None of the above",
      ],
      correct: "Sequence of Returns Risk",
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
                      ? "bg-gradient-to-r from-orange-600 to-yellow-600 text-white border-transparent"
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
            className="px-6 py-2 rounded-xl bg-gradient-to-r from-orange-600 to-yellow-600 text-white disabled:opacity-50"
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
