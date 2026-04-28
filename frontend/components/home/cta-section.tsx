"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap } from "lucide-react"

export function CTASection() {
  return (
    <section className="border-t border-border/50 bg-secondary/30 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 via-background to-primary/5 p-8 lg:p-16"
        >
          {/* Background Elements */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -right-24 -top-24 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />
          </div>

          <div className="relative flex flex-col items-center text-center">
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
              <Zap className="h-7 w-7 text-primary" />
            </div>
            <h2 className="max-w-2xl text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl text-balance">
              Join engineering teams transforming their incident response workflow
            </h2>
            <p className="mt-4 max-w-xl text-muted-foreground text-pretty">
              Start your 30-day free trial today. No credit card required. 
              Deploy in minutes with our Docker setup.
            </p>

            {/* Email Signup */}
            <div className="mt-8 flex w-full max-w-md flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your work email"
                className="flex-1 rounded-lg border border-border bg-input px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <Button size="lg" className="gap-2">
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>

            <p className="mt-4 text-sm text-muted-foreground">
              Free forever for self-hosted. Managed cloud starts at $29/month.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
