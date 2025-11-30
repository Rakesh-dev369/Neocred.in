"use client"

import { useEffect, useMemo, useState } from "react"
import { motion } from "framer-motion"
import {
  Target,
  Calendar,
  Wallet,
  TrendingUp,
  Calculator,
  AlarmClockCheck,
  Star,
  CheckCircle,
  XCircle,
  RotateCcw,
  ArrowRight,
} from "lucide-react"
import { useRouter } from "next/navigation"

/**
 * Lesson: Financial Goal Setting — Short-term vs Long-term
 * Fintech feel + interactive planner (SIP math) + quiz
 */

type GoalHorizon = "Short" | "Medium" | "Long"
type Priority = "High" | "Medium" | "Low"

type Goal = {
  id: string
  name: string
  target: number
  months: number
  horizon: GoalHorizon
  priority: Priority
}

const horizonHelp: Record<GoalHorizon, { label: string; rate: number; hint: string }> = {
  Short: { label: "0–24 months", rate: 0.05, hint: "Keep capital safe (Savings/TD/Liquid funds)" },
  Medium: { label: "25–60 months", rate: 0.08, hint: "Debt/Hybrid funds to balance risk" },
  Long: { label: "61+ months", rate: 0.11, hint: "Equity/SIP for growth; stay disciplined" },
}

// Format ₹
const INR = (n: number) =>
  "₹" + (isNaN(n) ? 0 : Math.round(n)).toLocaleString("en-IN")

// Monthly SIP needed to reach FV in N months at monthly rate r
// FV = SIP * [((1+r)^N - 1)/r] * (1+r)
// SIP = FV / (A * (1+r)), where A = [((1+r)^N - 1)/r]
function monthlySipForGoal(target: number, months: number, annualRate: number) {
  const r = annualRate / 12
  if (months <= 0) return target
  if (r <= 0) return target / months
  const factor = (Math.pow(1 + r, months) - 1) / r
  return target / (factor * (1 + r))
}

