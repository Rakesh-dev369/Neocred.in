"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Landmark,
  ShieldCheck,
  PiggyBank,
  BadgePercent,
  Banknote,
  Calendar,
  Info,
  CheckCircle,
  XCircle,
  RotateCcw,
  ChevronDown,
} from "lucide-react"

type Scheme = {
  code: string
  name: string
  category: "LongTerm" | "ShortMedium" | "PureSavings"
  gradient: string
  icon: React.ElementType
  min: string
  lockin: string
  returns: string
  tax: string
  who: string
  details: string[]
}

const schemes: Scheme[] = [
  // Long-term
  {
    code: "PPF",
    name: "PPF — Public Provident Fund",
    category: "LongTerm",
    gradient: "from-blue-700/30 to-cyan-600/30",
    icon: ShieldCheck,
    min: "₹500/yr",
    lockin: "15 yrs (partial from yr 7)",
    returns: "Govt-notified (~7–8% p.a.), tax-free",
    tax: "80C + EEE (no tax on interest or maturity)",
    who: "Long-term wealth + tax saving; safest compounding for salaried/ self-employed.",
    details: [
      "Interest set quarterly by Govt; credited annually; tax-free on maturity.",
      "Loan facility between year 3–6; partial withdrawal from year 7.",
      "Extendable in 5-year blocks after maturity.",
    ],
  },
  {
    code: "SSY",
    name: "SSY — Sukanya Samriddhi Yojana",
    category: "LongTerm",
    gradient: "from-indigo-700/30 to-fuchsia-600/30",
    icon: PiggyBank,
    min: "₹250/yr",
    lockin: "Till girl turns 21 (partial at 18)",
    returns: "Govt-notified (~8%+ p.a.), tax-free",
    tax: "80C + EEE",
    who: "Parents/guardians of a girl child (<10 yrs at account open) to build education/marriage corpus.",
    details: [
      "Only for girl child; max 2 girls (exceptions for twins).",
      "Deposit window up to 15 years; interest till maturity.",
      "Partial withdrawal (50%) allowed for higher education at 18.",
    ],
  },
  {
    code: "SCSS",
    name: "SCSS — Senior Citizens’ Saving Scheme",
    category: "LongTerm",
    gradient: "from-sky-700/30 to-teal-600/30",
    icon: Landmark,
    min: "₹1,000",
    lockin: "5 yrs (extendable 3 yrs)",
    returns: "High fixed rate (Govt-notified), quarterly payout",
    tax: "80C (interest taxable; 80TTB applies)",
    who: "Age 60+ seeking safe higher returns with quarterly income.",
    details: [
      "Premature closure penalties apply; extension once for 3 years.",
      "Interest paid quarterly to bank account (income stream).",
      "TDS may apply if interest exceeds threshold.",
    ],
  },
  {
    code: "NSC",
    name: "NSC — National Savings Certificate",
    category: "LongTerm",
    gradient: "from-blue-800/30 to-cyan-700/30",
    icon: BadgePercent,
    min: "₹1,000",
    lockin: "5 yrs",
    returns: "Fixed compounded, paid at maturity",
    tax: "80C (interest deemed reinvested; taxed on maturity)",
    who: "Conservative savers seeking fixed 5-yr lock-in + 80C benefit.",
    details: [
      "Certificates transferable once; can be pledged for loans.",
      "Interest compounded annually but paid at maturity.",
      "Low risk; sovereign-backed.",
    ],
  },
  {
    code: "MIS",
    name: "MIS — Post Office Monthly Income Scheme",
    category: "LongTerm",
    gradient: "from-blue-900/30 to-emerald-700/30",
    icon: Banknote,
    min: "₹1,000",
    lockin: "5 yrs",
    returns: "Fixed monthly interest payout",
    tax: "No 80C (interest taxable)",
    who: "Those wanting guaranteed monthly income (pension-like cash flow).",
    details: [
      "Max deposit caps apply (single/joint).",
      "Monthly interest credit to your savings account.",
      "Premature closure penalties apply.",
    ],
  },
  // Short / Medium
  {
    code: "KVP",
    name: "KVP — Kisan Vikas Patra",
    category: "ShortMedium",
    gradient: "from-emerald-700/30 to-teal-600/30",
    icon: Landmark,
    min: "₹1,000",
    lockin: "~2.5 yrs (maturity ~doubles at notified period)",
    returns: "Govt-notified; amount ~doubles by maturity period",
    tax: "No 80C (interest taxable)",
    who: "Safe corpus doubling without market risk; longish tenure.",
    details: [
      "Early encashment allowed after lock-in with conditions.",
      "Transferable once; can be pledged.",
      "Sovereign-backed; rate revised periodically.",
    ],
  },
  {
    code: "TD",
    name: "Post Office Time Deposit (TD)",
    category: "ShortMedium",
    gradient: "from-green-700/30 to-cyan-700/30",
    icon: Calendar,
    min: "₹1,000",
    lockin: "1 / 2 / 3 / 5 yrs",
    returns: "Fixed rate; paid annually; 5-yr qualifies for 80C",
    tax: "80C for 5-yr TD only (interest taxable)",
    who: "Guaranteed fixed tenures; alternative to bank FDs.",
    details: [
      "Rates vary by tenure; credited annually (or quarterly in banks).",
      "Premature closure penalties apply.",
      "Low risk; Govt/Post Office backed.",
    ],
  },
  {
    code: "RD",
    name: "Post Office Recurring Deposit (RD)",
    category: "ShortMedium",
    gradient: "from-teal-700/30 to-blue-700/30",
    icon: PiggyBank,
    min: "₹100/month",
    lockin: "5 yrs",
    returns: "Fixed rate; quarterly compounding",
    tax: "No 80C (interest taxable)",
    who: "Disciplined monthly savers building medium-term corpus.",
    details: [
      "Monthly deposit; loan/advance against RD may be available.",
      "Premature closure/ default rules apply.",
      "Works like bank RD but sovereign-backed.",
    ],
  },
  // Pure Savings (no tax benefit)
  {
    code: "MSSC",
    name: "MSSC — Pure Savings (No Tax Benefit)",
    category: "PureSavings",
    gradient: "from-fuchsia-700/30 to-pink-600/30",
    icon: Info,
    min: "Varies by product",
    lockin: "Flexible",
    returns: "Low to moderate (product-dependent)",
    tax: "No tax benefit",
    who: "Parking surplus safely without tax intent; pick based on liquidity needs.",
    details: [
      "Use for short parking or as emergency buffer extension.",
      "Compare with high-quality bank savings/FD/RD as needed.",
      "Focus on liquidity and low risk; avoid long lock-ins.",
    ],
  },
]

