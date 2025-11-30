// Purpose: Finance calculators page
"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Calculator,
  Search,
  Wallet,
  PiggyBank,
  CreditCard,
  BarChart3,
  Home,
  Briefcase,
  GraduationCap,
  TrendingUp,
  ArrowRight
} from "lucide-react"

const categories = [
  { name: "Savings", icon: PiggyBank },
  { name: "Loans", icon: Home },
  { name: "Investments", icon: TrendingUp },
  { name: "Budgeting", icon: Wallet },
  { name: "Credit & Cards", icon: CreditCard },
  { name: "Business", icon: Briefcase },
  { name: "Education", icon: GraduationCap },
]

const allTools = [
  { title: "SIP Calculator", desc: "Estimate SIP growth over time", category: "Investments" },
  { title: "Lumpsum Calculator", desc: "Calculate returns on one-time investments", category: "Investments" },
  { title: "Goal Planner", desc: "Plan for major life goals", category: "Investments" },
  { title: "Home Loan EMI", desc: "Calculate your home loan EMI", category: "Loans" },
  { title: "Car Loan EMI", desc: "Plan your car purchase EMI", category: "Loans" },
  { title: "Personal Loan EMI", desc: "Compare personal loan options", category: "Loans" },
  { title: "Emergency Fund Calculator", desc: "Know how much you should save", category: "Savings" },
  { title: "50/30/20 Rule Budgeter", desc: "Smart monthly budgeting", category: "Budgeting" },
  { title: "Net Worth Tracker", desc: "Track your total financial position", category: "Budgeting" },
  { title: "Credit Score Check", desc: "Understand your credit health", category: "Credit & Cards" },
  { title: "Debt Payoff Planner", desc: "Accelerate your debt repayment", category: "Credit & Cards" },
  { title: "Business Profit Calculator", desc: "Track profitability easily", category: "Business" },
  { title: "Startup Cost Estimator", desc: "Estimate your new business expenses", category: "Business" },
  { title: "Education Goal Planner", desc: "Plan college or course funding", category: "Education" },
  { title: "Loan Affordability Calculator", desc: "Know how much loan you can take", category: "Loans" },
]

export default function ToolsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [search, setSearch] = useState("")

  const filteredTools = allTools.filter(
    (tool) =>
      (selectedCategory === "All" || tool.category === selectedCategory) &&
      tool.title.toLowerCase().includes(search.toLowerCase())
  )

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
            <Calculator className="h-7 w-7 text-cyan-400" /> Financial Tools Hub
          </h1>
          <p className="text-blue-200 text-sm mt-1">
            Explore AI-curated calculators and planners — built to make finance effortless.
          </p>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="relative w-full md:w-1/3">
          <Search className="absolute left-3 top-3 h-5 w-5 text-blue-300" />
          <input
            type="text"
            placeholder="Search for tools..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-white/10 border border-white/10 rounded-xl py-2 pl-10 pr-4 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>

        <div className="flex flex-wrap gap-3">
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedCategory("All")}
            className={`px-4 py-2 rounded-xl text-sm font-medium ${
              selectedCategory === "All"
                ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white"
                : "bg-white/10 text-blue-100 hover:bg-white/20"
            }`}
          >
            All
          </motion.button>
          {categories.map((cat, i) => (
            <motion.button
              key={i}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedCategory(cat.name)}
              className={`px-4 py-2 rounded-xl text-sm flex items-center gap-2 ${
                selectedCategory === cat.name
                  ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white"
                  : "bg-white/10 text-blue-100 hover:bg-white/20"
              }`}
            >
              <cat.icon className="h-4 w-4" />
              {cat.name}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Tools Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredTools.length === 0 ? (
          <p className="text-blue-200 text-sm">No tools found for your search.</p>
        ) : (
          filteredTools.map((tool, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="bg-gradient-to-br from-blue-900/40 to-cyan-700/40 border border-white/10 rounded-2xl p-5 backdrop-blur-lg shadow-md cursor-pointer hover:shadow-xl"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-white">{tool.title}</h3>
                <ArrowRight className="h-4 w-4 text-cyan-300" />
              </div>
              <p className="text-sm text-blue-200 mb-4">{tool.desc}</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 border border-white/10 px-4 py-2 rounded-lg text-sm text-blue-100 hover:bg-white/20"
              >
                Launch Tool →
              </motion.button>
            </motion.div>
          ))
        )}
      </div>
    </motion.section>
  )
}
