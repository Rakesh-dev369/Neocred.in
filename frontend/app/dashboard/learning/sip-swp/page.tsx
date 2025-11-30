"use client"

import { useMemo, useState } from "react"
import { motion } from "framer-motion"
import {
  Calendar,
  Coins,
  TrendingUp,
  Wallet,
  ArrowUpRight,
  ArrowDownRight,
  RefreshCcw,
  Landmark,
  ShieldCheck,
  CheckCircle,
  XCircle,
  RotateCcw,
  Info,
  BookOpen,
  Calculator,
  Target,
  AlertTriangle,
  MessageCircle,
  ArrowLeft,
} from "lucide-react"

/**
 * Lesson: How to Start a SIP, Step-up SIP, SWP (and STP basics)
 * Level: Intermediate (SEBI-compliant, educational only)
 */

export default function Lesson_SIP_SWP() {
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
          SIP • Step-up SIP • SWP (India)
        </h1>
        <p className="text-blue-200 text-lg">
          Build wealth with discipline 📈 and draw income smartly 📥 — the MF way.
        </p>
        <Disclaimer />
      </header>

      {/* 1️⃣ Concepts */}
      <LessonCard title="1️⃣ Concepts at a Glance" icon={<BookOpen className="h-5 w-5 text-cyan-400" />}>
        <div className="grid md:grid-cols-3 gap-4">
          <Concept
            icon={<Coins className="h-5 w-5 text-cyan-300" />}
            title="SIP"
            desc="Invest a fixed amount monthly into a mutual fund — rupee-cost averaging + compounding over time."
          />
          <Concept
            icon={<ArrowUpRight className="h-5 w-5 text-green-300" />}
            title="Step-up SIP"
            desc="Increase your monthly SIP every year (e.g., +10%) to match income growth and reach goals faster."
          />
          <Concept
            icon={<ArrowDownRight className="h-5 w-5 text-amber-300" />}
            title="SWP"
            desc="Withdraw a fixed amount periodically from an MF — for retirement cashflows or passive income."
          />
        </div>
        <p className="text-xs text-blue-300 mt-3">
          STP (Systematic Transfer Plan): move money periodically from one fund to another (e.g., Debt → Equity) to manage entry risk.
        </p>
      </LessonCard>

      {/* 2️⃣ How to Start a SIP (Checklist) */}
      <LessonCard title="2️⃣ How to Start a SIP — Practical Steps (India)" icon={<Target className="h-5 w-5 text-green-400" />}>
        <ol className="list-decimal list-inside space-y-2 text-sm">
          <li>Complete *KYC* (PAN, Aadhaar, IPV/e-KYC where applicable).</li>
          <li>Choose a *platform/AMC* (Do independent research; NeoCred does not endorse products).</li>
          <li>Set *bank mandate* (e-NACH) for auto-debit.</li>
          <li>Pick *fund category* per goal horizon & risk profile (Debt/Hybrid/Equity).</li>
          <li>Decide *SIP date, amount, and whether to enable **Step-up* yearly.</li>
          <li>Review *fact sheet*, expense ratio, track record, and disclosures.</li>
          <li>Start small, *stay consistent*, review annually.</li>
        </ol>
      </LessonCard>

      {/* 3️⃣ SIP Calculator */}
      <SIPCalculator />

      {/* 4️⃣ Step-up SIP Calculator */}
      <StepUpSIPCalculator />

      {/* 5️⃣ SWP Simulator */}
      <SWPSimulator />

      {/* 6️⃣ Risks & Notes */}
      <LessonCard title="6️⃣ Risks, Tax & Notes (Educational Only)" icon={<AlertTriangle className="h-5 w-5 text-red-400" />}>
        <ul className="list-disc list-inside text-sm space-y-2">
          <li>Equity MF returns are *market-linked*, not guaranteed; short-term volatility is normal.</li>
          <li>Debt funds carry *interest-rate/credit risk*; choose category wisely.</li>
          <li>Taxation depends on holding period & fund type (equity/debt). Consult official guidance or a licensed professional.</li>
          <li>SWP sustainability depends on returns vs withdrawal rate; *sequence of returns risk* matters.</li>
        </ul>
      </LessonCard>

      {/* 7️⃣ Key Takeaways */}
      <LessonCard title="📘 Key Takeaways" icon={<BookOpen className="h-5 w-5 text-cyan-400" />}>
        <ul className="list-disc list-inside text-sm space-y-2">
          <li>Use *SIP* for disciplined investing; consider *Step-up* annually with income growth.</li>
          <li>Match *goal horizon → fund category*; don’t use equity for short-term goals.</li>
          <li>Use *SWP* thoughtfully for retirement income; monitor corpus and market cycles.</li>
        </ul>
      </LessonCard>

      {/* 8️⃣ Quiz */}
      <LessonCard title="💬 Quick Quiz">
        <QuizComponent />
      </LessonCard>
    </motion.section>
  )
}

