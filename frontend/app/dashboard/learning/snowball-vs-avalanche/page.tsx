"use client"

import { useMemo, useState } from "react"
import { motion } from "framer-motion"
import {
  Calculator,
  ListChecks,
  TrendingDown,
  Gauge,
  ShieldCheck,
  Plus,
  Trash2,
  CheckCircle,
  XCircle,
  RotateCcw,
  IndianRupee,
  Info,
  Target,
  Lightbulb,
} from "lucide-react"

/**
 * Lesson: Debt Management Strategy — Snowball vs Avalanche
 * Level: Intermediate (Educational only; SEBI-compliant)
 */

type Debt = {
  id: string
  name: string
  balance: number
  rate: number // p.a. %
  min: number  // minimum monthly payment
}

export default function Lesson_SnowballVsAvalanche() {
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
          <TrendingDown className="h-8 w-8 text-cyan-400" />
          Debt Management — Snowball vs Avalanche
        </h1>
        <p className="text-blue-200 text-lg">
          Pay off debts faster with a clear plan. Compare strategies, timelines, and total interest saved.
        </p>
        <Disclaimer />
      </header>

      {/* 1️⃣ Concept */}
      <LessonCard title={<div className="flex items-center gap-2"><Info className="h-5 w-5 text-cyan-400" />1️⃣ The Two Proven Payoff Strategies</div>}>
        <ul className="list-disc list-inside text-sm space-y-2">
          <li>
            <strong>Snowball:</strong> Pay extra toward the <em>smallest balance first</em>. Quick wins → motivation → momentum.
          </li>
          <li>
            <strong>Avalanche:</strong> Pay extra toward the <em>highest interest rate first</em>. Mathematically fastest (usually lowest interest).
          </li>
          <li>
            Keep paying **minimums on all debts**, direct extra to the target debt. When one closes, roll its payment into the next → “debt snowball/avalanche”.
          </li>
        </ul>
      </LessonCard>

      {/* 2️⃣ Setup Debts */}
      <DebtEditor />

      {/* 3️⃣ Simulator Results */}
      <ResultsPanel />

      {/* 4️⃣ Timeline Insights */}
      <TimelineInsights />

      {/* 5️⃣ When to pick which? */}
      <LessonCard title={<div className="flex items-center gap-2"><Target className="h-5 w-5 text-cyan-400" />5️⃣ Choosing What Fits You (Not Advice)</div>}>
        <ul className="list-disc list-inside text-sm space-y-2">
          <li><strong>Choose Snowball</strong> if motivation is your bottleneck — quick closures keep you consistent.</li>
          <li><strong>Choose Avalanche</strong> if you’re disciplined and want to minimize interest paid.</li>
          <li>Either way, protect your cashflows: build a small emergency fund to avoid new debt.</li>
        </ul>
      </LessonCard>

      {/* 6️⃣ Tips */}
      <LessonCard title={<div className="flex items-center gap-2"><ListChecks className="h-5 w-5 text-cyan-400" />6️⃣ Practical Tips to Stay on Track</div>}>
        <ul className="list-disc list-inside text-sm space-y-2">
          <li>Automate minimums; auto-allocate the extra toward the current target debt.</li>
          <li>Call lenders to check if you can reduce rates or fees; avoid prepayment penalties.</li>
          <li>Pause new discretionary EMI/BNPL until high-interest debts are cleared.</li>
        </ul>
      </LessonCard>

      {/* 7️⃣ Key Takeaways */}
      <LessonCard title={<div className="flex items-center gap-2"><Lightbulb className="h-5 w-5 text-green-400" />📘 Key Takeaways</div>}>
        <ul className="list-disc list-inside text-sm space-y-2">
          <li>Both strategies work — the best strategy is the one you can **stick to**.</li>
          <li>Avalanche usually saves more interest; Snowball often finishes **nearly as fast** due to consistency.</li>
          <li>Reinvest freed-up EMIs into the next debt immediately for maximum momentum.</li>
        </ul>
      </LessonCard>

      {/* 8️⃣ Quiz */}
      <LessonCard title="💬 Quick Quiz">
        <QuizComponent />
      </LessonCard>
    </motion.section>
  )
}

