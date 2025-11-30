"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Smartphone,
  Banknote,
  CreditCard,
  Network,
  QrCode,
  CheckCircle,
  XCircle,
  RotateCcw,
  Zap,
  Clock,
  Shield,
  Sparkles,
} from "lucide-react"

/**
 * Lesson: Digital Payments — UPI, NEFT, IMPS
 */

export default function Lesson_DigitalPayments() {
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
          <Smartphone className="h-8 w-8 text-cyan-400" /> Digital Payments — UPI, NEFT, IMPS
        </h1>
        <p className="text-blue-200 text-lg max-w-2xl mx-auto">
          India leads the world in digital payments 🌐.  
          Let’s explore how <strong>UPI, NEFT, and IMPS</strong> work — their speed, purpose, and safety features.
        </p>
      </div>

      {/* 1️⃣ Introduction to Digital Payments */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white/10 p-6 rounded-2xl backdrop-blur-lg border border-white/10 shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-white mb-3 flex items-center gap-2">
          <Smartphone className="h-6 w-6 text-blue-400" /> 1️⃣ What are Digital Payments?
        </h2>
        <p className="text-blue-100 leading-relaxed">
          <strong>Digital Payments</strong> allow money transfer without physical cash —  
          through internet banking, mobile apps, or QR codes.  
          India’s digital ecosystem, led by <strong>UPI</strong>, is among the fastest and most secure globally.
        </p>
        <ul className="list-disc list-inside text-blue-100 mt-3 space-y-2">
          <li>Operated under the <strong>Reserve Bank of India (RBI)</strong> and <strong>NPCI</strong>.</li>
          <li>24x7 availability, instant transfers, and zero physical contact.</li>
          <li>Supports QR codes, bank apps, wallets, and cards.</li>
        </ul>
      </motion.div>

      {/* 2️⃣ Understanding UPI */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-blue-800/20 to-cyan-700/20 p-6 rounded-2xl border border-white/10 shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-white mb-3 flex items-center gap-2"><QrCode className="h-6 w-6 text-green-400" /> 2️⃣ UPI (Unified Payments Interface)</h2>
        <p className="text-blue-100 leading-relaxed">
          <strong>UPI</strong> is India’s real-time payment system developed by <strong>NPCI</strong>.  
          It connects multiple bank accounts in one app — enabling instant money transfer using just a UPI ID.
        </p>
        <div className="bg-white/5 p-4 rounded-xl mt-4 border border-white/10 text-sm text-blue-100">
          Example:  
          Send ₹500 instantly from SBI to HDFC via PhonePe / Google Pay / Paytm using <strong>rakesh@okhdfcbank</strong>.
        </div>
        <ul className="list-disc list-inside text-blue-100 mt-3 space-y-2">
          <li>💡 Instant 24x7 transactions.</li>
          <li>🔒 Secured with PIN and device binding.</li>
          <li>💰 Free of cost (no transaction fees for individuals).</li>
        </ul>
      </motion.div>

      {/* 3️⃣ NEFT — Scheduled Transfers */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white/10 p-6 rounded-2xl backdrop-blur-lg border border-white/10 shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-white mb-3 flex items-center gap-2"><Clock className="h-6 w-6 text-orange-400" /> 3️⃣ NEFT (National Electronic Funds Transfer)</h2>
        <p className="text-blue-100 leading-relaxed">
          <strong>NEFT</strong> allows bank-to-bank money transfers in hourly batches.  
          It’s ideal for sending moderate amounts during the day.
        </p>
        <ul className="list-disc list-inside text-blue-100 mt-3 space-y-2">
          <li>💸 Settlement in half-hourly batches (now almost real-time).</li>
          <li>🏦 Available 24x7 (since December 2019).</li>
          <li>💰 Transfer limits: Usually ₹10 lakh per day (depends on bank).</li>
        </ul>
        <div className="bg-white/5 p-4 rounded-xl mt-4 border border-white/10 text-sm text-blue-100">
          Example: Transfer ₹1,00,000 from Axis Bank to SBI via NEFT — credited within 30 minutes.
        </div>
      </motion.div>

      {/* 4️⃣ IMPS — Instant Money Transfer */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-blue-900/20 to-cyan-800/20 p-6 rounded-2xl border border-white/10 shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-white mb-3 flex items-center gap-2"><Zap className="h-6 w-6 text-yellow-400" /> 4️⃣ IMPS (Immediate Payment Service)</h2>
        <p className="text-blue-100 leading-relaxed">
          <strong>IMPS</strong> enables instant 24x7 fund transfers via mobile, internet banking, or ATM.  
          It’s slightly older than UPI and used for higher-value instant transfers.
        </p>
        <ul className="list-disc list-inside text-blue-100 mt-3 space-y-2">
          <li>⚡ Instant real-time settlement.</li>
          <li>💰 Limit: ₹5 lakh per transaction (as per RBI).</li>
          <li>🕓 Works even on bank holidays.</li>
        </ul>
      </motion.div>

      {/* 5️⃣ Comparison Table */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white/10 p-6 rounded-2xl backdrop-blur-lg border border-white/10 shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-white mb-3 flex items-center gap-2"><Network className="h-6 w-6 text-purple-400" /> 5️⃣ UPI vs NEFT vs IMPS — Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-blue-100 border-collapse">
            <thead>
              <tr className="border-b border-white/10 text-blue-200">
                <th className="p-2 text-left">Feature</th>
                <th className="p-2 text-left">UPI</th>
                <th className="p-2 text-left">NEFT</th>
                <th className="p-2 text-left">IMPS</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="p-2">Speed</td><td className="p-2">Instant</td><td className="p-2">15–30 mins</td><td className="p-2">Instant</td></tr>
              <tr><td className="p-2">Availability</td><td className="p-2">24x7</td><td className="p-2">24x7</td><td className="p-2">24x7</td></tr>
              <tr><td className="p-2">Limit</td><td className="p-2">₹1–2 lakh</td><td className="p-2">₹10 lakh+</td><td className="p-2">₹5 lakh</td></tr>
              <tr><td className="p-2">Cost</td><td className="p-2">Free</td><td className="p-2">Low</td><td className="p-2">Low</td></tr>
              <tr><td className="p-2">Best For</td><td className="p-2">Daily & instant transfers</td><td className="p-2">Scheduled business payments</td><td className="p-2">High-value instant transfers</td></tr>
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* 6️⃣ Safety Tips */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-blue-700/20 to-cyan-700/20 p-6 rounded-2xl border border-white/10 shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-white mb-3 flex items-center gap-2"><Shield className="h-6 w-6 text-red-400" /> 6️⃣ Safety & Best Practices</h2>
        <ul className="list-disc list-inside text-blue-100 space-y-2">
          <li>Never share your <strong>UPI PIN</strong> or OTP.</li>
          <li>Verify receiver name before confirming payments.</li>
          <li>Use official apps (PhonePe, Google Pay, Paytm, BHIM).</li>
          <li>Check <strong>“VPA” (UPI ID)</strong> carefully before sending money.</li>
          <li>Enable <strong>SMS/email alerts</strong> for all transactions.</li>
        </ul>
      </motion.div>

      {/* 7️⃣ Key Takeaways */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white/10 p-6 rounded-2xl backdrop-blur-lg border border-white/10 shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-white mb-3 flex items-center gap-2"><Sparkles className="h-6 w-6 text-cyan-400" /> 📘 Key Takeaways</h2>
        <ul className="list-disc list-inside text-blue-100 space-y-2">
          <li>UPI is the fastest and most user-friendly for daily transfers.</li>
          <li>NEFT is ideal for large scheduled payments.</li>
          <li>IMPS works for instant high-value transactions.</li>
          <li>Always ensure secure devices and apps for payments.</li>
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
      question: "Which payment system is developed by NPCI for instant transfers?",
      options: ["NEFT", "RTGS", "UPI", "SWIFT"],
      correct: "UPI",
    },
    {
      question: "What’s the maximum IMPS transaction limit (as per RBI)?",
      options: ["₹1 lakh", "₹2 lakh", "₹5 lakh", "₹10 lakh"],
      correct: "₹5 lakh",
    },
    {
      question: "Which payment mode works in half-hourly batches?",
      options: ["UPI", "IMPS", "NEFT", "RTGS"],
      correct: "NEFT",
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
                <CheckCircle className="text-green-400 h-6 w-6" /> Perfect! You know digital payments 🎉
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
