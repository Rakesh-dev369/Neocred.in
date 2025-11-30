"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Smartphone,
  Network,
  CreditCard,
  Building2,
  Database,
  Cloud,
  Globe,
  Zap,
  CheckCircle,
  XCircle,
  RotateCcw,
  ShieldCheck,
  Users,
  Cpu,
  Lock,
} from "lucide-react"

export default function Lesson_FintechRevolution() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-6xl mx-auto space-y-10 text-blue-50"
    >
      <header className="text-center space-y-3">
        <h1 className="text-4xl font-bold text-white flex items-center justify-center gap-2">
          <Network className="h-8 w-8 text-cyan-400" /> Fintech Revolution — UPI, ONDC, OCEN
        </h1>
        <p className="text-blue-200 text-lg">
          Discover how India's open digital infrastructure is powering global fintech innovation.
        </p>
        <Disclaimer />
      </header>

      <LessonCard title="1️⃣ India's Digital Financial Infrastructure — The Foundation">
        <p>
          India's fintech revolution is built on a set of open protocols known as the{" "}
          <strong>India Stack</strong> — a combination of Aadhaar, UPI, eKYC, DigiLocker, and Account Aggregators.
          Together, these enable seamless identity, payments, and credit innovation.
        </p>

        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <FintechBlock
            icon={<Database className="h-5 w-5 text-cyan-400" />}
            title="Aadhaar + eKYC"
            desc="Digitally verify users in seconds — foundational for paperless onboarding."
          />
          <FintechBlock
            icon={<CreditCard className="h-5 w-5 text-indigo-400" />}
            title="UPI (Unified Payments Interface)"
            desc="Enables instant, interoperable payments across banks and apps."
          />
          <FintechBlock
            icon={<Cloud className="h-5 w-5 text-emerald-400" />}
            title="Account Aggregator Framework"
            desc="Gives users control of their financial data through consent-based sharing."
          />
          <FintechBlock
            icon={<Globe className="h-5 w-5 text-pink-400" />}
            title="OCEN & ONDC APIs"
            desc="Standardized digital rails for open credit and open commerce ecosystems."
          />
        </div>
      </LessonCard>

      <LessonCard title="2️⃣ How UPI Transformed Indian Payments">
        <p>
          The <strong>Unified Payments Interface (UPI)</strong> revolutionized the Indian economy by merging
          convenience, interoperability, and zero-cost transfers. It allows users to send and receive money
          instantly using a mobile number or UPI ID — 24x7, across all banks.
        </p>

        <ul className="list-disc list-inside text-blue-100 space-y-2 mt-2">
          <li>Real-time settlement and zero MDR (merchant discount rate).</li>
          <li>UPI apps like PhonePe, Google Pay, and Paytm created a unified ecosystem.</li>
          <li>Over <strong>10 billion transactions per month</strong> as of 2025 — world's largest payment network.</li>
        </ul>

        <div className="mt-4 grid md:grid-cols-3 gap-4">
          <FintechCard
            icon={<Smartphone className="h-6 w-6 text-cyan-300" />}
            title="UPI 2.0 & Credit Integration"
            desc="Linking RuPay Credit Cards and pre-approved loans with UPI handles."
          />
          <FintechCard
            icon={<Building2 className="h-6 w-6 text-indigo-300" />}
            title="UPI Lite & UPI AutoPay"
            desc="Offline micro-payments and recurring subscriptions built for Bharat."
          />
          <FintechCard
            icon={<Zap className="h-6 w-6 text-violet-300" />}
            title="UPI Global"
            desc="Cross-border transactions through UPI links with UAE, Singapore, France."
          />
        </div>
      </LessonCard>

      <LessonCard title="3️⃣ ONDC — The Open Network for Digital Commerce">
        <p>
          The <strong>ONDC (Open Network for Digital Commerce)</strong> is an interoperable platform
          that democratizes e-commerce by connecting buyers, sellers, and logistics providers on a
          single open network — similar to how UPI opened banking.
        </p>

        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <FintechBlock
            icon={<Globe className="h-5 w-5 text-orange-400" />}
            title="Why ONDC?"
            desc="Breaks platform monopolies — small sellers can compete directly with giants."
          />
          <FintechBlock
            icon={<Network className="h-5 w-5 text-cyan-400" />}
            title="How It Works"
            desc="Buyers and sellers connect via ONDC-compliant apps — enabling interoperability."
          />
          <FintechBlock
            icon={<Database className="h-5 w-5 text-green-400" />}
            title="Supported Domains"
            desc="Retail, food delivery, mobility, logistics — expanding rapidly in 2025."
          />
          <FintechBlock
            icon={<ShieldCheck className="h-5 w-5 text-purple-400" />}
            title="Trust & Verification"
            desc="ONDC registry ensures verified participants with common digital standards."
          />
        </div>
      </LessonCard>

      <LessonCard title="4️⃣ OCEN — Open Credit Enablement Network">
        <p>
          The <strong>OCEN (Open Credit Enablement Network)</strong> is a game-changer for MSME and retail credit.
          It connects <em>Loan Service Providers (LSPs)</em> like fintechs with <em>Financial Institutions</em>
          through standardized APIs — enabling embedded lending for everyone.
        </p>

        <div className="grid md:grid-cols-3 gap-4 mt-4">
          <FintechCard
            icon={<Building2 className="h-6 w-6 text-blue-400" />}
            title="LSPs (Loan Service Providers)"
            desc="Platforms (like e-commerce apps or ERPs) that originate loan requests digitally."
          />
          <FintechCard
            icon={<Database className="h-6 w-6 text-cyan-400" />}
            title="Banks / NBFCs"
            desc="Provide credit seamlessly using verified financial data via Account Aggregators."
          />
          <FintechCard
            icon={<Zap className="h-6 w-6 text-violet-400" />}
            title="Account Aggregators"
            desc="Transfer user financial data securely with user consent — enabling paperless credit."
          />
        </div>

        <p className="text-xs text-blue-300 mt-3">
          Example: A merchant on Amazon can get a pre-approved OCEN-enabled MSME loan directly within the app — powered by Setu or Sahamati APIs.
        </p>
      </LessonCard>

      <LessonCard title="5️⃣ Fintech Ecosystem Map (2025) — Who Does What?">
        <EcosystemMap />
      </LessonCard>

      <LessonCard title="6️⃣ Case Studies — Real Players, Real Rails">
        <div className="grid md:grid-cols-3 gap-4">
          <CaseStudyCard
            title="Razorpay (Payments + Credit)"
            points={[
              "UPI acquiring + payouts for businesses",
              "Embedded credit via partner NBFCs (OCEN-like flows)",
              "Compliance stack: KYC, AML, reconciliation",
            ]}
          />
          <CaseStudyCard
            title="Setu (API Rails)"
            points={[
              "Bridges banks/NBFCs with fintech apps",
              "AA, UPI, and recurring mandates via APIs",
              "Supports OCEN-style LSP-Lender models",
            ]}
          />
          <CaseStudyCard
            title="Sahamati (Account Aggregators)"
            points={[
              "Consent-based financial data sharing",
              "Improves underwriting and reduces friction",
              "User-first data governance principles",
            ]}
          />
        </div>
        <p className="text-xs text-blue-300 mt-3">
          Note: Examples are illustrative to explain how rails are used; always review official docs for latest integrations.
        </p>
      </LessonCard>

      <LessonCard title="7️⃣ Impact & What's Next — Digital Bharat Vision">
        <div className="grid md:grid-cols-2 gap-4">
          <FintechBlock
            icon={<ShieldCheck className="h-5 w-5 text-teal-300" />}
            title="Financial Inclusion"
            desc="UPI + Aadhaar + AEPS enable low-cost access to banking and payments for Bharat."
          />
          <FintechBlock
            icon={<Globe className="h-5 w-5 text-violet-300" />}
            title="Open Commerce & Credit"
            desc="ONDC opens marketplaces; OCEN opens lending — more competition, better pricing."
          />
          <FintechBlock
            icon={<Cloud className="h-5 w-5 text-sky-300" />}
            title="Data Empowerment"
            desc="Account Aggregators give users control over sharing data securely with consent."
          />
          <FintechBlock
            icon={<Zap className="h-5 w-5 text-amber-300" />}
            title="What's Next"
            desc="UPI Global corridors, context-aware lending, smarter risk models, and better CX."
          />
        </div>
      </LessonCard>

      <LessonCard title="💬 Quick Quiz">
        <Quiz_FintechRevolution />
      </LessonCard>
    </motion.section>
  )
}

