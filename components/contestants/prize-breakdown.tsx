"use client"

import { SectionWrapper } from "@/components/section-wrapper"
import { Trophy, Award, Medal, Star } from "lucide-react"

const prizes = [
  {
    place: "Winner",
    amount: "₦10,000,000",
    additional: "1-year brand ambassadorship + media tour",
    icon: Trophy,
    color: "bg-gold text-charcoal",
    ring: "ring-gold/30",
  },
  {
    place: "1st Runner-Up",
    amount: "₦7,000,000",
    additional: null,
    icon: Award,
    color: "bg-warm-beige text-charcoal",
    ring: "ring-warm-beige/30",
  },
  {
    place: "2nd Runner-Up",
    amount: "₦5,000,000",
    additional: null,
    icon: Medal,
    color: "bg-deep-orange text-cream",
    ring: "ring-deep-orange/30",
  },
  {
    place: "Top 10 Finalists",
    amount: "₦2,000,000 each",
    additional: null,
    icon: Star,
    color: "bg-burgundy text-cream",
    ring: "ring-burgundy/30",
  },
]

export function PrizeBreakdown() {
  return (
    <SectionWrapper className="bg-background" pattern="kente">
      <div className="text-center">
        <p className="mb-2 font-display text-sm tracking-widest text-deep-orange uppercase">
          Prize Pool
        </p>
        <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-black leading-tight text-charcoal">
          What You{"'"}re Competing For
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-lg text-muted-foreground">
          <span className="font-bold text-gold">{"₦"}42,000,000</span> in total
          prizes
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {prizes.map((prize, i) => {
          const Icon = prize.icon
          return (
            <div
              key={prize.place}
              className="group relative flex flex-col items-center rounded-2xl border border-border bg-cream p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-gold"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div
                className={`mb-4 flex h-14 w-14 items-center justify-center rounded-full ${prize.color} ring-4 ${prize.ring}`}
              >
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xs tracking-widest text-muted-foreground uppercase">
                {prize.place}
              </h3>
              <p className="mt-2 font-serif text-2xl font-black text-charcoal lg:text-3xl">
                {prize.amount}
              </p>
              {prize.additional && (
                <p className="mt-2 text-sm text-muted-foreground">
                  {prize.additional}
                </p>
              )}
            </div>
          )
        })}
      </div>
    </SectionWrapper>
  )
}
