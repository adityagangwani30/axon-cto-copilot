"use client"

import { motion } from "framer-motion"
import { Server, ArrowRight, RefreshCw, Shield, AlertTriangle } from "lucide-react"

export function DeploymentSection() {
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
            Deployment Architecture
          </h2>
          <p className="mt-2 text-muted-foreground">
            Reliable, self-hosted deployment with production-grade features
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
            <div className="min-w-[700px] rounded-2xl border border-border/50 bg-card p-8">
              <div className="flex items-center justify-center gap-6">
                {/* Incoming */}
                <div className="flex flex-col items-center gap-2">
                  <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Incoming
                  </div>
                  <div className="space-y-2">
                    <div className="rounded-lg border border-border bg-secondary/50 px-3 py-1.5 text-xs text-foreground">
                      GitHub Webhooks
                    </div>
                    <div className="rounded-lg border border-border bg-secondary/50 px-3 py-1.5 text-xs text-foreground">
                      Sentry Webhooks
                    </div>
                    <div className="rounded-lg border border-border bg-secondary/50 px-3 py-1.5 text-xs text-foreground">
                      Cron Heartbeats
                    </div>
                  </div>
                </div>

                <ArrowRight className="h-5 w-5 text-primary/50" />

                {/* VPS */}
                <div className="flex flex-col items-center gap-3 rounded-xl border-2 border-primary/30 bg-primary/5 p-6">
                  <Server className="h-10 w-10 text-primary" />
                  <div className="text-center">
                    <div className="font-semibold text-foreground">VPS Instance</div>
                    <div className="text-xs text-muted-foreground">2 vCPU / 4GB RAM</div>
                  </div>
                  <div className="space-y-1 text-center text-xs text-muted-foreground">
                    <div>PM2 Process Manager</div>
                    <div>Docker Container</div>
                    <div>OpenClaw Gateway</div>
                  </div>
                </div>

                <ArrowRight className="h-5 w-5 text-primary/50" />

                {/* Outgoing */}
                <div className="flex flex-col items-center gap-2">
                  <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Outgoing
                  </div>
                  <div className="space-y-2">
                    <div className="rounded-lg border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs text-primary">
                      Telegram Bot
                    </div>
                    <div className="rounded-lg border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs text-primary">
                      Slack Integration
                    </div>
                    <div className="rounded-lg border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs text-primary">
                      Linear Actions
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Reliability Features */}
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {[
            {
              icon: RefreshCw,
              title: "Auto-Restart",
              description: "PM2 automatically restarts crashed processes with exponential backoff",
            },
            {
              icon: AlertTriangle,
              title: "Dead-Letter Queue",
              description: "Failed webhook deliveries are queued for retry and manual review",
            },
            {
              icon: Shield,
              title: "Graceful Degradation",
              description: "Skills continue operating even when individual integrations are down",
            },
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="rounded-xl border border-border/50 bg-card p-4"
            >
              <feature.icon className="h-5 w-5 text-primary" />
              <h3 className="mt-2 font-medium text-foreground">{feature.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
