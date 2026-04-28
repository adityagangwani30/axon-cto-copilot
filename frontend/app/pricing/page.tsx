import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PricingCards } from "@/components/pricing/pricing-cards"
import { PricingFAQ } from "@/components/pricing/pricing-faq"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Pricing | Axon CTO Copilot",
  description: "Simple, transparent pricing. Free open source + managed cloud option starting at $29/month.",
}

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        {/* Page Header */}
        <section className="border-b border-border/50 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
            <nav className="mb-8 text-sm text-muted-foreground">
              <span>Home</span>
              <span className="mx-2">/</span>
              <span className="text-foreground">Pricing</span>
            </nav>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
              Simple, Transparent Pricing
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground text-pretty">
              Run Axon for less than you spend on coffee. Free forever for self-hosted.
            </p>
          </div>
        </section>
        
        <PricingCards />
        <PricingFAQ />
      </main>
      <Footer />
    </div>
  )
}
