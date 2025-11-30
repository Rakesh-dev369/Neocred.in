"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  BookOpen,
  PieChart,
  Info,
  TrendingUp,
  LineChart,
  Layers,
  Percent,
  BarChart2,
  ShieldCheck,
  CheckCircle,
  XCircle,
  RotateCcw,
  Target,
  AlertTriangle,
  Lightbulb,
  FileSearch,
} from "lucide-react"

/**
 * Lesson: How to Read a Mutual Fund Fact Sheet
 * Level: Intermediate (Educational Only, SEBI-compliant)
 */

export default function Lesson_MFFactSheet() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-5xl mx-auto space-y-10 text-blue-50"
    >
      {/* Header */}
      <header className="text-center space-y-3">
        <h1 className="text-3xl sm:text-4xl font-bold text-white flex items-center justify-center gap-2">
          <BookOpen className="h-8 w-8 text-cyan-400" />
          How to Read a Mutual Fund Fact Sheet
        </h1>
        <p className="text-blue-200 text-lg">
          Learn how to decode mutual fund fact sheets — the “report card” of your investment. 📊
        </p>
        <Disclaimer />
      </header>

      {/* 1️⃣ What Is a Fact Sheet */}
      <LessonCard title={<div className="flex items-center gap-2"><Info className="h-5 w-5 text-cyan-400" />1️⃣ What Is a Mutual Fund Fact Sheet?</div>}>
        <p>
          A mutual fund fact sheet is a monthly published summary by the fund house showing key
          information about a fund’s performance, holdings, and risk profile. It’s like the
          <strong> report card </strong>of your investment.
        </p>
        <ul className="list-disc list-inside text-sm space-y-2 mt-2">
          <li>Published monthly by AMCs (Asset Management Companies).</li>
          <li>Shows performance, benchmark comparison, portfolio holdings, risk ratio, and fund manager details.</li>
          <li>Helps investors make informed decisions — not guesswork.</li>
        </ul>
      </LessonCard>

      {/* 2️⃣ Key Sections Explained */}
      <LessonCard title={<div className="flex items-center gap-2"><FileSearch className="h-5 w-5 text-cyan-400" />2️⃣ Key Sections in a Fact Sheet</div>}>
        <div className="grid md:grid-cols-2 gap-5">
          <FactCard
            icon={<TrendingUp className="text-cyan-400 h-5 w-5" />}
            title="Fund Overview"
            desc="Basic info: Fund name, type (Equity/Debt/Hybrid), category, benchmark index, and launch date."
          />
          <FactCard
            icon={<LineChart className="text-yellow-400 h-5 w-5" />}
            title="Performance Table"
            desc="Shows returns over 1Y, 3Y, 5Y, and since inception vs benchmark. Always compare with category average."
          />
          <FactCard
            icon={<PieChart className="text-green-400 h-5 w-5" />}
            title="Portfolio Holdings"
            desc="Top 10 equity holdings or debt securities; shows sector diversification and stock concentration."
          />
          <FactCard
            icon={<Percent className="text-pink-400 h-5 w-5" />}
            title="Expense Ratio"
            desc="Indicates the % of fund assets used for management and operations — lower is better (for same performance)."
          />
          <FactCard
            icon={<Layers className="text-purple-400 h-5 w-5" />}
            title="Asset Allocation"
            desc="Shows how much is in equity, debt, cash, etc. — helps understand the fund’s risk exposure."
          />
          <FactCard
            icon={<BarChart2 className="text-orange-400 h-5 w-5" />}
            title="Risk Ratios"
            desc="Includes Standard Deviation, Sharpe Ratio, Beta — tells how volatile or stable the fund is."
          />
        </div>
      </LessonCard>

      {/* 3️⃣ Risk Ratios Explained */}
      <LessonCard title={<div className="flex items-center gap-2"><Target className="h-5 w-5 text-cyan-400" />3️⃣ Key Risk Ratios Simplified</div>}>
        <table className="w-full text-left border-collapse text-sm text-blue-100">
          <thead className="bg-white/10 text-blue-200 uppercase text-xs">
            <tr>
              <th className="p-3 border-b border-white/10">Ratio</th>
              <th className="p-3 border-b border-white/10">Meaning</th>
              <th className="p-3 border-b border-white/10">Interpretation</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-white/10">
              <td className="p-3 font-medium text-white">Standard Deviation</td>
              <td className="p-3">Volatility of returns vs average performance.</td>
              <td className="p-3">Lower = more stable fund.</td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="p-3 font-medium text-white">Sharpe Ratio</td>
              <td className="p-3">Measures return per unit of risk taken.</td>
              <td className="p-3">Higher = better risk-adjusted returns.</td>
            </tr>
            <tr>
              <td className="p-3 font-medium text-white">Beta</td>
              <td className="p-3">Shows fund’s volatility vs market index.</td>
              <td className="p-3">Beta &lt; 1 = less volatile; Beta &gt; 1 = more volatile.</td>
            </tr>
          </tbody>
        </table>
      </LessonCard>

      {/* 4️⃣ Example Walkthrough */}
      <LessonCard title={<div className="flex items-center gap-2"><PieChart className="h-5 w-5 text-cyan-400" />4️⃣ Example: Decoding a Real Fund</div>}>
        <p>
          Example: “HDFC Flexi Cap Fund” (Equity)  
          <br />
          Benchmark: Nifty 500 TRI • Expense Ratio: 1.05% • Sharpe Ratio: 0.85
        </p>
        <ul className="list-disc list-inside text-sm space-y-2 mt-3">
          <li>
            <strong>Top Holdings:</strong> ICICI Bank (9%), Infosys (6%), HDFC Bank (5%)
          </li>
          <li>
            <strong>Sector Split:</strong> Banking 30%, IT 15%, Energy 10%
          </li>
          <li>
            <strong>Returns:</strong> 1Y: 12.5% • 3Y: 17.8% CAGR • 5Y: 14.2% CAGR
          </li>
        </ul>
        <p className="text-xs text-blue-300 mt-3">
          Always read footnotes for “Direct” vs “Regular” plans — expense ratio impacts long-term returns.
        </p>
      </LessonCard>

      {/* 5️⃣ Common Red Flags */}
      <LessonCard title={<div className="flex items-center gap-2"><AlertTriangle className="h-5 w-5 text-red-400" />5️⃣ Red Flags While Reading a Fact Sheet</div>}>
        <ul className="list-disc list-inside text-sm space-y-2">
          <li>High expense ratio (especially in index funds).</li>
          <li>Frequent fund manager changes (indicates instability).</li>
          <li>Very high sector concentration (risk of poor diversification).</li>
          <li>Performance deviation from benchmark for multiple years.</li>
        </ul>
      </LessonCard>

      {/* 6️⃣ Takeaways */}
      <LessonCard title={<div className="flex items-center gap-2"><Lightbulb className="h-5 w-5 text-green-400" />📘 Key Takeaways</div>}>
        <ul className="list-disc list-inside text-sm space-y-2">
          <li>Fact sheet = your monthly health check of a mutual fund.</li>
          <li>Always check 3Y–5Y returns, risk ratios, and expense ratio.</li>
          <li>Direct Plans often give better returns than Regular Plans due to lower expenses.</li>
        </ul>
      </LessonCard>

      {/* 7️⃣ Quiz */}
      <LessonCard title="💬 Quick Quiz">
        <QuizComponent />
      </LessonCard>
    </motion.section>
  )
}

