"use client"

import { motion } from "framer-motion"
import { Shield, Key, Database, Lock, AlertCircle } from "lucide-react"

const securityFeatures = [
  {
    icon: Shield,
    title: "HMAC Webhook Verification",
    description: "All incoming webhooks are verified using HMAC-SHA256 signatures to prevent spoofing.",
  },
  {
    icon: Key,
    title: "Secret Management",
    description: "Secrets stored in dotenv or Doppler. Never committed to version control.",
  },
  {
    icon: Database,
    title: "Local ChromaDB",
    description: "Vector database runs locally. Zero external data exposure for decision memory.",
  },
  {
    icon: Lock,
    title: "Role-Based Token Scoping",
    description: "Each integration uses minimally-scoped tokens with read-only access where possible.",
  },
]

export function SecuritySection() {
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
            Security & Compliance
          </h2>
          <p className="mt-2 text-muted-foreground">
            Enterprise-grade security built into every layer
          </p>
        </motion.div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-xl border border-border/50 bg-card p-6"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <feature.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{feature.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Security Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 rounded-xl border border-success/30 bg-success/5 p-6"
        >
          <div className="flex items-start gap-4">
            <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-success" />
            <div>
              <h3 className="font-semibold text-foreground">All Data Stays on Your VPS</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                No sensitive production data is sent to Anthropic or any external service. 
                The LLM receives only sanitized summaries and metadata. Your code, secrets, 
                and customer data never leave your infrastructure.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
