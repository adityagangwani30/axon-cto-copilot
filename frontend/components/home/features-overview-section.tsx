"use client"

import { motion } from "framer-motion"
import { Sparkles, BarChart3, BrainCircuit, Puzzle } from "lucide-react"

const features = [
  {
    icon: Sparkles,
    title: "Proactive Intelligence",
    description: "Wakes up on heartbeat schedules, not your Slack ping. Axon delivers insights before you know you need them.",
  },
  {
    icon: BarChart3,
    title: "Synthesized Insights",
    description: "Never a raw number without context. Every metric comes with trend analysis, anomaly detection, and actionable recommendations.",
  },
  {
    icon: BrainCircuit,
    title: "Autonomous Decisions",
    description: "Silence is a feature. Axon escalates only on threshold breach, letting you focus on what truly matters.",
  },
  {
    icon: Puzzle,
    title: "Extensible Skills",
    description: "Build custom skills with SKILL.md templates. From weekly reports to custom integrations, make Axon your own.",
  },
]

export function FeaturesOverviewSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Why Engineering Leaders Choose Axon
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground text-pretty">
            Transform how you manage engineering operations with AI-powered automation
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
