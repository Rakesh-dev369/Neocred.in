"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import {
  Globe2,
  LineChart,
  BarChart3,
  Landmark,
  Building2,
  Wallet,
  ShieldCheck,
  Scale,
  Banknote,
  Contact,
  Target,
  CheckCircle,
  XCircle,
  RotateCcw,
} from "lucide-react"

/**
 * Lesson: Global Investing — ETFs, International Funds, Direct Stocks, Index Funds, Foreign Bonds
 * Level: Advanced (Educational Only; SEBI-compliant)
 * File: global-investing/page.tsx
 */

type VehicleKey = "IntlMF" | "IntlETF" | "DirectStocks" | "GlobalIndex" | "ForeignBonds"

export default function Lesson_GlobalInvesting() {
  const [selected, setSelected] = useState<VehicleKey>("IntlMF")

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-6xl mx-auto space-y-10 text-blue-50"
    >
      {/* Header */}
      <header className="text-center space-y-3">
        <h1 className="text-3xl sm:text-4xl font-bold text-white flex items-center justify-center gap-2">
          <Globe2 className="h-8 w-8 text-cyan-400" />
          Global Investing — Complete Guide
        </h1>
        <p className="text-blue-200 text-lg">
          Access international markets through funds, ETFs, direct stocks, global indices, and foreign bonds — with currency, tax, and cost awareness.
        </p>
        <Disclaimer />
      </header>

      {/* 1️⃣ Why Go Global */}
      <LessonCard icon={<Target className="h-5 w-5 text-cyan-300" />} title="1️⃣ Why Invest Globally?">
        <ul className="list-disc list-inside text-sm text-blue-100 space-y-1">
          <li><strong>Diversification:</strong> Reduce home-bias and sector concentration by adding regions/leaders not present in India.</li>
          <li><strong>Currency Hedge:</strong> Partial INR-depreciation hedge when holding USD/other currency assets.</li>
          <li><strong>Access Innovation:</strong> Participate in global tech, healthcare, consumer, and thematic leaders.</li>
        </ul>
      </LessonCard>

      {/* 2️⃣ Vehicles Overview (cards) */}
      <LessonCard icon={<LineChart className="h-5 w-5 text-cyan-300" />} title="2️⃣ Investment Vehicles — Click to View Details">
        <VehicleCards selected={selected} onSelect={setSelected} />
        <div className="mt-6">
          <VehicleDetails selected={selected} />
        </div>
      </LessonCard>

      {/* 3️⃣ Portfolio Role & Allocation Ideas */}
      <LessonCard icon={<Scale className="h-5 w-5 text-emerald-400" />} title="3️⃣ Portfolio Role — Where It Fits">
        <div className="grid md:grid-cols-3 gap-4">
          <StatCard label="Diversification" value="Low correlation" note="Smoothen drawdowns" />
          <StatCard label="Growth Access" value="Global leaders" note="Sectors beyond India" />
          <StatCard label="Currency Impact" value="INR vs USD/EUR" note="Can help or hurt returns" />
        </div>
        <p className="text-xs text-blue-300 mt-3">
          Educational only: allocations depend on risk, horizon, liquidity needs. Many investors use a <strong>5–25%</strong> global sleeve in equity, adjusted to profile.
        </p>
      </LessonCard>

      {/* 4️⃣ Cost, Liquidity & Execution */}
      <LessonCard icon={<Wallet className="h-5 w-5 text-purple-300" />} title="4️⃣ Cost, Liquidity & Execution Checklist">
        <div className="grid md:grid-cols-2 gap-4">
          <BulletCard
            title="Costs to Watch"
            points={[
              "Expense ratios (funds/ETFs)",
              "Brokerage, FX conversion, custody/transfer fees",
              "Spreads & tracking error on ETFs/feeder funds",
            ]}
          />
          <BulletCard
            title="Liquidity Factors"
            points={[
              "Choose well-traded ETFs/funds",
              "Beware of wide bid-ask spreads",
              "For direct stocks, prefer primary exchanges",
            ]}
          />
        </div>
      </LessonCard>

      {/* 5️⃣ Currency & Tax Considerations (India) */}
      <LessonCard icon={<Banknote className="h-5 w-5 text-amber-300" />} title="5️⃣ Currency & Tax — India Considerations (High-Level)">
        <ul className="list-disc list-inside text-sm text-blue-100 space-y-1">
          <li><strong>Currency Risk:</strong> INR movement vs USD/EUR affects rupee returns (both ways).</li>
          <li><strong>Indian Tax:</strong> Tax rules for international funds/ETFs/stocks can differ from domestic equity. Rules evolve — verify the latest before investing.</li>
          <li><strong>Dividends Overseas:</strong> May face foreign withholding taxes; check double-taxation relief process where applicable.</li>
        </ul>
        <p className="text-xs text-blue-300 mt-2">NeoCred is not a SEBI-registered advisor. Please confirm current tax treatment with a professional.</p>
      </LessonCard>

      {/* 6️⃣ Access & Compliance (LRS/Channels) */}
      <LessonCard icon={<Landmark className="h-5 w-5 text-cyan-300" />} title="6️⃣ How Indians Access Global Markets (Compliance-First)">
        <div className="grid md:grid-cols-2 gap-4">
          <BulletCard
            title="Routes"
            points={[
              "Indian-domiciled international mutual funds (direct/regular, feeder or FoF).",
              "International ETFs listed in India or abroad (via permitted channels).",
              "Direct foreign stocks via approved brokers under RBI’s LRS.",
              "Global index funds/feeder funds for diversified exposure.",
            ]}
          />
          <BulletCard
            title="Compliance Notes"
            points={[
              "Investments abroad are subject to RBI’s Liberalised Remittance Scheme (LRS) & applicable limits.",
              "Follow KYC/AML norms with SEBI/RBI-regulated intermediaries.",
              "Disclosures, tax forms, and reporting may apply for certain routes.",
            ]}
          />
        </div>
      </LessonCard>

      {/* 7️⃣ Compare Vehicles */}
      <ComparisonTable />

      {/* 8️⃣ Risks & Best Practices */}
      <LessonCard icon={<ShieldCheck className="h-5 w-5 text-green-400" />} title="8️⃣ Risks & Good Practices">
        <div className="grid md:grid-cols-2 gap-4">
          <BulletCard
            title="Key Risks"
            points={[
              "Currency swings, foreign policy/regulatory shifts",
              "Tracking error in ETFs/funds; style & manager risk",
              "Liquidity and execution spreads on overseas markets",
            ]}
          />
          <BulletCard
            title="Good Practices"
            points={[
              "Use diversified, broad-market exposures for core global sleeve",
              "Stagger entries; review costs, tracking & liquidity regularly",
              "Rebalance annually; document thesis & risk controls",
            ]}
          />
        </div>
      </LessonCard>

      {/* 💬 Quick Quiz */}
      <QuizBlock />
    </motion.section>
  )
}

