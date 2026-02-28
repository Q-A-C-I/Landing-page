"use client"

import Image from "next/image"
import { Linkedin, Twitter, Instagram } from "lucide-react"
import { SectionWrapper } from "@/components/section-wrapper"

const socialLinks = [
  { Icon: Linkedin, url: "#", label: "LinkedIn" },
  { Icon: Twitter, url: "#", label: "Twitter/X" },
  { Icon: Instagram, url: "#", label: "Instagram" },
]

export function FounderProfile() {
  return (
    <SectionWrapper className="bg-warm-beige">
      <div className="grid items-stretch gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Photo */}
        <div className="relative overflow-hidden rounded-2xl">
          <Image
            src="/images/founder.jpg"
            alt="QACI Founder - visionary leader in contemporary African fashion"
            width={600}
            height={800}
            className="h-full w-full object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center">
          <p className="mb-2 font-display text-sm tracking-widest text-deep-orange uppercase">
            The Founder
          </p>
          <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-black leading-tight text-charcoal">
            {/* CUSTOMIZE: Replace with founder's name */}
            Meet Our Founder
          </h2>
          <p className="mt-1 text-lg font-semibold text-gold">
            Founder & CEO, Urban Afrique Innovations
          </p>

          <div className="mt-6 flex flex-col gap-4 text-base leading-relaxed text-muted-foreground">
            {/* CUSTOMIZE: Replace paragraphs with founder's actual story */}
            <p>
              Growing up between Lagos and the diaspora, I watched brilliant
              African designers struggle to access international buyers while
              foreign brands extracted our aesthetics without credit or
              compensation. QACI was born from frustration{"\u2014"}and a refusal
              to accept that African creativity should be invisible on the global
              stage.
            </p>

            {/* Quote callout */}
            <div className="rounded-xl border-l-4 border-gold bg-cream p-6">
              <p className="font-serif text-lg font-bold italic text-charcoal">
                {"\u201C"}This isn{"'"}t charity. This isn{"'"}t a pageant. This
                is business. And it starts August 2026.{"\u201D"}
              </p>
            </div>

            <p>
              After years in the creative and business sectors, I founded Urban
              Afrique Innovations to build the infrastructure our creative
              economy deserves. QACI is the first step: a platform where African
              excellence meets global capital on our terms.
            </p>
          </div>

          {/* Social links */}
          <div className="mt-8 flex gap-3">
            {socialLinks.map(({ Icon, url, label }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-charcoal/10 text-charcoal transition-colors hover:bg-gold hover:text-charcoal"
                aria-label={label}
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