function LessonCard({ title, children }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white/10 p-6 rounded-2xl border border-white/10 shadow-lg space-y-3"
    >
      <h2 className="text-xl font-semibold text-white">{title}</h2>
      <div className="text-blue-100 text-sm leading-relaxed">{children}</div>
    </motion.div>
  )
}

function FintechBlock({ icon, title, desc }: { icon: any; title: string; desc: string }) {
  return (
    <div className="p-4 rounded-xl bg-gradient-to-br from-slate-800/30 to-slate-900/20 border border-white/10 hover:border-cyan-400/40 transition-all">
      <div className="flex items-center gap-2 text-white font-semibold mb-1">
        {icon} {title}
      </div>
      <p className="text-blue-100 text-sm">{desc}</p>
    </div>
  )
}

function FintechCard({ icon, title, desc }: any) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="p-5 rounded-2xl bg-gradient-to-br from-cyan-700/20 to-indigo-800/30 border border-white/10 hover:shadow-lg transition-all"
    >
      <div className="flex items-center gap-2 mb-2 text-white font-semibold">
        {icon} {title}
      </div>
      <p className="text-blue-100 text-sm leading-relaxed">{desc}</p>
    </motion.div>
  )
}

function Disclaimer() {
  return (
    <p className="text-xs text-yellow-300 flex items-center justify-center gap-2">
      <ShieldCheck className="h-4 w-4" /> Educational purpose only — NeoCred is not a SEBI-registered entity.
    </p>
  )
}

