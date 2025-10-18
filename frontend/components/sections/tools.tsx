"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Calculator,
  PieChart,
  TrendingUp,
  Home,
  Car,
  GraduationCap,
  CreditCard,
  Banknote
} from "lucide-react"

const toolCategories = [
  {
    title: "Investment Tools",
    icon: TrendingUp,
    gradient: "from-green-500 via-emerald-500 to-teal-400",
    tools: [
      { name: "SIP Calculator", desc: "Plan your monthly SIP returns", icon: Calculator },
      { name: "Lumpsum Calculator", desc: "Calculate one-time investment growth", icon: PieChart },
      { name: "Goal Planner", desc: "Reach your targets with smart projections", icon: TrendingUp },
    ]
  },
  {
    title: "Loan Calculators",
    icon: Home,
    gradient: "from-blue-500 via-cyan-500 to-sky-400",
    tools: [
      { name: "Home Loan EMI", desc: "Estimate your home loan payments", icon: Home },
      { name: "Car Loan EMI", desc: "Plan your dream car easily", icon: Car },
      { name: "Personal Loan", desc: "Compare and plan flexible EMIs", icon: Banknote },
    ]
  },
  {
    title: "Credit & Cards",
    icon: CreditCard,
    gradient: "from-purple-500 via-violet-500 to-pink-500",
    tools: [
      { name: "Credit Score Check", desc: "Estimate and improve your score", icon: CreditCard },
      { name: "Card Comparison", desc: "Find the right credit card for you", icon: CreditCard },
      { name: "Debt Payoff", desc: "Build a repayment strategy fast", icon: Calculator },
    ]
  },
  {
    title: "Life Planning",
    icon: GraduationCap,
    gradient: "from-orange-500 via-red-500 to-rose-500",
    tools: [
      { name: "Education Planner", desc: "Save for your child’s future", icon: GraduationCap },
      { name: "Retirement Planner", desc: "Visualize your golden years", icon: TrendingUp },
      { name: "Insurance Calculator", desc: "Know your coverage requirements", icon: Calculator },
    ]
  }
]

export function ToolsSection() {
  return (
    <section id="tools" className="relative py-24 bg-gradient-to-b from-white via-gray-50 to-blue-50 overflow-hidden">
      {/* subtle glows */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-200/40 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md">
            30+ Smart Tools
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Your <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Financial Toolkit
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Plan, calculate, and compare smarter with NeoCred’s AI-ready calculators — designed for everyone from beginners to pros.
          </p>
        </motion.div>

        {/* Tool category cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {toolCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/80 backdrop-blur-sm border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.gradient} flex items-center justify-center`}>
                      <category.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                  </div>

                  <div className="space-y-3">
                    {category.tools.map((tool, toolIndex) => (
                      <div
                        key={toolIndex}
                        className="flex items-center justify-between p-3 rounded-lg bg-gray-50 hover:bg-blue-50 transition-all group cursor-pointer"
                      >
                        <div className="flex items-center gap-3">
                          <tool.icon className="h-5 w-5 text-gray-600 group-hover:text-blue-600 transition-colors" />
                          <div>
                            <h4 className="font-medium text-gray-900 text-sm">{tool.name}</h4>
                            <p className="text-xs text-gray-600">{tool.desc}</p>
                          </div>
                        </div>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="text-blue-600 hover:text-cyan-500 text-xs font-semibold"
                        >
                          Try →
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold px-10 py-4 rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all"
            asChild
          >
            <a href="/signin?mode=signup">
              🧰 Sign Up to Use Tools
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
