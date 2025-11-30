"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Shield,
  HeartPulse,
  PiggyBank,
  LineChart,
  IndianRupee,
  CheckCircle,
  XCircle,
  RotateCcw,
  ShieldCheck,
  Info,
  BarChart3,
  Target,
  TrendingUp,
  Lightbulb,
  SparkleIcon,
  Sparkles,
} from "lucide-react"

/**
 * Lesson: Insurance Planning — Term vs ULIP vs Endowment
 * Level: Intermediate (Educational Only, SEBI-compliant)
 */

export default function Lesson_InsurancePlanning() {
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
          <Shield className="h-8 w-8 text-cyan-400" />
          Insurance Planning — Term vs ULIP vs Endowment
        </h1>
        <p className="text-blue-200 text-lg">
          Understand the three major life insurance products and choose what aligns with your financial goals. 🧭
        </p>
        <Disclaimer />
      </header>

      {/* 1️⃣ Concept */}
      <LessonCard title={<div className="flex items-center gap-2"><Info className="h-5 w-5 text-cyan-400" />1️⃣ Why Insurance Planning Matters</div>}>
        <p>
          Insurance isn’t just about death benefits — it’s a **financial safety net** that protects your family’s
          lifestyle, income, and goals in your absence. Choosing the right policy type ensures the **right coverage at the right cost.**
        </p>
        <ul className="list-disc list-inside text-sm mt-2 space-y-1">
          <li>Term insurance → pure protection.</li>
          <li>ULIP → investment + insurance hybrid.</li>
          <li>Endowment → savings-oriented with guaranteed return.</li>
        </ul>
      </LessonCard>

      {/* 2️⃣ Overview Table */}
      <LessonCard title={<div className="flex items-center gap-2"><BarChart3 className="h-5 w-5 text-cyan-400" />2️⃣ Comparison: Term vs ULIP vs Endowment</div>}>
        <table className="w-full text-left border-collapse text-sm text-blue-100 mt-3">
          <thead className="bg-white/10 text-blue-200 uppercase text-xs">
            <tr>
              <th className="p-3 border-b border-white/10">Feature</th>
              <th className="p-3 border-b border-white/10">Term Plan</th>
              <th className="p-3 border-b border-white/10">ULIP</th>
              <th className="p-3 border-b border-white/10">Endowment</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-white/10">
              <td className="p-3 text-white">Purpose</td>
              <td className="p-3">Pure protection</td>
              <td className="p-3">Protection + investment</td>
              <td className="p-3">Protection + guaranteed savings</td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="p-3 text-white">Returns</td>
              <td className="p-3">No returns (only death benefit)</td>
              <td className="p-3">Market-linked (equity/debt)</td>
              <td className="p-3">Fixed maturity value</td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="p-3 text-white">Lock-in Period</td>
              <td className="p-3">Usually 1 year</td>
              <td className="p-3">5 years (minimum)</td>
              <td className="p-3">10–20 years typical</td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="p-3 text-white">Tax Benefits</td>
              <td className="p-3">80C + 10(10D)</td>
              <td className="p-3">80C + 10(10D)</td>
              <td className="p-3">80C + 10(10D)</td>
            </tr>
            <tr>
              <td className="p-3 text-white">Ideal For</td>
              <td className="p-3">Income protection seekers</td>
              <td className="p-3">Balanced investors</td>
              <td className="p-3">Conservative savers</td>
            </tr>
          </tbody>
        </table>
      </LessonCard>

      {/* 3️⃣ Term Insurance Deep Dive */}
      <LessonCard title={<div className="flex items-center gap-2"><Shield className="h-5 w-5 text-cyan-400" />3️⃣ Term Insurance — Pure Protection</div>}>
        <p>
          Provides high coverage at low premium. If the insured dies during the policy term, the nominee receives the **sum assured.**
          If they survive, there’s **no maturity benefit.**
        </p>
        <ul className="list-disc list-inside text-sm mt-2 space-y-1">
          <li>Best for: Income earners with dependents.</li>
          <li>Sum assured: 10–15× annual income recommended.</li>
          <li>Variants: Regular term, return of premium, increasing term cover.</li>
        </ul>
      </LessonCard>

      {/* 4️⃣ ULIP Explained */}
      <LessonCard title={<div className="flex items-center gap-2"><LineChart className="h-5 w-5 text-cyan-400" />4️⃣ ULIP — Investment + Insurance Hybrid</div>}>
        <p>
          ULIP stands for <strong>Unit Linked Insurance Plan</strong>. A portion of your premium goes toward life cover,
          and the rest is invested in **market funds (equity, debt, or hybrid)** chosen by you.
        </p>
        <ul className="list-disc list-inside text-sm mt-2 space-y-1">
          <li>Lock-in: 5 years minimum.</li>
          <li>Flexibility to switch funds.</li>
          <li>Market risk applies; long-term returns can beat traditional plans.</li>
        </ul>
        <p className="text-xs text-blue-300 mt-2">
          Ideal for those seeking both protection and wealth creation with moderate risk appetite.
        </p>
      </LessonCard>

      {/* 5️⃣ Endowment Explained */}
      <LessonCard title={<div className="flex items-center gap-2"><PiggyBank className="h-5 w-5 text-cyan-400" />5️⃣ Endowment Policy — Savings + Insurance</div>}>
        <p>
          An **endowment plan** provides a lump sum on survival or death, whichever occurs first.  
          It combines **insurance with guaranteed savings**, suitable for conservative investors.
        </p>
        <ul className="list-disc list-inside text-sm mt-2 space-y-1">
          <li>Guaranteed maturity value + bonuses.</li>
          <li>Lower returns (~4–6% p.a.) but assured payout.</li>
          <li>No market linkage; ideal for risk-averse investors.</li>
        </ul>
      </LessonCard>

      {/* 6️⃣ Decision Guide */}
      <LessonCard title={<div className="flex items-center gap-2"><Target className="h-5 w-5 text-cyan-400" />6️⃣ Which Policy Should You Choose?</div>}>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <ChoiceCard
            icon={<Shield className="h-5 w-5 text-cyan-400" />}
            title="Term Plan"
            desc="✔ Best for protection-first approach  
              ✔ Lowest premium per ₹ coverage  
              ✘ No maturity value"
          />
          <ChoiceCard
            icon={<LineChart className="h-5 w-5 text-green-400" />}
            title="ULIP"
            desc="✔ Growth + protection  
              ✔ Flexible fund options  
              ✘ Returns depend on market"
          />
          <ChoiceCard
            icon={<PiggyBank className="h-5 w-5 text-yellow-400" />}
            title="Endowment"
            desc="✔ Guaranteed payout  
              ✔ Low risk  
              ✘ Lower returns"
          />
        </div>
      </LessonCard>

      {/* 7️⃣ Key Takeaways */}
      <LessonCard title={<div className="flex items-center gap-2"><Sparkles className="h-5 w-5 text-yellow-400" />📘 Key Takeaways</div>}>
        <ul className="list-disc list-inside text-sm space-y-2">
          <li>Buy **term insurance** for protection — it’s essential for every earning member.</li>
          <li>Consider **ULIPs** only if you understand market-linked risk and long-term commitment.</li>
          <li>**Endowment plans** are suitable for guaranteed returns but offer limited flexibility.</li>
          <li>Review your insurance every 2–3 years to match changing income and goals.</li>
        </ul>
      </LessonCard>

      {/* 8️⃣ Quiz */}
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
      Educational only — NeoCred is not a SEBI-registered or insurance distributor.
    </p>
  )
}

function ChoiceCard({ icon, title, desc }: any) {
  return (
    <div className="bg-white/5 p-4 rounded-xl border border-white/10">
      <div className="flex items-center gap-2 mb-2">{icon}<h3 className="text-white font-semibold">{title}</h3></div>
      <p className="text-blue-200 text-sm whitespace-pre-line">{desc}</p>
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
      question: "Which plan provides the highest life cover for the lowest premium?",
      options: ["ULIP", "Term Plan", "Endowment", "Money-back Plan"],
      correct: "Term Plan",
    },
    {
      question: "ULIP combines insurance with what feature?",
      options: ["Guaranteed income", "Market-linked investments", "Fixed deposit returns", "Only death cover"],
      correct: "Market-linked investments",
    },
    {
      question: "Endowment plans are best suited for which type of investor?",
      options: ["Aggressive", "Risk-averse", "Speculative", "Day-trader"],
      correct: "Risk-averse",
    },
  ]

  const handleSelect = (i: number, opt: string) => {
    if (!submitted) setAnswers((prev) => ({ ...prev, [i]: opt }))
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
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center space-y-3">
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