/* ======================= Calculators & Simulators ======================= */

/** 3️⃣ SIP Calculator (Future Value) */
function SIPCalculator() {
  const [monthly, setMonthly] = useState(5000)
  const [years, setYears] = useState(10)
  const [annualRate, setAnnualRate] = useState(12) // %
  const months = years * 12
  const r = annualRate / 100 / 12

  // FV = SIP * [((1+r)^N - 1)/r] * (1+r)
  const factor = r > 0 ? (Math.pow(1 + r, months) - 1) / r : months
  const futureValue = monthly * factor * (1 + r)

  return (
    <LessonCard title="3️⃣ SIP Calculator — Future Value" icon={<Calculator className="h-5 w-5 text-blue-400" />}>
      <div className="grid md:grid-cols-3 gap-4">
        <Input
          label="Monthly SIP (₹)"
          value={monthly}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMonthly(n(e.target.value))}
          icon={<Coins className="h-4 w-4 text-cyan-300" />}
        />
        <Input
          label="Tenure (years)"
          value={years}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setYears(n(e.target.value))}
          icon={<Calendar className="h-4 w-4 text-cyan-300" />}
        />
        <Input
          label="Expected Return (p.a. %)"
          value={annualRate}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAnnualRate(n(e.target.value))}
          icon={<TrendingUp className="h-4 w-4 text-cyan-300" />}
        />
      </div>

      <ResultBox
        label="Estimated Future Value"
        value={futureValue}
        sub="(Projections for education only; actual returns vary)"
      />
    </LessonCard>
  )
}

/** 4️⃣ Step-up SIP Calculator
 * Assumes annual increment k% in SIP amount, compounded yearly.
 * Year j (0-index): SIP_j = SIP0 * (1 + k)^j
 * FV = Σ_j [ SIP_j * ((1+r)^(N - 12j) - 1)/r * (1+r) ]
 */
function StepUpSIPCalculator() {
  const [monthly0, setMonthly0] = useState(5000)
  const [stepPercent, setStepPercent] = useState(10) // % increase per year
  const [years, setYears] = useState(10)
  const [annualRate, setAnnualRate] = useState(12)
  const r = annualRate / 100 / 12

  const fv = useMemo(() => {
    const Y = years
    let total = 0
    for (let j = 0; j < Y; j++) {
      const monthlyJ = monthly0 * Math.pow(1 + stepPercent / 100, j)
      const monthsForThisLayer = (Y - j) * 12
      const factor = r > 0 ? (Math.pow(1 + r, monthsForThisLayer) - 1) / r : monthsForThisLayer
      total += monthlyJ * factor * (1 + r)
    }
    return total
  }, [monthly0, stepPercent, years, annualRate, r])

  return (
    <LessonCard title="4️⃣ Step-up SIP Calculator — Annual Increase" icon={<ArrowUpRight className="h-5 w-5 text-green-400" />}>
      <div className="grid md:grid-cols-4 gap-4">
        <Input
          label="Starting SIP (₹)"
          value={monthly0}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMonthly0(n(e.target.value))}
          icon={<Wallet className="h-4 w-4 text-cyan-300" />}
        />
        <Input
          label="Step-up per Year (%)"
          value={stepPercent}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setStepPercent(n(e.target.value))}
          icon={<ArrowUpRight className="h-4 w-4 text-green-300" />}
        />
        <Input
          label="Tenure (years)"
          value={years}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setYears(n(e.target.value))}
          icon={<Calendar className="h-4 w-4 text-cyan-300" />}
        />
        <Input
          label="Expected Return (p.a. %)"
          value={annualRate}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAnnualRate(n(e.target.value))}
          icon={<TrendingUp className="h-4 w-4 text-cyan-300" />}
        />
      </div>

      <ResultBox
        label="Estimated Future Value (with Step-up)"
        value={fv}
        sub="Step-up can meaningfully boost corpus if income grows annually."
      />
    </LessonCard>
  )
}

/** 5️⃣ SWP Simulator
 * Given starting corpus, expected annual return R, monthly withdrawal W:
 * Simulate month-by-month: corpus = corpus*(1+r) - W until corpus <= 0
 */
