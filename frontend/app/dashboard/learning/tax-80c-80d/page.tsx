"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Landmark,
  Wallet,
  HeartPulse,
  ShieldCheck,
  Calculator,
  CheckCircle,
  XCircle,
  RotateCcw,
  IndianRupee,
  Info,
  PiggyBank,
  FileText,
  Lightbulb,
} from "lucide-react"

/**
 * Lesson: Tax Planning under Section 80C / 80D
 * Level: Intermediate (Educational Only, SEBI-compliant)
 */

export default function Lesson_Tax80C80D() {
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
          <Landmark className="h-8 w-8 text-cyan-400" />
          Tax Planning under Section 80C & 80D
        </h1>
        <p className="text-blue-200 text-lg">
          Learn how to reduce your tax outgo legally with smart planning under India’s most popular sections. 💼
        </p>
        <Disclaimer />
      </header>

      {/* 1️⃣ What Are 80C and 80D */}
      <LessonCard title={<div className="flex items-center gap-2"><Info className="h-5 w-5 text-cyan-400" />1️⃣ What Are Sections 80C & 80D?</div>}>
        <p>
          The Indian Income Tax Act allows deductions from your taxable income if you invest in or spend on 
          specified financial products and health insurance. These fall primarily under 
          <strong> Section 80C (Investments)</strong> and <strong>Section 80D (Health Insurance)</strong>.
        </p>
        <ul className="list-disc list-inside text-sm space-y-2 mt-2">
          <li><strong>80C:</strong> Save tax by investing up to ₹1.5 lakh per year.</li>
          <li><strong>80D:</strong> Save tax on health insurance premiums up to ₹25,000 (₹50,000 for senior citizens).</li>
        </ul>
      </LessonCard>

      {/* 2️⃣ 80C Investment Options */}
      <LessonCard title={<div className="flex items-center gap-2"><PiggyBank className="h-5 w-5 text-cyan-400" />2️⃣ Eligible Investments under Section 80C</div>}>
        <p>
          Here are common investments and payments that qualify for deduction under Section 80C (limit ₹1.5 lakh):
        </p>
        <div className="grid md:grid-cols-2 gap-5 mt-3">
          <TaxCard title="Public Provident Fund (PPF)" desc="15-year govt-backed scheme; returns tax-free (~7.1%)." />
          <TaxCard title="Employees’ Provident Fund (EPF)" desc="Automatically deducted from salary; employer also contributes." />
          <TaxCard title="Equity Linked Savings Scheme (ELSS)" desc="Mutual fund with 3-year lock-in; higher returns potential." />
          <TaxCard title="National Savings Certificate (NSC)" desc="Post office scheme with fixed 5-year tenure." />
          <TaxCard title="Sukanya Samriddhi Yojana (SSY)" desc="For girl child; 8%+ return; maturity at age 21." />
          <TaxCard title="Home Loan Principal Repayment" desc="Principal part of EMI qualifies for deduction." />
          <TaxCard title="Life Insurance Premiums" desc="For self, spouse, children — policy must meet eligibility." />
          <TaxCard title="Tuition Fees (for children)" desc="Up to 2 children, recognized school/institution only." />
        </div>
      </LessonCard>

      {/* 3️⃣ 80D - Health Insurance Benefits */}
      <LessonCard title={<div className="flex items-center gap-2"><HeartPulse className="h-5 w-5 text-red-400" />3️⃣ Section 80D — Health Insurance Deductions</div>}>
        <p>Deduction for premiums paid for medical insurance:</p>
        <table className="w-full text-left border-collapse text-sm text-blue-100 mt-3">
          <thead className="bg-white/10 text-blue-200 uppercase text-xs">
            <tr>
              <th className="p-3 border-b border-white/10">Category</th>
              <th className="p-3 border-b border-white/10">Deduction Limit</th>
              <th className="p-3 border-b border-white/10">Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-white/10">
              <td className="p-3 text-white">Self + Family (below 60)</td>
              <td className="p-3">₹25,000</td>
              <td className="p-3">Includes spouse and dependent children</td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="p-3 text-white">Parents (below 60)</td>
              <td className="p-3">₹25,000</td>
              <td className="p-3">If you pay for their policy</td>
            </tr>
            <tr>
              <td className="p-3 text-white">Parents (60+ years)</td>
              <td className="p-3">₹50,000</td>
              <td className="p-3">Senior citizens get higher limit</td>
            </tr>
          </tbody>
        </table>
        <p className="text-xs text-blue-300 mt-3">
          If both taxpayer and parents are above 60 → max deduction = ₹1,00,000.
        </p>
      </LessonCard>

      {/* 4️⃣ Example */}
      <LessonCard title={<div className="flex items-center gap-2"><FileText className="h-5 w-5 text-cyan-400" />4️⃣ Example: Smart Tax Planning</div>}>
        <p>
          <strong>Rohit</strong> invests ₹1,00,000 in ELSS, pays ₹20,000 towards life insurance, and ₹25,000 for family health insurance.
        </p>
        <ul className="list-disc list-inside text-sm mt-3 space-y-1">
          <li>Total 80C Deduction = ₹1,20,000</li>
          <li>Total 80D Deduction = ₹25,000</li>
          <li><strong>Total Tax Benefit = ₹1,45,000</strong></li>
        </ul>
        <p className="text-xs text-blue-300 mt-2">
          Assuming 20% tax slab → Rohit saves ₹29,000 in taxes while building wealth and protection.
        </p>
      </LessonCard>

      {/* 5️⃣ Calculator */}
      <TaxCalculator />

      {/* 6️⃣ Key Takeaways */}
      <LessonCard title={<div className="flex items-center gap-2"><Lightbulb className="h-5 w-5 text-green-400" />📘 Key Takeaways</div>}>
        <ul className="list-disc list-inside text-sm space-y-2">
          <li>Use 80C for long-term savings and 80D for health protection.</li>
          <li>Combine tax benefits smartly — aim for both investment and insurance coverage.</li>
          <li>Don’t invest only for tax saving — align with your goals.</li>
        </ul>
      </LessonCard>

      {/* 7️⃣ Quiz */}
      <LessonCard title="💬 Quick Quiz">
        <QuizComponent />
      </LessonCard>
    </motion.section>
  )
}

