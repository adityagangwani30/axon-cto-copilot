"use client"

import { motion } from "framer-motion"

const integrations = [
  { name: "GitHub", category: "Source Control" },
  { name: "Sentry", category: "Error Tracking" },
  { name: "Linear", category: "Project Management" },
  { name: "PagerDuty", category: "Incident Management" },
  { name: "Telegram", category: "Messaging" },
  { name: "Slack", category: "Messaging" },
  { name: "BigQuery", category: "Analytics" },
  { name: "Datadog", category: "Monitoring" },
]

export function IntegrationsSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            Integration Sources
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">
            Axon ingests signals from your entire engineering stack
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
          {integrations.map((integration, index) => (
            <motion.div
              key={integration.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="group flex flex-col items-center rounded-xl border border-border/50 bg-card p-4 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-lg font-bold text-primary">
                {integration.name[0]}
              </div>
              <span className="text-sm font-medium text-foreground">{integration.name}</span>
              <span className="mt-1 text-xs text-muted-foreground">{integration.category}</span>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 text-center text-sm text-muted-foreground"
        >
          Missing an integration? Build custom connectors with our extensible skill system.
        </motion.p>
      </div>
    </section>
  )
}
