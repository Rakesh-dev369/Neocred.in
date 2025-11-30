"use client"

import { useMemo, useState } from "react"
import { motion } from "framer-motion"
import {
  Gauge,
  BarChart3,
  CreditCard,
  Calculator,
  AlertTriangle,
  Edit3,
  Search,
  PlusCircle,
  ShieldCheck,
  ListChecks,
  Clock,
  TrendingUp,
  HelpCircle,
  CheckCircle,
  XCircle,
  RotateCcw,
  Info,
} from "lucide-react"

/**
 * Lesson: How to Improve Credit Score (Step-by-Step)
 * Level: Intermediate • India context • Educational only (SEBI-compliant)
 * File name: improve-credit-score.tsx
 *
 * Notes:
 * - No lending/credit advice — pure education & planning utilities
 * - Uses NeoCred palette and motion for a fintech feel
 */

export default function Lesson_ImproveCreditScore() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-5xl mx-auto space-y-10 text-blue-50"
    >
      {/* Header */}
      <header className="text-center space-y-3">
        <h1 className="text-3xl sm:text-4xl font-bold text-white flex items-center justify-center gap-2">
          <motion.div initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }}>
            <Gauge className="h-8 w-8 text-emerald-400" />
          </motion.div>
          How to Improve Credit Score — Step by Step
        </h1>
        <p className="text-blue-200 text-lg">
          Practical, India-focused actions to strengthen your credit profile across CIBIL, Experian, Equifax & CRIF.
        </p>
        <Disclaimer />
      </header>

      {/* 1️⃣ Score Model Basics */}
      <ScoreBasics />

      {/* 2️⃣ Personal Snapshot (inputs → instant insights) */}
      <SnapshotInsights />

      {/* 3️⃣ Utilization Optimizer */}
      <UtilizationOptimizer />

      {/* 4️⃣ Card Paydown Planner (Snowball) */}
      <PaydownPlanner />

      {/* 5️⃣ Dispute & Cleanup Checklist */}
      <DisputeCleanup />

      {/* 6️⃣ Build History Actions (Thin file / Rebuild) */}
      <BuildHistory />

      {/* 7️⃣ Best Practices & Timeline */}
      <BestPracticesTimeline />

      {/* 8️⃣ Quiz */}
      <LessonCard title="💬 Quick Quiz"
      >
        <QuizComponent />
      </LessonCard>
    </motion.section>
  )
}

/* ======================= Common Blocks ======================= */

function LessonCard({ title, children }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="bg-white/10 p-6 rounded-2xl border border-white/10 shadow-lg space-y-3"
    >
      <h2 className="text-xl font-semibold text-white flex items-center gap-2">{title}</h2>
      <div className="text-blue-100 text-sm leading-relaxed">{children}</div>
    </motion.div>
  )
}

function Disclaimer() {
  return (
    <p className="text-xs text-yellow-300 flex items-center gap-2 justify-center">
      <ShieldCheck className="h-4 w-4" />
      Educational only — NeoCred is not a SEBI-registered advisor. For official credit actions, use bureau/lender channels.
    </p>
  )
}

function Stat({ label, value, highlight = false }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div
      className={`rounded-xl p-4 border border-white/10 ${
        highlight ? "bg-gradient-to-r from-emerald-600/20 to-teal-600/20" : "bg-white/10"
      }`}
    >
      <div className="text-[11px] uppercase tracking-wide text-blue-200">{label}</div>
      <div className={`text-white font-semibold ${highlight ? "text-lg" : ""}`}>{value}</div>
    </div>
  )
}

function NumberInput({
  label,
  value,
  setValue,
  step = "any",
}: {
  label: string
  value: number
  setValue: (n: number) => void
  step?: string
}) {
  return (
    <div className="bg-white/10 rounded-xl p-4 border border-white/10">
      <label className="text-xs text-blue-200 mb-1 block">{label}</label>
      <input
        type="number"
        step={step}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="w-full p-2 rounded-lg bg-white/20 border border-white/10 text-white outline-none"
      />
    </div>
  )
}

/* ======================= 1️⃣ Score Basics ======================= */

