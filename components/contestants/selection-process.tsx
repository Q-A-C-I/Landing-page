"use client"

import { SectionWrapper } from "@/components/section-wrapper"

const phases = [
  {
    phase: "Phase 1",
    title: "Applications (April-May)",
    details:
      "Submit online application with video intro, portfolio, and ₦25,000 entry fee.",
    accent: "bg-gold",
  },
  {
    phase: "Phase 2",
    title: "Country Selection (June)",
    details:
      "Panel of judges reviews all applications per country. 1 representative selected per country = 54 finalists.",
    accent: "bg-deep-orange",
  },
  {
    phase: "Phase 3",
    title: "Pre-Event Promotion (July-August)",
    details:
      "Finalists create social media content. Public voting opens (₦100/vote, 50% to contestant, 50% to QACI).",
    accent: "bg-turquoise",
  },
  {
    phase: "Phase 4",
    title: "Competition (August 15-17)",
    details:
      "3-day event. Top 10 advance to finale. Winner announced August 17.",
    accent: "bg-burgundy",
  },
]

export function SelectionProcess() {
  return (
    <SectionWrapper className="bg-card">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <p className="mb-2 font-display text-sm tracking-widest text-deep-orange uppercase">
            The Journey
          </p>
          <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-black leading-tight text-charcoal">
            How Selection Works
          </h2>
        </div>

        <div className="relative mt-12">
          {/* Vertical connector line */}
          <div className="absolute left-[19px] top-6 bottom-6 w-0.5 bg-border lg:left-[23px]" />

          <div className="flex flex-col gap-8">
            {phases.map((phase, i) => (
              <div key={phase.phase} className="relative flex gap-5">
                <div
                  className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${phase.accent} text-sm font-bold text-cream lg:h-12 lg:w-12`}
                >
                  {i + 1}
                </div>
                <div className="flex-1 rounded-2xl border border-border bg-cream p-5">
                  <span className="font-display text-xs tracking-widest text-muted-foreground uppercase">
                    {phase.phase}
                  </span>
                  <h3 className="mt-1 font-serif text-lg font-bold text-charcoal">
                    {phase.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">
                    {phase.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-gold/30 bg-gold/5 p-6 text-center">
          <p className="font-serif text-lg font-bold text-charcoal">
            Judging Breakdown
          </p>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-4 text-sm">
            <span className="rounded-full bg-gold/10 px-3 py-1 font-medium text-gold">
              50% Panel Score
            </span>
            <span className="rounded-full bg-deep-orange/10 px-3 py-1 font-medium text-deep-orange">
              30% Social Media Votes
            </span>
            <span className="rounded-full bg-turquoise/10 px-3 py-1 font-medium text-turquoise">
              20% Live Audience
            </span>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
