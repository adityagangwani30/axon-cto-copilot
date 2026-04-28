"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Zap, ArrowDownRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-24">
      {/* Background Elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(55,91,210,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(55,91,210,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary"
          >
            <Zap className="h-4 w-4" />
            <span>MIT Licensed &middot; Open Source</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-7xl text-balance"
          >
            The CTO You Never Had
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground lg:text-xl text-pretty"
          >
            Axon transforms reactive engineering management into autonomous, proactive intelligence. 
            Get synthesized insights, not raw data dumps.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
          >
            <Button size="lg" className="gap-2 px-8">
              Start 30-Day Free Trial
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="gap-2 px-8">
              <Play className="h-4 w-4" />
              View Demo
            </Button>
          </motion.div>

          {/* Metrics Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground lg:gap-12"
          >
            <div className="flex items-center gap-2">
              <span className="font-semibold text-foreground">2-3 hrs/day</span>
              <span>saved</span>
            </div>
            <div className="h-4 w-px bg-border" />
            <div className="flex items-center gap-2">
              <span className="font-semibold text-foreground">{"<60s"}</span>
              <span>incident MTTA</span>
            </div>
            <div className="h-4 w-px bg-border" />
            <div className="flex items-center gap-2">
              <span className="font-semibold text-foreground">7</span>
              <span>pre-built skills</span>
            </div>
            <div className="h-4 w-px bg-border" />
            <div className="flex items-center gap-2">
              <span className="font-semibold text-foreground">MIT</span>
              <span>Licensed</span>
            </div>
          </motion.div>

          {/* Architecture Diagram Preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-16 w-full max-w-5xl"
          >
            <div className="relative rounded-2xl border border-border bg-card/50 p-8 backdrop-blur-sm">
              {/* OpenClaw Architecture Visualization */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
                {[
                  { layer: "Triggers", desc: "Heartbeat & Webhooks", icon: "01" },
                  { layer: "Routing", desc: "OpenClaw Gateway", icon: "02" },
                  { layer: "Cognition", desc: "LLM Reasoning Core", icon: "03" },
                  { layer: "Execution", desc: "Actions & Output", icon: "04" },
                ].map((item, index) => (
                  <motion.div
                    key={item.layer}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="group relative flex flex-col items-center rounded-xl border border-border/50 bg-secondary/50 p-6 transition-all hover:border-primary/50 hover:bg-secondary"
                  >
                    <span className="mb-3 text-xs font-medium text-primary">{item.icon}</span>
                    <h3 className="text-base font-semibold text-foreground">{item.layer}</h3>
                    <p className="mt-1 text-center text-sm text-muted-foreground">{item.desc}</p>
                    {index < 3 && (
                      <ArrowDownRight className="absolute -right-2 top-1/2 hidden h-4 w-4 -translate-y-1/2 rotate-[-45deg] text-primary/50 md:block" />
                    )}
                  </motion.div>
                ))}
              </div>
              <p className="mt-6 text-center text-sm text-muted-foreground">
                The OpenClaw 4-Layer Architecture — from trigger to intelligent action in milliseconds
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
