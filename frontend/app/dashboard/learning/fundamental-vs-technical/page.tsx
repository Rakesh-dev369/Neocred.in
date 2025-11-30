"use client"

import { useState, useMemo } from "react"
import { motion } from "framer-motion"
import {
  LineChart,
  TrendingUp,
  BarChart2,
  PieChart,
  Calculator,
  BookOpen,
  ShieldCheck,
  CheckCircle,
  XCircle,
  RotateCcw,
  Lightbulb,
  Building2,
  Table,
  Brain,
} from "lucide-react"

/**
 * Lesson: Fundamental vs Technical Analysis (for Stocks)
 * Level: Advanced (SEBI-compliant educational content)
 * File Name: fundamental-vs-technical.tsx
 */

export default function Lesson_FundamentalVsTechnical() {
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
          <LineChart className="h-8 w-8 text-cyan-400" />
          Fundamental vs Technical Analysis (for Stocks)
        </h1>
        <p className="text-blue-200 text-lg">
          Learn how investors evaluate companies vs how traders read price movements — the foundation of market analysis.
        </p>
        <Disclaimer />
      </header>

      {/* 1️⃣ Overview */}
      <LessonCard
        title={
          <>
            <BookOpen className="h-5 w-5 text-emerald-400 inline-block mr-2" />
            1️⃣ What These Two Analyses Mean
          </>
        }
      >
        <p>
          <strong>Fundamental Analysis (FA)</strong> studies a company’s intrinsic value — its financial health,
          business model, and long-term prospects.  
          <strong>Technical Analysis (TA)</strong> studies market behavior — using price patterns, trends, and indicators
          to forecast short-term movements.
        </p>
        <p className="text-blue-200 text-sm mt-2">
          📈 In short: <strong>FA = “What to Buy”</strong> while <strong>TA = “When to Buy/Sell.”</strong>
        </p>
      </LessonCard>

      {/* 2️⃣ Comparison Table */}
      <ComparisonTable />

      {/* 3️⃣ Fundamental Metrics */}
      <FundamentalMetrics />

      {/* 4️⃣ Technical Indicators */}
      <TechnicalIndicators />

      {/* 5️⃣ Case Example */}
      <CaseExample />

      {/* 6️⃣ Interactive Estimator */}
      <IntrinsicValueEstimator />

      {/* 7️⃣ Best Practices */}
      <BestPractices />

      {/* 8️⃣ Quiz */}
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
      Educational only — NeoCred is not a SEBI-registered advisor. Examples are illustrative, not recommendations.
    </p>
  )
}

/* ======================= 2️⃣ Comparison Table ======================= */

function ComparisonTable() {
  const rows = [
    ["Purpose", "Find a stock’s fair/intrinsic value", "Predict short-term price movements"],
    ["Time Horizon", "Long-term (months/years)", "Short-term (minutes/weeks)"],
    ["Focus", "Business, financials, valuation", "Price trends, volume, sentiment"],
    ["Tools", "Balance sheet, ratios, earnings", "Charts, indicators, candlesticks"],
    ["Used By", "Investors, analysts", "Traders, swing investors"],
  ]

  return (
    <LessonCard
      title={
        <>
          <Table className="h-5 w-5 text-cyan-300 inline-block mr-2" />
          2️⃣ Fundamental vs Technical — Quick Comparison
        </>
      }
    >
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-blue-100 border-collapse">
          <thead className="bg-white/10 text-blue-200 text-xs uppercase">
            <tr>
              <th className="p-2 border-b border-white/10 text-left">Aspect</th>
              <th className="p-2 border-b border-white/10 text-left">Fundamental</th>
              <th className="p-2 border-b border-white/10 text-left">Technical</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
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
  )
}

/* ======================= 3️⃣ Fundamental Metrics ======================= */

function FundamentalMetrics() {
  const metrics = [
    { name: "P/E Ratio", desc: "Price-to-Earnings — how much investors pay per ₹ of earnings." },
    { name: "P/B Ratio", desc: "Price-to-Book — compares market value to net asset value." },
    { name: "ROE", desc: "Return on Equity — how efficiently profits are generated from shareholders’ capital." },
    { name: "Debt-Equity", desc: "Measures leverage and financial stability." },
    { name: "EPS Growth", desc: "Consistent earnings growth shows sustainable profitability." },
  ]
  return (
    <LessonCard
      title={
        <>
          <Calculator className="h-5 w-5 text-green-400 inline-block mr-2" />
          3️⃣ Key Fundamental Ratios (Valuation & Profitability)
        </>
      }
    >
      <ul className="list-disc list-inside text-sm space-y-1">
        {metrics.map((m, i) => (
          <li key={i}>
            <strong>{m.name}:</strong> {m.desc}
          </li>
        ))}
      </ul>
      <p className="text-xs text-blue-300 mt-2">
        Example: If a stock trades at ₹500 and EPS is ₹25 → P/E = 20× (investors paying 20 times its earnings).
      </p>
    </LessonCard>
  )
}

/* ======================= 4️⃣ Technical Indicators ======================= */

function TechnicalIndicators() {
  const indicators = [
    { name: "Moving Averages (SMA/EMA)", desc: "Show trend direction and support/resistance zones." },
    { name: "RSI (Relative Strength Index)", desc: "Measures overbought/oversold levels (range: 0–100)." },
    { name: "MACD", desc: "Tracks momentum shifts using two moving averages." },
    { name: "Volume Analysis", desc: "Confirms price strength — high volume = strong conviction." },
    { name: "Candlestick Patterns", desc: "Reveal trader psychology (Doji, Hammer, Engulfing, etc.)." },
  ]

  return (
    <LessonCard
      title={
        <>
          <BarChart2 className="h-5 w-5 text-orange-400 inline-block mr-2" />
          4️⃣ Common Technical Indicators
        </>
      }
    >
      <ul className="list-disc list-inside text-sm space-y-1">
        {indicators.map((i, idx) => (
          <li key={idx}>
            <strong>{i.name}:</strong> {i.desc}
          </li>
        ))}
      </ul>
      <p className="text-xs text-blue-300 mt-2">
        Traders combine multiple indicators to confirm entry/exit signals. Example: RSI &lt; 30 + price near 200-day EMA may indicate oversold zone.
      </p>
    </LessonCard>
  )
}

