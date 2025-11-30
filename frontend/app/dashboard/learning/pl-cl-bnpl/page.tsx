"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Landmark,
  Wallet,
  CreditCard,
  HandCoins,
  CalendarClock,
  Calculator,
  IndianRupee,
  ShieldCheck,
  CheckCircle,
  XCircle,
  RotateCcw,
  Info,
  BarChart3,
  TrendingUp,
  Target,
  Lightbulb,
  SparklesIcon,
} from "lucide-react"

/**
 * Lesson: Personal Loan vs Credit Line vs BNPL
 * Level: Intermediate (Educational Only, SEBI-compliant)
 */

export default function Lesson_PL_CL_BNPL() {
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
          <HandCoins className="h-8 w-8 text-cyan-400" />
          Personal Loan vs Credit Line vs BNPL
        </h1>
        <p className="text-blue-200 text-lg">
          Understand how each form of short-term credit works — and when (or if) you should use them. 💳
        </p>
        <Disclaimer />
      </header>

      {/* 1️⃣ Concept Overview */}
      <LessonCard title={<div className="flex items-center gap-2"><Info className="h-5 w-5 text-cyan-400" />1️⃣ What Are These Credit Options?</div>}>
        <ul className="list-disc list-inside text-sm space-y-2">
          <li>
            <strong>Personal Loan (PL):</strong> Lump-sum loan disbursed to your account, repaid in fixed EMIs over 1–5 years.
          </li>
          <li>
            <strong>Credit Line (CL):</strong> Flexible borrowing limit — interest applies only on what you use (like an overdraft).
          </li>
          <li>
            <strong>BNPL (Buy Now Pay Later):</strong> Small-ticket, short-term credit for online/offline purchases, usually repaid in 15–90 days.
          </li>
        </ul>
        <p className="text-xs text-blue-300 mt-2">
          Each product has different costs, flexibility, and credit score impact.
        </p>
      </LessonCard>

      {/* 2️⃣ Comparison Table */}
      <LessonCard title={<div className="flex items-center gap-2"><BarChart3 className="h-5 w-5 text-cyan-400" />2️⃣ Comparison Snapshot</div>}>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-blue-100 border-collapse">
            <thead className="bg-white/10 text-blue-200 text-xs uppercase">
              <tr>
                <th className="p-3 border-b border-white/10 text-left">Feature</th>
                <th className="p-3 border-b border-white/10 text-left">Personal Loan</th>
                <th className="p-3 border-b border-white/10 text-left">Credit Line</th>
                <th className="p-3 border-b border-white/10 text-left">BNPL</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Disbursal Type", "Lump sum upfront", "Flexible withdrawals", "Linked to purchases"],
                ["Repayment", "Fixed EMIs", "Flexible, interest on used amount", "0% EMI / single payment"],
                ["Interest Rate (Typical)", "10–18% p.a.", "12–24% p.a.", "0–36% p.a. (after offer)"],
                ["Tenure", "1–5 years", "Ongoing / renewable", "15–90 days"],
                ["Credit Limit", "Fixed loan amount", "Reusable limit", "Linked to merchant / app"],
                ["Best For", "Large one-time needs", "Irregular or short-term use", "Small, frequent spends"],
              ].map((row, i) => (
                <tr key={i} className="border-b border-white/10">
                  <td className="p-3 text-white font-medium">{row[0]}</td>
                  <td className="p-3">{row[1]}</td>
                  <td className="p-3">{row[2]}</td>
                  <td className="p-3">{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </LessonCard>

      {/* 3️⃣ EMI Estimator */}
      <EMICalculator />

      {/* 4️⃣ Cost Comparison */}
      <LessonCard title={<div className="flex items-center gap-2"><IndianRupee className="h-5 w-5 text-cyan-400" />4️⃣ Cost Example — ₹1 Lakh for 12 Months</div>}>
        <ul className="list-disc list-inside text-sm space-y-2">
          <li><strong>Personal Loan @12%:</strong> EMI ≈ ₹8,885, total interest ≈ ₹6,600</li>
          <li><strong>Credit Line @15%:</strong> Interest only when drawn — using ₹50k for 6 months → interest ≈ ₹3,750</li>
          <li><strong>BNPL:</strong> Often 0% for short period; hidden costs if delayed (late fee ₹200–₹1,000)</li>
        </ul>
        <p className="text-xs text-blue-300 mt-2">
          Small differences in usage time and repayment behavior make big differences in cost.
        </p>
      </LessonCard>

      {/* 5️⃣ Credit Score Impact */}
      <LessonCard title={<div className="flex items-center gap-2"><TrendingUp className="h-5 w-5 text-cyan-400" />5️⃣ Credit Score & Reporting</div>}>
        <ul className="list-disc list-inside text-sm space-y-2">
          <li>All three get reported to bureaus (CIBIL, Experian, etc.).</li>
          <li>High utilization or missed BNPL payments can hurt your score.</li>
          <li>Multiple loan enquiries in short time → lowers creditworthiness temporarily.</li>
        </ul>
        <p className="text-xs text-blue-300 mt-2">
          Rule: Borrow less than 40–50% of your total eligible credit.
        </p>
      </LessonCard>

      {/* 6️⃣ Responsible Use */}
      <LessonCard title={<div className="flex items-center gap-2"><Target className="h-5 w-5 text-cyan-400" />6️⃣ When to Use Each</div>}>
        <ul className="list-disc list-inside text-sm space-y-2">
          <li><strong>Personal Loan:</strong> Planned large expenses (education, wedding, renovation).</li>
          <li><strong>Credit Line:</strong> Flexible use (freelancers, variable income, small business needs).</li>
          <li><strong>BNPL:</strong> Occasional e-commerce convenience — avoid revolving.</li>
        </ul>
        <p className="text-xs text-blue-300 mt-2">
          Don’t stack all three — use what fits your repayment capacity.
        </p>
      </LessonCard>

      {/* 7️⃣ Key Takeaways */}
      <LessonCard title={<div className="flex items-center gap-2"><SparklesIcon className="h-5 w-5 text-yellow-400" />📘 Key Takeaways</div>}>
        <ul className="list-disc list-inside text-sm space-y-2">
          <li>All are forms of **short-term credit** — cost depends on usage & repayment behavior.</li>
          <li>Use PL for planned goals, CL for cash-flow gaps, BNPL for small purchases.</li>
          <li>Always repay before due date; late payments are reported to bureaus.</li>
        </ul>
      </LessonCard>

      {/* 8️⃣ Quiz */}
      <LessonCard title="💬 Quick Quiz">
        <QuizComponent />
      </LessonCard>
    </motion.section>
  )
}

/* ======================= Components ======================= */

function LessonCard({ title, children }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white/10 p-6 rounded-2xl border border-white/10 shadow-lg space-y-3"
    >
      <h2 className="text-xl font-semibold text-white">{title}</h2>
      <div className="text-blue-100 text-sm leading-relaxed">{children}</div>
    </motion.div>
  )
}

