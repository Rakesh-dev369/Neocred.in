"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  HeartPulse,
  Hospital,
  Stethoscope,
  Ambulance,
  ShieldCheck,
  IndianRupee,
  FileText,
  CheckCircle,
  XCircle,
  RotateCcw,
  Info,
  Calculator,
  Target,
  Lightbulb,
  Sparkle,
  Sparkles,
} from "lucide-react"

/**
 * Lesson: Health Insurance Deep Dive — Why it’s a Wealth Protector
 * Level: Intermediate (Educational Only, SEBI-compliant)
 */

export default function Lesson_HealthInsurance() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-5xl mx-auto space-y-10 text-blue-50"
    >
      {/* Header */}
      <header className="text-center space-y-3">
        <h1 className="text-3xl sm:text-4xl font-bold text-white flex items-center justify-center gap-3">
          <HeartPulse className="h-8 w-8 text-green-400" />
          Health Insurance Deep Dive
        </h1>
        <p className="text-blue-200 text-lg">
          Understand how medical insurance protects your wealth, family, and financial stability. 🏥
        </p>
        <Disclaimer />
      </header>

      {/* 1️⃣ Importance */}
      <LessonCard title={<div className="flex items-center gap-2"><Info className="h-5 w-5 text-cyan-400" />1️⃣ Why Health Insurance Is Financially Critical</div>}>
        <p>
          Health insurance is not just a medical product — it’s a **financial safeguard**.  
          A single hospitalization can wipe out years of savings.  
          Having a proper health plan ensures your wealth stays invested for your goals, not for hospital bills.
        </p>
        <ul className="list-disc list-inside text-sm mt-3 space-y-2">
          <li>Medical inflation in India averages 10–12% annually.</li>
          <li>One major hospitalization can cost ₹2–10 lakh easily.</li>
          <li>Even with corporate cover, personal health plans are essential.</li>
        </ul>
      </LessonCard>

      {/* 2️⃣ Types of Health Insurance */}
      <LessonCard title={<div className="flex items-center gap-2"><Hospital className="h-5 w-5 text-cyan-400" />2️⃣ Major Types of Health Insurance Plans in India</div>}>
        <div className="grid md:grid-cols-2 gap-5">
          <InfoCard icon={<Hospital className="text-cyan-400 h-5 w-5" />} title="Individual Health Plan" desc="Covers a single person; sum insured applies only to them." />
          <InfoCard icon={<Ambulance className="text-green-400 h-5 w-5" />} title="Family Floater Plan" desc="One policy covers the entire family under a shared sum insured." />
          <InfoCard icon={<Stethoscope className="text-yellow-400 h-5 w-5" />} title="Critical Illness Plan" desc="Lump sum payout on diagnosis of major diseases like cancer or heart attack." />
          <InfoCard icon={<FileText className="text-pink-400 h-5 w-5" />} title="Top-Up / Super Top-Up Plan" desc="Adds extra coverage above your base plan at a lower premium." />
        </div>
      </LessonCard>

      {/* 3️⃣ Coverage & Exclusions */}
      <LessonCard title={<div className="flex items-center gap-2"><FileText className="h-5 w-5 text-cyan-400" />3️⃣ What’s Covered & What’s Not</div>}>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-white font-semibold mb-2">✅ Common Inclusions</h3>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>Hospitalization (room rent, ICU, doctor fees, tests)</li>
              <li>Pre & post-hospitalization expenses (30–60 days)</li>
              <li>Daycare procedures (like cataract surgery)</li>
              <li>Ambulance charges (within limit)</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-2">❌ Common Exclusions</h3>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>Cosmetic or weight loss surgeries</li>
              <li>Pre-existing conditions (during waiting period)</li>
              <li>Non-allopathic treatments (unless covered)</li>
              <li>Dental & vision unless specifically included</li>
            </ul>
          </div>
        </div>
      </LessonCard>

      {/* 4️⃣ Ideal Cover Amount */}
      <LessonCard title={<div className="flex items-center gap-2"><Target className="h-5 w-5 text-cyan-400" />4️⃣ How Much Cover Should You Have?</div>}>
        <p>
          As healthcare costs rise, your sum insured must keep up with inflation.  
          The general rule:
        </p>
        <ul className="list-disc list-inside text-sm mt-3 space-y-2">
          <li>Metro residents: ₹10–20 lakh cover recommended.</li>
          <li>Tier-2 cities: ₹5–10 lakh cover usually adequate.</li>
          <li>Add a Super Top-Up to extend coverage affordably.</li>
        </ul>
        <p className="text-xs text-blue-300 mt-2">
          Bonus tip: Check if your policy includes <strong>no-claim bonus</strong> — it increases your sum insured for every claim-free year.
        </p>
      </LessonCard>

      {/* 5️⃣ Example Calculator */}
      <InsuranceCostEstimator />

      {/* 6️⃣ Key Features to Compare */}
      <LessonCard title={<div className="flex items-center gap-2"><Stethoscope className="h-5 w-5 text-cyan-400" />6️⃣ Key Features to Compare Before Buying</div>}>
        <ul className="list-disc list-inside text-sm space-y-2">
          <li><strong>Network hospitals</strong> — check cashless facility list.</li>
          <li><strong>Room rent limit</strong> — ideally no cap for smooth claim.</li>
          <li><strong>Co-payment clause</strong> — avoid if possible (reduces claim payout).</li>
          <li><strong>Waiting period</strong> — shorter waiting = better policy.</li>
          <li><strong>Claim settlement ratio</strong> — prefer insurers with 95%+ CSR.</li>
        </ul>
      </LessonCard>

      {/* 7️⃣ Key Takeaways */}
      <LessonCard title={<div className="flex items-center gap-2"><Sparkles className="h-5 w-5 text-yellow-400" />📘 Key Takeaways</div>}>
        <ul className="list-disc list-inside text-sm space-y-2">
          <li>Health insurance = wealth protection. It prevents medical emergencies from becoming financial crises.</li>
          <li>Always review coverage yearly and upgrade as your income grows.</li>
          <li>Don’t rely solely on employer-provided health cover — portability matters.</li>
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
      Educational only — NeoCred is not a SEBI-registered or IRDAI-certified distributor.
    </p>
  )
}

