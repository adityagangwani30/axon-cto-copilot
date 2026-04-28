"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "Can I self-host the Pro tier?",
    answer: "The Pro tier is a managed service only. However, all features are available in the Solo (open-source) tier — you just need to self-host and manage the infrastructure yourself. The Pro tier primarily adds managed hosting, monitoring, and priority support.",
  },
  {
    question: "What's included in 'managed hosting'?",
    answer: "Managed hosting includes: dedicated VPS infrastructure, automatic updates, 24/7 monitoring, automated backups, log retention, SSL certificates, and our operations team handling any infrastructure issues so you can focus on your engineering work.",
  },
  {
    question: "Can I upgrade/downgrade anytime?",
    answer: "Yes! You can upgrade from Solo to Pro at any time. When upgrading, we'll help migrate your existing configuration to our managed infrastructure. Downgrading is also possible — we'll provide your data export and migration guide.",
  },
  {
    question: "Is there a setup fee?",
    answer: "No setup fees for any tier. Solo is completely free (MIT licensed). Pro starts immediately with a 30-day free trial. Enterprise pricing is custom but includes setup and onboarding support at no extra cost.",
  },
  {
    question: "Do you offer annual discounts?",
    answer: "Yes! Annual billing for Pro tier is $290/year (vs $348 monthly), saving you 17%. Enterprise plans also have annual discount options — contact sales for details.",
  },
  {
    question: "What happens after the 30-day trial?",
    answer: "After the trial, you'll be automatically moved to the Pro paid plan unless you cancel. We'll send reminders before the trial ends. If you cancel, your data is exported and you can continue using the self-hosted Solo tier.",
  },
  {
    question: "Can I use my own Claude API key?",
    answer: "Yes! For self-hosted (Solo tier), you use your own Anthropic API key. For Pro tier, you can either use our pooled API access (included in pricing) or bring your own API key for usage-based billing.",
  },
]

export function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="border-t border-border/50 bg-secondary/30 py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-muted-foreground">
            Everything you need to know about pricing
          </p>
        </motion.div>

        <div className="mt-8 space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="overflow-hidden rounded-xl border border-border/50 bg-card"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between p-5 text-left"
              >
                <span className="font-medium text-foreground">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <p className="border-t border-border/50 px-5 py-4 text-sm text-muted-foreground">
                      {faq.answer}
                    </p>
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
