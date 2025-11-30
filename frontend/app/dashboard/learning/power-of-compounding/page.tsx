"use client"

import { useMemo, useState } from "react"
import { motion } from "framer-motion"
import {
  TrendingUp,
  TimerReset,
  Calculator,
  AlarmClockCheck,
  ArrowRightLeft,
  ShieldCheck,
  Info,
  CheckCircle,
  XCircle,
  RotateCcw,
  Coins,
  Landmark,
  Calendar,
  BookOpen,
  Target,
  AlertTriangle,
  BarChart3,
  MessageCircle,
} from "lucide-react"

/**
 * Lesson: Power of Compounding (with SIP Examples)
 * Level: Intermediate (SEBI-compliant, educational only)
 */

export default function Lesson_PowerOfCompounding() {
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
          <TrendingUp className="h-8 w-8 text-cyan-400" />
          Power of Compounding — SIP Examples
        </h1>
        <p className="text-blue-200 text-lg">
          Make *time* your biggest ally: earn returns on your returns 📈
        </p>
        <Disclaimer />
      </header>

      {/* 1️⃣ Concept */}
      <LessonCard title="1️⃣ What is Compounding? (Simple)" icon={<BookOpen className="h-5 w-5 text-cyan-400" />}>
        <p>
          Compounding means your money earns returns, and then those returns also start earning *more returns*.
          Over time, this creates *exponential growth*.
        </p>
        <div className="mt-3 rounded-xl p-4 bg-white/10 border border-white/10">
          <div className="text-blue-200 text-sm">Formula (annual compounding):</div>
          <div className="text-white font-semibold">FV = P × (1 + r)<sup>n</sup></div>
          <div className="text-blue-300 text-xs mt-1">FV: future value • P: principal • r: annual rate • n: years</div>
        </div>
      </LessonCard>

      {/* 2️⃣ SIP Compounding Calculator */}
      <SIPCalculator />

      {/* 3️⃣ Delay Cost Simulator */}
      <DelayCostSimulator />

      {/* 4️⃣ Rule of 72 */}
      <Rule72Card />

      {/* 5️⃣ Inflation-Adjusted Returns */}
      <RealReturnCard />

      {/* 6️⃣ Lump Sum vs SIP */}
      <LumpSumVsSIP />

      {/* 7️⃣ Takeaways */}
      <LessonCard title="📘 Key Takeaways" icon={<BookOpen className="h-5 w-5 text-cyan-400" />}>
        <ul className="list-disc list-inside text-sm space-y-2">
          <li>Start *early* → time multiplies results.</li>
          <li>Stay *consistent* → SIP leverages compounding + rupee-cost averaging.</li>
          <li>Mind *inflation* → aim for real (inflation-adjusted) growth.</li>
          <li>Don’t chase short-term market moves; focus on *duration* and *discipline*.</li>
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

function LessonCard({ title, children, icon }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="bg-white/10 p-6 rounded-2xl border border-white/10 shadow-lg space-y-3"
    >
      <h2 className="text-xl font-semibold text-white flex items-center gap-2">
        {icon} {title}
      </h2>
      <div className="text-blue-100 text-sm leading-relaxed">{children}</div>
    </motion.div>
  )
}

function Disclaimer() {
  return (
    <p className="text-xs text-yellow-300 flex items-center gap-2 justify-center">
      <ShieldCheck className="h-4 w-4" />
      Educational only — Not investment advice. NeoCred is not a SEBI-registered advisor.
    </p>
  )
}

