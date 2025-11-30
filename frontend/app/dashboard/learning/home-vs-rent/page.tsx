"use client"

import { useMemo, useState } from "react"
import { motion } from "framer-motion"
import {
  Home,
  Landmark,
  Calculator,
  Percent,
  IndianRupee,
  TrendingUp,
  ShieldCheck,
  Building2,
  KeyRound,
  CheckCircle,
  XCircle,
  RotateCcw,
  Info,
  BarChart3,
  Target,
  Lightbulb,
  Sparkles,
  SparklesIcon,
} from "lucide-react"

/**
 * Lesson: Home Loan vs Rent Decision — The Indian Dilemma
 * Level: Intermediate (Educational Only, SEBI-compliant; no recommendations)
 */

export default function Lesson_HomeVsRent() {
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
          <Home className="h-8 w-8 text-cyan-400" />
          Home Loan vs Rent — The Indian Dilemma
        </h1>
        <p className="text-blue-200 text-lg">
          Understand the trade-offs between buying and renting using numbers, not noise. 🧮
        </p>
        <Disclaimer />
      </header>

      {/* 1️⃣ Concept */}
      <LessonCard title={<div className="flex items-center gap-2"><Info className="h-5 w-5 text-cyan-400" />1️⃣ Buy vs Rent — What Are You Really Comparing?</div>}>
        <ul className="list-disc list-inside text-sm space-y-2">
          <li><strong>Buy:</strong> EMI, down payment, stamp duty/registration, maintenance, property tax, opportunity cost, expected appreciation, liquidity & flexibility.</li>
          <li><strong>Rent:</strong> Monthly rent + annual escalation, deposit, flexibility, no maintenance capex, opportunity to invest surplus.</li>
          <li>Good decisions compare <em>total cost of ownership</em> vs <em>total cost of renting</em> over a horizon, adjusted for realistic assumptions.</li>
        </ul>
      </LessonCard>

      {/* 2️⃣ Quick EMI & Affordability */}
      <QuickEMICalc />

      {/* 3️⃣ Rent vs Buy — Total Cost (with opportunity cost & appreciation) */}
      <RentVsBuyCalc />

      {/* 4️⃣ Sensitivity: What moves the needle? */}
      <SensitivityMini />

      {/* 5️⃣ India-specific Costs Checklist */}
      <LessonCard title={<div className="flex items-center gap-2"><Landmark className="h-5 w-5 text-cyan-400" />5️⃣ India-specific Costs & Considerations</div>}>
        <div className="grid md:grid-cols-2 gap-5">
          <BulletCard
            icon={<Landmark className="h-5 w-5 text-cyan-400" />}
            title="Buying — costs to include"
            items={[
              "Down payment (typically 20%)",
              "Stamp duty & registration (≈5–8% state-dependent)",
              "EMI (principal + interest)",
              "Property tax, society maintenance, sinking fund",
              "Home insurance, interiors/fit-out (initial capex)",
            ]}
          />
          <BulletCard
            icon={<Building2 className="h-5 w-5 text-green-400" />}
            title="Renting — costs & benefits"
            items={[
              "Monthly rent + yearly escalation (5–10% typical)",
              "Security deposit (refundable)",
              "Flexibility to move, no large capex",
              "Ability to invest the down payment & any EMI-rent surplus",
            ]}
          />
        </div>
      </LessonCard>

      {/* 6️⃣ Practical Rules of Thumb */}
      <LessonCard title={<div className="flex items-center gap-2"><Target className="h-5 w-5 text-cyan-400" />6️⃣ Practical Heuristics (Not Advice)</div>}>
        <ul className="list-disc list-inside text-sm space-y-2">
          <li><strong>EMI ≤ 30–40% of take-home pay</strong> for healthier cashflows.</li>
          <li>Prefer buying when you have <strong>job/location stability (7–10 yrs)</strong> and sufficient emergency fund.</li>
          <li>If expected <strong>home appreciation &gt; long-term investment return</strong> (after costs), buying becomes more attractive (and vice-versa).</li>
          <li>Consider <strong>quality of life</strong> (commute, schools, neighborhood) — not everything is a spreadsheet cell.</li>
        </ul>
      </LessonCard>

      {/* 7️⃣ Key Takeaways */}
      <LessonCard title={<div className="flex items-center gap-2"><SparklesIcon className="h-5 w-5 text-yellow-400" />📘 Key Takeaways</div>}>
        <ul className="list-disc list-inside text-sm space-y-2">
          <li>Do a <strong>horizon-based</strong> comparison (e.g., 10 years), not month-to-month.</li>
          <li>Include <strong>all costs</strong> (duty, maintenance, tax, opportunity cost) and <strong>assumptions</strong> (rent escalation, returns, appreciation).</li>
          <li>Liquidity & flexibility have value — renting isn’t “wasted money” if it buys mobility and higher savings/investments.</li>
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
      Educational only — NeoCred is not a SEBI-registered advisor. Assumptions are simplified for learning.
    </p>
  )
}

