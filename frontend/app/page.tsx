import { Header } from "@/components/sections/header"
import { HeroSection } from "@/components/sections/hero"
import { ProblemSection } from "@/components/sections/problem"
import { SolutionSection } from "@/components/sections/solution"
import { InteractiveDemoSection } from "@/components/sections/ai-demo"
import { AIShowcaseSection } from "@/components/sections/ai-showcase"
import { LearningSection } from "@/components/sections/learning"
import { ToolsSection } from "@/components/sections/tools"
import { TrustSection } from "@/components/sections/trust"
import { TestimonialsSection } from "@/components/sections/testimonials"
import { PricingSection } from "@/components/sections/pricing"
import { Footer } from "@/components/sections/footer"

export default function Home() {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <InteractiveDemoSection />
        <AIShowcaseSection />
        <LearningSection />
        <ToolsSection />
        <TrustSection />
        <TestimonialsSection />
        <PricingSection />
      </main>
      <Footer />
    </>
  )
}