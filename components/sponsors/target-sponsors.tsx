"use client"

import { SectionWrapper } from "@/components/section-wrapper"
import {
  Landmark,
  Wifi,
  ShoppingCart,
  Smartphone,
  Plane,
  Globe,
} from "lucide-react"

const profiles = [
  {
    icon: Landmark,
    label: "Pan-African banks and financial institutions",
  },
  {
    icon: Wifi,
    label: "Telecoms and mobile network operators",
  },
  {
    icon: ShoppingCart,
    label: "FMCG and consumer goods brands",
  },
  {
    icon: Smartphone,
    label: "Technology and fintech companies",
  },
  {
    icon: Plane,
    label: "Airlines and travel services",
  },
  {
    icon: Globe,
    label: "Development organizations (AfDB, IFC, TEF)",
  },
]

export function TargetSponsors() {
  return (
    <SectionWrapper className="bg-background" pattern="mudcloth">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <p className="mb-2 font-display text-sm tracking-widest text-deep-orange uppercase">
            Who We Partner With
          </p>
          <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-black leading-tight text-charcoal">
            Ideal Sponsor Profiles
          </h2>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {profiles.map((profile) => {
            const Icon = profile.icon
            return (
              <div
                key={profile.label}
                className="flex items-center gap-4 rounded-xl border border-border bg-cream p-4 transition-all duration-300 hover:border-gold hover:shadow-sm"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold/10">
                  <Icon className="h-5 w-5 text-gold" />
                </div>
                <span className="text-sm font-medium text-charcoal">
                  {profile.label}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </SectionWrapper>
  )
}
