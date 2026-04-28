import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { UseCaseCards } from "@/components/use-cases/use-case-cards"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Use Cases | Axon CTO Copilot",
  description: "Real workflows that save time and reduce MTTA. See how engineering leaders use Axon.",
}

export default function UseCasesPage() {
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
              <span className="text-foreground">Use Cases</span>
            </nav>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
              How Engineering Leaders Use Axon
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground text-pretty">
              Real workflows that save time and reduce MTTA. See how teams transform their engineering operations.
            </p>
          </div>
        </section>
        
        <UseCaseCards />
      </main>
      <Footer />
    </div>
  )
}