/* ===================== Components ===================== */

function LessonCard({ title, icon, children }: { title: string; icon?: React.ReactNode; children: React.ReactNode }) {
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
      Educational only — NeoCred is not a SEBI-registered advisor. Verify current RBI/SEBI/Tax rules before investing.
    </p>
  )
}

function StatCard({ label, value, note }: { label: string; value: string; note?: string }) {
  return (
    <div className="rounded-xl p-4 border border-white/10 bg-white/10">
      <div className="text-blue-200 text-xs">{label}</div>
      <div className="text-white font-semibold">{value}</div>
      {note && <div className="text-blue-300 text-xs mt-1">{note}</div>}
    </div>
  )
}

function BulletCard({ title, points }: { title: string; points: string[] }) {
  return (
    <div className="rounded-xl p-4 border border-white/10 bg-white/10">
      <div className="text-white font-semibold mb-1">{title}</div>
      <ul className="list-disc list-inside text-sm text-blue-100 space-y-1">
        {points.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </div>
  )
}

/* ===================== Vehicles ===================== */

function VehicleCards({
  selected,
  onSelect,
}: {
  selected: VehicleKey
  onSelect: (k: VehicleKey) => void
}) {
  const items: { key: VehicleKey; title: string; desc: string; icon: React.ReactNode }[] = [
    { key: "IntlMF", title: "International Mutual Funds", desc: "Feeder/FoF that invest overseas", icon: <Building2 className="h-5 w-5 text-yellow-400" /> },
    { key: "IntlETF", title: "International ETFs", desc: "Index-tracking; check liquidity & tracking", icon: <BarChart3 className="h-5 w-5 text-cyan-400" /> },
    { key: "DirectStocks", title: "Direct Foreign Stocks", desc: "Own global companies under LRS", icon: <Contact className="h-5 w-5 text-emerald-400" /> },
    { key: "GlobalIndex", title: "Global Index Funds", desc: "Broad indices (e.g., global/US/world)", icon: <LineChart className="h-5 w-5 text-purple-300" /> },
    { key: "ForeignBonds", title: "Foreign Bonds / Debt Funds", desc: "Sovereign/corporate debt exposure", icon: <Landmark className="h-5 w-5 text-orange-400" /> },
  ]

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
      {items.map((it) => {
        const active = selected === it.key
        return (
          <motion.button
            key={it.key}
            onClick={() => onSelect(it.key)}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full text-left p-4 rounded-2xl border transition ${
              active
                ? "bg-gradient-to-br from-cyan-600/30 to-blue-700/30 border-cyan-400/40"
                : "bg-white/10 hover:bg-white/20 border-white/10"
            }`}
          >
            <div className="flex items-center gap-2 text-white font-semibold mb-1">
              {it.icon} {it.title}
            </div>
            <p className="text-sm text-blue-200">{it.desc}</p>
          </motion.button>
        )
      })}
    </div>
  )
}

type VehicleDetail = {
  title: string
  intro: string
  how: string[]
  pros: string[]
  cons: string[]
  notes: string[]
}

const VEHICLE_DETAILS: Record<VehicleKey, VehicleDetail> = {
  IntlMF: {
    title: "International Mutual Funds (Feeder/FoF)",
    intro:
      "India-domiciled funds that invest in overseas funds or indices. Easy onboarding, INR-based, and no separate overseas brokerage needed.",
    how: [
      "Choose scheme category (country/region/thematic/global).",
      "Understand feeder structure & underlying fund strategy.",
      "Review expense ratio, tracking, and mandate caps.",
    ],
    pros: ["Simple INR route", "KYC via Indian MF ecosystem", "Automatic reinvestment & reporting"],
    cons: ["Higher total cost (feeder + underlying)", "Category/tracking deviations", "Fund-level capacity limits possible"],
    notes: ["Check fund house disclosures and international exposure caps.", "Evaluate long-term track + drawdowns vs benchmark."],
  },
  IntlETF: {
    title: "International ETFs",
    intro:
      "Exchange-traded funds tracking foreign indices/sectors. Some are listed in India; others require access to foreign exchanges via permitted channels.",
    how: [
      "Check expense, tracking error, index methodology.",
      "Confirm liquidity (AUM, daily turnover, bid-ask spreads).",
      "Use limit orders; be mindful of time-zones/market holidays.",
    ],
    pros: ["Transparent rules-based exposure", "Usually cost-efficient", "Easy to build diversified sleeves"],
    cons: ["Tracking error & spreads", "Foreign-listed access steps", "Dividend withholding possible"],
    notes: ["Prefer broad indices for core allocation.", "For niche themes, size positions conservatively."],
  },
  DirectStocks: {
    title: "Direct Foreign Stocks",
    intro:
      "Own shares of global companies under permitted routes. Requires an overseas-enabled brokerage and compliance with applicable limits and KYC.",
    how: [
      "Open account with approved broker; complete KYC.",
      "Fund account under applicable rules; convert INR to foreign currency.",
      "Buy on primary exchanges; monitor fees & custody.",
    ],
    pros: ["Company-level control", "Access to leaders/innovators", "Voting rights (broker-dependent)"],
    cons: ["Concentration & single-stock risk", "Higher effort & diligence", "Currency/withholding/tax complexity"],
    notes: ["Prefer a diversified core; use direct stocks as satellite.", "Document thesis and risk controls for each holding."],
  },
  GlobalIndex: {
    title: "Global Index Funds",
    intro:
      "Broad-market funds tracking global or US/world indices. Useful for a simple, low-maintenance global equity sleeve.",
    how: [
      "Select index (e.g., global/US/world ex-US).",
      "Check replication method, expense, and tracking.",
      "Use SIP/periodic rebalancing with domestic equity.",
    ],
    pros: ["Simple one-line global exposure", "Broad diversification", "Lower manager risk"],
    cons: ["Country/sector weights you may not prefer", "Tracking differences vs benchmark", "Currency swings affect INR returns"],
    notes: ["Start with broad index; add region/style tilts later.", "Rebalance annually with domestic allocation."],
  },
  ForeignBonds: {
    title: "Foreign Bonds / Debt Funds",
    intro:
      "Exposure to sovereign or corporate debt outside India, via funds/ETFs or permitted direct routes. Behavior differs from equities.",
    how: [
      "Choose duration/credit quality (sovereign vs corporate).",
      "Understand rate cycle & USD curve influences.",
      "Check fund expenses, currency policy, and liquidity.",
    ],
    pros: ["Diversifier vs equities", "Potentially lower volatility than stocks", "Income-oriented exposure"],
    cons: ["Rate-cycle & credit risks", "Currency impact on INR returns", "Liquidity & taxation differences"],
    notes: ["Use as a diversifier; size prudently.", "Prefer high-quality, shorter duration when uncertain."],
  },
}

function VehicleDetails({ selected }: { selected: VehicleKey }) {
  const d = VEHICLE_DETAILS[selected]
  return (
    <div className="grid md:grid-cols-2 gap-4">
      <div className="rounded-xl p-4 border border-white/10 bg-white/10">
        <div className="text-white font-semibold mb-1">{d.title}</div>
        <p className="text-sm text-blue-100">{d.intro}</p>
        <div className="mt-3">
          <div className="text-blue-200 text-xs mb-1">How It Works</div>
          <ul className="list-disc list-inside text-sm text-blue-100 space-y-1">
            {d.how.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="rounded-xl p-4 border border-white/10 bg-white/10">
        <div className="grid sm:grid-cols-2 gap-3">
          <div>
            <div className="text-white font-semibold mb-1">✅ Pros</div>
            <ul className="list-disc list-inside text-sm text-blue-100 space-y-1">
              {d.pros.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-white font-semibold mb-1">⚠️ Cons</div>
            <ul className="list-disc list-inside text-sm text-blue-100 space-y-1">
              {d.cons.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-3">
          <div className="text-blue-200 text-xs mb-1">Notes</div>
          <ul className="list-disc list-inside text-sm text-blue-100 space-y-1">
            {d.notes.map((n, i) => (
              <li key={i}>{n}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

/* ===================== Comparison ===================== */

function ComparisonTable() {
  const rows: [string, string, string, string, string][] = [
    ["Intl MF", "INR route (easy)", "Medium", "Moderate", "Feeder + fund expenses"],
    ["Intl ETF", "Local/foreign exchange", "Medium–High", "High if liquid", "Expense + spreads + tracking"],
    ["Direct Stocks", "Overseas broker (permitted)", "High (company-specific)", "Company-level", "FX + broker + custody"],
    ["Global Index", "Fund/ETF", "Medium", "High if broad", "Expense + tracking"],
    ["Foreign Bonds", "Fund/ETF/route", "Low–Medium (rate/credit)", "Varies by fund", "Expense + FX impact"],
  ]
  return (
    <LessonCard icon={<BarChart3 className="h-5 w-5 text-cyan-300" />} title="7️⃣ Quick Comparison — Vehicles at a Glance">
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse text-blue-100">
          <thead className="bg-white/10 text-blue-200 text-xs uppercase">
            <tr>
              <th className="p-2 border-b border-white/10 text-left">Vehicle</th>
              <th className="p-2 border-b border-white/10 text-left">Access</th>
              <th className="p-2 border-b border-white/10 text-left">Risk</th>
              <th className="p-2 border-b border-white/10 text-left">Diversification</th>
              <th className="p-2 border-b border-white/10 text-left">Cost Factors</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className="border-b border-white/10">
                <td className="p-2 font-medium text-white">{r[0]}</td>
                <td className="p-2">{r[1]}</td>
                <td className="p-2">{r[2]}</td>
                <td className="p-2">{r[3]}</td>
                <td className="p-2">{r[4]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </LessonCard>
  )
}

/* ===================== Quiz ===================== */

function QuizBlock() {
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [score, setScore] = useState(0)

  const quiz = [
    {
      question: "Which vehicle is typically the simplest INR route for global exposure?",
      options: ["Direct foreign stocks", "International mutual funds", "Foreign bonds directly", "None of these"],
      correct: "International mutual funds",
    },
    {
      question: "Which factor most directly affects INR returns from global assets?",
      options: ["Only domestic inflation", "Currency movement (INR vs USD/EUR)", "Broker’s brand name", "None"],
      correct: "Currency movement (INR vs USD/EUR)",
    },
    {
      question: "A sensible core global equity sleeve for many investors is:",
      options: ["Concentrated single-stock bets", "Global index funds/ETFs", "Leveraged futures", "Random alt-coins"],
      correct: "Global index funds/ETFs",
    },
  ]

  const select = (i: number, opt: string) => {
    if (!submitted) setAnswers((prev) => ({ ...prev, [i]: opt }))
  }

  const submit = () => {
    const s = quiz.filter((q, i) => answers[i] === q.correct).length
    setScore(s)
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
                  onClick={() => select(qi, opt)}
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
            onClick={submit}
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
