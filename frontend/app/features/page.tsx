import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SkillsSection } from "@/components/features/skills-section"
import { ArchitectureSection } from "@/components/features/architecture-section"
import { IntegrationsSection } from "@/components/features/integrations-section"
import { WorkflowsSection } from "@/components/features/workflows-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Features | Axon CTO Copilot",
  description: "7 pre-built skills for engineering leaders. Morning briefs, incident response, tech debt tracking, and more.",
}

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        {/* Page Header */}
        <section className="border-b border-border/50 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <nav className="mb-8 text-sm text-muted-foreground">
              <span>Home</span>
              <span className="mx-2">/</span>
              <span className="text-foreground">Features</span>
            </nav>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
              Core Features
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground text-pretty">
              7 pre-built skills + unlimited extensibility. Build custom workflows with SKILL.md templates.
            </p>
          </div>
        </section>
        
        <SkillsSection />
        <ArchitectureSection />
        <IntegrationsSection />
        <WorkflowsSection />
      </main>
      <Footer />
    </div>
  )
}
