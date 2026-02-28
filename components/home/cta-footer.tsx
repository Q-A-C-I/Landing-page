"use client"

import Link from "next/link"
import { SectionWrapper } from "@/components/section-wrapper"

const ctas = [
  { text: "Exhibitor Application", link: "/exhibitors" },
  { text: "Contestant Application", link: "/apply" },
  { text: "Become a Sponsor", link: "/sponsors" },
  { text: "Buy Tickets", link: "/tickets" },
]

export function CTAFooter() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-burgundy to-deep-orange">
      <div className="kente-pattern absolute inset-0 opacity-10" />
      <SectionWrapper className="relative">
        <div className="text-center">
          <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-black leading-tight text-cream">
            <span className="text-balance">
              Join the Movement. August 15-17, 2026.
            </span>
          </h2>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ctas.map((cta) => (
            <Link
              key={cta.text}
              href={cta.link}
              className="flex min-h-[60px] items-center justify-center rounded-xl border-2 border-cream/30 bg-cream/10 px-6 py-4 text-center text-lg font-semibold text-cream backdrop-blur-sm transition-all hover:border-cream hover:bg-cream/20 hover:scale-105"
            >
              {cta.text}
            </Link>
          ))}
        </div>
      </SectionWrapper>
    </section>
  )
}
