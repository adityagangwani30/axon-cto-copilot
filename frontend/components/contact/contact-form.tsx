"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Mail, MessageSquare, Users, Calendar, Send, Check } from "lucide-react"
import Link from "next/link"

const subjects = [
  "General Inquiry",
  "Technical Support",
  "Sales / Enterprise",
  "Partnership",
  "Bug Report",
  "Feature Request",
]

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: subjects[0],
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would submit to an API
    setSubmitted(true)
  }

  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <h2 className="text-xl font-bold text-foreground">Contact Methods</h2>
            <p className="mt-2 text-muted-foreground">
              Choose the best way to reach us
            </p>

            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Email Support</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    General inquiries and support
                  </p>
                  <a href="mailto:support@axonai.dev" className="mt-1 text-sm text-primary hover:underline">
                    support@axonai.dev
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Discord Community</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Get help from the community
                  </p>
                  <Link href="https://discord.com" target="_blank" className="mt-1 text-sm text-primary hover:underline">
                    Join Discord
                  </Link>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Community Discussions</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Feature requests and technical discussions
                  </p>
                  <Link href="https://discord.com" target="_blank" className="mt-1 text-sm text-primary hover:underline">
                    Open Discussion
                  </Link>
                </div>
              </div>
            </div>

            {/* Enterprise CTA */}
            <div className="mt-10 rounded-xl border border-primary/30 bg-primary/5 p-6">
              <h3 className="font-semibold text-foreground">Enterprise or Pro Interest?</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Please contact us for enterprise inquiries.
              </p>
              <p className="mt-3 text-center text-xs text-muted-foreground">
                Or email: sales@axonai.dev
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <div className="rounded-2xl border border-border/50 bg-card p-6 lg:p-8">
              <h2 className="text-xl font-bold text-foreground">Send a Message</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                We respond within 24 hours
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mt-8 flex flex-col items-center py-12 text-center"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-success/10">
                    <Check className="h-8 w-8 text-success" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-foreground">Message Sent!</h3>
                  <p className="mt-2 text-muted-foreground">
                    We&apos;ll get back to you within 24 hours.
                  </p>
                  <Button className="mt-6" onClick={() => setSubmitted(false)}>
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="mt-1.5 w-full rounded-lg border border-border bg-input px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="mt-1.5 w-full rounded-lg border border-border bg-input px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-foreground">
                        Company (optional)
                      </label>
                      <input
                        type="text"
                        id="company"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="mt-1.5 w-full rounded-lg border border-border bg-input px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                        placeholder="Your company"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-foreground">
                        Subject
                      </label>
                      <select
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="mt-1.5 w-full rounded-lg border border-border bg-input px-4 py-2.5 text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      >
                        {subjects.map((subject) => (
                          <option key={subject} value={subject}>
                            {subject}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="mt-1.5 w-full rounded-lg border border-border bg-input px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="How can we help?"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full gap-2">
                    <Send className="h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
