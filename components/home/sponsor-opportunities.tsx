"use client"

import Link from "next/link"
import { SectionWrapper } from "@/components/section-wrapper"
import { cn } from "@/lib/utils"

const tiers = [
  {
    name: "Platinum",
    price: "N100M",
    color: "border-gold bg-gold/5",
    hoverColor: "hover:border-gold hover:bg-gold/10",
    badge: "bg-gold text-charcoal",
    benefits:
      "Title sponsor, main stage naming rights, 5 booths, VIP access, logo on all materials",
  },
  {
    name: "Gold",
    price: "N50M",
    color: "border-deep-orange/40 bg-deep-orange/5",
    hoverColor: "hover:border-deep-orange hover:bg-deep-orange/10",
    badge: "bg-deep-orange text-cream",
    benefits:
      "Category sponsor, 2 booths, VIP access, premium logo placement",
  },
  {
    name: "Silver",
    price: "N25M",
    color: "border-border bg-cream",
    hoverColor: "hover:border-gold hover:bg-gold/5",
    badge: "bg-charcoal/10 text-charcoal",
    benefits:
      "1 booth, standard logo placement, social media features",
  },
  {
    name: "Bronze",
    price: "N10M",
    color: "border-border bg-cream",
    hoverColor: "hover:border-gold hover:bg-gold/5",
    badge: "bg-burgundy/10 text-burgundy",
    benefits:
      "Logo on website, event catalog, social media mentions",
  },
]

export function SponsorOpportunities() {
  return (
    <SectionWrapper className="bg-background">
      <div className="text-center">
        <p className="mb-2 font-display text-sm tracking-widest text-deep-orange uppercase">
          For Sponsors
        </p>
        <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-black leading-tight text-charcoal">
          <span className="text-balance">
            Align Your Brand with African Excellence
          </span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          QACI delivers 15M+ impressions across TV, streaming, and social media.
          Partner with us to reach Africa{"'"}s most dynamic consumers and
          entrepreneurs.
        </p>
      </div>

      {/* Tier cards - horizontal scroll on mobile */}
      <div className="mt-8 sm:mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={cn(
              "group rounded-2xl border-2 p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
              tier.color,
              tier.hoverColor
            )}
          >
            <span
              className={cn(
                "mb-3 sm:mb-4 inline-block rounded-lg px-3 py-1 font-display text-[10px] sm:text-xs tracking-wider",
                tier.badge
              )}
            >
              {tier.name}
            </span>
            <p className="font-serif text-2xl sm:text-3xl font-black text-charcoal">
              {tier.price}
            </p>
            <p className="mt-2 sm:mt-3 text-xs sm:text-sm leading-relaxed text-muted-foreground">
              {tier.benefits}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8 sm:mt-10 text-center">
        <Link
          href="/sponsors"
          className="inline-flex w-full sm:w-auto items-center justify-center rounded-lg border-2 border-gold bg-transparent px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-bold text-gold transition-all hover:bg-gold hover:text-charcoal"
        >
          Download Sponsorship Deck
        </Link>
      </div>
    </SectionWrapper>
  )
}
