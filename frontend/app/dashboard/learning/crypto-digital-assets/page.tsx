"use client"

import React, { useMemo, useState } from "react"
import { motion } from "framer-motion"
import {
  ShieldCheck,
  Bitcoin,
  Lock,
  Globe2,
  Landmark,
  Wallet,
  Activity,
  Scale,
  Calculator,
  CheckCircle,
  XCircle,
  RotateCcw,
  AlertTriangle,
} from "lucide-react"

/**
 * Lesson: Crypto & Digital Assets — Risk, Regulation, RBI stance
 * Level: Advanced (Educational Only; SEBI-compliant)
 * File: crypto-digital-assets/page.tsx
 */

export default function Lesson_CryptoDigitalAssets() {
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
          <Bitcoin className="h-8 w-8 text-yellow-400" />
          Crypto & Digital Assets
        </h1>
        <p className="text-blue-200 text-lg">
          Understand what crypto assets are, key risks, India’s high-level regulatory landscape, and safe-use practices.
        </p>
        <Disclaimer />
      </header>

      {/* 1️⃣ What Are Digital Assets */}
      <LessonCard icon={<Globe2 className="h-5 w-5 text-cyan-300" />} title="1️⃣ What Are Crypto / Digital Assets?">
        <div className="grid md:grid-cols-2 gap-4">
          <BulletCard
            title="Common Categories"
            points={[
              "Currency-like tokens (e.g., BTC)",
              "Smart-contract platforms (e.g., ETH)",
              "Stablecoins (fiat-pegged; issuer/collateral risk)",
              "Utility/governance tokens (protocol participation)",
              "Tokenized real-world assets (RWA), NFTs (unique items)",
            ]}
          />
          <BulletCard
            title="How Value Moves"
            points={[
              "Network demand & fees (usage, blockspace scarcity)",
              "Liquidity, market depth & exchange spreads",
              "Narratives/innovation cycles (L2s, DeFi, RWAs)",
              "Regulatory news & macro (rates, USD liquidity)",
            ]}
          />
        </div>
      </LessonCard>

      {/* 2️⃣ India: High-Level Regulatory Landscape */}
      <LessonCard icon={<Landmark className="h-5 w-5 text-amber-300" />} title="2️⃣ India: High-Level Regulatory Landscape (Overview)">
        <ul className="list-disc list-inside text-sm text-blue-100 space-y-1">
          <li>
            <strong>Not legal tender:</strong> Virtual Digital Assets (VDAs) are typically <em>not</em> recognized as legal currency. RBI has repeatedly flagged
            consumer and prudential risks.
          </li>
          <li>
            <strong>Tax framework (high level):</strong> India introduced a specific regime for VDAs (e.g., flat rate on gains, and TDS on certain transfers).
            Tax rules evolve — verify latest slabs, set-offs and reporting before acting.
          </li>
          <li>
            <strong>KYC/AML expectations:</strong> Use compliant on-ramps, maintain records; consider FATF Travel Rule developments and exchange disclosures.
          </li>
          <li>
            <strong>LRS/compliance:</strong> Overseas investing involves applicable RBI, FEMA and tax rules. Confirm limits, forms and eligibility with your provider.
          </li>
        </ul>
        <p className="text-xs text-blue-300 mt-2">
          This is an educational snapshot. Always check current RBI/SEBI/FinMin notifications and consult a professional for tax/compliance.
        </p>
      </LessonCard>

      {/* 3️⃣ Key Risks */}
      <LessonCard icon={<Activity className="h-5 w-5 text-red-300" />} title="3️⃣ Key Risks You Must Understand">
        <div className="grid md:grid-cols-3 gap-4">
          <RiskCard title="Volatility & Drawdowns" desc="Large price swings; 60–90% peak-to-trough moves have occurred." />
          <RiskCard title="Smart-Contract/Custody" desc="Code exploits; exchange insolvency; self-custody errors (seed loss)." />
          <RiskCard title="Liquidity/Slippage" desc="Thin order books; spreads widen in stress; de-pegs for some assets." />
          <RiskCard title="Regulatory" desc="Rules evolve; access and taxation can change, impacting returns." />
          <RiskCard title="Counterparty" desc="Centralized venues, stablecoin issuers and lenders add credit risk." />
          <RiskCard title="Operational" desc="Phishing, SIM-swap, malware; poor security hygiene is costly." />
        </div>
      </LessonCard>

      {/* 4️⃣ Access Routes & Wallet Choices */}
      <LessonCard icon={<Wallet className="h-5 w-5 text-emerald-300" />} title="4️⃣ Access Routes & Wallet Choices (Compliance-First)">
        <div className="grid md:grid-cols-2 gap-4">
          <BulletCard
            title="On-Ramp/Trading"
            points={[
              "Use compliant Indian platforms with strong KYC/AML and disclosures.",
              "Understand fees: maker/taker, spreads, funding, withdrawals.",
              "Avoid unknown P2P counterparties; beware scams.",
            ]}
          />
          <BulletCard
            title="Wallet & Custody"
            points={[
              "Centralized custody: convenience but counterparty risk.",
              "Self-custody: control with hardware wallet; secure seed phrase offline.",
              "2FA (TOTP), allow-listing, anti-phishing codes, transaction previews.",
            ]}
          />
        </div>
      </LessonCard>

      {/* 5️⃣ Position Sizing & Portfolio Role */}
      <LessonCard icon={<Scale className="h-5 w-5 text-purple-300" />} title="5️⃣ Position Sizing & Portfolio Role">
        <ul className="list-disc list-inside text-sm text-blue-100 space-y-1">
          <li><strong>Speculative satellite:</strong> Many investors cap crypto to a small sleeve (e.g., 0–5%); size to sleep well through volatility.</li>
          <li><strong>Dollar-Cost Averaging (DCA):</strong> If participating, stagger entries to reduce timing risk.</li>
          <li><strong>Rebalance rules:</strong> Pre-commit to rebalance bands; avoid emotional trading.</li>
        </ul>
      </LessonCard>

      {/* 6️⃣ P&L After Fees & TDS — Mini Calculator */}
      <AfterTaxPnL />

      {/* 7️⃣ Security Best Practices */}
      <LessonCard icon={<Lock className="h-5 w-5 text-cyan-300" />} title="7️⃣ Security Best Practices (Non-negotiable)">
        <div className="grid md:grid-cols-2 gap-4">
          <BulletCard
            title="Must-Do"
            points={[
              "Hardware wallet for meaningful holdings; verify addresses.",
              "Seed phrase offline & split storage; never share it.",
              "Enable TOTP 2FA; disable SMS 2FA; device hygiene and OS updates.",
            ]}
          />
          <BulletCard
            title="Avoid"
            points={[
              "Random airdrops, unsolicited DMs, ‘support’ links and screen-share requests.",
              "Signing unknown transactions; unlimited ‘permit’ approvals.",
              "Hot wallets for long-term storage; sharing keys in cloud/email.",
            ]}
          />
        </div>
      </LessonCard>

      {/* 8️⃣ 💬 Quick Quiz */}
      <QuizBlock />
    </motion.section>
  )
}

