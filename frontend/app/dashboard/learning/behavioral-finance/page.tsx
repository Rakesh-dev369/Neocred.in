"use client"

import { useState, useMemo } from "react"
import { motion } from "framer-motion"
import {
  Brain,
  Smile,
  Frown,
  AlertTriangle,
  BarChart3,
  ShieldCheck,
  Compass,
  Scale,
  Activity,
  Target,
  CheckCircle,
  XCircle,
  RotateCcw,
} from "lucide-react"

/**
 * Lesson: Behavioral Finance — How Emotions Affect Money
 * Level: Advanced
 * File: behavioral-finance.tsx
 */

export default function Lesson_BehavioralFinance() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-5xl mx-auto space-y-10 text-blue-50"
    >
      {/* Header */}
      <header className="text-center space-y-3">
        <h1 className="text-3xl sm:text-4xl font-bold text-white flex items-center justify-center gap-2">
          <Brain className="h-8 w-8 text-cyan-400" />
          Behavioral Finance — How Emotions Affect Money
        </h1>
        <p className="text-blue-200 text-lg">
          Discover how psychology and emotion shape investing behavior, decision-making, and long-term financial outcomes.
        </p>
        <Disclaimer />
      </header>

      {/* 1️⃣ What Is Behavioral Finance */}
      <LessonCard icon={<Compass className="h-5 w-5 text-cyan-300" />} title="1️⃣ What Is Behavioral Finance?">
        <p>
          Behavioral Finance blends <strong>psychology</strong> and <strong>economics</strong> to explain why investors
          don’t always act rationally. Emotions, cognitive biases, and heuristics often drive decisions that deviate from
          pure logic.
        </p>
        <ul className="list-disc list-inside mt-2 text-blue-100 space-y-1">
          <li>It studies how fear, greed, and confidence affect market behavior.</li>
          <li>Focuses on <strong>systematic errors</strong> investors repeat under stress or excitement.</li>
          <li>Used by professionals to design <em>nudges</em>, robo-advisors, and better investor education.</li>
        </ul>
      </LessonCard>

      {/* 2️⃣ Common Biases */}
      <BiasExplorer />

      {/* 3️⃣ Bias Self-Test */}
      <BiasTest />

      {/* 4️⃣ Investor Archetypes */}
      <InvestorTypes />

      {/* 5️⃣ Decision Trap Simulator */}
      <DecisionSimulator />

      {/* 6️⃣ Emotional Regulation Framework */}
      <EmotionRegulation />

      {/* 7️⃣ Long-Term Behavior Reinforcement */}
      <LongTermBehavior />

      {/* 8️⃣ 💬 Quick Quiz */}
      <QuizComponent />
    </motion.section>
  )
}

/* ---------------- Reusable Components ---------------- */

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
      and investor psychology understanding only.
    </p>
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
      <div className="text-white font-semibold">{value}</div>
    </div>
  )
}

/* ---------------- 2️⃣ Bias Explorer ---------------- */

function BiasExplorer() {
  const biases = [
    {
      name: "Overconfidence Bias",
      desc: "Believing you know more than others or can time the market better.",
      tip: "Track actual vs expected returns; use data, not gut feeling.",
    },
    {
      name: "Loss Aversion",
      desc: "Feeling losses more intensely than equivalent gains.",
      tip: "View losses as tuition for learning; zoom out to long-term goals.",
    },
    {
      name: "Herd Mentality",
      desc: "Following the crowd, buying because others buy.",
      tip: "Ask: Would I buy this if no one else did?",
    },
    {
      name: "Anchoring Bias",
      desc: "Fixating on an initial price or number (like stock’s 52-week high).",
      tip: "Re-evaluate with updated fundamentals, not old anchors.",
    },
    {
      name: "Confirmation Bias",
      desc: "Seeking info that agrees with your beliefs, ignoring contradictions.",
      tip: "Read opposing opinions; track proven wrong assumptions.",
    },
  ]
  return (
    <LessonCard icon={<BarChart3 className="h-5 w-5 text-green-300" />} title="2️⃣ Common Behavioral Biases">
      <div className="grid md:grid-cols-2 gap-4">
        {biases.map((b, i) => (
          <div key={i} className="rounded-xl p-4 border border-white/10 bg-white/10">
            <div className="text-white font-semibold mb-1">{b.name}</div>
            <p className="text-blue-100 text-sm">{b.desc}</p>
            <p className="text-xs text-blue-300 mt-1">💡 {b.tip}</p>
          </div>
        ))}
      </div>
    </LessonCard>
  )
}

/* ---------------- 3️⃣ Bias Self-Test ---------------- */

function BiasTest() {
  const questions = [
    "Do you often sell winners too early but hold on to losers?",
    "Do you feel uneasy when others are earning faster returns?",
    "Do you check your portfolio multiple times a day?",
    "Do you justify losses as ‘temporary’ even after many months?",
  ]
  const [answers, setAnswers] = useState<Record<number, boolean>>({})
  const toggle = (i: number) => setAnswers((p) => ({ ...p, [i]: !p[i] }))
  const score = Object.values(answers).filter(Boolean).length

  return (
    <LessonCard icon={<Smile className="h-5 w-5 text-amber-300" />} title="3️⃣ Bias Self-Test — Quick Reflection">
      <div className="space-y-3">
        {questions.map((q, i) => (
          <button
            key={i}
            onClick={() => toggle(i)}
            className={`w-full text-left p-3 rounded-xl border transition-all ${
              answers[i]
                ? "bg-gradient-to-r from-cyan-600/30 to-blue-600/30 border-cyan-400/40"
                : "bg-white/10 border-white/10 hover:bg-white/20"
            }`}
          >
            <div className="flex items-center justify-between text-sm text-white">
              {q}
              <input type="checkbox" checked={!!answers[i]} readOnly className="accent-cyan-400" />
            </div>
          </button>
        ))}
      </div>
      <div className="grid sm:grid-cols-3 gap-4 mt-4">
        <StatBox label="Triggers Identified" value={`${score}`} highlight />
        <StatBox label="Self-Awareness" value={score > 2 ? "Needs mindfulness" : "Healthy awareness"} />
        <StatBox label="Tip" value="Track emotional decisions in a log" />
      </div>
    </LessonCard>
  )
}

