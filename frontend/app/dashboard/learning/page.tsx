"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { GraduationCap, BookOpen, Sparkles, ArrowRight, Filter, Clock, Trophy } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
// Using original button-based selection system

// 🔹 Full Lesson Data — Beginner → Intermediate → Advanced
const LESSONS = {
  Beginner: [
  "What is Money & Budgeting Basics",
  "Understanding Income, Expenses & Savings",
  "How to Track Expenses & Budgeting Apps",
  "Understanding Tax Basics — What is Income Tax, PAN, and Form 16",
  "Emergency Fund — Why and How Much",
  "Banking in India — FD, RD, Savings, Current",
  "Interest Explained — Simple vs Compound",
  "What Is Inflation with Real-Life Examples",
  "Digital Payments — UPI, NEFT, IMPS",
  "Understanding Credit bureaus (CIBIL, Equifax, Experian, CRIF High Mark Basics)",
  "Loans & EMIs — What You Should Know",
  "How to Read a Bank Statement / Credit Card Bill",
  "Insurance Basics — Life, Health, Vehicle",
  "Government Savings Schemes in India",
  "Difference Between Assets & Liabilities",
  "Understanding Net Worth — Simple formula: Assets − Liabilities = Net Worth",
  "Financial Goal Setting",
  "Difference Between Saving & Investing",
  "50/30/20 Rule — Smart Budgeting Formula",
  "Introduction to Mutual Funds & SIP"
],
  Intermediate: [
  "How the Stock Market Works (NSE, BSE, SEBI)",
  "Types of Mutual Funds — Equity, Debt, Hybrid.etc.",
  "How to Start a SIP, Step-up SIP, SWP..etc.",
  "Power of Compounding (with SIP Examples)",
  "Understanding Risk vs Return",
  "Understanding Inflation vs Real Returns — Adjusting investment growth for inflation",
  "How to Diversify Your Portfolio (Equity, Debt, Gold..etc.)",
  "Fixed Income Instruments (Bonds, NCDs, Treasury Bills)",
  "How to Read a Mutual Fund Fact Sheet",
  "Tax Planning under Section 80C / 80D",
  "Insurance Planning — Term vs ULIP vs Endowment",
  "Health Insurance Deep Dive — Why it's a wealth protector",
  "Home Loan vs Rent Decision — The Indian Dilemma",
  "Credit Card Optimization — Rewards, Cashback, Interest-Free Period",
  "Personal Loan vs Credit Line vs BNPL (Buy Now Pay Later)",
  "Debt Management Strategy — Snowball vs Avalanche methods",
  "Understanding Credit Reports & Errors in CIBIL, Equifax, Experian, CRIF High Mark",
  "How to Improve Credit Score (Step-by-Step)",
  "How to Choose a Financial Advisor / Platform — SEBI-registered vs unregulated apps",
  "Smart Financial Habits — Automate, Track & Review"
],
  Advanced: [
  "Fundamental vs Technical Analysis (for Stocks)",
  "Valuation Ratios (PE, PB, ROE, EPS, Debt-Equity)",
  "Reading Financial Statements — Case Study (Indian Companies)",
  "Understanding Risk-Adjusted Returns (Sharpe Ratio, Alpha, Beta)",
  "Macroeconomics for Investors — Inflation, GDP, Repo Rate",
  "Asset Allocation Strategies (Modern Portfolio Theory)",
  "Advanced Taxation for Investors — LTCG, STCG, Indexation benefits",
  "Tax Harvesting & Capital Gains Optimization",
  "Corporate Finance Basics — Balance Sheet, P&L, Cash Flow",
  "Financial Planning Frameworks (Goal-Based Investing)",
  "Behavioral Finance — How Emotions Affect Money",
  "Derivatives Simplified (Futures, Options, Hedging)",
  "Alternative Investment Options — REITs, INVITs, AIFs, PMS.etc",
  "Real Estate Investment Analysis — ROI, IRR, Cash Flow",
  "Global Investing — ETFs, International Funds..etc",
  "Crypto & Digital Assets — Risk, Regulation, RBI stance",
  "Wealth Preservation & Estate Planning (Wills, Trusts)",
  "Financial Independence & Early Retirement (FIRE Movement)",
  "Building a Long-Term Investment Strategy (5–20 years)"
],
  Bonus: [
 "Fintech Revolution — UPI, ONDC, OCEN",
 "AI & Machine Learning in Finance — How credit scoring, robo-advisors, and fraud detection use AI",
 "Cybersecurity in Digital Finance — Protecting users in fintech platforms",
 "Sustainable Finance & Green Investing (ESG Funds)",
 "Financial Inclusion & Rural Banking Innovations — Jan Dhan, AEPS, Micro-Finance, etc.",
 "Behavioural Psychology in Finance (Extended) — Money biases, herd mentality",
 "How Financial Scams Work (and How to Avoid Them)",
 "Women & Finance in India — Tailored guidance on empowerment & schemes",
 "Government Regulations — SEBI, RBI, IRDAI Basics & Financial System Overview",
 "Indian Tax System Explained — Income Tax, GST, TDS & Compliance Basics",
 "Career in Finance — Banking, Analytics, Investment, Fintech",
 "Integrated Portfolio Design — Multi-Asset Strategy for Modern India",
 "Smart Tax Efficiency — Index Funds, ELSS, and Asset Location Optimization"
]
}

