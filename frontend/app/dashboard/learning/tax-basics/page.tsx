"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  FileText,
  Wallet,
  Landmark,
  Sparkles,
  CheckCircle,
  XCircle,
  RotateCcw,
  IdCard,
  FileSpreadsheet,
} from "lucide-react"

/**
 * Lesson: Understanding Tax Basics — What is Income Tax, PAN, and Form 16
 */

export default function Lesson_TaxBasics() {
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
          <Landmark className="h-8 w-8 text-cyan-400" /> Understanding Tax Basics
        </h1>
        <p className="text-blue-200 text-lg max-w-2xl mx-auto">
          Let’s simplify India’s tax system — understand Income Tax, PAN, and Form 16, and how they shape your financial record.
        </p>
      </div>

      {/* 1️⃣ What is Income Tax */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-white/10 p-6 rounded-2xl backdrop-blur-lg border border-white/10 shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-white mb-3 flex items-center gap-2"><Landmark className="h-6 w-6 text-green-400" /> 1️⃣ What is Income Tax?</h2>
        <p className="text-blue-100 leading-relaxed">
          <strong>Income Tax</strong> is a direct tax you pay to the Government of India on your income.  
          It funds public services like roads, healthcare, and education.
        </p>
        <p className="mt-3 text-blue-100">
          Anyone earning above ₹3,00,000 (under the new tax regime for FY 2024–25) must pay income tax, after considering applicable rebates and deductions.
        </p>
        <ul className="list-disc list-inside text-blue-100 mt-3 space-y-2">
          <li><strong>Taxpayer:</strong> Individual, Hindu Undivided Family (HUF), Company, or Firm.</li>
          <li><strong>Tax Year:</strong> April 1 – March 31 (Financial Year).</li>
          <li><strong>Assessment Year:</strong> The following year when you file your return.</li>
        </ul>
      </motion.div>

      {/* 2️⃣ Income Tax Slabs (FY 2024–25 Example) */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-gradient-to-r from-blue-600/20 to-cyan-600/10 p-6 rounded-2xl border border-white/10 shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-white mb-3 flex items-center gap-2"><FileSpreadsheet className="h-6 w-6 text-blue-400" /> 2️⃣ Income Tax Slabs (FY 2024–25)</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-blue-100 border-collapse">
            <thead>
              <tr className="border-b border-white/10 text-blue-200">
                <th className="p-2 text-left">Income Range (₹)</th>
                <th className="p-2 text-left">Tax Rate</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="p-2">0 – 3,00,000</td><td className="p-2">Nil</td></tr>
              <tr><td className="p-2">3,00,001 – 6,00,000</td><td className="p-2">5%</td></tr>
              <tr><td className="p-2">6,00,001 – 9,00,000</td><td className="p-2">10%</td></tr>
              <tr><td className="p-2">9,00,001 – 12,00,000</td><td className="p-2">15%</td></tr>
              <tr><td className="p-2">12,00,001 – 15,00,000</td><td className="p-2">20%</td></tr>
              <tr><td className="p-2">15,00,001 & above</td><td className="p-2">30%</td></tr>
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-blue-100">
          Senior citizens (60+ years) get higher exemption limits. You can choose between <strong>old</strong> and <strong>new</strong> regimes when filing your ITR.
        </p>
      </motion.div>

      {/* 3️⃣ What is PAN? */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-white/10 p-6 rounded-2xl backdrop-blur-lg border border-white/10 shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-white mb-3 flex items-center gap-2"><IdCard className="h-6 w-6 text-purple-400" /> 3️⃣ What is PAN (Permanent Account Number)?</h2>
        <p className="text-blue-100 leading-relaxed">
          <strong>PAN</strong> is your 10-character alphanumeric ID issued by the Income Tax Department.  
          It links all your financial transactions like salary, mutual funds, and credit cards.
        </p>
        <ul className="list-disc list-inside text-blue-100 mt-3 space-y-2">
          <li>Example: <strong>ABCDE1234F</strong></li>
          <li>Mandatory for salary credit, opening bank accounts, or filing tax returns.</li>
          <li>PAN helps prevent tax evasion by tracking high-value transactions.</li>
        </ul>
        <p className="mt-3 text-blue-100">
          You can apply for a PAN online via <strong>NSDL</strong> or <strong>UTIITSL</strong> websites.
        </p>
      </motion.div>

      {/* 4️⃣ What is Form 16? */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-white/10 p-6 rounded-2xl backdrop-blur-lg border border-white/10 shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-white mb-3 flex items-center gap-2"><FileText className="h-6 w-6 text-orange-400" /> 4️⃣ What is Form 16?</h2>
        <p className="text-blue-100 leading-relaxed">
          <strong>Form 16</strong> is your annual tax certificate issued by your employer. It summarizes your total salary, deductions (like PF, HRA, 80C), and tax paid (TDS).
        </p>
        <ul className="list-disc list-inside text-blue-100 mt-3 space-y-2">
          <li><strong>Part A:</strong> Employer & Employee details, TAN, and TDS summary.</li>
          <li><strong>Part B:</strong> Salary breakup, deductions (80C, 80D), and final taxable income.</li>
        </ul>
        <p className="mt-3 text-blue-100">
          You’ll receive Form 16 by <strong>June 15</strong> each year — essential for filing your Income Tax Return (ITR).
        </p>
      </motion.div>

      {/* 5️⃣ How to File Income Tax Return (ITR) */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-gradient-to-r from-blue-700/20 to-cyan-600/20 p-6 rounded-2xl border border-white/10 shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-white mb-3 flex items-center gap-2"><FileSpreadsheet className="h-6 w-6 text-cyan-400" /> 5️⃣ How to File Your Income Tax Return (ITR)</h2>
        <ul className="list-disc list-inside text-blue-100 space-y-2">
          <li>Visit <strong>https://www.incometax.gov.in</strong></li>
          <li>Login using PAN (as user ID)</li>
          <li>Download pre-filled ITR form based on Form 16</li>
          <li>Verify income, deductions, and TDS details</li>
          <li>Submit and e-verify using Aadhaar OTP or net banking</li>
        </ul>
        <p className="mt-3 text-blue-100">
          Filing ITR not only fulfills legal duty but also helps with loan approvals, visa applications, and creditworthiness.
        </p>
      </motion.div>

      {/* 6️⃣ Common Tax Deductions */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-white/10 p-6 rounded-2xl backdrop-blur-lg border border-white/10 shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-white mb-3 flex items-center gap-2"><Wallet className="h-6 w-6 text-pink-400" /> 6️⃣ Common Tax Deductions (Old Regime)</h2>
        <ul className="list-disc list-inside text-blue-100 space-y-2">
          <li><strong>Section 80C:</strong> ₹1.5L for ELSS, PPF, EPF, Life Insurance.</li>
          <li><strong>Section 80D:</strong> ₹25,000 for Health Insurance premiums.</li>
          <li><strong>HRA:</strong> Claim exemption on rent paid (based on city & salary).</li>
          <li><strong>Standard Deduction:</strong> ₹50,000 for salaried individuals.</li>
        </ul>
        <p className="mt-3 text-blue-100">
          Understanding deductions helps you legally reduce tax — it’s smart financial planning, not evasion.
        </p>
      </motion.div>

      {/* 7️⃣ Key Takeaways */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-white/10 p-6 rounded-2xl backdrop-blur-lg border border-white/10 shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-white mb-3 flex items-center gap-2"><Sparkles className="h-6 w-6 text-yellow-400" /> 📘 Key Takeaways</h2>
        <ul className="list-disc list-inside text-blue-100 space-y-2">
          <li>Income Tax = Government’s share of your earnings.</li>
          <li>PAN links all your financial activities under one identity.</li>
          <li>Form 16 is proof of salary, deductions, and TDS — required for ITR filing.</li>
          <li>File ITR yearly to stay compliant and maintain a healthy financial profile.</li>
        </ul>
      </motion.div>

      {/* 8️⃣ Quiz & Challenge */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
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
   --------------------------- */
function QuizComponent() {
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [score, setScore] = useState(0)

  const quiz = [
    {
      question: "What is the purpose of PAN?",
      options: [
        "Link financial transactions to one ID",
        "Used for voting",
        "Acts as a debit card",
        "Only for government employees",
      ],
      correct: "Link financial transactions to one ID",
    },
    {
      question: "Form 16 is issued by whom?",
      options: [
        "Employer",
        "Income Tax Department",
        "Bank",
        "NSDL",
      ],
      correct: "Employer",
    },
    {
      question: "Which section allows ₹1.5 lakh tax saving under ELSS, PPF, LIC?",
      options: [
        "80C",
        "80D",
        "24B",
        "10(10D)",
      ],
      correct: "80C",
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
                <CheckCircle className="text-green-400 h-6 w-6" /> Excellent! All correct 🎉
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
