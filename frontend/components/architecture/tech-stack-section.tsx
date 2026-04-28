"use client"

import { motion } from "framer-motion"
import { Server, Brain, Plug, Cloud } from "lucide-react"

const techCategories = [
  {
    name: "Core Engine",
    icon: Server,
    technologies: [
      { name: "Node.js", version: "20 LTS" },
      { name: "TypeScript", version: "5.x" },
      { name: "Fastify", version: "4.x" },
      { name: "PM2", version: "5.x" },
    ],
  },
  {
    name: "AI / Cognition",
    icon: Brain,
    technologies: [
      { name: "Claude 3.5 Sonnet", version: "Complex analysis" },
      { name: "Claude 3 Haiku", version: "Fast synthesis" },
      { name: "ChromaDB", version: "Vector store" },
      { name: "OpenAI Embeddings", version: "text-embedding-3" },
    ],
  },
  {
    name: "Integrations",
    icon: Plug,
    technologies: [
      { name: "GitHub API", version: "REST + GraphQL" },
      { name: "Sentry", version: "Webhooks" },
      { name: "Linear", version: "GraphQL API" },
      { name: "Telegram Bot API", version: "6.x" },
    ],
  },
  {
    name: "Infrastructure",
    icon: Cloud,
    technologies: [
      { name: "VPS", version: "2 vCPU, 4GB RAM" },
      { name: "Docker", version: "24.x" },
      { name: "SQLite", version: "State persistence" },
      { name: "Nginx", version: "Reverse proxy" },
    ],
  },
]

export function TechStackSection() {
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
            Technology Stack
          </h2>
          <p className="mt-2 text-muted-foreground">
            Built with modern, battle-tested technologies
          </p>
        </motion.div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {techCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-xl border border-border/50 bg-card p-6"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <category.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{category.name}</h3>
              </div>
              <div className="space-y-3">
                {category.technologies.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex items-center justify-between rounded-lg bg-secondary/50 px-4 py-2"
                  >
                    <span className="text-sm font-medium text-foreground">{tech.name}</span>
                    <span className="text-xs text-muted-foreground">{tech.version}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