// 🔹 AI Recommendations
const recommendations = [
  {
    title: "AI Recommends: How to Build Wealth with SIPs",
    desc: "Start small — ₹5,000/month SIP can grow into ₹10L+ in 10 years. Learn compounding today.",
    color: "from-cyan-500 to-blue-600"
  },
  {
    title: "AI Recommends: Understanding Your CIBIL Score",
    desc: "Learn how payment history and utilization impact your score — with real examples.",
    color: "from-purple-500 to-pink-600"
  }
]

export default function LearningPage() {
  const [activeLevel, setActiveLevel] = useState("Beginner")

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen space-y-10"
    >
      {/* 🧠 Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-white flex items-center gap-2">
            <GraduationCap className="h-7 w-7 text-cyan-400" /> Financial Learning Hub
          </h1>
          <p className="text-blue-200 text-sm mt-1">
            From budgeting to wealth building — learn finance the NeoCred way.
          </p>
        </div>
        <Button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-sm px-6 py-2 rounded-xl shadow-md">
          🎓 Start Learning — It's Free
        </Button>
      </div>

      {/* 📊 Progress Snapshot */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-blue-900/60 to-cyan-700/50 rounded-2xl p-6 border border-white/10 shadow-lg backdrop-blur-xl"
      >
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-white mb-1">Your Learning Progress</h2>
            <p className="text-blue-100 text-sm">You've completed 8 of 30 lessons 🎯</p>
          </div>
          <div className="flex items-center gap-2 text-blue-200 text-sm">
            <Clock className="h-5 w-5 text-cyan-300" />
            <p>7-day streak</p>
          </div>
        </div>
        <div className="mt-5 bg-white/10 rounded-full h-3 overflow-hidden">
          <motion.div
            className="h-3 bg-gradient-to-r from-cyan-400 to-blue-600"
            initial={{ width: 0 }}
            animate={{ width: "26%" }}
            transition={{ duration: 1 }}
          />
        </div>
      </motion.div>

      {/* 🔍 Tabs for Levels */}
      <div className="flex items-center justify-between mt-4">
        <h2 className="text-xl font-semibold text-white flex items-center gap-2">
          <Filter className="h-5 w-5 text-cyan-400" /> Choose Your Level
        </h2>
      </div>

      <div>
        <div className="bg-white/10 border border-white/10 rounded-xl p-1 w-fit mx-auto backdrop-blur-lg mb-6">
          {["Beginner", "Intermediate", "Advanced", "Bonus"].map((level) => (
            <button
              key={level}
              onClick={() => setActiveLevel(level)}
              className={`px-5 py-2 text-sm font-medium text-white rounded-lg transition ${
                activeLevel === level
                  ? "bg-gradient-to-r from-blue-600 to-cyan-500"
                  : "hover:bg-white/10"
              }`}
            >
              {level}
            </button>
          ))}
        </div>

        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {LESSONS[activeLevel as keyof typeof LESSONS].map((topic, i) => {
            let slug = ""
            if (topic === "What is Money & Budgeting Basics") slug = "budgeting-basics"
            if (topic === "Understanding Income, Expenses & Savings") slug = "understanding-ies"
            if (topic === "How to Track Expenses & Budgeting Apps") slug = "budgeting-apps"
            if (topic === "Understanding Tax Basics — What is Income Tax, PAN, and Form 16") slug = "tax-basics"
            if (topic === "Emergency Fund — Why and How Much") slug = "emergency-fund"
            if (topic === "Banking in India — FD, RD, Savings, Current") slug = "banking-in-india"
            if (topic === "Interest Explained — Simple vs Compound") slug = "interest-explained"
            if (topic === "What Is Inflation with Real-Life Examples") slug = "inflation"
            if (topic === "Digital Payments — UPI, NEFT, IMPS") slug = "digital-payments"
            if (topic === "How to Start a SIP, Step-up SIP, SWP..etc.") slug = "sip-swp"
            if (topic === "Power of Compounding (with SIP Examples)") slug = "power-of-compounding"
            if (topic === "Understanding Risk vs Return") slug = "risk-vs-return"
            if (topic === "Understanding Inflation vs Real Returns — Adjusting investment growth for inflation") slug = "inflation-vs-realreturns"
            if (topic === "How to Diversify Your Portfolio (Equity, Debt, Gold..etc.)") slug = "diversify-your-portfolio"
            if (topic === "Fixed Income Instruments (Bonds, NCDs, Treasury Bills)") slug = "fixed-income-instruments"
            if (topic === "How to Read a Mutual Fund Fact Sheet") slug = "mf-fact-sheet"
            if (topic === "Tax Planning under Section 80C / 80D") slug = "tax-80c-80d"
            if (topic === "Insurance Planning — Term vs ULIP vs Endowment") slug = "insurance-planning"
            if (topic === "Health Insurance Deep Dive — Why it's a wealth protector") slug = "health-insurance"
            if (topic === "Home Loan vs Rent Decision — The Indian Dilemma") slug = "home-vs-rent"
            if (topic === "Credit Card Optimization — Rewards, Cashback, Interest-Free Period") slug = "credit-card-optimization"
            if (topic === "Personal Loan vs Credit Line vs BNPL (Buy Now Pay Later)") slug = "pl-cl-bnpl"
            if (topic === "Debt Management Strategy — Snowball vs Avalanche methods") slug = "snowball-vs-avalanche"
            if (topic === "Understanding Credit Reports & Errors in CIBIL, Equifax, Experian, CRIF High Mark") slug = "creditreports-errors"
            if (topic === "How to Improve Credit Score (Step-by-Step)") slug = "improve-credit-score"
            if (topic === "How to Choose a Financial Advisor / Platform — SEBI-registered vs unregulated apps") slug = "finadvisor-sebi-reg"
            if (topic === "Smart Financial Habits — Automate, Track & Review") slug = "smart-financial-habits"
            if (topic === "Fundamental vs Technical Analysis (for Stocks)") slug = "fundamental-vs-technical"
            if (topic === "Valuation Ratios (PE, PB, ROE, EPS, Debt-Equity)") slug = "valuation-ratios"
            if (topic === "Reading Financial Statements — Case Study (Indian Companies)") slug = "reading-financial-statements"
            if (topic === "Understanding Risk-Adjusted Returns (Sharpe Ratio, Alpha, Beta)") slug = "risk-adjusted-returns"
            if (topic === "Macroeconomics for Investors — Inflation, GDP, Repo Rate") slug = "macro-economics"
            if (topic === "Asset Allocation Strategies (Modern Portfolio Theory)") slug = "asset-allocation-mpt"
            if (topic === "Advanced Taxation for Investors — LTCG, STCG, Indexation benefits") slug = "advanced-taxation-investors"
            if (topic === "Tax Harvesting & Capital Gains Optimization") slug = "tax-harvesting-capital-gains"
            if (topic === "Corporate Finance Basics — Balance Sheet, P&L, Cash Flow") slug = "corporate-finance-basics"
            if (topic === "Financial Planning Frameworks (Goal-Based Investing)") slug = "financial-planning-frameworks"
            if (topic === "Behavioral Finance — How Emotions Affect Money") slug = "behavioral-finance"
            if (topic === "Derivatives Simplified (Futures, Options, Hedging)") slug = "derivatives-simplified"
            if (topic === "Alternative Investment Options — REITs, INVITs, AIFs, PMS.etc") slug = "alternative-investment-options"
            if (topic === "Real Estate Investment Analysis — ROI, IRR, Cash Flow") slug = "real-estate-investment"
            if (topic === "Global Investing — ETFs, International Funds..etc") slug = "global-investing"
            if (topic === "Crypto & Digital Assets — Risk, Regulation, RBI stance") slug = "crypto-digital-assets"
            if (topic === "Wealth Preservation & Estate Planning (Wills, Trusts)") slug = "WealthPreservation-EstatePlanning"
            if (topic === "Financial Independence & Early Retirement (FIRE Movement)") slug = "FinancialIndependence-EarlyRetirement"
            if (topic === "Building a Long-Term Investment Strategy (5–20 years)") slug = "Long-Term-Investment-Strategy"
            if (topic === "Fintech Revolution — UPI, ONDC, OCEN") slug = "Fintech-Revolution"
            if (topic === "Understanding Credit bureaus (CIBIL, Equifax, Experian, CRIF High Mark Basics)") slug = "credit-bureaus"
            if (topic === "Loans & EMIs — What You Should Know") slug = "loans-emis"
            if (topic === "How to Read a Bank Statement / Credit Card Bill") slug = "bank-statement-ccbill"
            if (topic === "Insurance Basics — Life, Health, Vehicle") slug = "insurance-basics"
            if (topic === "Government Savings Schemes in India") slug = "govt-saving-schemes"
            if (topic === "Difference Between Assets & Liabilities") slug = "assets-liabilities"
            if (topic === "Financial Goal Setting") slug = "financial-goal-setting"
            if (topic === "Difference Between Saving & Investing") slug = "saving-investing"
            if (topic === "50/30/20 Rule — Smart Budgeting Formula") slug = "50-30-20-rule"
            if (topic === "Introduction to Mutual Funds & SIP") slug = "mutualfunds-sip"
            if (topic === "How the Stock Market Works (NSE, BSE, SEBI)") slug = "stock-market-basics"
            if (topic === "Types of Mutual Funds — Equity, Debt, Hybrid.etc.") slug = "mutual-funds"
            if (topic === "Understanding Net Worth — Simple formula: Assets − Liabilities = Net Worth") slug = "net-worth-formula"

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-gradient-to-br from-blue-900/40 to-cyan-800/30 rounded-xl p-5 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 group backdrop-blur-lg shadow-lg"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-cyan-400" />
                    <span className="text-xs font-medium text-cyan-300 bg-cyan-400/10 px-2 py-1 rounded-full">
                      {activeLevel}
                    </span>
                  </div>
                  <Trophy className="h-4 w-4 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                
                <h3 className="text-white font-semibold text-sm mb-2 leading-relaxed group-hover:text-cyan-300 transition-colors">
                  {topic}
                </h3>
                
                <div className="flex items-center justify-between mt-4">
                  <span className="text-blue-200 text-xs">8-12 min read</span>
                  {slug ? (
                    <Link href={`/dashboard/learning/${slug}`}>
                      <Button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-xs px-4 py-1.5 rounded-lg hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 flex items-center gap-1">
                        Start <ArrowRight className="h-3 w-3" />
                      </Button>
                    </Link>
                  ) : (
                    <Button className="bg-gray-600 text-gray-300 text-xs px-4 py-1.5 rounded-lg cursor-not-allowed">
                      Coming Soon
                    </Button>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* 🤖 AI Recommendations */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-10"
      >
        <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-cyan-400" /> AI Recommendations
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {recommendations.map((rec, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`bg-gradient-to-r ${rec.color} rounded-xl p-6 text-white shadow-lg hover:shadow-xl transition-shadow duration-300`}
            >
              <h3 className="font-semibold text-lg mb-2">{rec.title}</h3>
              <p className="text-white/90 text-sm leading-relaxed">{rec.desc}</p>
              <Button className="mt-4 bg-white/20 text-white text-sm px-4 py-2 rounded-lg hover:bg-white/30 transition-colors">
                Learn More
              </Button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  )
}