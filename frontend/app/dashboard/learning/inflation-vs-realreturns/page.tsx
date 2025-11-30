"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  TrendingUp,
  Info,
  ShieldCheck,
  Calculator,
  IndianRupee,
  AlarmClockCheck,
  Gauge,
  CheckCircle,
  XCircle,
  RotateCcw,
  BookOpen,
  BarChart3,
  Target,
  Activity,
  Zap,
} from "lucide-react"

/**
 * Lesson: Understanding Inflation vs Real Returns — Adjusting investment growth for inflation
 * Level: Intermediate (SEBI-compliant, educational only)
 */

export default function Lesson_InflationVsRealReturns() {
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
          <Gauge className="h-8 w-8 text-cyan-400" />
          Inflation vs Real Returns
        </h1>
        <p className="text-blue-200 text-lg">
          Don’t just grow money — grow its <strong>purchasing power</strong> 🛒
        </p>
        <Disclaimer />
      </header>

      {/* 1️⃣ Concept */}
      <LessonCard title="1️⃣ Nominal vs Real Return — Simple Idea" icon={<BookOpen className="h-5 w-5 text-cyan-400" />}>
        <p>
          <strong>Nominal return</strong> is the headline % return an investment earns.
          <strong>Real return</strong> is what remains after inflation.
        </p>
        <div className="mt-3 grid md:grid-cols-2 gap-4">
          <FormulaBox title="Approx. Real Return" lines={["Real ≈ Nominal − Inflation"]} />
          <FormulaBox title="Exact Real Return" lines={["Real = ((1 + Nominal) / (1 + Inflation)) − 1"]} />
        </div>
        <p className="text-xs text-blue-300 mt-3">
          Example: Nominal 10%, Inflation 6% → Real ≈ 4% (buying power improvement)
        </p>
      </LessonCard>

      {/* 2️⃣ India Context */}
      <LessonCard title="2️⃣ India Context — Real Wealth vs Nominal Wealth" icon={<Info className="h-5 w-5 text-blue-400" />}>
        <ul className="list-disc list-inside text-sm space-y-2">
          <li>Inflation in India commonly ranges **4–7%** per year.</li>
          <li>Bank FDs sometimes give returns **close to inflation** → real growth is little or zero.</li>
          <li>Long term goals like education & retirement need **inflation-beating assets**.</li>
        </ul>
      </LessonCard>

      {/* 3️⃣ Real Return Calculator */}
      <RealReturnCalculator />

      {/* ✅ Added Content */}
      {/* 4️⃣ Future Value vs Purchasing Power — Content Add */}
      <LessonCard title="4️⃣ Future Value vs Purchasing Power" icon={<BarChart3 className="h-5 w-5 text-purple-400" />}>
        <p>
          Your investment value may increase over time, but **if prices rise faster**, your ability to buy things
          can still **shrink**. This is called **purchasing power erosion**.
        </p>
        <p className="text-blue-300 text-sm mt-2">
          Example: ₹10 lakh after 10 years may only buy what ₹6–7 lakh buys today — depending on inflation.
        </p>
        <p className="text-blue-200 text-xs">
          Goal: Grow money **faster than inflation** → Positive Real Returns ✅
        </p>
      </LessonCard>

      <FVvsRealPower />

      {/* ✅ Added Content */}
      {/* 5️⃣ Expense Escalation — Content Add */}
      <LessonCard title="5️⃣ Expense Escalation — Real Life Example" icon={<Target className="h-5 w-5 text-amber-400" />}>
        <p>
          Some expenses increase **faster** than average inflation — especially
          <strong> education</strong> & <strong>healthcare</strong>.
        </p>
        <ul className="list-disc list-inside text-sm mt-2 text-blue-100 space-y-1">
          <li>School fees inflation: **8–12%** yearly</li>
          <li>Medical inflation: **10–14%** yearly</li>
        </ul>
        <p className="text-xs text-blue-300 mt-2">
          That's why saving the same amount every year is not enough — your **targets must grow** too ✅
        </p>
      </LessonCard>

      <ExpenseEscalator />

      {/* 6️⃣ Break-even & Rule of 70 */}
      <BreakEvenAndRule70 />

      {/* 7️⃣ Key Takeaways */}
      <LessonCard title="📘 Key Takeaways" icon={<Zap className="h-5 w-5 text-cyan-400" />}>
        <ul className="list-disc list-inside text-sm space-y-2">
          <li>Inflation silently reduces what your money can buy 🛒</li>
          <li>Always aim for **positive real returns** for long-term goals</li>
          <li>Your returns must **outpace inflation + taxes**</li>
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
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}
      className="bg-white/10 p-6 rounded-2xl border border-white/10 shadow-lg space-y-3">
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
      Educational only — Not investment advice. NeoCred is not SEBI-registered.
    </p>
  )
}