function EcosystemMap() {
  const [tab, setTab] = useState<"banks" | "psps" | "apis" | "users">("banks")

  const tabs: { key: typeof tab; label: string }[] = [
    { key: "banks", label: "Banks / NBFCs" },
    { key: "psps", label: "PSPs / Apps" },
    { key: "apis", label: "APIs / Rails" },
    { key: "users", label: "Users / MSMEs" },
  ]

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {tabs.map((t) => (
          <motion.button
            key={t.key}
            onClick={() => setTab(t.key)}
            whileHover={{ scale: 1.03 }}
            className={`px-3 py-1.5 rounded-full text-sm border transition ${
              tab === t.key
                ? "bg-gradient-to-r from-cyan-600 to-indigo-600 text-white border-transparent"
                : "bg-white/10 text-blue-100 border-white/10 hover:bg-white/20"
            }`}
          >
            {t.label}
          </motion.button>
        ))}
      </div>

      {tab === "banks" && (
        <div className="rounded-xl p-4 bg-white/10 border border-white/10">
          <div className="flex items-center gap-2 text-white font-semibold mb-2">
            <Building2 className="h-5 w-5 text-cyan-300" /> Banks / NBFCs — The Balance Sheet Core
          </div>
          <ul className="list-disc list-inside text-sm text-blue-100 space-y-1">
            <li>Hold deposits, issue loans, and comply with RBI prudential norms.</li>
            <li>Provide lending rails via OCEN integrations to LSPs/fintechs.</li>
            <li>Reconciliation, risk, and collections handled with regulatory standards.</li>
          </ul>
        </div>
      )}

      {tab === "psps" && (
        <div className="rounded-xl p-4 bg-white/10 border border-white/10">
          <div className="flex items-center gap-2 text-white font-semibold mb-2">
            <Smartphone className="h-5 w-5 text-indigo-300" /> PSPs / Apps — The Front Door
          </div>
          <ul className="list-disc list-inside text-sm text-blue-100 space-y-1">
            <li>UPI apps (PhonePe, GPay, Paytm) enable instant payments & requests.</li>
            <li>Merchant apps embed pay-ins, payouts, and credit offers (BNPL/MSME).</li>
            <li>Focus on UX, onboarding, KYC flows, and fraud prevention.</li>
          </ul>
        </div>
      )}

      {tab === "apis" && (
        <div className="rounded-xl p-4 bg-white/10 border border-white/10">
          <div className="flex items-center gap-2 text-white font-semibold mb-2">
            <Cpu className="h-5 w-5 text-emerald-300" /> APIs / Rails — The Connective Tissue
          </div>
          <ul className="list-disc list-inside text-sm text-blue-100 space-y-1">
            <li>UPI, eKYC, eMandate, AA, OCEN, ONDC protocols create interoperability.</li>
            <li>Fintech infra (e.g., Setu-type) standardizes consent & data exchange.</li>
            <li>Reliability, observability, and security are first-class requirements.</li>
          </ul>
        </div>
      )}

      {tab === "users" && (
        <div className="rounded-xl p-4 bg-white/10 border border-white/10">
          <div className="flex items-center gap-2 text-white font-semibold mb-2">
            <Users className="h-5 w-5 text-pink-300" /> Users / MSMEs — The Purpose
          </div>
          <ul className="list-disc list-inside text-sm text-blue-100 space-y-1">
            <li>Individuals need safe, low-cost finance; MSMEs need working capital.</li>
            <li>Consent-based data sharing unlocks tailored offers and faster credit.</li>
            <li>Trust, grievance redressal, and transparency retain adoption at scale.</li>
          </ul>
        </div>
      )}

      <div className="mt-3 text-xs text-blue-300 flex items-center gap-2">
        <Lock className="h-4 w-4" />
        Privacy-first design: Consent artifacts, data minimization, and encryption-in-transit/at-rest.
      </div>
    </div>
  )
}

