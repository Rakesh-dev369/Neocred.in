"use client"

import { useState, useMemo } from "react"
import { motion } from "framer-motion"
import {
  ShieldCheck,
  AlertTriangle,
  Building2,
  Search,
  ListChecks,
  IndianRupee,
  Lock,
  HelpCircle,
  CheckCircle,
  XCircle,
  RotateCcw,
  FileText,
} from "lucide-react"

/**
 * Lesson: How to Choose a Financial Advisor / Platform — SEBI-registered vs Unregulated Apps
 * Level: Intermediate (SEBI-compliant, educational only)
 * File name: finadvisor-sebi-reg.tsx
 *
 * Notes:
 * - Balanced tone: neutral facts + caution on risks + actionable checklists
 * - No recommendations of specific advisors, brokers, or apps
 * - All CTAs are learning/education oriented (not advice)
 */

export default function Lesson_FinAdvisorSEBIReg() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-5xl mx-auto space-y-10 text-blue-50"
    >
      {/* Header */}
      <header className="text-center space-y-3">
        <h1 className="text-3xl sm:text-3.5xl font-bold text-white flex items-center justify-center gap-2">
          <motion.div initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }}>
            <ShieldCheck className="h-8 w-8 text-emerald-400" />
          </motion.div>
          SEBI-Registered vs Unregulated: Choosing Safely & Smartly
        </h1>
        <p className="text-blue-200 text-lg">
          Understand SEBI’s role, compare platforms, spot red flags, verify registrations, and use a practical checklist.
        </p>
        <Disclaimer />
      </header>

      {/* 1️⃣ SEBI & Roles */}
      <SectionCard
        title={
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <Building2 className="h-5 w-5 text-cyan-400 inline-block mr-2" />
            </motion.div>
            1️⃣ What SEBI Does & Who’s Regulated
          </>
        }
      >
        <p className="mb-3">
          The Securities and Exchange Board of India (SEBI) regulates India’s securities markets to protect investors and
          ensure fair practices. Different activities require different registrations:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>Investment Adviser (RIA)</strong> — gives personalized advice for a fee; follows fiduciary duty.
          </li>
          <li>
            <strong>Research Analyst (RA)</strong> — publishes research/recommendations (not personalized advice).
          </li>
          <li>
            <strong>Stock Broker / DP</strong> — execution, accounts, custody (regulated via exchanges & depositories).
          </li>
          <li>
            <strong>PMS / AIF / MF</strong> — portfolio management, alternative funds, mutual funds (separate norms).
          </li>
        </ul>
        <p className="text-xs text-blue-300 mt-2">
          Apps that only provide <em>tools/education</em> may not need advisory registration if they avoid advice/solicitation.
        </p>
      </SectionCard>

      {/* 2️⃣ Comparison Table */}
      <SectionCard
        title={
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <ShieldCheck className="h-5 w-5 text-emerald-400 inline-block mr-2" />
            </motion.div>
            2️⃣ SEBI-Registered vs Unregulated — Side-by-Side
          </>
        }
      >
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-blue-100 border-collapse">
            <thead className="bg-white/10 text-blue-200 text-xs uppercase">
              <tr>
                <th className="p-2 border-b border-white/10 text-left">Aspect</th>
                <th className="p-2 border-b border-white/10 text-left">SEBI-Registered (RIA/RA/Broker)</th>
                <th className="p-2 border-b border-white/10 text-left">Unregulated Apps/Creators</th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  "Investor Protection",
                  "Codes of conduct, audits/oversight; grievance escalation paths exist.",
                  "No mandated standards; limited or no escalation.",
                ],
                [
                  "Conflicts & Fees",
                  "Disclosure of fees/affiliations required; fiduciary duty for RIAs.",
                  "Opaque affiliations, undisclosed commissions common.",
                ],
                [
                  "Advice Type",
                  "RIA: personalized advice allowed; RA: research only; Brokers: execution.",
                  "Often implied advice/promotions without accountability.",
                ],
                [
                  "Data & Suitability",
                  "Suitability/appropriateness checks expected (context-dependent).",
                  "One-size-fits-all content; no suitability checks.",
                ],
                [
                  "Enforcement",
                  "Actionable by regulator/exchanges for violations.",
                  "Little recourse beyond platform T&Cs.",
                ],
              ].map((row, i) => (
                <tr key={i} className="border-b border-white/10">
                  <td className="p-2 text-white font-medium">{row[0]}</td>
                  <td className="p-2">{row[1]}</td>
                  <td className="p-2">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionCard>

      {/* 3️⃣ How to Verify Registration */}
      <VerifyBox />

      {/* 4️⃣ Red Flags */}
      <SectionCard
        title={
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <AlertTriangle className="h-5 w-5 text-yellow-400 inline-block mr-2" />
            </motion.div>
            4️⃣ Red Flags & Risky Patterns
          </>
        }
      >
        <div className="grid md:grid-cols-2 gap-4">
          <BulletCard
            title="Claims & Marketing"
            icon={<AlertTriangle className="h-5 w-5 text-yellow-300" />}
            items={[
              "Guaranteed returns / fixed profits on market products.",
              "Screenshots of unrealistic P&L; no risk disclosure.",
              "“Act now” pressure; pay-to-join VIP tips groups.",
            ]}
          />
          <BulletCard
            title="Operations & Conduct"
            icon={<Lock className="h-5 w-5 text-purple-300" />}
            items={[
              "No visible SEBI/BASL/Broker registration number.",
              "No GST/corporate identity; unclear ownership.",
              "Refuses to share written T&Cs or fee model.",
            ]}
          />
        </div>
      </SectionCard>

      {/* 5️⃣ Fees & Conflicts */}
      <SectionCard
        title={
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <IndianRupee className="h-5 w-5 text-teal-300 inline-block mr-2" />
            </motion.div>
            5️⃣ Fee Models & Conflicts — Understand Before You Pay
          </>
        }
      >
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>RIA (Fee-only)</strong>: charges clients directly; cannot earn product commissions (reduces conflicts).
          </li>
          <li>
            <strong>RA/Influencer</strong>: may earn via ads/affiliates; content = research/education, not advice.
          </li>
          <li>
            <strong>Broker/Platform</strong>: brokerage, spreads, order-flow benefits; may promote in-house products.
          </li>
        </ul>
        <p className="text-xs text-blue-300 mt-2">
          Ask for written <em>fee/affiliate disclosures</em>. Avoid paying for tips groups promising outsized gains.
        </p>
      </SectionCard>

      {/* 6️⃣ Selection Checklist */}
      <SelectionChecklist />

      {/* 7️⃣ Safe Usage Best Practices */}
      <SectionCard
        title={
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <ShieldCheck className="h-5 w-5 text-emerald-400 inline-block mr-2" />
            </motion.div>
            7️⃣ Best Practices for Safer Usage
          </>
        }
      >
        <ul className="list-disc list-inside space-y-1">
          <li>Prefer SEBI-registered intermediaries for advice/execution. Keep copies of agreements/invoices.</li>
          <li>Treat all market content as educational unless backed by a valid registration and engagement letter.</li>
          <li>Never share OTPs; use broker app only. Beware of screen-share “support”.</li>
          <li>Start small; test service quality and support response times.</li>
        </ul>
      </SectionCard>

      {/* 8️⃣ Quick Quiz */}
      <SectionCard
        title="💬 Quick Quiz"
      >
        <Quiz />
      </SectionCard>
    </motion.section>
  )
}