function InputBox({
  label,
  value,
  onChange,
  step = "any",
}: {
  label: string
  value: number
  onChange: (n: number) => void
  step?: string
}) {
  return (
    <div className="bg-white/10 rounded-xl p-4 border border-white/10">
      <label className="text-xs text-blue-200 mb-1 block">{label}</label>
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

function StatBox({ label, value, highlight = false }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className={`rounded-xl p-4 border border-white/10 ${highlight ? "bg-gradient-to-r from-cyan-600/20 to-blue-600/20" : "bg-white/10"}`}>
      <div className="text-[11px] uppercase tracking-wide text-blue-200">{label}</div>
      <div className={`text-white font-semibold ${highlight ? "text-lg" : ""}`}>{value}</div>
    </div>
  )
}

function BulletCard({ icon, title, items }: { icon: any; title: string; items: string[] }) {
  return (
    <div className="bg-white/5 p-4 rounded-xl border border-white/10">
      <div className="flex items-center gap-2 mb-2">
        {icon} <h3 className="text-white font-semibold">{title}</h3>
      </div>
      <ul className="list-disc list-inside text-sm text-blue-100 space-y-1">
        {items.map((it, i) => <li key={i}>{it}</li>)}
      </ul>
    </div>
  )
}

/* ======================= 2️⃣ Quick EMI & Affordability ======================= */
function QuickEMICalc() {
  const [price, setPrice] = useState(8000000) // ₹80L
  const [downPct, setDownPct] = useState(20)
  const [rate, setRate] = useState(8.5) // p.a.
  const [tenureY, setTenureY] = useState(20)
  const [netMonthly, setNetMonthly] = useState(150000) // take-home

  const down = (price * downPct) / 100
  const principal = Math.max(0, price - down)
  const n = tenureY * 12
  const r = rate / 12 / 100
  const emi = r > 0 ? (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1) : principal / n
  const emiPctIncome = netMonthly > 0 ? (emi / netMonthly) * 100 : 0

  return (
    <LessonCard title={<div className="flex items-center gap-2"><Calculator className="h-5 w-5 text-cyan-400" />2️⃣ Quick EMI & Affordability</div>}>
      <div className="grid md:grid-cols-5 gap-4">
        <InputBox label="Property Price (₹)" value={price} onChange={setPrice} />
        <InputBox label="Down Payment (%)" value={downPct} onChange={setDownPct} />
        <InputBox label="Loan Rate (p.a. %)" value={rate} onChange={setRate} />
        <InputBox label="Tenure (years)" value={tenureY} onChange={setTenureY} />
        <InputBox label="Net Monthly Income (₹)" value={netMonthly} onChange={setNetMonthly} />
      </div>

      <div className="grid md:grid-cols-4 gap-4 mt-4">
        <StatBox label="Down Payment" value={`₹${fmt(Math.round(down))}`} />
        <StatBox label="Loan Amount" value={`₹${fmt(Math.round(principal))}`} />
        <StatBox label="Estimated EMI" value={`₹${fmt(Math.round(emi))}`} highlight />
        <StatBox label="EMI as % of Income" value={`${emiPctIncome.toFixed(1)}%`} />
      </div>
      <p className="text-xs text-blue-300 mt-2">
        Heuristic: Keep EMI within <strong>30–40% of take-home</strong> for resilience.
      </p>
    </LessonCard>
  )
}

/* ======================= 3️⃣ Rent vs Buy Calculator ======================= */

function RentVsBuyCalc() {
  // Buy inputs
  const [price, setPrice] = useState(9000000)
  const [downPct, setDownPct] = useState(20)
  const [rate, setRate] = useState(8.25)
  const [tenureY, setTenureY] = useState(25)
  const [horizonY, setHorizonY] = useState(10)
  const [maintPct, setMaintPct] = useState(1.2) // of property value per year
  const [taxPct, setTaxPct] = useState(0.2) // property tax % of value per year
  const [appreciation, setAppreciation] = useState(5) // p.a. %
  const [sellCostPct, setSellCostPct] = useState(2) // brokerage + fees

  // Rent inputs
  const [rent, setRent] = useState(30000)
  const [rentEsc, setRentEsc] = useState(7) // p.a. %

  // Investment assumptions (opportunity cost)
  const [invReturn, setInvReturn] = useState(10) // invest down payment / surplus
  const [investSurplus, setInvestSurplus] = useState(true)

  // Derived values
  const down = (price * downPct) / 100
  const loan = Math.max(0, price - down)
  const r = rate / 12 / 100
  const n = tenureY * 12
  const emi = r > 0 ? (loan * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1) : loan / n

  // Amortization over horizon
  const { principalPaidTillHorizon, interestPaidTillHorizon, loanBalanceEnd } = useMemo(
    () => amortize(loan, r, n, horizonY * 12),
    [loan, r, n, horizonY]
  )

  // Ownership costs over horizon
  const maintTotal = sumGrowingAnnual(price * (maintPct / 100), appreciation / 100, horizonY)
  const taxTotal = sumGrowingAnnual(price * (taxPct / 100), appreciation / 100, horizonY)
  const emiTotal = emi * 12 * horizonY
  const homeValueEnd = price * Math.pow(1 + appreciation / 100, horizonY)
  const sellCost = (sellCostPct / 100) * homeValueEnd

  // Buy net cash outflow ≈ cash paid minus equity realized at exit
  const buyOutflow =
    down + // initial
    emiTotal + // cash EMI outgo
    maintTotal +
    taxTotal + // running
    sellCost - // exit cost
    (homeValueEnd - loanBalanceEnd) // equity realized on sale

  // Rent total payments with escalation
  const rentTotal = sumGrowingMonthly(rent, rentEsc / 100 / 12, horizonY * 12)

  // Opportunity cost / investing
  const invR = invReturn / 100
  const fvDownIfInvested = futureValueMonthly(0, invR / 12, horizonY * 12, down) // lump sum invest down payment
  let fvSurplus = 0
  if (investSurplus) {
    // Surplus = max(EMI - rent_t), if positive invest monthly
    fvSurplus = futureValueSurplus(emi, rent, rentEsc / 100 / 12, invR / 12, horizonY * 12)
  }

  const rentOutflowNet = Math.max(0, rentTotal - fvDownIfInvested - fvSurplus)

  const better = buyOutflow < rentOutflowNet ? "Buy" : "Rent"

  return (
    <LessonCard title={<div className="flex items-center gap-2"><BarChart3 className="h-5 w-5 text-cyan-400" />3️⃣ Rent vs Buy — Total Cost with Opportunity Cost (Horizon-based)</div>}>
      <div className="grid md:grid-cols-3 gap-4">
        <InputBox label="Home Price (₹)" value={price} onChange={setPrice} />
        <InputBox label="Down Payment (%)" value={downPct} onChange={setDownPct} />
        <InputBox label="Loan Rate (p.a. %)" value={rate} onChange={setRate} />
        <InputBox label="Tenure (years)" value={tenureY} onChange={setTenureY} />
        <InputBox label="Horizon (years)" value={horizonY} onChange={setHorizonY} />
        <InputBox label="Maintenance (% of value / yr)" value={maintPct} onChange={setMaintPct} />
        <InputBox label="Property Tax (% / yr)" value={taxPct} onChange={setTaxPct} />
        <InputBox label="Appreciation (p.a. %)" value={appreciation} onChange={setAppreciation} />
        <InputBox label="Sell Cost (% of value)" value={sellCostPct} onChange={setSellCostPct} />
      </div>

      <div className="grid md:grid-cols-3 gap-4 mt-4">
        <InputBox label="Initial Rent (₹/mo)" value={rent} onChange={setRent} />
        <InputBox label="Rent Escalation (p.a. %)" value={rentEsc} onChange={setRentEsc} />
        <InputBox label="Investment Return (p.a. %)" value={invReturn} onChange={setInvReturn} />
      </div>

      <div className="mt-3 flex items-center gap-3">
        <label className="text-sm text-blue-100 flex items-center gap-2">
          <KeyRound className="h-4 w-4 text-cyan-300" />
          Invest EMI-Rent Surplus monthly
        </label>
        <button
          onClick={() => setInvestSurplus((v) => !v)}
          className={`px-3 py-1 rounded-lg text-sm border ${investSurplus ? "bg-cyan-600/30 border-cyan-400 text-white" : "bg-white/10 border-white/10 text-blue-100"}`}
        >
          {investSurplus ? "Enabled" : "Disabled"}
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-4 mt-5">
        <StatBox label="Buy: Total Outflow (horizon)" value={`₹${fmt(Math.round(buyOutflow))}`} highlight />
        <StatBox label="Rent: Outflow minus FV Investments" value={`₹${fmt(Math.round(rentOutflowNet))}`} highlight />
        <StatBox label="Indicative Tilt" value={better === "Buy" ? "Buy looks cheaper" : "Rent looks cheaper"} />
      </div>

      <p className="text-xs text-blue-300 mt-2">
        Simplified model: ignores taxes, HRA benefits, transaction frictions beyond sell cost, and timing nuances. Use for learning only.
      </p>
    </LessonCard>
  )
}

/* ======================= 4️⃣ Sensitivity Mini ======================= */
function SensitivityMini() {
  const [rentEsc, setRentEsc] = useState(7)
  const [app, setApp] = useState(5)
  const [inv, setInv] = useState(10)

  return (
    <LessonCard title={<div className="flex items-center gap-2"><TrendingUp className="h-5 w-5 text-cyan-400" />4️⃣ What Changes the Answer Most? (Sensitivity)</div>}>
      <div className="grid md:grid-cols-3 gap-4">
        <InputBox label="Rent Escalation (p.a. %)" value={rentEsc} onChange={setRentEsc} />
        <InputBox label="Home Appreciation (p.a. %)" value={app} onChange={setApp} />
        <InputBox label="Investment Return (p.a. %)" value={inv} onChange={setInv} />
      </div>
      <div className="mt-3 text-sm text-blue-100 space-y-1">
        <p>• Higher <strong>rent escalation</strong> → buying becomes relatively better, all else equal.</p>
        <p>• Higher <strong>home appreciation</strong> → buying gains (equity at exit rises).</p>
        <p>• Higher <strong>investment returns</strong> → renting gains (down payment + surplus grow faster).</p>
      </div>
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
      question: "Which cost must be included in total cost of home ownership?",
      options: ["Only EMI", "EMI + maintenance + taxes + opportunity cost", "Only stamp duty", "Only rent"],
      correct: "EMI + maintenance + taxes + opportunity cost",
    },
    {
      question: "Renting can be financially smart when:",
      options: [
        "Investment returns on savings are strong",
        "Rent escalation is very high",
        "Property appreciation is extremely high",
        "You don’t have an emergency fund",
      ],
      correct: "Investment returns on savings are strong",
    },
    {
      question: "A good affordability heuristic is:",
      options: ["EMI ≤ 30–40% of take-home pay", "EMI ≥ 70% of income", "EMI equals rent always", "Ignore EMI to income ratio"],
      correct: "EMI ≤ 30–40% of take-home pay",
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

function fmt(n: number) {
  return n.toLocaleString("en-IN")
}

/** Amortize for m months; returns principal paid, interest paid, and remaining balance after m months */
function amortize(loan: number, rMonthly: number, nMonths: number, horizonMonths: number) {
  const m = Math.min(horizonMonths, nMonths)
  const emi = rMonthly > 0 ? (loan * rMonthly * Math.pow(1 + rMonthly, nMonths)) / (Math.pow(1 + rMonthly, nMonths) - 1) : loan / nMonths
  let balance = loan
  let principalPaid = 0
  let interestPaid = 0
  for (let i = 0; i < m; i++) {
    const interest = balance * rMonthly
    const principal = emi - interest
    principalPaid += principal
    interestPaid += interest
    balance -= principal
  }
  return {
    principalPaidTillHorizon: Math.max(0, principalPaid),
    interestPaidTillHorizon: Math.max(0, interestPaid),
    loanBalanceEnd: Math.max(0, balance),
  }
}

/** Sum of an annual payment that grows with g each year for Y years */
function sumGrowingAnnual(start: number, g: number, years: number) {
  // start for year 1, then grows by (1+g) each year
  let sum = 0
  for (let y = 0; y < years; y++) {
    sum += start * Math.pow(1 + g, y)
  }
  return sum
}

/** Sum of monthly rent with monthly escalation g over m months */
function sumGrowingMonthly(start: number, gMonthly: number, months: number) {
  let sum = 0
  let r = start
  for (let i = 0; i < months; i++) {
    sum += r
    r *= 1 + gMonthly
  }
  return sum
}

/** Future value of a lump sum after m months at monthly rate i */
function futureValueMonthly(pmt: number, i: number, m: number, lump: number = 0) {
  // FV of lump
  const fvLump = lump * Math.pow(1 + i, m)
  // FV of level payment pmt at end of each month
  const fvPmt = i === 0 ? pmt * m : pmt * ((Math.pow(1 + i, m) - 1) / i)
  return fvLump + fvPmt
}

/** FV of monthly surplus = max(EMI - rent_t, 0) invested each month at rate i */
function futureValueSurplus(emi: number, rent0: number, gMonthly: number, i: number, months: number) {
  let rent = rent0
  let fv = 0
  for (let t = 0; t < months; t++) {
    const surplus = Math.max(emi - rent, 0)
    // invest surplus at end of month t → grows for (months - t) periods
    fv += surplus * Math.pow(1 + i, months - t)
    rent *= 1 + gMonthly
  }
  return fv
}
