// Purpose: Lesson template component
"use client"

import { motion } from "framer-motion"
import { RotateCcw, CheckCircle, XCircle } from "lucide-react"
import { useState } from "react"

interface LessonSection {
  title: string
  content: React.ReactNode
  gradient?: string
}

interface QuizQuestion {
  question: string
  options: string[]
  correct: string
}

interface LessonTemplateProps {
  title: string
  subtitle?: string
  icon?: React.ReactNode
  sections: LessonSection[]
  quiz?: QuizQuestion[]
}

export default function LessonTemplate({
  title,
  subtitle,
  icon,
  sections,
  quiz,
}: LessonTemplateProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto space-y-10 text-blue-50"
    >
      {/* Header */}
      <div className="text-center space-y-3">
        <h1 className="text-3xl sm:text-4xl font-bold text-white flex items-center justify-center gap-2">
          {icon} {title}
        </h1>
        {subtitle && (
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">{subtitle}</p>
        )}
      </div>

      {/* Sections */}
      {sections.map((sec, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.05 }}
          className={`p-6 rounded-2xl border border-white/10 shadow-lg backdrop-blur-lg ${
            sec.gradient
              ? `bg-gradient-to-r ${sec.gradient}`
              : "bg-white/10"
          }`}
        >
          <h2 className="text-2xl font-semibold text-white mb-3">{sec.title}</h2>
          <div className="text-blue-100 leading-relaxed space-y-3">{sec.content}</div>
        </motion.div>
      ))}

      {/* Quiz Section */}
      {quiz && quiz.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white/10 p-6 rounded-2xl backdrop-blur-lg border border-white/10 shadow-lg"
        >
          <h2 className="text-2xl font-semibold text-white mb-3">
            Quick Quiz & Challenge
          </h2>
          <QuizComponent quiz={quiz} />
        </motion.div>
      )}
    </motion.section>
  )
}

/* 🔹 Reusable Quiz Component */
function QuizComponent({ quiz }: { quiz: QuizQuestion[] }) {
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [score, setScore] = useState(0)

  const handleSelect = (qIndex: number, option: string) => {
    if (!submitted) setAnswers((prev) => ({ ...prev, [qIndex]: option }))
  }

  const handleSubmit = () => {
    let correctCount = 0
    quiz.forEach((q, i) => {
      if (answers[i] === q.correct) correctCount++
    })
    setScore(correctCount)
    setSubmitted(true)
  }

  const handleReset = () => {
    setAnswers({})
    setSubmitted(false)
    setScore(0)
  }

  return (
    <div className="space-y-6 text-blue-100">
      {quiz.map((q, qIndex) => (
        <motion.div
          key={qIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: qIndex * 0.1 }}
          className="bg-white/5 p-4 rounded-xl border border-white/10"
        >
          <p className="font-medium mb-3">
            Q{qIndex + 1}: {q.question}
          </p>
          <div className="space-y-2">
            {q.options.map((option, i) => {
              const isSelected = answers[qIndex] === option
              const isCorrect = option === q.correct

              return (
                <motion.button
                  key={i}
                  onClick={() => handleSelect(qIndex, option)}
                  disabled={submitted}
                  whileHover={!submitted ? { scale: 1.02 } : {}}
                  className={`w-full text-left px-4 py-2 rounded-lg border transition-all ${
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
                  {option}
                </motion.button>
              )
            })}
          </div>
        </motion.div>
      ))}

      {!submitted ? (
        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={handleSubmit}
          disabled={Object.keys(answers).length < quiz.length}
          className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-2 rounded-xl text-sm font-medium disabled:opacity-50"
        >
          Submit Answers
        </motion.button>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4"
        >
          <div className="flex justify-center items-center gap-2 text-lg font-semibold">
            {score === quiz.length ? (
              <>
                <CheckCircle className="text-green-400 h-6 w-6" /> You got all correct! 🎉
              </>
            ) : (
              <>
                <XCircle className="text-yellow-400 h-6 w-6" /> You got {score}/{quiz.length} correct.
              </>
            )}
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={handleReset}
            className="flex items-center justify-center mx-auto text-sm bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg"
          >
            <RotateCcw className="h-4 w-4 mr-2" /> Try Again
          </motion.button>
        </motion.div>
      )}
    </div>
  )
}
