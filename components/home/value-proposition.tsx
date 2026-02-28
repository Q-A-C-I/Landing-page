"use client"

import { ShoppingBag, Crown, TrendingUp } from "lucide-react"
import { SectionWrapper } from "@/components/section-wrapper"

const pillars = [
  {
    title: "Trade Exhibition",
    description:
      "200+ booths showcasing Africa's best fashion, food, crafts, beauty, and tech products",
    metric: "N600M in booth sales (Year 1)",
    Icon: ShoppingBag,
  },
  {
    title: "Cultural Showcase",
    description:
      "54 representatives competing across fashion, talent, and innovation categories",
    metric: "N50M in prizes",
    Icon: Crown,
  },
  {
    title: "Investment Matchmaking",
    description:
      "Pitch stage connecting vetted African businesses with capital providers",
    metric: "N500M+ deals facilitated",
    Icon: TrendingUp,
  },
]

export function ValueProposition() {
  return (
    <SectionWrapper pattern="kente" className="bg-background">
      <div className="text-center">
        <p className="mb-2 font-display text-sm tracking-widest text-deep-orange uppercase">
          What We Do
        </p>
        <h2 className="mx-auto max-w-3xl font-serif text-[clamp(2rem,4vw,3.5rem)] font-black leading-tight text-charcoal">
          <span className="text-balance">
            Not a Pageant. Not a Trade Fair.{" "}
            <span className="text-gold">Infrastructure.</span>
          </span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          QACI is the annual convergence point where African fashion designers,
          artisans, innovators, and entrepreneurs connect with buyers, investors,
          and media from around the world.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {pillars.map((pillar, i) => (
          <div
            key={pillar.title}
            className="group relative overflow-hidden rounded-2xl border border-border bg-cream p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-xl"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            {/* Diagonal corner cut */}
            <div className="absolute -right-4 -top-4 h-16 w-16 rotate-45 bg-gold/10 transition-colors group-hover:bg-gold/20" />

            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gold/10 text-gold transition-colors group-hover:bg-gold group-hover:text-charcoal">
              <pillar.Icon className="h-7 w-7" />
            </div>

            <h3 className="mb-2 font-serif text-2xl font-bold text-charcoal">
              {pillar.title}
            </h3>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              {pillar.description}
            </p>
            <p className="font-display text-sm tracking-wider text-gold">
              {pillar.metric}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