/* ======================= State Containers via Context (simple inline) ======================= */
/** Keeping state components in one file for easy paste into your project. */

function DebtEditor() {
  const [debts, setDebts] = useState<Debt[]>([
    { id: rid(), name: "Credit Card", balance: 60000, rate: 36, min: 2500 },
    { id: rid(), name: "Personal Loan", balance: 120000, rate: 14, min: 3500 },
    { id: rid(), name: "Bike EMI", balance: 30000, rate: 12, min: 1500 },
  ])
  const [extra, setExtra] = useState<number>(4000) // extra budget over and above minimums

  const totalMin = debts.reduce((s, d) => s + safe(d.min), 0)

  const addDebt = () =>
    setDebts((prev) => [
      ...prev,
      { id: rid(), name: `Debt ${prev.length + 1}`, balance: 25000, rate: 18, min: 1200 },
    ])

  const removeDebt = (id: string) => setDebts((prev) => prev.filter((d) => d.id !== id))

  const updateDebt = (id: string, patch: Partial<Debt>) =>
    setDebts((prev) => prev.map((d) => (d.id === id ? { ...d, ...patch } : d)))

  return (
    <LessonCard title={<div className="flex items-center gap-2"><Calculator className="h-5 w-5 text-cyan-400" />2️⃣ Enter Your Debts & Budget</div>}>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-blue-100 border-collapse">
          <thead className="bg-white/10 text-blue-200 text-xs uppercase">
            <tr>
              <th className="p-2 border-b border-white/10 text-left">Name</th>
              <th className="p-2 border-b border-white/10 text-right">Balance (₹)</th>
              <th className="p-2 border-b border-white/10 text-right">Rate (p.a. %)</th>
              <th className="p-2 border-b border-white/10 text-right">Min / mo (₹)</th>
              <th className="p-2 border-b border-white/10"></th>
            </tr>
          </thead>
          <tbody>
            {debts.map((d) => (
              <tr key={d.id} className="border-b border-white/10">
                <td className="p-2 pr-3">
                  <input
                    value={d.name}
                    onChange={(e) => updateDebt(d.id, { name: e.target.value })}
                    className="w-full bg-white/10 border border-white/10 rounded-md px-2 py-1 text-white outline-none"
                  />
                </td>
                <td className="p-2">
                  <NumberInput value={d.balance} onChange={(v) => updateDebt(d.id, { balance: v })} />
                </td>
                <td className="p-2">
                  <NumberInput value={d.rate} onChange={(v) => updateDebt(d.id, { rate: v })} />
                </td>
                <td className="p-2">
                  <NumberInput value={d.min} onChange={(v) => updateDebt(d.id, { min: v })} />
                </td>
                <td className="p-2 text-right">
                  <button
                    onClick={() => removeDebt(d.id)}
                    className="px-2 py-1 rounded-md bg-white/10 border border-white/10 hover:bg-white/20"
                    aria-label="Remove debt"
                  >
                    <Trash2 className="h-4 w-4 text-red-300" />
                  </button>
                </td>
              </tr>
            ))}
            <tr>
              <td className="p-2" colSpan={5}>
                <button
                  onClick={addDebt}
                  className="flex items-center gap-2 text-sm px-3 py-2 rounded-lg bg-white/10 border border-white/10 hover:bg-white/20"
                >
                  <Plus className="h-4 w-4 text-cyan-300" /> Add Debt
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="grid md:grid-cols-3 gap-4 mt-4">
        <StatBox label="Total Minimums / mo" value={`₹${fmt(totalMin)}`} />
        <InputBox
          label="Extra Budget Over Minimums (₹/mo)"
          value={extra}
          onChange={(n) => setExtra(n)}
          icon={<IndianRupee className="h-4 w-4 text-cyan-300" />}
        />
        <div className="rounded-xl p-4 border border-white/10 bg-white/10">
          <div className="text-[11px] uppercase tracking-wide text-blue-200">Monthly Pay Budget</div>
          <div className="text-white font-semibold">
            ₹{fmt(totalMin + safe(extra))} <span className="text-xs text-blue-300">(Minimums + Extra)</span>
          </div>
        </div>
      </div>

      <p className="text-xs text-blue-300 mt-2">
        Note: Ensure you can maintain this cashflow alongside essentials and a small emergency fund.
      </p>

      <StrategyComparison debts={debts} extra={extra} />
    </LessonCard>
  )
}

