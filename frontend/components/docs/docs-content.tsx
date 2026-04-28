"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Copy, Check } from "lucide-react"
import { useState } from "react"

interface DocsContentProps {
  activeSection: string
}

function CodeBlock({ code, language = "bash" }: { code: string; language?: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative rounded-lg bg-secondary/50 p-4">
      <button
        onClick={handleCopy}
        className="absolute right-2 top-2 rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
      >
        {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
      </button>
      <pre className="overflow-x-auto font-mono text-sm text-foreground">
        <code>{code}</code>
      </pre>
    </div>
  )
}

const content = {
  "getting-started": {
    title: "Getting Started",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-foreground">What is Axon?</h3>
          <p className="mt-2 text-muted-foreground">
            Axon is an AI-powered CTO assistant that automates executive intelligence delivery. 
            It transforms reactive engineering management into proactive, autonomous workflows.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground">Who is it for?</h3>
          <ul className="mt-2 list-inside list-disc space-y-1 text-muted-foreground">
            <li>CTOs and VP of Engineering managing multiple teams</li>
            <li>Engineering managers wanting to reduce operational overhead</li>
            <li>Tech leads responsible for incident response</li>
            <li>Teams looking to preserve architectural decision context</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground">Quick Overview</h3>
          <p className="mt-2 text-muted-foreground">
            Axon runs on your own infrastructure (or our managed cloud). It connects to your 
            GitHub, Sentry, Linear, and other tools, then delivers synthesized insights via 
            Telegram or Slack on schedules you define or in response to events.
          </p>
        </div>
      </div>
    ),
  },
  installation: {
    title: "Installation",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-foreground">Prerequisites</h3>
          <ul className="mt-2 list-inside list-disc space-y-1 text-muted-foreground">
            <li>Node.js 20 LTS or later</li>
            <li>pnpm (recommended) or npm</li>
            <li>Docker (optional, for containerized deployment)</li>
            <li>A VPS with at least 2GB RAM</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground">Clone the Repository</h3>
          <div className="mt-2">
            <CodeBlock code="git clone https://github.com/axon-ai/axon-cto-copilot.git
cd axon-cto-copilot" />
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground">Install Dependencies</h3>
          <div className="mt-2">
            <CodeBlock code="pnpm install" />
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground">Environment Setup</h3>
          <p className="mt-2 text-muted-foreground">Copy the example environment file:</p>
          <div className="mt-2">
            <CodeBlock code="cp .env.example .env" />
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground">Run with Docker</h3>
          <div className="mt-2">
            <CodeBlock code="docker-compose up -d" />
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground">Or Run with PM2</h3>
          <div className="mt-2">
            <CodeBlock code="pnpm build
pm2 start ecosystem.config.js" />
          </div>
        </div>
      </div>
    ),
  },
  configuration: {
    title: "Configuration",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-foreground">Environment Variables</h3>
          <p className="mt-2 text-muted-foreground">Configure the following in your .env file:</p>
          <div className="mt-3">
            <CodeBlock code={`# Anthropic API
ANTHROPIC_API_KEY=sk-ant-...

# GitHub Integration
GITHUB_TOKEN=ghp_...
GITHUB_WEBHOOK_SECRET=your-webhook-secret

# Sentry Integration
SENTRY_AUTH_TOKEN=...
SENTRY_ORG=your-org
SENTRY_PROJECT=your-project

# Linear Integration
LINEAR_API_KEY=lin_api_...

# Telegram Bot
TELEGRAM_BOT_TOKEN=123456:ABC-...
TELEGRAM_CHAT_ID=-100123456789

# Optional: Slack
SLACK_BOT_TOKEN=xoxb-...
SLACK_CHANNEL_ID=C0123456789`} />
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground">Cron Schedules</h3>
          <p className="mt-2 text-muted-foreground">
            Configure skill schedules in config/schedules.json:
          </p>
          <div className="mt-3">
            <CodeBlock code={`{
  "morning-brief": "0 8 * * 1-5",
  "standup-synthesizer": "30 9 * * 1-5",
  "tech-debt-tracker": "0 9 * * 1",
  "sprint-risk-radar": "0 14 * * 1-5"
}`} />
          </div>
        </div>
      </div>
    ),
  },
  "soul-md": {
    title: "SOUL.md Specification",
    content: (
      <div className="space-y-6">
        <div>
          <p className="text-muted-foreground">
            The SOUL.md file defines Axon&apos;s persona, communication style, and decision heuristics. 
            It&apos;s the &quot;personality&quot; that shapes all of Axon&apos;s outputs.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground">Example SOUL.md</h3>
          <div className="mt-3">
            <CodeBlock code={`# Axon CTO Copilot - SOUL.md

## Identity
You are Axon, a synthetic Chief of Staff for engineering leadership.
You deliver executive-level intelligence with clarity and precision.

## Communication Style
- Be concise: 5 bullets max for summaries
- Lead with the most important information
- Never a number without context
- Use clear action items when needed

## Escalation Rules
- P0 incidents: Always alert immediately
- P1 incidents: Alert if MTTA > 5 minutes
- Blocked tickets: Include in morning brief
- Tech debt: Weekly summary only

## Heuristics
- Silence is a feature: Don't alert on non-events
- Synthesize, don't dump: Never raw data without analysis
- Context is king: Always explain WHY something matters`} />
          </div>
        </div>
      </div>
    ),
  },
  "skill-md": {
    title: "SKILL.md Specification",
    content: (
      <div className="space-y-6">
        <div>
          <p className="text-muted-foreground">
            Each skill is defined by a SKILL.md file that specifies its trigger, inputs, 
            model selection, prompts, and output format.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground">SKILL.md Structure</h3>
          <div className="mt-3">
            <CodeBlock code={`# Morning Brief - SKILL.md

## TRIGGER
cron: "0 8 * * 1-5"  # 8 AM weekdays

## INPUTS
- github: overnight_activity
- linear: blocked_tickets
- ci: pipeline_status

## MODEL
claude-3-haiku (fast synthesis)

## SYSTEM_PROMPT
Synthesize the overnight engineering activity into
a 5-bullet executive summary. Prioritize blockers
and action items.

## OUTPUT_FORMAT
telegram_message:
  - max_length: 500
  - format: bullet_list
  - include_actions: true

## ACTIONS
- create_linear_ticket: on_blocker_detected
- tag_assignee: on_action_required

## MEMORY
store: false  # No long-term memory for this skill`} />
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground">Building Custom Skills</h3>
          <p className="mt-2 text-muted-foreground">
            Create a new skill by adding a SKILL.md file to the skills/ directory. 
            Axon will automatically discover and register new skills on restart.
          </p>
        </div>
      </div>
    ),
  },
  "api-reference": {
    title: "API Reference",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-foreground">OpenClaw Gateway Endpoints</h3>
          <div className="mt-3 space-y-4">
            <div className="rounded-lg border border-border/50 bg-card p-4">
              <div className="flex items-center gap-2">
                <span className="rounded bg-primary/20 px-2 py-0.5 font-mono text-xs text-primary">POST</span>
                <code className="font-mono text-sm">/webhook/github</code>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">Receive GitHub webhook events</p>
            </div>
            <div className="rounded-lg border border-border/50 bg-card p-4">
              <div className="flex items-center gap-2">
                <span className="rounded bg-primary/20 px-2 py-0.5 font-mono text-xs text-primary">POST</span>
                <code className="font-mono text-sm">/webhook/sentry</code>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">Receive Sentry alert webhooks</p>
            </div>
            <div className="rounded-lg border border-border/50 bg-card p-4">
              <div className="flex items-center gap-2">
                <span className="rounded bg-success/20 px-2 py-0.5 font-mono text-xs text-success">GET</span>
                <code className="font-mono text-sm">/health</code>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">Health check endpoint</p>
            </div>
            <div className="rounded-lg border border-border/50 bg-card p-4">
              <div className="flex items-center gap-2">
                <span className="rounded bg-primary/20 px-2 py-0.5 font-mono text-xs text-primary">POST</span>
                <code className="font-mono text-sm">/query</code>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">Decision Memory Q&A endpoint</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  troubleshooting: {
    title: "Troubleshooting",
    content: (
      <div className="space-y-6">
        <div className="rounded-lg border border-border/50 bg-card p-4">
          <h3 className="font-semibold text-foreground">Telegram bot not receiving messages</h3>
          <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
            <li>Verify TELEGRAM_BOT_TOKEN is correct</li>
            <li>Check that TELEGRAM_CHAT_ID includes the minus sign for groups</li>
            <li>Ensure the bot is added to the chat with admin permissions</li>
          </ul>
        </div>
        <div className="rounded-lg border border-border/50 bg-card p-4">
          <h3 className="font-semibold text-foreground">Skill not triggering on schedule</h3>
          <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
            <li>Check cron syntax in config/schedules.json</li>
            <li>Verify timezone settings (default: UTC)</li>
            <li>Check PM2 logs: pm2 logs axon-scheduler</li>
          </ul>
        </div>
        <div className="rounded-lg border border-border/50 bg-card p-4">
          <h3 className="font-semibold text-foreground">GitHub token insufficient permissions</h3>
          <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
            <li>Token needs: repo, read:org, read:user scopes</li>
            <li>For private repos, ensure SSO is authorized if applicable</li>
          </ul>
        </div>
        <div className="rounded-lg border border-border/50 bg-card p-4">
          <h3 className="font-semibold text-foreground">ChromaDB vector store corruption</h3>
          <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
            <li>Stop Axon: pm2 stop all</li>
            <li>Backup data/chroma directory</li>
            <li>Re-run ingestion: pnpm run ingest</li>
          </ul>
        </div>
      </div>
    ),
  },
  faq: {
    title: "Frequently Asked Questions",
    content: (
      <div className="space-y-6">
        <div className="rounded-lg border border-border/50 bg-card p-4">
          <h3 className="font-semibold text-foreground">Can I run Axon on-premises?</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Yes! Axon is MIT licensed and fully self-hostable. The Solo tier is designed 
            for on-premises deployment on your own infrastructure.
          </p>
        </div>
        <div className="rounded-lg border border-border/50 bg-card p-4">
          <h3 className="font-semibold text-foreground">What&apos;s the difference between Haiku and Sonnet?</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Claude 3 Haiku is used for fast synthesis tasks (morning briefs, summaries). 
            Claude 3.5 Sonnet is used for complex analysis (incident causal reasoning, 
            code review). Axon automatically selects the appropriate model per skill.
          </p>
        </div>
        <div className="rounded-lg border border-border/50 bg-card p-4">
          <h3 className="font-semibold text-foreground">How much does Axon cost to run?</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Self-hosted: ~$7-20/month (VPS + Claude API). Managed Pro tier: $29/month 
            all-inclusive. See our pricing page for detailed breakdowns.
          </p>
        </div>
        <div className="rounded-lg border border-border/50 bg-card p-4">
          <h3 className="font-semibold text-foreground">Can I deploy Axon to Kubernetes?</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Yes! We provide Helm charts in the deploy/kubernetes directory. See the 
            K8s deployment guide for configuration details.
          </p>
        </div>
      </div>
    ),
  },
}

export function DocsContent({ activeSection }: DocsContentProps) {
  const section = content[activeSection as keyof typeof content]

  return (
    <div className="min-w-0 flex-1">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          <h2 className="text-2xl font-bold text-foreground">{section.title}</h2>
          <div className="mt-6">{section.content}</div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
