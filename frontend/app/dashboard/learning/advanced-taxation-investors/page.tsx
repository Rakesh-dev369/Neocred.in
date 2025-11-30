"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  ShieldCheck,
  Calculator,
  BarChart3,
  Table,
  FileText,
  IndianRupee,
  TrendingUp,
  Info,
  CheckCircle,
  XCircle,
  RotateCcw,
} from "lucide-react"

/**
 * Lesson: Advanced Taxation for Investors — LTCG, STCG, Indexation Benefits
 * Level: Advanced (Educational Only)
 * File: advanced-taxation-investors.tsx
 */

export default function Lesson_AdvancedTaxationInvestors() {
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
          <FileText className="h-8 w-8 text-cyan-400" />
          Advanced Taxation for Investors
        </h1>
        <p className="text-blue-200 text-lg">
          Understand how different investment instruments are taxed — and how to optimize your post-tax returns.
        </p>
        <Disclaimer />
      </header>

      {/* 1️⃣ Taxation Overview */}
      <LessonCard title={<><Info className="h-5 w-5 text-emerald-400 inline-block mr-2" />1️⃣ Taxation of Capital Gains — The Basics</>}>
        <ul className="list-disc list-inside text-sm space-y-2">
          <li>
            <strong>Capital Gain</strong> = Sale Value − Purchase Cost (after considering indexation, if applicable).
          </li>
          <li>
            <strong>Short-Term Capital Gain (STCG):</strong> gains on assets held for a short period (less than 1–3 years, depending on asset type).
          </li>
          <li>
            <strong>Long-Term Capital Gain (LTCG):</strong> gains on assets held beyond the specified period, often eligible for lower tax rates.
          </li>
        </ul>
        <p className="text-xs text-blue-300 mt-2">
          The holding period varies by asset class — equity, debt, gold, property, or mutual funds.
        </p>
      </LessonCard>

      {/* 2️⃣ Asset-Wise Holding Periods */}
      <HoldingPeriodTable />

      {/* 3️⃣ Capital Gains Tax Rates */}
      <TaxRatesTable />

      {/* 4️⃣ Indexation Benefit */}
      <IndexationCalculator />

      {/* 5️⃣ Dividend & Interest Taxation */}
      <LessonCard title={<><TrendingUp className="h-5 w-5 text-green-400 inline-block mr-2" />5️⃣ Dividend & Interest Income — How They're Taxed</>}>
        <ul className="list-disc list-inside text-sm space-y-2">
          <li>Dividends are now taxable in the hands of investors as per their income slab.</li>
          <li>Interest on FDs, Bonds, and Savings accounts is added to total income and taxed at slab rates.</li>
          <li>
            Use <strong>Form 26AS / AIS</strong> to verify TDS credits (banks deduct 10% TDS on FD interest if PAN is provided).
          </li>
        </ul>
      </LessonCard>

      {/* 6️⃣ Tax Optimization Strategies */}
      <LessonCard title={<><ShieldCheck className="h-5 w-5 text-blue-400 inline-block mr-2" />6️⃣ Tax Optimization Tips (Legally)</>}>
        <ul className="list-disc list-inside text-sm space-y-2">
          <li>Hold equity investments for 12+ months to qualify for LTCG (10% tax on gains above ₹1 lakh).</li>
          <li>In debt funds or bonds, use indexation (if eligible) to reduce taxable gains.</li>
          <li>Use <strong>harvesting strategies</strong> — book small gains each year to utilize the ₹1L LTCG exemption.</li>
          <li>Offset STCG/LTCG with eligible <strong>capital losses</strong> to reduce taxable income.</li>
        </ul>
      </LessonCard>

      {/* 7️⃣ Quiz */}
      <QuizComponent />
    </motion.section>
  )
}

/* ---------------- Components ---------------- */

function LessonCard({ title, children }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
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
      Educational only — NeoCred is not a SEBI-registered tax or investment advisor.
    </p>
  )
}

