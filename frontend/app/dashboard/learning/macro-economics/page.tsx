"use client"

import { useMemo, useState } from "react"
import { motion } from "framer-motion"
import {
  Globe2,
  Gauge,
  LineChart,
  BarChart3,
  IndianRupee,
  Banknote,
  Landmark,
  TrendingUp,
  TrendingDown,
  Sigma,
  Calculator,
  ShieldCheck,
  CheckCircle,
  XCircle,
  RotateCcw,
  Table,
  Activity,
  GitBranch,
  ArrowUpRight,
  ArrowDownRight,
  Info,
} from "lucide-react"

/**
 * Lesson: Macroeconomics for Investors — Inflation, GDP, Repo Rate, Yields, Currency
 * Level: Advanced (Educational only — SEBI-compliant)
 * File: macro-economics.tsx
 */

export default function Lesson_MacroEconomics() {
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
          <Globe2 className="h-8 w-8 text-cyan-400" />
          Macroeconomics for Investors
        </h1>
        <p className="text-blue-200 text-lg">
          Understand how <strong>inflation, GDP, repo rate, bond yields, and currency</strong> influence markets — and how to read them together.
        </p>
        <Disclaimer />
      </header>

      {/* 1️⃣ Macro Map */}
      <LessonCard
        title={
          <>
            <Table className="h-5 w-5 text-emerald-400 inline-block mr-2" />
            1️⃣ The Macro Map — Key Indicators & Why They Matter
          </>
        }
      >
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse text-blue-100">
            <thead className="bg-white/10 text-blue-200 text-xs uppercase">
              <tr>
                <th className="p-2 border-b border-white/10 text-left">Indicator</th>
                <th className="p-2 border-b border-white/10 text-left">What it signals</th>
                <th className="p-2 border-b border-white/10 text-left">Investor lens</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Inflation (CPI/WPI)", "Price rise pace", "High CPI → pressure on RBI rates; hurts real returns"],
                ["GDP Growth (Real/ Nominal)", "Economic expansion", "Sustained growth supports earnings & multiples"],
                ["RBI Policy Rate (Repo)", "Short-term funding cost", "Rate hikes cool inflation; impact debt & equity"],
                ["Bond Yields (G-Sec)", "Risk-free benchmark", "Higher yields → richer fixed income, equity PE pressure"],
                ["Yield Curve (steep/flat/inverted)", "Growth/ policy expectations", "Steep = growth; inverted = slowdown risk"],
                ["Fiscal Deficit", "Govt borrowing need", "Higher supply can lift yields; crowding-out risk"],
                ["Current Account / INR", "External balance & currency", "Deficits + weak INR can stoke imported inflation"],
                ["PMI / IIP / Unemployment", "Activity momentum", "High PMI & IIP support earnings momentum"],
              ].map((r, i) => (
                <tr key={i} className="border-b border-white/10">
                  <td className="p-2 text-white font-medium">{r[0]}</td>
                  <td className="p-2">{r[1]}</td>
                  <td className="p-2">{r[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </LessonCard>

      {/* 2️⃣ Inflation Deep-Dive */}
      <InflationBlock />

      {/* 3️⃣ GDP & Earnings Link */}
      <GDPBlock />

      {/* 4️⃣ RBI Policy Rate & Loan EMI Sensitivity */}
      <PolicyRateBlock />

      {/* 5️⃣ Bond Yields & Yield Curve */}
      <YieldCurveBlock />

      {/* 6️⃣ Currency & External Balance */}
      <CurrencyBlock />

      {/* 7️⃣ Mini Macro Dashboard */}
      <MiniMacroDashboard />

      {/* 8️⃣ Playbook */}
      <PlaybookBlock />

      {/* 9️⃣ Quiz */}
      <LessonCard
        title={
          <>
            💬 Quick Quiz
          </>
        }
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
      Educational only — NeoCred is not a SEBI-registered advisor. Use this for learning; not investment advice.
    </p>
  )
}

function NumberInput({
  label,
  value,
  setValue,
  step = "any",
  icon,
  hint,
}: {
  label: string
  value: number
  setValue: (n: number) => void
  step?: string
  icon?: any
  hint?: string
}) {
  return (
    <div className="bg-white/10 rounded-xl p-4 border border-white/10">
      <label className="text-xs text-blue-200 mb-1 flex items-center gap-2">
        {icon} {label}
      </label>
      <input
        type="number"
        step={step}
        value={Number.isFinite(value) ? value : 0}
        onChange={(e) => setValue(Number(e.target.value))}
        className="w-full p-2 rounded-lg bg-white/20 border border-white/10 text-white outline-none"
      />
      {hint ? <div className="text-[11px] text-blue-300 mt-1">{hint}</div> : null}
    </div>
  )
}

function StatBox({
  label,
  value,
  tone = "default",
}: {
  label: string
  value: string
  tone?: "default" | "highlight" | "warn"
}) {
  const toneClass =
    tone === "highlight"
      ? "bg-gradient-to-r from-emerald-600/20 to-blue-600/20"
      : tone === "warn"
      ? "bg-gradient-to-r from-rose-600/20 to-orange-600/20"
      : "bg-white/10"
  return (
    <div className={`rounded-xl p-4 border border-white/10 ${toneClass}`}>
      <div className="text-[11px] uppercase tracking-wide text-blue-200">{label}</div>
      <div className="text-white font-semibold text-lg">{value}</div>
    </div>
  )
}

/* ======================= 2️⃣ Inflation ======================= */

function InflationBlock() {
  const [cpi, setCpi] = useState(5.5)
  const [ppi, setPpi] = useState(3.8) // you can think WPI analogue
  const [deposit, setDeposit] = useState(6.5)

  const realDeposit = useMemo(() => deposit - cpi, [deposit, cpi])
  const tone: "default" | "highlight" | "warn" = realDeposit >= 0 ? "highlight" : "warn"

  return (
    <LessonCard
      title={
        <>
          <Gauge className="h-5 w-5 text-cyan-300 inline-block mr-2" />
          2️⃣ Inflation — CPI vs WPI & Real Returns
        </>
      }
    >
      <p>
        <strong>CPI</strong> tracks consumer prices; <strong>WPI</strong> (or producer price analogues) tracks wholesale pressures.
        Persistent high inflation erodes purchasing power and influences RBI policy.
      </p>

      <div className="grid md:grid-cols-3 gap-4 mt-3">
        <NumberInput label="CPI (%, y/y)" value={cpi} setValue={setCpi} icon={<Gauge className="h-4 w-4 text-cyan-300" />} />
        <NumberInput label="WPI / PPI (%, y/y)" value={ppi} setValue={setPpi} icon={<BarChart3 className="h-4 w-4 text-cyan-300" />} />
        <NumberInput
          label="Deposit Rate (%, p.a.)"
          value={deposit}
          setValue={setDeposit}
          icon={<Banknote className="h-4 w-4 text-cyan-300" />}
        />
      </div>

      <div className="grid sm:grid-cols-3 gap-4 mt-4">
        <StatBox label="Real Return (Deposit − CPI)" value={`${realDeposit.toFixed(1)}%`} tone={tone} />
        <StatBox label="Price Pressure" value={cpi > 6 ? "Elevated" : cpi > 4 ? "Moderate" : "Comfort"} />
        <StatBox label="Wholesale Signal" value={ppi > cpi ? "Upstream heat" : "Benign"} />
      </div>

      <p className="text-xs text-blue-300 mt-2">
        Real return helps you judge if fixed income keeps up with inflation (pre-tax in this example).
      </p>
    </LessonCard>
  )
}

/* ======================= 3️⃣ GDP & Earnings ======================= */

function GDPBlock() {
  const [gdp, setGdp] = useState(6.5) // real GDP growth
  const [marginDrift, setMarginDrift] = useState(0.5) // EPS uplift from margin cycle, %
  const [shareCountDrift, setShareCountDrift] = useState(0.0) // dilution/buyback, %

  const impliedEPS = useMemo(() => gdp + marginDrift - shareCountDrift, [gdp, marginDrift, shareCountDrift])

  return (
    <LessonCard
      title={
        <>
          <TrendingUp className="h-5 w-5 text-emerald-400 inline-block mr-2" />
          3️⃣ GDP Growth & Earnings — A Simple Link
        </>
      }
    >
      <p>
        Over cycles, <strong>EPS growth</strong> can rhyme with <strong>real GDP growth</strong>, adjusted by margins and share count changes.
        This is a learning heuristic — not a forecast.
      </p>

      <div className="grid md:grid-cols-3 gap-4 mt-3">
        <NumberInput label="Real GDP Growth (%, y/y)" value={gdp} setValue={setGdp} icon={<Globe2 className="h-4 w-4 text-cyan-300" />} />
        <NumberInput label="Margin Cycle Effect (%, y/y)" value={marginDrift} setValue={setMarginDrift} icon={<ArrowUpRight className="h-4 w-4 text-emerald-300" />} />
        <NumberInput label="Share Count Effect (%, y/y)" value={shareCountDrift} setValue={setShareCountDrift} icon={<ArrowDownRight className="h-4 w-4 text-rose-300" />} />
      </div>

      <div className="grid sm:grid-cols-3 gap-4 mt-4">
        <StatBox label="Implied EPS Trend (y/y)" value={`${impliedEPS.toFixed(1)}%`} tone="highlight" />
        <StatBox label="Growth Regime" value={gdp >= 6 ? "Solid" : gdp >= 4 ? "Moderate" : "Soft"} />
        <StatBox label="Margin Pulse" value={marginDrift >= 0 ? "Tailwind" : "Headwind"} />
      </div>
    </LessonCard>
  )
}

/* ======================= 4️⃣ Policy Rate & EMI ======================= */

function PolicyRateBlock() {
  const [repo, setRepo] = useState(6.5)
  const [spread, setSpread] = useState(2.0) // bank spread to compute indicative loan rate
  const [tenorYears, setTenorYears] = useState(20)
  const [principal, setPrincipal] = useState(40_00_000) // ₹40L

  const loanRate = repo + spread
  const r = loanRate / 12 / 100
  const n = tenorYears * 12
  const emi = r === 0 ? principal / n : (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)

  return (
    <LessonCard
      title={
        <>
          <Landmark className="h-5 w-5 text-purple-400 inline-block mr-2" />
          4️⃣ RBI Policy Rate → Loan EMI Sensitivity (Illustrative)
        </>
      }
    >
      <p>
        When <strong>repo rate</strong> rises, banks’ lending rates often rise too, raising EMIs (variable-rate loans). This block shows
        an illustrative mapping — actual pricing varies.
      </p>

      <div className="grid md:grid-cols-4 gap-4 mt-3">
        <NumberInput label="Repo Rate (%)" value={repo} setValue={setRepo} icon={<Landmark className="h-4 w-4 text-cyan-300" />} />
        <NumberInput label="Bank Spread (%)" value={spread} setValue={setSpread} icon={<Banknote className="h-4 w-4 text-cyan-300" />} />
        <NumberInput label="Tenor (years)" value={tenorYears} setValue={setTenorYears} icon={<GitBranch className="h-4 w-4 text-cyan-300" />} />
        <NumberInput label="Principal (₹)" value={principal} setValue={setPrincipal} icon={<IndianRupee className="h-4 w-4 text-cyan-300" />} />
      </div>

      <div className="grid sm:grid-cols-3 gap-4 mt-4">
        <StatBox label="Indicative Loan Rate" value={`${loanRate.toFixed(2)}% p.a.`} />
        <StatBox label="Monthly EMI" value={`₹${Math.round(emi).toLocaleString("en-IN")}`} tone="highlight" />
        <StatBox label="Rate Shock Sensitivity" value={loanRate >= 9 ? "High" : loanRate >= 7.5 ? "Medium" : "Low"} />
      </div>
    </LessonCard>
  )
}

/* ======================= 5️⃣ Bond Yields & Yield Curve ======================= */

function YieldCurveBlock() {
  const [y2, setY2] = useState(6.9)
  const [y5, setY5] = useState(7.1)
  const [y10, setY10] = useState(7.3)

  const slope = y10 - y2
  const shape = slope > 0.3 ? "Steep (growth/term premium)" : slope > 0 ? "Normal" : slope < -0.2 ? "Inverted (slowdown risk)" : "Flat"

  const max = Math.max(y2, y5, y10)
  const pct = (v: number) => Math.max(5, Math.round((v / (max || 1)) * 100))

  return (
    <LessonCard
      title={
        <>
          <LineChart className="h-5 w-5 text-amber-400 inline-block mr-2" />
          5️⃣ Government Bond Yields & Yield Curve (2y–10y)
        </>
      }
    >
      <p>
        The <strong>risk-free curve</strong> anchors discount rates across the economy. A <em>steep</em> curve often reflects growth/inflation
        expectations; an <em>inverted</em> curve can hint at slowdown risks.
      </p>

      <div className="grid md:grid-cols-3 gap-4 mt-3">
        <NumberInput label="2y G-Sec (%)" value={y2} setValue={setY2} icon={<LineChart className="h-4 w-4 text-cyan-300" />} />
        <NumberInput label="5y G-Sec (%)" value={y5} setValue={setY5} icon={<LineChart className="h-4 w-4 text-cyan-300" />} />
        <NumberInput label="10y G-Sec (%)" value={y10} setValue={setY10} icon={<LineChart className="h-4 w-4 text-cyan-300" />} />
      </div>

      <div className="mt-5 space-y-3">
        <Bar label="2y" value={`${y2.toFixed(2)}%`} width={pct(y2)} tone="from-cyan-600/30 to-blue-600/30" />
        <Bar label="5y" value={`${y5.toFixed(2)}%`} width={pct(y5)} tone="from-green-600/30 to-emerald-500/30" />
        <Bar label="10y" value={`${y10.toFixed(2)}%`} width={pct(y10)} tone="from-purple-600/30 to-pink-600/30" />
      </div>

      <div className="grid sm:grid-cols-3 gap-4 mt-4">
        <StatBox label="Curve Slope (10y − 2y)" value={`${slope.toFixed(2)}%`} />
        <StatBox label="Curve Shape" value={shape} tone={shape.includes("Inverted") ? "warn" : "default"} />
        <StatBox label="Duration Signal" value={shape.includes("Steep") ? "Shorter favoured" : "Longer may work"} />
      </div>
    </LessonCard>
  )
}

function Bar({ label, value, width, tone }: { label: string; value: string; width: number; tone: string }) {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between text-xs text-blue-200">
        <span>{label}</span>
        <span>{value}</span>
      </div>
      <div className="w-full h-3 bg-white/10 rounded-lg overflow-hidden mt-1">
        <div className={`h-3 rounded-lg bg-gradient-to-r ${tone}`} style={{ width: `${width}%` }} />
      </div>
    </div>
  )
}

/* ======================= 6️⃣ Currency & External Balance ======================= */

function CurrencyBlock() {
  const [cad, setCad] = useState(2.0) // current account deficit % of GDP
  const [fx, setFx] = useState(620) // INR per $ hypothetical
  const health = cad <= 2 ? "Comfort" : cad <= 3 ? "Manageable" : "Watch"

  return (
    <LessonCard
      title={
        <>
          <IndianRupee className="h-5 w-5 text-sky-300 inline-block mr-2" />
          6️⃣ Currency, Current Account & Imported Inflation
        </>
      }
    >
      <p>
        A wider <strong>current account deficit (CAD)</strong> can pressure the <strong>INR</strong>, making imports costlier — which can
        lift inflation. External funding and FX reserves act as buffers.
      </p>

      <div className="grid md:grid-cols-3 gap-4 mt-3">
        <NumberInput label="CAD (% of GDP)" value={cad} setValue={setCad} icon={<Globe2 className="h-4 w-4 text-cyan-300" />} />
        <NumberInput label="INR/USD (illustrative)" value={fx} setValue={setFx} icon={<IndianRupee className="h-4 w-4 text-cyan-300" />} />
        <StatBox label="External Balance Signal" value={health} tone={health === "Watch" ? "warn" : "default"} />
      </div>

      <p className="text-xs text-blue-300 mt-2">
        Currency impacts imported items (oil, electronics) and listed firms with FX exposure (importers/exporters).
      </p>
    </LessonCard>
  )
}

/* ======================= 7️⃣ Mini Macro Dashboard ======================= */

function MiniMacroDashboard() {
  const [cpi, setCpi] = useState(5.5)
  const [gdp, setGdp] = useState(6.2)
  const [repo, setRepo] = useState(6.5)
  const [y10, setY10] = useState(7.3)

  const macroMood =
    cpi > 6
      ? "Inflationary"
      : gdp >= 6 && repo <= 6.5 && y10 <= 7.25
      ? "Goldilocks-ish"
      : gdp < 4
      ? "Growth Soft"
      : "Neutral"

  return (
    <LessonCard
      title={
        <>
          <Sigma className="h-5 w-5 text-emerald-300 inline-block mr-2" />
          7️⃣ Mini Macro Dashboard — Quick Read
        </>
      }
    >
      <div className="grid md:grid-cols-4 gap-4">
        <NumberInput label="CPI (%, y/y)" value={cpi} setValue={setCpi} icon={<Gauge className="h-4 w-4 text-cyan-300" />} />
        <NumberInput label="Real GDP (%, y/y)" value={gdp} setValue={setGdp} icon={<TrendingUp className="h-4 w-4 text-emerald-300" />} />
        <NumberInput label="Repo (%)" value={repo} setValue={setRepo} icon={<Landmark className="h-4 w-4 text-cyan-300" />} />
        <NumberInput label="10y G-Sec (%)" value={y10} setValue={setY10} icon={<LineChart className="h-4 w-4 text-cyan-300" />} />
      </div>

      <div className="grid sm:grid-cols-3 gap-4 mt-4">
        <StatBox label="Macro Mood (Illustrative)" value={macroMood} tone={macroMood.includes("Inflation") ? "warn" : "highlight"} />
        <StatBox label="Policy Stance Cue" value={cpi > 6 ? "Hawkish bias" : cpi < 4 ? "Dovish room" : "Balanced"} />
        <StatBox label="Discount-Rate Pressure" value={y10 > 7.5 ? "High" : y10 > 7 ? "Medium" : "Low"} />
      </div>
      <p className="text-xs text-blue-300 mt-2">This is a learning tool — not a signal generator.</p>
    </LessonCard>
  )
}

/* ======================= 8️⃣ Playbook ======================= */

function PlaybookBlock() {
  return (
    <LessonCard
      title={
        <>
          <Calculator className="h-5 w-5 text-green-400 inline-block mr-2" />
          8️⃣ Macro Reading Playbook — Do / Don’t
        </>
      }
    >
      <div className="grid md:grid-cols-2 gap-4">
        <div className="rounded-xl p-4 border border-white/10 bg-white/10">
          <div className="text-white font-semibold mb-1 flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-emerald-300" /> Do
          </div>
          <ul className="list-disc list-inside text-sm text-blue-100 space-y-1">
            <li>Track trends, not single prints — confirm across months/quarters.</li>
            <li>Read indicators together (inflation + GDP + yields + currency).</li>
            <li>Compare against history and peer economies for context.</li>
            <li>Match horizons: short-term data for short-term views, etc.</li>
          </ul>
        </div>
        <div className="rounded-xl p-4 border border-white/10 bg-white/10">
          <div className="text-white font-semibold mb-1 flex items-center gap-2">
            <TrendingDown className="h-5 w-5 text-rose-300" /> Don’t
          </div>
          <ul className="list-disc list-inside text-sm text-blue-100 space-y-1">
            <li>Don’t extrapolate one surprise into a full cycle change.</li>
            <li>Don’t ignore revisions — first prints often get updated.</li>
            <li>Don’t mix nominal with real without inflation adjustment.</li>
            <li>Don’t use this as investment advice; it’s for learning.</li>
          </ul>
        </div>
      </div>
    </LessonCard>
  )
}

/* ======================= 9️⃣ Quiz ======================= */

function QuizComponent() {
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [score, setScore] = useState(0)

  const quiz = [
    {
      question: "An inverted yield curve most often signals:",
      options: ["Strong growth ahead", "Slowdown risk", "Higher inflation next month"],
      correct: "Slowdown risk",
    },
    {
      question: "If repo rises sharply, which is most directly impacted first?",
      options: ["Long-term G-Sec only", "Variable-rate EMIs & short-term funding costs", "Company ROE immediately"],
      correct: "Variable-rate EMIs & short-term funding costs",
    },
    {
      question: "If CPI is 7% and your deposit is 6%, your pre-tax real return is:",
      options: ["+1%", "0%", "−1%"],
      correct: "−1%",
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
          whileHover={{ scale: 1.05 }}
          onClick={handleSubmit}
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
