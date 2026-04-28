"use client"

import { motion } from "framer-motion"
import { ArrowRight, Database, Brain, MessageSquare } from "lucide-react"

export function DataFlowSection() {
  return (
    <section className="border-t border-border/50 bg-secondary/30 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            Data Flow Diagram
          </h2>
          <p className="mt-2 text-muted-foreground">
            How data moves through the Axon system
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8"
        >
          <div className="overflow-x-auto">
            <div className="min-w-[800px] rounded-2xl border border-border/50 bg-card p-8">
              <div className="flex items-center justify-between gap-4">
                {/* Data Sources */}
                <div className="flex flex-col gap-3">
                  <div className="rounded-lg border border-border bg-secondary/50 px-4 py-2 text-center text-sm font-medium text-foreground">
                    GitHub
                  </div>
                  <div className="rounded-lg border border-border bg-secondary/50 px-4 py-2 text-center text-sm font-medium text-foreground">
                    Sentry
                  </div>
                  <div className="rounded-lg border border-border bg-secondary/50 px-4 py-2 text-center text-sm font-medium text-foreground">
                    Linear
                  </div>
                </div>

                <ArrowRight className="h-6 w-6 shrink-0 text-primary/50" />

                {/* OpenClaw Gateway */}
                <div className="flex flex-col items-center gap-2">
                  <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Database className="h-8 w-8" />
                  </div>
                  <span className="text-sm font-medium text-foreground">OpenClaw Gateway</span>
                  <span className="text-xs text-muted-foreground">~10ms routing</span>
                </div>

                <ArrowRight className="h-6 w-6 shrink-0 text-primary/50" />

                {/* LLM */}
                <div className="flex flex-col items-center gap-2">
                  <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Brain className="h-8 w-8" />
                  </div>
                  <span className="text-sm font-medium text-foreground">Claude LLM</span>
                  <span className="text-xs text-muted-foreground">~2-5s analysis</span>
                </div>

                <ArrowRight className="h-6 w-6 shrink-0 text-primary/50" />

                {/* Output */}
                <div className="flex flex-col gap-3">
                  <div className="rounded-lg border border-primary/30 bg-primary/10 px-4 py-2 text-center text-sm font-medium text-primary">
                    Telegram
                  </div>
                  <div className="rounded-lg border border-primary/30 bg-primary/10 px-4 py-2 text-center text-sm font-medium text-primary">
                    Slack
                  </div>
                  <div className="rounded-lg border border-primary/30 bg-primary/10 px-4 py-2 text-center text-sm font-medium text-primary">
                    Actions
                  </div>
                </div>
              </div>

              {/* Latency annotations */}
              <div className="mt-8 flex items-center justify-center gap-8 text-xs text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-success" />
                  <span>Total latency: {"<60s"} for complex analysis</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span>{"<5s"} for synthesized briefs</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
