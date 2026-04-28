"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote: "Axon freed up 2 hours every morning I used to spend triaging alerts. It&apos;s like having a tireless Chief of Staff.",
    name: "Sarah Chen",
    title: "VP of Engineering",
    company: "TechFlow Inc.",
  },
  {
    quote: "The incident response time dropped from 20 minutes to under 60 seconds. Our on-call engineers finally get to sleep.",
    name: "Marcus Johnson",
    title: "CTO",
    company: "DataScale",
  },
  {
    quote: "Decision Memory Q&A alone has saved us countless hours of Slack archaeology. New engineers onboard 2x faster.",
    name: "Emily Rodriguez",
    title: "Engineering Director",
    company: "CloudNative Labs",
  },
  {
    quote: "We deployed Axon in an afternoon. The morning briefs are so good, my CEO started asking for the same format.",
    name: "David Park",
    title: "Head of Platform",
    company: "Velocity Systems",
  },
]

const trustedBy = [
  "TechFlow",
  "DataScale",
  "CloudNative",
  "Velocity",
  "ScaleUp",
  "DevOps Pro",
]

export function SocialProofSection() {
  return (
    <section className="border-t border-border/50 bg-secondary/30 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Trusted By */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Trusted by engineering teams at
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-8 lg:gap-16">
            {trustedBy.map((company) => (
              <span
                key={company}
                className="text-lg font-semibold text-muted-foreground/60 transition-colors hover:text-foreground"
              >
                {company}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:mt-24">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl border border-border/50 bg-card p-6 transition-all hover:border-primary/30 lg:p-8"
            >
              <Quote className="absolute right-6 top-6 h-8 w-8 text-primary/10" />
              <p className="relative text-base leading-relaxed text-foreground lg:text-lg">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                  {testimonial.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <p className="font-medium text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.title}, {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
