"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Landmark,
  PiggyBank,
  Wallet,
  Calendar,
  Banknote,
  CheckCircle,
  XCircle,
  RotateCcw,
  Sparkles,
} from "lucide-react"

/**
 * Lesson: Banking in India — FD, RD, Savings, Current
 */

export default function Lesson_BankingIndia() {
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
          <Landmark className="h-8 w-8 text-cyan-400" /> Banking in India — FD, RD, Savings, Current
        </h1>
        <p className="text-blue-200 text-lg max-w-2xl mx-auto">
          Banking forms the foundation of your financial life.  
          Learn how Savings, FD, RD, and Current Accounts differ — and when to use each for maximum benefit.
        </p>
      </div>

      {/* 1️⃣ Overview of Indian Banking System */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white/10 p-6 rounded-2xl backdrop-blur-lg border border-white/10 shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-white mb-3 flex items-center gap-2"><Landmark className="h-6 w-6 text-green-400" /> 1️⃣ Overview of the Indian Banking System</h2>
        <p className="text-blue-100 leading-relaxed">
          The Indian banking system is regulated by the <strong>Reserve Bank of India (RBI)</strong>.  
          It ensures safety, stability, and smooth flow of money in the economy.
        </p>
        <ul className="list-disc list-inside text-blue-100 mt-3 space-y-2">
          <li><strong>Public Sector Banks:</strong> SBI, Bank of Baroda, Punjab National Bank.</li>
          <li><strong>Private Banks:</strong> HDFC, ICICI, Axis Bank.</li>
          <li><strong>Payments & Small Finance Banks:</strong> Paytm Payments Bank, AU Small Finance Bank.</li>
        </ul>
      </motion.div>

      {/* 2️⃣ Savings Account */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-blue-600/20 to-cyan-600/10 p-6 rounded-2xl border border-white/10 shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-white mb-3 flex items-center gap-2"><Wallet className="h-6 w-6 text-blue-400" /> 2️⃣ Savings Account — Your Daily Banking Partner</h2>
        <p className="text-blue-100 leading-relaxed">
          A <strong>Savings Account</strong> is where you keep your day-to-day money.  
          It’s ideal for storing cash safely while earning some interest.
        </p>
        <ul className="list-disc list-inside text-blue-100 mt-3 space-y-2">
          <li>Interest Rate: 3%–7% annually depending on the bank.</li>
          <li>Access anytime via ATM, UPI, or Internet Banking.</li>
          <li>Best for: salary, digital payments, and emergency fund.</li>
        </ul>
        <p className="mt-3 text-blue-100">
          Popular: <strong>SBI Digital Savings, HDFC InstaAccount, Axis ASAP.</strong>
        </p>
      </motion.div>

      {/* 3️⃣ Fixed Deposit (FD) */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white/10 p-6 rounded-2xl backdrop-blur-lg border border-white/10 shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-white mb-3 flex items-center gap-2"><PiggyBank className="h-6 w-6 text-purple-400" /> 3️⃣ Fixed Deposit (FD) — Stable Returns, No Risk</h2>
        <p className="text-blue-100 leading-relaxed">
          A <strong>Fixed Deposit</strong> locks your money for a fixed tenure (7 days to 10 years) at a guaranteed interest rate.
        </p>
        <ul className="list-disc list-inside text-blue-100 mt-3 space-y-2">
          <li>Interest Rate: 6%–8.25% depending on tenure & bank.</li>
          <li>Penalty for premature withdrawal.</li>
          <li>Senior citizens get +0.50% extra interest.</li>
        </ul>
        <div className="bg-white/5 p-4 rounded-xl mt-4 border border-white/10">
          <p className="text-sm text-blue-100">
            Example: ₹1,00,000 in FD @7% for 1 year = ₹1,07,000 at maturity.
          </p>
        </div>
      </motion.div>

      {/* 4️⃣ Recurring Deposit (RD) */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-cyan-700/20 to-blue-600/20 p-6 rounded-2xl border border-white/10 shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-white mb-3 flex items-center gap-2"><Calendar className="h-6 w-6 text-cyan-400" /> 4️⃣ Recurring Deposit (RD) — Save Monthly, Earn Interest</h2>
        <p className="text-blue-100 leading-relaxed">
          A <strong>Recurring Deposit</strong> lets you invest a fixed amount every month for a set period.  
          It’s perfect for disciplined savings.
        </p>
        <ul className="list-disc list-inside text-blue-100 mt-3 space-y-2">
          <li>Tenure: 6 months to 10 years.</li>
          <li>Interest Rate: Similar to FD (6%–8%).</li>
          <li>Missed payments reduce maturity value.</li>
        </ul>
        <div className="bg-white/5 p-4 rounded-xl mt-4 border border-white/10">
          <p className="text-sm text-blue-100">
            Example: ₹5,000/month for 12 months @7% → Maturity ≈ ₹62,000.
          </p>
        </div>
      </motion.div>

      {/* 5️⃣ Current Account */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white/10 p-6 rounded-2xl backdrop-blur-lg border border-white/10 shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-white mb-3 flex items-center gap-2"><Banknote className="h-6 w-6 text-orange-400" /> 5️⃣ Current Account — For Businesses</h2>
        <p className="text-blue-100 leading-relaxed">
          A <strong>Current Account</strong> is designed for businesses or freelancers with frequent transactions.  
          It offers flexibility but <strong>no interest</strong>.
        </p>
        <ul className="list-disc list-inside text-blue-100 mt-3 space-y-2">
          <li>Unlimited deposits and withdrawals.</li>
          <li>No interest earned on balance.</li>
          <li>Overdraft facility available (borrow against balance).</li>
        </ul>
        <p className="mt-3 text-blue-100">
          Best for: Startups, SMEs, and entrepreneurs with daily cash flow.
        </p>
      </motion.div>

      {/* 6️⃣ Comparison Table */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-blue-800/20 to-cyan-700/20 p-6 rounded-2xl border border-white/10 shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-white mb-3 flex items-center gap-2"><Landmark className="h-6 w-6 text-pink-400" /> 6️⃣ Quick Comparison — FD vs RD vs Savings vs Current</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-blue-100 border-collapse">
            <thead>
              <tr className="border-b border-white/10 text-blue-200">
                <th className="p-2 text-left">Type</th>
                <th className="p-2 text-left">Interest</th>
                <th className="p-2 text-left">Liquidity</th>
                <th className="p-2 text-left">Best For</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="p-2">Savings</td><td className="p-2">3–7%</td><td className="p-2">High</td><td className="p-2">Everyday use</td></tr>
              <tr><td className="p-2">FD</td><td className="p-2">6–8%</td><td className="p-2">Low</td><td className="p-2">Safe returns</td></tr>
              <tr><td className="p-2">RD</td><td className="p-2">6–8%</td><td className="p-2">Medium</td><td className="p-2">Monthly savings</td></tr>
              <tr><td className="p-2">Current</td><td className="p-2">0%</td><td className="p-2">Very High</td><td className="p-2">Business</td></tr>
            </tbody>
          </table>
        </div>
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
          <li>Use Savings Account for regular expenses and UPI.</li>
          <li>FDs are best for risk-free stable growth.</li>
          <li>RDs encourage monthly saving discipline.</li>
          <li>Current Accounts suit businesses — not individuals.</li>
        </ul>
      </motion.div>

      {/* 8️⃣ Quiz & Challenge */}
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
      question: "Which account is best for daily transactions?",
      options: ["Savings", "FD", "RD", "Current"],
      correct: "Savings",
    },
    {
      question: "Which account earns no interest?",
      options: ["Savings", "FD", "Current", "RD"],
      correct: "Current",
    },
    {
      question: "How often do you deposit in an RD?",
      options: ["Once a year", "Every month", "Weekly", "Whenever you want"],
      correct: "Every month",
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
                <CheckCircle className="text-green-400 h-6 w-6" /> Perfect! Banking Master 🎉
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