function CaseStudyCard({ title, points }: { title: string; points: string[] }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="p-5 rounded-2xl bg-gradient-to-br from-cyan-700/20 to-violet-800/20 border border-white/10"
    >
      <div className="text-white font-semibold mb-2">{title}</div>
      <ul className="list-disc list-inside text-sm text-blue-100 space-y-1">
        {points.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </motion.div>
  )
}

function Quiz_FintechRevolution() {
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [score, setScore] = useState(0)

  const quiz = [
    {
      q: "What makes UPI uniquely powerful in India?",
      opts: [
        "It is limited to one app per bank",
        "It enables instant, interoperable payments across banks/apps",
        "It only works during bank hours",
        "It requires physical cards for authorization",
      ],
      correct: "It enables instant, interoperable payments across banks/apps",
    },
    {
      q: "ONDC's primary goal is to:",
      opts: [
        "Replace all private e-commerce platforms",
        "Create an interoperable network connecting buyers, sellers, and logistics",
        "Act as a payment gateway",
        "Provide personal loans to merchants",
      ],
      correct: "Create an interoperable network connecting buyers, sellers, and logistics",
    },
    {
      q: "OCEN helps by:",
      opts: [
        "Hiding user data from lenders",
        "Standardizing APIs between LSPs and lenders to enable embedded credit",
        "Blocking AA data sharing",
        "Eliminating KYC requirements",
      ],
      correct: "Standardizing APIs between LSPs and lenders to enable embedded credit",
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
    <div className="space-y-6">
      {quiz.map((item, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white/5 p-4 rounded-xl border border-white/10"
        >
          <p className="font-medium text-blue-100 mb-3">
            Q{idx + 1}: {item.q}
          </p>
          {item.opts.map((opt, oi) => {
            const isSelected = answers[idx] === opt
            const isCorrect = opt === item.correct
            return (
              <motion.button
                key={oi}
                onClick={() => select(idx, opt)}
                disabled={submitted}
                whileHover={!submitted ? { scale: 1.03 } : {}}
                className={`w-full text-left px-4 py-2 rounded-lg border mb-2 transition-all ${
                  isSelected
                    ? "bg-gradient-to-r from-cyan-600 to-indigo-600 text-white border-transparent"
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
          className="px-6 py-2 rounded-xl bg-gradient-to-r from-cyan-600 to-indigo-600 text-white disabled:opacity-50"
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