export default function Lesson_FinancialGoalSetting() {
  const router = useRouter()
  const [goals, setGoals] = useState<Goal[]>([])
  const [form, setForm] = useState<Goal>({
    id: "",
    name: "",
    target: 100000,
    months: 12,
    horizon: "Short",
    priority: "High",
  })

  // Load/save to localStorage (client-only)
  useEffect(() => {
    try {
      const raw = localStorage.getItem("nc_goals")
      if (raw) setGoals(JSON.parse(raw))
    } catch {}
  }, [])
  useEffect(() => {
    try {
      localStorage.setItem("nc_goals", JSON.stringify(goals))
    } catch {}
  }, [goals])

  // Derive suggested monthly SIP for current form
  const currentRate = horizonHelp[form.horizon].rate
  const suggestedSip = useMemo(
    () => monthlySipForGoal(form.target, form.months, currentRate),
    [form.target, form.months, currentRate]
  )

  const addGoal = () => {
    if (!form.name.trim() || form.target <= 0 || form.months <= 0) return
    setGoals((g) => [
      ...g,
      { ...form, id: crypto.randomUUID() },
    ])
    setForm({
      id: "",
      name: "",
      target: 100000,
      months: 12,
      horizon: "Short",
      priority: "High",
    })
  }

  const removeGoal = (id: string) => setGoals((g) => g.filter((x) => x.id !== id))

  const totalMonthly = useMemo(
    () =>
      goals.reduce(
        (sum, g) => sum + monthlySipForGoal(g.target, g.months, horizonHelp[g.horizon].rate),
        0
      ),
    [goals]
  )

  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-5xl mx-auto space-y-10 text-blue-50"
    >
      {/* Header */}
      <div className="text-center space-y-3">
        <h1 className="text-3xl sm:text-4xl font-bold text-white flex items-center justify-center gap-2">
          <Target className="h-8 w-8 text-cyan-400" />
          Financial Goal Setting — Short vs Long Term
        </h1>
        <p className="text-blue-200 text-lg max-w-3xl mx-auto">
          Define goals clearly, pick a horizon, and commit monthly.  
          <strong>Rule:</strong> Short = protect capital, Long = let compounding work.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-2">
          <Badge>SMART Goals</Badge>
          <Badge>Goal-based SIP</Badge>
          <Badge>Indian Context</Badge>
        </div>
      </div>

      {/* 1. Why Goals? */}
      <LessonCard title="1️⃣ Why set financial goals before investing?">
        <ul className="list-disc list-inside space-y-2">
          <li>Gives clarity on <strong>how much</strong> and <strong>how long</strong> to invest.</li>
          <li>Helps pick the <strong>right product</strong> (Savings vs Debt vs Equity).</li>
          <li>Prevents ad-hoc investing and improves discipline.</li>
        </ul>
      </LessonCard>

      {/* 2. SMART Framework */}
      <LessonCard title="2️⃣ SMART framework (NeoCred-style)">
        <ul className="grid sm:grid-cols-2 gap-2 text-sm">
          <li>🎯 <strong>Specific:</strong> “₹5L for MBA fee”</li>
          <li>📏 <strong>Measurable:</strong> Track monthly SIP</li>
          <li>✅ <strong>Achievable:</strong> Fits your cashflow</li>
          <li>🧭 <strong>Relevant:</strong> Tied to life plan</li>
          <li>⏱ <strong>Time-bound:</strong> Clear deadline</li>
        </ul>
      </LessonCard>

      {/* 3. Horizons & Products */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid md:grid-cols-3 gap-4"
      >
        <HorizonCard
          title="Short Term"
          subtitle="0–24 months"
          gradient="from-blue-700/30 to-cyan-600/30"
          items={["Emergency fund", "Vacation in 12 months", "Laptop/Phone upgrade"]}
          products={["Savings A/c", "TD/RD", "Liquid/Ultra-short debt funds"]}
        />
        <HorizonCard
          title="Medium Term"
          subtitle="25–60 months"
          gradient="from-emerald-700/30 to-teal-600/30"
          items={["Car down-payment", "Master’s in 3 yrs", "Home deposit in 4 yrs"]}
          products={["Debt funds", "Conservative/Hybrid funds", "Short-duration debt"]}
        />
        <HorizonCard
          title="Long Term"
          subtitle="61+ months"
          gradient="from-indigo-700/30 to-fuchsia-600/30"
          items={["Retirement", "Child education (10+ yrs)", "Wealth creation"]}
          products={["Equity index/SIP", "ELSS (tax saving)", "PPF/EPF mix"]}
        />
      </motion.div>

      {/* 4. Interactive Goal Planner */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white/10 p-6 rounded-2xl border border-white/10 shadow-lg"
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-white flex items-center gap-2">
            <Calculator className="h-5 w-5 text-cyan-300" /> Goal Planner (SIP-style)
          </h2>
          <p className="text-xs text-blue-200">Assumed returns: Short 5% • Medium 8% • Long 11% (annual)</p>
        </div>

        <div className="grid md:grid-cols-5 gap-3">
          <Input
            label="Goal Name"
            value={form.name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setForm((f) => ({ ...f, name: e.target.value }))}
            placeholder="e.g., Europe Trip"
            colSpan="md:col-span-2"
          />
          <Input
            label="Target Amount (₹)"
            type="number"
            value={form.target}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setForm((f) => ({ ...f, target: Number(e.target.value) }))}
          />
          <Input
            label="Months to Goal"
            type="number"
            value={form.months}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              const m = Number(e.target.value)
              let horizon: GoalHorizon = "Short"
              if (m >= 61) horizon = "Long"
              else if (m >= 25) horizon = "Medium"
              setForm((f) => ({ ...f, months: m, horizon }))
            }}
          />
          <Select
            label="Priority"
            value={form.priority}
            onChange={(v) => setForm((f) => ({ ...f, priority: v as Priority }))}
            options={["High", "Medium", "Low"]}
          />
        </div>

        <div className="mt-4 grid md:grid-cols-3 gap-4">
          <Stat label="Suggested Horizon" value={`${form.horizon} (${horizonHelp[form.horizon].label})`} />
          <Stat label="Assumed Return (p.a.)" value={`${Math.round(currentRate * 100)}%`} />
          <Stat label="Monthly SIP Needed" value={INR(suggestedSip)} highlight />
        </div>

        <div className="mt-4 flex items-center gap-3">
          <button
            onClick={addGoal}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-sm font-medium"
          >
            Add Goal
          </button>
          <span className="text-xs text-blue-200">{horizonHelp[form.horizon].hint}</span>
        </div>

        {/* Goals List */}
        {goals.length > 0 && (
          <div className="mt-6">
            <h3 className="text-white font-semibold mb-2">Your Goals</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-blue-100 border-collapse">
                <thead>
                  <tr className="border-b border-white/10 text-blue-200">
                    <th className="p-2 text-left">Goal</th>
                    <th className="p-2 text-left">Target</th>
                    <th className="p-2 text-left">Months</th>
                    <th className="p-2 text-left">Horizon</th>
                    <th className="p-2 text-left">Priority</th>
                    <th className="p-2 text-left">Monthly SIP</th>
                    <th className="p-2 text-left">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {goals.map((g) => {
                    const sip = monthlySipForGoal(g.target, g.months, horizonHelp[g.horizon].rate)
                    return (
                      <tr key={g.id} className="border-b border-white/5">
                        <td className="p-2">{g.name}</td>
                        <td className="p-2">{INR(g.target)}</td>
                        <td className="p-2">{g.months}</td>
                        <td className="p-2">{g.horizon}</td>
                        <td className="p-2">{g.priority}</td>
                        <td className="p-2">{INR(sip)}</td>
                        <td className="p-2">
                          <button
                            onClick={() => removeGoal(g.id)}
                            className="text-xs px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20"
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>

            <div className="mt-3 flex items-center justify-between">
              <div className="text-blue-200 text-sm flex items-center gap-2">
                <AlarmClockCheck className="h-4 w-4" />
                Total Monthly Commitment for all goals:
              </div>
              <div className="text-white font-semibold">{INR(totalMonthly)}</div>
            </div>

            <div className="mt-4 text-right">
              <button
                onClick={() => router.push("/dashboard/tools")}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-sm font-medium"
              >
                Open Calculators <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}
      </motion.div>

      {/* 5. Example Goal Map */}
      <LessonCard title="5️⃣ Example Goal Map (India)">
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>Emergency Fund — <strong>Short</strong> — 6 months’ expenses in Liquid/TD</li>
          <li>Child Education in 10 yrs — <strong>Long</strong> — Equity Index SIP + PPF</li>
          <li>Home Down-payment in 4 yrs — <strong>Medium</strong> — Debt/Hybrid mix</li>
          <li>Retirement in 25 yrs — <strong>Long</strong> — Equity SIP + EPF/PPF</li>
        </ul>
      </LessonCard>

      {/* 6. Key Mistakes */}
      <LessonCard title="6️⃣ Common Mistakes to Avoid">
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>Investing in equity for a <strong>short-term</strong> goal.</li>
          <li>No emergency fund → forced to break investments.</li>
          <li>Random SIPs without defined goals or timelines.</li>
        </ul>
      </LessonCard>

      {/* 7. Key Takeaways */}
      <LessonCard title="📘 Key Takeaways">
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>Define SMART goals with a deadline and amount.</li>
          <li>Match horizon to product risk (Short → Safe, Long → Growth).</li>
          <li>Automate monthly contributions for discipline.</li>
        </ul>
      </LessonCard>

      {/* 8. Quiz */}
      <LessonCard title="💬 Quick Quiz">
        <QuizComponent />
      </LessonCard>
    </motion.section>
  )
}

/* ---------- UI Bits ---------- */

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/10">
      {children}
    </span>
  )
}

function LessonCard({ title, children }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="bg-white/10 p-6 rounded-2xl backdrop-blur-lg border border-white/10 shadow-lg space-y-3"
    >
      <h2 className="text-xl font-semibold text-white mb-1">{title}</h2>
      <div className="text-blue-100 leading-relaxed">{children}</div>
    </motion.div>
  )
}

