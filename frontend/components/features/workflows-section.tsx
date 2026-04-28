"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Sun, Siren, MessageSquareText, Clock, ArrowRight } from "lucide-react"

const workflows = [
  {
    id: "morning",
    name: "Morning Routine",
    icon: Sun,
    description: "Scheduled heartbeat delivers executive summary",
    steps: [
      { time: "08:00:00", action: "Heartbeat Scheduler fires" },
      { time: "08:00:01", action: "OpenClaw Gateway receives trigger" },
      { time: "08:00:02", action: "Fetch GitHub overnight activity" },
      { time: "08:00:03", action: "Fetch Linear sprint data" },
      { time: "08:00:04", action: "Claude Haiku synthesizes insights" },
      { time: "08:00:05", action: "Telegram delivers 5-bullet brief" },
    ],
    elapsed: "~5 seconds",
  },
  {
    id: "incident",
    name: "Incident Response",
    icon: Siren,
    description: "Webhook-triggered causal analysis",
    steps: [
      { time: "14:32:00", action: "Sentry detects error spike" },
      { time: "14:32:05", action: "Webhook fires to OpenClaw" },
      { time: "14:32:10", action: "Fetch last 5 deploy diffs" },
      { time: "14:32:15", action: "Claude Sonnet analyzes correlation" },
      { time: "14:32:30", action: "Generate causal hypothesis" },
      { time: "14:32:45", action: "Telegram alert with rollback button" },
    ],
    elapsed: "<60 seconds",
  },
  {
    id: "decision",
    name: "Decision Memory",
    icon: MessageSquareText,
    description: "On-demand architectural knowledge retrieval",
    steps: [
      { time: "t+0.0s", action: "User queries: 'Why Kafka over RabbitMQ?'" },
      { time: "t+0.5s", action: "Query embedding generated" },
      { time: "t+1.0s", action: "ChromaDB vector search" },
      { time: "t+1.5s", action: "Relevant context retrieved" },
      { time: "t+2.5s", action: "Claude synthesizes answer" },
      { time: "t+3.0s", action: "Response with source links" },
    ],
    elapsed: "~3 seconds",
  },
]

export function WorkflowsSection() {
  const [activeWorkflow, setActiveWorkflow] = useState("morning")

  const currentWorkflow = workflows.find((w) => w.id === activeWorkflow)!

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
            Workflow Visualization
          </h2>
          <p className="mt-2 text-muted-foreground">
            See how the three main journeys work in real-time
          </p>
        </motion.div>

        {/* Workflow Tabs */}
        <div className="mt-8 flex flex-wrap gap-2">
          {workflows.map((workflow) => (
            <button
              key={workflow.id}
              onClick={() => setActiveWorkflow(workflow.id)}
              className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                activeWorkflow === workflow.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
            >
              <workflow.icon className="h-4 w-4" />
              {workflow.name}
            </button>
          ))}
        </div>

        {/* Workflow Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeWorkflow}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mt-8"
          >
            <div className="rounded-2xl border border-border/50 bg-card p-6 lg:p-8">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{currentWorkflow.name}</h3>
                  <p className="text-sm text-muted-foreground">{currentWorkflow.description}</p>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                  <Clock className="h-4 w-4" />
                  {currentWorkflow.elapsed}
                </div>
              </div>

              {/* Timeline */}
              <div className="relative">
                <div className="absolute left-[72px] top-0 h-full w-px bg-border lg:left-[100px]" />
                <div className="space-y-4">
                  {currentWorkflow.steps.map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center gap-4"
                    >
                      <span className="w-16 shrink-0 font-mono text-xs text-muted-foreground lg:w-24">
                        {step.time}
                      </span>
                      <div className="relative z-10 flex h-3 w-3 shrink-0 items-center justify-center rounded-full bg-primary">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary-foreground" />
                      </div>
                      <span className="text-sm text-foreground">{step.action}</span>
                      {index < currentWorkflow.steps.length - 1 && (
                        <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground/50" />
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