function ScoreBasics() {
  const rows = [
    ["Payment History", "On-time payments, DPD grid; missed/late marks carry heavy impact."],
    ["Credit Utilization", "Card balance ÷ limit; staying <30% (preferably <10-20%) is healthier."],
    ["Age of Credit", "Oldest account age + average age; keep old accounts open when feasible."],
    ["Mix of Credit", "Secured (auto/home) + unsecured (cards/PL). No need to over-diversify."],
    ["New Credit / Enquiries", "Frequent hard enquiries + many new accounts can hurt short-term."],
    ["Derogatory Flags", "Write-off/settled/restructured accounts harm score until cleaned up."],
  ]
  return (
    <LessonCard
      title={
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <BarChart3 className="h-5 w-5 text-cyan-400" />
          </motion.div>
          1️⃣ What Affects Your Score (High-Level View)
        </>
      }
    >
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-blue-100 border-collapse">
          <thead className="bg-white/10 text-blue-200 text-xs uppercase">
            <tr>
              <th className="p-2 border-b border-white/10 text-left">Factor</th>
              <th className="p-2 border-b border-white/10 text-left">What it means</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className="border-b border-white/10">
                <td className="p-2 text-white font-medium">{r[0]}</td>
                <td className="p-2">{r[1]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-blue-300 mt-2">
        Bureau formulas are proprietary. Focus on controllable drivers: pay on time, keep utilization low, avoid unnecessary enquiries.
      </p>
    </LessonCard>
  )
}

/* ======================= 2️⃣ Snapshot → Insights ======================= */

function SnapshotInsights() {
  const [onTimePct, setOnTimePct] = useState(92)
  const [utilPct, setUtilPct] = useState(48)
  const [avgAgeYears, setAvgAgeYears] = useState(2.1)
  const [hardInq, setHardInq] = useState(4)

  const insights = useMemo(() => {
    const tips: string[] = []
    if (onTimePct < 98) tips.push("Set up auto-pay/UPI reminders to drive on-time rate ≥ 98%.")
    if (utilPct > 30) tips.push("Reduce card utilization below 30% (ideally 10-20%).")
    if (avgAgeYears < 3) tips.push("Avoid closing old cards; let accounts season to raise average age.")
    if (hardInq > 2) tips.push("Pause new credit applications for 3–6 months to cool down enquiries.")
    if (!tips.length) tips.push("Nice! Keep consistency for 6–12 months for steady improvement.")
    return tips
  }, [onTimePct, utilPct, avgAgeYears, hardInq])

  return (
    <LessonCard
      title={
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Gauge className="h-5 w-5 text-emerald-400" />
          </motion.div>
          2️⃣ Your Snapshot → Instant Suggestions
        </>
      }
    >
      <div className="grid md:grid-cols-4 gap-4">
        <NumberInput label="On-time payment %" value={onTimePct} setValue={setOnTimePct} />
        <NumberInput label="Card utilization %" value={utilPct} setValue={setUtilPct} />
        <NumberInput label="Avg credit age (yrs)" value={avgAgeYears} setValue={setAvgAgeYears} step="0.1" />
        <NumberInput label="Hard enquiries (12m)" value={hardInq} setValue={setHardInq} />
      </div>
      <div className="grid sm:grid-cols-3 gap-4 mt-4">
        <Stat label="Target On-time" value="≥ 98%" />
        <Stat label="Target Utilization" value="≤ 30% (better ≤ 20%)" />
        <Stat label="Enquiry Cool-off" value="3–6 months" />
      </div>
      <div className="mt-4 rounded-xl p-4 bg-white/10 border border-white/10">
        <div className="text-white font-semibold mb-2 flex items-center gap-2">
          <Info className="h-4 w-4 text-cyan-300" /> Actionable Suggestions
        </div>
        <ul className="list-disc list-inside space-y-1">
          {insights.map((t, i) => (
            <li key={i}>{t}</li>
          ))}
        </ul>
      </div>
    </LessonCard>
  )
}

/* ======================= 3️⃣ Utilization Optimizer ======================= */

function UtilizationOptimizer() {
  const [limit, setLimit] = useState(100000) // ₹
  const [balance, setBalance] = useState(45000)
  const [target, setTarget] = useState(30) // %

  const currentUtil = useMemo(() => (limit ? (balance / limit) * 100 : 0), [limit, balance])
  const neededPaydown = useMemo(() => Math.max(0, balance - (target / 100) * limit), [balance, target, limit])
  const neededLimitIncrease = useMemo(
    () => Math.max(0, balance / (target / 100) - limit),
    [balance, target, limit]
  )

  return (
    <LessonCard
      title={
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <CreditCard className="h-5 w-5 text-sky-400" />
          </motion.div>
          3️⃣ Lower Your Card Utilization (Two Strategies)
        </>
      }
    >
      <div className="grid md:grid-cols-3 gap-4">
        <NumberInput label="Total Card Limit (₹)" value={limit} setValue={setLimit} />
        <NumberInput label="Current Balance (₹)" value={balance} setValue={setBalance} />
        <NumberInput label="Target Utilization %" value={target} setValue={setTarget} />
      </div>

      <div className="grid sm:grid-cols-3 gap-4 mt-4">
        <Stat label="Current Utilization" value={`${currentUtil.toFixed(1)}%`} highlight />
        <Stat label="Paydown Needed (₹)" value={`${Math.ceil(neededPaydown).toLocaleString("en-IN")}`} />
        <Stat label="Or Limit Increase (₹)" value={`${Math.ceil(neededLimitIncrease).toLocaleString("en-IN")}`} />
      </div>

      <p className="text-xs text-blue-300 mt-2">
        Prefer paydown first. Limit increases can help but may trigger an enquiry; use sparingly and after income growth.
      </p>
    </LessonCard>
  )
}

/* ======================= 4️⃣ Paydown Planner (Snowball) ======================= */

type Card = { name: string; balance: number; rate: number; min: number }

function PaydownPlanner() {
  const [cards, setCards] = useState<Card[]>([
    { name: "Card A", balance: 25000, rate: 36, min: 1500 },
    { name: "Card B", balance: 12000, rate: 42, min: 800 },
    { name: "Card C", balance: 8000, rate: 30, min: 600 },
  ])
  const [extra, setExtra] = useState(5000)

  // Snowball: smallest balance first (motivational); Avalanche (higher rate) also possible
  const plan = useMemo(() => {
    const ordered = [...cards].sort((a, b) => a.balance - b.balance)
    const totalMin = ordered.reduce((s, c) => s + c.min, 0)
    const surplus = Math.max(0, extra)
    let remaining = surplus

    return ordered.map((c, idx) => {
      const pay = idx === 0 ? c.min + remaining : c.min
      if (idx === 0) remaining = 0
      return { ...c, pay }
    })
  }, [cards, extra])

  return (
    <LessonCard
      title={
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Calculator className="h-5 w-5 text-fuchsia-400" />
          </motion.div>
          4️⃣ Paydown Planner — Snowball Method
        </>
      }
    >
      <div className="grid md:grid-cols-4 gap-4">
        <NumberInput label="Extra Monthly Paydown (₹)" value={extra} setValue={setExtra} />
        <div className="md:col-span-3 rounded-xl p-4 bg-white/10 border border-white/10">
          <div className="text-white font-semibold mb-2">Your Cards</div>
          <div className="grid sm:grid-cols-3 gap-3">
            {cards.map((c, i) => (
              <div key={i} className="rounded-xl p-3 bg-white/5 border border-white/10">
                <div className="text-white font-medium">{c.name}</div>
                <div className="text-blue-200 text-xs">Bal: ₹{c.balance.toLocaleString("en-IN")}</div>
                <div className="text-blue-200 text-xs">APR: {c.rate}%</div>
                <div className="text-blue-200 text-xs">Min: ₹{c.min.toLocaleString("en-IN")}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4 rounded-xl p-4 bg-white/10 border border-white/10">
        <div className="text-white font-semibold mb-2">Recommended This Month</div>
        <div className="grid md:grid-cols-3 gap-3">
          {plan.map((p, i) => (
            <Stat key={i} label={`${p.name} Payment`} value={`₹${p.pay.toLocaleString("en-IN")}`} highlight={i === 0} />
          ))}
        </div>
        <p className="text-xs text-blue-300 mt-2">
          Snowball prioritizes the smallest balance for quick wins. For pure interest savings, use Avalanche (highest APR first).
        </p>
      </div>
    </LessonCard>
  )
}

/* ======================= 5️⃣ Dispute & Cleanup ======================= */

function DisputeCleanup() {
  const items = [
    "Correct identity/address/DPD errors via lender + bureau dispute.",
    "Obtain NOC/closure letter for closed loans/cards; ensure 'Closed' reflects.",
    "For settlements, request updated status post-payment; keep proof.",
    "Remove duplicate accounts; dispute wrong limits/balances.",
    "Report fraud immediately; consider police complaint & bureau fraud alert.",
  ]
  return (
    <LessonCard
      title={
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Search className="h-5 w-5 text-blue-400" />
          </motion.div>
          5️⃣ Dispute & Cleanup — Fix What’s Wrong
        </>
      }
    >
      <ul className="list-disc list-inside space-y-1">
        {items.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
      <p className="text-xs text-blue-300 mt-2">
        Corrections often require lender confirmation. Keep PDFs of all acknowledgements and case IDs.
      </p>
    </LessonCard>
  )
}

/* ======================= 6️⃣ Build History (Thin File / Rebuild) ======================= */

function BuildHistory() {
  const actions = [
    {
      icon: <PlusCircle className="h-4 w-4 text-emerald-300" />,
      title: "Secured Credit Card (FD-backed)",
      desc: "Helps establish history with low risk; use lightly & pay in full.",
    },
    {
      icon: <PlusCircle className="h-4 w-4 text-emerald-300" />,
      title: "Increase Existing Card Limit (post income growth)",
      desc: "Can lower utilization%; avoid multiple enquiries; request with docs.",
    },
    {
      icon: <PlusCircle className="h-4 w-4 text-emerald-300" />,
      title: "Small, Affordable EMI (if needed)",
      desc: "Builds mix — only if budget allows; never stretch cash flow.",
    },
    {
      icon: <PlusCircle className="h-4 w-4 text-emerald-300" />,
      title: "Keep Old Accounts",
      desc: "Preserves age; consider downgrading annual-fee cards instead of closing.",
    },
  ]
  return (
    <LessonCard
      title={
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Edit3 className="h-5 w-5 text-pink-400" />
          </motion.div>
          6️⃣ Build or Rebuild Credit History — Safe Actions
        </>
      }
    >
      <div className="grid md:grid-cols-2 gap-4">
        {actions.map((a, i) => (
          <div key={i} className="rounded-xl p-4 bg-white/10 border border-white/10">
            <div className="text-white font-semibold flex items-center gap-2">{a.icon} {a.title}</div>
            <p className="text-blue-100 text-sm mt-1">{a.desc}</p>
          </div>
        ))}
      </div>
      <p className="text-xs text-blue-300 mt-2">
        Avoid opening many new accounts together. Allow 6–12 months for changes to reflect consistently.
      </p>
    </LessonCard>
  )
}

/* ======================= 7️⃣ Best Practices & Timeline ======================= */

function BestPracticesTimeline() {
  const doList = [
    "Enable auto-pay; never miss due dates.",
    "Keep utilization ≤ 30% (ideally ≤ 20%).",
    "Review reports every quarter; fix errors promptly.",
    "Space out applications; limit enquiries.",
  ]
  const dontList = [
    "Don’t close your oldest card casually.",
    "Don’t revolve balances at high APR when avoidable.",
    "Don’t apply to many lenders within days.",
    "Don’t ignore dispute acknowledgements.",
  ]
  const timeline = [
    ["Month 0", "Pull reports; note issues; set auto-pay; start paydown."],
    ["Month 1–3", "Utilization drops; no new enquiries; disputes in progress."],
    ["Month 4–6", "On-time streak builds; average age improves; early gains show."],
    ["Month 7–12", "Consistent behaviour → stronger improvement trend."],
  ]

  return (
    <LessonCard
      title={
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Clock className="h-5 w-5 text-purple-400" />
          </motion.div>
          7️⃣ Best Practices & Realistic Timeline
        </>
      }
    >
      <div className="grid md:grid-cols-3 gap-4">
        <div className="rounded-xl p-4 bg-white/10 border border-white/10">
          <div className="text-white font-semibold mb-1 flex items-center gap-2">
            <ListChecks className="h-5 w-5 text-green-400" /> Do
          </div>
          <ul className="list-disc list-inside text-sm space-y-1">{doList.map((d, i) => <li key={i}>{d}</li>)}</ul>
        </div>
        <div className="rounded-xl p-4 bg-white/10 border border-white/10">
          <div className="text-white font-semibold mb-1 flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-yellow-400" /> Don’t
          </div>
          <ul className="list-disc list-inside text-sm space-y-1">{dontList.map((d, i) => <li key={i}>{d}</li>)}</ul>
        </div>
        <div className="rounded-xl p-4 bg-white/10 border border-white/10">
          <div className="text-white font-semibold mb-1 flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-cyan-400" /> Expected Progress
          </div>
          <ul className="list-disc list-inside text-sm space-y-1">{timeline.map((t, i) => <li key={i}><strong>{t[0]}:</strong> {t[1]}</li>)}</ul>
        </div>
      </div>
    </LessonCard>
  )
}

/* ======================= 8️⃣ Quiz ======================= */

function QuizComponent() {
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [score, setScore] = useState(0)

  const quiz = [
    {
      question: "A healthy credit card utilization target is usually:",
      options: ["≤ 30%", "50–60%", "≥ 80%"],
      correct: "≤ 30%",
    },
    {
      question: "For fastest motivational debt payoff, the strategy is:",
      options: ["Snowball (smallest balance first)", "Avalanche (highest APR first)", "Random"],
      correct: "Snowball (smallest balance first)",
    },
    {
      question: "Closing your oldest card generally:",
      options: ["Improves average age", "Can reduce average age", "No impact"],
      correct: "Can reduce average age",
    },
  ]

  const handleSelect = (i: number, opt: string) => {
    if (!submitted) setAnswers((p) => ({ ...p, [i]: opt }))
  }

  const handleSubmit = () => {
    setScore(quiz.filter((q, i) => answers[i] === q.correct).length)
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
          initial={{ opacity: 0, y: 8 }}
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
                } ${submitted && isCorrect ? "border-green-400 bg-green-500/10" : ""} ${
                  submitted && isSelected && !isCorrect ? "border-red-400 bg-red-500/10" : ""
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
          Submit Answers
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
            whileHover={{ scale: 1.05 }}
            onClick={reset}
            className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm"
          >
            <RotateCcw className="inline-block h-4 w-4 mr-1" /> Try Again
          </motion.button>
        </motion.div>
      )}
    </div>
  )
}