function HorizonCard({
  title,
  subtitle,
  gradient,
  items,
  products,
}: {
  title: string
  subtitle: string
  gradient: string
  items: string[]
  products: string[]
}) {
  return (
    <div className={`rounded-2xl p-5 bg-gradient-to-r ${gradient} border border-white/10`}>
      <div className="flex items-center gap-2 mb-1">
        <Calendar className="h-5 w-5 text-cyan-300" />
        <div className="text-white font-semibold">{title}</div>
      </div>
      <div className="text-xs text-blue-200 mb-3">{subtitle}</div>
      <div className="text-blue-100 text-sm mb-2">Examples:</div>
      <ul className="list-disc list-inside text-blue-100 text-sm mb-3">
        {items.map((x, i) => <li key={i}>{x}</li>)}
      </ul>
      <div className="text-blue-100 text-sm mb-1">Suggested Products:</div>
      <div className="flex flex-wrap gap-2">
        {products.map((p, i) => (
          <span key={i} className="text-[11px] px-2 py-1 rounded-md bg-white/10 border border-white/10">{p}</span>
        ))}
      </div>
    </div>
  )
}

function Input({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  colSpan = "",
}: any) {
  return (
    <div className={`bg-white/10 p-4 rounded-xl border border-white/10 ${colSpan}`}>
      <label className="text-xs text-blue-200 mb-1 block">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full p-2 rounded-lg bg-white/20 border border-white/10 text-white outline-none"
      />
    </div>
  )
}