const categories = [
  { key: "LongTerm", label: "Long-Term Wealth & Security", badge: "Tax + Long Lock-in", gradient: "from-blue-600/30 to-cyan-500/30" },
  { key: "ShortMedium", label: "Short / Medium Goals", badge: "Guaranteed Returns", gradient: "from-emerald-600/30 to-teal-500/30" },
  { key: "PureSavings", label: "Pure Savings (No Tax Benefits)", badge: "Flexible & Liquid", gradient: "from-fuchsia-600/30 to-pink-500/30" },
] as const

export default function GovtSavingsSchemesPage() {
  const [expanded, setExpanded] = useState<string | null>(null)

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-5xl mx-auto space-y-10 text-blue-50"
    >
      {/* Hero */}
      <div className="text-center space-y-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-white flex items-center justify-center gap-2">
          <Landmark className="h-8 w-8 text-cyan-400" />
          Government Savings Schemes in India — Full Guide
        </h1>
        <p className="text-blue-200 max-w-3xl mx-auto">
          Sovereign-backed, low-risk options for every goal: <strong>PPF, SSY, NSC, SCSS, MIS, KVP, TD, RD</strong> and more.
          Compare returns, lock-ins, and tax benefits — NeoCred-style.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-2">
          <span className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/10">Guaranteed & Govt-backed</span>
          <span className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/10">Tax-Saving Options</span>
          <span className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/10">Low Risk</span>
        </div>
      </div>

      {/* Pillars / Categories */}
      <div className="grid md:grid-cols-3 gap-4">
        {categories.map((c) => (
          <div key={c.key} className={`rounded-2xl p-5 border border-white/10 bg-gradient-to-r ${c.gradient}`}>
            <div className="text-sm text-blue-200">{c.badge}</div>
            <div className="font-semibold text-white text-lg mt-1">{c.label}</div>
          </div>
        ))}
      </div>

      {/* Cards */}
      <div className="space-y-8">
        {categories.map((c) => {
          const list = schemes.filter(s => s.category === (c.key as any))
          return (
            <div key={c.key} className="space-y-4">
              <h2 className="text-xl font-semibold text-white">{c.label}</h2>
              <div className="grid md:grid-cols-2 gap-5">
                {list.map((s) => {
                  const Icon = s.icon
                  const isOpen = expanded === s.code
                  return (
                    <motion.div
                      key={s.code}
                      layout
                      transition={{ layout: { duration: 0.3 } }}
                      className={`rounded-2xl border border-white/10 bg-gradient-to-r ${s.gradient} p-5`}
                    >
                      <button
                        onClick={() => setExpanded(isOpen ? null : s.code)}
                        className="w-full text-left"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                              <Icon className="h-5 w-5 text-cyan-300" />
                            </div>
                            <div>
                              <div className="font-semibold text-white">{s.name}</div>
                              <div className="text-xs text-blue-200">{s.who}</div>
                            </div>
                          </div>
                          <ChevronDown className={`h-5 w-5 text-blue-200 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                        </div>

                        {/* Metrics */}
                        <div className="grid grid-cols-3 gap-2 mt-4">
                          <Metric label="Minimum" value={s.min} />
                          <Metric label="Lock-in" value={s.lockin} />
                          <Metric label="Returns" value={s.returns} />
                        </div>
                        <div className="mt-3 text-xs text-blue-200 flex items-center gap-2">
                          <BadgePercent className="h-4 w-4" /> {s.tax}
                        </div>
                      </button>

                      {/* Expandable */}
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25 }}
                            className="mt-4 rounded-xl bg-white/10 border border-white/10 p-4"
                          >
                            <ul className="list-disc list-inside text-sm text-blue-100 space-y-2">
                              {s.details.map((d, i) => <li key={i}>{d}</li>)}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>

      {/* Comparison Table */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white/10 p-6 rounded-2xl backdrop-blur-lg border border-white/10 shadow-lg"
      >
        <h3 className="text-2xl font-semibold text-white mb-3">Quick Comparison</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-blue-100 border-collapse">
            <thead>
              <tr className="border-b border-white/10 text-blue-200">
                <th className="p-2 text-left">Scheme</th>
                <th className="p-2 text-left">Lock-in</th>
                <th className="p-2 text-left">Returns</th>
                <th className="p-2 text-left">Tax Benefit</th>
                <th className="p-2 text-left">Best For</th>
              </tr>
            </thead>
            <tbody>
              {schemes.map(s => (
                <tr key={s.code} className="border-b border-white/5">
                  <td className="p-2">{s.code}</td>
                  <td className="p-2">{s.lockin}</td>
                  <td className="p-2">{s.returns}</td>
                  <td className="p-2">{s.tax}</td>
                  <td className="p-2">{s.who}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-blue-200 mt-2">
          Rates are government-notified and revised periodically. Always verify current rates before investing.
        </p>
      </motion.div>

      {/* NeoCred Recommendations */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid md:grid-cols-3 gap-4"
      >
        <Reco
          title="Tax + Long-Term"
          points={["PPF (EEE) for retirement", "SSY for girl child", "SCSS for 60+ income"]}
        />
        <Reco
          title="Monthly Income Need"
          points={["MIS for fixed monthly payout", "SCSS quarterly interest", "TD laddering for cashflow"]}
        />
        <Reco
          title="Short / Medium Corpus"
          points={["RD for disciplined saving", "TD (1–3 yrs) for fixed returns", "KVP for safe doubling over time"]}
        />
      </motion.div>

      {/* Quiz */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white/10 p-6 rounded-2xl backdrop-blur-lg border border-white/10 shadow-lg"
      >
        <h3 className="text-2xl font-semibold text-white mb-3">💬 Quick Quiz</h3>
        <QuizComponent />
      </motion.div>
    </motion.section>
  )
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg bg-white/10 border border-white/10 p-3">
      <div className="text-[10px] uppercase tracking-wide text-blue-200">{label}</div>
      <div className="text-sm text-white">{value}</div>
    </div>
  )
}

function Reco({ title, points }: { title: string; points: string[] }) {
  return (
    <div className="rounded-2xl p-5 bg-gradient-to-r from-blue-700/20 to-cyan-700/20 border border-white/10">
      <div className="flex items-center gap-2 mb-2">
        <ShieldCheck className="h-5 w-5 text-cyan-300" />
        <h4 className="font-semibold text-white">{title}</h4>
      </div>
      <ul className="list-disc list-inside text-blue-100 text-sm space-y-1">
        {points.map((p, i) => <li key={i}>{p}</li>)}
      </ul>
    </div>
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
      question: "Which scheme offers EEE tax status (no tax at any stage)?",
      options: ["NSC", "PPF", "TD (1 yr)", "MIS"],
      correct: "PPF",
    },
    {
      question: "Which product is ideal for monthly interest payout?",
      options: ["PPF", "MIS", "KVP", "SSY"],
      correct: "MIS",
    },
    {
      question: "Which option is best for senior citizens seeking higher guaranteed rate?",
      options: ["SCSS", "RD", "KVP", "TD (1 yr)"],
      correct: "SCSS",
    },
    {
      question: "KVP primarily suits investors who want:",
      options: ["Tax-free interest", "Equity-like returns", "Money to double safely over time", "Monthly interest"],
      correct: "Money to double safely over time",
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
                <CheckCircle className="text-green-400 h-6 w-6" /> Perfect! You know govt schemes 🎉
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