function FormulaBox({ title, lines }: { title: string; lines: string[] }) {
  return (
    <div className="rounded-xl p-4 bg-white/10 border border-white/10">
      <div className="text-white font-semibold mb-1 flex items-center gap-2">
        <Calculator className="h-4 w-4 text-cyan-300" /> {title}
      </div>
      <div className="text-blue-100 text-sm space-y-1">{lines.map((l, i) => <div key={i}>{l}</div>)}</div>
    </div>
  )
}

function InputBox({ label, value, onChange, icon, step = "any" }: any) {
  return (
    <div className="bg-white/10 rounded-xl p-4 border border-white/10">
      <label className="text-xs text-blue-200 flex items-center gap-2 mb-1">
        {icon} {label}
      </label>
      <input type="number" step={step} value={value} onChange={onChange}
        className="w-full p-2 rounded-lg bg-white/20 border border-white/10 text-white outline-none" />
    </div>
  )
}

function StatBox({ label, value, highlight = false }: any) {
  return (
    <div className={`rounded-xl p-4 border border-white/10 ${highlight ? "bg-gradient-to-r from-cyan-600/20 to-blue-600/20" : "bg-white/10"}`}>
      <div className="text-[11px] uppercase tracking-wide text-blue-200">{label}</div>
      <div className={`text-white font-semibold ${highlight ? "text-lg" : ""}`}>{value}</div>
    </div>
  )
}

/* ✅ Real Return Calculator */
function RealReturnCalculator() {
  const [nominal, setNominal] = useState(10)
  const [inflation, setInflation] = useState(6)

  const approx = nominal - inflation
  const exact = ((1 + nominal / 100) / (1 + inflation / 100) - 1) * 100

  return (
    <LessonCard title="3️⃣ Real Return Calculator — Try It" icon={<Calculator className="h-5 w-5 text-green-400" />}>
      <div className="grid md:grid-cols-2 gap-4">
        <InputBox label="Nominal Return (p.a. %)" value={nominal} onChange={(e: any) => setNominal(num(e.target.value))}
          icon={<TrendingUp className="h-4 w-4 text-cyan-300" />} />
        <InputBox label="Inflation (p.a. %)" value={inflation} onChange={(e: any) => setInflation(num(e.target.value))}
          icon={<Info className="h-4 w-4 text-cyan-300" />} />
      </div>

      <div className="grid md:grid-cols-3 gap-4 mt-4">
        <StatBox label="Approx Real Return" value={`${approx.toFixed(1)}%`} />
        <StatBox label="Exact Real Return" value={`${exact.toFixed(1)}%`} highlight />
        <StatBox label="Real Positive?" value={exact >= 0 ? "✅ Yes" : "❌ No"} />
      </div>
    </LessonCard>
  )
}

