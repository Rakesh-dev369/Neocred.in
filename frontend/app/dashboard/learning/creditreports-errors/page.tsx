"use client"

import { useMemo, useState } from "react"
import { motion } from "framer-motion"
import {
  FileText,
  AlertTriangle,
  ShieldCheck,
  GaugeIcon,
  Search,
  Edit3,
  Send,
  Clock,
  CheckCircle,
  XCircle,
  RotateCcw,
  User,
  Building2,
  ListChecks,
  Info,
} from "lucide-react"

/**
 * Lesson: Understanding Credit Reports & Errors (CIBIL, Equifax, Experian, CRIF High Mark)
 * Level: Intermediate (Educational Only; SEBI-compliant)
 */

export default function Lesson_CreditReportsAndErrors() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-5xl mx-auto space-y-10 text-blue-50"
    >
      {/* Header */}
      <header className="text-center space-y-3">
        <h1 className="text-3xl sm:text-4xl font-bold text-white flex items-center justify-center gap-2">
          <FileText className="h-8 w-8 text-cyan-400" />
          Credit Reports & Errors
        </h1>
        <p className="text-blue-200 text-lg">
          Learn what’s inside your credit report, common error types, and how to dispute them effectively.
        </p>
        <Disclaimer />
      </header>

      {/* 1️⃣ Anatomy of a Credit Report */}
      <Anatomy />

      {/* 2️⃣ Common Errors (Checklist) */}
      <ErrorsChecklist />

      {/* 3️⃣ Impact Estimator */}
      <ImpactEstimator />

      {/* 4️⃣ Dispute Readiness (Docs & Evidence) */}
      <DisputeReadiness />

      {/* 5️⃣ Dispute Letter Generator */}
      <DisputeLetterGenerator />

      {/* 6️⃣ Dispute Timeline & Status */}
      <DisputeTimeline />

      {/* 7️⃣ Best Practices (Do / Don’t) */}
      <BestPractices />

      {/* 8️⃣ Quiz */}
      <LessonCard title="💬 Quick Quiz">
        <QuizComponent />
      </LessonCard>
    </motion.section>
  )
}

/* ======================= Blocks ======================= */