function SWPSimulator() {
  const [corpus, setCorpus] = useState(2000000) // ₹20L
  const [withdraw, setWithdraw] = useState(15000) // per month
  const [annualRate, setAnnualRate] = useState(8) // debt/hybrid style
  const r = annualRate / 100 / 12

  const { monthsLasted, exhausted } = useMemo(() => {
    let c = corpus
    let m = 0
    // Safety cap to avoid infinite loops
    for (; m < 1200 && c > 0; m++) {
      c = c * (1 + r) - withdraw
      if (c <= 0) break
    }
    return { monthsLasted: m, exhausted: c <= 0 }
  }, [corpus, withdraw, r])

  const years = Math.floor(monthsLasted / 12)
  const remMonths = monthsLasted % 12

  return (
    <LessonCard title="5️⃣ SWP Simulator — Will Your Corpus Last?" icon={<ArrowDownRight className="h-5 w-5 text-amber-400" />}>
      <div className="grid md:grid-cols-4 gap-4">
        <Input
          label="Starting Corpus (₹)"
          value={corpus}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCorpus(n(e.target.value))}
          icon={<Landmark className="h-4 w-4 text-cyan-300" />}
        />
        <Input
          label="Monthly Withdrawal (₹)"
          value={withdraw}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setWithdraw(n(e.target.value))}
          icon={<Wallet className="h-4 w-4 text-amber-300" />}
        />
        <Input
          label="Expected Return (p.a. %)"
          value={annualRate}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAnnualRate(n(e.target.value))}
          icon={<TrendingUp className="h-4 w-4 text-cyan-300" />}
        />
        <InfoBox />
      </div>

      <div className={`mt-4 rounded-xl p-5 border border-white/10 ${exhausted ? "bg-red-600/20" : "bg-green-600/20"}`}>
        <div className="text-blue-200 text-sm">Estimated Duration</div>
        <div className="text-white font-semibold text-2xl mt-1">
          {years} years {remMonths} months
        </div>
        <p className="text-xs text-blue-300 mt-1">
          {exhausted
            ? "At this withdrawal rate, corpus may be exhausted by the above time."
            : "At this rate/return, corpus may sustain beyond the simulated horizon."}
        </p>
      </div>
    </LessonCard>
  )
}

/* ======================= UI Components ======================= */

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

function Concept({ icon, title, desc }: any) {
  return (
    <div className="rounded-xl p-5 bg-white/10 border border-white/10">
      <div className="flex items-center gap-2 text-white font-semibold mb-1">
        {icon} {title}
      </div>
      <p className="text-sm text-blue-100">{desc}</p>
    </div>
  )
}

function Input({ label, value, onChange, icon }: { label: string; value: number; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; icon: React.ReactNode }) {
  return (
    <div className="bg-white/10 rounded-xl p-4 border border-white/10">
      <label className="text-xs text-blue-200 flex items-center gap-2 mb-1">{icon} {label}</label>
      <input
        type="number"
        value={value}
        onChange={onChange}
        className="w-full p-2 rounded-lg bg-white/20 border border-white/10 text-white outline-none"
      />
    </div>
  )
}

function ResultBox({ label, value, sub }: { label: string; value: number; sub?: string }) {
  return (
    <div className="mt-4 rounded-xl p-5 bg-gradient-to-r from-green-700/30 to-teal-600/30 border border-white/10">
      <div className="text-blue-200 text-sm">{label}</div>
      <div className="text-white font-semibold text-2xl mt-1">
        ₹{Math.round(value).toLocaleString("en-IN")}
      </div>
      {sub && <p className="text-xs text-blue-300 mt-1">{sub}</p>}
    </div>
  )
}

function InfoBox() {
  return (
    <div className="bg-white/10 rounded-xl p-4 border border-white/10">
      <div className="text-xs text-blue-200 flex items-center gap-2 mb-1">
        <Info className="h-4 w-4 text-blue-300" /> Tip
      </div>
      <p className="text-xs text-blue-100">
        Lower withdrawal % or higher returns → longer sustainability. Review annually.
      </p>
    </div>
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

/* ======================= Quiz ======================= */

function QuizComponent() {
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [score, setScore] = useState(0)

  const quiz = [
    {
      question: "Main benefit of a Step-up SIP:",
      options: ["Reduce risk to zero", "Match rising income & grow faster", "Guarantee returns", "Avoid taxes"],
      correct: "Match rising income & grow faster",
    },
    {
      question: "SWP is primarily used to:",
      options: ["Start investing", "Transfer between funds", "Create periodic income from corpus", "Time the market"],
      correct: "Create periodic income from corpus",
    },
    {
      question: "For short-term goals (≤2 yrs), equity SIP is generally:",
      options: ["Suitable", "Not ideal due to volatility", "Guaranteed safe", "Tax-free always"],
      correct: "Not ideal due to volatility",
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
        <div key={qi} className="bg-white/5 p-4 rounded-xl border border-white/10">
          <p className="text-blue-100 text-sm mb-3">
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
        </div>
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