"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Shield,
  Wallet,
  PiggyBank,
  AlertTriangle,
  Calculator,
  CheckCircle,
  XCircle,
  RotateCcw,
  Sparkles,
} from "lucide-react"

/**
 * Lesson: Emergency Fund — Why and How Much
 */

export default function Lesson_EmergencyFund() {
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
          <Shield className="h-8 w-8 text-cyan-400" /> Emergency Fund — Why and How Much
        </h1>
        <p className="text-blue-200 text-lg max-w-2xl mx-auto">
          Your safety cushion against life’s surprises — job loss, medical emergencies, or sudden expenses.  
          Learn how to build it smartly and stay financially stress-free.
        </p>
      </div>

      {/* 1️⃣ Why You Need an Emergency Fund */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white/10 p-6 rounded-2xl backdrop-blur-lg border border-white/10 shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-white mb-3 flex items-center gap-2"><Shield className="h-6 w-6 text-green-400" /> 1️⃣ Why You Need an Emergency Fund</h2>
        <p className="text-blue-100 leading-relaxed">
          Life is unpredictable — layoffs, medical bills, or car repairs can happen anytime.  
          Without a financial cushion, such shocks force people to borrow or swipe credit cards, leading to debt traps.
        </p>
        <p className="mt-3 text-blue-100">
          An <strong>Emergency Fund</strong> gives peace of mind, ensures stability, and helps you avoid breaking long-term investments during crises.
        </p>
      </motion.div>

      {/* 2️⃣ When Should You Use It */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-blue-600/20 to-cyan-600/10 p-6 rounded-2xl border border-white/10 shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-white mb-3 flex items-center gap-2"><AlertTriangle className="h-6 w-6 text-red-400" /> 2️⃣ When Should You Use It?</h2>
        <ul className="list-disc list-inside text-blue-100 space-y-2">
          <li>Job loss or income disruption 💼</li>
          <li>Medical emergencies 🏥</li>
          <li>Unexpected travel for family reasons 🚗</li>
          <li>Major home or vehicle repairs 🔧</li>
        </ul>
        <p className="mt-3 text-blue-100">
          Avoid using it for wants like new gadgets, parties, or travel — that’s what your savings/investment budget is for.
        </p>
      </motion.div>

      {/* 3️⃣ How Much Should You Save */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white/10 p-6 rounded-2xl backdrop-blur-lg border border-white/10 shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-white mb-3 flex items-center gap-2"><Calculator className="h-6 w-6 text-purple-400" /> 3️⃣ How Much Should You Save?</h2>
        <p className="text-blue-100 leading-relaxed">
          The general rule: save <strong>3–6 months of your total expenses</strong> as your emergency fund.
        </p>
        <ul className="list-disc list-inside text-blue-100 mt-3 space-y-2">
          <li>If you have a stable job → <strong>3 months</strong> of expenses is sufficient.</li>
          <li>If you’re self-employed/freelancer → <strong>6–12 months</strong> of expenses is safer.</li>
        </ul>
        <div className="bg-white/5 p-4 rounded-xl mt-4 border border-white/10">
          <p className="text-sm text-blue-100">
            Example: If your monthly expenses = ₹40,000  
            ➤ Emergency Fund = ₹40,000 × 6 = <strong>₹2,40,000</strong>
          </p>
        </div>
      </motion.div>

      {/* 4️⃣ Where to Keep It */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white/10 p-6 rounded-2xl backdrop-blur-lg border border-white/10 shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-white mb-3 flex items-center gap-2"><Wallet className="h-6 w-6 text-blue-400" /> 4️⃣ Where to Keep It</h2>
        <ul className="list-disc list-inside text-blue-100 space-y-2">
          <li><strong>High-Interest Savings Account:</strong> Easy access + interest (e.g., Axis, IDFC, or Jupiter).</li>
          <li><strong>Liquid Mutual Funds:</strong> 1-day withdrawal + better returns (4–6%).</li>
          <li><strong>Avoid:</strong> Fixed Deposits with lock-in or stocks — not liquid enough for emergencies.</li>
        </ul>
        <p className="mt-3 text-blue-100">
          Keep it separate from your regular account — label it “Emergency Fund” to avoid temptation.
        </p>
      </motion.div>

      {/* 5️⃣ How to Build It Step-by-Step */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-blue-700/30 to-cyan-600/30 p-6 rounded-2xl border border-white/10 shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-white mb-3 flex items-center gap-2"><PiggyBank className="h-6 w-6 text-pink-400" /> 5️⃣ How to Build It Step-by-Step</h2>
        <ul className="list-disc list-inside text-blue-100 space-y-2">
          <li>Start small — even ₹1,000/week adds up fast.</li>
          <li>Automate transfers from your salary account.</li>
          <li>Use apps like <strong>Jupiter, Fi, or NeoCred Tools</strong> for auto-saving.</li>
          <li>Replenish whenever you use it — treat it as mandatory.</li>
        </ul>
        <p className="mt-3 text-blue-100">
          Think of your emergency fund as your personal insurance policy — except you control it.
        </p>
      </motion.div>

      {/* 6️⃣ Common Mistakes to Avoid */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white/10 p-6 rounded-2xl backdrop-blur-lg border border-white/10 shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-white mb-3 flex items-center gap-2"><AlertTriangle className="h-6 w-6 text-orange-400" /> 6️⃣ Common Mistakes to Avoid</h2>
        <ul className="list-disc list-inside text-blue-100 space-y-2">
          <li>Investing the emergency fund in risky assets (stocks, crypto).</li>
          <li>Mixing it with regular savings or using it for shopping.</li>
          <li>Not replenishing after using it.</li>
          <li>Keeping the fund in cash — inflation reduces value.</li>
        </ul>
      </motion.div>

      {/* 7️⃣ Quick Summary */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white/10 p-6 rounded-2xl backdrop-blur-lg border border-white/10 shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-white mb-3 flex items-center gap-2"><Sparkles className="h-6 w-6 text-yellow-400" /> 📘 Summary</h2>
        <ul className="list-disc list-inside text-blue-100 space-y-2">
          <li>Save 3–6 months of expenses.</li>
          <li>Keep it liquid — not locked.</li>
          <li>Automate your savings.</li>
          <li>Use only for emergencies and rebuild quickly.</li>
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
      question: "How many months of expenses should your emergency fund cover?",
      options: ["1–2 months", "3–6 months", "10–12 months", "1 year fixed deposit"],
      correct: "3–6 months",
    },
    {
      question: "Where should you ideally keep your emergency fund?",
      options: ["Stocks", "High-Interest Savings or Liquid Fund", "Real Estate", "Crypto Wallet"],
      correct: "High-Interest Savings or Liquid Fund",
    },
    {
      question: "When should you use your emergency fund?",
      options: [
        "Job loss or medical emergency",
        "Vacation trip",
        "Buying a new phone",
        "Investing in mutual funds",
      ],
      correct: "Job loss or medical emergency",
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
                <CheckCircle className="text-green-400 h-6 w-6" /> Excellent! You mastered it 🎉
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
