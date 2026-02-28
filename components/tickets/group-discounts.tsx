"use client"

import { SectionWrapper } from "@/components/section-wrapper"
import { Tag, Users, Building2 } from "lucide-react"

const offers = [
  {
    icon: Tag,
    label: "Buy 10+ tickets",
    discount: "15% off",
    description: "Perfect for groups of friends or small teams",
  },
  {
    icon: Users,
    label: "Buy 25+ tickets",
    discount: "25% off",
    description: "Ideal for organizations and delegations",
  },
  {
    icon: Building2,
    label: "Corporate packages",
    discount: "Custom pricing",
    description: "Branded experiences, VIP hospitality, contact sales team",
  },
]

export function GroupDiscounts() {
  return (
    <SectionWrapper className="bg-card">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <p className="mb-2 font-display text-sm tracking-widest text-deep-orange uppercase">
            Save More
          </p>
          <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-black leading-tight text-charcoal">
            Group Discounts
          </h2>
        </div>

        <div className="mt-10 flex flex-col gap-4">
          {offers.map((offer) => {
            const Icon = offer.icon
            return (
              <div
                key={offer.label}
                className="flex items-center gap-5 rounded-2xl border border-border bg-cream p-5 transition-all duration-300 hover:border-gold hover:shadow-sm"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold/10">
                  <Icon className="h-6 w-6 text-gold" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-serif text-lg font-bold text-charcoal">
                      {offer.label}
                    </h3>
                    <span className="rounded-full bg-gold/10 px-3 py-0.5 text-sm font-bold text-gold">
                      {offer.discount}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {offer.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </SectionWrapper>
  )
}
