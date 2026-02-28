"use client"

import { SectionWrapper } from "@/components/section-wrapper"
import { Check } from "lucide-react"

const requirements = [
  "Must be a citizen of an African country (passport required)",
  "Age: 18-35 years old as of August 1, 2026",
  "Minimum education: High school diploma or equivalent",
  "Must have a demonstrable talent, business, or creative project",
  "Must be available August 10-20, 2026 (includes pre-event bootcamp)",
  "Must have no criminal convictions",
  "Must be in good health and able to participate fully",
  "Must be fluent in English, French, or Spanish (competition language)",
]

export function Eligibility() {
  return (
    <SectionWrapper className="bg-background" pattern="mudcloth">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <p className="mb-2 font-display text-sm tracking-widest text-deep-orange uppercase">
            Requirements
          </p>
          <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-black leading-tight text-charcoal">
            Eligibility Requirements
          </h2>
        </div>

        <div className="mt-10 rounded-2xl border border-border bg-cream p-6 lg:p-10">
          <ul className="flex flex-col gap-4">
            {requirements.map((req) => (
              <li key={req} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/10">
                  <Check className="h-4 w-4 text-gold" />
                </span>
                <span className="leading-relaxed text-charcoal">{req}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionWrapper>
  )
}
