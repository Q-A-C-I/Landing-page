"use client"

import Link from "next/link"
import { Check } from "lucide-react"
import { SectionWrapper } from "@/components/section-wrapper"

const benefits = [
  "3-day booth access with setup support",
  "Listing in event catalog + social media promotion",
  "Access to investment pitch stage (selected exhibitors)",
  "WiFi, basic furnishings, teardown assistance",
]

export function ExhibitorCTA() {
  return (
    <section className="relative overflow-hidden">
      {/* Diagonal top cut */}
      <div className="absolute -top-1 left-0 right-0 h-16 -skew-y-2 bg-warm-beige" />

      <SectionWrapper className="bg-gold">
        <div className="kente-pattern absolute inset-0 opacity-10" />
        <div className="relative grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-2 font-display text-sm tracking-widest text-charcoal/60 uppercase">
              For Exhibitors
            </p>
            <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-black leading-tight text-charcoal">
              <span className="text-balance">
                Showcase Your Brand to 6,500+ Buyers & Investors
              </span>
            </h2>
            <p className="mt-3 text-lg text-charcoal/80">
              Limited to 200 booths. Early bird pricing ends April 30, 2026.
            </p>
          </div>

          <div>
            <ul className="mb-6 flex flex-col gap-3">
              {benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-start gap-3 text-charcoal"
                >
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-burgundy" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <p className="mb-6 font-serif text-xl font-bold text-charcoal">
              {"Booths from N1.5M | Premium corners N5M"}
            </p>

            <Link
              href="/exhibitors"
              className="animate-pulse-gold inline-flex items-center justify-center rounded-lg bg-burgundy px-8 py-4 text-lg font-bold text-cream transition-transform hover:scale-105"
            >
              {"Reserve Your Booth \u2192"}
            </Link>
          </div>
        </div>
      </SectionWrapper>

      {/* Diagonal bottom cut */}
      <div className="absolute -bottom-1 left-0 right-0 h-16 -skew-y-2 bg-background" />
    </section>
  )
}
