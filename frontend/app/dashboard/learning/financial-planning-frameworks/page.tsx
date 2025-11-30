"use client"

import { useMemo, useState } from "react"
import { motion } from "framer-motion"
import {
  ShieldCheck,
  Target,
  Calculator,
  AlarmClockCheck,
  IndianRupee,
  BarChart3,
  Layers,
  ListChecks,
  RefreshCw,
  ClipboardList,
  Info,
  CheckCircle,
  XCircle,
  RotateCcw,
} from "lucide-react"

/**
 * Lesson: Financial Planning Frameworks (Goal-Based Investing, SMART Goals, Buckets, Glidepath, Rebalancing)
 * Level: Advanced (Educational Only — SEBI compliant)
 * File: financial-planning-frameworks.tsx
 */

export default function Lesson_FinancialPlanningFrameworks() {
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
          <Target className="h-8 w-8 text-cyan-400" />
          Financial Planning Frameworks
        </h1>
        <p className="text-blue-200 text-lg">
          Convert life goals into investable plans using SMART goals, asset allocation, buckets, glidepaths, and disciplined rebalancing.
        </p>
        <Disclaimer />
      </header>

      {/* 1️⃣ Frameworks Overview */}
      <LessonCard
        icon={<Layers className="h-5 w-5 text-cyan-300" />}
        title="1️⃣ Frameworks — The Building Blocks"
      >
        <ul className="list-disc list-inside text-sm space-y-2">
          <li><strong>Goal-based planning:</strong> Every rupee is linked to a named goal with a timeline & risk budget.</li>
          <li><strong>SMART goals:</strong> Specific, Measurable, Achievable, Relevant, Time-bound.</li>
          <li><strong>Asset allocation first:</strong> Returns come from allocation more than selection.</li>
          <li><strong>Bucket strategy:</strong> Safety (0–2y), Stability (2–5y), Growth (5y+).</li>
          <li><strong>Glidepath:</strong> Reduce equity risk as the goal approaches; move gains to safer assets.</li>
          <li><strong>Rebalancing:</strong> Periodic or threshold-based to keep risk in check.</li>
          <li><strong>IPS:</strong> A written Investment Policy Statement to enforce consistency under emotion & volatility.</li>
        </ul>
      </LessonCard>

      {/* 2️⃣ SMART Goal Planner (Inflation + SIP/Lumpsum) */}
      <SmartGoalPlanner />

      {/* 3️⃣ Risk Profile → Asset Allocation */}
      <RiskToAllocation />

      {/* 4️⃣ Bucket Strategy Builder */}
      <BucketStrategy />

      {/* 5️⃣ Glidepath (Years to Goal → Equity %) */}
      <GlidepathTool />

      {/* 6️⃣ Rebalancing Helper */}
      <RebalanceHelper />

      {/* 7️⃣ Investment Policy Statement (IPS) Builder */}
      <IPSBuilder />

      {/* 8️⃣ 💬 Quick Quiz */}
      <QuizComponent />
    </motion.section>
  )
}

/* ---------------- Reusable UI ---------------- */

function LessonCard({
  title,
  icon,
  children,
}: {
  title: string
  icon?: any
  children: any
}) {
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
      Educational only — NeoCred is not a SEBI-registered advisor. No investment advice.
    </p>
  )
}

function NumberInput({
  label,
  value,
  setValue,
  rightHint,
  step = "any",
}: {
  label: string
  value: number
  setValue: (n: number) => void
  rightHint?: string
  step?: string
}) {
  return (
    <div className="bg-white/10 rounded-xl p-4 border border-white/10">
      <label className="text-xs text-blue-200 mb-1 block">{label}</label>
      <div className="flex items-center gap-2">
        <input
          type="number"
          step={step}
          value={Number.isFinite(value) ? value : 0}
          onChange={(e) => setValue(Number(e.target.value))}
          className="w-full p-2 rounded-lg bg-white/20 border border-white/10 text-white outline-none"
        />
        {rightHint && <span className="text-[11px] text-blue-300">{rightHint}</span>}
      </div>
    </div>
  )
}

