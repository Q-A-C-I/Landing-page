"use client"

import { SectionWrapper } from "@/components/section-wrapper"
import { Shirt, Music, Lightbulb, BookOpen } from "lucide-react"

const rounds = [
  {
    title: "National Dress & Cultural Presentation",
    description:
      "Showcase your country's traditional fashion and cultural heritage through dress and storytelling.",
    criteria: "Authenticity (40%), Creativity (30%), Presentation (30%)",
    icon: Shirt,
    accent: "border-gold",
    iconBg: "bg-gold/10 text-gold",
  },
  {
    title: "Talent & Performance",
    description:
      "Demonstrate your unique talent: music, dance, spoken word, fashion design, or innovation pitch.",
    criteria: "Originality (40%), Execution (40%), Stage Presence (20%)",
    icon: Music,
    accent: "border-deep-orange",
    iconBg: "bg-deep-orange/10 text-deep-orange",
  },
  {
    title: "Innovation & Entrepreneurship",
    description:
      "Present a business idea, creative project, or social innovation that represents African ingenuity.",
    criteria: "Impact Potential (40%), Feasibility (30%), Passion (30%)",
    icon: Lightbulb,
    accent: "border-turquoise",
    iconBg: "bg-turquoise/10 text-turquoise",
  },
  {
    title: "Intelligence & Cultural Quiz",
    description:
      "Demonstrate knowledge of African history, current affairs, and pan-African cultural literacy.",
    criteria: "Accuracy (60%), Depth of Response (40%)",
    icon: BookOpen,
    accent: "border-burgundy",
    iconBg: "bg-burgundy/10 text-burgundy",
  },
]

export function CompetitionRounds() {
  return (
    <SectionWrapper className="bg-card">
      <div className="text-center">
        <p className="mb-2 font-display text-sm tracking-widest text-deep-orange uppercase">
          The Competition
        </p>
        <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-black leading-tight text-charcoal">
          Four Competition Rounds
        </h2>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {rounds.map((round, i) => {
          const Icon = round.icon
          return (
            <div
              key={round.title}
              className={`group flex gap-5 rounded-2xl border-l-4 ${round.accent} bg-cream p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${round.iconBg}`}
              >
                <Icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-charcoal">
                  {round.title}
                </h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  {round.description}
                </p>
                <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-card px-3 py-1.5">
                  <span className="text-xs font-semibold text-charcoal">
                    Judging:
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {round.criteria}
                  </span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </SectionWrapper>
  )
}
