"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  CreditCard,
  Percent,
  Gift,
  CalendarClock,
  Calculator,
  Wallet,
  IndianRupee,
  ShieldCheck,
  CheckCircle,
  XCircle,
  RotateCcw,
  TrendingUp,
  Info,
  AlertTriangle,
  Target,
  Lightbulb,
} from "lucide-react"

/**
 * Lesson: Credit Card Optimization — Rewards, Cashback, Interest-Free Period
 * Level: Intermediate (Educational Only, SEBI-compliant)
 */

export default function Lesson_CreditCardOptimization() {
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
          <CreditCard className="h-8 w-8 text-cyan-400" />
          Credit Card Optimization — Rewards, Cashback & Interest-Free Period
        </h1>
        <p className="text-blue-200 text-lg">
          Learn how to use credit cards smartly — maximize benefits, avoid interest, and stay debt-free. 💡
        </p>
        <Disclaimer />
      </header>

      {/* 1️⃣ Concept */}
      <LessonCard title={<div className="flex items-center gap-2"><Info className="h-5 w-5 text-cyan-400" />1️⃣ Why Credit Card Optimization Matters</div>}>
        <p>
          A credit card is a **financial tool**, not free money. Used wisely, it offers rewards, credit history, and short-term liquidity.  
          Misused, it can lead to **high-interest debt** (30–40% p.a.).  
          The goal is to enjoy benefits without ever paying interest.
        </p>
        <ul className="list-disc list-inside text-sm mt-3 space-y-1">
          <li>Pay full balance each month — never revolve.</li>
          <li>Track billing and due dates to use the interest-free window smartly.</li>
          <li>Choose cards based on your **spend categories**, not brand hype.</li>
        </ul>
      </LessonCard>

      {/* 2️⃣ Rewards System */}
      <LessonCard title={<div className="flex items-center gap-2"><Gift className="h-5 w-5 text-green-400" />2️⃣ Rewards, Cashback & Points — How They Work</div>}>
        <p>
          Every ₹ you spend earns **reward points or cashback**, depending on card type.  
          The typical value per ₹100 spent:
        </p>
        <table className="w-full mt-3 text-sm text-blue-100 border-collapse">
          <thead className="bg-white/10 text-blue-200 text-xs uppercase">
            <tr>
              <th className="p-3 border-b border-white/10 text-left">Category</th>
              <th className="p-3 border-b border-white/10 text-left">Reward Type</th>
              <th className="p-3 border-b border-white/10 text-left">Typical Value / ₹100</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-white/10">
              <td className="p-3 text-white">Online / E-commerce</td>
              <td className="p-3">Cashback / Points</td>
              <td className="p-3">₹1–₹2</td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="p-3 text-white">Travel / Fuel</td>
              <td className="p-3">AirMiles / Fuel Points</td>
              <td className="p-3">₹1–₹1.5</td>
            </tr>
            <tr>
              <td className="p-3 text-white">Groceries / Dining</td>
              <td className="p-3">Cashback</td>
              <td className="p-3">₹0.5–₹1</td>
            </tr>
          </tbody>
        </table>
        <p className="text-xs text-blue-300 mt-2">
          Tip: Focus on **effective reward rate**, not headline multipliers (e.g., “10X” may mean 1% real return).
        </p>
      </LessonCard>

      {/* 3️⃣ Interest-Free Period Explained */}
      <LessonCard title={<div className="flex items-center gap-2"><CalendarClock className="h-5 w-5 text-cyan-400" />3️⃣ Interest-Free Period — The Hidden Advantage</div>}>
        <p>
          Most cards offer **up to 45–55 days** interest-free credit.  
          This includes your **billing cycle (30 days)** + **grace period (15–25 days)**.  
          You pay no interest **if full dues are cleared by due date.**
        </p>
        <ul className="list-disc list-inside text-sm mt-3 space-y-1">
          <li>Best use: time large purchases just after your statement date.</li>
          <li>Avoid: partial payment — interest applies to the entire amount.</li>
          <li>Late payments hurt your <strong>CIBIL score</strong> and attract late fees.</li>
        </ul>
        <InterestFreeCalculator />
      </LessonCard>

      {/* 4️⃣ Example — Optimize Rewards */}
      <LessonCard title={<div className="flex items-center gap-2"><Calculator className="h-5 w-5 text-cyan-400" />4️⃣ Example: Smart Reward Optimization</div>}>
        <p>
          Let’s assume you spend ₹50,000/month split as follows:
        </p>
        <table className="w-full mt-3 text-sm text-blue-100 border-collapse">
          <thead className="bg-white/10 text-blue-200 text-xs uppercase">
            <tr>
              <th className="p-3 border-b border-white/10 text-left">Category</th>
              <th className="p-3 border-b border-white/10 text-left">Spend</th>
              <th className="p-3 border-b border-white/10 text-left">Reward Rate</th>
              <th className="p-3 border-b border-white/10 text-left">Reward Value</th>
            </tr>
          </thead>
          <tbody>
            <RewardRow label="Online Shopping" spend={20000} rate={1.5} />
            <RewardRow label="Dining" spend={10000} rate={1.0} />
            <RewardRow label="Groceries" spend={10000} rate={0.75} />
            <RewardRow label="Fuel & Misc" spend={10000} rate={0.5} />
          </tbody>
        </table>
      </LessonCard>

      {/* 5️⃣ Interest Trap — Why Minimum Payment Hurts */}
      <LessonCard title={<div className="flex items-center gap-2"><AlertTriangle className="h-5 w-5 text-red-400" />5️⃣ Interest Trap — Why Paying Minimum Due Is Costly</div>}>
        <p>
          Paying only the **minimum due (5%)** leads to compounding interest (30–42% p.a.).  
          Here's an example:
        </p>
        <InterestTrapCalculator />
      </LessonCard>

      {/* 6️⃣ Smart Practices Checklist */}
      <LessonCard title={<div className="flex items-center gap-2"><Target className="h-5 w-5 text-cyan-400" />6️⃣ Smart Card Practices</div>}>
        <ul className="list-disc list-inside text-sm space-y-2">
          <li>🧾 Pay **full balance before due date** — set auto-pay.</li>
          <li>📅 Keep spending just after statement generation to maximize the interest-free window.</li>
          <li>💡 Track spending categories — use fintech apps or bank dashboards.</li>
          <li>⚠️ Avoid withdrawing cash — interest starts immediately.</li>
          <li>📊 Maintain utilization &lt; 30% of limit to protect your credit score.</li>
        </ul>
      </LessonCard>

      {/* 7️⃣ Key Takeaways */}
      <LessonCard title={<div className="flex items-center gap-2"><Lightbulb className="h-5 w-5 text-green-400" />📘 Key Takeaways</div>}>
        <ul className="list-disc list-inside text-sm space-y-2">
          <li>Optimize cards based on **your lifestyle categories** (not brand hype).</li>
          <li>Rewards make sense only if you always pay in full.</li>
          <li>Use **auto-reminders**, track interest-free dates, and keep utilization balanced.</li>
        </ul>
      </LessonCard>

      {/* 8️⃣ Quiz */}
      <LessonCard title="💬 Quick Quiz">
        <QuizComponent />
      </LessonCard>
    </motion.section>
  )
}