function StatBox({
  label,
  value,
  highlight = false,
}: {
  label: string
  value: string
  highlight?: boolean
}) {
  return (
    <div
      className={`rounded-xl p-4 border border-white/10 ${
        highlight ? "bg-gradient-to-r from-cyan-600/20 to-blue-600/20" : "bg-white/10"
      }`}
    >
      <div className="text-[11px] uppercase tracking-wide text-blue-200">{label}</div>
      <div className="text-white font-semibold">{value}</div>
    </div>
  )
}

function RupeeLabel({ children }: { children: any }) {
  return <span className="inline-flex items-center gap-1"><IndianRupee className="h-4 w-4 text-cyan-300" /> {children}</span>
}

function pct(n: number) {
  return `${n.toFixed(0)}%`
}

function fmt(n: number) {
  return `₹${Math.round(n).toLocaleString("en-IN")}`
}

/* ---------------- 2️⃣ SMART Goal Planner ---------------- */

function SmartGoalPlanner() {
  const [goalName, setGoalName] = useState("Child Education")
  const [todayCost, setTodayCost] = useState(1500000) // ₹
  const [years, setYears] = useState(12)
  const [infl, setInfl] = useState(7) // %
  const [expReturn, setExpReturn] = useState(11) // %
  const [freq, setFreq] = useState<"monthly" | "yearly">("monthly")

  const futureCost = useMemo(() => todayCost * Math.pow(1 + infl / 100, years), [todayCost, infl, years])

  // SIP required: FV = SIP * [((1+r)^n - 1)/r] * (1+r)  (end-of-period, comp monthly)
  const periods = useMemo(() => (freq === "monthly" ? years * 12 : years), [years, freq])
  const r = useMemo(() => (freq === "monthly" ? expReturn / 100 / 12 : expReturn / 100), [expReturn, freq])

  const annuityFactor = useMemo(() => (r === 0 ? periods : ((Math.pow(1 + r, periods) - 1) / r) * (1 + r)), [r, periods])
  const sipReq = useMemo(() => (annuityFactor > 0 ? futureCost / annuityFactor : 0), [futureCost, annuityFactor])

  // Lumpsum required today: PV = FV / (1+r)^n
  const lumpsumReq = useMemo(() => futureCost / Math.pow(1 + expReturn / 100, years), [futureCost, expReturn, years])

  return (
    <LessonCard
      icon={<Calculator className="h-5 w-5 text-emerald-300" />}
      title="2️⃣ SMART Goal Planner — Inflation, SIP & Lumpsum"
    >
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-white/10 rounded-xl p-4 border border-white/10">
          <label className="text-xs text-blue-200 mb-1 block">Goal Name</label>
          <input
            type="text"
            value={goalName}
            onChange={(e) => setGoalName(e.target.value)}
            className="w-full p-2 rounded-lg bg-white/20 border border-white/10 text-white outline-none"
          />
        </div>
        <NumberInput label="Today's Cost (₹)" value={todayCost} setValue={setTodayCost} />
        <NumberInput label="Years to Goal" value={years} setValue={setYears} />
        <NumberInput label="Expected Inflation (% p.a.)" value={infl} setValue={setInfl} />
        <NumberInput label="Expected Return (% p.a.)" value={expReturn} setValue={setExpReturn} />
        <div className="bg-white/10 rounded-xl p-4 border border-white/10">
          <label className="text-xs text-blue-200 mb-1 block">Contribution Frequency</label>
          <select
            value={freq}
            onChange={(e) => setFreq(e.target.value as any)}
            className="w-full p-2 rounded-lg bg-white/20 border border-white/10 text-white outline-none"
          >
            <option className="bg-slate-900" value="monthly">Monthly (SIP)</option>
            <option className="bg-slate-900" value="yearly">Yearly</option>
          </select>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-4 mt-4">
        <StatBox label="Inflation-Adjusted Goal (Future Cost)" value={fmt(futureCost)} highlight />
        <StatBox label={`Required ${freq === "monthly" ? "SIP" : "Contribution"}`} value={<RupeeLabel>{fmt(sipReq)}</RupeeLabel> as any} />
        <StatBox label="One-Time Lumpsum Today" value={fmt(lumpsumReq)} />
      </div>

      <p className="text-xs text-blue-300 mt-2">
        SIP formula assumes end-of-period contributions. For safety, add a small buffer (5–10%) and review annually.
      </p>
    </LessonCard>
  )
}

