"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Wallet,
  Layers,
  CreditCard,
  PiggyBank,
  Calendar,
  Sparkles,
  CheckCircle,
  XCircle,
  RotateCcw,
  BarChart3,
} from "lucide-react"

/**
 * Lesson: Understanding Income, Expenses & Savings
 * Paste this file as /app/dashboard/learning/understanding-income-expenses-savings/page.tsx
 */

export default function Lesson_IncomeExpensesSavings() {
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
          <Layers className="h-8 w-8 text-cyan-400" /> Understanding Income, Expenses & Savings
        </h1>
        <p className="text-blue-200 text-lg max-w-2xl mx-auto">
          Learn how money enters your life (income), where it goes (expenses), and how to convert the gap into disciplined savings that work for you.
        </p>
      </div>

      {/* 1️⃣ What is Income */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="bg-white/8 p-6 rounded-2xl backdrop-blur-lg border border-white/10 shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-white mb-3 flex items-center gap-2"><Wallet className="h-6 w-6 text-green-400" /> 1️⃣ What is Income?</h2>
        <p className="text-blue-100 leading-relaxed">
          <strong>Income</strong> is the money you receive regularly — typically from a salary, business revenue, freelance work, or passive sources (rent, dividends). For planning, break income into:
        </p>
        <ul className="list-disc list-inside text-blue-100 mt-3 space-y-1">
          <li><strong>Active Income:</strong> Salary, bonus, freelance payments — requires your time.</li>
          <li><strong>Passive Income:</strong> Rent, dividends, interest — money that works for you.</li>
          <li><strong>Unexpected Income:</strong> Gifts, one-time bonuses — treat as optional for planning.</li>
        </ul>
        <p className="mt-3 text-blue-100">
          Tip: For reliable budgeting use <strong>net usable income</strong> (after taxes & mandatory deductions) — that’s the real amount you can plan with.
        </p>
      </motion.div>

      {/* 2️⃣ Types of Expenses (Fixed vs Variable) */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="bg-white/8 p-6 rounded-2xl backdrop-blur-lg border border-white/10 shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-white mb-3 flex items-center gap-2"><CreditCard className="h-6 w-6 text-red-400" /> 2️⃣ Types of Expenses</h2>
        <p className="text-blue-100 leading-relaxed">
          Expenses are where your income flows out. Group them to understand control points:
        </p>
        <ul className="list-disc list-inside text-blue-100 mt-3 space-y-1">
          <li><strong>Fixed Expenses:</strong> Rent, EMIs, insurance premiums — usually same every month.</li>
          <li><strong>Variable Expenses:</strong> Groceries, transport, utilities — change month to month.</li>
          <li><strong>Discretionary/Want Expenses:</strong> Dining out, subscriptions, shopping — optional and easiest to trim.</li>
        </ul>
        <p className="mt-3 text-blue-100">
          Practical move: Identify your fixed costs first — they form your baseline. Then control variable and discretionary spends.
        </p>
      </motion.div>

      {/* 3️⃣ Needs vs Wants */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="bg-white/8 p-6 rounded-2xl backdrop-blur-lg border border-white/10 shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-white mb-3 flex items-center gap-2"><Layers className="h-6 w-6 text-orange-400" /> 3️⃣ Needs vs Wants</h2>
        <p className="text-blue-100 leading-relaxed">
          Classify each expense as a <strong>need</strong> (essential) or a <strong>want</strong> (nice-to-have). Examples:
        </p>
        <div className="grid sm:grid-cols-2 gap-4 mt-4">
          <div className="bg-white/6 p-3 rounded-lg">
            <h3 className="text-sm font-semibold text-white mb-1">Needs</h3>
            <ul className="text-blue-100 text-sm list-disc list-inside">
              <li>Rent / Home utilities</li>
              <li>Groceries</li>
              <li>Health insurance</li>
              <li>Loan EMIs</li>
            </ul>
          </div>
          <div className="bg-white/6 p-3 rounded-lg">
            <h3 className="text-sm font-semibold text-white mb-1">Wants</h3>
            <ul className="text-blue-100 text-sm list-disc list-inside">
              <li>Dining out</li>
              <li>Streaming subscriptions</li>
              <li>Clothes / gadgets</li>
            </ul>
          </div>
        </div>
        <p className="mt-3 text-blue-100">
          Small tip: When trimming costs, start with wants — that's where the impact is fastest.
        </p>
      </motion.div>

      {/* 4️⃣ How to Track Expenses (Practical Tools) */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="bg-white/8 p-6 rounded-2xl backdrop-blur-lg border border-white/10 shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-white mb-3 flex items-center gap-2"><BarChart3 className="h-6 w-6 text-blue-400" /> 4️⃣ How to Track Expenses</h2>
        <p className="text-blue-100 leading-relaxed">
          Tracking is the foundation for any good budget. Methods you can start today:
        </p>
        <ul className="list-disc list-inside text-blue-100 mt-3 space-y-1">
          <li><strong>Manual:</strong> Notebook or Google Sheets — build a simple income vs expense sheet.</li>
          <li><strong>Apps:</strong> Wallets & budgeting apps like <strong>Walnut, Money Manager, Jupiter</strong> — they auto-classify transactions.</li>
          <li><strong>Weekly Review:</strong> Spend 10–15 minutes every Sunday to categorize transactions and spot leaks.</li>
        </ul>
        <p className="mt-3 text-blue-100">
          Example template: Date | Category | Amount | Mode (UPI/card/cash) | Need/Want — sums at month-end give clarity.
        </p>
      </motion.div>

      {/* 5️⃣ What are Savings (Emergency, Short-term, Long-term) */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="bg-white/8 p-6 rounded-2xl backdrop-blur-lg border border-white/10 shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-white mb-3 flex items-center gap-2"><PiggyBank className="h-6 w-6 text-pink-400" /> 5️⃣ What are Savings?</h2>
        <p className="text-blue-100 leading-relaxed">
          <strong>Savings</strong> is the portion of income you don’t spend. Useful classification:
        </p>
        <ul className="list-disc list-inside text-blue-100 mt-3 space-y-1">
          <li><strong>Emergency Fund:</strong> 3–6 months of expenses in an accessible form (savings account, liquid fund).</li>
          <li><strong>Short-term Savings:</strong> 6 months to 3 years (FDs, short-term debt funds).</li>
          <li><strong>Long-term Savings/Investments:</strong> 3+ years (SIPs, equity mutual funds, PPF).</li>
        </ul>
        <p className="mt-3 text-blue-100">
          Rule of thumb: Build emergency fund first, then start SIPs. If you get a bonus, split it: part to emergency, part to investments.
        </p>
      </motion.div>

      {/* 6️⃣ How Much to Save (Practical Examples) */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="bg-white/8 p-6 rounded-2xl backdrop-blur-lg border border-white/10 shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-white mb-3 flex items-center gap-2"><Calendar className="h-6 w-6 text-purple-400" /> 6️⃣ How Much Should You Save?</h2>
        <p className="text-blue-100 leading-relaxed">
          A simple approach:
        </p>
        <ul className="list-disc list-inside text-blue-100 mt-3 space-y-1">
          <li><strong>Start at 20%:</strong> Aim to save 20% of net income (50/30/20 rule). If not possible today, start with 5–10% and increase by 1–2% every few months.</li>
          <li><strong>Emergency Fund:</strong> Build 3 months of essential expenses first (if you have a stable job). If freelancing, target 6 months.</li>
          <li><strong>Example:</strong> Net income ₹40,000 → Save ₹8,000/month. Emergency fund target (3 months) = ₹24,000.</li>
        </ul>
        <p className="mt-3 text-blue-100">
          Tip: Automate savings — set up an auto-transfer to a savings account or a SIP on payday.
        </p>
      </motion.div>

      {/* 7️⃣ Smart Saving Strategies & Goals */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="bg-white/8 p-6 rounded-2xl backdrop-blur-lg border border-white/10 shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-white mb-3 flex items-center gap-2"><Sparkles className="h-6 w-6 text-yellow-400" /> 7️⃣ Smart Saving Strategies & Goal Setting</h2>
        <p className="text-blue-100 leading-relaxed">
          Convert “save” into a plan using goals:
        </p>
        <ul className="list-disc list-inside text-blue-100 mt-3 space-y-1">
          <li><strong>Set clear goals:</strong> Short-term (vacation), Mid-term (car downpayment), Long-term (home, retirement).</li>
          <li><strong>Use buckets:</strong> Emergency | Goals | Investments — keep them in separate instruments.</li>
          <li><strong>Automate & escalate:</strong> Start a SIP of ₹1,000 today; increase by ₹500 every 6 months or on salary hikes.</li>
        </ul>
        <p className="mt-3 text-blue-100">
          Example plan: Save ₹2,000/month into an emergency fund (liquid) and ₹3,000/month into an equity SIP for a 10-year goal.
        </p>
      </motion.div>

      {/* 8️⃣ Tools, Apps & Next Steps */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="bg-gradient-to-r from-cyan-600/10 to-blue-600/10 p-6 rounded-2xl border border-white/10 shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-white mb-3 flex items-center gap-2"><BarChart3 className="h-6 w-6 text-indigo-400" /> 8️⃣ Tools, Apps & Next Steps</h2>
        <p className="text-blue-100 leading-relaxed">
          Practical tools to implement what you learned:
        </p>
        <ul className="list-disc list-inside text-blue-100 mt-3 space-y-1">
          <li><strong>Spreadsheets:</strong> Simple income-expense tracker in Google Sheets.</li>
          <li><strong>Budgeting Apps:</strong> Walnut, Money Manager, Jupiter, or your bank’s spending insights.</li>
          <li><strong>NeoCred Tools:</strong> (coming) Auto-classify transactions, budget alerts, and recommended SIP amounts based on goals.</li>
          <li><strong>Micro-challenge:</strong> This week track all expenses and categorize into Needs/Wants/Savings — review on Sunday.</li>
        </ul>
        <p className="mt-3 text-blue-100">
          Next lesson suggestion: <strong>What is Money & Budgeting Basics</strong> (if you haven’t completed it) or <strong>50/30/20 Rule</strong> for deeper budgeting practice.
        </p>
      </motion.div>

      {/* 9️⃣ Key Takeaways */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="bg-white/8 p-6 rounded-2xl backdrop-blur-lg border border-white/10 shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-white mb-3">🚀 Key Takeaways</h2>
        <ul className="list-disc list-inside text-blue-100 mt-2 space-y-2">
          <li>Income = money in; use net income (after taxes) for planning.</li>
          <li>Expenses = fixed + variable + discretionary. Track them to find leaks.</li>
          <li>Start saving — even small amounts compound over time. Aim for an emergency fund first.</li>
          <li>Automate savings & align them to clear goals (short, mid, long term).</li>
          <li>Review weekly and monthly — small habits build long-term financial strength.</li>
        </ul>
      </motion.div>

      {/* 10️⃣ Interactive Quiz */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="bg-white/8 p-6 rounded-2xl backdrop-blur-lg border border-white/10 shadow-lg"
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
      question: "Which item is an example of fixed expense?",
      options: ["Groceries", "Rent", "Dining out", "Movie ticket"],
      correct: "Rent",
    },
    {
      question: "If your net income is ₹40,000 and you follow 50/30/20, how much goes to savings?",
      options: ["₹8,000", "₹12,000", "₹20,000", "₹4,000"],
      correct: "₹8,000",
    },
    {
      question: "What should you build first before long-term investments?",
      options: ["Emergency fund", "Gold", "Car EMI", "Vacation fund"],
      correct: "Emergency fund",
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
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-center space-y-4">
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
          <button onClick={handleReset} className="flex items-center justify-center mx-auto text-sm bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg">
            <RotateCcw className="h-4 w-4 mr-2" /> Try Again
          </button>
        </motion.div>
      )}
    </div>
  )
}
