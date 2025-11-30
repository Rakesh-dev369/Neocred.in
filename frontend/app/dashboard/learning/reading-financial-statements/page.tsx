"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  BarChart2,
  FileText,
  Building2,
  PieChart,
  Calculator,
  ShieldCheck,
  CheckCircle,
  XCircle,
  RotateCcw,
  Table,
  Lightbulb,
  IndianRupee,
  LineChart,
  ScrollText,
} from "lucide-react"

/**
 * Lesson: Reading Financial Statements — Case Study (Indian Companies)
 * Level: Advanced (Educational Only — SEBI-compliant)
 * File Name: reading-financial-statements.tsx
 */

export default function Lesson_ReadingFinancialStatements() {
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
          <FileText className="h-9 w-9 text-cyan-400" />
          Reading Financial Statements — Case Study (Indian Companies)
        </h1>
        <p className="text-blue-200 text-lg">
          Learn how to interpret a company’s Balance Sheet, Profit & Loss, and Cash Flow statements — using Indian
          corporate examples.
        </p>
        <Disclaimer />
      </header>

      {/* 1️⃣ What Are Financial Statements */}
      <LessonCard
        title={
          <>
            <ScrollText className="h-5 w-5 text-emerald-400 inline-block mr-2" />
            1️⃣ What Are Financial Statements?
          </>
        }
      >
        <p>
          Financial statements show the <strong>financial health and performance</strong> of a company. They include:
        </p>
        <ul className="list-disc list-inside text-sm mt-2 space-y-1">
          <li>
            <strong>Balance Sheet</strong> — What the company <em>owns and owes</em>.
          </li>
          <li>
            <strong>Profit & Loss Statement</strong> — How much it <em>earned or lost</em> in a period.
          </li>
          <li>
            <strong>Cash Flow Statement</strong> — How much <em>cash moved</em> in and out of the business.
          </li>
        </ul>
        <p className="text-xs text-blue-300 mt-2">
          Together, they reveal profitability, liquidity, leverage, and efficiency.
        </p>
      </LessonCard>

      {/* 2️⃣ Case Study Overview */}
      <CaseStudyIntro />

      {/* 3️⃣ Balance Sheet Breakdown */}
      <BalanceSheetBreakdown />

      {/* 4️⃣ P&L Highlights */}
      <ProfitLossHighlights />

      {/* 5️⃣ Cash Flow Summary */}
      <CashFlowSummary />

      {/* 6️⃣ Ratio Insights */}
      <RatioInsights />

      {/* 7️⃣ Interpretation Guide */}
      <InterpretationGuide />

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
      Educational use only — NeoCred is not SEBI-registered. Case data is simplified from public information.
    </p>
  )
}

/* ======================= 2️⃣ Case Study Overview ======================= */

function CaseStudyIntro() {
  return (
    <LessonCard
      title={
        <>
          <Building2 className="h-5 w-5 text-cyan-400 inline-block mr-2" />
          2️⃣ Case Study: Infosys, HDFC Bank & Maruti Suzuki (FY 2024)
        </>
      }
    >
      <p>
        These examples illustrate how financial statements reflect real business fundamentals.  
        Values are rounded/simplified for clarity.
      </p>
      <div className="overflow-x-auto mt-4">
        <table className="w-full text-sm border-collapse text-blue-100">
          <thead className="bg-white/10 text-blue-200 text-xs uppercase">
            <tr>
              <th className="p-2 border-b border-white/10 text-left">Company</th>
              <th className="p-2 border-b border-white/10 text-left">Revenue (₹ Cr)</th>
              <th className="p-2 border-b border-white/10 text-left">Net Profit (₹ Cr)</th>
              <th className="p-2 border-b border-white/10 text-left">Debt-Equity</th>
              <th className="p-2 border-b border-white/10 text-left">ROE</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-white/10">
              <td className="p-2 text-white font-semibold">Infosys</td>
              <td className="p-2">1,52,000</td>
              <td className="p-2">26,000</td>
              <td className="p-2">0.05×</td>
              <td className="p-2">29%</td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="p-2 text-white font-semibold">HDFC Bank</td>
              <td className="p-2">2,10,000</td>
              <td className="p-2">45,000</td>
              <td className="p-2">1.4×</td>
              <td className="p-2">18%</td>
            </tr>
            <tr>
              <td className="p-2 text-white font-semibold">Maruti Suzuki</td>
              <td className="p-2">1,40,000</td>
              <td className="p-2">13,000</td>
              <td className="p-2">0.1×</td>
              <td className="p-2">17%</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-xs text-blue-300 mt-2">
        These figures show scale, profitability, and leverage differences across industries.
      </p>
    </LessonCard>
  )
}

/* ======================= 3️⃣ Balance Sheet Breakdown ======================= */