/* ======================= Reusable Components ======================= */

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
      Educational only — NeoCred is not a SEBI-registered or tax advisory platform.
    </p>
  )
}

function TaxCard({ title, desc }: any) {
  return (
    <div className="bg-white/5 p-4 rounded-xl border border-white/10">
      <h3 className="text-white font-semibold text-base mb-1">{title}</h3>
      <p className="text-blue-200 text-sm">{desc}</p>
    </div>
  )
}

/* ======================= Tax Calculator ======================= */
function TaxCalculator() {
  const [invest80C, setInvest80C] = useState(100000)
  const [health80D, setHealth80D] = useState(20000)
  const [taxRate, setTaxRate] = useState(20)

  const totalDeduction = Math.min(invest80C, 150000) + Math.min(health80D, 50000)
  const taxSaved = (totalDeduction * taxRate) / 100

  return (
    <LessonCard title={<div className="flex items-center gap-2"><Calculator className="h-5 w-5 text-cyan-400" />5️⃣ Estimate Your Tax Savings (Simplified)</div>}>
      <div className="grid md:grid-cols-3 gap-4">
        <InputBox label="Investment (80C) ₹" value={invest80C} onChange={setInvest80C} />
        <InputBox label="Health Premium (80D) ₹" value={health80D} onChange={setHealth80D} />
        <InputBox label="Tax Rate (%)" value={taxRate} onChange={setTaxRate} />
      </div>

      <div className="mt-5 rounded-xl bg-white/10 border border-white/10 p-4 text-center">
        <p className="text-blue-200 text-sm mb-1">Approx. Annual Tax Saved</p>
        <p className="text-white text-2xl font-semibold">
          ₹{Math.round(taxSaved).toLocaleString("en-IN")}
        </p>
      </div>
      <p className="text-xs text-blue-300 mt-2 text-center">
        Note: Limits differ for senior citizens & health check-ups. Consult a CA for personalized guidance.
      </p>
    </LessonCard>
  )
}

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

/* ======================= Quiz ======================= */
function QuizComponent() {
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [score, setScore] = useState(0)

  const quiz = [
    {
      question: "What is the maximum deduction allowed under Section 80C?",
      options: ["₹1,00,000", "₹1,50,000", "₹2,00,000", "₹50,000"],
      correct: "₹1,50,000",
    },
    {
      question: "Which of these qualifies for deduction under 80D?",
      options: [
        "Mutual Fund Investment",
        "Life Insurance Premium",
        "Health Insurance Premium",
        "Home Loan Principal",
      ],
      correct: "Health Insurance Premium",
    },
    {
      question: "What’s the 80D limit for senior citizens’ health insurance?",
      options: ["₹25,000", "₹40,000", "₹50,000", "₹75,000"],
      correct: "₹50,000",
    },
  ]

  const handleSelect = (qIndex: number, opt: string) => {
    if (!submitted) setAnswers((prev) => ({ ...prev, [qIndex]: opt }))
  }

  const handleSubmit = () => {
    const correctCount = quiz.filter((q, i) => answers[i] === q.correct).length
    setScore(correctCount)
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