/* ===================== Reusable Blocks ===================== */

function LessonCard({
  title,
  icon,
  children,
}: {
  title: string
  icon?: React.ReactNode
  children: React.ReactNode
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
      Educational only — NeoCred is not a SEBI-registered advisor. Rules and tax treatment evolve; verify current RBI/SEBI/Tax guidance.
    </p>
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

function RiskCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-xl p-4 border border-white/10 bg-white/10">
      <div className="text-white font-semibold">{title}</div>
      <p className="text-sm text-blue-100 mt-1">{desc}</p>
    </div>
  )
}

function StatBox({ label, value, highlight = false }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div
      className={`rounded-xl p-4 border border-white/10 ${
        highlight ? "bg-gradient-to-r from-cyan-600/20 to-blue-600/20" : "bg-white/10"
      }`}
    >
      <div className="text-[11px] uppercase tracking-wide text-blue-200">{label}</div>
      <div className={`text-white font-semibold ${highlight ? "text-lg" : ""}`}>{value}</div>
    </div>
  )
}

/* ===================== Calculator: After-Tax P&L ===================== */

function AfterTaxPnL() {
  const [buy, setBuy] = useState(200000) // ₹
  const [sell, setSell] = useState(260000) // ₹
  const [feesPct, setFeesPct] = useState(0.6) // % of trade value (both sides, approx)
  const [tdsPct, setTdsPct] = useState(1.0) // % TDS on applicable transfers (illustrative)
  const grossPnL = sell - buy

  // fees assumed on buy + sell legs
  const totalFees = (buy + sell) * (feesPct / 100)

  // TDS illustrative on sell leg value (varies by venue/rule)
  const tds = sell * (tdsPct / 100)

  const netPnL = grossPnL - totalFees - tds

  return (
    <LessonCard icon={<Calculator className="h-5 w-5 text-cyan-300" />} title="6️⃣ P&L After Fees & TDS — Mini Calculator (Illustrative)">
      <div className="grid md:grid-cols-4 gap-4">
        <NumberInput label="Buy Value (₹)" value={buy} setValue={setBuy} />
        <NumberInput label="Sell Value (₹)" value={sell} setValue={setSell} />
        <NumberInput label="Total Fees % (approx)" value={feesPct} setValue={setFeesPct} />
        <NumberInput label="TDS % on Sell (illustrative)" value={tdsPct} setValue={setTdsPct} />
      </div>

      <div className="grid md:grid-cols-4 gap-4 mt-4">
        <StatBox label="Gross P&L" value={`₹${fmt(grossPnL)}`} />
        <StatBox label="Total Fees (est.)" value={`₹${fmt(totalFees)}`} />
        <StatBox label="TDS (est.)" value={`₹${fmt(tds)}`} />
        <StatBox label="Net P&L (est.)" value={`₹${fmt(netPnL)}`} highlight />
      </div>

      <p className="text-xs text-blue-300 mt-2">
        This is a simplified illustration. Confirm your actual fees, taxes, set-off rules and reporting with a professional.
      </p>
    </LessonCard>
  )
}

