// Purpose: AI Overview page for dashboard
"use client"

import { AISnapshot } from "@/components/dashboard/AISnapshot"
import { CreditWidget } from "@/components/dashboard/CreditWidget"
import { LearningWidget } from "@/components/dashboard/LearningWidget"
import { ToolsGrid } from "@/components/dashboard/ToolsGrid"
import { AIAdvisor } from "@/components/dashboard/AIAdvisor"
import { RewardsPanel } from "@/components/dashboard/RewardsPanel"

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* AI Summary */}
      <AISnapshot />

      {/* Grid Widgets */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <CreditWidget />
        <LearningWidget />
      </div>

      {/* Tools Preview */}
      <ToolsGrid />

      {/* AI Chat Section */}
      <AIAdvisor />

      {/* Rewards Section */}
      <RewardsPanel />
    </div>
  )
}
