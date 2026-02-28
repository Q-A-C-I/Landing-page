"use client"

import { SectionWrapper } from "@/components/section-wrapper"
import Link from "next/link"

const tiers = [
  {
    name: "Platinum",
    price: "₦100M",
    benefits: [
      "Title sponsor",
      "Main stage naming rights",
      "5 booths included",
      "VIP access for 20 guests",
      "Logo on ALL materials",
      "Dedicated brand activation space",
      "Exclusive media interviews",
    ],
    accent: "border-gold bg-gold/5",
    badge: "bg-gold text-charcoal",
  },
  {
    name: "Gold",
    price: "₦50M",
    benefits: [
      "Category sponsor",
      "2 booths included",
      "VIP access for 10 guests",
      "Premium logo placement",
      "Social media campaign (10 posts)",
      "Stage mention during shows",
    ],
    accent: "border-deep-orange bg-deep-orange/5",
    badge: "bg-deep-orange text-cream",
  },
  {
    name: "Silver",
    price: "₦25M",
    benefits: [
      "1 booth included",
      "Standard logo placement",
      "Social media features (5 posts)",
      "VIP access for 5 guests",
      "Event catalog feature",
    ],
    accent: "border-charcoal/20 bg-charcoal/5",
    badge: "bg-charcoal text-cream",
  },
  {
    name: "Bronze",
    price: "₦10M",
    benefits: [
      "Logo on website",
      "Event catalog listing",
      "Social media mentions (3 posts)",
      "2 VIP tickets",
    ],
    accent: "border-burgundy/30 bg-burgundy/5",
    badge: "bg-burgundy text-cream",
  },
]

export function SponsorTiers() {
  return (
    <SectionWrapper className="bg-card">
      <div className="text-center">
        <p className="mb-2 font-display text-sm tracking-widest text-deep-orange uppercase">
          Packages
        </p>
        <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-black leading-tight text-charcoal">
          Sponsorship Packages
        </h2>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={`group flex flex-col rounded-2xl border-2 ${tier.accent} p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
          >
            <span
              className={`inline-flex self-start rounded-full px-3 py-1 text-xs font-bold ${tier.badge}`}
            >
              {tier.name}
            </span>
            <p className="mt-4 font-serif text-3xl font-black text-charcoal">
              {tier.price}
            </p>
            <ul className="mt-6 flex flex-1 flex-col gap-2.5">
              {tier.benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  {benefit}
                </li>
              ))}
            </ul>
            <Link
              href="#sponsor-form"
              className="mt-6 rounded-lg border-2 border-charcoal/20 py-3 text-center text-sm font-bold text-charcoal transition-colors hover:border-gold hover:bg-gold hover:text-charcoal"
            >
              Enquire Now
            </Link>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
