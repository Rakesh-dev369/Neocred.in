"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Smartphone,
  BarChart3,
  Wallet,
  Sparkles,
  CheckCircle,
  XCircle,
  RotateCcw,
  Clock,
  PieChart,
} from "lucide-react"

/**
 * Lesson: How to Track Expenses & Budgeting Apps
 */

export default function Lesson_TrackExpenses() {
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
          <Smartphone className="h-8 w-8 text-cyan-400" /> How to Track Expenses & Budgeting Apps
        </h1>
        <p className="text-blue-200 text-lg max-w-2xl mx-auto">
          Discover how to take control of your money with smart tracking, automated insights, and top-rated budgeting tools used in India.
        </p>
      </div>

      {/* 1️⃣ Why Expense Tracking Matters */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white/10 p-6 rounded-2xl backdrop-blur-lg border border-white/10 shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-white mb-3 flex items-center gap-2"><BarChart3 className="h-6 w-6 text-green-400" /> 1️⃣ Why Expense Tracking Matters</h2>
        <p className="text-blue-100 leading-relaxed">
          Tracking expenses helps you understand where every rupee goes. Most people think they “know” their spending, but actual tracking
          often reveals hidden patterns like daily snacks, subscriptions, or impulse purchases.
        </p>
        <p className="mt-3 text-blue-100">
          It’s not about restricting yourself — it’s about <strong>awareness</strong>. Once you can see where your money flows, 
          you can control it and start saving effectively.
        </p>
      </motion.div>

      {/* 2️⃣ Manual vs Automated Tracking */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white/10 p-6 rounded-2xl backdrop-blur-lg border border-white/10 shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-white mb-3 flex items-center gap-2"><Clock className="h-6 w-6 text-blue-400" /> 2️⃣ Manual vs Automated Tracking</h2>
        <ul className="list-disc list-inside text-blue-100 space-y-2">
          <li>
            <strong>Manual Tracking:</strong> Ideal for beginners. You record expenses in a diary or Google Sheet. High awareness, but time-consuming.
          </li>
          <li>
            <strong>Automated Tracking:</strong> Apps like <strong>Walnut, Money Manager, Jupiter, CRED</strong> auto-read SMS and bank data to categorize spending automatically.
          </li>
        </ul>
        <p className="mt-3 text-blue-100">
          Most professionals use a hybrid approach — apps for auto-sync + manual notes for cash spends.
        </p>
      </motion.div>

      {/* 3️⃣ Categorizing Expenses */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white/10 p-6 rounded-2xl backdrop-blur-lg border border-white/10 shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-white mb-3 flex items-center gap-2"><PieChart className="h-6 w-6 text-purple-400" /> 3️⃣ Categorizing Expenses</h2>
        <p className="text-blue-100 leading-relaxed">
          Categorization reveals where your money truly goes. Create simple categories like:
        </p>
        <div className="grid sm:grid-cols-2 gap-4 mt-4">
          <div className="bg-white/5 p-3 rounded-lg">
            <h3 className="font-semibold text-white mb-2 text-sm">Essential Categories</h3>
            <ul className="text-blue-100 text-sm list-disc list-inside">
              <li>Rent / EMIs</li>
              <li>Groceries</li>
              <li>Bills & Utilities</li>
              <li>Insurance</li>
            </ul>
          </div>
          <div className="bg-white/5 p-3 rounded-lg">
            <h3 className="font-semibold text-white mb-2 text-sm">Lifestyle Categories</h3>
            <ul className="text-blue-100 text-sm list-disc list-inside">
              <li>Entertainment</li>
              <li>Dining Out</li>
              <li>Shopping</li>
              <li>Subscriptions</li>
            </ul>
          </div>
        </div>
        <p className="mt-3 text-blue-100">
          Once categorized, check which group consumes the most — that’s your potential saving area.
        </p>
      </motion.div>

      {/* 4️⃣ Best Budgeting Apps in India */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-cyan-600/10 to-blue-600/10 p-6 rounded-2xl border border-white/10 shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-white mb-3 flex items-center gap-2"><Smartphone className="h-6 w-6 text-cyan-400" /> 4️⃣ Top Budgeting Apps in India</h2>
        <ul className="list-disc list-inside text-blue-100 space-y-2">
          <li>
            <strong>Walnut:</strong> Auto-tracks SMS, creates visual spending charts, and alerts for bills.
          </li>
          <li>
            <strong>Money Manager:</strong> Perfect for detailed manual input — daily, weekly, and monthly summaries.
          </li>
          <li>
            <strong>Jupiter:</strong> Bank + Budget combo app with auto categorization and goals.
          </li>
          <li>
            <strong>CRED:</strong> Best for credit card users — reminders, rewards, and spending insights.
          </li>
        </ul>
        <p className="mt-3 text-blue-100">
          Pro Tip: Choose an app that syncs securely with your SMS or bank data and provides spending analytics.
        </p>
      </motion.div>

      {/* 5️⃣ Setting Budgets & Alerts */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white/10 p-6 rounded-2xl backdrop-blur-lg border border-white/10 shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-white mb-3 flex items-center gap-2"><Wallet className="h-6 w-6 text-orange-400" /> 5️⃣ Setting Budgets & Alerts</h2>
        <p className="text-blue-100 leading-relaxed">
          Apps like <strong>Walnut</strong> and <strong>Money Manager</strong> allow you to set monthly limits per category.
        </p>
        <ul className="list-disc list-inside text-blue-100 mt-3 space-y-1">
          <li>Example: ₹15,000 for essentials, ₹5,000 for entertainment.</li>
          <li>Apps alert you when you reach 80% of a limit.</li>
          <li>Helps prevent month-end overspending and improves savings automatically.</li>
        </ul>
      </motion.div>

      {/* 6️⃣ Review & Analyze */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white/10 p-6 rounded-2xl backdrop-blur-lg border border-white/10 shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-white mb-3 flex items-center gap-2"><BarChart3 className="h-6 w-6 text-pink-400" /> 6️⃣ Review & Analyze</h2>
        <p className="text-blue-100 leading-relaxed">
          Spend 10 minutes every week reviewing your expense chart. Look for spending spikes or categories exceeding limits.
        </p>
        <p className="mt-3 text-blue-100">
          Example: You realize ₹1,200/month on subscriptions you barely use — that’s ₹14,400/year saved instantly!
        </p>
      </motion.div>

      {/* 7️⃣ Automation & NeoCred Integration */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-blue-700/30 to-cyan-600/30 p-6 rounded-2xl border border-white/10 shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-white mb-3 flex items-center gap-2"><Sparkles className="h-6 w-6 text-yellow-400" /> 7️⃣ Automation & NeoCred Integration</h2>
        <p className="text-blue-100 leading-relaxed">
          In the future, <strong>NeoCred</strong> will automatically sync your credit card, UPI, and bank spends 
          into smart categories using AI.
        </p>
        <p className="mt-3 text-blue-100">
          The AI assistant will then suggest:  
          “You spent ₹5,200 on food this month — 22% above your average. Consider reducing next month’s dining budget by ₹1,000.”
        </p>
      </motion.div>

      {/* 8️⃣ Quick Quiz & Challenge */}
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
   Reusable Quiz Component
   --------------------------- */
function QuizComponent() {
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [score, setScore] = useState(0)

  const quiz = [
    {
      question: "Which of these is a manual expense tracking method?",
      options: ["Google Sheets", "Walnut", "CRED", "Jupiter"],
      correct: "Google Sheets",
    },
    {
      question: "Which app automatically categorizes expenses from SMS?",
      options: ["Money Manager", "Walnut", "Excel", "Cashbook"],
      correct: "Walnut",
    },
    {
      question: "Why is expense tracking important?",
      options: [
        "It helps you understand spending patterns",
        "It increases your income automatically",
        "It reduces taxes instantly",
        "It is required by banks",
      ],
      correct: "It helps you understand spending patterns",
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
                <CheckCircle className="text-green-400 h-6 w-6" /> Perfect Score! 🎉
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
