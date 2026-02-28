"use client"

import { AlertTriangle, Lightbulb, Rocket, Globe } from "lucide-react"
import { SectionWrapper } from "@/components/section-wrapper"

const storySteps = [
  {
    Icon: AlertTriangle,
    headline: "The Problem",
    body: "Africa\u2019s creative economy is worth $4.2 billion and growing 7% annually. But African entrepreneurs face fragmented access to buyers, limited investment capital, and insufficient global media visibility.",
  },
  {
    Icon: Lightbulb,
    headline: "The Solution",
    body: "QACI creates a concentrated annual platform that solves all three problems simultaneously: a B2B trade exhibition (access to buyers), an investment pitch stage (access to capital), and a media-rich cultural showcase (access to visibility).",
  },
  {
    Icon: Rocket,
    headline: "The Traction",
    // CUSTOMIZE: Update with actual traction data
    body: "Since our 2025 founding, we\u2019ve secured key partnerships, registered our trademark across 54 African countries, and built a growing waitlist of exhibitors for our August 2026 launch.",
  },
  {
    Icon: Globe,
    headline: "The Future",
    body: "Year 1: Lagos. Year 2: Add Kenya & Ghana. Year 5: 8 regional hubs processing $50M+ in annual commerce. This is infrastructure, not an event.",
  },
]

export function OurStory() {
  return (
    <SectionWrapper className="bg-warm-beige" pattern="mudcloth">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <p className="mb-2 font-display text-sm tracking-widest text-deep-orange uppercase">
            Our Journey
          </p>
          <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-black leading-tight text-charcoal">
            Why QACI Exists
          </h2>
        </div>

        {/* Vertical timeline */}
        <div className="relative mt-12 border-l-2 border-gold/30 pl-8">
          {storySteps.map((step, i) => (
            <div key={step.headline} className="relative mb-10 last:mb-0">
              {/* Timeline node */}
              <div className="absolute -left-[calc(2rem+5px)] flex h-10 w-10 items-center justify-center rounded-xl bg-gold text-charcoal">
                <step.Icon className="h-5 w-5" />
              </div>

              <p className="font-display text-xs tracking-widest text-deep-orange uppercase">
                {`Step ${i + 1}`}
              </p>
              <h3 className="mt-1 font-serif text-2xl font-bold text-charcoal">
                {step.headline}
              </h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
