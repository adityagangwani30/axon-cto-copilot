"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Sun, 
  Users, 
  Bug, 
  AlertTriangle, 
  GitPullRequest, 
  Siren, 
  MessageSquareText,
  Clock,
  ChevronDown
} from "lucide-react"

const skills = [
  {
    id: "morning-brief",
    name: "Morning Brief",
    icon: Sun,
    trigger: "08:00 AM cron",
    description: "Delivers a 5-bullet executive summary of overnight GitHub activity, blocked tickets, and CI failures before your first coffee.",
    output: `🌅 Morning Brief - April 28, 2026

• 3 PRs merged overnight (auth-refactor, api-cache, docs-update)
• 1 blocked ticket: AUTH-234 waiting on security review
• CI/CD: All green, deploy pipeline stable
• Tech debt: 2 new items flagged in payments module
• Action: Review AUTH-234 security scan before standup`,
  },
  {
    id: "standup-synthesizer",
    name: "Standup Synthesizer",
    icon: Users,
    trigger: "09:30 AM cron",
    description: "Aggregates async updates from GitHub, Linear, and Slack to generate a team standup summary without the meeting.",
    output: `👥 Team Standup Summary

Frontend Team:
• Sarah: Completed auth modal, starting payment flow
• Marcus: PR review for API caching

Backend Team:  
• Emily: Database migration scripts ready
• David: Fixing rate limiter edge case

Blockers: AUTH-234 security review needed`,
  },
  {
    id: "tech-debt-tracker",
    name: "Tech Debt Tracker",
    icon: Bug,
    trigger: "Weekly (Monday 09:00)",
    description: "Scans codebase metrics, correlates them with sprint velocity, and surfaces tech debt hotspots with quantified impact.",
    output: `🔧 Tech Debt Report - Week 17

High Priority:
• payments/checkout.ts - 847 lines, 12 TODO comments
• auth/session.ts - Cyclomatic complexity: 34

Velocity Impact: -15% over 4 sprints
Recommended Action: Allocate 20% sprint capacity`,
  },
  {
    id: "sprint-risk-radar",
    name: "Sprint Risk Radar",
    icon: AlertTriangle,
    trigger: "Daily at 14:00",
    description: "Analyzes sprint progress, identifies at-risk deliverables, and suggests scope adjustments before it&apos;s too late.",
    output: `⚠️ Sprint Risk Alert

At Risk (2 items):
• FEAT-456: Payment integration - 3 days behind
• FEAT-789: Mobile auth - Blocked by dependency

On Track: 8 items
Completed: 5 items

Recommendation: Consider descoping FEAT-789 to next sprint`,
  },
  {
    id: "pr-intel",
    name: "PR Intel",
    icon: GitPullRequest,
    trigger: "On PR open/update",
    description: "Automatically reviews PRs for code quality, security issues, and provides context-aware suggestions.",
    output: `🔍 PR Analysis: #342 auth-refactor

Security: ✅ No issues detected
Complexity: ⚠️ +45 lines in single function
Test Coverage: 87% (+2%)

Suggestions:
• Consider splitting AuthProvider into smaller hooks
• Add error boundary for token refresh failure`,
  },
  {
    id: "incident-commander",
    name: "Incident Commander",
    icon: Siren,
    trigger: "Sentry P0/P1 webhook",
    description: "Fires on critical alerts, fetches recent deploy diffs, runs causal analysis, and pushes a hypothesis with 1-click rollback.",
    output: `🚨 INCIDENT: P0 - Payment API 500s

Causal Analysis:
• Error spike started 14:32:05 UTC
• Correlates with deploy #789 (14:30:00)
• Diff: stripe-client.ts - API version change

Hypothesis: Stripe API v2024-04 incompatibility
Confidence: 87%

[🔄 Rollback to #788] [📋 Create Incident]`,
  },
  {
    id: "decision-memory",
    name: "Decision Memory Q&A",
    icon: MessageSquareText,
    trigger: "On-demand query",
    description: "Query past architectural decisions in natural language. Never dig through Slack threads again.",
    output: `❓ Query: "Why did we choose Kafka over RabbitMQ?"

📝 Answer:
In Q3 2025, the platform team evaluated both options. 
Kafka was chosen for:
• Higher throughput (100k+ msg/sec requirement)
• Built-in partitioning for our multi-tenant model
• Better replay capabilities for audit logs

Sources: ADR-034, #arch-decisions (Oct 12, 2025)`,
  },
]

export function SkillsSection() {
  const [expandedSkill, setExpandedSkill] = useState<string | null>("morning-brief")

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
            The 7 Core Skills
          </h2>
          <p className="mt-2 text-muted-foreground">
            Pre-built automation for the most common engineering leadership workflows
          </p>
        </motion.div>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="overflow-hidden rounded-xl border border-border/50 bg-card transition-colors hover:border-primary/30"
            >
              <button
                onClick={() => setExpandedSkill(expandedSkill === skill.id ? null : skill.id)}
                className="flex w-full items-center justify-between p-5 text-left"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <skill.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{skill.name}</h3>
                    <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      <span>{skill.trigger}</span>
                    </div>
                  </div>
                </div>
                <ChevronDown 
                  className={`h-5 w-5 text-muted-foreground transition-transform ${
                    expandedSkill === skill.id ? "rotate-180" : ""
                  }`} 
                />
              </button>
              
              <AnimatePresence>
                {expandedSkill === skill.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-border/50 p-5">
                      <p className="text-sm text-muted-foreground">{skill.description}</p>
                      <div className="mt-4">
                        <p className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                          Example Output
                        </p>
                        <pre className="overflow-x-auto rounded-lg bg-secondary/50 p-4 font-mono text-xs text-foreground">
                          {skill.output}
                        </pre>
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