/* ======================= Core Comparison Engine ======================= */

function StrategyComparison({ debts, extra }: { debts: Debt[]; extra: number }) {
  const snowball = useMemo(() => simulate(debts, extra, "snowball"), [debts, extra])
  const avalanche = useMemo(() => simulate(debts, extra, "avalanche"), [debts, extra])

  const better =
    snowball.months < avalanche.months
      ? "Snowball (faster)"
      : avalanche.months < snowball.months
      ? "Avalanche (faster)"
      : avalanche.totalInterest < snowball.totalInterest
      ? "Avalanche (less interest)"
      : "Similar outcome"

  return (
    <div className="mt-6 grid md:grid-cols-2 gap-5">
      <ResultCard
        title="Snowball Result (smallest balance first)"
        months={snowball.months}
        interest={snowball.totalInterest}
        order={snowball.order}
      />
      <ResultCard
        title="Avalanche Result (highest rate first)"
        months={avalanche.months}
        interest={avalanche.totalInterest}
        order={avalanche.order}
      />

      <div className="md:col-span-2 rounded-2xl p-5 border border-white/10 bg-white/10">
        <div className="text-[11px] uppercase tracking-wide text-blue-200 mb-1">Indicative Tilt</div>
        <div className="text-white font-semibold text-lg">{better}</div>
        <div className="grid sm:grid-cols-3 gap-4 mt-4">
          <StatBox label="Months Saved (if +ve)" value={`${Math.max(0, snowball.months - avalanche.months)} vs Alt`} />
          <StatBox
            label="Interest Saved (₹)"
            value={`₹${fmt(Math.abs(snowball.totalInterest - avalanche.totalInterest))}`}
          />
          <StatBox label="Debts Count" value={`${debts.length}`} />
        </div>
        <p className="text-xs text-blue-300 mt-2">
          Results are illustrative; actual lender rules and compounding conventions may vary.
        </p>
      </div>
    </div>
  )
}

function ResultsPanel() {
  return (
    <LessonCard title={<div className="flex items-center gap-2"><TrendingDown className="h-5 w-5 text-cyan-400" />3️⃣ Simulator — Compare Your Timeline & Interest</div>}>
      <p className="text-sm text-blue-100 mb-3">
        The simulator above compares total months to debt-free and total interest paid under both strategies. Close small
        balances quickly (snowball) or attack high-interest first (avalanche).
      </p>
      <div className="grid md:grid-cols-3 gap-4">
        <MiniHint
          icon={<ListChecks className="h-5 w-5 text-cyan-300" />}
          title="Keep Paying Minimums"
          desc="Automate minimums for all debts so you never miss a due date."
        />
        <MiniHint
          icon={<Gauge className="h-5 w-5 text-emerald-300" />}
          title="Roll Over Payments"
          desc="When a debt closes, roll that EMI onto the next target immediately."
        />
        <MiniHint
          icon={<Info className="h-5 w-5 text-yellow-300" />}
          title="Protect Cashflows"
          desc="Maintain a small emergency fund to avoid adding new debt mid-way."
        />
      </div>
    </LessonCard>
  )
}

function TimelineInsights() {
  return (
    <LessonCard title={<div className="flex items-center gap-2"><Gauge className="h-5 w-5 text-cyan-400" />4️⃣ Timeline & Behavior Insights</div>}>
      <ul className="list-disc list-inside text-sm space-y-2">
        <li>Closing one account earlier (snowball) can boost morale, lowering dropout risk.</li>
        <li>Avalanche generally costs less in total interest, especially with high-APR credit cards.</li>
        <li>Re-run the plan if income changes — increase your extra budget to accelerate payoff dramatically.</li>
      </ul>
    </LessonCard>
  )
}

