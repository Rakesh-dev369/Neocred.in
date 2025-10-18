"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

const plans = [
  {
    name: "Free Beta",
    price: "₹0",
    desc: "Access AI-powered learning tools and get early product recommendations.",
    features: [
      "AI-guided lessons",
      "Basic financial tools",
      "Personalized product insights",
      "Early access to updates",
    ],
    highlight: true,
  },
  {
    name: "Neo Pro",
    price: "₹499 /mo",
    desc: "Get personalized credit insights, AI comparisons, and financial planning tools.",
    features: [
      "Advanced AI recommendations",
      "Credit score analyzer",
      "Smart product comparisons",
      "Custom reports & alerts",
    ],
    highlight: false,
  },
  {
    name: "Partner Plan",
    price: "Custom",
    desc: "Integrate NeoCred’s AI engine or tools into your platform with API access.",
    features: [
      "Dedicated API access",
      "Brand collaboration",
      "Data & AI insights dashboard",
      "Priority support",
    ],
    highlight: false,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="relative bg-white text-gray-900 py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold mb-6"
        >
          Choose Your <span className="text-blue-600">NeoCred Journey</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-600 max-w-2xl mx-auto mb-16"
        >
          Start learning and managing your financial life today. Our AI-driven
          tools grow with you — from learning the basics to mastering finance.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8">
          {plans.filter(p => p.name !== "Partner Plan").map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className={`rounded-2xl p-8 shadow-lg border transition-all duration-300 card-hover ${
                p.highlight
                  ? "bg-gradient-to-b from-blue-600 to-cyan-500 text-white border-transparent scale-105"
                  : "bg-white border-gray-200 hover:shadow-xl"
              }`}
            >
              <h3 className="text-2xl font-bold mb-2">{p.name}</h3>
              <p className={`mb-6 ${p.highlight ? "text-blue-50" : "text-gray-600"}`}>
                {p.desc}
              </p>
              <div className="text-4xl font-bold mb-6">{p.price}</div>

              <ul className="space-y-3 text-left mb-8">
                {p.features.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm">
                    <CheckCircle
                      className={`w-4 h-4 ${
                        p.highlight ? "text-cyan-200" : "text-blue-500"
                      }`}
                    />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={p.highlight ? "/signin?mode=signup" : "#"}
                className={`block w-full py-3 rounded-xl font-semibold transition-transform hover:-translate-y-0.5 ${
                  p.highlight
                    ? "bg-white text-blue-700 hover:bg-blue-50"
                    : "bg-gradient-to-r from-blue-600 to-cyan-500 text-white"
                }`}
              >
                {p.highlight ? "Join Free Beta" : "Get Started"}
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Subtle background glows */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-100/40 rounded-full blur-3xl -z-10"></div>
    </section>
  )
}
