"use client"

import { useMemo, useState } from "react"
import { motion } from "framer-motion"
import {
  Landmark,
  Shield,
  Coins,
  ScrollText,
  Gauge,
  Calculator,
  Layers,
  Info,
  CheckCircle,
  XCircle,
  RotateCcw,
  ChevronDown,
  ChevronUp,
  BookOpen,
  Target,
  TrendingUp,
  BarChart3,
  Table,
  Lightbulb,
} from "lucide-react"

/**
 * Lesson: Fixed Income Instruments (Bonds, NCDs, Treasury Bills)
 * Level: Intermediate • SEBI-compliant (educational only)
 */

export default function Lesson_FixedIncome() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-5xl mx-auto space-y-10 text-blue-50"
    >
      {/* Header */}
      <header className="text-center space-y-3">
        <h1 className="text-3xl sm:text-4xl font-bold text-white flex items-center justify-center gap-2">
          <Layers className="h-8 w-8 text-cyan-400" />
          Fixed Income Instruments (India)
        </h1>
        <p className="text-blue-200 text-lg">
          Predictable income, stability, and smart diversification — understand *how debt works*.
        </p>
        <Disclaimer />
      </header>

      {/* 1️⃣ Intro */}
      <LessonCard title={<div className="flex items-center gap-2"><BookOpen className="h-5 w-5 text-cyan-400" />1️⃣ What is Fixed Income?</div>}>
        <p>
          Fixed income investments pay regular *interest* and aim to *protect capital* better than equities.
          They’re useful for *short- to medium-term goals*, emergency funds, and smoothing portfolio volatility.
        </p>
        <ul className="list-disc list-inside text-sm text-blue-100 mt-2 space-y-1">
          <li>Income visibility (coupons/interest)</li>
          <li>Lower volatility than stocks (but not risk-free)</li>
          <li>Key risks: *interest rate, **credit/default, and **liquidity*</li>
        </ul>
      </LessonCard>

      {/* 2️⃣ Category Cards (expandable) */}
      <CategoryCards />

      {/* 3️⃣ Key Concepts */}
      <KeyConcepts />

      {/* 4️⃣ Interactive Tools */}
      <YTMCalculator />
      <DurationRiskSimulator />
      <CreditRatingYieldMap />

      {/* 5️⃣ Comparison Table */}
      <LessonCard title={<div className="flex items-center gap-2"><Table className="h-5 w-5 text-cyan-400" />6️⃣ Instrument Comparison — Quick Reference (Educational)</div>}>
        <ComparisonTable />
        <p className="text-[11px] text-blue-300 mt-3">
          Notes: “Risk” & “Liquidity” are relative. Returns vary with market cycles, taxes, and issuer quality. This is educational, not advice.
        </p>
      </LessonCard>

      {/* 6️⃣ Takeaways */}
      <LessonCard title={<div className="flex items-center gap-2"><Lightbulb className="h-5 w-5 text-cyan-400" />📘 Key Takeaways</div>}>
        <ul className="list-disc list-inside text-sm space-y-2">
          <li><strong>Short-term safety & parking:</strong> T-Bills, short-duration debt, liquid instruments</li>
          <li><strong>Stability & income:</strong> High-quality government/PSU bonds or conservative debt</li>
          <li><strong>Higher yield comes with risk:</strong> lower ratings → more credit/default risk</li>
          <li>Debt helps *diversify* equity risk and align with goal timelines</li>
        </ul>
      </LessonCard>

      {/* 7️⃣ Quiz */}
      <LessonCard title="💬 Quick Quiz">
        <QuizComponent />
      </LessonCard>
    </motion.section>
  )
}

/* ======================================================= */
/* UI Helpers */
/* ======================================================= */

function LessonCard({ title, children }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
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
      <Shield className="h-4 w-4" />
      Educational only — NeoCred is not SEBI-registered; no product recommendations provided.
    </p>
  )
}

/* ======================================================= */
/* 2️⃣ Category Cards (Expandable) */
/* ======================================================= */

