"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  ShieldCheck,
  Calculator,
  BarChart3,
  TrendingUp,
  IndianRupee,
  ArrowDownUp,
  Coins,
  Wallet,
  Info,
  CheckCircle,
  XCircle,
  RotateCcw,
} from "lucide-react"

/**
 * Lesson: Tax Harvesting & Capital Gains Optimization
 * Level: Advanced (Educational Only; SEBI-compliant)
 */

export default function Lesson_TaxHarvestingCapitalGains() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-5xl mx-auto space-y-10 text-blue-50"
    >
      {/* Header */}
      <header className="text-center space-y-3">
        <h1 className="text-3xl sm:text-4xl font-bold text-white flex items-center justify-center gap-2">
          <Coins className="h-8 w-8 text-cyan-400" />
          Tax Harvesting & Capital Gains Optimization
        </h1>
        <p className="text-blue-200 text-lg">
          Learn how to manage capital gains smartly — by realizing profits strategically to reduce taxes and improve returns.
        </p>
        <Disclaimer />
      </header>

      {/* 1️⃣ Concept Overview */}
      <LessonCard
        icon={<Wallet className="h-5 w-5 text-cyan-300" />}
        title="1️⃣ What is Tax Harvesting?"
      >
        <p>
          Tax harvesting means <strong>selling investments at a gain or loss</strong> to optimize taxes — without changing
          your overall portfolio structure. It’s a legal, smart tax management strategy often used by advanced investors.
        </p>
        <ul className="list-disc list-inside text-sm mt-2 space-y-1">
          <li>
            <strong>Gain harvesting:</strong> Selling long-term equity gains up to ₹1 lakh to utilize the annual LTCG exemption.
          </li>
          <li>
            <strong>Loss harvesting:</strong> Selling loss-making investments to offset taxable gains.
          </li>
          <li>
            After booking, investors can <em>reinvest in the same or similar asset</em> (subject to market risk & wash-sale rules).
          </li>
        </ul>
      </LessonCard>

      {/* 2️⃣ Example Illustration */}
      <LessonCard
        icon={<Calculator className="h-5 w-5 text-emerald-300" />}
        title="2️⃣ Example — LTCG Harvesting in Equity Mutual Funds"
      >
        <p>
          Suppose you invested ₹3,00,000 in an equity mutual fund. After 14 months, its value grew to ₹4,20,000.
        </p>
        <ul className="list-disc list-inside text-sm mt-3 space-y-2">
          <li>Gain = ₹4,20,000 − ₹3,00,000 = ₹1,20,000</li>
          <li>
            LTCG exemption limit = ₹1,00,000 → Tax applies on ₹20,000 @10% = ₹2,000
          </li>
          <li>
            You can sell units worth ₹4,00,000 to book ₹1,00,000 tax-free gains, then reinvest immediately.
          </li>
        </ul>
        <p className="text-xs text-blue-300 mt-3">
          This resets your acquisition cost higher, lowering future taxable gains — without major portfolio change.
        </p>
      </LessonCard>

      {/* 3️⃣ Capital Gains Offsetting */}
      <LessonCard
        icon={<ArrowDownUp className="h-5 w-5 text-yellow-300" />}
        title="3️⃣ Capital Gains Offsetting — How Losses Help Reduce Tax"
      >
        <ul className="list-disc list-inside text-sm space-y-2">
          <li>
            <strong>Short-term losses</strong> can offset both short-term and long-term gains.
          </li>
          <li>
            <strong>Long-term losses</strong> can only offset long-term gains.
          </li>
          <li>
            Unused losses can be <strong>carried forward for 8 years</strong> (if filed on time).
          </li>
        </ul>
        <p className="text-xs text-blue-300 mt-3">
          Always report capital losses in your Income Tax Return to preserve future offset eligibility.
        </p>
      </LessonCard>

      {/* 4️⃣ Interactive Simulator */}
      <TaxHarvestingSimulator />

      {/* 5️⃣ Rules & Cautions */}
      <LessonCard
        icon={<Info className="h-5 w-5 text-yellow-400" />}
        title="5️⃣ Rules & Cautions"
      >
        <ul className="list-disc list-inside text-sm space-y-2">
          <li>No official “wash-sale rule” in India yet, but avoid repurchasing the same stock immediately.</li>
          <li>Reinvest through SIPs or different AMC schemes to maintain exposure safely.</li>
          <li>Track realized and unrealized gains via CAMS/KARVY or your broker dashboard.</li>
          <li>Consult a tax expert before implementing advanced tax harvesting strategies.</li>
        </ul>
      </LessonCard>

      {/* 6️⃣ Key Takeaways */}
      <LessonCard
        icon={<BarChart3 className="h-5 w-5 text-emerald-400" />}
        title="📘 Key Takeaways"
      >
        <ul className="list-disc list-inside text-sm space-y-2">
          <li>Harvest gains/losses yearly for optimal tax efficiency.</li>
          <li>Combine loss harvesting and LTCG exemptions for maximum savings.</li>
          <li>Maintain records — sale/purchase confirmations and capital gain statements.</li>
        </ul>
      </LessonCard>

      {/* 7️⃣ Quick Quiz */}
      <QuizComponent />
    </motion.section>
  )
}

