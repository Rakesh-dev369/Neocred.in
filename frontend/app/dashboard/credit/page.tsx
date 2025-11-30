// Purpose: Credit Insights page
"use client"

import { motion } from "framer-motion"
import { CreditCard, AlertTriangle, Download } from "lucide-react"
import { CreditWidget } from "@/components/dashboard/CreditWidget"

const creditData = [
  { month: "Jan", score: 690 },
  { month: "Feb", score: 702 },
  { month: "Mar", score: 720 },
  { month: "Apr", score: 739 },
  { month: "May", score: 751 },
  { month: "Jun", score: 770 },
]

export default function CreditPage() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen space-y-10"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
        <div>
          <h1 className="text-3xl font-bold text-white flex items-center gap-2">
            <CreditCard className="h-7 w-7 text-cyan-400" /> Credit Health Overview
          </h1>
          <p className="text-blue-200 text-sm mt-1">
            Track your credit score trends and receive personalized AI recommendations.
          </p>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-2 rounded-xl font-medium text-white shadow-lg mt-4 md:mt-0"
        >
          <Download className="inline h-4 w-4 mr-2" />
          Download Report
        </motion.button>
      </div>

      {/* Credit Widget */}
      <CreditWidget />

      {/* Insights Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {[
          {
            title: "Your Credit Score",
            value: "770",
            desc: "Excellent credit health! Maintain payments and keep utilization low.",
          },
          {
            title: "Utilization Ratio",
            value: "32%",
            desc: "Healthy ratio — below 40%. Avoid crossing 50% to maintain score.",
          },
          {
            title: "Risk Alerts",
            value: "0 Active",
            desc: "No issues detected. Keep monitoring with monthly AI insights.",
          },
        ].map((card, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-br from-blue-900/50 to-cyan-700/50 border border-white/10 rounded-xl p-5 backdrop-blur-lg"
          >
            <h3 className="text-blue-200 text-sm mb-2">{card.title}</h3>
            <p className="text-3xl font-bold text-cyan-300 mb-1">{card.value}</p>
            <p className="text-blue-100 text-sm">{card.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* AI Tip */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="bg-gradient-to-r from-blue-700/40 to-cyan-600/40 border border-white/10 rounded-xl p-5 text-blue-100 flex items-start gap-3 shadow-inner"
      >
        <AlertTriangle className="h-6 w-6 text-yellow-300 mt-1" />
        <p>
          💡 <strong>AI Insight:</strong> Paying 10% more than your EMI due this month can help you
          reduce total loan interest by up to 6.5%.
        </p>
      </motion.div>
    </motion.section>
  )
}
