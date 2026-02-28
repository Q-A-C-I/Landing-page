"use client"

import Link from "next/link"
import { SectionWrapper } from "@/components/section-wrapper"

export function ContestantHero() {
  return (
    <section className="relative overflow-hidden bg-charcoal">
      <div className="mudcloth-pattern absolute inset-0 opacity-30" />
      <SectionWrapper className="relative pt-32 lg:pt-40">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 font-display text-sm tracking-widest text-gold uppercase">
            Contestant Applications Open
          </p>
          <h1 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] font-black leading-[1.1] text-cream">
            <span className="text-balance">
              Represent Your Country. Win{" "}
              <span className="text-gold">{"₦"}10 Million.</span>
            </span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-warm-beige/80">
            QACI seeks 54 representatives (ages 18-35) who embody African
            creativity, innovation, and cultural pride.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-deep-orange/30 bg-deep-orange/10 px-4 py-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-deep-orange" />
            <span className="text-sm font-medium text-deep-orange">
              Applications close May 31, 2026
            </span>
          </div>
          <div className="mt-8">
            <Link
              href="#application-form"
              className="inline-flex items-center justify-center rounded-lg bg-gold px-8 py-4 text-base font-bold text-charcoal transition-transform hover:scale-105 hover:rotate-1"
            >
              Start Your Application
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </section>
  )
}
