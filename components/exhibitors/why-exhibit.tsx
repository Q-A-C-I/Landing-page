"use client"

import { Users, Video, TrendingUp, Globe } from "lucide-react"
import { SectionWrapper } from "@/components/section-wrapper"

const benefits = [
  {
    Icon: Users,
    title: "Concentrated Buyer Access",
    description:
      "6,500+ attendees including retail buyers, importers, distributors, and investors\u2014all in 3 days.",
    stat: "70% of attendees are decision-makers with purchasing authority",
  },
  {
    Icon: Video,
    title: "Media Amplification",
    description:
      "Your booth gets featured across our 15M+ reach: live streaming, social media, post-event content.",
    stat: "200+ hours of video content produced",
  },
  {
    Icon: TrendingUp,
    title: "Investment Pipeline",
    description:
      "Top exhibitors invited to pitch on our investment stage to VCs and angel investors.",
    stat: "N500M+ in deals facilitated",
  },
  {
    Icon: Globe,
    title: "Pan-African Network",
    description:
      "Connect with exhibitors and buyers from all 54 African countries in one location.",
    stat: "54 countries represented",
  },
]

export function WhyExhibit() {
  return (
    <SectionWrapper className="bg-background" pattern="kente">
      <div className="text-center">
        <p className="mb-2 font-display text-sm tracking-widest text-deep-orange uppercase">
          The Opportunity
        </p>
        <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-black leading-tight text-charcoal">
          Why QACI?
        </h2>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {benefits.map((b) => (
          <div
            key={b.title}
            className="group flex gap-5 rounded-2xl border border-border bg-cream p-6 transition-all duration-300 hover:border-gold hover:shadow-lg"
          >
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-gold transition-colors group-hover:bg-gold group-hover:text-charcoal">
              <b.Icon className="h-7 w-7" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-charcoal">
                {b.title}
              </h3>
              <p className="mt-1 leading-relaxed text-muted-foreground">
                {b.description}
              </p>
              <p className="mt-3 font-display text-xs tracking-wider text-gold">
                {b.stat}
              </p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
