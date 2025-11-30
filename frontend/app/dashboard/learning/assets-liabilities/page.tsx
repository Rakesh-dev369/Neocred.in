"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  ArrowDownCircle,
  ArrowUpCircle,
  Wallet,
  Home,
  Car,
  Smartphone,
  PiggyBank,
  TrendingUp,
  CheckCircle,
  XCircle,
  RotateCcw,
  Scale,
  Lightbulb,
  Grid3X3,
  Sparkles,
} from "lucide-react"

/**
 * Lesson: Difference Between Assets & Liabilities
 */

export default function Lesson_AssetsLiabilities() {
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
          <Wallet className="h-8 w-8 text-cyan-400" /> Assets vs Liabilities
        </h1>
        <p className="text-blue-200 text-lg max-w-2xl mx-auto">
          The most powerful money rule: <strong>Assets give you money</strong>,  
          <strong>Liabilities take money away</strong>. This is where wealth truly begins.
        </p>
      </div>

      {/* 1️⃣ Simple Definition with Visual */}
      <div className="flex items-center gap-2 mb-4">
        <Scale className="h-6 w-6 text-blue-400" />
        <h2 className="text-2xl font-semibold text-white">1️⃣ Simple Definition with Visual</h2>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid md:grid-cols-2 gap-6"
      >
        {/* Assets */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-gradient-to-r from-green-700/30 to-emerald-600/30 p-6 rounded-2xl border border-white/10"
        >
          <div className="flex items-center gap-3 mb-3">
            <ArrowUpCircle className="h-6 w-6 text-green-400" />
            <h2 className="text-xl font-semibold text-white">Assets</h2>
          </div>
          <p className="text-blue-100 text-sm mb-3">
            Assets are things you <strong>own that put money in your pocket</strong>.
          </p>
          <ul className="text-blue-100 text-sm space-y-2">
            <li>🏠 Rental property → Earns rent</li>
            <li>📈 Stocks / Mutual funds → Generate returns</li>
            <li>💼 Side business → Gives income</li>
            <li>💳 Cash savings → Earns interest</li>
          </ul>
        </motion.div>

        {/* Liabilities */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-gradient-to-r from-red-700/30 to-pink-600/30 p-6 rounded-2xl border border-white/10"
        >
          <div className="flex items-center gap-3 mb-3">
            <ArrowDownCircle className="h-6 w-6 text-red-400" />
            <h2 className="text-xl font-semibold text-white">Liabilities</h2>
          </div>
          <p className="text-blue-100 text-sm mb-3">
            Liabilities are things that <strong>take money out of your pocket</strong>.
          </p>
          <ul className="text-blue-100 text-sm space-y-2">
            <li>🚗 Car EMI → Monthly payment + fuel + maintenance</li>
            <li>🏡 Home loan → EMI burden until rented/paid off</li>
            <li>📱 Costly gadgets → Lose value fast (depreciation)</li>
            <li>🧾 Credit card debt → Heavy interest</li>
          </ul>
        </motion.div>
      </motion.div>

      {/* 2️⃣ House Example — Asset or Liability? */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white/10 p-6 rounded-2xl backdrop-blur-lg border border-white/10 shadow-lg"
      >
        <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2"><Home className="h-6 w-6 text-orange-400" /> 2️⃣ Is Your House an Asset?</h2>
        <p className="text-blue-100 leading-relaxed">
          ✅ If it gives income — **Asset** (Rental Property)  
          ❌ If it only takes EMIs and maintenance — **Liability**  
        </p>
        <p className="text-blue-200 text-sm mt-2">
          Your home is an emotional asset ❤️ but a **financial liability** *until* it generates income.
        </p>
      </motion.div>

      {/* 3️⃣ Simple Mnemonic */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="bg-gradient-to-r from-blue-900/20 to-cyan-800/20 p-6 rounded-2xl border border-white/10 shadow-lg"
      >
        <div className="flex items-center gap-2 mb-4">
          <Lightbulb className="h-6 w-6 text-yellow-400" />
          <h2 className="text-xl font-semibold text-white">3️⃣ Simple Mnemonic</h2>
        </div>
        <p className="text-center text-xl font-semibold text-white">
          ✔️ <strong>Assets = Money → In</strong> <br />
          ❌ <strong>Liabilities = Money → Out</strong>
        </p>
      </motion.div>

      {/* 4️⃣ Examples Grid */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Grid3X3 className="h-6 w-6 text-purple-400" />
          <h2 className="text-2xl font-semibold text-white">4️⃣ Examples Grid</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
        <ExampleCard icon={Home} title="Self Residence" type="Liability" reason="Monthly EMI + no income" color="red" />
        <ExampleCard icon={Home} title="Rented House" type="Asset" reason="Monthly rental income" color="green" />
        <ExampleCard icon={Car} title="Car" type="Liability" reason="Depreciates + fuel/maintenance" color="red" />
        <ExampleCard icon={PiggyBank} title="SIP in Mutual Funds" type="Asset" reason="Grows your wealth" color="green" />
        <ExampleCard icon={Smartphone} title="Flagship Phone" type="Liability" reason="Loses value fast" color="red" />
        <ExampleCard icon={TrendingUp} title="Business Ownership" type="Asset" reason="Income + capital growth" color="green" />
        </div>
      </div>

      {/* 5️⃣ Key Takeaways */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="bg-white/10 p-6 rounded-2xl border border-white/10 shadow-lg"
      >
        <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2"><Sparkles className="h-6 w-6 text-cyan-400" /> 📘 Key Takeaways</h2>
        <ul className="list-disc list-inside text-blue-100 space-y-2 text-sm">
          <li>Buy more **assets** to grow wealth.</li>
          <li>Reduce **liability EMIs** as income increases.</li>
          <li>Avoid buying things that **look rich but make you poor**.</li>
          <li>Turn liabilities into assets when possible (e.g., rent out car/house).</li>
        </ul>
      </motion.div>

      {/* 6️⃣ Quiz Section */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="bg-white/10 p-6 rounded-2xl backdrop-blur-lg border border-white/10 shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-white mb-3">💬 Quick Quiz</h2>
        <QuizComponent />
      </motion.div>
    </motion.section>
  )
}

/* Example Card */
function ExampleCard({ icon: Icon, title, type, reason, color }: any) {
  const gradient =
    color === "green"
      ? "from-green-700/30 to-emerald-600/30"
      : "from-red-700/30 to-pink-600/30"

  const iconColor = color === "green" ? "text-green-400" : "text-red-400"

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className={`rounded-2xl p-5 border border-white/10 bg-gradient-to-r ${gradient}`}
    >
      <div className="flex items-center gap-3 mb-2">
        <Icon className={`h-6 w-6 ${iconColor}`} />
        <h3 className="text-white font-semibold text-lg">{title}</h3>
      </div>
      <p className="text-blue-100 text-sm">
        {type} → {reason}
      </p>
    </motion.div>
  )
}

/* Quiz Component */
function QuizComponent() {
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [score, setScore] = useState(0)

  const quiz = [
    {
      question: "Which one is a financial asset?",
      options: ["Car on EMI", "Self residence", "Rental property", "Flagship phone"],
      correct: "Rental property",
    },
    {
      question: "Assets always:",
      options: [
        "Increase liabilities",
        "Increase income/wealth",
        "Lose value",
        "Take money out",
      ],
      correct: "Increase income/wealth",
    },
    {
      question: "A car you use daily is:",
      options: [
        "Asset (financially)",
        "Liability (financially)",
        "Only asset",
        "Only liability",
      ],
      correct: "Liability (financially)",
    },
  ]

  const handleSelect = (i: number, option: string) => {
    if (!submitted) setAnswers((prev) => ({ ...prev, [i]: option }))
  }

  const handleSubmit = () => {
    let correctCount = quiz.filter((q, i) => answers[i] === q.correct).length
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
      {quiz.map((q, i) => {
        const selected = answers[i]
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white/5 p-4 rounded-xl border border-white/10"
          >
            <p className="font-medium mb-3">
              Q{i + 1}: {q.question}
            </p>
            <div className="space-y-2">
              {q.options.map((option, j) => {
                const isCorrect = option === q.correct
                return (
                  <motion.button
                    key={j}
                    onClick={() => handleSelect(i, option)}
                    disabled={submitted}
                    whileHover={!submitted ? { scale: 1.03 } : {}}
                    className={`w-full text-left px-4 py-2 rounded-lg border transition-all ${
                      selected === option
                        ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white border-transparent"
                        : "bg-white/10 hover:bg-white/20 border-white/10"
                    } ${
                      submitted && isCorrect
                        ? "border-green-400 bg-green-500/10"
                        : submitted && selected === option && !isCorrect
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
        )
      })}

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
                <CheckCircle className="text-green-400 h-6 w-6" /> Perfect! You're building wealth mindset 🎉
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