function NumberInput({
  label,
  value,
  setValue,
}: {
  label: string
  value: number
  setValue: (n: number) => void
}) {
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

/* ===================== Quiz ===================== */

function QuizBlock() {
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [score, setScore] = useState(0)

  const quiz = [
    {
      question: "Which is a core operational risk unique to self-custody?",
      options: ["Broker default", "Smart-contract exploit", "Seed phrase loss", "Market volatility"],
      correct: "Seed phrase loss",
    },
    {
      question: "Which statement best reflects India’s stance?",
      options: [
        "Crypto is legal tender",
        "Crypto is typically not legal tender; risks repeatedly flagged",
        "No KYC/AML needed if amounts are small",
        "Profits are exempt from taxes",
      ],
      correct: "Crypto is typically not legal tender; risks repeatedly flagged",
    },
    {
      question: "A prudent approach to sizing crypto exposure for many investors is:",
      options: ["All-in for quick gains", "Unlimited leverage", "Small satellite sleeve with rebalancing", "Max on illiquid tokens"],
      correct: "Small satellite sleeve with rebalancing",
    },
  ]

  const select = (i: number, opt: string) => {
    if (!submitted) setAnswers((p) => ({ ...p, [i]: opt }))
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

/* ===================== Utils ===================== */

function fmt(n: number) {
  const sign = n < 0 ? "-" : ""
  const v = Math.abs(Math.round(n))
  return `${sign}${v.toLocaleString("en-IN")}`
}
