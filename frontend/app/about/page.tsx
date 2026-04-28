import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AboutContent } from "@/components/about/about-content"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About | Axon CTO Copilot",
  description: "We're building the future of engineering leadership. MIT-licensed, open-source, community-driven.",
}

export default function AboutPage() {
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
              <span className="text-foreground">About</span>
            </nav>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
              About Axon
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground text-pretty">
              We&apos;re building the future of engineering leadership
            </p>
          </div>
        </section>
        
        <AboutContent />
      </main>
      <Footer />
    </div>
  )
}
