"use client"

import Link from "next/link"
import { SectionWrapper } from "@/components/section-wrapper"

export function ExhibitorHero() {
  return (
    <section className="relative overflow-hidden bg-charcoal">
      <div className="kente-pattern absolute inset-0 opacity-20" />
      <SectionWrapper className="relative pt-32 lg:pt-40">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 font-display text-sm tracking-widest text-gold uppercase">
            Exhibitor Opportunities
          </p>
          <h1 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] font-black leading-[1.1] text-cream">
            <span className="text-balance">
              Your Gateway to 6,500+ African Market Buyers
            </span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-warm-beige/80">
            Reserve your booth at Africa{"'"}s premier creative commerce event.
            Limited to 200 exhibitors.
          </p>
          <Link
            href="#form"
            className="mt-8 inline-flex items-center justify-center rounded-lg bg-gold px-8 py-4 text-base font-bold text-charcoal transition-transform hover:scale-105 hover:rotate-1"
          >
            Book a Call with Sales Team
          </Link>
        </div>
      </SectionWrapper>
    </section>
  )
}
