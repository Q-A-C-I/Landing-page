"use client"

import { SectionWrapper } from "@/components/section-wrapper"

const stats = [
  {
    metric: "15M+",
    description:
      "Total reach across live streaming, TV broadcast, and social media",
  },
  {
    metric: "54",
    description: "African countries represented by contestants and exhibitors",
  },
  {
    metric: "6,500+",
    description:
      "On-site attendees (buyers, investors, media, enthusiasts)",
  },
  {
    metric: "200+",
    description: "Hours of branded video content produced during event",
  },
]

export function SponsorBenefits() {
  return (
    <SectionWrapper className="bg-background" pattern="kente">
      <div className="text-center">
        <p className="mb-2 font-display text-sm tracking-widest text-deep-orange uppercase">
          The Opportunity
        </p>
        <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-black leading-tight text-charcoal">
          Why Sponsor QACI?
        </h2>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <div
            key={stat.metric}
            className="group flex flex-col items-center rounded-2xl border border-border bg-cream p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-lg"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <span className="font-serif text-4xl font-black text-gold lg:text-5xl">
              {stat.metric}
            </span>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {stat.description}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
