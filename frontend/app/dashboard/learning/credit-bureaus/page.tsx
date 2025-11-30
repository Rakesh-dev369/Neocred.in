"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  CreditCard,
  Building2,
  BarChart3,
  ShieldCheck,
  FileText,
  CheckCircle,
  XCircle,
  RotateCcw,
  Sparkles,
} from "lucide-react"

/**
 * Lesson: Understanding Credit Bureaus (CIBIL, Equifax, Experian, CRIF High Mark)
 */

export default function Lesson_CreditBureaus() {
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
          <CreditCard className="h-8 w-8 text-cyan-400" /> Understanding Credit Bureaus in India
        </h1>
        <p className="text-blue-200 text-lg max-w-2xl mx-auto">
          Ever wondered how lenders know your creditworthiness?  
          Meet India’s four RBI-licensed credit bureaus — <strong>CIBIL, Equifax, Experian,</strong> and <strong>CRIF High Mark</strong> —  
          that shape your credit score and financial identity.
        </p>
      </div>

      {/* 1️⃣ What Are Credit Bureaus? */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white/10 p-6 rounded-2xl backdrop-blur-lg border border-white/10 shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-white mb-3 flex items-center gap-2"><Building2 className="h-6 w-6 text-blue-400" /> 1️⃣ What Are Credit Bureaus?</h2>
        <p className="text-blue-100 leading-relaxed">
          A <strong>credit bureau</strong> is an RBI-licensed agency that collects, maintains, and analyses credit information about individuals and businesses.  
          They track every loan, credit card, EMI, and repayment you make — to generate your <strong>credit score</strong>.
        </p>
        <div className="bg-white/5 p-4 rounded-xl mt-4 border border-white/10 text-sm text-blue-100">
          These agencies don’t lend money — they only maintain your financial reputation,  
          similar to an academic report card for your credit behaviour.
        </div>
      </motion.div>

      {/* 2️⃣ The Four Major Credit Bureaus in India */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-blue-700/20 to-cyan-700/20 p-6 rounded-2xl border border-white/10 shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-white mb-3 flex items-center gap-2">
          <FileText className="h-6 w-6 text-green-400" /> 2️⃣ The Four Major Credit Bureaus in India
        </h2>
        <ul className="list-disc list-inside text-blue-100 space-y-3">
          <li>
            <strong>🟦 CIBIL (TransUnion CIBIL Ltd)</strong> — Oldest and most widely used.  
            Score Range: 300–900 (Good: 750+)
          </li>
          <li>
            <strong>🟧 Experian India</strong> — Focuses on data analytics and alternate credit scoring.  
            Score Range: 300–900
          </li>
          <li>
            <strong>🟩 Equifax India</strong> — Provides deep financial risk insights for lenders.  
            Score Range: 300–850
          </li>
          <li>
            <strong>🟪 CRIF High Mark</strong> — Known for microfinance and rural credit coverage.  
            Score Range: 300–850
          </li>
        </ul>
      </motion.div>

      {/* 3️⃣ How Credit Bureaus Collect Data */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white/10 p-6 rounded-2xl backdrop-blur-lg border border-white/10 shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-white mb-3 flex items-center gap-2"><BarChart3 className="h-6 w-6 text-orange-400" /> 3️⃣ How Do They Collect Your Data?</h2>
        <p className="text-blue-100 leading-relaxed">
          Every time you take a loan, apply for a credit card, or even miss an EMI,  
          your bank or NBFC reports that data to all four credit bureaus.  
          This information is updated monthly under RBI’s Credit Information Companies (Regulation) Act, 2005.
        </p>
        <ul className="list-disc list-inside text-blue-100 mt-3 space-y-2">
          <li>📊 Loan and credit card repayment history</li>
          <li>💰 Credit utilization (used limit vs available limit)</li>
          <li>⏱️ Delays, defaults, or write-offs</li>
          <li>📄 Number of active credit accounts & hard inquiries</li>
        </ul>
      </motion.div>

      {/* 4️⃣ How Credit Scores Are Calculated */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-blue-900/20 to-cyan-800/20 p-6 rounded-2xl border border-white/10 shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-white mb-3 flex items-center gap-2">
          <CreditCard className="h-6 w-6 text-purple-400" /> 4️⃣ How Is Your Credit Score Calculated?
        </h2>
        <div className="text-blue-100 leading-relaxed">
          <p>Each bureau uses its own model, but most consider:</p>
          <ul className="list-disc list-inside mt-3 space-y-2">
            <li>🕓 <strong>Payment History</strong> – 35% weightage</li>
            <li>💳 <strong>Credit Utilization</strong> – 30%</li>
            <li>📆 <strong>Length of Credit History</strong> – 15%</li>
            <li>🔍 <strong>Credit Mix & Inquiries</strong> – 20%</li>
          </ul>
        </div>

        <div className="bg-white/5 p-4 mt-4 rounded-xl border border-white/10 text-sm text-blue-100">
          Example:  
          On-time EMI payments + Low credit usage (under 30%) = High score (750+).  
          Missed EMIs or high utilization = Score drop.
        </div>
      </motion.div>

      {/* 5️⃣ Why You Have Different Scores */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white/10 p-6 rounded-2xl backdrop-blur-lg border border-white/10 shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-white mb-3 flex items-center gap-2">
          <BarChart3 className="h-6 w-6 text-yellow-400" /> 5️⃣ Why Are Your Scores Different Across Bureaus?
        </h2>
        <p className="text-blue-100 leading-relaxed">
          Each bureau collects data from banks at slightly different times and uses its own algorithm.  
          That’s why your <strong>CIBIL score</strong> might be 770, while your <strong>Experian score</strong> is 755 — both still excellent.
        </p>
      </motion.div>

      {/* 6️⃣ How to Check Your Credit Score */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-blue-800/20 to-cyan-700/20 p-6 rounded-2xl border border-white/10 shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-white mb-3 flex items-center gap-2">
          <ShieldCheck className="h-6 w-6 text-cyan-400" /> 6️⃣ How to Check & Maintain a Healthy Credit Score
        </h2>
        <ul className="list-disc list-inside text-blue-100 space-y-2">
          <li>Check free reports from <strong>CIBIL, Experian, Equifax, or CRIF</strong> once a year (RBI mandate).</li>
          <li>Pay EMIs on time — even one missed payment hurts your score.</li>
          <li>Keep credit utilization under <strong>30%</strong>.</li>
          <li>Don’t apply for too many loans or cards at once.</li>
        </ul>
      </motion.div>

      {/* 7️⃣ Key Takeaways */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white/10 p-6 rounded-2xl backdrop-blur-lg border border-white/10 shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-white mb-3 flex items-center gap-2"><Sparkles className="h-6 w-6 text-pink-400" /> 📘 Key Takeaways</h2>
        <ul className="list-disc list-inside text-blue-100 space-y-2">
          <li>India has 4 RBI-licensed credit bureaus.</li>
          <li>Credit scores range between 300–900 (750+ = good).</li>
          <li>Maintain a clean payment record and low credit use.</li>
          <li>Check reports regularly for errors or frauds.</li>
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
      question: "How many RBI-licensed credit bureaus exist in India?",
      options: ["2", "3", "4", "5"],
      correct: "4",
    },
    {
      question: "Which is India’s oldest and most popular credit bureau?",
      options: ["Experian", "Equifax", "CIBIL", "CRIF High Mark"],
      correct: "CIBIL",
    },
    {
      question: "Which factor carries the most weight in your credit score?",
      options: [
        "Payment History",
        "Credit Inquiries",
        "Credit Age",
        "Type of Loans",
      ],
      correct: "Payment History",
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
                <CheckCircle className="text-green-400 h-6 w-6" /> Excellent! You mastered credit bureaus 🎉
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
