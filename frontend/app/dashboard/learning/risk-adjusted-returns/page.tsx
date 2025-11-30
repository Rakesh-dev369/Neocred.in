"use client"

import { useMemo, useState } from "react"
import { motion } from "framer-motion"
import {
  Gauge,
  Sigma,
  Activity,
  BarChart2,
  Calculator,
  ShieldCheck,
  CheckCircle,
  XCircle,
  RotateCcw,
  LineChart,
  Info,
  TrendingUp,
  ArrowUpRight,
  Ruler,
  ScatterChart,
} from "lucide-react"

/**
 * Lesson: Understanding Risk-Adjusted Returns (Sharpe Ratio, Alpha, Beta)
 * Level: Advanced (Educational Only — SEBI-compliant)
 * File: risk-adjusted-returns.tsx
 */

export default function Lesson_RiskAdjustedReturns() {
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
          Risk-Adjusted Returns — Sharpe, Alpha, Beta
        </h1>
        <p className="text-blue-200 text-lg">
          Measure performance the right way: compare <strong>returns</strong> against the <strong>risk</strong> taken.
        </p>
        <Disclaimer />
      </header>

      {/* 1️⃣ Core Concepts */}
      <LessonCard
        title={
          <>
            <Info className="h-5 w-5 text-emerald-400 inline-block mr-2" />
            1️⃣ Core Ideas & Formulas (Plain English)
          </>
        }
      >
        <ul className="list-disc list-inside text-sm space-y-2">
          <li>
            <strong>Sharpe Ratio</strong> — excess return per unit of volatility.{" "}
            <em>Formula:</em> <code>Sharpe = (Rp − Rf) / σp</code>
          </li>
          <li>
            <strong>Beta (β)</strong> — sensitivity to market moves.{" "}
            <em>Formula:</em> <code>β = Cov(Rp, Rm) / Var(Rm) = ρ × (σp / σm)</code>
          </li>
          <li>
            <strong>CAPM Expected Return</strong> — <code>E[Rp] = Rf + β (Rm − Rf)</code>
          </li>
          <li>
            <strong>Alpha (α)</strong> — value added vs CAPM.{" "}
            <em>Formula:</em> <code>α = Rp − [Rf + β (Rm − Rf)]</code>
          </li>
        </ul>
        <p className="text-xs text-blue-300 mt-2">
          <span className="font-semibold">Interpretation:</span> Higher Sharpe = better risk-adjusted performance; β&gt;1 =
          more volatile than market; positive α = outperformance vs risk taken.
        </p>
      </LessonCard>

      {/* 2️⃣ India Context */}
      <LessonCard
        title={
          <>
            <LineChart className="h-5 w-5 text-cyan-300 inline-block mr-2" />
            2️⃣ India Context — Practical Notes
          </>
        }
      >
        <ul className="list-disc list-inside text-sm space-y-2">
          <li>
            Use an India-appropriate <strong>risk-free rate</strong> (e.g., 364-day T-Bill yield) for Sharpe/CAPM examples.
          </li>
          <li>
            For equity benchmarks, investors often reference <strong>Nifty 50</strong> / <strong>Sensex</strong> for market returns/volatility.
          </li>
          <li>
            Compare funds/stocks within the same <strong>category/sector</strong> to avoid apples-to-oranges.
          </li>
        </ul>
      </LessonCard>

      {/* 3️⃣ Sharpe Ratio Calculator */}
      <SharpeCalculator />

      {/* 4️⃣ Beta Estimator */}
      <BetaEstimator />

      {/* 5️⃣ Alpha Calculator (CAPM) */}
      <AlphaCalculator />

      {/* 6️⃣ Risk vs Return Visual (Bars) */}
      <RiskReturnVisual />

      {/* 7️⃣ Best Practices & Pitfalls */}
      <BestPractices />

      {/* 8️⃣ Quiz */}
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

/* ============= Common UI ============= */

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
      Educational only — NeoCred is not a SEBI-registered advisor. The calculators are for learning, not recommendations.
    </p>
  )
}