/* ✅ Purchasing Power Simulator */
function FVvsRealPower() {
  const [principal, setPrincipal] = useState(200000)
  const [years, setYears] = useState(10)
  const [nominal, setNominal] = useState(10)
  const [inflation, setInflation] = useState(6)

  const FV = principal * Math.pow(1 + nominal / 100, years)
  const realFV = FV / Math.pow(1 + inflation / 100, years)

  const maxBar = Math.max(FV, realFV, principal)
  const pct = (v: number) => Math.max(4, Math.round((v / (maxBar || 1)) * 100))

  return (
    <LessonCard title="Future Value vs Purchasing Power Simulator" icon={<Activity className="h-5 w-5 text-indigo-400" />}>
      <p className="text-sm text-blue-200 mb-3">
        Your future returns may look big in numbers, but their **real value** matters more.
      </p>

      <div className="grid md:grid-cols-4 gap-4 mb-4">
        <InputBox label="Initial Amount (₹)" value={principal} onChange={(e: any) => setPrincipal(num(e.target.value))}
          icon={<IndianRupee className="h-4 w-4 text-cyan-300" />} />
        <InputBox label="Years" value={years} onChange={(e: any) => setYears(num(e.target.value))}
          icon={<AlarmClockCheck className="h-4 w-4 text-cyan-300" />} />
        <InputBox label="Return %" value={nominal} onChange={(e: any) => setNominal(num(e.target.value))}
          icon={<TrendingUp className="h-4 w-4 text-cyan-300" />} />
        <InputBox label="Inflation %" value={inflation} onChange={(e: any) => setInflation(num(e.target.value))}
          icon={<Info className="h-4 w-4 text-cyan-300" />} />
      </div>

      <Bar label="Principal Value (Today)" value={principal} pct={pct(principal)} tone="from-slate-500/40 to-slate-400/30" />
      <Bar label="Future Value" value={FV} pct={pct(FV)} tone="from-green-600/30 to-emerald-500/30" />
      <Bar label="Real Value (Today’s Rupees)" value={realFV} pct={pct(realFV)} tone="from-cyan-600/30 to-blue-600/30" />

      <p className="text-xs text-blue-300 mt-3">
        The gap between “Future Value” & “Real Value” = **we lost purchasing power** 💸
      </p>
    </LessonCard>
  )
}

function Bar({ label, value, pct, tone }: any) {
  return (
    <div className="mt-2">
      <div className="flex justify-between text-xs text-blue-200">
        <span>{label}</span>
        <span>₹{Math.round(value).toLocaleString("en-IN")}</span>
      </div>
      <div className="w-full h-3 bg-white/10 rounded-xl overflow-hidden mt-1">
        <div className={`h-3 bg-gradient-to-r ${tone}`} style={{ width: `${pct}%` }} />
      </div>
    </div>
  )
}

/* ✅ Expense Escalator */
function ExpenseEscalator() {
  const [todayCost, setTodayCost] = useState(100000)
  const [years, setYears] = useState(8)
  const [inflation, setInflation] = useState(7)

  const futureCost = todayCost * Math.pow(1 + inflation / 100, years)

  return (
    <LessonCard title="Growing Expense Cost Estimator" icon={<Calculator className="h-5 w-5 text-orange-400" />}>
      <p className="text-sm text-blue-200 mb-4">
        Prices of essentials like **fees, food & healthcare** grow every year.
        This tool helps estimate the **future cost** of today's expenses.
      </p>

      <div className="grid md:grid-cols-3 gap-4 mb-4">
        <InputBox label="Today's Cost (₹)" value={todayCost} onChange={(e: any) => setTodayCost(num(e.target.value))}
          icon={<IndianRupee className="h-4 w-4 text-cyan-300" />} />
        <InputBox label="Years" value={years} onChange={(e: any) => setYears(num(e.target.value))}
          icon={<AlarmClockCheck className="h-4 w-4 text-cyan-300" />} />
        <InputBox label="Inflation %" value={inflation} onChange={(e: any) => setInflation(num(e.target.value))}
          icon={<Info className="h-4 w-4 text-cyan-300" />} />
      </div>

      <div className="rounded-xl p-4 bg-white/10 border border-white/10">
        <div className="text-blue-200 text-sm">Estimated Future Price</div>
        <div className="text-white font-semibold text-2xl">
          ₹{Math.round(futureCost).toLocaleString("en-IN")}
        </div>
        <p className="text-xs text-blue-300 mt-1">
          Use this when planning education, healthcare & retirement goals ✅
        </p>
      </div>
    </LessonCard>
  )
}