/* ======================= Components ======================= */

function LessonCard({ title, children }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white/10 p-6 rounded-2xl border border-white/10 shadow-lg space-y-3"
    >
      <h2 className="text-xl font-semibold text-white">{title}</h2>
      <div className="text-blue-100 text-sm leading-relaxed">{children}</div>
    </motion.div>
  )
}

function Disclaimer() {
  return (
    <p className="text-xs text-yellow-300 flex items-center gap-2 justify-center">
      <ShieldCheck className="h-4 w-4" />
      Educational Only — NeoCred is not a SEBI-registered advisor.
    </p>
  )
}

function FactCard({ icon, title, desc }: any) {
  return (
    <div className="bg-white/5 p-4 rounded-xl border border-white/10">
      <div className="flex items-center gap-2 mb-2">
        {icon}
        <h3 className="text-white font-semibold text-base">{title}</h3>
      </div>
      <p className="text-blue-200 text-sm">{desc}</p>
    </div>
  )
}

/* ======================= Quiz ======================= */
function QuizComponent() {
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [score, setScore] = useState(0)

  const quiz = [
    {
      question: "What does the Expense Ratio represent?",
      options: [
        "Fund’s return percentage",
        "Annual fund management cost",
        "Tax paid on investment",
        "Risk level of the fund",
      ],
      correct: "Annual fund management cost",
    },
    {
      question: "Which ratio measures risk-adjusted performance?",
      options: ["Beta", "Standard Deviation", "Sharpe Ratio", "Expense Ratio"],
      correct: "Sharpe Ratio",
    },
    {
      question: "High Beta (>1) indicates:",
      options: [
        "Fund is less volatile than the market",
        "Fund moves opposite to the market",
        "Fund is more volatile than the market",
        "Fund has better returns",
      ],
      correct: "Fund is more volatile than the market",
    },
  ]

  const handleSelect = (qIndex: number, opt: string) => {
    if (!submitted) setAnswers((prev) => ({ ...prev, [qIndex]: opt }))
  }

  const handleSubmit = () => {
    const correctCount = quiz.filter((q, i) => answers[i] === q.correct).length
    setScore(correctCount)
    setSubmitted(true)
  }

  const reset = () => {
    setAnswers({})
    setSubmitted(false)
    setScore(0)
  }

  return (
    <div className="space-y-6">
      {quiz.map((q, qi) => (
        <motion.div
          key={qi}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white/5 p-4 rounded-xl border border-white/10"
        >
          <p className="font-medium text-blue-100 mb-3">
            Q{qi + 1}: {q.question}
          </p>
          {q.options.map((opt, oi) => {
            const isSelected = answers[qi] === opt
            const isCorrect = opt === q.correct
            return (
              <motion.button
                key={oi}
                onClick={() => handleSelect(qi, opt)}
                disabled={submitted}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full text-left px-4 py-2 rounded-lg border mb-2 transition-all ${
                  isSelected
                    ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white border-transparent"
                    : "bg-white/10 hover:bg-white/20 border-white/10"
                } ${
                  submitted && isCorrect ? "border-green-400 bg-green-500/10" : ""
                } ${
                  submitted && isSelected && !isCorrect
                    ? "border-red-400 bg-red-500/10"
                    : ""
                }`}
              >
                {opt}
              </motion.button>
            )
          })}
        </motion.div>
      ))}

      {!submitted ? (
        <motion.button
          onClick={handleSubmit}
          whileHover={{ scale: 1.05 }}
          disabled={Object.keys(answers).length < quiz.length}
          className="px-6 py-2 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white disabled:opacity-50"
        >
          Submit
        </motion.button>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center space-y-3"
        >
          <div className="text-lg font-semibold flex justify-center gap-2 text-white">
            {score === quiz.length ? (
              <>
                <CheckCircle className="text-green-400 h-6 w-6" /> Excellent! 🎯
              </>
            ) : (
              <>
                <XCircle className="text-yellow-400 h-6 w-6" /> {score}/{quiz.length} correct
              </>
            )}
          </div>
          <motion.button
            onClick={reset}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm"
          >
            <RotateCcw className="inline-block h-4 w-4 mr-1" /> Try Again
          </motion.button>
        </motion.div>
      )}
    </div>
  )
}