/* ======================= Reusable Blocks ======================= */

function SectionCard({ title, children }: any) {
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
      Educational only — NeoCred is not a SEBI-registered adviser. Verify all registrations independently.
    </p>
  )
}

function BulletCard({ title, icon, items }: { title: string; icon: any; items: string[] }) {
  return (
    <div className="rounded-xl p-4 bg-white/10 border border-white/10">
      <div className="text-white font-semibold mb-1 flex items-center gap-2">
        {icon} {title}
      </div>
      <ul className="list-disc list-inside text-blue-100 text-sm space-y-1">
        {items.map((it, i) => (
          <li key={i}>{it}</li>
        ))}
      </ul>
    </div>
  )
}

/* ======================= Verify Registration ======================= */

function VerifyBox() {
  const steps = [
    "Collect the advisor/platform legal name, registration category (RIA/RA/Broker), and registration number.",
    "Verify on official registries (SEBI Intermediaries / BASL for RIAs & RAs; exchange/member lookup for brokers).",
    "Check status (active/suspended), registered address/contact, and disciplinary history if available.",
    "Cross-match the number on invoices/agreements with public registry details.",
    "If unclear or mismatched, treat as a red flag and avoid engagement.",
  ]
  return (
    <SectionCard
      title={
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Search className="h-5 w-5 text-blue-400 inline-block mr-2" />
          </motion.div>
          3️⃣ Verify Registration in 5 Steps
        </>
      }
    >
      <ol className="list-decimal list-inside space-y-1">
        {steps.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ol>
      <div className="rounded-xl p-4 mt-4 bg-white/5 border border-white/10">
        <div className="text-white font-semibold mb-1 flex items-center gap-2">
          <FileText className="h-5 w-5 text-cyan-300" /> Tip
        </div>
        <p className="text-sm">
          Keep a PDF or screenshot of the registry page and attach it to your service agreement for your records.
        </p>
      </div>
    </SectionCard>
  )
}

/* ======================= Selection Checklist ======================= */

function SelectionChecklist() {
  const [checked, setChecked] = useState<Record<string, boolean>>({})
  const toggle = (k: string) => setChecked((p) => ({ ...p, [k]: !p[k] }))
  const total = useMemo(() => Object.values(checked).filter(Boolean).length, [checked])

  const items = [
    "Shows valid SEBI/BASL/exchange registration number prominently.",
    "Shares written fee model; no VIP tips/guaranteed returns.",
    "Clear T&Cs, privacy, grievance redressal, and contact details.",
    "Explains conflicts (if any) and how they are managed.",
    "Provides invoices/engagement letter with name & reg no.",
  ]

  return (
    <SectionCard
      title={
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <ListChecks className="h-5 w-5 text-green-400 inline-block mr-2" />
          </motion.div>
          6️⃣ Selection Checklist — Click to Mark
        </>
      }
    >
      <div className="grid sm:grid-cols-2 gap-3">
        {items.map((label) => (
          <button
            key={label}
            onClick={() => toggle(label)}
            className={`text-left p-3 rounded-xl border transition-all ${
              checked[label]
                ? "bg-gradient-to-r from-emerald-600/30 to-teal-600/30 border-emerald-400/40"
                : "bg-white/10 border-white/10 hover:bg-white/20"
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="font-semibold text-white flex items-center gap-2">
                <ListChecks className="h-4 w-4 text-green-300" /> {label}
              </div>
              <input type="checkbox" checked={checked[label] || false} readOnly className="accent-emerald-400" />
            </div>
          </button>
        ))}
      </div>

      <div className="mt-4 text-sm text-blue-100">
        <span className="font-semibold">Checklist progress:</span> {total}/{items.length} items satisfied.
      </div>
    </SectionCard>
  )
}

/* ======================= Quiz ======================= */

function Quiz() {
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [score, setScore] = useState(0)

  const quiz = [
    {
      question: "Who can legally provide personalized investment advice in India?",
      options: ["SEBI-registered RIA", "Any influencer", "Any broker employee on social media"],
      correct: "SEBI-registered RIA",
    },
    {
      question: "Which is a red flag when choosing a platform?",
      options: ["Written fee disclosure", "Guaranteed returns claims", "Registered number on invoice"],
      correct: "Guaranteed returns claims",
    },
    {
      question: "What should you do before engaging a paid advisory?",
      options: [
        "Verify registration on official registry",
        "Trust Instagram followers count",
        "Skip documents to save time",
      ],
      correct: "Verify registration on official registry",
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
          onClick={handleSubmit}
          whileHover={{ scale: 1.05 }}
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