/* ======================= Simulator Implementation ======================= */

type Strategy = "snowball" | "avalanche"
type SimResult = { months: number; totalInterest: number; order: string[] }

function simulate(inputDebts: Debt[], extraBudget: number, strategy: Strategy): SimResult {
  // Deep copy to avoid mutating UI state
  const debts = inputDebts.map((d) => ({ ...d, balance: safe(d.balance), min: safe(d.min), rate: safe(d.rate) }))
  // Guard rails
  if (debts.length === 0) return { months: 0, totalInterest: 0, order: [] }
  const monthlyExtra = Math.max(0, safe(extraBudget))

  let months = 0
  let totalInterest = 0
  const order: string[] = []

  // Continue until all balances are cleared or hard cap (e.g., 1000 months to avoid infinite loop)
  for (let guard = 0; guard < 1000; guard++) {
    // Finished?
    if (debts.every((d) => d.balance <= 0.01)) break
    months++

    // Determine current target index based on strategy among positive balances
    const active = debts
      .map((d, i) => ({ i, d }))
      .filter(({ d }) => d.balance > 0.01)

    if (active.length === 0) break

    let targetIndex: number
    if (strategy === "snowball") {
      const minIdx = active.reduce((minI, cur, idx, arr) => {
        return cur.d.balance < arr[minI].d.balance ? idx : minI
      }, 0)
      targetIndex = active[minIdx].i
    } else {
      // avalanche
      const maxIdx = active.reduce((maxI, cur, idx, arr) => {
        return cur.d.rate > arr[maxI].d.rate ? idx : maxI
      }, 0)
      targetIndex = active[maxIdx].i
    }

    // 1) Accrue interest for the month
    for (const d of debts) {
      if (d.balance > 0) {
        const rMonthly = d.rate / 100 / 12
        const interest = d.balance * rMonthly
        totalInterest += interest
        d.balance += interest
      }
    }

    // 2) Minimum payments on all
    let budget = debts.reduce((s, d) => s + Math.min(d.min, Math.max(0, d.balance)), 0) + monthlyExtra

    // First pay minimums (capped to current balance)
    for (const d of debts) {
      if (d.balance <= 0) continue
      const pay = Math.min(d.min, d.balance)
      d.balance -= pay
      budget -= pay
      // Close record if cleared this month
      if (d.balance <= 0.01 && !order.includes(d.name)) order.push(d.name)
    }

    // 3) Apply remainder to target debt
    while (budget > 0.01) {
      const t = debts[targetIndex]
      if (!t || t.balance <= 0.01) {
        // pick next target
        const next = debts
          .map((d, i) => ({ d, i }))
          .filter(({ d }) => d.balance > 0.01)
        if (next.length === 0) break
        if (strategy === "snowball") {
          const minIdx = next.reduce((minI, cur, idx, arr) => (cur.d.balance < arr[minI].d.balance ? idx : minI), 0)
          targetIndex = next[minIdx].i
        } else {
          const maxIdx = next.reduce((maxI, cur, idx, arr) => (cur.d.rate > arr[maxI].d.rate ? idx : maxI), 0)
          targetIndex = next[maxIdx].i
        }
        continue
      }
      const chunk = Math.min(budget, t.balance)
      t.balance -= chunk
      budget -= chunk
      if (t.balance <= 0.01 && !order.includes(t.name)) order.push(t.name)
    }

    if (months >= 1000) break
  }

  // Final month count is last iteration that reached all zero
  return {
    months,
    totalInterest: Math.max(0, Math.round(totalInterest)),
    order,
  }
}

/* ======================= UI Bits ======================= */