/* ---------------- Reusable Components ---------------- */

function LessonCard({
  title,
  icon,
  children,
}: {
  title: string
  icon?: any
  children: any
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
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
      Educational only — NeoCred is not a SEBI-registered tax or investment advisor.
    </p>
  )
}

/* ========== Tax Harvesting Simulator ========== */
function TaxHarvestingSimulator() {
  const [invest, setInvest] = useState(300000)
  const [current, setCurrent] = useState(420000)
  const [realized, setRealized] = useState(100000)
  const exemption = 100000
  const taxable = Math.max(0, realized - exemption)
  const tax = taxable * 0.1
  const postTax = realized - tax

  return (
    <LessonCard
      icon={<Calculator className="h-5 w-5 text-cyan-300" />}
      title="4️⃣ Tax Harvesting Simulator — Estimate Your Gains"
    >
      <div className="grid md:grid-cols-3 gap-4">
        <InputBox label="Invested Amount (₹)" value={invest} setValue={setInvest} />
        <InputBox label="Current Value (₹)" value={current} setValue={setCurrent} />
        <InputBox label="Gains to Realize (₹)" value={realized} setValue={setRealized} />
      </div>
      <div className="grid sm:grid-cols-3 gap-4 mt-4">
        <StatBox label="Exemption (₹1L Limit)" value={`₹${exemption}`} />
        <StatBox label="Taxable Gains" value={`₹${taxable}`} />
        <StatBox label="Post-Tax Realized" value={`₹${postTax}`} highlight />
      </div>
    </LessonCard>
  )
}

function InputBox({ label, value, setValue }: any) {
  return (
    <div className="bg-white/10 rounded-xl p-4 border border-white/10">
      <label className="text-xs text-blue-200 mb-1 flex items-center gap-2">
        <IndianRupee className="h-4 w-4 text-cyan-300" /> {label}
      </label>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="w-full p-2 rounded-lg bg-white/20 border border-white/10 text-white outline-none"
      />
    </div>
  )
}

function StatBox({ label, value, highlight = false }: any) {
  return (
    <div
      className={`rounded-xl p-4 border border-white/10 ${
        highlight
          ? "bg-gradient-to-r from-cyan-600/20 to-blue-600/20"
          : "bg-white/10"
      }`}
    >
      <div className="text-[11px] uppercase tracking-wide text-blue-200">
        {label}
      </div>
      <div className="text-white font-semibold">{value}</div>
    </div>
  )
}

/* ========== Quiz Section ========== */
function QuizComponent() {
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [score, setScore] = useState(0)

  const quiz = [
    {
      question: "How much LTCG exemption is available per year on equity funds?",
      options: ["₹50,000", "₹1,00,000", "₹2,00,000"],
      correct: "₹1,00,000",
    },
    {
      question: "Short-term losses can offset:",
      options: ["Only LTCG", "Both STCG and LTCG", "Only dividend income"],
      correct: "Both STCG and LTCG",
    },
    {
      question: "Tax harvesting is best done when:",
      options: [
        "You want to exit permanently",
        "You can re-enter to reset acquisition cost",
        "You have no other investments",
      ],
      correct: "You can re-enter to reset acquisition cost",
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
