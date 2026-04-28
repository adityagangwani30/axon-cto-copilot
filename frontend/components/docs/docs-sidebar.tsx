"use client"

import { 
  BookOpen, 
  Download, 
  Settings, 
  Heart, 
  Puzzle, 
  Code, 
  HelpCircle,
  Wrench
} from "lucide-react"

const sections = [
  { id: "getting-started", label: "Getting Started", icon: BookOpen },
  { id: "installation", label: "Installation", icon: Download },
  { id: "configuration", label: "Configuration", icon: Settings },
  { id: "soul-md", label: "SOUL.md Specification", icon: Heart },
  { id: "skill-md", label: "SKILL.md Specification", icon: Puzzle },
  { id: "api-reference", label: "API Reference", icon: Code },
  { id: "troubleshooting", label: "Troubleshooting", icon: Wrench },
  { id: "faq", label: "FAQ", icon: HelpCircle },
]

interface DocsSidebarProps {
  activeSection: string
  onSectionChange: (section: string) => void
}

export function DocsSidebar({ activeSection, onSectionChange }: DocsSidebarProps) {
  return (
    <aside className="w-full shrink-0 lg:w-64">
      <nav className="sticky top-28 space-y-1">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Documentation
        </p>
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => onSectionChange(section.id)}
            className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors ${
              activeSection === section.id
                ? "bg-primary/10 text-primary"
                : "text-muted-foreground hover:bg-secondary hover:text-foreground"
            }`}
          >
            <section.icon className="h-4 w-4" />
            {section.label}
          </button>
        ))}
      </nav>
    </aside>
  )
}
