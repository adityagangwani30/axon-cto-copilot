"use client"

import { motion } from "framer-motion"
import { Zap, Route, Brain, Play, ArrowRight } from "lucide-react"

const layers = [
  {
    number: "01",
    name: "Triggers",
    icon: Zap,
    description: "Heartbeat Scheduler & Webhook Receiver",
    details: "Cron-based heartbeats for scheduled tasks. Webhook endpoints for real-time events from GitHub, Sentry, and Linear.",
    color: "from-blue-500/20 to-blue-600/10",
  },
  {
    number: "02",
    name: "Routing",
    icon: Route,
    description: "OpenClaw Gateway & Skill Router",
    details: "Intelligent routing layer that maps triggers to appropriate skills based on event type and priority.",
    color: "from-purple-500/20 to-purple-600/10",
  },
  {
    number: "03",
    name: "Cognition",
    icon: Brain,
    description: "LLM Reasoning Core & Memory Store",
    details: "Claude 3.5 Sonnet for complex analysis. ChromaDB vector store for decision memory and context retrieval.",
    color: "from-emerald-500/20 to-emerald-600/10",
  },
  {
    number: "04",
    name: "Execution",
    icon: Play,
    description: "Action Layer & Output Layer",
    details: "Execute actions like creating tickets, triggering rollbacks. Deliver formatted output to Telegram or Slack.",
    color: "from-orange-500/20 to-orange-600/10",
  },
]

export function ArchitectureSection() {
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
            The OpenClaw Architecture
          </h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            A lightweight, modular 4-layer stack that powers intelligent automation
          </p>
        </motion.div>

        {/* Architecture Diagram */}
        <div className="mt-12">
          <div className="relative">
            {/* Connection Lines */}
            <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-primary/50 via-primary/20 to-transparent lg:block" />
            
            <div className="grid gap-6 lg:grid-cols-4">
              {layers.map((layer, index) => (
                <motion.div
                  key={layer.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className={`relative overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br ${layer.color} p-6 transition-all hover:border-primary/30`}>
                    {/* Layer Number */}
                    <span className="absolute right-4 top-4 font-mono text-4xl font-bold text-primary/10">
                      {layer.number}
                    </span>
                    
                    {/* Icon */}
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-card/50 text-primary backdrop-blur-sm">
                      <layer.icon className="h-6 w-6" />
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-lg font-semibold text-foreground">{layer.name}</h3>
                    <p className="mt-1 text-sm font-medium text-primary">{layer.description}</p>
                    <p className="mt-3 text-sm text-muted-foreground">{layer.details}</p>
                  </div>
                  
                  {/* Arrow connector for desktop */}
                  {index < 3 && (
                    <div className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 lg:block">
                      <ArrowRight className="h-6 w-6 text-primary/50" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Flow Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 rounded-xl border border-border/50 bg-card p-6"
          >
            <h3 className="text-lg font-semibold text-foreground">How It Works</h3>
            <p className="mt-2 text-muted-foreground">
              When a trigger fires (scheduled or webhook), the OpenClaw Gateway routes it to the appropriate skill. 
              The skill fetches required data from integrations, sends it to the LLM for analysis, and executes 
              the resulting actions. The entire flow typically completes in under 60 seconds.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
