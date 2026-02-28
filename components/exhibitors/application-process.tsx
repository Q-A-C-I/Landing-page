"use client"

import { SectionWrapper } from "@/components/section-wrapper"

const steps = [
  {
    step: 1,
    title: "Submit Application",
    description:
      "Complete the form below with your business details, product photos, and booth preference.",
  },
  {
    step: 2,
    title: "Review (48 hours)",
    description:
      "Our team reviews your application. We prioritize product quality, brand presentation, and market readiness.",
  },
  {
    step: 3,
    title: "Approval + Invoice",
    description:
      "If approved, you'll receive an invoice for 50% deposit. Payment secures your booth.",
  },
  {
    step: 4,
    title: "Pre-Event Prep",
    description:
      "We'll guide you through setup logistics, marketing materials, and day-of expectations.",
  },
]

export function ApplicationProcess() {
  return (
    <SectionWrapper className="bg-warm-beige" pattern="kente">
      <div className="text-center">
        <p className="mb-2 font-display text-sm tracking-widest text-deep-orange uppercase">
          Process
        </p>
        <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-black leading-tight text-charcoal">
          How to Apply
        </h2>
      </div>

      <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((s) => (
          <div key={s.step} className="relative text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-gold font-serif text-2xl font-black text-charcoal">
              {s.step}
            </div>
            <h3 className="mt-4 font-serif text-lg font-bold text-charcoal">
              {s.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {s.description}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
