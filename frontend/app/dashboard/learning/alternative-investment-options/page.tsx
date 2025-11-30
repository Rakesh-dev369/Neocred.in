"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import {
  LineChart,
  ShieldCheck,
  PiggyBank,
  Building2,
  Landmark,
  Users,
  HandCoins,
  Bitcoin,
  Scale,
  Target,
  CheckCircle,
  XCircle,
  RotateCcw,
} from "lucide-react"

type AltKey = "REITs" | "INVITs" | "AIFs" | "PMS" | "Commodities" | "Crypto" | "P2P" | "PE" | "VC" | "Angel"

export default function Lesson_AlternativeInvestments(): React.ReactElement {
  const [selected, setSelected] = useState<AltKey>("REITs")

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-6xl mx-auto space-y-10 text-blue-50"
    >
      <header className="text-center space-y-3">
        <h1 className="text-3xl sm:text-4xl font-bold text-white flex items-center justify-center gap-2">
          <LineChart className="h-8 w-8 text-cyan-400" />
          Alternative Investment Options
        </h1>
        <p className="text-blue-200 text-lg">
          Explore beyond traditional equity & debt — diversify with real assets, private pools, and emerging instruments.
        </p>
        <Disclaimer />
      </header>

      <LessonCard icon={<LineChart className="h-5 w-5 text-cyan-300" />} title="1️⃣ Overview — Click a Card to Load Details">
        <OverviewCards selected={selected} onSelect={setSelected} />
        <div className="mt-6">
          <SelectedDetails selected={selected} />
        </div>
      </LessonCard>

      <LessonCard icon={<PiggyBank className="h-5 w-5 text-cyan-300" />} title="2️⃣ What Are Alternative Investments?">
        <p>
          "Alternatives" are assets <strong>outside conventional equity & debt</strong>, used for diversification,
          inflation-hedging, or accessing non-public opportunities. They often have <strong>different risk/liquidity</strong>
          profiles and, in India, may come with <strong>eligibility minimums</strong> and regulatory constraints.
        </p>
        <ul className="list-disc list-inside mt-3 text-blue-100 space-y-1 text-sm">
          <li><strong>REITs</strong> (commercial real estate), <strong>INVITs</strong> (infrastructure cashflows).</li>
          <li><strong>AIFs</strong> & <strong>PMS</strong> (professional, higher-ticket managed strategies).</li>
          <li><strong>Commodities</strong> (gold/silver), <strong>Crypto</strong> (unregulated, high-vol), <strong>P2P</strong> (credit exposure).</li>
        </ul>
      </LessonCard>

      <LessonCard icon={<Target className="h-5 w-5 text-emerald-400" />} title="3️⃣ Portfolio Role — Where Do They Fit?">
        <div className="grid md:grid-cols-3 gap-4">
          <StatPair label="Diversification" value="Lower correlation" note="Reduce equity-only drawdowns" />
          <StatPair label="Income" value="Yield focus (REIT/INVIT)" note="Distribution-linked cashflows" />
          <StatPair label="Access" value="Private & real assets" note="Accept liquidity constraints" />
        </div>
        <p className="text-xs text-blue-300 mt-3">
          Align with <strong>goals, risk tolerance, liquidity needs</strong>. Start with transparent, exchange-traded options before complex vehicles.
        </p>
      </LessonCard>

      <BenefitsRisks />
      <ComparisonTable />
      <RegulationNotes />
      <HowToAdd />
      <QuizBlock />
    </motion.section>
  )
}

