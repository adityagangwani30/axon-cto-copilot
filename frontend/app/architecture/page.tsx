import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LayerStackSection } from "@/components/architecture/layer-stack-section"
import { DataFlowSection } from "@/components/architecture/data-flow-section"
import { TechStackSection } from "@/components/architecture/tech-stack-section"
import { DeploymentSection } from "@/components/architecture/deployment-section"
import { SecuritySection } from "@/components/architecture/security-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Architecture | Axon CTO Copilot",
  description: "System architecture built on OpenClaw — a lightweight, modular platform for engineering intelligence.",
}

export default function ArchitecturePage() {
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
              <span className="text-foreground">Architecture</span>
            </nav>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
              System Architecture
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground text-pretty">
              Built on OpenClaw — a lightweight, modular platform designed for extensibility and reliability.
            </p>
          </div>
        </section>
        
        <LayerStackSection />
        <DataFlowSection />
        <TechStackSection />
        <DeploymentSection />
        <SecuritySection />
      </main>
      <Footer />
    </div>
  )
}