function NumberInput({
  label,
  value,
  setValue,
  step = "any",
  hint,
  icon,
}: {
  label: string
  value: number
  setValue: (n: number) => void
  step?: string
  hint?: string
  icon?: any
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

function StatBox({ label, value, tone = "default" }: { label: string; value: string; tone?: "default" | "highlight" | "warn" }) {
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

/* ============= 3️⃣ Sharpe Calculator ============= */

function SharpeCalculator() {
  const [rp, setRp] = useState(12) // portfolio return % p.a.
  const [rf, setRf] = useState(7) // risk-free % p.a.
  const [sigma, setSigma] = useState(14) // portfolio volatility % p.a.

  const sharpe = useMemo(() => {
    const ex = rp - rf
    if (sigma === 0) return Infinity
    return ex / sigma
  }, [rp, rf, sigma])

  const verdict =
    !isFinite(sharpe) ? "—" : sharpe >= 1.0 ? "Good" : sharpe >= 0.5 ? "Okay" : "Low"

  return (
    <LessonCard
      title={
        <>
          <Calculator className="h-5 w-5 text-cyan-400 inline-block mr-2" />
          3️⃣ Sharpe Ratio Calculator — Excess Return per Unit Risk
        </>
      }
    >
      <div className="grid md:grid-cols-3 gap-4">
        <NumberInput
          label="Portfolio Return (Rp, % p.a.)"
          value={rp}
          setValue={setRp}
          icon={<TrendingUp className="h-4 w-4 text-cyan-300" />}
        />
        <NumberInput
          label="Risk-Free (Rf, % p.a.)"
          value={rf}
          setValue={setRf}
          icon={<Ruler className="h-4 w-4 text-cyan-300" />}
          hint="Use T-Bill–like yield for learning"
        />
        <NumberInput
          label="Volatility (σp, % p.a.)"
          value={sigma}
          setValue={setSigma}
          icon={<Activity className="h-4 w-4 text-cyan-300" />}
          hint="Std. dev. of returns"
        />
      </div>

      <div className="grid sm:grid-cols-3 gap-4 mt-4">
        <StatBox label="Excess Return (Rp − Rf)" value={`${(rp - rf).toFixed(2)}%`} />
        <StatBox label="Sharpe Ratio" value={isFinite(sharpe) ? sharpe.toFixed(2) : "∞"} tone="highlight" />
        <StatBox label="Interpretation" value={verdict} />
      </div>
      <p className="text-xs text-blue-300 mt-2">Higher is better (for the same period & methodology).</p>
    </LessonCard>
  )
}

/* ============= 4️⃣ Beta Estimator ============= */

function BetaEstimator() {
  // Using β = ρ × (σp / σm)
  const [corr, setCorr] = useState(0.8) // correlation with market
  const [sigmaP, setSigmaP] = useState(15) // portfolio volatility
  const [sigmaM, setSigmaM] = useState(12) // market volatility

  const beta = useMemo(() => {
    if (sigmaM === 0) return Infinity
    return corr * (sigmaP / sigmaM)
  }, [corr, sigmaP, sigmaM])

  const tag = !isFinite(beta)
    ? "—"
    : beta > 1.2
    ? "Aggressive"
    : beta < 0.8
    ? "Defensive"
    : "Market-like"

  return (
    <LessonCard
      title={
        <>
          <BarChart2 className="h-5 w-5 text-purple-400 inline-block mr-2" />
          4️⃣ Beta (β) Estimator — Sensitivity to Market
        </>
      }
    >
      <div className="grid md:grid-cols-3 gap-4">
        <NumberInput label="Correlation (ρ)" value={corr} setValue={setCorr} hint="Range −1 to +1" />
        <NumberInput label="σp (% p.a.)" value={sigmaP} setValue={setSigmaP} />
        <NumberInput label="σm (% p.a.)" value={sigmaM} setValue={setSigmaM} />
      </div>
      <div className="grid sm:grid-cols-3 gap-4 mt-4">
        <StatBox label="Estimated Beta (β)" value={isFinite(beta) ? beta.toFixed(2) : "∞"} tone="highlight" />
        <StatBox label="Profile" value={tag} />
        <StatBox label="Rule of Thumb" value="β>1: volatile • β<1: stable" />
      </div>
      <p className="text-xs text-blue-300 mt-2">Real β is typically estimated via regression on historical returns.</p>
    </LessonCard>
  )
}

/* ============= 5️⃣ Alpha Calculator (CAPM) ============= */

function AlphaCalculator() {
  const [rp, setRp] = useState(12) // realized/expected portfolio return
  const [rm, setRm] = useState(10) // market return
  const [rf, setRf] = useState(7) // risk-free
  const [beta, setBeta] = useState(1.1)

  const capm = useMemo(() => rf + beta * (rm - rf), [rf, beta, rm])
  const alpha = useMemo(() => rp - capm, [rp, capm])

  const tone: "default" | "highlight" | "warn" = alpha >= 0 ? "highlight" : "warn"

  return (
    <LessonCard
      title={
        <>
          <Sigma className="h-5 w-5 text-emerald-400 inline-block mr-2" />
          5️⃣ Alpha (α) via CAPM — Value Add vs Risk Taken
        </>
      }
    >
      <div className="grid md:grid-cols-4 gap-4">
        <NumberInput label="Portfolio Return (Rp, %)" value={rp} setValue={setRp} />
        <NumberInput label="Market Return (Rm, %)" value={rm} setValue={setRm} />
        <NumberInput label="Risk-Free (Rf, %)" value={rf} setValue={setRf} />
        <NumberInput label="Beta (β)" value={beta} setValue={setBeta} />
      </div>

      <div className="grid sm:grid-cols-3 gap-4 mt-4">
        <StatBox label="CAPM Expected (Rf + β(Rm − Rf))" value={`${capm.toFixed(2)}%`} />
        <StatBox label="Alpha (α = Rp − CAPM)" value={`${alpha.toFixed(2)}%`} tone={tone} />
        <StatBox label="Interpretation" value={alpha >= 0 ? "Outperformed" : "Underperformed"} />
      </div>
      <p className="text-xs text-blue-300 mt-2">Alpha depends on selected benchmark, period, and data quality.</p>
    </LessonCard>
  )
}

/* ============= 6️⃣ Risk vs Return Visual (Bars) ============= */

function RiskReturnVisual() {
  const [rp, setRp] = useState(12)
  const [rf, setRf] = useState(7)
  const [sigma, setSigma] = useState(14)
  const excess = rp - rf
  const sharpe = sigma === 0 ? Infinity : excess / sigma

  const max = Math.max(rp, excess, sigma)
  const pct = (v: number) => Math.max(5, Math.round((v / (max || 1)) * 100))

  return (
    <LessonCard
      title={
        <>
          <ArrowUpRight className="h-5 w-5 text-amber-400 inline-block mr-2" />
          6️⃣ Visual: Return vs Excess vs Volatility
        </>
      }
    >
      <div className="grid md:grid-cols-3 gap-4">
        <NumberInput label="Portfolio Return (Rp, %)" value={rp} setValue={setRp} />
        <NumberInput label="Risk-Free (Rf, %)" value={rf} setValue={setRf} />
        <NumberInput label="Volatility (σp, %)" value={sigma} setValue={setSigma} />
      </div>

      <div className="mt-5 space-y-3">
        <Bar label="Total Return (Rp)" value={`${rp.toFixed(1)}%`} width={pct(rp)} tone="from-green-600/30 to-emerald-500/30" />
        <Bar label="Excess Return (Rp − Rf)" value={`${excess.toFixed(1)}%`} width={pct(excess)} tone="from-cyan-600/30 to-blue-600/30" />
        <Bar label="Volatility (σp)" value={`${sigma.toFixed(1)}%`} width={pct(sigma)} tone="from-purple-600/30 to-pink-600/30" />
      </div>

      <div className="grid sm:grid-cols-3 gap-4 mt-4">
        <StatBox label="Sharpe" value={isFinite(sharpe) ? sharpe.toFixed(2) : "∞"} tone="highlight" />
        <StatBox label="Signal" value={isFinite(sharpe) ? (sharpe >= 1 ? "Efficient" : "Needs work") : "—"} />
        <StatBox label="Reminder" value="Compare same periods/methods" />
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

/* ============= 7️⃣ Best Practices & Pitfalls ============= */

function BestPractices() {
  return (
    <LessonCard
      title={
        <>
          <Activity className="h-5 w-5 text-green-400 inline-block mr-2" />
          7️⃣ Best Practices & Common Pitfalls
        </>
      }
    >
      <ul className="list-disc list-inside text-sm space-y-2">
        <li>Always compare funds/stocks over the <strong>same period</strong> and <strong>frequency</strong> (daily vs monthly).</li>
        <li>Use a <strong>relevant benchmark</strong> for β/α (category-appropriate).</li>
        <li>Sharpe is sensitive to the chosen <strong>risk-free rate</strong> and time window.</li>
        <li>High α with very high σ may still be unsuitable for many investors.</li>
        <li>Past performance is not indicative of future results — use these as learning tools.</li>
      </ul>
    </LessonCard>
  )
}

/* ============= 8️⃣ Quiz ============= */

function QuizComponent() {
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [score, setScore] = useState(0)

  const quiz = [
    {
      question: "Sharpe Ratio compares:",
      options: [
        "Return vs benchmark return",
        "Excess return vs volatility",
        "Volatility vs beta",
      ],
      correct: "Excess return vs volatility",
    },
    {
      question: "Beta greater than 1 generally means:",
      options: ["Less volatile than market", "More volatile than market", "Unrelated to market"],
      correct: "More volatile than market",
    },
    {
      question: "Alpha (using CAPM) is:",
      options: [
        "Return explained by market movements",
        "Unexplained return beyond CAPM",
        "Risk-free rate",
      ],
      correct: "Unexplained return beyond CAPM",
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
