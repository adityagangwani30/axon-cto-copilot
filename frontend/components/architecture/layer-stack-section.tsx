"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Zap, Route, Brain, Play, Clock, Webhook, ChevronRight } from "lucide-react"

const layers = [
  {
    id: "triggers",
    number: "01",
    name: "Triggers Layer",
    icon: Zap,
    description: "Entry points for all Axon workflows",
    components: [
      {
        name: "Heartbeat Scheduler",
        icon: Clock,
        description: "Cron-based scheduler for time-triggered skills like Morning Brief and Sprint Risk Radar.",
        details: "Supports complex cron expressions, timezone handling, and graceful scheduling with jitter to prevent thundering herd.",
      },
      {
        name: "Webhook Receiver",
        icon: Webhook,
        description: "HTTP endpoint for real-time events from GitHub, Sentry, Linear, and PagerDuty.",
        details: "HMAC signature verification, payload normalization, and dead-letter queue for failed deliveries.",
      },
    ],
  },
  {
    id: "routing",
    number: "02",
    name: "Routing Layer",
    icon: Route,
    description: "Intelligent routing and skill dispatch",
    components: [
      {
        name: "OpenClaw Gateway",
        description: "Central coordination layer that receives triggers and orchestrates skill execution.",
        details: "Priority queuing, rate limiting, circuit breaker patterns, and graceful degradation.",
      },
      {
        name: "Skill Router",
        description: "Maps incoming events to appropriate skills based on event type, source, and priority.",
        details: "Supports skill chaining, conditional routing, and priority-based ordering.",
      },
    ],
  },
  {
    id: "cognition",
    number: "03",
    name: "Cognition Layer",
    icon: Brain,
    description: "AI reasoning and memory systems",
    components: [
      {
        name: "LLM Reasoning Core",
        description: "Claude 3.5 Sonnet for complex analysis and Claude 3 Haiku for fast synthesis.",
        details: "Structured prompting with SKILL.md templates, context windowing, and response validation.",
      },
      {
        name: "Memory Store",
        description: "ChromaDB vector database for semantic search and decision memory.",
        details: "Vector embeddings for architectural decisions, Slack exports, and ADR documents.",
      },
    ],
  },
  {
    id: "execution",
    number: "04",
    name: "Execution Layer",
    icon: Play,
    description: "Actions and output delivery",
    components: [
      {
        name: "Action Layer",
        description: "Execute side effects like creating Linear tickets, triggering rollbacks, or posting comments.",
        details: "Idempotency keys, retry logic with exponential backoff, and audit logging.",
      },
      {
        name: "Output Layer",
        description: "Format and deliver results to Telegram, Slack, or other configured destinations.",
        details: "Template rendering, message formatting, and delivery confirmation.",
      },
    ],
  },
]

export function LayerStackSection() {
  const [expandedLayer, setExpandedLayer] = useState<string | null>("triggers")

  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            The 4-Layer Stack
          </h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            A detailed view of each layer in the OpenClaw architecture
          </p>
        </motion.div>

        <div className="mt-8 space-y-4">
          {layers.map((layer, index) => (
            <motion.div
              key={layer.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="overflow-hidden rounded-xl border border-border/50 bg-card"
            >
              <button
                onClick={() => setExpandedLayer(expandedLayer === layer.id ? null : layer.id)}
                className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-secondary/50"
              >
                <div className="flex items-center gap-4">
                  <span className="font-mono text-sm text-primary">{layer.number}</span>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <layer.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{layer.name}</h3>
                    <p className="text-sm text-muted-foreground">{layer.description}</p>
                  </div>
                </div>
                <ChevronRight 
                  className={`h-5 w-5 text-muted-foreground transition-transform ${
                    expandedLayer === layer.id ? "rotate-90" : ""
                  }`} 
                />
              </button>

              <AnimatePresence>
                {expandedLayer === layer.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-border/50 p-6">
                      <div className="grid gap-4 md:grid-cols-2">
                        {layer.components.map((component) => (
                          <div
                            key={component.name}
                            className="rounded-lg border border-border/50 bg-secondary/30 p-4"
                          >
                            <h4 className="font-semibold text-foreground">{component.name}</h4>
                            <p className="mt-2 text-sm text-muted-foreground">{component.description}</p>
                            <p className="mt-2 text-xs text-muted-foreground/80">{component.details}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
