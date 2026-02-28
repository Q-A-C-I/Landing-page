"use client"

import { Shield, Handshake, Globe } from "lucide-react"
import { SectionWrapper } from "@/components/section-wrapper"

const values = [
  {
    title: "Excellence Without Apology",
    description:
      "We celebrate African creativity at the highest standard, refusing to accept 'good enough for Africa.'",
    Icon: Shield,
  },
  {
    title: "Commerce Over Charity",
    description:
      "African businesses don't need handouts\u2014they need buyers, investors, and distribution. We provide access.",
    Icon: Handshake,
  },
  {
    title: "Pan-African Unity",
    description:
      "54 countries, one platform. We build bridges between African markets, not walls.",
    Icon: Globe,
  },
]

export function MissionSection() {
  return (
    <SectionWrapper
      id="mission"
      className="bg-background pt-32 lg:pt-40"
      pattern="kente"
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-2 font-display text-sm tracking-widest text-deep-orange uppercase">
          Our Mission
        </p>
        <h1 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] font-black leading-[1.1] text-charcoal">
          <span className="text-balance">
            Building Infrastructure for Africa{"'"}s{" "}
            <span className="text-gold">Creative Economy</span>
          </span>
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          QACI exists to solve a structural problem: African creators and
          entrepreneurs lack concentrated access to markets, capital, and global
          visibility. We provide all three on a single platform.
        </p>
      </div>

      {/* Vision callout */}
      <div className="mx-auto mt-12 max-w-3xl rounded-2xl border-l-4 border-gold bg-cream p-8">
        <p className="font-display text-xs tracking-widest text-deep-orange uppercase">
          Our Vision
        </p>
        <p className="mt-2 font-serif text-xl font-bold leading-relaxed text-charcoal lg:text-2xl">
          By 2030, QACI will operate 8+ regional hubs across Africa,
          facilitating $50M+ in annual commerce and establishing African
          cultural excellence as the global standard.
        </p>
      </div>

      {/* Values */}
      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {values.map((value) => (
          <div
            key={value.title}
            className="group rounded-2xl border border-border bg-cream p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-xl"
          >
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gold/10 text-gold transition-colors group-hover:bg-gold group-hover:text-charcoal">
              <value.Icon className="h-7 w-7" />
            </div>
            <h3 className="mb-2 font-serif text-xl font-bold text-charcoal">
              {value.title}
            </h3>
            <p className="leading-relaxed text-muted-foreground">
              {value.description}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