function LessonCard({ title, children }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
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
      <ShieldCheck className="h-4 w-4" />
      Educational only — NeoCred is not a SEBI-registered advisor. For official dispute processes, use your bureau’s portal.
    </p>
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

/* ======================= 1️⃣ Anatomy ======================= */

function Anatomy() {
  const rows = [
    ["Personal Info", "Name, DOB, PAN (masked), addresses, phone, email"],
    ["Employment", "Occupation type, income band (sometimes), employer category"],
    ["Accounts", "Loans & credit cards with lender, limit, balance, status"],
    ["Repayment History", "DPD grid (last 24–36 months): 000, 030, 060, 090, XXX, etc."],
    ["Enquiries", "Hard enquiries (lender checks when you apply)"],
    ["Score", "CIBIL/Experian/Equifax/CRIF score — a number summarizing risk"],
    ["Remarks/Status", "Written off/settled/restructured, closure dates, dispute remarks"],
  ]
  return (
    <LessonCard title={<><FileText className="h-5 w-5 text-cyan-400 inline mr-2" />1️⃣ Anatomy of a Credit Report — What You’ll See</>}>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-blue-100 border-collapse">
          <thead className="bg-white/10 text-blue-200 text-xs uppercase">
            <tr>
              <th className="p-2 border-b border-white/10 text-left">Section</th>
              <th className="p-2 border-b border-white/10 text-left">What it contains</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className="border-b border-white/10">
                <td className="p-2 text-white font-medium">{r[0]}</td>
                <td className="p-2">{r[1]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-blue-300 mt-2">
        Tip: Pull your report from more than one bureau once a year — data can vary across bureaus.
      </p>
    </LessonCard>
  )
}

/* ======================= 2️⃣ Errors Checklist ======================= */

type ErrorKey =
  | "identity"
  | "accountNotYours"
  | "limitBalanceMismatch"
  | "paymentStatus"
  | "duplicate"
  | "incorrectClosure"
  | "enquirySpam"
  | "addressPhone"
  | "fraudFlag"

function ErrorsChecklist() {
  const [checked, setChecked] = useState<Record<ErrorKey, boolean>>({
    identity: false,
    accountNotYours: false,
    limitBalanceMismatch: false,
    paymentStatus: false,
    duplicate: false,
    incorrectClosure: false,
    enquirySpam: false,
    addressPhone: false,
    fraudFlag: false,
  })

  const toggle = (k: ErrorKey) => setChecked((p) => ({ ...p, [k]: !p[k] }))
  const total = Object.values(checked).filter(Boolean).length

  const items: { key: ErrorKey; label: string; desc: string }[] = [
    { key: "identity", label: "Identity/Personal Details", desc: "Wrong name, DOB, PAN (masked), phone or email" },
    { key: "accountNotYours", label: "Account Not Yours", desc: "Unknown loan/card appears in your report" },
    { key: "limitBalanceMismatch", label: "Limit/Balance Mismatch", desc: "Credit limit or outstanding incorrect" },
    { key: "paymentStatus", label: "Payment Status/DPD Error", desc: "Marked late/default though you paid on time" },
    { key: "duplicate", label: "Duplicate Account", desc: "Same account listed twice with variations" },
    { key: "incorrectClosure", label: "Incorrect Closure", desc: "Closed/settled but still showing active/overdue" },
    { key: "enquirySpam", label: "Enquiry Spam", desc: "Many hard enquiries not initiated by you" },
    { key: "addressPhone", label: "Address/Phone Mismatch", desc: "Old or unknown addresses/phones attached" },
    { key: "fraudFlag", label: "Suspected Fraud", desc: "Loans/cards opened without your consent" },
  ]

  return (
    <LessonCard title={<><AlertTriangle className="h-5 w-5 text-red-400 inline mr-2" />2️⃣ Common Errors — Quick Self-Audit Checklist</>}>
      <div className="grid sm:grid-cols-2 gap-3">
        {items.map((it) => (
          <button
            key={it.key}
            onClick={() => toggle(it.key)}
            className={`text-left p-3 rounded-xl border transition-all ${
              checked[it.key] ? "bg-gradient-to-r from-cyan-600/30 to-blue-600/30 border-cyan-400/40" : "bg-white/10 border-white/10 hover:bg-white/20"
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="font-semibold text-white flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-yellow-300" /> {it.label}
              </div>
              <input type="checkbox" checked={checked[it.key]} readOnly className="accent-cyan-400" />
            </div>
            <p className="text-xs text-blue-200 mt-1">{it.desc}</p>
          </button>
        ))}
      </div>
      <div className="mt-4 grid sm:grid-cols-3 gap-4">
        <StatBox label="Potential Issues Selected" value={`${total}`} highlight />
        <StatBox label="Priority Next Step" value={total ? "Prepare a dispute" : "Review report sections"} />
        <StatBox label="Recommended Evidence" value={total ? "Statements, KYC, closure letters" : "N/A"} />
      </div>
    </LessonCard>
  )
}

/* ======================= 3️⃣ Impact Estimator ======================= */

function ImpactEstimator() {
  const [late30, setLate30] = useState(1)
  const [late60, setLate60] = useState(0)
  const [late90, setLate90] = useState(0)
  const [util, setUtil] = useState(60) // credit card utilization %

  // Simple indicative risk score delta — educational only
  const delta = useMemo(() => {
    let d = 0
    d -= late30 * 12
    d -= late60 * 25
    d -= late90 * 40
    d -= Math.max(0, util - 30) * 0.6
    return Math.round(d)
  }, [late30, late60, late90, util])

  return (
    <LessonCard title={<><GaugeIcon className="h-5 w-5 text-emerald-400 inline mr-2" />3️⃣ Impact Estimator — How Bad Can Errors Be? (Illustrative)</>}>
      <div className="grid md:grid-cols-4 gap-4">
        <NumberInput label="30-day late marks" value={late30} setValue={setLate30} />
        <NumberInput label="60-day late marks" value={late60} setValue={setLate60} />
        <NumberInput label="90-day late marks" value={late90} setValue={setLate90} />
        <NumberInput label="Card Utilization (%)" value={util} setValue={setUtil} />
      </div>
      <div className="grid sm:grid-cols-3 gap-4 mt-4">
        <StatBox label="Indicative Score Delta" value={`${delta} pts`} highlight />
        <StatBox label="Priority Fix" value={late90 > 0 ? "Correct 90+ DPD first" : late60 > 0 ? "Correct 60 DPD" : late30 > 0 ? "Correct 30 DPD" : util > 50 ? "Lower utilization" : "Maintain"} />
        <StatBox label="Reality Check" value="Actual impact varies by bureau model" />
      </div>
      <p className="text-xs text-blue-300 mt-2">
        This is a simplified demo. Bureau scoring models are proprietary and consider many factors together.
      </p>
    </LessonCard>
  )
}

function NumberInput({ label, value, setValue }: { label: string; value: number; setValue: (n: number) => void }) {
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

/* ======================= 4️⃣ Dispute Readiness ======================= */

function DisputeReadiness() {
  const docs = [
    "KYC: PAN (masked), Aadhaar (last 4), Address proof",
    "Bank/Credit Card statements showing payment or non-ownership",
    "Loan closure/NOC or settlement letters (if closed)",
    "Dispute reference numbers (if raised with lender)",
    "FIR/Police complaint for fraud cases (if applicable)",
  ]
  return (
    <LessonCard title={<><Search className="h-5 w-5 text-blue-400 inline mr-2" />4️⃣ Dispute Readiness — Collect Evidence Before You File</>}>
      <div className="grid md:grid-cols-2 gap-4">
        <BulletCard
          icon={<Search className="h-5 w-5 text-cyan-300" />}
          title="Prep Checklist"
          items={docs}
        />
        <BulletCard
          icon={<Building2 className="h-5 w-5 text-emerald-300" />}
          title="Who to Contact First?"
          items={[
            "1) Lender/NBFC that reported the data (they must verify/correct)",
            "2) Credit bureau portal (raise dispute with evidence)",
            "3) Follow up weekly; keep all acknowledgements and PDFs",
          ]}
        />
      </div>
      <p className="text-xs text-blue-300 mt-2">
        In India, lenders supply data to bureaus. Bureau updates often require lender confirmation.
      </p>
    </LessonCard>
  )
}

function BulletCard({ icon, title, items }: { icon: any; title: string; items: string[] }) {
  return (
    <div className="rounded-xl p-4 border border-white/10 bg-white/10">
      <div className="flex items-center gap-2 text-white font-semibold mb-1">
        {icon} {title}
      </div>
      <ul className="list-disc list-inside text-sm text-blue-100 space-y-1">
        {items.map((it, i) => (
          <li key={i}>{it}</li>
        ))}
      </ul>
    </div>
  )
}

/* ======================= 5️⃣ Dispute Letter Generator ======================= */

function DisputeLetterGenerator() {
  const [name, setName] = useState("K Rakesh")
  const [email, setEmail] = useState("hello@neocred.in")
  const [bureau, setBureau] = useState<"CIBIL" | "Experian" | "Equifax" | "CRIF">("CIBIL")
  const [account, setAccount] = useState("XXXX-1234 (Credit Card)")
  const [errorType, setErrorType] = useState("Payment status marked late incorrectly for May 2025")
  const [description, setDescription] = useState(
    "I have attached my bank statement highlighting timely payments. Kindly verify with the lender and correct the DPD grid."
  )

  const letter = `
Subject: Dispute Request — ${bureau} Credit Report Correction

Dear ${bureau} Dispute Team,

I, ${name}, wish to raise a dispute regarding my credit report. The following item appears to be inaccurate:

• Account: ${account}
• Issue: ${errorType}

Details/Evidence:
${description}

Please investigate with the reporting lender and update the record. I have enclosed supporting documents and my KYC. Kindly share a case/reference number and notify me when the correction is processed.

Registered Email: ${email}
Regards,
${name}
`.trim()

  return (
    <LessonCard title={<><Edit3 className="h-5 w-5 text-pink-400 inline mr-2" />5️⃣ Dispute Letter Generator — Copy & File on Bureau Portalx</>}>
      <div className="grid md:grid-cols-2 gap-4">
        <TextInput label="Your Name" value={name} setValue={setName} icon={<User className="h-4 w-4 text-cyan-300" />} />
        <TextInput label="Registered Email" value={email} setValue={setEmail} icon={<User className="h-4 w-4 text-cyan-300" />} />
        <SelectBox
          label="Bureau"
          value={bureau}
          onChange={(v: any) => setBureau(v)}
          options={["CIBIL", "Experian", "Equifax", "CRIF"]}
          icon={<FileText className="h-4 w-4 text-cyan-300" />}
        />
        <TextInput label="Account (masked)" value={account} setValue={setAccount} icon={<FileText className="h-4 w-4 text-cyan-300" />} />
        <TextInput label="Error Summary" value={errorType} setValue={setErrorType} icon={<AlertTriangle className="h-4 w-4 text-yellow-300" />} />
        <TextArea label="Details/Evidence" value={description} setValue={setDescription} icon={<Edit3 className="h-4 w-4 text-emerald-300" />} />
      </div>

      <div className="mt-4 bg-white/10 rounded-xl p-4 border border-white/10">
        <div className="text-[11px] uppercase tracking-wide text-blue-200 mb-2">Preview</div>
        <pre className="whitespace-pre-wrap text-sm text-blue-100">{letter}</pre>
      </div>

      <p className="text-xs text-blue-300 mt-2">
        File the dispute on the official bureau portal and upload PDFs (KYC, statements, closure letters). Save the reference number.
      </p>
    </LessonCard>
  )
}

function TextInput({ label, value, setValue, icon }: any) {
  return (
    <div className="bg-white/10 rounded-xl p-4 border border-white/10">
      <label className="text-xs text-blue-200 mb-1 flex items-center gap-2">
        {icon} {label}
      </label>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full p-2 rounded-lg bg-white/20 border border-white/10 text-white outline-none"
      />
    </div>
  )
}

function TextArea({ label, value, setValue, icon }: any) {
  return (
    <div className="bg-white/10 rounded-xl p-4 border border-white/10 md:col-span-2">
      <label className="text-xs text-blue-200 mb-1 flex items-center gap-2">
        {icon} {label}
      </label>
      <textarea
        rows={4}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full p-2 rounded-lg bg-white/20 border border-white/10 text-white outline-none"
      />
    </div>
  )
}

function SelectBox({ label, value, onChange, options, icon }: any) {
  return (
    <div className="bg-white/10 rounded-xl p-4 border border-white/10">
      <label className="text-xs text-blue-200 mb-1 flex items-center gap-2">
        {icon} {label}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-2 rounded-lg bg-white/20 border border-white/10 text-white outline-none"
      >
        {options.map((opt: string) => (
          <option key={opt} value={opt} className="bg-slate-900">
            {opt}
          </option>
        ))}
      </select>
    </div>
  )
}

/* ======================= 6️⃣ Dispute Timeline ======================= */

function DisputeTimeline() {
  const [filedDay, setFiledDay] = useState(1) // day of month
  const [slaDays, setSlaDays] = useState(30) // typical closure aim (varies)
  const [followUpEvery, setFollowUpEvery] = useState(7)

  const checkpoints = useMemo(() => {
    const arr: { label: string; day: number }[] = []
    arr.push({ label: "Dispute Filed", day: filedDay })
    arr.push({ label: "Follow-up #1", day: filedDay + followUpEvery })
    arr.push({ label: "Follow-up #2", day: filedDay + 2 * followUpEvery })
    arr.push({ label: "Expected Resolution", day: filedDay + slaDays })
    return arr
  }, [filedDay, slaDays, followUpEvery])

  return (
    <LessonCard title={<><Clock className="h-5 w-5 text-orange-300 inline mr-2" />6️⃣ Dispute Timeline & Status (Illustrative)</>}>
      <div className="grid md:grid-cols-3 gap-4">
        <NumberInput label="Filed on Day (month)" value={filedDay} setValue={setFiledDay} />
        <NumberInput label="Expected SLA (days)" value={slaDays} setValue={setSlaDays} />
        <NumberInput label="Follow-up Every (days)" value={followUpEvery} setValue={setFollowUpEvery} />
      </div>

      <div className="mt-4 grid sm:grid-cols-4 gap-3">
        {checkpoints.map((c, i) => (
          <div key={i} className="rounded-xl p-4 border border-white/10 bg-white/10">
            <div className="flex items-center gap-2 text-white font-semibold">
              <Clock className="h-4 w-4 text-cyan-300" /> {c.label}
            </div>
            <div className="text-blue-200 text-sm mt-1">Day {c.day}</div>
          </div>
        ))}
      </div>
      <p className="text-xs text-blue-300 mt-2">
        Keep email/PDF acknowledgements. If a lender confirms correction, bureaus typically reflect it in a subsequent update cycle.
      </p>
    </LessonCard>
  )
}

/* ======================= 7️⃣ Best Practices ======================= */

function BestPractices() {
  return (
    <LessonCard title={<><ListChecks className="h-5 w-5 text-green-400 inline mr-2" />7️⃣ Best Practices — Do / Don’t</>}>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="rounded-xl p-4 border border-white/10 bg-white/10">
          <div className="text-white font-semibold mb-1 flex items-center gap-2">
            <ListChecks className="h-5 w-5 text-emerald-300" /> Do
          </div>
          <ul className="list-disc list-inside text-sm text-blue-100 space-y-1">
            <li>Pull your full report (not just score) from at least 2 bureaus yearly.</li>
            <li>Dispute with clear evidence; highlight exact rows/DPD cells.</li>
            <li>Get NOC/closure letters and keep them permanently.</li>
            <li>Maintain utilization &lt; 30% on cards; pay on time.</li>
          </ul>
        </div>
        <div className="rounded-xl p-4 border border-white/10 bg-white/10">
          <div className="text-white font-semibold mb-1 flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-yellow-300" /> Don’t
          </div>
          <ul className="list-disc list-inside text-sm text-blue-100 space-y-1">
            <li>Don’t dispute everything blindly — focus on genuine errors first.</li>
            <li>Don’t ignore enquiry spam — raise fraud alert if needed.</li>
            <li>Don’t close oldest cards abruptly (can hurt score age).</li>
            <li>Don’t share full PAN/Aadhaar publicly; mask documents.</li>
          </ul>
        </div>
      </div>
    </LessonCard>
  )
}

/* ======================= 8️⃣ Quiz ======================= */

function QuizComponent() {
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [score, setScore] = useState(0)

  const quiz = [
    {
      question: "Which section shows your repayment history month-by-month?",
      options: ["Enquiries", "Accounts", "DPD grid", "Score section"],
      correct: "DPD grid",
    },
    {
      question: "Who should you contact first for a wrong late payment entry?",
      options: ["Only the bureau", "Only the bank", "Lender first, then bureau", "No one — it fixes itself"],
      correct: "Lender first, then bureau",
    },
    {
      question: "Card utilization best practice is usually:",
      options: ["> 80%", "< 30%", "Exactly 50%", "Doesn’t matter"],
      correct: "< 30%",
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
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
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
          <button onClick={reset} className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm">
            <RotateCcw className="inline-block h-4 w-4 mr-1" /> Try Again
          </button>
        </motion.div>
      )}
    </div>
  )
}
