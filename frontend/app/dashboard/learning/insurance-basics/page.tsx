"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Shield,
  HeartPulse,
  Car,
  Users,
  FileText,
  CheckCircle,
  XCircle,
  RotateCcw,
  AlertTriangle,
  Sparkles,
} from "lucide-react"

/**
 * Lesson: Insurance Basics — Life, Health, Vehicle
 */

export default function Lesson_InsuranceBasics() {
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
           🛡️ Insurance Basics — Life, Health & Vehicle
        </h1>
        <p className="text-blue-200 text-lg max-w-2xl mx-auto">
          Insurance isn’t an expense — it’s your financial shield 🛡️.  
          Learn how **life, health, and motor insurance** protect your family, income, and peace of mind.
        </p>
      </div>

      {/* 1️⃣ What is Insurance? */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white/10 p-6 rounded-2xl backdrop-blur-lg border border-white/10 shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-white mb-3 flex items-center gap-2"><Shield className="h-6 w-6 text-blue-400" /> 1️⃣ What is Insurance?</h2>
        <p className="text-blue-100 leading-relaxed">
          <strong>Insurance</strong> is a contract where you pay a small amount (premium)  
          to protect yourself from large financial losses caused by events like accidents, illness, or death.
        </p>
        <div className="bg-white/5 p-4 rounded-xl mt-4 border border-white/10 text-sm text-blue-100">
          Example: You pay ₹10,000 yearly for a ₹10 lakh health policy →  
          if hospitalized, the insurer covers bills up to ₹10 lakh.
        </div>
      </motion.div>

      {/* 2️⃣ Types of Insurance */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-blue-800/20 to-cyan-700/20 p-6 rounded-2xl border border-white/10 shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-white mb-3 flex items-center gap-2"><FileText className="h-6 w-6 text-green-400" /> 2️⃣ The Three Core Types</h2>
        <ul className="list-disc list-inside text-blue-100 space-y-3">
          <li><strong>🧍‍♂️ Life Insurance:</strong> Protects your family’s income if you die unexpectedly.</li>
          <li><strong>❤️ Health Insurance:</strong> Covers hospitalization, surgeries, and medical bills.</li>
          <li><strong>🚗 Vehicle Insurance:</strong> Covers accident damage, theft, and third-party liability.</li>
        </ul>
      </motion.div>

      {/* 3️⃣ Life Insurance — Explained */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white/10 p-6 rounded-2xl backdrop-blur-lg border border-white/10 shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-white mb-3 flex items-center gap-2"><Users className="h-6 w-6 text-purple-400" /> 3️⃣ Life Insurance — Protecting Dependents</h2>
        <p className="text-blue-100 leading-relaxed">
          Life insurance ensures your family remains financially secure after your death.  
          The insurer pays a lump sum (called a <strong>sum assured</strong>) to your nominee.
        </p>
        <ul className="list-disc list-inside text-blue-100 mt-3 space-y-2">
          <li>💡 <strong>Term Plan:</strong> Pure protection, lowest premium, no maturity value.</li>
          <li>💰 <strong>Endowment / ULIP:</strong> Combines insurance + investment (higher cost).</li>
          <li>📈 Recommended: <strong>Term plan = 10–15× your annual income.</strong></li>
        </ul>
      </motion.div>

      {/* 4️⃣ Health Insurance — Explained */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-blue-900/20 to-cyan-800/20 p-6 rounded-2xl border border-white/10 shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-white mb-3 flex items-center gap-2"><HeartPulse className="h-6 w-6 text-red-400" /> 4️⃣ Health Insurance — Medical Expense Protection</h2>
        <p className="text-blue-100 leading-relaxed">
          Health insurance reimburses or directly pays your medical bills in case of hospitalization.
        </p>
        <ul className="list-disc list-inside text-blue-100 mt-3 space-y-2">
          <li>🏥 Individual or Family Floater Plans available.</li>
          <li>🩺 Covers hospital room, surgery, ambulance, daycare treatments.</li>
          <li>⚕️ Look for cashless hospitals and low claim rejection ratios.</li>
          <li>📊 Tax Benefit: Premiums deductible under <strong>Section 80D</strong>.</li>
        </ul>
      </motion.div>

      {/* 5️⃣ Vehicle Insurance — Explained */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white/10 p-6 rounded-2xl backdrop-blur-lg border border-white/10 shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-white mb-3 flex items-center gap-2"><Car className="h-6 w-6 text-orange-400" /> 5️⃣ Vehicle Insurance — Mandatory by Law</h2>
        <p className="text-blue-100 leading-relaxed">
          Under the <strong>Motor Vehicles Act, 1988</strong>, every vehicle in India must have valid insurance.
        </p>
        <ul className="list-disc list-inside text-blue-100 mt-3 space-y-2">
          <li>🧾 <strong>Third-Party Insurance:</strong> Mandatory; covers injury or damage to others.</li>
          <li>🚘 <strong>Comprehensive Insurance:</strong> Includes own vehicle damage + theft cover.</li>
          <li>💥 Add-ons: Zero Depreciation, Engine Protection, Roadside Assistance.</li>
        </ul>
      </motion.div>

      {/* 6️⃣ Common Mistakes to Avoid */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-blue-700/20 to-cyan-700/20 p-6 rounded-2xl border border-white/10 shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-white mb-3 flex items-center gap-2">
          <AlertTriangle className="h-6 w-6 text-yellow-400" /> 6️⃣ Common Mistakes People Make
        </h2>
        <ul className="list-disc list-inside text-blue-100 space-y-2">
          <li>Choosing investment-linked plans instead of term insurance.</li>
          <li>Ignoring health insurance provided by employers.</li>
          <li>Underinsuring vehicle value to save small premiums.</li>
          <li>Not disclosing pre-existing illnesses → claim rejection.</li>
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
          <li>Insurance transfers risk from you to the company.</li>
          <li>Start with term life + family health + vehicle policy.</li>
          <li>Always read inclusions/exclusions before buying.</li>
          <li>Claim honestly; renew policies on time.</li>
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
      question: "Which insurance type is mandatory in India by law?",
      options: ["Life", "Health", "Vehicle", "Travel"],
      correct: "Vehicle",
    },
    {
      question: "Under which section can you claim tax benefit for health insurance?",
      options: ["Section 80C", "Section 80D", "Section 24", "Section 10(14)"],
      correct: "Section 80D",
    },
    {
      question: "What’s the ideal life insurance coverage amount?",
      options: [
        "Equal to your annual income",
        "5× your annual income",
        "10–15× your annual income",
        "Depends on age only",
      ],
      correct: "10–15× your annual income",
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
                <CheckCircle className="text-green-400 h-6 w-6" /> Great job! You’ve mastered insurance basics 🎉
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
