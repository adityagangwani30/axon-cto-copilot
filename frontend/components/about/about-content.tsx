"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Zap, BarChart3, Clock, Github, Users, ArrowRight } from "lucide-react"
import Link from "next/link"

const values = [
  {
    icon: Zap,
    title: "Autonomy",
    description: "Let software make routine decisions. Free your team to focus on what matters.",
  },
  {
    icon: BarChart3,
    title: "Clarity",
    description: "Never a number without context. Every insight comes with actionable meaning.",
  },
  {
    icon: Clock,
    title: "Efficiency",
    description: "Respect your team's time. Silence is a feature — only escalate when it matters.",
  },
]

const team = [
  {
    name: "Alex Chen",
    role: "Founder & CEO",
    bio: "Former CTO at ScaleUp. 15 years building engineering teams.",
  },
  {
    name: "Sarah Kim",
    role: "Head of Product",
    bio: "Ex-Google PM. Passionate about developer experience.",
  },
  {
    name: "Marcus Johnson",
    role: "Lead Engineer",
    bio: "Open source contributor. Built observability tools at Datadog.",
  },
]

export function AboutContent() {
  return (
    <div>
      {/* Mission Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Our Mission</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Axon is a free, open-source platform (MIT licensed) and managed service for 
                engineering teams that want to reclaim their time.
              </p>
              <p className="mt-4 text-muted-foreground">
                We believe engineering leaders shouldn&apos;t spend hours triaging alerts, 
                correlating incidents, or digging through Slack threads. That&apos;s work 
                machines can do better.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">How It Started</h2>
              <p className="mt-4 text-muted-foreground">
                Axon was born from frustration. Our founding team spent years as engineering 
                leaders, watching talented people burn out on operational toil.
              </p>
              <p className="mt-4 text-muted-foreground">
                We built Axon to solve our own problems first — and discovered that every 
                engineering org faces the same challenges. So we open-sourced it and built 
                a managed option for teams who want to skip the ops work.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="border-t border-border/50 bg-secondary/30 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Core Values</h2>
            <p className="mt-2 text-muted-foreground">
              The principles that guide everything we build
            </p>
          </motion.div>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl border border-border/50 bg-card p-6 text-center"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <value.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{value.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">The Team</h2>
            <p className="mt-2 text-muted-foreground">
              Built by engineers, for engineers
            </p>
          </motion.div>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl border border-border/50 bg-card p-6 text-center"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-xl font-bold text-primary">
                  {member.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <h3 className="text-lg font-semibold text-foreground">{member.name}</h3>
                <p className="text-sm text-primary">{member.role}</p>
                <p className="mt-2 text-sm text-muted-foreground">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Source Section */}
      <section className="border-t border-border/50 bg-secondary/30 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
              <Github className="h-7 w-7 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Community & Open Source</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Axon is MIT-licensed. We believe the best developer tools are built in the open, 
              with community input and transparency.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="https://github.com" target="_blank" rel="noopener noreferrer" className="gap-2">
                  <Github className="h-4 w-4" />
                  View on GitHub
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="https://discord.com" target="_blank" rel="noopener noreferrer" className="gap-2">
                  <Users className="h-4 w-4" />
                  Join Discord
                </Link>
              </Button>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              Want to contribute? Check out our contribution guide on GitHub.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