function Select({
  label,
  value,
  onChange,
  options,
}: {
  label: string
  value: string
  onChange: (v: string) => void
  options: string[]
}) {
  return (
    <div className="bg-white/10 p-4 rounded-xl border border-white/10">
      <label className="text-xs text-blue-200 mb-1 block">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-2 rounded-lg bg-white/20 border border-white/10 text-white outline-none"
      >
        {options.map((o) => (
          <option key={o} value={o} className="bg-slate-900">
            {o}
          </option>
        ))}
      </select>
    </div>
  )
}

function Stat({ label, value, highlight = false }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className={`rounded-xl p-4 border border-white/10 ${highlight ? "bg-gradient-to-r from-cyan-600/20 to-blue-600/20" : "bg-white/10"}`}>
      <div className="text-[11px] uppercase tracking-wide text-blue-200">{label}</div>
      <div className={`text-white font-semibold ${highlight ? "text-lg" : ""}`}>{value}</div>
    </div>
  )
}

/* ---------- Quiz ---------- */

function QuizComponent() {
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [score, setScore] = useState(0)

  const quiz = [
    {
      question: "Best product for a goal due in 12 months:",
      options: ["Equity SIP", "Liquid/TD", "Smallcap Fund", "Gold derivatives"],
      correct: "Liquid/TD",
    },
    {
      question: "Long-term (10+ yrs) wealth goal should prefer:",
      options: ["Savings Account", "Time Deposit (1 yr)", "Equity Index SIP", "Credit Card EMI"],
      correct: "Equity Index SIP",
    },
    {
      question: "SMART goals require:",
      options: ["Only high returns", "Clear amount & deadline", "No monthly plan", "Only tax saving"],
      correct: "Clear amount & deadline",
    },
  ]

  const handleSelect = (qIndex: number, option: string) => {
    if (!submitted) setAnswers((prev) => ({ ...prev, [qIndex]: option }))
  }

  const handleSubmit = () => {
    const correctCount = quiz.reduce((sum, q, i) => sum + (answers[i] === q.correct ? 1 : 0), 0)
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
                <CheckCircle className="text-green-400 h-6 w-6" /> Perfect! Goal setting unlocked 🎉
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