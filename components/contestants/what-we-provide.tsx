"use client"

import { SectionWrapper } from "@/components/section-wrapper"
import {
  Plane,
  Hotel,
  UtensilsCrossed,
  Shirt,
  Video,
  Bus,
  Share2,
} from "lucide-react"

const inclusions = [
  {
    icon: Plane,
    text: "Round-trip flight subsidy (₦500,000 toward international travel)",
  },
  {
    icon: Hotel,
    text: "Hotel accommodation (August 10-18, shared rooms)",
  },
  {
    icon: UtensilsCrossed,
    text: "All meals during bootcamp and event",
  },
  {
    icon: Shirt,
    text: "Professional styling and wardrobe consultation",
  },
  {
    icon: Video,
    text: "Media training and content production",
  },
  {
    icon: Bus,
    text: "Transportation between hotel and venue",
  },
  {
    icon: Share2,
    text: "Social media promotional support",
  },
]

export function WhatWeProvide() {
  return (
    <SectionWrapper className="bg-background" pattern="kente">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <p className="mb-2 font-display text-sm tracking-widest text-deep-orange uppercase">
            Your Support
          </p>
          <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-black leading-tight text-charcoal">
            What QACI Provides
          </h2>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {inclusions.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.text}
                className="flex items-start gap-3 rounded-xl border border-border bg-cream p-4 transition-all duration-300 hover:border-gold hover:shadow-sm"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gold/10">
                  <Icon className="h-5 w-5 text-gold" />
                </div>
                <p className="text-sm leading-relaxed text-charcoal">
                  {item.text}
                </p>
              </div>
            )
          })}
        </div>

        <div className="mt-8 rounded-xl border border-deep-orange/20 bg-deep-orange/5 p-4 text-center">
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-charcoal">Note:</span>{" "}
            Contestants are responsible for visa fees (if applicable) and
            national dress costume.
          </p>
        </div>
      </div>
    </SectionWrapper>
  )
}