/* ---------------- 3️⃣ Risk Profile → Allocation ---------------- */

function RiskToAllocation() {
  const [age, setAge] = useState(30)
  const [tolerance, setTolerance] = useState(3) // 1–5
  const [criticalYears, setCriticalYears] = useState(7) // years to nearest major goal

  // Very simple heuristic allocator for demo (not advice)
  const baseEquity = Math.max(0, 110 - age) // classic rule of thumb
  const tolAdj = (tolerance - 3) * 6 // +/- 12% range
  const horizonAdj = criticalYears < 5 ? -10 : criticalYears > 10 ? +5 : 0
  let equity = Math.min(90, Math.max(10, baseEquity + tolAdj + horizonAdj))
  let gold = 10 // stabilizer
  let debt = 100 - equity - gold
  if (debt < 0) { debt = 0; equity = 90; gold = 10 }

  return (
    <LessonCard
      icon={<BarChart3 className="h-5 w-5 text-green-300" />}
      title="3️⃣ Risk Profile → Suggested Asset Allocation (Illustrative)"
    >
      <div className="grid md:grid-cols-3 gap-4">
        <NumberInput label="Age (years)" value={age} setValue={setAge} />
        <NumberInput label="Risk Tolerance (1-5)" value={tolerance} setValue={setTolerance} />
        <NumberInput label="Years to Critical Goal" value={criticalYears} setValue={setCriticalYears} />
      </div>
      <div className="grid sm:grid-cols-3 gap-4 mt-4">
        <StatBox label="Equity" value={pct(equity)} highlight />
        <StatBox label="Debt" value={pct(debt)} />
        <StatBox label="Gold/Alt" value={pct(gold)} />
      </div>
      <p className="text-xs text-blue-300 mt-2">
        Heuristic for education only. Real allocation should reflect goals, buffers, and cash-flow needs.
      </p>
    </LessonCard>
  )
}

/* ---------------- 4️⃣ Bucket Strategy ---------------- */

function BucketStrategy() {
  const buckets = [
    {
      name: "Safety (0–2 years)",
      items: ["Emergency fund 6–12 months", "Savings/FDs", "Liquid/Overnight Mutual Funds", "Short-duration debt"],
      note: "Capital preservation over returns.",
    },
    {
      name: "Stability (2–5 years)",
      items: ["Short/Medium-term debt funds", "Conservative hybrid", "Target Maturity", "SGBs (if horizon fits)"],
      note: "Low volatility, modest growth.",
    },
    {
      name: "Growth (5+ years)",
      items: ["Equity mutual funds", "Index funds/ETFs", "Aggressive hybrid", "REITs/INVITs (selectively)"],
      note: "Long-run compounding; expect drawdowns.",
    },
  ]
  return (
    <LessonCard
      icon={<ListChecks className="h-5 w-5 text-amber-300" />}
      title="4️⃣ Bucket Strategy — Map Goals to Liquidity Needs"
    >
      <div className="grid md:grid-cols-3 gap-4">
        {buckets.map((b, i) => (
          <div key={i} className="rounded-xl p-4 border border-white/10 bg-white/10">
            <div className="text-white font-semibold mb-1">{b.name}</div>
            <ul className="list-disc list-inside text-blue-100 text-sm space-y-1">
              {b.items.map((it, j) => <li key={j}>{it}</li>)}
            </ul>
            <p className="text-xs text-blue-300 mt-2">{b.note}</p>
          </div>
        ))}
      </div>
    </LessonCard>
  )
}

