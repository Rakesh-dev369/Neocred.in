"use client"

import { useState, useMemo } from "react"
import { motion } from "framer-motion"
import {
  Repeat,
  CalendarCheck,
  TrendingUp,
  Wallet,
  ShieldCheck,
  CheckCircle,
  XCircle,
  RotateCcw,
  Clock,
  PieChart,
  ListChecks,
  HelpCircle,
} from "lucide-react"

/**
 * Lesson: Smart Financial Habits — Automate, Track & Review
 * Level: Intermediate (SEBI-compliant; educational only)
 * File name: smart-financial-habits.tsx
 *
 * Focus: Turning money management into consistent, automated behavior.
 */

export default function Lesson_SmartFinancialHabits() {
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
            <Repeat className="h-8 w-8 text-emerald-400" />
          </motion.div>
          Smart Financial Habits — Automate, Track & Review
        </h1>
        <p className="text-blue-200 text-lg">
          Build consistency in money management through automation, periodic tracking, and mindful reviews.
        </p>
        <Disclaimer />
      </header>

      {/* 1️⃣ Why Habits Matter */}
      <LessonCard
        title={
          <>
            <TrendingUp className="h-5 w-5 text-cyan-400 inline-block mr-2" />
            1️⃣ Why Habits Matter More Than Income
          </>
        }
      >
        <p>
          Financial success isn’t about how much you earn — it’s about how consistently you manage what you have.
          Smart habits turn chaos into clarity:
        </p>
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>Habits reduce decision fatigue — systems  willpower.</li>
          <li>Automated actions prevent missed payments & impulsive spends.</li>
          <li>Tracking turns vague goals into measurable progress.</li>
          <li>Reviews help you adjust when life or income changes.</li>
        </ul>
        <p className="text-xs text-blue-300 mt-2">
          Goal: Make finance predictable, not stressful — habits create stability even in uncertain markets.
        </p>
      </LessonCard>

      {/* 2️⃣ Automate */}
      <AutomationCard />

      {/* 3️⃣ Track */}
      <TrackingCard />

      {/* 4️⃣ Review */}
      <ReviewPlanner />

      {/* 5️⃣ Habit Progress Tracker */}
      <HabitProgressTracker />

      {/* 6️⃣ Best Practices */}
      <BestPractices />

      {/* 7️⃣ Quick Quiz */}
      <LessonCard
        title="💬 Quick Quiz"
      >
        <QuizComponent />
      </LessonCard>
    </motion.section>
  )
}

/* ======================= Common Components ======================= */

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
      Educational only — NeoCred is not a SEBI-registered adviser. Automate and track responsibly.
    </p>
  )
}

/* ======================= 2️⃣ Automate ======================= */

function AutomationCard() {
  return (
    <LessonCard
      title={
        <>
          <Wallet className="h-5 w-5 text-emerald-400 inline-block mr-2" />
          2️⃣ Automate — “Set It & Let It Grow”
        </>
      }
    >
      <ul className="list-disc list-inside space-y-1">
        <li>
          <strong>SIP Auto-debits:</strong> Automate monthly investments in mutual funds; treat them like EMIs for wealth.
        </li>
        <li>
          <strong>UPI Autopay / Standing Instructions:</strong> Automate bills, insurance premiums, EMIs to prevent penalties.
        </li>
        <li>
          <strong>Salary Auto-Split:</strong> Send fixed % of income to “Savings” and “Investing” accounts.
        </li>
        <li>
          <strong>Emergency Fund Refill:</strong> Use auto-transfer rules to maintain a 3–6 month buffer.
        </li>
        <li>
          <strong>Budget Alerts:</strong> Use app-based spending caps or SMS triggers for specific categories.
        </li>
      </ul>
      <p className="text-xs text-blue-300 mt-2">
        Tip: Use your bank’s “Auto Sweep” feature — excess savings automatically move to higher-yield short-term FDs.
      </p>
    </LessonCard>
  )
}

/* ======================= 3️⃣ Track ======================= */

function TrackingCard() {
  return (
    <LessonCard
      title={
        <>
          <PieChart className="h-5 w-5 text-blue-400 inline-block mr-2" />
          3️⃣ Track — Know Where Every Rupee Goes
        </>
      }
    >
      <p className="mb-2">
        Use apps and dashboards to visualize your cash flow. Tracking helps you control impulse spending and align actions with goals.
      </p>
      <ul className="list-disc list-inside space-y-1">
        <li>
          <strong>Apps:</strong> Walnut, Money Manager, Coin by Zerodha, Cube Wealth, or manual Google Sheets.
        </li>
        <li>
          <strong>Categories:</strong> Group spends — needs, wants, savings, EMIs, lifestyle, learning.
        </li>
        <li>
          <strong>Weekly Review:</strong> Spend 10 minutes every Sunday reviewing where your money went.
        </li>
        <li>
          <strong>Alerts:</strong> Set auto-SMS filters for credit card or UPI spends to catch unusual activity.
        </li>
      </ul>
    </LessonCard>
  )
}

/* ======================= 4️⃣ Review ======================= */

