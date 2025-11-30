"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Calculator,
  TrendingUp,
  BarChart3,
  PieChart,
  BookOpen,
  ShieldCheck,
  CheckCircle,
  XCircle,
  RotateCcw,
  Table,
  Lightbulb,
  Building2,
  IndianRupee,
} from "lucide-react"

/**
 * Lesson: Valuation Ratios (PE, PB, ROE, EPS, Debt-Equity)
 * Level: Advanced (Educational Only — SEBI-compliant)
 * File Name: valuation-ratios.tsx
 */

export default function Lesson_ValuationRatios() {
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
          <BarChart3 className="h-8 w-8 text-cyan-400" />
          Valuation Ratios — P/E, P/B, ROE, EPS, Debt-Equity
        </h1>
        <p className="text-blue-200 text-lg">
          Understand how analysts measure company value, profitability, and risk before investing — the core of
          fundamental analysis.
        </p>
        <Disclaimer />
      </header>

      {/* 1️⃣ Introduction */}
      <LessonCard
        title={
          <>
            <BookOpen className="h-5 w-5 text-emerald-400 inline-block mr-2" />
            1️⃣ What Are Valuation Ratios?
          </>
        }
      >
        <p>
          <strong>Valuation ratios</strong> help investors determine whether a company’s stock is <em>fairly priced</em>,
          <em>overvalued</em>, or <em>undervalued</em> based on its earnings, assets, and financial strength.
        </p>
        <p className="text-blue-200 text-sm mt-2">
          These ratios are essential tools in <strong>Fundamental Analysis</strong> and used by analysts, mutual fund
          managers, and value investors to compare companies across sectors.
        </p>
      </LessonCard>

      {/* 2️⃣ Table Overview */}
      <ValuationTable />

      {/* 3️⃣ P/E Ratio */}
      <PERatio />

      {/* 4️⃣ P/B Ratio */}
      <PBRatio />

      {/* 5️⃣ ROE & EPS */}
      <ROEandEPS />

      {/* 6️⃣ Debt-Equity */}
      <DebtEquityRatio />

      {/* 7️⃣ Comparison Calculator */}
      <ValuationCalculator />

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
      Educational only — NeoCred is not a SEBI-registered advisor. Examples are for learning, not investment
      recommendations.
    </p>
  )
}

/* ======================= 2️⃣ Valuation Table ======================= */

