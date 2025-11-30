"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  LineChart,
  ShieldCheck,
  Scale,
  Layers,
  TrendingUp,
  BarChart2,
  Target,
  Coins,
  FileSearch,
  CheckCircle,
  XCircle,
  RotateCcw,
} from "lucide-react"

/**
 * Lesson: Derivatives Simplified — Futures, Options, Hedging
 * Level: Advanced (Educational Only, SEBI-compliant)
 * File: derivatives-simplified.tsx
 */

export default function Lesson_DerivativesSimplified() {
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
          <LineChart className="h-8 w-8 text-cyan-400" />
          Derivatives Simplified — Futures, Options & Hedging
        </h1>
        <p className="text-blue-200 text-lg">
          Understand how derivatives work, their purpose in risk management, and how they’re used by investors and institutions.
        </p>
        <Disclaimer />
      </header>

      {/* 1️⃣ What Are Derivatives */}
      <LessonCard icon={<Layers className="h-5 w-5 text-cyan-300" />} title="1️⃣ What Are Derivatives?">
        <p>
          A <strong>derivative</strong> is a financial contract whose value depends (“derives”) on an underlying asset like
          <em> stocks, commodities, currencies, or interest rates.</em>
        </p>
        <ul className="list-disc list-inside mt-2 text-blue-100 space-y-1">
          <li>Used for <strong>hedging</strong>, <strong>speculation</strong>, and <strong>arbitrage</strong>.</li>
          <li>Traded on exchanges (like NSE/BSE) or over-the-counter (OTC).</li>
          <li>Examples: Futures, Options, Forwards, Swaps.</li>
        </ul>
      </LessonCard>

      {/* 2️⃣ Types of Derivatives */}
      <LessonCard icon={<BarChart2 className="h-5 w-5 text-green-300" />} title="2️⃣ Major Types of Derivatives">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl p-4 bg-white/10 border border-white/10">
            <h3 className="font-semibold text-white mb-1">Futures</h3>
            <p className="text-sm text-blue-100">
              Standardized contracts to buy/sell an asset at a future date at a predetermined price.
            </p>
            <p className="text-xs text-blue-300 mt-1">Example: Nifty Futures, Gold Futures.</p>
          </div>
          <div className="rounded-xl p-4 bg-white/10 border border-white/10">
            <h3 className="font-semibold text-white mb-1">Options</h3>
            <p className="text-sm text-blue-100">
              Provide the <strong>right but not the obligation</strong> to buy or sell at a set price before expiry.
            </p>
            <p className="text-xs text-blue-300 mt-1">Example: Nifty Call Option (Buy) / Put Option (Sell).</p>
          </div>
        </div>
        <p className="text-xs text-blue-300 mt-2">
          Futures require both parties’ obligation; Options provide flexibility for the buyer.
        </p>
      </LessonCard>

      {/* 3️⃣ Futures vs Options Comparison Table */}
      <LessonCard icon={<Scale className="h-5 w-5 text-amber-300" />} title="3️⃣ Futures vs Options — Key Differences">
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse text-blue-100">
            <thead className="bg-white/10 text-blue-200 text-xs uppercase">
              <tr>
                <th className="p-2 border-b border-white/10 text-left">Feature</th>
                <th className="p-2 border-b border-white/10 text-left">Futures</th>
                <th className="p-2 border-b border-white/10 text-left">Options</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Obligation", "Both buyer & seller obligated", "Only seller obligated"],
                ["Upfront Cost", "Requires margin", "Option premium only"],
                ["Profit Potential", "Unlimited gains/loss", "Limited loss, unlimited gain (for buyer)"],
                ["Use Case", "Hedging, speculation", "Hedging, insurance, income generation"],
              ].map((row, i) => (
                <tr key={i} className="border-b border-white/10">
                  <td className="p-2 text-blue-200">{row[0]}</td>
                  <td className="p-2">{row[1]}</td>
                  <td className="p-2">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </LessonCard>

      {/* 4️⃣ How Hedging Works */}
      <LessonCard icon={<ShieldCheck className="h-5 w-5 text-emerald-400" />} title="4️⃣ How Hedging Works — Reducing Risk">
        <p>
          Hedging means <strong>reducing potential losses</strong> by taking an opposite position in a related asset.
        </p>
        <div className="mt-3 grid md:grid-cols-2 gap-4">
          <div className="rounded-xl p-4 bg-white/10 border border-white/10">
            <h3 className="text-white font-semibold">Example: Farmer & Futures</h3>
            <p className="text-sm text-blue-100">
              A wheat farmer sells wheat futures to lock in today’s price. If prices fall later, futures profit offsets loss.
            </p>
          </div>
          <div className="rounded-xl p-4 bg-white/10 border border-white/10">
            <h3 className="text-white font-semibold">Investor & Put Options</h3>
            <p className="text-sm text-blue-100">
              An investor buys a <strong>Put Option</strong> to protect portfolio downside — like insurance for stock prices.
            </p>
          </div>
        </div>
        <p className="text-xs text-blue-300 mt-2">
          Hedging reduces risk — but also limits potential returns. It’s not a way to make guaranteed profits.
        </p>
      </LessonCard>

      {/* 5️⃣ Margin & Leverage */}
      <LessonCard icon={<TrendingUp className="h-5 w-5 text-pink-400" />} title="5️⃣ Margin & Leverage — The Double-Edged Sword">
        <p>
          Derivatives use <strong>margin trading</strong>, allowing you to control large positions with small capital.
        </p>
        <ul className="list-disc list-inside mt-2 text-sm text-blue-100 space-y-1">
          <li>Leverage magnifies both profits and losses.</li>
          <li>Initial Margin + Mark-to-Market adjustments apply daily.</li>
          <li>Excessive leverage can cause rapid capital erosion.</li>
        </ul>
        <p className="text-xs text-blue-300 mt-2">
          Example: A 5% price drop in a 20x leveraged position = 100% capital loss.
        </p>
      </LessonCard>

      {/* 6️⃣ Real-World Use Cases */}
      <LessonCard icon={<Coins className="h-5 w-5 text-yellow-300" />} title="6️⃣ Real-World Uses of Derivatives">
        <ul className="list-disc list-inside space-y-2 text-blue-100 text-sm">
          <li>
            <strong>Corporates:</strong> Hedge foreign exchange or commodity price risk (e.g., oil importers).
          </li>
          <li>
            <strong>Investors:</strong> Hedge portfolio downside via index puts.
          </li>
          <li>
            <strong>Traders:</strong> Speculate on short-term movements using leverage.
          </li>
          <li>
            <strong>Arbitrageurs:</strong> Profit from price differences between cash and futures markets.
          </li>
        </ul>
      </LessonCard>

      {/* 7️⃣ Risk Management Tips */}
      <LessonCard icon={<Target className="h-5 w-5 text-purple-300" />} title="7️⃣ Risk Management Tips for Derivatives">
        <ul className="list-disc list-inside text-blue-100 text-sm space-y-1">
          <li>Use derivatives for <strong>hedging</strong>, not blind speculation.</li>
          <li>Track <strong>margin requirements</strong> and mark-to-market updates daily.</li>
          <li>Understand contract expiry and settlement before entry.</li>
          <li>Always set stop-loss and position size rules.</li>
        </ul>
        <p className="text-xs text-blue-300 mt-2">
          Institutional investors use strict <strong>risk limits</strong> — individual traders should too.
        </p>
      </LessonCard>

      {/* 8️⃣ 💬 Quick Quiz */}
      <LessonCard title="💬 Quick Quiz">
        <QuizComponent />
      </LessonCard>
    </motion.section>
  )
}

/* ---------------------- Reusable Components ---------------------- */

function LessonCard({ title, icon, children }: { title: string; icon?: any; children: any }) {
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
      <ShieldCheck className="h-4 w-4" /> Educational only — NeoCred is not a SEBI-registered advisor. For awareness
      and investor learning purposes only.
    </p>
  )
}

/* ---------------------- Quiz Component ---------------------- */

function QuizComponent() {
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [score, setScore] = useState(0)

  const quiz = [
    {
      question: "A derivative’s value is based on:",
      options: ["Company profits", "Underlying asset", "Government bonds", "Bank interest rate"],
      correct: "Underlying asset",
    },
    {
      question: "Which derivative gives the right but not obligation to buy/sell?",
      options: ["Future", "Option", "Forward", "Swap"],
      correct: "Option",
    },
    {
      question: "Hedging aims to:",
      options: ["Increase leverage", "Reduce risk exposure", "Maximize profits only"],
      correct: "Reduce risk exposure",
    },
  ]

  const handleSelect = (i: number, opt: string) => {
    if (!submitted) setAnswers((prev) => ({ ...prev, [i]: opt }))
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
  )
}