function ReviewPlanner() {
  const [income, setIncome] = useState(50000)
  const [expenses, setExpenses] = useState(32000)
  const [savings, setSavings] = useState(8000)
  const surplus = useMemo(() => income - expenses - savings, [income, expenses, savings])

  return (
    <LessonCard
      title={
        <>
          <CalendarCheck className="h-5 w-5 text-teal-400 inline-block mr-2" />
          4️⃣ Monthly & Quarterly Review — Your Financial Reflection
        </>
      }
    >
      <div className="grid md:grid-cols-3 gap-4">
        <NumberInput label="Monthly Income (₹)" value={income} setValue={setIncome} />
        <NumberInput label="Monthly Expenses (₹)" value={expenses} setValue={setExpenses} />
        <NumberInput label="Monthly Savings (₹)" value={savings} setValue={setSavings} />
      </div>
      <div className="grid sm:grid-cols-3 gap-4 mt-4">
        <Stat label="Surplus / Deficit" value={`${surplus >= 0 ? "₹" + surplus.toLocaleString() : "₹" + Math.abs(surplus) + " deficit"}`} highlight={surplus >= 0} />
        <Stat label="Savings Rate" value={`${((savings / income) * 100).toFixed(1)}%`} />
        <Stat label="Expense Ratio" value={`${((expenses / income) * 100).toFixed(1)}%`} />
      </div>
      <p className="text-xs text-blue-300 mt-2">
        If surplus exists, redirect towards SIP or goal-based investment. If deficit → trim 10% from wants category.
      </p>
    </LessonCard>
  )
}

function NumberInput({ label, value, setValue }: any) {
  return (
    <div className="bg-white/10 rounded-xl p-4 border border-white/10">
      <label className="text-xs text-blue-200 mb-1 block">{label}</label>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="w-full p-2 rounded-lg bg-white/20 border border-white/10 text-white outline-none"
      />
    </div>
  )
}

function Stat({ label, value, highlight = false }: any) {
  return (
    <div
      className={`rounded-xl p-4 border border-white/10 ${
        highlight ? "bg-gradient-to-r from-emerald-600/20 to-blue-600/20" : "bg-white/10"
      }`}
    >
      <div className="text-[11px] uppercase tracking-wide text-blue-200">{label}</div>
      <div className={`text-white font-semibold ${highlight ? "text-lg" : ""}`}>{value}</div>
    </div>
  )
}

/* ======================= 5️⃣ Habit Tracker ======================= */

function HabitProgressTracker() {
  const [habits, setHabits] = useState<Record<string, boolean>>({
    "Auto-pay Bills": true,
    "Track Weekly": false,
    "SIP on Date": true,
    "Review Monthly": false,
    "Expense Categorized": false,
  })
  const toggle = (k: string) => setHabits((p) => ({ ...p, [k]: !p[k] }))
  const progress = useMemo(() => {
    const total = Object.keys(habits).length
    const done = Object.values(habits).filter(Boolean).length
    return Math.round((done / total) * 100)
  }, [habits])

  return (
    <LessonCard
      title={
        <>
          <Clock className="h-5 w-5 text-purple-400 inline-block mr-2" />
          5️⃣ Weekly Habit Progress Tracker
        </>
      }
    >
      <div className="grid sm:grid-cols-2 gap-3">
        {Object.keys(habits).map((h) => (
          <button
            key={h}
            onClick={() => toggle(h)}
            className={`text-left p-3 rounded-xl border transition-all ${
              habits[h]
                ? "bg-gradient-to-r from-emerald-600/30 to-teal-600/30 border-emerald-400/40"
                : "bg-white/10 border-white/10 hover:bg-white/20"
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="font-semibold text-white flex items-center gap-2">
                <ListChecks className="h-4 w-4 text-green-300" /> {h}
              </div>
              <input type="checkbox" checked={habits[h]} readOnly className="accent-emerald-400" />
            </div>
          </button>
        ))}
      </div>
      <div className="mt-4 text-sm text-blue-100">
        Progress: <span className="font-semibold text-white">{progress}%</span> habits maintained this week ✅
      </div>
    </LessonCard>
  )
}

/* ======================= 6️⃣ Best Practices ======================= */

function BestPractices() {
  return (
    <LessonCard
      title={
        <>
          <ShieldCheck className="h-5 w-5 text-emerald-400 inline-block mr-2" />
          6️⃣ Best Practices for Long-Term Habit Success
        </>
      }
    >
      <ul className="list-disc list-inside space-y-1">
        <li>Use the “1% Rule” — improve one small money habit weekly.</li>
        <li>Automate the boring; review the important.</li>
        <li>Use visual trackers or finance dashboards to stay motivated.</li>
        <li>Never skip reviewing emergency fund and insurance coverage.</li>
        <li>Reset automation yearly after salary or goal updates.</li>
      </ul>
      <p className="text-xs text-blue-300 mt-2">
        Habits compound faster than money — a small daily decision becomes your strongest asset over time.
      </p>
    </LessonCard>
  )
}

/* ======================= 7️⃣ Quiz ======================= */

function QuizComponent() {
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [score, setScore] = useState(0)

  const quiz = [
    {
      question: "Which financial task should ideally be automated first?",
      options: ["Tracking expenses", "Paying bills & SIPs", "Quarterly review"],
      correct: "Paying bills & SIPs",
    },
    {
      question: "How often should you review your finances?",
      options: ["Every 3–6 months", "Once in 3 years", "Never"],
      correct: "Every 3–6 months",
    },
    {
      question: "A smart savings habit involves:",
      options: ["Saving what’s left after spending", "Saving first, spending later", "Borrowing to save"],
      correct: "Saving first, spending later",
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
                whileHover={!submitted ? { scale: 1.02 } : {}}
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