function CategoryCards() {
  return (
    <LessonCard title={<div className="flex items-center gap-2"><Layers className="h-5 w-5 text-cyan-400" />2️⃣ Main Categories — Click to Learn More</div>}>
      <div className="grid md:grid-cols-2 gap-4">
        <AccordionCard
          icon={<Landmark className="h-6 w-6 text-cyan-300" />}
          title="Government Securities (G-Sec / T-Bills)"
          bullets={[
            "T-Bills: 91/182/364-day, issued at discount; no coupons",
            "G-Sec: 5–40 years, periodic coupons; highest credit quality (sovereign)",
            "Use for safety, collateral, or rate-view strategies",
          ]}
          footnote="Interest rate risk applies: prices fall if market yields rise."
        />
        <AccordionCard
          icon={<Coins className="h-6 w-6 text-emerald-300" />}
          title="Corporate Bonds & NCDs"
          bullets={[
            "Issued by companies/NBFCs; coupon-bearing",
            "Higher yields than G-Secs with *credit risk*",
            "Check rating (AAA → D), covenants, and liquidity",
          ]}
          footnote="More yield ≈ more risk. Study issuer quality & terms."
        />
        <AccordionCard
          icon={<Gauge className="h-6 w-6 text-indigo-300" />}
          title="Short-Term Debt (CP, CD, Money Market)"
          bullets={[
            "CP: Unsecured short-term corporate paper",
            "CD: Time deposits by banks/financial institutions",
            "Used for treasury/parking via funds or direct in money markets",
          ]}
          footnote="Typically low duration risk; watch credit & rollover risks."
        />
        <AccordionCard
          icon={<ScrollText className="h-6 w-6 text-blue-300" />}
          title="Special: RBI Floating Rate & Tax-Free (when available)"
          bullets={[
            "RBI Floating Rate Savings Bonds: linked to benchmark, resets periodically",
            "Tax-free bonds (when issued): lower yield, tax-efficient interest",
            "PSU/Infra bonds (case-by-case) — read terms & tax treatment",
          ]}
          footnote="Availability varies. Mind lock-ins, liquidity, and taxation."
        />
      </div>
    </LessonCard>
  )
}

