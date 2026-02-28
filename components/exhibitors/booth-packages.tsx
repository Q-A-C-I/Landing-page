"use client"

import Link from "next/link"
import { Check } from "lucide-react"
import { SectionWrapper } from "@/components/section-wrapper"
import { cn } from "@/lib/utils"

const packages = [
  {
    tier: "Start-Up",
    size: "2m x 2m",
    price: "N1,500,000",
    bestFor: "Solo entrepreneurs, early-stage brands",
    includes: [
      "3-day booth access",
      "1 table + 2 chairs",
      "WiFi access",
      "Listing in event catalog",
      "Social media feature (1 post)",
    ],
    featured: false,
  },
  {
    tier: "Standard",
    size: "3m x 3m",
    price: "N3,000,000",
    bestFor: "Established brands, growing businesses",
    includes: [
      "All Start-Up benefits, plus:",
      "Premium booth location",
      "Display shelving + lighting",
      "2 exhibitor badges",
      "Social media features (3 posts)",
      "Priority listing in catalog",
    ],
    featured: true,
    badge: "Most Popular",
  },
  {
    tier: "Premium",
    size: "4m x 4m (corner)",
    price: "N5,000,000",
    bestFor: "Flagship brands, high-volume sellers",
    includes: [
      "All Standard benefits, plus:",
      "Corner/stage-adjacent location",
      "Custom booth design consultation",
      "3 exhibitor badges",
      "Investment pitch stage eligibility",
      "VIP lounge access",
      "Dedicated social media campaign",
    ],
    featured: false,
  },
]

export function BoothPackages() {
  return (
    <SectionWrapper className="bg-warm-beige" pattern="mudcloth">
      <div className="text-center">
        <p className="mb-2 font-display text-sm tracking-widest text-deep-orange uppercase">
          Pricing
        </p>
        <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-black leading-tight text-charcoal">
          {"Booth Packages & Pricing"}
        </h2>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {packages.map((pkg) => (
          <div
            key={pkg.tier}
            className={cn(
              "relative flex flex-col rounded-2xl border-2 bg-cream p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
              pkg.featured
                ? "border-gold shadow-lg"
                : "border-border hover:border-gold"
            )}
          >
            {pkg.badge && (
              <span className="absolute -top-3 right-6 rounded-lg bg-gold px-4 py-1 text-xs font-bold text-charcoal">
                {pkg.badge}
              </span>
            )}

            <p className="font-display text-sm tracking-wider text-deep-orange">
              {pkg.tier}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">{pkg.size}</p>
            <p className="mt-3 font-serif text-4xl font-black text-charcoal">
              {pkg.price}
            </p>
            <p className="mt-2 text-sm text-muted-foreground">{pkg.bestFor}</p>

            <div className="my-6 h-px bg-border" />

            <ul className="flex flex-1 flex-col gap-3">
              {pkg.includes.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <span className="text-charcoal">{item}</span>
                </li>
              ))}
            </ul>

            <Link
              href="#form"
              className={cn(
                "mt-8 flex items-center justify-center rounded-lg px-6 py-3.5 font-bold transition-transform hover:scale-105",
                pkg.featured
                  ? "bg-gold text-charcoal"
                  : "border-2 border-gold bg-transparent text-gold hover:bg-gold hover:text-charcoal"
              )}
            >
              {`Reserve ${pkg.tier} Booth`}
            </Link>
          </div>
        ))}
      </div>

      {/* Payment terms */}
      <div className="mx-auto mt-10 max-w-2xl text-center">
        <p className="text-muted-foreground">
          50% deposit to secure booth. Balance due by July 1, 2026.
        </p>
        <p className="mt-2 font-semibold text-gold">
          Book by April 30, 2026 and save 15%
        </p>
      </div>
    </SectionWrapper>
  )
}
