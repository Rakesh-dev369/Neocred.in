"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import {
  Shield,
  FileText,
  Landmark,
  Users,
  Scale,
  BookOpen,
  Briefcase,
  HeartHandshake,
  ShieldCheck,
  CheckCircle,
  XCircle,
  RotateCcw,
} from "lucide-react"

/**
 * Lesson: Wealth Preservation & Estate Planning (Wills, Trusts, Succession)
 * Level: Advanced (Educational Only; SEBI-compliant)
 * File: wealthpreservation-estateplanning/page.tsx
 */

export default function Lesson_WealthPreservationEstatePlanning() {
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
          <Shield className="h-8 w-8 text-cyan-400" />
          Wealth Preservation & Estate Planning
        </h1>
        <p className="text-blue-200 text-lg">
          Secure your wealth for the next generation. Learn how to protect, plan, and pass assets smoothly while minimizing disputes and taxes.
        </p>
        <Disclaimer />
      </header>

      {/* 1️⃣ Wealth Preservation Fundamentals */}
      <LessonCard icon={<Briefcase className="h-5 w-5 text-cyan-300" />} title="1️⃣ Wealth Preservation — Why It Matters">
        <ul className="list-disc list-inside text-sm text-blue-100 space-y-1">
          <li><strong>Purpose:</strong> To safeguard wealth against risks like inflation, taxes, mismanagement, and unforeseen life events.</li>
          <li><strong>Approach:</strong> Diversify assets, ensure liquidity, and use appropriate insurance and legal structures.</li>
          <li><strong>Mindset:</strong> Build, protect, and transfer — the three pillars of long-term financial legacy.</li>
        </ul>
      </LessonCard>

      {/* 2️⃣ Core Pillars of Estate Planning */}
      <LessonCard icon={<BookOpen className="h-5 w-5 text-purple-300" />} title="2️⃣ Core Pillars of Estate Planning">
        <div className="grid md:grid-cols-2 gap-4">
          <BulletCard
            title="Asset Inventory"
            points={[
              "List all physical (property, gold, vehicles) and financial (bank, investments, insurance) assets.",
              "Include digital assets — email, crypto, online accounts, domain ownership, etc.",
              "Document liabilities and joint holdings clearly."
            ]}
          />
          <BulletCard
            title="Legal & Intent Framework"
            points={[
              "Will (most fundamental tool for individuals).",
              "Trusts for complex families, minors, or special dependents.",
              "Power of Attorney and Medical Directives (during lifetime).",
            ]}
          />
        </div>
      </LessonCard>

      {/* 3️⃣ Wills — Foundation of Estate Planning */}
      <LessonCard icon={<FileText className="h-5 w-5 text-amber-300" />} title="3️⃣ Wills — Foundation of Estate Planning">
        <ul className="list-disc list-inside text-sm text-blue-100 space-y-1">
          <li><strong>What it does:</strong> A Will directs how your assets should be distributed after death.</li>
          <li><strong>Key elements:</strong> Testator (you), Executor (person managing), Witnesses, Beneficiaries, and Signature.</li>
          <li><strong>Registration:</strong> Optional but provides authenticity (Sub-Registrar Office under Indian Registration Act).</li>
          <li><strong>Revision:</strong> You can update anytime — recommended after major life events (marriage, child, property sale/purchase).</li>
          <li><strong>Invalid scenarios:</strong> Ambiguous language, no witness, mental incapacity during execution.</li>
        </ul>
      </LessonCard>

      {/* 4️⃣ Trusts — For Complex & Long-Term Planning */}
      <LessonCard icon={<Users className="h-5 w-5 text-emerald-300" />} title="4️⃣ Trusts — Structured Wealth Transfer (Optional but Powerful)">
        <div className="grid md:grid-cols-2 gap-4">
          <BulletCard
            title="Why Create a Trust?"
            points={[
              "Avoid lengthy probate process.",
              "Manage wealth for minors, dependents, or charitable causes.",
              "Maintain privacy and control over distribution.",
              "Can be revocable or irrevocable depending on intent.",
            ]}
          />
          <BulletCard
            title="Types of Trusts"
            points={[
              "Revocable Living Trust — assets managed during lifetime, transferable later.",
              "Irrevocable Trust — ownership shifted, offers protection from certain claims.",
              "Charitable Trust — for social or philanthropic purposes.",
            ]}
          />
        </div>
      </LessonCard>

      {/* 5️⃣ Nomination, Joint Holding & Succession Laws */}
      <LessonCard icon={<Scale className="h-5 w-5 text-green-300" />} title="5️⃣ Nomination, Joint Holding & Succession Laws">
        <ul className="list-disc list-inside text-sm text-blue-100 space-y-1">
          <li><strong>Nominee ≠ Legal Heir:</strong> A nominee holds assets in trust for legal heirs unless also an heir.</li>
          <li><strong>Joint holding:</strong> For bank/investment accounts, ensure clear survivor clause (E or S mode).</li>
          <li><strong>Succession Laws:</strong> Governed by personal law (Hindu Succession Act, Indian Succession Act, Muslim Law, etc.).</li>
          <li><strong>Foreign assets:</strong> May be subject to domicile-based estate laws abroad — check jurisdictional rules.</li>
        </ul>
      </LessonCard>

      {/* 6️⃣ Tax, Probate & Documentation */}
      <LessonCard icon={<Landmark className="h-5 w-5 text-cyan-400" />} title="6️⃣ Tax, Probate & Documentation">
        <div className="grid md:grid-cols-2 gap-4">
          <BulletCard
            title="Tax Considerations"
            points={[
              "No estate duty in India currently (abolished in 1985).",
              "Capital gains apply when assets are sold by heirs.",
              "Trust income may be taxed depending on type (revocable/irrevocable).",
            ]}
          />
          <BulletCard
            title="Probate Process"
            points={[
              "Official validation of a Will by the court.",
              "Mandatory in certain jurisdictions (e.g., Mumbai, Chennai, Kolkata).",
              "Executor applies with original Will, death certificate, asset list.",
            ]}
          />
        </div>
      </LessonCard>

      {/* 7️⃣ Common Mistakes & Best Practices */}
      <LessonCard icon={<HeartHandshake className="h-5 w-5 text-rose-300" />} title="7️⃣ Common Mistakes & Best Practices">
        <div className="grid md:grid-cols-2 gap-4">
          <BulletCard
            title="Avoid These Mistakes"
            points={[
              "No written Will — assuming automatic inheritance.",
              "Unclear asset details or beneficiary splits.",
              "Ignoring digital/overseas assets in planning.",
              "Relying only on nominations without legal documentation.",
            ]}
          />
          <BulletCard
            title="Best Practices"
            points={[
              "Keep all asset documents organized with executor and family.",
              "Update plans every 3–5 years or after major life changes.",
              "Engage a professional lawyer or estate planner for complex estates.",
              "Communicate intent clearly to prevent disputes.",
            ]}
          />
        </div>
      </LessonCard>

      {/* 💬 Quick Quiz */}
      <QuizBlock />
    </motion.section>
  )
}

/* ===================== Reusable Components ===================== */

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
      Educational only — NeoCred is not a SEBI-registered advisor. Consult legal and tax professionals for estate documents or trust setup.
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

/* ===================== Quiz ===================== */

function QuizBlock() {
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [score, setScore] = useState(0)

  const quiz = [
    {
      question: "Which statement about a Will is true?",
      options: [
        "It must always be registered to be valid",
        "It can only be made after retirement",
        "It can be updated anytime before death",
        "It requires court approval to write",
      ],
      correct: "It can be updated anytime before death",
    },
    {
      question: "A Trust is useful when:",
      options: [
        "Assets are simple and few",
        "You want structured control, privacy, or dependent protection",
        "You want to avoid any legal documentation",
        "You want to evade tax",
      ],
      correct: "You want structured control, privacy, or dependent protection",
    },
    {
      question: "Nominee in a bank account is:",
      options: [
        "The legal heir automatically",
        "A temporary custodian till legal distribution",
        "The executor by default",
        "Irrelevant to asset transfer",
      ],
      correct: "A temporary custodian till legal distribution",
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