function Input({ label, value, onChange, icon, type = "number" }: any) {
  return (
    <div className="bg-white/10 rounded-xl p-4 border border-white/10">
      <label className="text-xs text-blue-200 flex items-center gap-2 mb-1">
        {icon} {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="w-full p-2 rounded-lg bg-white/20 border border-white/10 text-white outline-none"
      />
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

/* ======================= SIP Calculator ======================= */
/**
 * FV (SIP) = M × [((1+r)^N − 1)/r] × (1+r)
 * where M = monthly SIP, r = monthly rate, N = months
 */
function SIPCalculator() {
  const [monthly, setMonthly] = useState(5000)
  const [years, setYears] = useState(15)
  const [annualRate, setAnnualRate] = useState(12) // %
  const months = years * 12
  const r = annualRate / 100 / 12
  const factor = r > 0 ? (Math.pow(1 + r, months) - 1) / r : months
  const futureValue = monthly * factor * (1 + r)
  const totalInvested = monthly * months
  const gains = futureValue - totalInvested

  return (
    <LessonCard title="2️⃣ SIP Compounding — Future Value Calculator" icon={<Calculator className="h-5 w-5 text-blue-400" />}>
      <div className="grid md:grid-cols-3 gap-4">
        <Input
          label="Monthly SIP (₹)"
          value={monthly}
          onChange={(e: any) => setMonthly(n(e.target.value))}
          icon={<Coins className="h-4 w-4 text-cyan-300" />}
        />
        <Input
          label="Tenure (years)"
          value={years}
          onChange={(e: any) => setYears(n(e.target.value))}
          icon={<Calendar className="h-4 w-4 text-cyan-300" />}
        />
        <Input
          label="Expected Return (p.a. %)"
          value={annualRate}
          onChange={(e: any) => setAnnualRate(n(e.target.value))}
          icon={<TrendingUp className="h-4 w-4 text-cyan-300" />}
        />
      </div>

      <div className="grid md:grid-cols-3 gap-4 mt-4">
        <Stat label="Total Invested" value={`₹${fmt(totalInvested)}`} />
        <Stat label="Estimated Gains" value={`₹${fmt(gains)}`} />
        <Stat label="Future Value" value={`₹${fmt(futureValue)}`} highlight />
      </div>

      <p className="text-xs text-blue-300 mt-2">
        Projections are educational; actual returns vary with markets and expenses.
      </p>
    </LessonCard>
  )
}

/* ======================= Delay Cost Simulator ======================= */
/**
 * Compare: Start Now vs Start Later
 * Both contribute same monthly amount for same total years; the "later" start has fewer compounding periods.
 */
function DelayCostSimulator() {
  const [monthly, setMonthly] = useState(5000)
  const [years, setYears] = useState(20)
  const [delayYears, setDelayYears] = useState(5)
  const [annualRate, setAnnualRate] = useState(12)

  const r = annualRate / 100 / 12
  const monthsNow = years * 12
  const monthsLater = Math.max(0, (years - delayYears) * 12)

  const fvNow = fvSIP(monthly, r, monthsNow)
  const fvLater = fvSIP(monthly, r, monthsLater)
  const gap = Math.max(0, fvNow - fvLater)

  return (
    <LessonCard title="3️⃣ The Cost of Delay — Start Now vs Start Later" icon={<AlertTriangle className="h-5 w-5 text-amber-400" />}>
      <div className="grid md:grid-cols-4 gap-4">
        <Input label="Monthly SIP (₹)" value={monthly} onChange={(e: any) => setMonthly(n(e.target.value))} icon={<Coins className="h-4 w-4 text-cyan-300" />} />
        <Input label="Total Horizon (yrs)" value={years} onChange={(e: any) => setYears(n(e.target.value))} icon={<TimerReset className="h-4 w-4 text-cyan-300" />} />
        <Input label="Delay (yrs)" value={delayYears} onChange={(e: any) => setDelayYears(n(e.target.value))} icon={<AlarmClockCheck className="h-4 w-4 text-amber-300" />} />
        <Input label="Return p.a. (%)" value={annualRate} onChange={(e: any) => setAnnualRate(n(e.target.value))} icon={<TrendingUp className="h-4 w-4 text-cyan-300" />} />
      </div>

      <div className="grid md:grid-cols-3 gap-4 mt-4">
        <Stat label="FV — Start Now" value={`₹${fmt(fvNow)}`} />
        <Stat label="FV — Start After Delay" value={`₹${fmt(fvLater)}`} />
        <Stat label="Wealth Lost Due to Delay" value={`₹${fmt(gap)}`} highlight />
      </div>

      <p className="text-xs text-blue-300 mt-2">
        Starting early adds *years of compounding* that cannot be caught up easily later.
      </p>
    </LessonCard>
  )
}

/* ======================= Rule of 72 ======================= */
function Rule72Card() {
  const [rate, setRate] = useState(12)
  const yearsToDouble = rate > 0 ? 72 / rate : Infinity

  return (
    <LessonCard title="4️⃣ Rule of 72 — Quick Doubling Time" icon={<Target className="h-5 w-5 text-green-400" />}>
      <div className="grid md:grid-cols-3 gap-4">
        <Input
          label="Expected Return (p.a. %)"
          value={rate}
          onChange={(e: any) => setRate(n(e.target.value))}
          icon={<Calculator className="h-4 w-4 text-cyan-300" />}
        />
        <div className="md:col-span-2 rounded-xl p-4 bg-white/10 border border-white/10">
          <div className="text-blue-200 text-sm">Approx. Years to Double</div>
          <div className="text-white font-semibold text-2xl mt-1">
            {isFinite(yearsToDouble) ? yearsToDouble.toFixed(1) : "—"}
          </div>
          <p className="text-xs text-blue-300 mt-1">Rule of thumb; actual results vary.</p>
        </div>
      </div>
    </LessonCard>
  )
}

/* ======================= Inflation-Adjusted Returns ======================= */
/**
 * Real Return ≈ ((1+nominal)/(1+inflation)) − 1
 */
function RealReturnCard() {
  const [nominal, setNominal] = useState(12)
  const [inflation, setInflation] = useState(6)
  const real = (1 + nominal / 100) / (1 + inflation / 100) - 1

  return (
    <LessonCard title="5️⃣ Real Returns — Inflation Matters" icon={<BarChart3 className="h-5 w-5 text-purple-400" />}>
      <div className="grid md:grid-cols-3 gap-4">
        <Input label="Nominal Return (p.a. %)" value={nominal} onChange={(e: any) => setNominal(n(e.target.value))} icon={<TrendingUp className="h-4 w-4 text-cyan-300" />} />
        <Input label="Inflation (p.a. %)" value={inflation} onChange={(e: any) => setInflation(n(e.target.value))} icon={<Info className="h-4 w-4 text-cyan-300" />} />
        <div className="rounded-xl p-4 bg-white/10 border border-white/10">
          <div className="text-blue-200 text-sm">Approx. Real Return</div>
          <div className={`text-white font-semibold text-2xl mt-1 ${real >= 0 ? "" : "text-red-300"}`}>
            {(real * 100).toFixed(1)}%
          </div>
          <p className="text-xs text-blue-300 mt-1">
            Aim for positive *real* returns to actually grow purchasing power.
          </p>
        </div>
      </div>
    </LessonCard>
  )
}

/* ======================= Lump Sum vs SIP ======================= */
function LumpSumVsSIP() {
  const [lump, setLump] = useState(200000)
  const [monthly, setMonthly] = useState(5000)
  const [years, setYears] = useState(10)
  const [annualRate, setAnnualRate] = useState(12)

  const nMonths = years * 12
  const r = annualRate / 100 / 12

  const fvLump = lump * Math.pow(1 + r, nMonths)
  const fvSip = fvSIP(monthly, r, nMonths)

  return (
    <LessonCard title="6️⃣ Lump Sum vs SIP — Illustrative Comparison" icon={<ArrowRightLeft className="h-5 w-5 text-indigo-400" />}>
      <div className="grid md:grid-cols-4 gap-4">
        <Input label="Lump Sum (₹)" value={lump} onChange={(e: any) => setLump(n(e.target.value))} icon={<Landmark className="h-4 w-4 text-cyan-300" />} />
        <Input label="Monthly SIP (₹)" value={monthly} onChange={(e: any) => setMonthly(n(e.target.value))} icon={<Coins className="h-4 w-4 text-cyan-300" />} />
        <Input label="Tenure (yrs)" value={years} onChange={(e: any) => setYears(n(e.target.value))} icon={<Calendar className="h-4 w-4 text-cyan-300" />} />
        <Input label="Return p.a. (%)" value={annualRate} onChange={(e: any) => setAnnualRate(n(e.target.value))} icon={<TrendingUp className="h-4 w-4 text-cyan-300" />} />
      </div>

      <div className="grid md:grid-cols-2 gap-4 mt-4">
        <Stat label="Lump Sum FV" value={`₹${fmt(fvLump)}`} />
        <Stat label="SIP FV" value={`₹${fmt(fvSip)}`} highlight />
      </div>

      <p className="text-xs text-blue-300 mt-2">
        SIP helps average out volatility and is easier for salaried investors; Lump sum benefits when invested during favorable valuations. This is educational, not advice.
      </p>
    </LessonCard>
  )
}

/* ======================= Quiz ======================= */
function QuizComponent() {
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [score, setScore] = useState(0)

  const quiz = [
    {
      question: "Compounding works best when you:",
      options: ["Invest late with higher amounts", "Invest early and stay invested", "Time the market perfectly", "Change funds monthly"],
      correct: "Invest early and stay invested",
    },
    {
      question: "Rule of 72 estimates:",
      options: ["Inflation rate", "Tax slab", "Years to double money", "Expense ratio"],
      correct: "Years to double money",
    },
    {
      question: "Real return turns negative when:",
      options: ["Nominal < Inflation", "Nominal > Inflation", "SIP > EMI", "None"],
      correct: "Nominal < Inflation",
    },
  ]

  const handleSelect = (i: number, opt: string) => {
    if (!submitted) setAnswers((prev) => ({ ...prev, [i]: opt }))
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
                transition={{ duration: 0.2 }}
                className={`w-full text-left px-4 py-2 rounded-lg border mb-2 transition ${
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
function n(v: any) {
  const num = Number(v)
  return Number.isFinite(num) ? num : 0
}

function fmt(n: number) {
  return Math.round(n).toLocaleString("en-IN")
}

function fvSIP(M: number, rMonthly: number, Nmonths: number) {
  if (Nmonths <= 0) return 0
  if (rMonthly <= 0) return M * Nmonths
  const factor = (Math.pow(1 + rMonthly, Nmonths) - 1) / rMonthly
  return M * factor * (1 + rMonthly)
}