function BalanceSheetBreakdown() {
  return (
    <LessonCard
      title={
        <>
          <Table className="h-5 w-5 text-green-400 inline-block mr-2" />
          3️⃣ Balance Sheet — What the Company Owns and Owes
        </>
      }
    >
      <p>The Balance Sheet has three core parts:</p>
      <ul className="list-disc list-inside text-sm mt-2 space-y-1">
        <li>
          <strong>Assets:</strong> Cash, receivables, inventory, investments, and property.
        </li>
        <li>
          <strong>Liabilities:</strong> Loans, payables, short-term and long-term debt.
        </li>
        <li>
          <strong>Equity:</strong> Share capital + reserves (Assets − Liabilities).
        </li>
      </ul>
      <p className="text-xs text-blue-300 mt-2">
        Formula: <strong>Assets = Liabilities + Shareholders’ Equity</strong>
      </p>
    </LessonCard>
  )
}

/* ======================= 4️⃣ Profit & Loss Highlights ======================= */

function ProfitLossHighlights() {
  return (
    <LessonCard
      title={
        <>
          <LineChart className="h-5 w-5 text-orange-400 inline-block mr-2" />
          4️⃣ Profit & Loss Statement — How the Business Earns
        </>
      }
    >
      <p>
        Shows income and expenses during a period. Key metrics include <strong>Revenue, EBITDA, EBIT, PBT, and PAT</strong>.
      </p>
      <ul className="list-disc list-inside text-sm mt-2 space-y-1">
        <li>
          <strong>Revenue Growth</strong> — Infosys grew 5%, Maruti 8%, HDFC Bank 18% YoY.
        </li>
        <li>
          <strong>Net Profit Margin</strong> = Net Profit ÷ Revenue — ranged from 9% to 21%.
        </li>
        <li>
          <strong>EBITDA Margin</strong> shows operational efficiency before interest and depreciation.
        </li>
      </ul>
      <p className="text-xs text-blue-300 mt-2">
        High margins + consistent growth = financially resilient business.
      </p>
    </LessonCard>
  )
}

/* ======================= 5️⃣ Cash Flow Summary ======================= */

function CashFlowSummary() {
  const rows = [
    ["Operating", "Cash from core operations — collections, expenses", "Positive cash indicates healthy business"],
    ["Investing", "Buying/selling assets or investments", "Negative cash is fine if investing for growth"],
    ["Financing", "Raising debt/equity or paying dividends", "Outflow shows repayment or dividends paid"],
  ]
  return (
    <LessonCard
      title={
        <>
          <PieChart className="h-5 w-5 text-purple-400 inline-block mr-2" />
          5️⃣ Cash Flow Statement — Real Money Movement
        </>
      }
    >
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-blue-100 border-collapse">
          <thead className="bg-white/10 text-blue-200 text-xs uppercase">
            <tr>
              <th className="p-2 border-b border-white/10 text-left">Type</th>
              <th className="p-2 border-b border-white/10 text-left">Meaning</th>
              <th className="p-2 border-b border-white/10 text-left">Interpretation</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className="border-b border-white/10">
                <td className="p-2 text-white font-semibold">{r[0]}</td>
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

/* ======================= 6️⃣ Ratio Insights ======================= */

function RatioInsights() {
  return (
    <LessonCard
      title={
        <>
          <Calculator className="h-5 w-5 text-cyan-400 inline-block mr-2" />
          6️⃣ Key Ratios for Interpretation
        </>
      }
    >
      <ul className="list-disc list-inside text-sm mt-2 space-y-1">
        <li>
          <strong>Current Ratio</strong> = Current Assets ÷ Current Liabilities → Liquidity measure.
        </li>
        <li>
          <strong>Debt-Equity</strong> → Financial leverage; HDFC Bank = 1.4×, Infosys = 0.05×.
        </li>
        <li>
          <strong>ROE</strong> → Profitability from equity; above 15% often considered healthy.
        </li>
        <li>
          <strong>Net Margin</strong> = Net Profit ÷ Revenue → Operational efficiency.
        </li>
      </ul>
    </LessonCard>
  )
}

/* ======================= 7️⃣ Interpretation Guide ======================= */

function InterpretationGuide() {
  return (
    <LessonCard
      title={
        <>
          <Lightbulb className="h-5 w-5 text-green-400 inline-block mr-2" />
          7️⃣ How to Read It All Together
        </>
      }
    >
      <ul className="list-disc list-inside text-sm mt-2 space-y-1">
        <li>
          Always read <strong>Balance Sheet + P&L + Cash Flow</strong> together — one without the other is incomplete.
        </li>
        <li>Compare YoY growth, margins, and debt movement for trends.</li>
        <li>Look for consistency over 3–5 years, not one good quarter.</li>
        <li>Match reported numbers with management commentary in annual reports.</li>
        <li>Use ratios to identify strengths, not just valuations.</li>
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
      question: "What does the Balance Sheet show?",
      options: [
        "Cash inflows and outflows",
        "Assets, Liabilities, and Equity at a point in time",
        "Profit during a year",
      ],
      correct: "Assets, Liabilities, and Equity at a point in time",
    },
    {
      question: "Which section reflects a company’s operational efficiency?",
      options: ["EBITDA Margin in P&L", "Debt in Balance Sheet", "Dividend in Cash Flow"],
      correct: "EBITDA Margin in P&L",
    },
    {
      question: "What’s a sign of financial health?",
      options: ["Consistent positive operating cash flow", "High debt & low profit", "Volatile margins"],
      correct: "Consistent positive operating cash flow",
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