function Disclaimer() {
  return (
    <p className="text-xs text-yellow-300 flex items-center gap-2 justify-center">
      <ShieldCheck className="h-4 w-4" />
      Educational only — NeoCred is not a SEBI-registered or NBFC lender. No financial recommendations provided.
    </p>
  )
}

/* ======================= EMI Calculator ======================= */
function EMICalculator() {
  const [amount, setAmount] = useState(100000)
  const [rate, setRate] = useState(12)
  const [months, setMonths] = useState(12)

  const r = rate / 12 / 100
  const emi = r > 0 ? (amount * r * Math.pow(1 + r, months)) / (Math.pow(1 + r, months) - 1) : amount / months
  const totalInterest = emi * months - amount

  return (
    <LessonCard title={<div className="flex items-center gap-2"><Calculator className="h-5 w-5 text-cyan-400" />3️⃣ EMI Calculator — Compare Costs</div>}>
      <div className="grid md:grid-cols-3 gap-4">
        <InputBox label="Loan / Credit Used (₹)" value={amount} onChange={setAmount} />
        <InputBox label="Interest Rate (p.a. %)" value={rate} onChange={setRate} />
        <InputBox label="Tenure (months)" value={months} onChange={setMonths} />
      </div>

      <div className="grid md:grid-cols-3 gap-4 mt-4">
        <StatBox label="Monthly EMI" value={`₹${fmt(emi)}`} highlight />
        <StatBox label="Total Interest" value={`₹${fmt(totalInterest)}`} />
        <StatBox label="Total Payment" value={`₹${fmt(amount + totalInterest)}`} />
      </div>
      <p className="text-xs text-blue-300 mt-2">
        Interest applies only to borrowed amount in **credit line**; full loan in **PL**; and short duration in **BNPL**.
      </p>
    </LessonCard>
  )
}

/* ======================= Reusable Inputs ======================= */

function InputBox({ label, value, onChange }: any) {
  return (
    <div className="bg-white/10 rounded-xl p-4 border border-white/10">
      <label className="text-xs text-blue-200 mb-1 block">{label}</label>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full p-2 rounded-lg bg-white/20 border border-white/10 text-white outline-none"
      />
    </div>
  )
}

function StatBox({ label, value, highlight = false }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className={`rounded-xl p-4 border border-white/10 ${highlight ? "bg-gradient-to-r from-cyan-600/20 to-blue-600/20" : "bg-white/10"}`}>
      <div className="text-[11px] uppercase tracking-wide text-blue-200">{label}</div>
      <div className={`text-white font-semibold ${highlight ? "text-lg" : ""}`}>{value}</div>
    </div>
  )
}

/* ======================= Quiz ======================= */
function QuizComponent() {
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [score, setScore] = useState(0)

  const quiz = [
    {
      question: "Which product charges interest only on the amount you use?",
      options: ["Personal Loan", "Credit Line", "BNPL", "All of the above"],
      correct: "Credit Line",
    },
    {
      question: "BNPL is best suited for:",
      options: ["Home renovation", "Online shopping convenience", "Long-term goals", "Emergency fund building"],
      correct: "Online shopping convenience",
    },
    {
      question: "Personal loans generally have:",
      options: ["No fixed EMIs", "Fixed EMIs and tenure", "Variable limit like a credit line", "No impact on credit score"],
      correct: "Fixed EMIs and tenure",
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
    <div className="space-y-6">
      {quiz.map((q, qi) => (
        <motion.div
          key={qi}
          initial={{ opacity: 0, y: 10 }}
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
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full text-left px-4 py-2 rounded-lg border mb-2 transition-all ${
                  isSelected
                    ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white border-transparent"
                    : "bg-white/10 hover:bg-white/20 border-white/10"
                } ${
                  submitted && isCorrect ? "border-green-400 bg-green-500/10" : ""
                } ${
                  submitted && isSelected && !isCorrect
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
          <motion.button
            onClick={reset}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm"
          >
            <RotateCcw className="inline-block h-4 w-4 mr-1" /> Try Again
          </motion.button>
        </motion.div>
      )}
    </div>
  )
}

/* ======================= Helpers ======================= */
function fmt(num: number) {
  return Math.round(num).toLocaleString("en-IN")
}