/* ======================= Components ======================= */

function LessonCard({ title, children }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
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
      Educational only — NeoCred is not a SEBI-registered advisor. Avoid financial product bias.
    </p>
  )
}

function RewardRow({ label, spend, rate }: { label: string; spend: number; rate: number }) {
  const reward = (spend * rate) / 100
  return (
    <tr className="border-b border-white/10">
      <td className="p-3 text-white">{label}</td>
      <td className="p-3">₹{spend.toLocaleString("en-IN")}</td>
      <td className="p-3">{rate.toFixed(2)}%</td>
      <td className="p-3 text-cyan-300">₹{reward.toFixed(2)}</td>
    </tr>
  )
}

/* ======================= 3️⃣ Interest-Free Period Calculator ======================= */
function InterestFreeCalculator() {
  const [billingDate, setBillingDate] = useState(5)
  const [dueDateGap, setDueDateGap] = useState(20)
  const [purchaseDay, setPurchaseDay] = useState(8)

  const remainingCycle = billingDate > purchaseDay ? billingDate - purchaseDay : 30 - (purchaseDay - billingDate)
  const totalFree = remainingCycle + dueDateGap

  return (
    <div className="mt-4 bg-white/10 p-4 rounded-xl border border-white/10 text-sm">
      <label className="text-blue-200 text-xs mb-2 block">Example — Calculate Interest-Free Days</label>
      <div className="grid md:grid-cols-3 gap-3 mb-3">
        <InputBox label="Billing Date (day of month)" value={billingDate} onChange={setBillingDate} />
        <InputBox label="Grace Period (days)" value={dueDateGap} onChange={setDueDateGap} />
        <InputBox label="Purchase Day (day of month)" value={purchaseDay} onChange={setPurchaseDay} />
      </div>
      <p className="text-white font-semibold text-center">
        ⏳ You get approximately <span className="text-cyan-400">{totalFree} days</span> of interest-free credit.
      </p>
      <p className="text-xs text-blue-300 mt-1 text-center">
        Tip: Make large purchases just after billing date to maximize free days.
      </p>
    </div>
  )
}