function LessonCard({
  title,
  icon,
  children,
}: {
  title: string
  icon?: React.ReactNode
  children: React.ReactNode
}): React.ReactElement {
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

function Disclaimer(): React.ReactElement {
  return (
    <p className="text-xs text-yellow-300 flex items-center gap-2 justify-center">
      <ShieldCheck className="h-4 w-4" /> Educational only — NeoCred is not a SEBI-registered advisor. Content is for awareness.
    </p>
  )
}

function StatPair({ label, value, note }: { label: string; value: string; note?: string }): React.ReactElement {
  return (
    <div className="rounded-xl p-4 border border-white/10 bg-white/10">
      <div className="text-blue-200 text-xs">{label}</div>
      <div className="text-white font-semibold">{value}</div>
      {note && <div className="text-blue-300 text-xs mt-1">{note}</div>}
    </div>
  )
}

function OverviewCards({
  selected,
  onSelect,
}: {
  selected: AltKey
  onSelect: (k: AltKey) => void
}): React.ReactElement {
  const items: { key: AltKey; title: string; desc: string; icon: React.ReactNode }[] = [
    { key: "REITs", title: "REITs", desc: "Commercial real estate income", icon: <Building2 className="h-5 w-5 text-yellow-400" /> },
    { key: "INVITs", title: "INVITs", desc: "Infrastructure cashflows", icon: <Landmark className="h-5 w-5 text-orange-400" /> },
    { key: "AIFs", title: "AIFs", desc: "Private pooled funds", icon: <Users className="h-5 w-5 text-emerald-400" /> },
    { key: "PMS", title: "PMS", desc: "Managed portfolios (₹50L+)", icon: <LineChart className="h-5 w-5 text-purple-300" /> },
    { key: "Commodities", title: "Commodities", desc: "Gold, silver, oil (ETFs/F&O)", icon: <HandCoins className="h-5 w-5 text-cyan-400" /> },
    { key: "Crypto", title: "Crypto Assets", desc: "High-volatility digital tokens", icon: <Bitcoin className="h-5 w-5 text-pink-400" /> },
    { key: "P2P", title: "P2P Lending", desc: "Direct consumer/business credit", icon: <Users className="h-5 w-5 text-blue-300" /> },
    { key: "PE", title: "Private Equity", desc: "Institutional buyout funds", icon: <Building2 className="h-5 w-5 text-red-400" /> },
    { key: "VC", title: "Venture Capital", desc: "Early-stage startup funding", icon: <Target className="h-5 w-5 text-green-400" /> },
    { key: "Angel", title: "Angel Investing", desc: "Individual startup investments", icon: <Users className="h-5 w-5 text-purple-400" /> },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="grid sm:grid-cols-2 md:grid-cols-3 gap-4"
    >
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
    </motion.div>
  )
}

type DetailItem = {
  title: string
  icon: React.ReactNode
  intro: string
  how: string[]
  benefits: string[]
  risks: string[]
  tax: string[]
  steps: string[]
}

const DETAILS: Record<AltKey, DetailItem> = {
  REITs: {
    title: "REITs — Real Estate Investment Trusts",
    icon: <Building2 className="h-4 w-4 text-yellow-400" />,
    intro: "Units of a trust that owns income-generating commercial real estate (offices, malls, logistics). You receive distributions from rent/lease income.",
    how: ["Listed on exchanges; buy/sell units like stocks.", "Must distribute ≥90% of net distributable cashflows to unitholders.", "Yields vary with occupancy, rentals, interest rates, and asset quality."],
    benefits: ["Steady income potential", "Real-asset exposure with liquidity", "Lower ticket size vs direct property"],
    risks: ["Interest-rate sensitivity", "Vacancy/tenant concentration risk", "Regulatory or valuation swings"],
    tax: ["Distributions may include interest/dividend/rent — taxed per component.", "Capital gains on sale follow listed security norms (per holding period)."],
    steps: ["Evaluate sponsor quality, asset mix, occupancy, WALE", "Check distribution record & debt ratio", "Buy via demat; diversify issuers"],
  },
  INVITs: {
    title: "INVITs — Infrastructure Investment Trusts",
    icon: <Landmark className="h-4 w-4 text-orange-400" />,
    intro: "Trusts that own operational infrastructure (roads, power transmission, renewables) and distribute cashflows generated by these assets.",
    how: ["Listed units provide access to infra cashflows without owning projects.", "Distributions routed from SPVs after O&M and debt service.", "Performance tied to traffic/throughput and regulatory tariffs."],
    benefits: ["Yield-oriented; potential inflation linkage", "Diversified infra exposure", "Professional O&M and governance"],
    risks: ["Regulatory/concession risks", "Refinancing & concentration risk", "Interest-rate sensitivity"],
    tax: ["Distributions split across components; taxation varies by mix.", "Capital gains per listed security rules based on holding period."],
    steps: ["Review portfolio, concession terms, refinancing runway", "Study DSCR, distribution policy, sponsor track", "Invest via demat; monitor updates"],
  },
  AIFs: {
    title: "AIFs — Alternative Investment Funds",
    icon: <Users className="h-4 w-4 text-emerald-400" />,
    intro: "Privately pooled vehicles (Cat I/II/III) for private equity, venture, structured credit, or long/short strategies — for accredited/HNI investors.",
    how: ["High minimums (often ₹1 Cr+); commitments drawn over time.", "Closed-end with multi-year lock-ins; periodic NAVs.", "Category governs permitted strategies & leverage."],
    benefits: ["Access to private markets/complex strategies", "Potential return premium", "Professional governance/monitoring"],
    risks: ["Illiquidity and long lock-ins", "High fees; manager selection risk", "Valuation opacity & dispersion"],
    tax: ["Pass-through or fund-level taxation varies by category.", "Gains/distributions taxed per underlying exposure."],
    steps: ["Verify SEBI registration & audited track", "Understand fees, risk controls, reporting", "Satellite allocation; diversify vintages"],
  },
  PMS: {
    title: "PMS — Portfolio Management Services",
    icon: <LineChart className="h-4 w-4 text-purple-300" />,
    intro: "SEBI-licensed managers run a segregated portfolio in your demat. Minimum ₹50L. Strategies range from quality compounding to special situations.",
    how: ["Individual account; holdings visible in your demat.", "Fees: fixed and/or performance (with HWM/benchmark).", "Periodic reporting; rebalancing flexibility."],
    benefits: ["Customized mandates & transparency", "Professional research & active risk mgmt", "Potential tax optimization at client level"],
    risks: ["Manager/style risk", "Higher costs vs MFs", "Market drawdowns still apply"],
    tax: ["Taxed at client level on realized events", "No fund wrapper; events hit your tax year"],
    steps: ["Check SEBI license & live track", "Scrutinize mandate & fees", "Use as satellite after core MF exposure"],
  },
  Commodities: {
    title: "Commodities — Gold, Silver, etc.",
    icon: <HandCoins className="h-4 w-4 text-cyan-400" />,
    intro: "Exposure to real assets via ETFs, Sovereign Gold Bonds (SGBs), or futures. Typically used for diversification and inflation hedging.",
    how: ["ETFs track spot; SGBs add interest + redemption linked to gold.", "Futures require margins & roll management.", "Silver/base metals via ETFs/futures (liquidity varies)."],
    benefits: ["Diversifier in equity stress", "Inflation hedge", "SGBs add interest income"],
    risks: ["No cashflows (except SGB interest)", "Macro/FX/flow-driven volatility", "Leverage/roll risks in futures"],
    tax: ["ETFs: capital gains per listed norms.", "SGB: redemption at maturity typically tax-exempt (check latest rules)."],
    steps: ["Choose ETF (liquidity) vs SGB (tenor+interest)", "Size gold ~5–15% per profile", "Avoid leverage unless advanced"],
  },
  Crypto: {
    title: "Crypto Assets — Unregulated & Highly Volatile",
    icon: <Bitcoin className="h-4 w-4 text-pink-400" />,
    intro: "Blockchain-based tokens (e.g., BTC/ETH). Extremely volatile and currently unregulated in India; consider only with full risk awareness.",
    how: ["Prices driven by global flows, narratives, network effects.", "Custody/security & exchange counterparty risk.", "Regulatory & taxation stance can materially change outcomes."],
    benefits: ["High upside potential", "24/7 global liquidity", "Innovation exposure"],
    risks: ["Severe drawdowns/hacks/scams", "Regulatory uncertainty", "Correlation spikes in risk-off"],
    tax: ["Currently high tax + TDS; set-off rules restricted (check latest).", "Policy can evolve — always verify current guidance."],
    steps: ["Treat as speculative; tiny allocation if any", "Reputed exchanges/custody; 2FA/cold storage", "No leverage; avoid random altcoins"],
  },
  P2P: {
    title: "P2P Lending — RBI NBFC-P2P",
    icon: <Users className="h-4 w-4 text-blue-300" />,
    intro: "Platforms match lenders with borrowers. Returns come from interest paid by borrowers; risk is borrower default.",
    how: ["RBI regulates NBFC-P2P with exposure caps & disclosures.", "Fund multiple loans to diversify idiosyncratic risk.", "Servicing/collection handled by platform (fees apply)."],
    benefits: ["Potentially higher yields than deposits", "Customizable risk tiers", "Shorter tenors possible"],
    risks: ["Borrower default risk; slow recoveries", "Platform risk; cycle sensitivity", "Interest taxed at slab rates"],
    tax: ["Interest income taxed per your slab", "No equity-like CG benefits"],
    steps: ["Check NBFC-P2P license & NPA metrics", "Cap exposure; many small tickets", "Reinvest prudently; monitor disclosures"],
  },
  PE: {
    title: "Private Equity — Institutional Buyouts",
    icon: <Building2 className="h-4 w-4 text-red-400" />,
    intro: "Funds that acquire controlling stakes in established companies, improve operations, and exit after 3-7 years. Typically requires very high minimums.",
    how: ["Pooled funds acquire majority stakes in mature companies", "Active management to improve operations & profitability", "Exit via IPO, strategic sale, or secondary buyout"],
    benefits: ["Potential for high returns (15-25%+ IRR)", "Professional management & operational improvements", "Access to non-public company investments"],
    risks: ["Very high minimums (₹10+ Cr typically)", "Long lock-in periods (5-10 years)", "Concentration risk & illiquidity"],
    tax: ["Capital gains treatment on exits", "Pass-through taxation structure"],
    steps: ["Verify fund manager track record & SEBI registration", "Understand fee structure (2% mgmt + 20% carry typical)", "Ensure liquidity needs can handle long lock-ins"],
  },
  VC: {
    title: "Venture Capital — Early-Stage Growth",
    icon: <Target className="h-4 w-4 text-green-400" />,
    intro: "Funds that invest in high-growth potential startups and early-stage companies. Higher risk but potential for exponential returns.",
    how: ["Invest in startups with scalable business models", "Provide mentorship & network access to portfolio companies", "Exit through IPOs, acquisitions, or follow-on rounds"],
    benefits: ["Potential for very high returns (20-40%+ for winners)", "Exposure to innovation & disruptive technologies", "Professional due diligence & portfolio support"],
    risks: ["Very high failure rates (70-90% may fail)", "Extremely long gestation periods (7-12 years)", "Valuation volatility & market timing risks"],
    tax: ["Capital gains on successful exits", "Loss set-offs may be limited"],
    steps: ["Research fund's sector focus & portfolio companies", "Understand J-curve effect & capital call schedule", "Diversify across multiple VC funds if possible"],
  },
  Angel: {
    title: "Angel Investing — Individual Startup Bets",
    icon: <Users className="h-4 w-4 text-purple-400" />,
    intro: "Direct investments by individuals into early-stage startups. Requires active involvement and high risk tolerance for potentially high rewards.",
    how: ["Direct investment in startups for equity stakes", "Often provide mentorship & industry connections", "Exit when company gets acquired or goes public"],
    benefits: ["Potential for exponential returns on winners", "Direct involvement in startup ecosystem", "Lower minimums than institutional funds"],
    risks: ["Extremely high failure rates (90%+ may fail)", "Illiquid investments with uncertain timelines", "Requires significant due diligence skills"],
    tax: ["Capital gains treatment on exits", "Angel tax implications for startups receiving investment"],
    steps: ["Start with angel networks or platforms for deal flow", "Diversify across 15-20+ startups minimum", "Focus on sectors you understand well"],
  },
}

function SelectedDetails({ selected }: { selected: AltKey }): React.ReactElement {
  const d = DETAILS[selected]
  return (
    <div className="grid md:grid-cols-2 gap-4">
      <div className="rounded-xl p-4 border border-white/10 bg-white/10">
        <div className="text-white font-semibold mb-1 flex items-center gap-2">
          {d.icon} {d.title}
        </div>
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
            <div className="text-white font-semibold mb-1">✅ Benefits</div>
            <ul className="list-disc list-inside text-sm text-blue-100 space-y-1">
              {d.benefits.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-white font-semibold mb-1">⚠️ Risks</div>
            <ul className="list-disc list-inside text-sm text-blue-100 space-y-1">
              {d.risks.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-3">
          <div className="text-blue-200 text-xs mb-1">Tax Snapshot (Indicative)</div>
          <ul className="list-disc list-inside text-sm text-blue-100 space-y-1">
            {d.tax.map((t, i) => (
              <li key={i}>{t}</li>
            ))}
          </ul>
        </div>

        <div className="mt-3">
          <div className="text-blue-200 text-xs mb-1">How to Get Started</div>
          <ol className="list-decimal list-inside text-sm text-blue-100 space-y-1">
            {d.steps.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  )
}

function BenefitsRisks(): React.ReactElement {
  return (
    <LessonCard icon={<Scale className="h-5 w-5 text-purple-300" />} title="4️⃣ Benefits & Risks — General Perspective">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="rounded-xl p-4 border border-white/10 bg-white/10">
          <div className="text-white font-semibold mb-1">✅ Benefits</div>
          <ul className="list-disc list-inside text-sm text-blue-100 space-y-1">
            <li>Diversification vs traditional equity/debt.</li>
            <li>Potential real-return enhancement or steady income.</li>
            <li>Access to private/real assets otherwise hard to own.</li>
          </ul>
        </div>
        <div className="rounded-xl p-4 border border-white/10 bg-white/10">
          <div className="text-white font-semibold mb-1">⚠️ Risks</div>
          <ul className="list-disc list-inside text-sm text-blue-100 space-y-1">
            <li>Liquidity constraints; valuation opacity.</li>
            <li>Higher fees/complexity; manager/platform risk.</li>
            <li>Regulatory/tax uncertainty for some categories.</li>
          </ul>
        </div>
      </div>
    </LessonCard>
  )
}

function ComparisonTable(): React.ReactElement {
  const rows: [string, string, string, string][] = [
    ["REITs", "Exchange-traded", "Moderate", "8–12% (yield + price)"],
    ["INVITs", "Exchange-traded", "Moderate", "8–10% (yield focus)"],
    ["AIFs", "Low (lock-in)", "High", "12–20%+ (strategy dependent)"],
    ["PMS", "Low–Moderate", "High", "Market-linked (manager alpha)"],
    ["Commodities", "ETFs/Futures", "Moderate–High", "No cashflows (price beta)"],
    ["Crypto", "High (24/7)", "Very High", "Unpredictable/Speculative"],
    ["P2P", "Low (tenor-bound)", "High (credit)", "10–20%+ (net of NPAs?)"],
  ]
  return (
    <LessonCard icon={<Scale className="h-5 w-5 text-amber-300" />} title="5️⃣ Comparison — Popular Alternatives">
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse text-blue-100">
          <thead className="bg-white/10 text-blue-200 text-xs uppercase">
            <tr>
              <th className="p-2 border-b border-white/10 text-left">Asset</th>
              <th className="p-2 border-b border-white/10 text-left">Liquidity</th>
              <th className="p-2 border-b border-white/10 text-left">Risk</th>
              <th className="p-2 border-b border-white/10 text-left">Typical Return</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className="border-b border-white/10">
                <td className="p-2 font-medium text-white">{r[0]}</td>
                <td className="p-2">{r[1]}</td>
                <td className="p-2">{r[2]}</td>
                <td className="p-2">{r[3]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </LessonCard>
  )
}

function RegulationNotes(): React.ReactElement {
  return (
    <LessonCard icon={<ShieldCheck className="h-5 w-5 text-emerald-400" />} title="6️⃣ Regulation & Practical Notes (India)">
      <ul className="list-disc list-inside text-sm text-blue-100 space-y-1">
        <li><strong>REITs/INVITs</strong>: SEBI-regulated; distribution rules; disclosure standards.</li>
        <li><strong>AIFs</strong>: Category I/II/III — SEBI registration; high minimums; suited for accredited/HNI.</li>
        <li><strong>PMS</strong>: SEBI-licensed; minimum ₹50L; mandate clarity & fees matter.</li>
        <li><strong>Crypto</strong>: Not SEBI-regulated; taxation & TDS apply — policy can change; treat as speculative.</li>
        <li><strong>P2P</strong>: RBI NBFC-P2P norms; exposure caps; focus on NPAs/recoveries and platform health.</li>
        <li><strong>PE/VC/Angel</strong>: SEBI regulations for AIFs; very high risk; suitable only for sophisticated investors with long investment horizons.</li>
      </ul>
      <p className="text-xs text-blue-300 mt-2">Always rely on official offer documents and regulator circulars for the latest rules.</p>
    </LessonCard>
  )
}

function HowToAdd(): React.ReactElement {
  return (
    <LessonCard icon={<Target className="h-5 w-5 text-cyan-300" />} title="7️⃣ How to Add Alternatives — Sensible Playbook">
      <ul className="list-disc list-inside text-blue-100 text-sm space-y-1">
        <li>Cap total alternatives at <strong>10–20%</strong> of portfolio (experience-dependent).</li>
        <li>Start with <strong>REITs/INVITs</strong> (transparent, listed) before illiquid/private vehicles.</li>
        <li>For <strong>AIFs/PMS</strong>, verify SEBI registration, team, audited live track record, fees, risk controls.</li>
        <li><strong>Commodities</strong>: prefer ETFs/SGB for simplicity; avoid leveraged F&O unless advanced.</li>
        <li><strong>Crypto</strong>: if at all, tiny allocation; no leverage; prioritize custody security.</li>
        <li><strong>P2P</strong>: diversify into many small tickets; monitor NPAs and recoveries.</li>
        <li><strong>PE/VC/Angel</strong>: only for experienced investors; expect long lock-ins; diversify extensively.</li>
      </ul>
    </LessonCard>
  )
}

function QuizBlock(): React.ReactElement {
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [score, setScore] = useState(0)

  const quiz: { question: string; options: string[]; correct: string }[] = [
    {
      question: "Which vehicle gives you exposure to commercial real estate rentals?",
      options: ["AIF", "REIT", "PMS", "P2P"],
      correct: "REIT",
    },
    {
      question: "AIFs are best described as:",
      options: ["Exchange-traded funds", "Privately pooled SEBI-registered funds", "Bank deposits", "Public sector bonds"],
      correct: "Privately pooled SEBI-registered funds",
    },
    {
      question: "For a first-time alternatives allocation, a sensible starting point is:",
      options: ["High-leverage futures", "Illiquid private credit", "REITs/INVITs (listed)", "Random crypto altcoins"],
      correct: "REITs/INVITs (listed)",
    },
  ]

  const handleSelect = (i: number, opt: string) => {
    if (!submitted) setAnswers((prev) => ({ ...prev, [i]: opt }))
  }

  const handleSubmit = () => {
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