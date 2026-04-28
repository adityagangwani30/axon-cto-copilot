"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Check, X, Star, Server, Cloud, Building2 } from "lucide-react"

const tiers = [
  {
    name: "Solo",
    icon: Server,
    price: "Free",
    period: "MIT Licensed",
    description: "Perfect for individual engineers or small teams",
    features: [
      { text: "All 7 core skills", included: true },
      { text: "Self-hosted on your VPS", included: true },
      { text: "GitHub source code access", included: true },
      { text: "Community support (Discord)", included: true },
      { text: "Managed hosting", included: false },
      { text: "Priority support", included: false },
    ],
    cta: "Get Started (Self-Hosted)",
    ctaVariant: "outline" as const,
    popular: false,
  },
  {
    name: "Pro",
    icon: Cloud,
    price: "$29",
    period: "/month",
    annualPrice: "$290/year",
    description: "For growing engineering teams",
    features: [
      { text: "Everything in Solo", included: true },
      { text: "Managed Axon cloud (we host + monitor)", included: true },
      { text: "Custom skill builder UI", included: true },
      { text: "10 teams / custom configurations", included: true },
      { text: "Email + Slack support (24h response)", included: true },
      { text: "Automated backups & log retention", included: true },
      { text: "API rate: 1,000 req/day", included: true },
    ],
    cta: "Start Free Trial",
    ctaVariant: "default" as const,
    popular: true,
  },
  {
    name: "Enterprise",
    icon: Building2,
    price: "Custom",
    period: "pricing",
    description: "For large enterprises & advanced deployments",
    features: [
      { text: "Everything in Pro", included: true },
      { text: "Multi-tenant support", included: true },
      { text: "White-label option", included: true },
      { text: "SSO / SAML integration", included: true },
      { text: "Custom integrations (Datadog, New Relic)", included: true },
      { text: "Dedicated success manager", included: true },
      { text: "SLA: 99.9% uptime guarantee", included: true },
      { text: "Unlimited API rate", included: true },
    ],
    cta: "Contact Sales",
    ctaVariant: "outline" as const,
    popular: false,
  },
]

export function PricingCards() {
  const [annual, setAnnual] = useState(false)

  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Billing Toggle */}
        <div className="mb-12 flex items-center justify-center gap-4">
          <span className={`text-sm ${!annual ? "text-foreground" : "text-muted-foreground"}`}>
            Monthly
          </span>
          <button
            onClick={() => setAnnual(!annual)}
            className={`relative h-6 w-11 rounded-full transition-colors ${
              annual ? "bg-primary" : "bg-secondary"
            }`}
          >
            <span
              className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-foreground transition-transform ${
                annual ? "translate-x-5" : "translate-x-0"
              }`}
            />
          </button>
          <span className={`text-sm ${annual ? "text-foreground" : "text-muted-foreground"}`}>
            Annual
            <span className="ml-1 text-xs text-primary">(Save 17%)</span>
          </span>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-6 lg:grid-cols-3">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl border p-6 lg:p-8 ${
                tier.popular
                  ? "border-primary bg-gradient-to-b from-primary/10 to-transparent"
                  : "border-border/50 bg-card"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                    <Star className="h-3 w-3" />
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <tier.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{tier.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{tier.description}</p>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-bold text-foreground">
                  {tier.price === "Free" ? "Free" : annual && tier.annualPrice ? "$290" : tier.price}
                </span>
                <span className="text-muted-foreground">
                  {tier.price === "Free" ? "" : annual && tier.annualPrice ? "/year" : tier.period}
                </span>
              </div>

              <ul className="mb-8 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature.text} className="flex items-start gap-3">
                    {feature.included ? (
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                    ) : (
                      <X className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground/50" />
                    )}
                    <span
                      className={`text-sm ${
                        feature.included ? "text-foreground" : "text-muted-foreground/50"
                      }`}
                    >
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                variant={tier.ctaVariant}
                className="w-full"
                size="lg"
              >
                {tier.cta}
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Operating Costs Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 rounded-xl border border-border/50 bg-card p-6"
        >
          <h3 className="font-semibold text-foreground">Estimated Operating Costs (Self-Hosted)</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Self-hosting Axon costs approximately $7–20/month total:
          </p>
          <ul className="mt-3 grid gap-2 text-sm text-muted-foreground sm:grid-cols-3">
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-primary" />
              VPS hosting: $4–8/mo
            </li>
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-primary" />
              Claude API: $3–10/mo
            </li>
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-primary" />
              Domain (optional): $1/mo
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