function AccordionCard({
  icon,
  title,
  bullets,
  footnote,
}: {
  icon: any
  title: string
  bullets: string[]
  footnote?: string
}) {
  const [open, setOpen] = useState(false)
  return (
    <div className="rounded-xl border border-white/10 bg-white/10">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-4"
      >
        <div className="flex items-center gap-3">
          {icon}
          <div className="text-white font-semibold">{title}</div>
        </div>
        {open ? <ChevronUp className="h-5 w-5 text-blue-200" /> : <ChevronDown className="h-5 w-5 text-blue-200" />}
      </button>
      {open && (
        <div className="px-5 pb-4">
          <ul className="list-disc list-inside text-blue-100 space-y-1 text-sm">
            {bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
          {footnote && <p className="text-[11px] text-blue-300 mt-2">{footnote}</p>}
        </div>
      )}
    </div>
  )
}

/* ======================================================= */
/* 3️⃣ Key Concepts */
/* ======================================================= */

function KeyConcepts() {
  return (
    <LessonCard title={<div className="flex items-center gap-2"><Target className="h-5 w-5 text-cyan-400" />3️⃣ Key Concepts You Must Know</div>}>
      <div className="grid md:grid-cols-2 gap-4">
        <ConceptBox
          title="Coupon vs Yield"
          points={[
            "Coupon: fixed % paid on face value",
            "Yield (YTM): return implied by current price & coupons till maturity",
            "When prices fall → yields rise (and vice-versa)",
          ]}
        />
        <ConceptBox
          title="Credit Ratings"
          points={[
            "Scale: AAA (highest) → AA → A → BBB → ... → D (default)",
            "Lower rating = higher credit risk & usually higher yield",
            "Ratings can change; monitor regularly",
          ]}
        />
        <ConceptBox
          title="Interest Rate Risk"
          points={[
            "Bond prices move inversely to market yields",
            "Longer maturity/duration = more price sensitivity",
            "Match duration with your goal timelines",
          ]}
        />
        <ConceptBox
          title="Tax & Liquidity"
          points={[
            "Interest taxed per slab (instrument dependent); capital gains rules vary",
            "Liquidity differs by market segment/issue",
            "Consider post-tax, post-cost returns",
          ]}
        />
      </div>
    </LessonCard>
  )
}

function ConceptBox({ title, points }: { title: string; points: string[] }) {
  return (
    <div className="rounded-xl p-4 bg-white/10 border border-white/10">
      <div className="text-white font-semibold flex items-center gap-2 mb-1">
        <Info className="h-4 w-4 text-cyan-300" /> {title}
      </div>
      <ul className="list-disc list-inside text-sm text-blue-100 space-y-1">
        {points.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </div>
  )
}

/* ======================================================= */
/* 4️⃣ Interactive Tools */
/* ======================================================= */

/* YTM Calculator — price-based, simple bond, annual coupon */
function YTMCalculator() {
  const [face, setFace] = useState(1000)
  const [price, setPrice] = useState(980)
  const [coupon, setCoupon] = useState(7.0) // % annual on face
  const [years, setYears] = useState(5)
  const [freq, setFreq] = useState(1) // coupons per year

  const ytm = useMemo(() => {
    return estimateYTM(face, price, coupon, years, freq)
  }, [face, price, coupon, years, freq])

  return (
    <LessonCard title={<div className="flex items-center gap-2"><Calculator className="h-5 w-5 text-cyan-400" />4️⃣ Yield-to-Maturity (YTM) — Educational Calculator</div>}>
      <p className="text-blue-200 text-sm mb-3">
        YTM is the annualized return implied by *current price, **coupon, and **time to maturity* (assuming hold to maturity & reinvestment at YTM).
      </p>
      <div className="grid md:grid-cols-5 gap-4">
        <InputBox label="Face Value (₹)" value={face} onChange={(e:any)=>setFace(num(e.target.value))} icon={<Coins className="h-4 w-4 text-cyan-300" />} />
        <InputBox label="Market Price (₹)" value={price} onChange={(e:any)=>setPrice(num(e.target.value))} icon={<Coins className="h-4 w-4 text-cyan-300" />} />
        <InputBox label="Coupon (% p.a.)" value={coupon} onChange={(e:any)=>setCoupon(num(e.target.value))} icon={<Calculator className="h-4 w-4 text-cyan-300" />} />
        <InputBox label="Years to Maturity" value={years} onChange={(e:any)=>setYears(num(e.target.value))} icon={<Landmark className="h-4 w-4 text-cyan-300" />} />
        <InputBox label="Payments / Year" value={freq} onChange={(e:any)=>setFreq(Math.max(1, Math.floor(num(e.target.value))))} icon={<Gauge className="h-4 w-4 text-cyan-300" />} />
      </div>

      <div className="grid md:grid-cols-3 gap-4 mt-4">
        <StatBox label="Estimated YTM (annual)" value={`${isFinite(ytm) ? ytm.toFixed(2) : "—"}%`} highlight />
        <StatBox label="Coupon Cash (₹/yr)" value={`${((coupon/100)*face).toFixed(0)}`} />
        <StatBox label="Price vs Face" value={price < face ? "Discount" : price > face ? "Premium" : "At Par"} />
      </div>
      <p className="text-[11px] text-blue-300 mt-2">
        Educational approximation; ignores taxes, costs, call/put features, day-count conventions.
      </p>
    </LessonCard>
  )
}

/* Duration/Rate Risk — simple DV01-style approximation */
function DurationRiskSimulator() {
  const [duration, setDuration] = useState(4.5) // modified duration approx (years)
  const [delta, setDelta] = useState(1.0)       // change in yield (percentage points)
  const priceImpact = -(duration * delta)       // ~% price change

  return (
    <LessonCard title={<div className="flex items-center gap-2"><TrendingUp className="h-5 w-5 text-cyan-400" />5️⃣ Interest-Rate Risk — Duration Sensitivity</div>}>
      <p className="text-blue-200 text-sm mb-3">
        Approximate price impact: *%ΔPrice ≈ − Duration × ΔYield*. Longer duration = more sensitive to rate moves.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="text-xs text-blue-200">Modified Duration (yrs)</label>
          <input type="range" min={0} max={12} step={0.5} value={duration} onChange={(e)=>setDuration(Number(e.target.value))}
            className="w-full mt-2 accent-blue-500" />
          <div className="text-white font-semibold">{duration.toFixed(1)} yrs</div>
        </div>
        <div>
          <label className="text-xs text-blue-200">ΔYield (percentage points)</label>
          <input type="range" min={-2} max={2} step={0.1} value={delta} onChange={(e)=>setDelta(Number(e.target.value))}
            className="w-full mt-2 accent-blue-500" />
          <div className="text-white font-semibold">{delta.toFixed(1)}%</div>
        </div>
      </div>

      <div className="rounded-xl mt-4 p-4 bg-white/10 border border-white/10">
        <div className="text-blue-200 text-sm">Estimated Price Change</div>
        <div className={`text-2xl font-semibold ${priceImpact < 0 ? "text-red-300" : "text-green-300"}`}>
          {priceImpact.toFixed(2)}%
        </div>
        <p className="text-[11px] text-blue-300 mt-1">
          If yields rise by 1%, a bond with duration ~5 may fall ~5% (illustrative).
        </p>
      </div>
    </LessonCard>
  )
}

/* Credit Rating vs Expected Yield — illustrative relative scale */
function CreditRatingYieldMap() {
  const ratings = ["AAA", "AA", "A", "BBB", "BB", "B"]
  const [sel, setSel] = useState("AA")

  const rel = {
    "AAA": 1.00,
    "AA": 1.10,
    "A": 1.25,
    "BBB": 1.45,
    "BB": 1.70,
    "B": 2.00,
  } as Record<string, number>

  const base = 7 // illustrative base rate
  const est = base * (rel[sel] ?? 1)

  return (
    <LessonCard title={<div className="flex items-center gap-2"><BarChart3 className="h-5 w-5 text-cyan-400" />5️⃣ Credit Rating vs Expected Yield (Illustrative)</div>}>
      <p className="text-blue-200 text-sm mb-3">
        Lower rating → *higher expected yield* for bearing extra credit/default risk. This is a teaching aid, not a quote.
      </p>

      <div className="grid sm:grid-cols-3 gap-3">
        {ratings.map((r) => (
          <button
            key={r}
            onClick={() => setSel(r)}
            className={`px-4 py-2 rounded-xl border transition ${
              sel === r
                ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white"
                : "bg-white/10 border-white/10 text-blue-100 hover:bg-white/20"
            }`}
          >
            {r}
          </button>
        ))}
      </div>

      <div className="mt-4 space-y-2">
        <Bar label="Relative Yield Scale" value={rel[sel] * 50} tone="from-cyan-600/40 to-blue-600/40" />
        <div className="text-white font-semibold text-lg">Illustrative Yield: ~ {est.toFixed(1)}% p.a.</div>
        <p className="text-[11px] text-blue-300">
          Actual yields depend on issuer, tenor, market, liquidity, covenants, taxation, etc.
        </p>
      </div>
    </LessonCard>
  )
}

/* ======================================================= */
/* 5️⃣ Comparison Table */
/* ======================================================= */

function ComparisonTable() {
  const rows = [
    {
      name: "Treasury Bills (91/182/364d)",
      risk: "Very Low (Sovereign)",
      tenure: "≤ 1 year",
      liquidity: "High",
      tax: "Discount taxed as ST income",
      use: "Parking, short-term safety",
    },
    {
      name: "Government Bonds (G-Sec)",
      risk: "Very Low (Sovereign)",
      tenure: "5–40 years",
      liquidity: "High–Medium (issue dependent)",
      tax: "Coupon taxed per slab; CG rules vary",
      use: "Core stability, duration strategies",
    },
    {
      name: "Corporate Bonds / NCDs",
      risk: "Low–High (rating-based)",
      tenure: "1–10+ years",
      liquidity: "Medium (varies by issue)",
      tax: "Coupon slab; CG rules vary",
      use: "Higher income with credit risk",
    },
    {
      name: "CP / CD / Money Market",
      risk: "Low–Medium (issuer-based)",
      tenure: "≤ 1 year",
      liquidity: "High (via funds/markets)",
      tax: "Interest slab; fund rules vary",
      use: "Treasury/parking, emergency buffer",
    },
    {
      name: "RBI Floating Rate Bonds",
      risk: "Low (Sovereign)",
      tenure: "7 years (typical)",
      liquidity: "Low–Medium (restrictions)",
      tax: "Interest taxed per slab",
      use: "Rate-linked income, long holding",
    },
    {
      name: "Tax-Free Bonds (when available)",
      risk: "Low (PSU/Infra)",
      tenure: "Long (10–20 yrs typical)",
      liquidity: "Listed; moderate",
      tax: "Interest tax-free (as per issue)",
      use: "Tax-efficient income",
    },
  ]

  return (
    <div className="overflow-x-auto rounded-xl border border-white/10">
      <table className="min-w-full text-left text-sm text-blue-100">
        <thead className="bg-white/10 text-blue-200 text-xs uppercase tracking-wide">
          <tr>
            <th className="px-4 py-3">Instrument</th>
            <th className="px-4 py-3">Risk</th>
            <th className="px-4 py-3">Tenure</th>
            <th className="px-4 py-3">Liquidity</th>
            <th className="px-4 py-3">Taxation</th>
            <th className="px-4 py-3">Typical Use</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-t border-white/10">
              <td className="px-4 py-3">{r.name}</td>
              <td className="px-4 py-3">{r.risk}</td>
              <td className="px-4 py-3">{r.tenure}</td>
              <td className="px-4 py-3">{r.liquidity}</td>
              <td className="px-4 py-3">{r.tax}</td>
              <td className="px-4 py-3">{r.use}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

/* ======================================================= */
/* 7️⃣ Quiz */
/* ======================================================= */

function QuizComponent() {
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [score, setScore] = useState(0)

  const quiz = [
    {
      question: "Which typically has the lowest credit risk?",
      options: ["Corporate NCD (A rating)", "Government Security (G-Sec)", "Commercial Paper", "Perpetual AT1 bond"],
      correct: "Government Security (G-Sec)",
    },
    {
      question: "If interest rates rise by 1%, a long-duration bond’s price will:",
      options: ["Likely rise", "Stay the same", "Likely fall", "Double"],
      correct: "Likely fall",
    },
    {
      question: "YTM depends on:",
      options: ["Only coupon rate", "Only face value", "Only tenure", "Price, coupons, and time to maturity"],
      correct: "Price, coupons, and time to maturity",
    },
  ]

  const pick = (qi: number, opt: string) => !submitted && setAnswers((p) => ({ ...p, [qi]: opt }))
  const submit = () => {
    setScore(quiz.filter((q, i) => answers[i] === q.correct).length)
    setSubmitted(true)
  }
  const reset = () => { setAnswers({}); setSubmitted(false); setScore(0) }

  return (
    <div className="space-y-6">
      {quiz.map((q, qi) => (
        <motion.div key={qi}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/5 p-4 rounded-xl border border-white/10"
        >
          <p className="font-medium text-blue-100 mb-3">Q{qi + 1}: {q.question}</p>
          {q.options.map((opt, oi) => {
            const isSel = answers[qi] === opt
            const isCor = opt === q.correct
            return (
              <button
                key={oi}
                disabled={submitted}
                onClick={() => pick(qi, opt)}
                className={`w-full text-left px-4 py-2 rounded-lg border mb-2 transition
                  ${isSel ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white border-transparent"
                    : "bg-white/10 hover:bg-white/20 border-white/10"}
                  ${submitted && isCor ? "border-green-400 bg-green-500/10" : ""}
                  ${submitted && isSel && !isCor ? "border-red-400 bg-red-500/10" : ""}`}
              >
                {opt}
              </button>
            )
          })}
        </motion.div>
      ))}

      {!submitted ? (
        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={submit}
          disabled={Object.keys(answers).length < quiz.length}
          className="px-6 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-xl disabled:opacity-50"
        >
          Submit
        </motion.button>
      ) : (
        <div className="text-center text-white space-y-3">
          <div className="text-lg font-semibold flex justify-center gap-2">
            {score === quiz.length ? (
              <>
                <CheckCircle className="h-6 w-6 text-green-400" /> Excellent! 🎯
              </>
            ) : (
              <>
                <XCircle className="h-6 w-6 text-yellow-400" /> {score}/{quiz.length} correct
              </>
            )}
          </div>
          <button
            onClick={reset}
            className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm"
          >
            <RotateCcw className="inline-block h-4 w-4 mr-1" /> Try Again
          </button>
        </div>
      )}
    </div>
  )
}

/* ======================================================= */
/* Small UI Primitives */
/* ======================================================= */

function InputBox({ label, value, onChange, icon }: any) {
  return (
    <div className="bg-white/10 rounded-xl p-4 border border-white/10">
      <label className="text-xs text-blue-200 flex items-center gap-2 mb-1">{icon} {label}</label>
      <input
        type="number"
        value={value}
        onChange={onChange}
        className="w-full p-2 rounded-lg bg-white/20 border border-white/10 text-white outline-none"
      />
    </div>
  )
}

function StatBox({ label, value, highlight = false }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className={`rounded-xl p-4 border border-white/10 ${highlight ? "bg-gradient-to-r from-cyan-600/20 to-blue-600/20" : "bg-white/10"}`}>
      <div className="text-[11px] uppercase tracking-wide text-blue-200">{label}</div>
      <div className={`text-white font-semibold ${highlight ? "text-lg" : ""}`}>{value}</div>
    </div>
  )
}

function Bar({ label, value, tone }: { label: string; value: number; tone: string }) {
  const pct = Math.min(100, Math.max(4, Math.round(value)))
  return (
    <div className="w-full">
      <div className="flex items-center justify-between text-xs text-blue-200">
        <span>{label}</span>
        <span>{pct}%</span>
      </div>
      <div className="w-full h-3 bg-white/10 rounded-lg overflow-hidden mt-1">
        <div className={`h-3 rounded-lg bg-gradient-to-r ${tone}`} style={{ width: `${pct}%` }} />
      </div>
    </div>
  )
}

/* ======================================================= */
/* Math Helpers */
/* ======================================================= */

function num(v: any) {
  const n = Number(v)
  return Number.isFinite(n) ? n : 0
}

/** Estimate YTM via binary search on discount rate r such that PV(cashflows)=price */
function estimateYTM(face: number, price: number, couponPct: number, years: number, freq: number) {
  const c = (couponPct / 100) * face
  const n = Math.max(1, Math.round(years * freq))
  const cf: number[] = Array.from({ length: n }, (_, i) => (i === n - 1 ? c / freq + face : c / freq))

  // Binary search bounds for yield per period
  let lo = -0.99, hi = 1.0 // -99% to +100% per period
  const pv = (rate: number) => {
    let sum = 0
    for (let t = 1; t <= n; t++) sum += cf[t - 1] / Math.pow(1 + rate, t)
    return sum
  }

  for (let i = 0; i < 80; i++) {
    const mid = (lo + hi) / 2
    const val = pv(mid)
    if (val > price) lo = mid
    else hi = mid
  }
  const yPeriod = (lo + hi) / 2
  const annualY = (Math.pow(1 + yPeriod, freq) - 1) * 100
  return annualY
}