/* ---------------- 5️⃣ Glidepath Tool ---------------- */

function GlidepathTool() {
  const [years, setYears] = useState(15)
  // Simple linear glide: Equity% = min(80, max(30, 30 + years*3)) at start; approach 20–30% near goal
  const startEquity = Math.min(80, Math.max(40, 30 + years * 2.5))
  const nearGoalEquity = 25
  const debtStart = 100 - startEquity - 10
  const debtEnd = 100 - nearGoalEquity - 10

  return (
    <LessonCard
      icon={<AlarmClockCheck className="h-5 w-5 text-pink-300" />}
      title="5️⃣ Glidepath — Reduce Risk as Goal Nears"
    >
      <div className="grid md:grid-cols-2 gap-4">
        <NumberInput label="Years to Goal" value={years} setValue={setYears} />
        <div className="rounded-xl p-4 border border-white/10 bg-white/10">
          <div className="text-[11px] uppercase tracking-wide text-blue-200 mb-1">Illustrative Glide</div>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span>Start (Years: {years})</span>
              <span>Equity {pct(startEquity)} • Debt {pct(debtStart)} • Gold 10%</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span>Near Goal</span>
              <span>Equity {pct(nearGoalEquity)} • Debt {pct(debtEnd)} • Gold 10%</span>
            </div>
          </div>
        </div>
      </div>
      <p className="text-xs text-blue-300 mt-2">
        Move gains from equity to debt as the goal approaches to protect the funded amount.
      </p>
    </LessonCard>
  )
}

/* ---------------- 6️⃣ Rebalancing Helper ---------------- */

function RebalanceHelper() {
  const [portfolio, setPortfolio] = useState(1200000)
  const [targetEquity, setTargetEquity] = useState(60)
  const [currentEquity, setCurrentEquity] = useState(68)
  const threshold = 5 // % band

  const targetEqAmt = (targetEquity / 100) * portfolio
  const currentEqAmt = (currentEquity / 100) * portfolio
  const delta = currentEqAmt - targetEqAmt
  const action = Math.abs(currentEquity - targetEquity) >= threshold
    ? (delta > 0 ? "Sell Equity / Buy Debt" : "Buy Equity / Sell Debt")
    : "Within band — no action"

  return (
    <LessonCard
      icon={<RefreshCw className="h-5 w-5 text-emerald-300" />}
      title="6️⃣ Rebalancing Helper — Threshold/Calendar Method"
    >
      <div className="grid md:grid-cols-3 gap-4">
        <NumberInput label="Total Portfolio (₹)" value={portfolio} setValue={setPortfolio} />
        <NumberInput label="Target Equity (%)" value={targetEquity} setValue={setTargetEquity} />
        <NumberInput label="Current Equity (%)" value={currentEquity} setValue={setCurrentEquity} />
      </div>
      <div className="grid sm:grid-cols-3 gap-4 mt-4">
        <StatBox label="Target Equity Amount" value={fmt(targetEqAmt)} />
        <StatBox label="Current Equity Amount" value={fmt(currentEqAmt)} />
        <StatBox label="Action" value={action} highlight />
      </div>
      <p className="text-xs text-blue-300 mt-2">
        Use a ±{threshold}% band or quarterly schedule. Consider taxes/exit loads before rebalancing.
      </p>
    </LessonCard>
  )
}

/* ---------------- 7️⃣ IPS Builder ---------------- */

