"use client"

import { useMemo, useState } from "react"
import { motion } from "framer-motion"
import {
  ShieldCheck,
  FileText,
  Landmark,
  Layers,
  BarChart3,
  Activity,
  Calculator,
  Scale,
  ArrowDownUp,
  AlertTriangle,
  CheckCircle,
  XCircle,
  RotateCcw,
  Banknote,
  Receipt,
  Info,
} from "lucide-react"

/**
 * Lesson: Corporate Finance Basics — Balance Sheet, P&L, Cash Flow
 * Level: Advanced (Educational Only — SEBI compliant)
 * File: corporate-finance-basics.tsx
 */

export default function Lesson_CorporateFinanceBasics() {
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
          <FileText className="h-8 w-8 text-cyan-400" />
          Corporate Finance Basics
        </h1>
        <p className="text-blue-200 text-lg">
          Read the three statements together, link profit to cash, and spot strength or stress using ratios & flows.
        </p>
        <Disclaimer />
      </header>

      {/* 1️⃣ The Three Statements */}
      <LessonCard
        icon={<Layers className="h-5 w-5 text-cyan-300" />}
        title="1️⃣ The Three Statements — What Each Tells You"
      >
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <BulletBlock
            icon={<Receipt className="h-4 w-4 text-emerald-300" />}
            title="P&L (Income Statement)"
            items={[
              "Revenue → EBITDA → EBIT → PBT → PAT",
              "Accrual-based, not cash; margins reveal structure",
              "One-year performance snapshot",
            ]}
          />
          <BulletBlock
            icon={<Landmark className="h-4 w-4 text-yellow-300" />}
            title="Balance Sheet"
            items={[
              "Assets = Liabilities + Equity (always balances)",
              "Debt, working capital, net worth, liquidity",
              "Cumulative position at a date (stock, not flow)",
            ]}
          />
          <BulletBlock
            icon={<Banknote className="h-4 w-4 text-rose-300" />}
            title="Cash Flow Statement"
            items={[
              "CFO (core ops), CFI (investing/Capex), CFF (financing)",
              "Bridges PAT to cash using non-cash & WC movements",
              "Quality of earnings lives here",
            ]}
          />
        </div>
      </LessonCard>

      {/* 2️⃣ How They Link */}
      <LessonCard
        icon={<Activity className="h-5 w-5 text-purple-300" />}
        title="2️⃣ Links Across Statements — From PAT to Cash"
      >
        <ul className="list-disc list-inside text-sm space-y-2">
          <li>P&L’s <strong>PAT</strong> + non-cash (<em>depreciation</em>) ± <strong>working capital changes</strong> → <strong>CFO</strong>.</li>
          <li>CFO − <strong>Capex</strong> → <strong>Free Cash Flow (FCF)</strong>; FCF funds debt repayments/dividends.</li>
          <li>Balance Sheet moves (debt, equity, cash) reconcile with CFF and net change in cash.</li>
        </ul>
      </LessonCard>

      {/* 3️⃣ Working Capital Cycle */}
      <WorkingCapitalCycle />

      {/* 4️⃣ Ratio Lab */}
      <RatioLab />

      {/* 5️⃣ DuPont Explorer */}
      <DuPontExplorer />

      {/* 6️⃣ EBITDA vs FCF */}
      <LessonCard
        icon={<Scale className="h-5 w-5 text-amber-300" />}
        title="6️⃣ EBITDA vs Free Cash Flow — Why They Differ"
      >
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div className="bg-white/10 rounded-xl p-4 border border-white/10">
            <p className="font-semibold text-white mb-1">EBITDA (Earnings before I, T, D&A)</p>
            <ul className="list-disc list-inside text-blue-100 space-y-1">
              <li>Proxy for operating performance, ignores capital intensity</li>
              <li>Useful for comparables, valuation multiples (EV/EBITDA)</li>
              <li>Not a cash metric, can mask WC stress</li>
            </ul>
          </div>
          <div className="bg-white/10 rounded-xl p-4 border border-white/10">
            <p className="font-semibold text-white mb-1">FCF (Free Cash Flow)</p>
            <ul className="list-disc list-inside text-blue-100 space-y-1">
              <li>CFO − Maintenance Capex (often used) or CFO − Capex (strict)</li>
              <li>Funds debt payments, dividends, buybacks</li>
              <li>Best gauge of owner earnings over time</li>
            </ul>
          </div>
        </div>
      </LessonCard>

      {/* 7️⃣ Red Flags */}
      <LessonCard
        icon={<AlertTriangle className="h-5 w-5 text-red-400" />}
        title="7️⃣ Red Flags & Quality Checks"
      >
        <ul className="list-disc list-inside text-sm space-y-2">
          <li>PAT up but CFO down for multiple years (earnings not converting to cash).</li>
          <li>Receivable days rising faster than revenue growth (aggressive revenue recognition).</li>
          <li>Frequent equity dilution to fund operations; persistent negative FCF with no clear growth payoff.</li>
          <li>Capex heavy but asset turns declining; capitalized expenses inflating EBITDA.</li>
        </ul>
      </LessonCard>

      {/* 8️⃣ 💬 Quick Quiz (no icon in heading) */}
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

function BulletBlock({
  icon,
  title,
  items,
}: {
  icon: any
  title: string
  items: string[]
}) {
  return (
    <div className="bg-white/10 rounded-xl p-4 border border-white/10">
      <div className="flex items-center gap-2 text-white font-semibold mb-1">
        {icon} {title}
      </div>
      <ul className="list-disc list-inside text-blue-100 space-y-1">
        {items.map((it, i) => (
          <li key={i}>{it}</li>
        ))}
      </ul>
    </div>
  )
}

function NumberInput({
  label,
  value,
  setValue,
  rightHint,
}: {
  label: string
  value: number
  setValue: (n: number) => void
  rightHint?: string
}) {
  return (
    <div className="bg-white/10 rounded-xl p-4 border border-white/10">
      <label className="text-xs text-blue-200 mb-1 block">{label}</label>
      <div className="flex items-center gap-2">
        <input
          type="number"
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

/* ---------------- 3️⃣ Working Capital Cycle ---------------- */

function WorkingCapitalCycle() {
  const [invDays, setInvDays] = useState(60)
  const [recvDays, setRecvDays] = useState(45)
  const [payDays, setPayDays] = useState(30)

  const ccc = invDays + recvDays - payDays

  return (
    <LessonCard
      icon={<ArrowDownUp className="h-5 w-5 text-pink-300" />}
      title="3️⃣ Working Capital Cycle — Cash Conversion"
    >
      <div className="grid md:grid-cols-3 gap-4">
        <NumberInput label="Inventory Days" value={invDays} setValue={setInvDays} rightHint="Lower is better" />
        <NumberInput label="Receivable Days" value={recvDays} setValue={setRecvDays} rightHint="Lower is better" />
        <NumberInput label="Payable Days" value={payDays} setValue={setPayDays} rightHint="Higher can help" />
      </div>
      <div className="grid sm:grid-cols-3 gap-4 mt-4">
        <StatBox label="Cash Conversion Cycle (days)" value={`${ccc.toFixed(0)}`} highlight />
        <StatBox label="Tight WC Policy" value="↓ Inventory, ↓ Receivables, ↑ Payables" />
        <StatBox label="Watch-outs" value="Too high CCC strains CFO" />
      </div>
      <p className="text-xs text-blue-300 mt-2">
        CCC &lt; 0 (negative) is powerful in some business models (e.g., marketplaces, prepayments).
      </p>
    </LessonCard>
  )
}

/* ---------------- 4️⃣ Ratio Lab (Margins, Leverage, Returns) ---------------- */

function RatioLab() {
  // Inputs
  const [revenue, setRevenue] = useState(1000) // ₹ crore
  const [ebitdaMargin, setEbitdaMargin] = useState(20) // %
  const [dep, setDep] = useState(40) // ₹ cr
  const [interest, setInterest] = useState(20) // ₹ cr
  const [taxRate, setTaxRate] = useState(25) // %
  const [assets, setAssets] = useState(1200) // ₹ cr
  const [equity, setEquity] = useState(600) // ₹ cr
  const [debt, setDebt] = useState(400) // ₹ cr

  // Calculations (very simplified, illustrative)
  const ebitda = (revenue * ebitdaMargin) / 100
  const ebit = ebitda - dep
  const pbt = ebit - interest
  const tax = Math.max(0, (pbt * taxRate) / 100)
  const pat = Math.max(0, pbt - tax)
  const netMargin = (pat / revenue) * 100
  const assetTurnover = revenue / assets
  const leverage = (debt + equity) / equity // Assets/Equity proxy
  const roe = (pat / equity) * 100

  return (
    <LessonCard
      icon={<Calculator className="h-5 w-5 text-cyan-300" />}
      title="4️⃣ Ratio Lab — Margins, Returns & Leverage (Illustrative)"
    >
      <div className="grid md:grid-cols-3 gap-4">
        <NumberInput label="Revenue (₹ cr)" value={revenue} setValue={setRevenue} />
        <NumberInput label="EBITDA Margin (%)" value={ebitdaMargin} setValue={setEbitdaMargin} />
        <NumberInput label="Depreciation (₹ cr)" value={dep} setValue={setDep} />
        <NumberInput label="Interest (₹ cr)" value={interest} setValue={setInterest} />
        <NumberInput label="Tax Rate (%)" value={taxRate} setValue={setTaxRate} />
        <NumberInput label="Total Assets (₹ cr)" value={assets} setValue={setAssets} />
        <NumberInput label="Equity (₹ cr)" value={equity} setValue={setEquity} />
        <NumberInput label="Debt (₹ cr)" value={debt} setValue={setDebt} />
      </div>

      <div className="grid md:grid-cols-4 gap-4 mt-4">
        <StatBox label="EBITDA (₹ cr)" value={fmt(ebitda)} />
        <StatBox label="EBIT (₹ cr)" value={fmt(ebit)} />
        <StatBox label="PAT (₹ cr)" value={fmt(pat)} />
        <StatBox label="Net Margin (%)" value={`${netMargin.toFixed(1)}%`} />
      </div>

      <div className="grid md:grid-cols-3 gap-4 mt-4">
        <StatBox label="Asset Turnover (x)" value={assetTurnover.toFixed(2)} />
        <StatBox label="Leverage (Assets/Equity)" value={leverage.toFixed(2)} />
        <StatBox label="ROE (%)" value={`${roe.toFixed(1)}%`} highlight />
      </div>

      <p className="text-xs text-blue-300 mt-2">
        Illustration only; real models include working capital, extraordinary items, minority interest, etc.
      </p>
    </LessonCard>
  )
}

/* ---------------- 5️⃣ DuPont Explorer (ROE Drivers) ---------------- */

function DuPontExplorer() {
  const [netMargin, setNetMargin] = useState(10) // %
  const [assetTurnover, setAssetTurnover] = useState(1.2) // x
  const [leverage, setLeverage] = useState(2.0) // x

  const roe = (netMargin / 100) * assetTurnover * leverage * 100

  return (
    <LessonCard
      icon={<BarChart3 className="h-5 w-5 text-green-300" />}
      title="5️⃣ DuPont Explorer — What Drives ROE?"
    >
      <div className="grid md:grid-cols-3 gap-4">
        <NumberInput label="Net Margin (%)" value={netMargin} setValue={setNetMargin} />
        <NumberInput label="Asset Turnover (x)" value={assetTurnover} setValue={setAssetTurnover} />
        <NumberInput label="Leverage (Assets/Equity)" value={leverage} setValue={setLeverage} />
      </div>
      <div className="grid sm:grid-cols-3 gap-4 mt-4">
        <StatBox label="ROE (DuPont)" value={`${roe.toFixed(1)}%`} highlight />
        <StatBox label="Improve via" value="Margins • Efficiency • Capital Mix" />
        <StatBox label="Caution" value="Excess leverage raises risk" />
      </div>
    </LessonCard>
  )
}

/* ---------------- 8️⃣ 💬 Quick Quiz ---------------- */

function QuizComponent() {
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [score, setScore] = useState(0)

  const quiz = [
    {
      question: "Which item converts PAT to CFO in cash flow?",
      options: ["Dividend", "Depreciation", "Equity infusion", "Capex"],
      correct: "Depreciation",
    },
    {
      question: "Cash Conversion Cycle (CCC) formula is:",
      options: [
        "Receivable + Inventory + Payable",
        "Inventory + Receivable − Payable",
        "Inventory − Receivable + Payable",
        "Receivable − Payable",
      ],
      correct: "Inventory + Receivable − Payable",
    },
    {
      question: "In DuPont, ROE increases when:",
      options: [
        "Net margin falls",
        "Asset turnover improves",
        "Leverage is 0",
        "Revenue stays 0",
      ],
      correct: "Asset turnover improves",
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

/* ---------------- Helpers ---------------- */

function fmt(n: number) {
  return `₹${Math.round(n).toLocaleString("en-IN")}`
}
