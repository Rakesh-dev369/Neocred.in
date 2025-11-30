"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  FileText,
  CreditCard,
  Banknote,
  AlertTriangle,
  CheckCircle,
  XCircle,
  RotateCcw,
  Eye,
  Info,
  Sparkles,
  Receipt,
} from "lucide-react"

/**
 * Lesson: How to Read a Bank Statement / Credit Card Bill
 */

export default function Lesson_BankStatementCCBill() {
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
          <FileText className="h-8 w-8 text-cyan-400" /> How to Read a Bank Statement / Credit Card Bill
        </h1>
        <p className="text-blue-200 text-lg max-w-2xl mx-auto">
          Every month, your bank or credit card sends a statement filled with numbers —  
          but hidden inside are *stories about your money habits, charges, and credit health* 💡.  
          Let’s decode it, NeoCred-style.
        </p>
      </div>

      {/* 1️⃣ What is a Bank Statement? */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white/10 p-6 rounded-2xl backdrop-blur-lg border border-white/10 shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-white mb-3 flex items-center gap-2"><Banknote className="h-6 w-6 text-green-400" /> 1️⃣ What is a Bank Statement?</h2>
        <p className="text-blue-100 leading-relaxed">
          A <strong>bank statement</strong> is a record of all transactions in your savings or current account —  
          deposits, withdrawals, interest, and charges — for a specific period (usually monthly).
        </p>
        <ul className="list-disc list-inside text-blue-100 mt-3 space-y-2">
          <li>🧾 Lists every credit (money in) and debit (money out).</li>
          <li>🏦 Helps track expenses and detect unauthorized activity.</li>
          <li>🔍 Used for loan, visa, or tax verification.</li>
        </ul>
      </motion.div>

      {/* 2️⃣ Key Sections of a Bank Statement */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-blue-700/20 to-cyan-700/20 p-6 rounded-2xl border border-white/10 shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-white mb-3 flex items-center gap-2">
          <FileText className="h-6 w-6 text-blue-400" /> 2️⃣ Key Sections in a Bank Statement
        </h2>
        <ul className="list-disc list-inside text-blue-100 space-y-3">
          <li><strong>Account Summary:</strong> Account number, IFSC, and statement period.</li>
          <li><strong>Opening & Closing Balance:</strong> Money at the start and end of the month.</li>
          <li><strong>Transaction Details:</strong> Dates, descriptions, debit/credit amounts.</li>
          <li><strong>Interest & Fees:</strong> Any service charges, interest earned, GST, or penalties.</li>
        </ul>
        <div className="bg-white/5 p-4 rounded-xl mt-4 border border-white/10 text-sm text-blue-100">
          Example:  
          <strong>03 Oct - ATM Withdrawal ₹2,000</strong> → (Debit) 
          <strong>05 Oct - Salary Credit ₹35,000</strong> → (Credit)
        </div>
      </motion.div>

      {/* 3️⃣ Reading a Credit Card Bill */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white/10 p-6 rounded-2xl backdrop-blur-lg border border-white/10 shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-white mb-3 flex items-center gap-2">
          <CreditCard className="h-6 w-6 text-purple-400" /> 3️⃣ Understanding a Credit Card Bill
        </h2>
        <p className="text-blue-100 leading-relaxed">
          A <strong>credit card statement</strong> summarizes your card usage for the month —  
          purchases, payments, due dates, interest, and fees.
        </p>
        <ul className="list-disc list-inside text-blue-100 mt-3 space-y-2">
          <li>💳 <strong>Total Amount Due:</strong> Full amount you owe for the month.</li>
          <li>💰 <strong>Minimum Amount Due (MAD):</strong> Smallest payment to avoid default (usually 5%).</li>
          <li>📅 <strong>Payment Due Date:</strong> Pay before this date to avoid interest.</li>
          <li>📈 <strong>Credit Limit & Available Limit:</strong> Know how much you can still spend.</li>
        </ul>
      </motion.div>

      {/* 4️⃣ Credit Card Bill Example */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-blue-900/20 to-cyan-800/20 p-6 rounded-2xl border border-white/10 shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-white mb-3 flex items-center gap-2">
          <Receipt className="h-6 w-6 text-orange-400" /> 4️⃣ Sample Credit Card Bill Breakdown
        </h2>
        <table className="w-full text-sm text-blue-100 border-collapse">
          <thead>
            <tr className="border-b border-white/10 text-blue-200">
              <th className="p-2 text-left">Item</th>
              <th className="p-2 text-left">Amount (₹)</th>
              <th className="p-2 text-left">Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="p-2">Opening Balance</td><td className="p-2">0</td><td className="p-2">New billing cycle</td></tr>
            <tr><td className="p-2">Purchases</td><td className="p-2">20,000</td><td className="p-2">Amazon, Swiggy, Petrol</td></tr>
            <tr><td className="p-2">Payments Received</td><td className="p-2">–5,000</td><td className="p-2">Part payment made</td></tr>
            <tr><td className="p-2">Interest Charged</td><td className="p-2">500</td><td className="p-2">Because full due not paid</td></tr>
            <tr><td className="p-2 font-semibold">Total Due</td><td className="p-2 font-semibold">₹15,500</td><td className="p-2">Due by 15 Nov</td></tr>
          </tbody>
        </table>
      </motion.div>

      {/* 5️⃣ Hidden Fees & Traps */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white/10 p-6 rounded-2xl backdrop-blur-lg border border-white/10 shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-white mb-3 flex items-center gap-2">
          <AlertTriangle className="h-6 w-6 text-red-400" /> 5️⃣ Hidden Fees & Traps to Watch Out For
        </h2>
        <ul className="list-disc list-inside text-blue-100 space-y-2">
          <li>⚠️ <strong>Late Payment Fees:</strong> ₹300–₹1,000 if paid after due date.</li>
          <li>📉 <strong>Finance Charges:</strong> 36–42% per annum if balance carried forward.</li>
          <li>💳 <strong>Cash Advance Fees:</strong> 2.5–3% of withdrawn amount + no grace period.</li>
          <li>📅 <strong>GST & Other Fees:</strong> Check fine print for every line item.</li>
        </ul>
      </motion.div>

      {/* 6️⃣ Smart Reading Tips */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-blue-700/20 to-cyan-700/20 p-6 rounded-2xl border border-white/10 shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-white mb-3 flex items-center gap-2">
          <Eye className="h-6 w-6 text-cyan-400" /> 6️⃣ NeoCred's Smart Reading Tips
        </h2>
        <ul className="list-disc list-inside text-blue-100 space-y-2">
          <li>Always check your name, account number, and period first.</li>
          <li>Verify each debit/credit — flag unknown transactions immediately.</li>
          <li>Pay full credit card bill to avoid interest buildup.</li>
          <li>Track auto-debits (Netflix, insurance) regularly.</li>
          <li>Download monthly e-statements and store securely.</li>
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
          <li>Bank and card statements reveal your spending behaviour.</li>
          <li>Always read every line item — detect unauthorized charges early.</li>
          <li>Pay full due amount, not just minimum due, to avoid debt traps.</li>
          <li>Regular statement review = better financial control.</li>
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
      question: "What does ‘Credit’ mean in a bank statement?",
      options: ["Money out", "Money in", "Interest charged", "Loan repayment"],
      correct: "Money in",
    },
    {
      question: "What happens if you pay only the Minimum Amount Due on your credit card?",
      options: [
        "Interest-free grace continues",
        "No charges apply",
        "High interest is charged on remaining balance",
        "Credit score improves",
      ],
      correct: "High interest is charged on remaining balance",
    },
    {
      question: "Which section of a bank statement lists transaction details?",
      options: [
        "Account Summary",
        "Transaction History",
        "Charges Table",
        "Credit Limit",
      ],
      correct: "Transaction History",
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
                <CheckCircle className="text-green-400 h-6 w-6" /> Excellent! You can now read financial statements 🎉
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