function IPSBuilder() {
  const [name, setName] = useState("K Rakesh")
  const [primaryGoal, setPrimaryGoal] = useState("Retirement")
  const [horizon, setHorizon] = useState(25)
  const [allocation, setAllocation] = useState("60% Equity / 30% Debt / 10% Gold")
  const [rebalance, setRebalance] = useState("Quarterly or ±5% drift")
  const [maxDrawdown, setMaxDrawdown] = useState("-20% portfolio drawdown")
  const [minLiquidity, setMinLiquidity] = useState("12 months expenses in Safety bucket")

  const ips = `
Investment Policy Statement (IPS) — ${name}

1) Objective & Goals
   • Primary Goal: ${primaryGoal}
   • Horizon: ${horizon} years
   • Success Metric: Fund goal with inflation-adjusted corpus via disciplined contributions

2) Asset Allocation
   • Strategic Mix: ${allocation}
   • Glidepath: Reduce equity near goal; move gains to debt

3) Contributions & Cash Flows
   • SIP/Lumpsum as per goal planner; increase with income growth

4) Rebalancing
   • Method: ${rebalance}
   • Tax/Costs: Minimize impact; prefer new flows to correct drift

5) Risk & Liquidity Controls
   • Max Tolerable Drawdown: ${maxDrawdown}
   • Minimum Liquidity: ${minLiquidity}

6) Governance
   • Review: Annual, or life-event triggered
   • Prohibited actions: Market timing; impulsive changes outside IPS
`.trim()

  return (
    <LessonCard
      icon={<ClipboardList className="h-5 w-5 text-cyan-300" />}
      title="7️⃣ IPS Builder — Write Your Rules Before Markets Test You"
    >
      <div className="grid md:grid-cols-2 gap-4">
        <TextInput label="Investor Name" value={name} setValue={setName} />
        <TextInput label="Primary Goal" value={primaryGoal} setValue={setPrimaryGoal} />
        <NumberInput label="Horizon (years)" value={horizon} setValue={setHorizon} />
        <TextInput label="Strategic Allocation" value={allocation} setValue={setAllocation} />
        <TextInput label="Rebalancing Rule" value={rebalance} setValue={setRebalance} />
        <TextInput label="Max Drawdown Rule" value={maxDrawdown} setValue={setMaxDrawdown} />
        <TextInput label="Minimum Liquidity Rule" value={minLiquidity} setValue={setMinLiquidity} />
      </div>
      <div className="mt-4 bg-white/10 rounded-xl p-4 border border-white/10">
        <div className="text-[11px] uppercase tracking-wide text-blue-200 mb-2">Preview</div>
        <pre className="whitespace-pre-wrap text-sm text-blue-100">{ips}</pre>
      </div>
      <p className="text-xs text-blue-300 mt-2">
        Print and sign your IPS. When markets are volatile, follow the IPS instead of emotions.
      </p>
    </LessonCard>
  )
}

function TextInput({ label, value, setValue }: any) {
  return (
    <div className="bg-white/10 rounded-xl p-4 border border-white/10">
      <label className="text-xs text-blue-200 mb-1 block">{label}</label>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full p-2 rounded-lg bg-white/20 border border-white/10 text-white outline-none"
      />
    </div>
  )
}

/* ---------------- 8️⃣ 💬 Quick Quiz ---------------- */

function QuizComponent() {
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [score, setScore] = useState(0)

  const quiz = [
    {
      question: "Which bucket is best for a goal due in 18 months?",
      options: ["Growth", "Stability", "Safety"],
      correct: "Safety",
    },
    {
      question: "A glidepath mainly aims to:",
      options: ["Increase returns near goal", "Reduce risk near goal", "Eliminate taxes"],
      correct: "Reduce risk near goal",
    },
    {
      question: "Threshold rebalancing triggers when drift exceeds:",
      options: ["Setup band (e.g., ±5%)", "Daily price moves", "Broker recommendation"],
      correct: "Setup band (e.g., ±5%)",
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
    <LessonCard title="💬 Quick Quiz">
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
                  whileHover={!submitted ? { scale: 1.03 } : {}}
                  className={`w-full text-left px-4 py-2 rounded-lg border mb-2 transition-all ${
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
            <button
              onClick={reset}
              className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm flex items-center mx-auto"
            >
              <RotateCcw className="h-4 w-4 mr-2" /> Try Again
            </button>
          </motion.div>
        )}
      </div>
    </LessonCard>
  )
}
