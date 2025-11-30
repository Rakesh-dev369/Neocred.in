"use client"

import { motion } from "framer-motion"
import { Wallet, BarChart3, Calculator, PiggyBank, TrendingUp, CheckCircle, XCircle, RotateCcw } from "lucide-react"
import { useState } from "react"

export default function Lesson_MoneyBudgeting() {
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
          <Wallet className="h-8 w-8 text-cyan-400" /> What is Money & Budgeting Basics
        </h1>
        <p className="text-blue-200 text-lg">
          Learn how to control your money, plan your expenses, and take the first step toward financial freedom.
        </p>
      </div>

      {/* 1️⃣ Role of Money */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white/10 p-6 rounded-2xl backdrop-blur-lg border border-white/10 shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-white mb-3 flex items-center gap-2"><Wallet className="h-6 w-6 text-green-400" /> 1️⃣ The Role of Money</h2>
        <p className="text-blue-100 leading-relaxed">
          Money is more than just paper or numbers on your phone screen. It is a{" "}
          <strong>medium of exchange</strong> that helps us buy goods and services, a{" "}
          <strong>store of value</strong> that preserves wealth, and a{" "}
          <strong>unit of account</strong> that measures value.
        </p>
        <p className="mt-3 text-blue-100">
          Earlier, people traded goods (barter system). Today, we use coins, notes, cards, and digital methods like{" "}
          <strong>UPI, wallets, and net banking</strong>. Understanding how money flows helps you make smarter choices.
        </p>
      </motion.div>

      {/* 2️⃣ What is Budgeting */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white/10 p-6 rounded-2xl backdrop-blur-lg border border-white/10 shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-white mb-3 flex items-center gap-2"><BarChart3 className="h-6 w-6 text-blue-400" /> 2️⃣ What is Budgeting?</h2>
        <p className="text-blue-100 leading-relaxed">
          Budgeting means creating a simple plan for how you’ll spend and save your income. It helps you{" "}
          <strong>avoid overspending</strong> and <strong>save consistently</strong>. Most people think budgeting limits
          their freedom — but in reality, it gives you{" "}
          <strong>financial control and peace of mind</strong>.
        </p>
      </motion.div>

      {/* 3️⃣ 50/30/20 Rule */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white/10 p-6 rounded-2xl backdrop-blur-lg border border-white/10 shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-white mb-3 flex items-center gap-2"><Calculator className="h-6 w-6 text-purple-400" /> 3️⃣ The 50/30/20 Rule</h2>
        <p className="text-blue-100 mb-3">
          One of the simplest and most effective budgeting methods is the <strong>50/30/20 rule</strong>:
        </p>
        <ul className="list-disc list-inside text-blue-100 space-y-1">
          <li>💡 50% for <strong>Needs</strong> — rent, groceries, transport, bills</li>
          <li>🎉 30% for <strong>Wants</strong> — entertainment, shopping, dining out</li>
          <li>💰 20% for <strong>Savings & Investments</strong> — SIPs, insurance, debt repayment</li>
        </ul>

        <p className="mt-3 text-blue-100">
          Example: If your monthly income is <strong>₹50,000</strong>, your ideal budget looks like:
        </p>

        <div className="mt-4 overflow-x-auto">
          <table className="min-w-full border border-white/10 rounded-lg text-left text-blue-100">
            <thead>
              <tr className="bg-white/10 text-white">
                <th className="py-2 px-4">Category</th>
                <th className="py-2 px-4">%</th>
                <th className="py-2 px-4">Amount (₹)</th>
                <th className="py-2 px-4">Example</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-white/10">
                <td className="py-2 px-4">Needs</td>
                <td className="py-2 px-4">50%</td>
                <td className="py-2 px-4">₹25,000</td>
                <td className="py-2 px-4">Rent, groceries, travel</td>
              </tr>
              <tr className="border-t border-white/10">
                <td className="py-2 px-4">Wants</td>
                <td className="py-2 px-4">30%</td>
                <td className="py-2 px-4">₹15,000</td>
                <td className="py-2 px-4">Shopping, movies, dining</td>
              </tr>
              <tr className="border-t border-white/10">
                <td className="py-2 px-4">Savings/Investments</td>
                <td className="py-2 px-4">20%</td>
                <td className="py-2 px-4">₹10,000</td>
                <td className="py-2 px-4">SIP, insurance, emergency fund</td>
              </tr>
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* 4️⃣ Tools & Methods */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white/10 p-6 rounded-2xl backdrop-blur-lg border border-white/10 shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-white mb-3 flex items-center gap-2"><BarChart3 className="h-6 w-6 text-cyan-400" /> 4️⃣ Tools & Methods for Budgeting</h2>
        <ul className="list-disc list-inside text-blue-100 space-y-1">
          <li>📘 Manual tracking with notebook or Excel sheet</li>
          <li>📱 Budgeting apps like <strong>Walnut, Money Manager, Jupiter</strong></li>
          <li>💳 Envelope method — divide money by spending category (physically or digitally)</li>
          <li>🤖 NeoCred Smart Budgeting (Coming Soon) — track and visualize your spending automatically</li>
        </ul>
      </motion.div>

      {/* 5️⃣ Tracking Expenses */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white/10 p-6 rounded-2xl backdrop-blur-lg border border-white/10 shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-white mb-3 flex items-center gap-2"><BarChart3 className="h-6 w-6 text-orange-400" /> 5️⃣ Importance of Tracking Expenses</h2>
        <p className="text-blue-100">
          Tracking helps you discover <strong>money leaks</strong> — small spends like subscriptions or snacks that add up.
          Make it a habit to review your weekly expenses every Sunday. Avoid <strong>lifestyle inflation</strong> — spending more as your income grows.
        </p>
      </motion.div>

      {/* 6️⃣ Foundation of Financial Freedom */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white/10 p-6 rounded-2xl backdrop-blur-lg border border-white/10 shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-white mb-3 flex items-center gap-2"><TrendingUp className="h-6 w-6 text-green-400" /> 6️⃣ Budgeting = Financial Freedom</h2>
        <p className="text-blue-100">
          Budgeting is not about restricting yourself — it’s about <strong>measuring and controlling</strong>.  
          As the saying goes, “You can’t manage what you don’t measure.”  
          A solid budget leads to <strong>savings → investing → wealth creation</strong>.
        </p>
      </motion.div>

      {/* 7️⃣ Key Takeaways */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 p-6 rounded-2xl border border-white/10 shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-white mb-3 flex items-center gap-2"><PiggyBank className="h-6 w-6 text-pink-400" /> 🚀 Key Takeaways</h2>
        <ul className="list-disc list-inside text-blue-100 space-y-2">
          <li>Money is a tool — budgeting helps you control it.</li>
          <li>Follow the <strong>50/30/20 rule</strong> to balance life and savings.</li>
          <li>Track expenses weekly and review monthly goals.</li>
          <li>Start small — even ₹500 saved is progress.</li>
          <li>Use tools like NeoCred to visualize your entire financial health.</li>
        </ul>
      </motion.div>

      {/* 8️⃣ Quiz with Interactive Feedback */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white/10 p-6 rounded-2xl backdrop-blur-lg border border-white/10 shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-white mb-3">
          💬 Quick Quiz & Challenge
        </h2>

        <QuizComponent />
      </motion.div>
    </motion.section>
  )
}

/* 🔹 Quiz Component */
function QuizComponent() {
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [score, setScore] = useState(0)

  const quiz = [
    {
      question: "What’s the first step in budgeting?",
      options: [
        "Start investing immediately",
        "Track your income and expenses",
        "Buy insurance first",
        "Apply for a loan",
      ],
      correct: "Track your income and expenses",
    },
    {
      question: "According to the 50/30/20 rule, what % should go to savings?",
      options: ["10%", "20%", "30%", "40%"],
      correct: "20%",
    },
  ]

  const handleSelect = (qIndex: number, option: string) => {
    if (!submitted) {
      setAnswers((prev) => ({ ...prev, [qIndex]: option }))
    }
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
          transition={{ duration: 0.4, delay: qIndex * 0.1 }}
          className="bg-white/5 p-4 rounded-xl border border-white/10"
        >
          <p className="font-medium mb-3">
            Q{qIndex + 1}: {q.question}
          </p>
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
                <CheckCircle className="text-green-400 h-6 w-6" /> You got all correct! 🎉
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
