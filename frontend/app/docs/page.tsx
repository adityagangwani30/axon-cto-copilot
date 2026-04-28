"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DocsSidebar } from "@/components/docs/docs-sidebar"
import { DocsContent } from "@/components/docs/docs-content"

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState("getting-started")

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        {/* Page Header */}
        <section className="border-b border-border/50 py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <nav className="mb-6 text-sm text-muted-foreground">
              <span>Home</span>
              <span className="mx-2">/</span>
              <span className="text-foreground">Docs</span>
            </nav>
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Documentation & Setup
            </h1>
            <p className="mt-3 max-w-2xl text-muted-foreground text-pretty">
              From zero to running Axon in under 30 minutes
            </p>
          </div>
        </section>
        
        {/* Docs Layout */}
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex flex-col gap-8 py-8 lg:flex-row lg:gap-12 lg:py-12">
            <DocsSidebar 
              activeSection={activeSection} 
              onSectionChange={setActiveSection} 
            />
            <DocsContent activeSection={activeSection} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
