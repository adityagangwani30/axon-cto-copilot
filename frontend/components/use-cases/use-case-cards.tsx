"use client"

import { motion } from "framer-motion"
import { Siren, Sun, MessageSquareText, Bug, Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const useCases = [
  {
    id: "incident-response",
    icon: Siren,
    headline: "From 20 min Triage to <1 min Causal Hypothesis",
    problem: "Engineering leads spend 20+ minutes manually correlating errors with recent deploys before starting root-cause analysis. On-call engineers are exhausted from constant context-switching.",
    solution: "Incident Commander skill fires on P0/P1 alert, fetches deploy diffs, runs causal reasoning, and pushes a hypothesis + 1-click rollback to the leader's phone in <60 seconds.",
    metrics: [
      "MTTA reduced from 20 min to <1 min",
      "Rollback decisions enabled in seconds",
      "Reduced on-call fatigue",
    ],
    example: `🚨 INCIDENT: P0 - Payment API 500s

Causal Analysis:
• Error spike started 14:32:05 UTC
• Correlates with deploy #789 (14:30:00)
• Diff: stripe-client.ts - API version change

Hypothesis: Stripe API v2024-04 incompatibility
Confidence: 87%

[🔄 Rollback to #788] [📋 Create Incident]`,
    color: "from-red-500/10 to-red-600/5",
    borderColor: "border-red-500/30",
  },
  {
    id: "morning-briefing",
    icon: Sun,
    headline: "Start Your Day with Executive Clarity",
    problem: "CTOs spend 2–3 hours every morning triaging overnight PRs, blocked tickets, and CI failures across Slack, GitHub, and Jira. Critical issues get lost in the noise.",
    solution: "Morning Brief skill runs at 08:00 AM, synthesizes GitHub + Linear data, and delivers a 5-bullet executive summary before the first coffee.",
    metrics: [
      "2–3 hours freed per day",
      "Never miss an overnight blocker",
      "Consistent, synthesized reporting",
    ],
    example: `🌅 Morning Brief - April 28, 2026

• 3 PRs merged overnight (auth-refactor, api-cache, docs-update)
• 1 blocked ticket: AUTH-234 waiting on security review
• CI/CD: All green, deploy pipeline stable
• Tech debt: 2 new items flagged in payments module
• Action: Review AUTH-234 security scan before standup`,
    color: "from-amber-500/10 to-amber-600/5",
    borderColor: "border-amber-500/30",
  },
  {
    id: "decision-memory",
    icon: MessageSquareText,
    headline: "Query Past Decisions Without Digging Through Slack",
    problem: "Why did we choose Kafka? Why not RabbitMQ? Architectural decisions get buried in Slack threads and forgotten. New engineers ask the same questions repeatedly.",
    solution: "Decision Memory Q&A ingests Slack exports and ADRs; engineers query in natural language and get a synthesized answer with sources.",
    metrics: [
      "No more 'lost' architectural decisions",
      "Onboarding new team members faster",
      "Enforce consistency in design patterns",
    ],
    example: `❓ Query: "Why did we choose Kafka over RabbitMQ?"

📝 Answer:
In Q3 2025, the platform team evaluated both options.
Kafka was chosen for:
• Higher throughput (100k+ msg/sec requirement)
• Built-in partitioning for our multi-tenant model
• Better replay capabilities for audit logs

Sources: ADR-034, #arch-decisions (Oct 12, 2025)`,
    color: "from-blue-500/10 to-blue-600/5",
    borderColor: "border-blue-500/30",
  },
  {
    id: "tech-debt",
    icon: Bug,
    headline: "Track and Quantify Tech Debt in Real Time",
    problem: "Engineering teams have no clear dashboard for tech debt; it accumulates invisibly until velocity drops. Refactoring decisions are based on gut feeling, not data.",
    solution: "Tech Debt Tracker scans codebase metrics, correlates them with sprint velocity, and surfaces hotspots weekly with quantified impact.",
    metrics: [
      "Early visibility into debt accumulation",
      "Data-driven prioritization for refactoring",
      "Track debt reduction over time",
    ],
    example: `🔧 Tech Debt Report - Week 17

High Priority:
• payments/checkout.ts - 847 lines, 12 TODO comments
• auth/session.ts - Cyclomatic complexity: 34

Velocity Impact: -15% over 4 sprints
Recommended Action: Allocate 20% sprint capacity

[📊 View Full Report] [📋 Create Sprint Tasks]`,
    color: "from-purple-500/10 to-purple-600/5",
    borderColor: "border-purple-500/30",
  },
]

export function UseCaseCards() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="space-y-12 lg:space-y-16">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`overflow-hidden rounded-2xl border ${useCase.borderColor} bg-gradient-to-br ${useCase.color}`}
            >
              <div className="grid gap-8 p-6 lg:grid-cols-2 lg:p-10">
                {/* Content */}
                <div>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-card text-primary">
                    <useCase.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground lg:text-3xl text-balance">
                    {useCase.headline}
                  </h3>
                  
                  <div className="mt-6">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                      The Problem
                    </h4>
                    <p className="mt-2 text-muted-foreground">{useCase.problem}</p>
                  </div>

                  <div className="mt-6">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                      The Solution
                    </h4>
                    <p className="mt-2 text-foreground">{useCase.solution}</p>
                  </div>

                  <div className="mt-6">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                      Results
                    </h4>
                    <ul className="mt-3 space-y-2">
                      {useCase.metrics.map((metric) => (
                        <li key={metric} className="flex items-center gap-2 text-sm text-foreground">
                          <Check className="h-4 w-4 text-success" />
                          {metric}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Example Output */}
                <div className="flex flex-col">
                  <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    Example Output
                  </h4>
                  <pre className="flex-1 overflow-x-auto rounded-xl border border-border/50 bg-card p-4 font-mono text-xs text-foreground">
                    {useCase.example}
                  </pre>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <h2 className="text-2xl font-bold text-foreground">Ready to transform your workflow?</h2>
          <p className="mx-auto mt-2 max-w-xl text-muted-foreground">
            Learn more in the documentation.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="outline" asChild>
              <Link href="/docs">View Documentation</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