/* ✅ Rule of 70 + Break-even Return */
function BreakEvenAndRule70() {
  const [infl, setInfl] = useState(6.5)

  const priceDoubleYears = infl > 0 ? 70 / infl : Infinity

  return (
    <LessonCard title="Rule of 70 + Break-even Return" icon={<Gauge className="h-5 w-5 text-red-400" />}>
      <p className="text-sm text-blue-200 mb-3">
        Learn how quickly prices can **double**, and how much return you need just to keep your money **at the same value**.
      </p>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="rounded-xl p-4 bg-white/10 border border-white/10">
          <div className="text-blue-200 text-xs mb-1 uppercase tracking-wide">
            Rule of 70 — Price Doubling Time
          </div>
          <div className="text-white font-semibold text-2xl mb-1">
            {priceDoubleYears.toFixed(1)} years
          </div>
          <p className="text-xs text-blue-300">
            Years ≈ 70 ÷ inflation%  
            Higher inflation → faster price doubling
          </p>
        </div>

        <div className="rounded-xl p-4 bg-white/10 border border-white/10">
          <div className="text-blue-200 text-xs mb-1 uppercase tracking-wide">
            Break-even Nominal Return
          </div>
          <div className="text-white font-semibold text-2xl mb-1">
            {infl.toFixed(1)}% p.a.
          </div>
          <p className="text-xs text-blue-300">
            Nominal return must **≥ inflation** to avoid losing buying power
          </p>
        </div>
      </div>
    </LessonCard>
  )
}

/* ✅ Quiz */
function QuizComponent() {
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [score, setScore] = useState(0)

  const quiz = [
    { question: "If Nominal = 9% and Inflation = 6%, approx real return is:", options: ["3%", "6%", "12%", "0%"], correct: "3%" },
    { question: "Prices double faster when:", options: ["Inflation is high", "Inflation is low", "Nominal > Inflation", "Returns are low"], correct: "Inflation is high" },
    { question: "For long-term goals you need:", options: ["Real negative returns", "Nominal < Inflation", "Positive real returns", "Only savings account"], correct: "Positive real returns" },
  ]

  const handleSelect = (i: number, opt: string) => !submitted && setAnswers((p) => ({ ...p, [i]: opt }))
  const submit = () => { setScore(quiz.filter((q, i) => answers[i] === q.correct).length), setSubmitted(true) }
  const reset = () => { setAnswers({}), setSubmitted(false), setScore(0) }

  return (
    <div className="space-y-6">
      {quiz.map((q, i) => (
        <div key={i} className="bg-white/5 p-4 rounded-xl border border-white/10">
          <p className="font-medium text-blue-100 mb-3">Q{i + 1}: {q.question}</p>
          {q.options.map((opt, oi) => {
            const sel = answers[i] === opt, correct = opt === q.correct
            return (
              <motion.button key={oi} disabled={submitted}
                onClick={() => handleSelect(i, opt)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className={`w-full text-left px-4 py-2 rounded-lg mb-2 border transition
                  ${sel ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white border-transparent" :
                  "bg-white/10 hover:bg-white/20 border-white/10"}
                  ${submitted && correct ? "border-green-400 bg-green-500/10" : ""}
                  ${submitted && sel && !correct ? "border-red-400 bg-red-500/10" : ""}`}
              >
                {opt}
              </motion.button>
            )
          })}
        </div>
      ))}

      {!submitted ? (
        <motion.button whileHover={{ scale: 1.05 }} disabled={Object.keys(answers).length < quiz.length}
          onClick={submit}
          className="px-6 py-2 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white disabled:opacity-50">
          Submit
        </motion.button>
      ) : (
        <div className="text-center space-y-3">
          <div className="text-lg font-semibold flex justify-center gap-2 text-white">
            {score === quiz.length ?
              (<><CheckCircle className="text-green-400 h-6 w-6" /> Excellent! 🎯</>) :
              (<><XCircle className="text-yellow-400 h-6 w-6" /> {score}/{quiz.length} correct</>)}
          </div>
          <motion.button onClick={reset}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm">
            <RotateCcw className="inline-block h-4 w-4 mr-1" /> Try Again
          </motion.button>
        </div>
      )}
    </div>
  )
}

/* Helpers */
function num(v: any) {
  const n = Number(v)
  return Number.isFinite(n) ? n : 0
}
