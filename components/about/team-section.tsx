"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { SectionWrapper } from "@/components/section-wrapper"

export function TeamSection() {
  return (
    <SectionWrapper id="team" className="bg-background">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-2 font-display text-sm tracking-widest text-deep-orange uppercase">
          Our Team
        </p>
        <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-black leading-tight text-charcoal">
          The Team Behind QACI
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          We{"'"}re assembling a world-class team of event operators, cultural
          strategists, and business builders to execute Africa{"'"}s most
          ambitious creative commerce platform.
        </p>

        {/* Open roles */}
        <div className="mt-10 flex flex-col gap-4">
          {["COO", "Head of Partnerships", "Head of Marketing"].map((role) => (
            <div
              key={role}
              className="flex items-center justify-between rounded-2xl border border-border bg-cream px-6 py-4 transition-all hover:border-gold hover:shadow-md"
            >
              <span className="font-serif text-lg font-bold text-charcoal">
                {role}
              </span>
              <span className="rounded-lg bg-gold/10 px-3 py-1 text-sm font-medium text-gold">
                Open
              </span>
            </div>
          ))}
        </div>

        <Link
          href="/careers"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-gold px-8 py-4 text-base font-bold text-charcoal transition-transform hover:scale-105 hover:rotate-1"
        >
          View Open Positions
          <ArrowRight className="h-5 w-5" />
        </Link>
      </div>
    </SectionWrapper>
  )
}