function InfoCard({ icon, title, desc }: any) {
  return (
    <div className="bg-white/5 p-4 rounded-xl border border-white/10">
      <div className="flex items-center gap-2 mb-2">{icon}<h3 className="text-white font-semibold">{title}</h3></div>
      <p className="text-blue-200 text-sm">{desc}</p>
    </div>
  )
}

/* ======================= Calculator ======================= */
function InsuranceCostEstimator() {
  const [cover, setCover] = useState(1000000)
  const [age, setAge] = useState(30)
  const [city, setCity] = useState("Tier-1")

  const basePremium =
    city === "Tier-1"
      ? cover * 0.009
      : city === "Tier-2"
      ? cover * 0.007
      : cover * 0.006

  const ageFactor = age > 45 ? 1.8 : age > 35 ? 1.3 : 1
  const estimatedPremium = basePremium * ageFactor

  return (
    <LessonCard title={<div className="flex items-center gap-2"><Calculator className="h-5 w-5 text-cyan-400" />5️⃣ Estimate Your Annual Premium (Simplified)</div>}>
      <div className="grid md:grid-cols-3 gap-4">
        <InputBox label="Sum Insured (₹)" value={cover} onChange={setCover} />
        <InputBox label="Age (Years)" value={age} onChange={setAge} />
        <select
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="bg-white/10 p-3 rounded-lg border border-white/10 text-white outline-none"
        >
          <option value="Tier-1">Tier-1 (Metro)</option>
          <option value="Tier-2">Tier-2 City</option>
          <option value="Tier-3">Tier-3 / Town</option>
        </select>
      </div>

      <div className="mt-5 rounded-xl bg-white/10 border border-white/10 p-4 text-center">
        <p className="text-blue-200 text-sm mb-1">Estimated Annual Premium</p>
        <p className="text-white text-2xl font-semibold">
          ₹{Math.round(estimatedPremium).toLocaleString("en-IN")}
        </p>
      </div>
      <p className="text-xs text-blue-300 mt-2 text-center">
        Note: Premiums vary by insurer, city, age, and plan type. Always compare before purchasing.
      </p>
    </LessonCard>
  )
}

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
      question: "Why is health insurance considered a wealth protector?",
      options: [
        "It provides guaranteed returns",
        "It prevents medical expenses from draining your savings",
        "It increases investment profits",
        "It helps in tax evasion",
      ],
      correct: "It prevents medical expenses from draining your savings",
    },
    {
      question: "Which plan offers a single shared sum insured for the whole family?",
      options: ["Individual Plan", "Family Floater", "Top-up Plan", "Critical Illness Plan"],
      correct: "Family Floater",
    },
    {
      question: "What is the average medical inflation rate in India?",
      options: ["3–4%", "6–8%", "10–12%", "15–18%"],
      correct: "10–12%",
    },
  ]

  const handleSelect = (i: number, opt: string) => {
    if (!submitted) setAnswers((prev) => ({ ...prev, [i]: opt }))
  }

  const handleSubmit = () => {
    const correctCount = quiz.filter((q, i) => answers[i] === q.correct).length
    setScore(correctCount)
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
