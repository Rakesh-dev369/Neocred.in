"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Landmark,
  Banknote,
  Calculator,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  XCircle,
  RotateCcw,
  Sparkles,
  Home,
  Car,
} from "lucide-react"

/**
 * Lesson: Loans & EMIs — What You Should Know
 */

export default function Lesson_LoansEMIs() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto space-y-10 text-blue-50"
    >
      {/* Header */}
      <div className="text-center space-y-3">
        <h1 className="text-3xl sm:text-4xl font-bold text-white flex items-center justify-center gap-2">
          <Landmark className="h-8 w-8 text-cyan-400" /> Loans & EMIs — What You Should Know
        </h1>
        <p className="text-blue-200 text-lg max-w-2xl mx-auto">
          Loans help you achieve dreams faster — buying a home, vehicle, or education —  
          but only if you understand <strong>how EMIs, interest, and hidden charges</strong> really work.
        </p>
      </div>

      {/* 1️⃣ What is a Loan? */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white/10 p-6 rounded-2xl backdrop-blur-lg border border-white/10 shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-white mb-3 flex items-center gap-2"><Banknote className="h-6 w-6 text-green-400" /> 1️⃣ What is a Loan?</h2>
        <p className="text-blue-100 leading-relaxed">
          A <strong>loan</strong> is money borrowed from a bank or financial institution that you repay over time with interest.  
          It allows you to purchase something today and pay for it gradually — in <strong>EMIs (Equated Monthly Instalments)</strong>.
        </p>
        <div className="bg-white/5 p-4 rounded-xl mt-4 border border-white/10 text-sm text-blue-100">
          Example: You take a ₹5,00,000 car loan at 10% interest for 5 years → pay ₹10,624 monthly as EMI.
        </div>
      </motion.div>

      {/* 2️⃣ Types of Loans in India */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-blue-800/20 to-cyan-700/20 p-6 rounded-2xl border border-white/10 shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-white mb-3 flex items-center gap-2"><Home className="h-6 w-6 text-blue-400" /> 2️⃣ Common Types of Loans in India</h2>
        <ul className="list-disc list-inside text-blue-100 space-y-2">
          <li><strong>Personal Loan:</strong> Unsecured loan for expenses like travel, wedding, etc.</li>
          <li><strong>Home Loan:</strong> For purchasing or constructing property (tax benefits under Sec 80C & 24).</li>
          <li><strong>Auto Loan:</strong> For buying vehicles (fixed interest, 3–7 years).</li>
          <li><strong>Education Loan:</strong> Covers tuition, living expenses for studies (moratorium period available).</li>
          <li><strong>Gold Loan / Secured Loan:</strong> Backed by collateral, usually lower interest.</li>
        </ul>
      </motion.div>

      {/* 3️⃣ Understanding EMIs */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white/10 p-6 rounded-2xl backdrop-blur-lg border border-white/10 shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-white mb-3 flex items-center gap-2"><Calculator className="h-6 w-6 text-purple-400" /> 3️⃣ What is an EMI?</h2>
        <p className="text-blue-100 leading-relaxed">
          <strong>EMI (Equated Monthly Instalment)</strong> is the fixed amount you pay every month  
          to repay your loan — it includes both **principal** and **interest**.
        </p>
        <div className="bg-white/5 p-4 rounded-xl mt-4 border border-white/10 text-sm text-blue-100">
          <strong>EMI Formula:</strong>  
          EMI = [P × R × (1 + R)^N] / [(1 + R)^N – 1]  
          <br />
          where P = Principal, R = Monthly Interest (annual rate/12/100), N = Tenure in months
        </div>
        <p className="text-blue-100 mt-3">
          Example: ₹5L loan @ 10% for 60 months → EMI ≈ ₹10,624.
        </p>
      </motion.div>

      {/* 4️⃣ Amortization Table */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-blue-900/20 to-cyan-800/20 p-6 rounded-2xl border border-white/10 shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-white mb-3 flex items-center gap-2"><TrendingUp className="h-6 w-6 text-orange-400" /> 4️⃣ EMI Breakdown Example (₹5L @ 10% for 5 yrs)</h2>
        <table className="w-full text-sm text-blue-100 border-collapse">
          <thead>
            <tr className="border-b border-white/10 text-blue-200">
              <th className="p-2 text-left">Year</th>
              <th className="p-2 text-left">Principal (₹)</th>
              <th className="p-2 text-left">Interest (₹)</th>
              <th className="p-2 text-left">Total Payment (₹)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="p-2">1</td><td className="p-2">86,000</td><td className="p-2">42,000</td><td className="p-2">1,28,000</td></tr>
            <tr><td className="p-2">2</td><td className="p-2">95,000</td><td className="p-2">33,000</td><td className="p-2">1,28,000</td></tr>
            <tr><td className="p-2">3</td><td className="p-2">1,05,000</td><td className="p-2">23,000</td><td className="p-2">1,28,000</td></tr>
            <tr><td className="p-2">4</td><td className="p-2">1,15,000</td><td className="p-2">13,000</td><td className="p-2">1,28,000</td></tr>
            <tr><td className="p-2">5</td><td className="p-2">1,25,000</td><td className="p-2">3,000</td><td className="p-2">1,28,000</td></tr>
          </tbody>
        </table>
        <p className="text-blue-100 mt-3">
          Total repayment = ₹6,40,000 → Interest cost = ₹1,40,000.
        </p>
      </motion.div>

      {/* 5️⃣ Hidden Charges & Risks */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white/10 p-6 rounded-2xl backdrop-blur-lg border border-white/10 shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-white mb-3 flex items-center gap-2">
          <AlertTriangle className="h-6 w-6 text-red-400" /> 5️⃣ Hidden Costs & Risks
        </h2>
        <ul className="list-disc list-inside text-blue-100 space-y-2">
          <li>📄 Processing fees (0.5–2% of loan amount).</li>
          <li>⚠️ Prepayment penalties if closed early.</li>
          <li>📅 Late payment charges — ₹500–₹1000/month.</li>
          <li>💳 Missed EMIs → Credit score drops drastically.</li>
        </ul>
      </motion.div>

      {/* 6️⃣ Smart Borrowing Tips */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-blue-700/20 to-cyan-700/20 p-6 rounded-2xl border border-white/10 shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-white mb-3 flex items-center gap-2">
          <Landmark className="h-6 w-6 text-cyan-400" /> 6️⃣ Smart Borrowing Tips (NeoCred Recommends)
        </h2>
        <ul className="list-disc list-inside text-blue-100 space-y-2">
          <li>Borrow only what you can comfortably repay (EMIs ≤ 40% of income).</li>
          <li>Compare loan offers — check APR, not just interest rate.</li>
          <li>Avoid short-term high-interest loans (BNPL, payday).</li>
          <li>Use EMI calculators before applying.</li>
        </ul>
      </motion.div>

      {/* 7️⃣ Key Takeaways */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white/10 p-6 rounded-2xl backdrop-blur-lg border border-white/10 shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-white mb-3 flex items-center gap-2"><Sparkles className="h-6 w-6 text-yellow-400" /> 📘 Key Takeaways</h2>
        <ul className="list-disc list-inside text-blue-100 space-y-2">
          <li>Loans can build assets — if managed wisely.</li>
          <li>Always check EMI affordability before borrowing.</li>
          <li>Hidden costs matter — processing, prepayment, penalties.</li>
          <li>Timely EMIs = strong credit profile for future loans.</li>
        </ul>
      </motion.div>

      {/* 8️⃣ Quiz Section */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white/10 p-6 rounded-2xl backdrop-blur-lg border border-white/10 shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-white mb-3">💬 Quick Quiz & Challenge</h2>
        <QuizComponent />
      </motion.div>
    </motion.section>
  )
}

/* ---------------------------
   Quiz Component
---------------------------- */
function QuizComponent() {
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [score, setScore] = useState(0)

  const quiz = [
    {
      question: "What does EMI stand for?",
      options: [
        "Equal Monthly Income",
        "Equated Monthly Instalment",
        "Estimated Money Interest",
        "Equal Mortgage Interest",
      ],
      correct: "Equated Monthly Instalment",
    },
    {
      question: "If your EMI is missed for a month, what happens?",
      options: [
        "Loan amount reduces",
        "Credit score drops",
        "Interest is waived off",
        "EMI auto-adjusts",
      ],
      correct: "Credit score drops",
    },
    {
      question: "What should your total EMIs ideally be under?",
      options: ["20% of income", "40% of income", "60% of income", "80% of income"],
      correct: "40% of income",
    },
  ]

  const handleSelect = (qIndex: number, option: string) => {
    if (!submitted) setAnswers((prev) => ({ ...prev, [qIndex]: option }))
  }

  const handleSubmit = () => {
    let correctCount = 0
    quiz.forEach((q, i) => {
      if (answers[i] === q.correct) correctCount++
    })
    setScore(correctCount)
    setSubmitted(true)
  }

  const handleReset = () => {
    setAnswers({})
    setSubmitted(false)
    setScore(0)
  }

  return (
    <div className="space-y-6 text-blue-100">
      {quiz.map((q, qIndex) => (
        <motion.div
          key={qIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: qIndex * 0.08 }}
          className="bg-white/5 p-4 rounded-xl border border-white/10"
        >
          <p className="font-medium mb-3">Q{qIndex + 1}: {q.question}</p>
          <div className="space-y-2">
            {q.options.map((option, i) => {
              const isSelected = answers[qIndex] === option
              const isCorrect = option === q.correct

              return (
                <motion.button
                  key={i}
                  onClick={() => handleSelect(qIndex, option)}
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
          disabled={Object.keys(answers).length < quiz.length}
          className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-2 rounded-xl text-sm font-medium disabled:opacity-50"
        >
          Submit Answers
        </motion.button>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4"
        >
          <div className="flex justify-center items-center gap-2 text-lg font-semibold">
            {score === quiz.length ? (
              <>
                <CheckCircle className="text-green-400 h-6 w-6" /> Perfect! You understand loans & EMIs 🎉
              </>
            ) : (
              <>
                <XCircle className="text-yellow-400 h-6 w-6" /> You got {score}/{quiz.length} correct.
              </>
            )}
          </div>
          <button
            onClick={handleReset}
            className="flex items-center justify-center mx-auto text-sm bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg"
          >
            <RotateCcw className="h-4 w-4 mr-2" /> Try Again
          </button>
        </motion.div>
      )}
    </div>
  )
}
