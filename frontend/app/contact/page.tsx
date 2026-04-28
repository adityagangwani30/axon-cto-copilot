import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact/contact-form"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact | Axon CTO Copilot",
  description: "Get in touch with the Axon team. Questions, support, or enterprise inquiries.",
}

export default function ContactPage() {
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
              <span className="text-foreground">Contact</span>
            </nav>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
              Get in Touch
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground text-pretty">
              Questions? We&apos;d love to hear from you.
            </p>
          </div>
        </section>
        
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}