function ResultCard({
  title,
  months,
  interest,
  order,
}: {
  title: string
  months: number
  interest: number
  order: string[]
}) {
  const years = (months / 12).toFixed(1)
  const maxBar = Math.max(1, months)
  const barPct = (v: number) => Math.max(4, Math.round((v / maxBar) * 100))

  return (
    <div className="rounded-2xl p-5 border border-white/10 bg-white/10">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-white font-semibold">{title}</h3>
        <Calculator className="h-5 w-5 text-cyan-300" />
      </div>
      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <StatBox label="Months to Debt-Free" value={`${months}`} highlight />
        <StatBox label="≈ Years" value={`${years}`} />
        <StatBox label="Total Interest Paid" value={`₹${fmt(interest)}`} />
        <StatBox label="Closed Order" value={order.length ? order.join(" → ") : "—"} />
      </div>
      <div className="space-y-2">
        <Bar label="Timeline" pct={barPct(months)} tone="from-cyan-600/30 to-blue-600/30" />
      </div>
    </div>
  )
}

function LessonCard({ title, children }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
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
      Educational only — NeoCred is not a SEBI-registered advisor. This is a simplified simulator for learning.
    </p>
  )
}

function InputBox({
  label,
  value,
  onChange,
  icon,
  step = "any",
}: {
  label: string
  value: number
  onChange: (n: number) => void
  icon?: any
  step?: string
}) {
  return (
    <div className="bg-white/10 rounded-xl p-4 border border-white/10">
      <label className="text-xs text-blue-200 mb-1 flex items-center gap-2">
        {icon} {label}
      </label>
      <input
        type="number"
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full p-2 rounded-lg bg-white/20 border border-white/10 text-white outline-none"
      />
    </div>
  )
}

function NumberInput({ value, onChange }: { value: number; onChange: (n: number) => void }) {
  return (
    <input
      type="number"
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      className="w-full text-right bg-white/10 border border-white/10 rounded-md px-2 py-1 text-white outline-none"
    />
  )
}

function StatBox({ label, value, highlight = false }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className={`rounded-xl p-4 border border-white/10 ${highlight ? "bg-gradient-to-r from-cyan-600/20 to-blue-600/20" : "bg-white/10"}`}>
      <div className="text-[11px] uppercase tracking-wide text-blue-200">{label}</div>
      <div className={`text-white font-semibold ${highlight ? "text-lg" : ""}`}>{value}</div>
    </div>
  )
}

function MiniHint({ icon, title, desc }: { icon: any; title: string; desc: string }) {
  return (
    <div className="rounded-xl p-4 border border-white/10 bg-white/10">
      <div className="flex items-center gap-2 text-white font-semibold mb-1">
        {icon} {title}
      </div>
      <p className="text-sm text-blue-100">{desc}</p>
    </div>
  )
}

function Bar({ label, pct, tone }: { label: string; pct: number; tone: string }) {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between text-xs text-blue-200 mb-1">
        <span>{label}</span>
        <span>{pct}%</span>
      </div>
      <div className="w-full h-3 bg-white/10 rounded-lg overflow-hidden">
        <div className={`h-3 rounded-lg bg-gradient-to-r ${tone}`} style={{ width: `${pct}%` }} />
      </div>
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
      question: "Snowball strategy means paying extra toward:",
      options: ["Highest rate debt first", "Smallest balance first", "Any debt randomly", "Only minimums"],
      correct: "Smallest balance first",
    },
    {
      question: "Avalanche strategy usually results in:",
      options: ["Higher total interest", "Lower total interest", "No difference vs snowball", "No payments to minimums"],
      correct: "Lower total interest",
    },
    {
      question: "A key success factor regardless of strategy:",
      options: ["Never automating minimums", "Taking new BNPL debt", "Rolling closed-debt EMI to next target", "Ignoring emergency fund"],
      correct: "Rolling closed-debt EMI to next target",
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
                } ${
                  submitted && isCorrect ? "border-green-400 bg-green-500/10" : ""
                } ${
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

/* ======================= Helpers ======================= */

function rid() {
  return Math.random().toString(36).slice(2, 9)
}

function safe(n: any) {
  const x = Number(n)
  return Number.isFinite(x) ? Math.max(0, x) : 0
}

function fmt(n: number) {
  return Math.round(n).toLocaleString("en-IN")
}