function ValuationTable() {
  const rows = [
    ["P/E Ratio", "Price ÷ Earnings per Share (EPS)", "How much investors pay for ₹1 of earnings"],
    ["P/B Ratio", "Price ÷ Book Value per Share", "Compares market value to company’s net assets"],
    ["ROE", "Net Profit ÷ Shareholders’ Equity", "Profitability measure — efficiency of equity capital"],
    ["EPS", "Net Profit ÷ Total Shares", "Earnings generated per share — a growth indicator"],
    ["Debt-Equity", "Total Debt ÷ Shareholders’ Equity", "Financial leverage — lower is better for stability"],
  ]

  return (
    <LessonCard
      title={
        <>
          <Table className="h-5 w-5 text-cyan-300 inline-block mr-2" />
          2️⃣ Key Ratios Overview
        </>
      }
    >
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-blue-100 border-collapse">
          <thead className="bg-white/10 text-blue-200 text-xs uppercase">
            <tr>
              <th className="p-2 border-b border-white/10 text-left">Ratio</th>
              <th className="p-2 border-b border-white/10 text-left">Formula</th>
              <th className="p-2 border-b border-white/10 text-left">Purpose</th>
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

/* ======================= 3️⃣ P/E Ratio ======================= */

function PERatio() {
  return (
    <LessonCard
      title={
        <>
          <TrendingUp className="h-5 w-5 text-green-400 inline-block mr-2" />
          3️⃣ P/E Ratio — Price to Earnings
        </>
      }
    >
      <p>
        <strong>P/E Ratio = Price ÷ Earnings Per Share (EPS)</strong>
      </p>
      <p className="text-blue-200 text-sm mt-2">
        Indicates how much investors are willing to pay for ₹1 of a company’s earnings. A high P/E may suggest optimism,
        growth expectation, or overvaluation — depending on context.
      </p>
      <p className="text-xs text-blue-300 mt-2">
        Example: If stock price = ₹500 and EPS = ₹25, then P/E = 20×.
      </p>
    </LessonCard>
  )
}

/* ======================= 4️⃣ P/B Ratio ======================= */

function PBRatio() {
  return (
    <LessonCard
      title={
        <>
          <PieChart className="h-5 w-5 text-purple-400 inline-block mr-2" />
          4️⃣ P/B Ratio — Price to Book Value
        </>
      }
    >
      <p>
        <strong>P/B Ratio = Price ÷ (Total Assets − Liabilities) per Share</strong>
      </p>
      <p className="text-blue-200 text-sm mt-2">
        Measures how the market values the company compared to its net assets.  
        P/B &lt; 1 may signal undervaluation; however, asset-heavy industries (like banks) have naturally higher P/B.
      </p>
      <p className="text-xs text-blue-300 mt-2">Used heavily for banks, NBFCs, and manufacturing companies.</p>
    </LessonCard>
  )
}

/* ======================= 5️⃣ ROE & EPS ======================= */

function ROEandEPS() {
  return (
    <LessonCard
      title={
        <>
          <Building2 className="h-5 w-5 text-orange-400 inline-block mr-2" />
          5️⃣ ROE & EPS — Profitability Metrics
        </>
      }
    >
      <p>
        <strong>ROE (Return on Equity)</strong> = Net Profit ÷ Shareholders’ Equity.  
        Reflects how efficiently management generates returns from the shareholders’ capital.
      </p>
      <p>
        <strong>EPS (Earnings per Share)</strong> = Net Profit ÷ Total Shares.  
        Indicates profit attributable to each share — a key metric for growth comparison.
      </p>
      <p className="text-xs text-blue-300 mt-2">
        Example: Net Profit ₹100 crore, 5 crore shares → EPS = ₹20, ROE = 18%.
      </p>
    </LessonCard>
  )
}

/* ======================= 6️⃣ Debt-Equity Ratio ======================= */

function DebtEquityRatio() {
  return (
    <LessonCard
      title={
        <>
          <IndianRupee className="h-5 w-5 text-yellow-400 inline-block mr-2" />
          6️⃣ Debt-Equity Ratio — Financial Leverage
        </>
      }
    >
      <p>
        <strong>Debt-Equity Ratio = Total Debt ÷ Shareholders’ Equity</strong>
      </p>
      <p className="text-blue-200 text-sm mt-2">
        Indicates how much debt a company uses to finance its assets.  
        A ratio above 2× may signal higher risk or aggressive financing, while a ratio below 1× is generally stable.
      </p>
      <p className="text-xs text-blue-300 mt-2">
        Example: Total Debt ₹200 crore, Equity ₹150 crore → D/E = 1.33×
      </p>
    </LessonCard>
  )
}

/* ======================= 7️⃣ Comparison Calculator ======================= */

function ValuationCalculator() {
  const [price, setPrice] = useState(500)
  const [eps, setEps] = useState(25)
  const [book, setBook] = useState(250)
  const [debt, setDebt] = useState(150)
  const [equity, setEquity] = useState(100)

  const pe = price / eps
  const pb = price / book
  const de = debt / equity

  return (
    <LessonCard
      title={
        <>
          <Calculator className="h-5 w-5 text-cyan-400 inline-block mr-2" />
          7️⃣ Valuation Ratio Calculator (Interactive)
        </>
      }
    >
      <div className="grid md:grid-cols-5 gap-4">
        <NumberInput label="Price (₹)" value={price} setValue={setPrice} />
        <NumberInput label="EPS" value={eps} setValue={setEps} />
        <NumberInput label="Book Value" value={book} setValue={setBook} />
        <NumberInput label="Total Debt (₹ Cr)" value={debt} setValue={setDebt} />
        <NumberInput label="Equity (₹ Cr)" value={equity} setValue={setEquity} />
      </div>

      <div className="grid sm:grid-cols-3 gap-4 mt-4">
        <StatBox label="P/E Ratio" value={`${pe.toFixed(2)}×`} highlight />
        <StatBox label="P/B Ratio" value={`${pb.toFixed(2)}×`} />
        <StatBox label="Debt-Equity" value={`${de.toFixed(2)}×`} />
      </div>
      <p className="text-xs text-blue-300 mt-2">
        Use these values only to learn how ratios interact — they don’t imply buy/sell decisions.
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

/* ======================= 8️⃣ Quiz ======================= */

function QuizComponent() {
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [score, setScore] = useState(0)

  const quiz = [
    {
      question: "What does a P/E Ratio of 20× mean?",
      options: [
        "Investors pay ₹20 for every ₹1 of earnings",
        "Company debt is 20× equity",
        "Stock is undervalued by 20%",
      ],
      correct: "Investors pay ₹20 for every ₹1 of earnings",
    },
    {
      question: "Which ratio indicates financial leverage?",
      options: ["P/B", "Debt-Equity", "EPS"],
      correct: "Debt-Equity",
    },
    {
      question: "ROE shows:",
      options: [
        "Return generated on shareholders’ equity",
        "Debt level of company",
        "Price trend of stock",
      ],
      correct: "Return generated on shareholders’ equity",
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