/* ========== 2️⃣ Holding Period Table ========== */
function HoldingPeriodTable() {
  const rows = [
    ["Equity Shares / Equity MF", "≤ 12 months", "> 12 months", "STCG @15%", "LTCG @10% (>₹1L)"],
    ["Debt Mutual Fund", "≤ 36 months", "> 36 months", "STCG @slab", "LTCG @20% with indexation"],
    ["Gold / Bonds / Property", "≤ 36 months", "> 36 months", "STCG @slab", "LTCG @20% with indexation"],
    ["Listed Bonds", "≤ 12 months", "> 12 months", "STCG @slab", "LTCG @10% (no indexation)"],
  ]
  return (
    <LessonCard title={<><Table className="h-5 w-5 text-cyan-400 inline-block mr-2" />2️⃣ Asset-Wise Holding Periods & Tax Treatment</>}>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse text-blue-100">
          <thead className="bg-white/10 text-blue-200 text-xs uppercase">
            <tr>
              <th className="p-2 text-left">Asset Class</th>
              <th className="p-2 text-left">Short-Term</th>
              <th className="p-2 text-left">Long-Term</th>
              <th className="p-2 text-left">STCG Tax</th>
              <th className="p-2 text-left">LTCG Tax</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className="border-b border-white/10">
                {r.map((cell, j) => (
                  <td key={j} className="p-2">{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </LessonCard>
  )
}

/* ========== 3️⃣ Tax Rates Table ========== */
function TaxRatesTable() {
  const rows = [
    ["Equity STCG (Sec 111A)", "15%"],
    ["Equity LTCG (above ₹1L)", "10% (no indexation)"],
    ["Debt LTCG", "20% with indexation"],
    ["Real Estate LTCG", "20% with indexation"],
    ["Other Income (Div/Interest)", "Taxed at slab rate"],
  ]
  return (
    <LessonCard title={<><BarChart3 className="h-5 w-5 text-purple-400 inline-block mr-2" />3️⃣ Key Capital Gains Tax Rates (FY 2025–26)</>}>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse text-blue-100">
          <thead className="bg-white/10 text-blue-200 text-xs uppercase">
            <tr>
              <th className="p-2 text-left">Category</th>
              <th className="p-2 text-left">Tax Rate</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className="border-b border-white/10">
                <td className="p-2 text-white font-medium">{r[0]}</td>
                <td className="p-2">{r[1]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </LessonCard>
  )
}

/* ========== 4️⃣ Indexation Calculator ========== */
function IndexationCalculator() {
  const [cost, setCost] = useState(200000)
  const [buyCII, setBuyCII] = useState(280)
  const [sellCII, setSellCII] = useState(348)
  const [sale, setSale] = useState(400000)

  const indexedCost = (cost * sellCII) / buyCII
  const gain = sale - indexedCost
  const tax = gain * 0.2
  const savings = sale - cost - tax

  return (
    <LessonCard title={<><Calculator className="h-5 w-5 text-orange-400 inline-block mr-2" />4️⃣ Indexation Calculator — Adjust Cost for Inflation</>}>
      <div className="grid md:grid-cols-4 gap-4">
        <InputBox label="Purchase Price (₹)" value={cost} setValue={setCost} />
        <InputBox label="CII at Purchase" value={buyCII} setValue={setBuyCII} />
        <InputBox label="CII at Sale" value={sellCII} setValue={setSellCII} />
        <InputBox label="Sale Price (₹)" value={sale} setValue={setSale} />
      </div>
      <div className="grid sm:grid-cols-3 gap-4 mt-4">
        <StatBox label="Indexed Cost" value={`₹${indexedCost.toFixed(0)}`} />
        <StatBox label="Taxable LTCG" value={`₹${gain.toFixed(0)}`} />
        <StatBox label="Post-Tax Gain (approx)" value={`₹${savings.toFixed(0)}`} />
      </div>
      <p className="text-xs text-blue-300 mt-2">
        Note: CII (Cost Inflation Index) is notified yearly by the CBDT. It adjusts purchase cost to inflation — reducing taxable gain.
      </p>
    </LessonCard>
  )
}

function InputBox({ label, value, setValue }: any) {
  return (
    <div className="bg-white/10 rounded-xl p-4 border border-white/10">
      <label className="text-xs text-blue-200 mb-1 flex items-center gap-2">
        <IndianRupee className="h-4 w-4 text-cyan-300" /> {label}
      </label>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="w-full p-2 rounded-lg bg-white/20 border border-white/10 text-white outline-none"
      />
    </div>
  )
}

function StatBox({ label, value }: any) {
  return (
    <div className="rounded-xl p-4 border border-white/10 bg-white/10">
      <div className="text-[11px] uppercase tracking-wide text-blue-200">{label}</div>
      <div className="text-white font-semibold text-lg">{value}</div>
    </div>
  )
}

/* ========== 7️⃣ Quiz ========== */
function QuizComponent() {
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [score, setScore] = useState(0)

  const quiz = [
    {
      question: "LTCG on equity mutual funds is taxed at:",
      options: ["10% above ₹1 lakh", "20% flat", "15% slab rate"],
      correct: "10% above ₹1 lakh",
    },
    {
      question: "Indexation benefit is available for:",
      options: ["Equity MFs", "Debt MFs (eligible)", "Dividends"],
      correct: "Debt MFs (eligible)",
    },
    {
      question: "Short-term capital gains on equity are taxed at:",
      options: ["15%", "20%", "Slab rate"],
      correct: "15%",
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
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center space-y-3"
          >
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