/* ======================= 5️⃣ Interest Trap Calculator ======================= */
function InterestTrapCalculator() {
  const [balance, setBalance] = useState(50000)
  const [rate, setRate] = useState(36)
  const [payment, setPayment] = useState(2500)

  const r = rate / 100 / 12
  let months = 0
  let bal = balance
  let totalInterest = 0

  while (bal > 0 && months < 600) {
    const interest = bal * r
    const principal = Math.max(payment - interest, 0)
    bal = bal - principal
    totalInterest += interest
    months++
  }

  return (
    <div className="mt-4 bg-white/10 p-4 rounded-xl border border-white/10 text-sm">
      <div className="grid md:grid-cols-3 gap-4 mb-3">
        <InputBox label="Outstanding Balance (₹)" value={balance} onChange={setBalance} />
        <InputBox label="Interest Rate (p.a. %)" value={rate} onChange={setRate} />
        <InputBox label="Monthly Payment (₹)" value={payment} onChange={setPayment} />
      </div>
      <p className="text-blue-100 text-center">
        💣 It’ll take roughly <strong>{months} months</strong> (~{(months / 12).toFixed(1)} years) to clear this debt, paying about{" "}
        <strong>₹{Math.round(totalInterest).toLocaleString("en-IN")}</strong> in interest.
      </p>
      <p className="text-xs text-blue-300 text-center mt-1">
        Minimum payments barely reduce principal — avoid revolving balances.
      </p>
    </div>
  )
}

/* ======================= Reusable Input ======================= */
function InputBox({ label, value, onChange }: any) {
  return (
    <div className="bg-white/10 rounded-xl p-4 border border-white/10">
      <label className="text-xs text-blue-200 mb-1 block">{label}</label>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full p-2 rounded-lg bg-white/20 border border-white/10 text-white outline-none"
      />
    </div>
  )
}

/* ======================= Quiz ======================= */
function QuizComponent() {
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [score, setScore] = useState(0)

  const quiz = [
    {
      question: "What happens if you pay only the minimum due on your credit card?",
      options: [
        "No problem, it’s interest-free",
        "You get cashback rewards",
        "You pay high interest on full balance",
        "It increases your credit limit",
      ],
      correct: "You pay high interest on full balance",
    },
    {
      question: "How long is the usual interest-free period for most cards?",
      options: ["10–15 days", "20–25 days", "30–45 days", "60–90 days"],
      correct: "30–45 days",
    },
    {
      question: "To maximize rewards, you should:",
      options: [
        "Use cards for your regular spending categories",
        "Withdraw cash using card",
        "Pay after due date",
        "Rotate balances",
      ],
      correct: "Use cards for your regular spending categories",
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
          initial={{ opacity: 0, y: 10 }}
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
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full text-left px-4 py-2 rounded-lg border mb-2 transition-all ${
                  isSelected
                    ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white border-transparent"
                    : "bg-white/10 hover:bg-white/20 border-white/10"
                } ${
                  submitted && isCorrect ? "border-green-400 bg-green-500/10" : ""
                } ${
                  submitted && isSelected && !isCorrect
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
          <motion.button
            onClick={reset}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm"
          >
            <RotateCcw className="inline-block h-4 w-4 mr-1" /> Try Again
          </motion.button>
        </motion.div>
      )}
    </div>
  )
}