/* ======================= 5️⃣ Case Example ======================= */

function CaseExample() {
  return (
    <LessonCard
      title={
        <>
          <Building2 className="h-5 w-5 text-amber-400 inline-block mr-2" />
          5️⃣ Example: Comparing Two Companies
        </>
      }
    >
      <p>
        Suppose two companies — <strong>Alpha Motors</strong> and <strong>Beta Auto</strong> — trade at similar prices.
        But Alpha has better margins and lower debt. Fundamental analysis may rate Alpha as “stronger,” while technical
        charts could still show Beta trending upward short-term.
      </p>
      <div className="grid sm:grid-cols-2 gap-3 mt-3 text-sm">
        <div className="rounded-xl p-4 border border-white/10 bg-white/10">
          <p className="text-white font-semibold">Alpha Motors (FA view)</p>
          <ul className="list-disc list-inside text-blue-100 space-y-1">
            <li>EPS Growth: +18% YoY</li>
            <li>Debt/Equity: 0.4</li>
            <li>P/E: 15×</li>
          </ul>
        </div>
        <div className="rounded-xl p-4 border border-white/10 bg-white/10">
          <p className="text-white font-semibold">Beta Auto (TA view)</p>
          <ul className="list-disc list-inside text-blue-100 space-y-1">
            <li>RSI: 40 → Recovering from oversold</li>
            <li>Price crossed 50-day EMA upward</li>
            <li>High trading volume breakout</li>
          </ul>
        </div>
      </div>
    </LessonCard>
  )
}

/* ======================= 6️⃣ Intrinsic Value Estimator ======================= */

function IntrinsicValueEstimator() {
  const [eps, setEps] = useState(20)
  const [pe, setPe] = useState(18)
  const [growth, setGrowth] = useState(10)
  const [years, setYears] = useState(5)

  const projectedEPS = eps * Math.pow(1 + growth / 100, years)
  const futurePrice = projectedEPS * pe
  const intrinsic = futurePrice / Math.pow(1.1, years)

  return (
    <LessonCard
      title={
        <>
          <Calculator className="h-5 w-5 text-cyan-400 inline-block mr-2" />
          6️⃣ Intrinsic Value Estimator (Simplified)
        </>
      }
    >
      <div className="grid md:grid-cols-4 gap-4">
        <NumberInput label="EPS (₹)" value={eps} setValue={setEps} />
        <NumberInput label="P/E Ratio" value={pe} setValue={setPe} />
        <NumberInput label="Growth Rate (%)" value={growth} setValue={setGrowth} />
        <NumberInput label="Years" value={years} setValue={setYears} />
      </div>
      <div className="mt-4 grid sm:grid-cols-3 gap-4">
        <StatBox label="Projected EPS" value={`₹${projectedEPS.toFixed(2)}`} />
        <StatBox label="Future Price Estimate" value={`₹${futurePrice.toFixed(0)}`} highlight />
        <StatBox label="Intrinsic Value (10% discount rate)" value={`₹${intrinsic.toFixed(0)}`} />
      </div>
      <p className="text-xs text-blue-300 mt-2">
        Note: Simplified DCF-style model for learning purposes — not a valuation recommendation.
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

function StatBox({ label, value, highlight = false }: any) {
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

/* ======================= 7️⃣ Best Practices ======================= */

function BestPractices() {
  return (
    <LessonCard
      title={
        <>
          <Lightbulb className="h-5 w-5 text-green-400 inline-block mr-2" />
          7️⃣ Best Practices for Analysis
        </>
      }
    >
      <ul className="list-disc list-inside text-sm space-y-1">
        <li>Use both analyses together — FA to shortlist quality stocks, TA to time entries/exits.</li>
        <li>Never rely on a single metric; context is key (compare within same sector).</li>
        <li>Back-test technical strategies before applying with real money.</li>
        <li>Stay updated on quarterly results, management commentary, and macro trends.</li>
        <li>Always focus on risk management and position sizing.</li>
      </ul>
    </LessonCard>
  )
}

/* ======================= 8️⃣ Quiz ======================= */

function QuizComponent() {
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [score, setScore] = useState(0)

  const quiz = [
    {
      question: "Fundamental Analysis mainly focuses on:",
      options: ["Stock prices", "Company’s financials & intrinsic value", "Chart indicators"],
      correct: "Company’s financials & intrinsic value",
    },
    {
      question: "Which indicator measures momentum in Technical Analysis?",
      options: ["RSI", "ROE", "Debt-Equity"],
      correct: "RSI",
    },
    {
      question: "What’s the ideal combination for informed investing?",
      options: ["Only TA", "Only FA", "Both FA + TA"],
      correct: "Both FA + TA",
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
                className={[
                  "w-full text-left px-4 py-2 rounded-lg border mb-2 transition-all",
                  isSelected
                    ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white border-transparent"
                    : "bg-white/10 hover:bg-white/20 border-white/10",
                  submitted && isCorrect ? "border-green-400 bg-green-500/10" : "",
                  submitted && isSelected && !isCorrect ? "border-red-400 bg-red-500/10" : ""
                ].filter(Boolean).join(" ")}
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