/* ---------------- 4️⃣ Investor Archetypes ---------------- */

function InvestorTypes() {
  const types = [
    { name: "The Optimist", desc: "Tends to buy aggressively in bull markets; may overlook valuation." },
    { name: "The Pessimist", desc: "Overfocuses on risks; stays underinvested despite goals." },
    { name: "The Herd Follower", desc: "Buys trends late and sells in panic; reacts to social proof." },
    { name: "The Rational Planner", desc: "Follows asset allocation, periodic review, and avoids emotion." },
  ]
  return (
    <LessonCard icon={<Scale className="h-5 w-5 text-purple-300" />} title="4️⃣ Investor Archetypes — Which One Are You?">
      <div className="grid md:grid-cols-2 gap-4">
        {types.map((t, i) => (
          <div key={i} className="rounded-xl p-4 border border-white/10 bg-white/10">
            <p className="text-white font-semibold">{t.name}</p>
            <p className="text-blue-200 text-sm">{t.desc}</p>
          </div>
        ))}
      </div>
    </LessonCard>
  )
}

/* ---------------- 5️⃣ Decision Trap Simulator ---------------- */

function DecisionSimulator() {
  const [mood, setMood] = useState<"greed" | "fear" | "calm">("calm")
  const message =
    mood === "greed"
      ? "Overconfidence rises — you chase returns, take higher risk."
      : mood === "fear"
      ? "You sell in panic, crystallizing losses instead of staying invested."
      : "Balanced decisions — you follow plan & rebalancing rules."

  return (
    <LessonCard icon={<Activity className="h-5 w-5 text-pink-300" />} title="5️⃣ Decision Trap Simulator">
      <div className="flex gap-3 mb-4">
        {["greed", "fear", "calm"].map((m) => (
          <motion.button
            key={m}
            onClick={() => setMood(m as any)}
            whileHover={{ scale: 1.05 }}
            className={`px-4 py-2 rounded-lg text-sm capitalize border ${
              mood === m
                ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white border-transparent"
                : "bg-white/10 border-white/10 hover:bg-white/20 text-blue-100"
            }`}
          >
            {m}
          </motion.button>
        ))}
      </div>
      <p className="text-blue-100 text-sm">{message}</p>
      <p className="text-xs text-blue-300 mt-2">
        Emotions amplify cognitive biases — awareness helps break the loop before acting impulsively.
      </p>
    </LessonCard>
  )
}

/* ---------------- 6️⃣ Emotion Regulation Framework ---------------- */

function EmotionRegulation() {
  const steps = [
    "Pause before reacting — name your emotion (fear, greed, regret).",
    "Revisit your investment policy or financial plan.",
    "Use rules: Rebalance monthly, not impulsively.",
    "Avoid checking prices daily; focus on long-term metrics.",
    "Journal key decisions & emotions to learn from patterns.",
  ]
  return (
    <LessonCard icon={<AlertTriangle className="h-5 w-5 text-red-400" />} title="6️⃣ Emotional Regulation — Practical Framework">
      <ul className="list-decimal list-inside space-y-1 text-sm text-blue-100">
        {steps.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>
    </LessonCard>
  )
}

/* ---------------- 7️⃣ Long-Term Behavior Reinforcement ---------------- */

function LongTermBehavior() {
  const actions = [
    "Automate investments (SIPs, goal-linked funds) to reduce emotional timing errors.",
    "Use accountability — share progress with a financial mentor or spouse.",
    "Keep a ‘Decision Journal’ tracking major buy/sell thoughts and outcomes.",
    "Create written investing rules and review them annually.",
    "Practice mindfulness — link emotional awareness to decision-making.",
  ]
  return (
    <LessonCard icon={<Target className="h-5 w-5 text-emerald-400" />} title="7️⃣ Long-Term Behavior Reinforcement — Building Discipline">
      <p>
        Long-term investing success is not just about picking the right stocks — it’s about mastering your <strong>behavioral consistency</strong>. Discipline compounds better than returns.
      </p>
      <ul className="list-disc list-inside text-blue-100 space-y-1 mt-2">
        {actions.map((a, i) => (
          <li key={i}>{a}</li>
        ))}
      </ul>
    </LessonCard>
  )
}

/* ---------------- 8️⃣ 💬 Quick Quiz ---------------- */

function QuizComponent() {
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [score, setScore] = useState(0)

  const quiz = [
    {
      question: "Loss aversion means:",
      options: [
        "Preferring gains more than losses",
        "Feeling losses twice as painful as equivalent gains",
        "Ignoring losses completely",
      ],
      correct: "Feeling losses twice as painful as equivalent gains",
    },
    {
      question: "Anchoring bias refers to:",
      options: [
        "Using old reference points for decisions",
        "Relying on advisors only",
        "Anchoring money in savings account",
      ],
      correct: "Using old reference points for decisions",
    },
    {
      question: "A rational investor usually:",
      options: [
        "Times the market actively",
        "Follows plan & avoids emotion-driven trades",
        "Buys based on peer recommendations",
      ],
      correct: "Follows plan & avoids emotion-driven trades",
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
