"use client"

import Link from "next/link"
import Image from "next/image"
import { SectionWrapper } from "@/components/section-wrapper"

const categories = [
  "Fashion & National Dress",
  "Talent & Cultural Performance",
  "Innovation & Entrepreneurship",
  "Intelligence & Cultural Quiz",
]

const prizes = [
  { place: "Winner", amount: "N10,000,000" },
  { place: "1st Runner-Up", amount: "N7,000,000" },
  { place: "2nd Runner-Up", amount: "N5,000,000" },
  { place: "Top 10 Finalists", amount: "N2,000,000 each" },
]

export function ContestantInfo() {
  return (
    <SectionWrapper className="bg-background">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Content */}
        <div>
          <p className="mb-2 font-display text-sm tracking-widest text-deep-orange uppercase">
            For Contestants
          </p>
          <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-black leading-tight text-charcoal">
            Represent Your Country.{" "}
            <span className="text-gold">{"Win N10 Million."}</span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            QACI seeks 54 representatives (ages 18-35) who embody African
            creativity, innovation, and cultural pride.
          </p>

          {/* Categories */}
          <div className="mt-8">
            <h3 className="mb-3 font-serif text-lg font-bold text-charcoal">
              Competition Categories
            </h3>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <span
                  key={cat}
                  className="rounded-lg bg-gold/10 px-4 py-2 text-sm font-medium text-charcoal"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>

          {/* Prizes */}
          <div className="mt-8 rounded-2xl border border-gold/30 bg-cream p-6">
            <h3 className="mb-4 font-serif text-lg font-bold text-charcoal">
              Prize Pool
            </h3>
            <div className="flex flex-col gap-3">
              {prizes.map((prize) => (
                <div
                  key={prize.place}
                  className="flex items-center justify-between"
                >
                  <span className="text-muted-foreground">{prize.place}</span>
                  <span className="font-serif text-lg font-bold text-gold">
                    {prize.amount}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
            <Link
              href="/apply"
              className="inline-flex items-center justify-center rounded-lg bg-burgundy px-8 py-4 text-base font-bold text-cream transition-transform hover:scale-105 hover:rotate-1"
            >
              Apply Now
            </Link>
            <div className="text-sm text-muted-foreground">
              <p>{"Application fee: N25,000"}</p>
              <p className="font-semibold text-deep-orange">
                Deadline: May 31, 2026
              </p>
            </div>
          </div>
        </div>

        {/* Photo grid */}
        <div className="relative grid grid-cols-2 gap-3 self-start">
          <div className="absolute -left-3 bottom-0 top-0 hidden w-0.5 bg-gold lg:block" />
          <div className="overflow-hidden rounded-2xl">
            <Image
              src="/images/contestant-1.jpg"
              alt="Contestant in vibrant African national dress showcasing cultural heritage"
              width={300}
              height={400}
              sizes="(max-width: 1024px) 50vw, 25vw"
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
            />
          </div>
          <div className="mt-8 overflow-hidden rounded-2xl">
            <Image
              src="/images/contestant-2.jpg"
              alt="Contestant performing on stage during the talent showcase"
              width={300}
              height={400}
              sizes="(max-width: 1024px) 50vw, 25vw"
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
            />
          </div>
          <div className="overflow-hidden rounded-2xl">
            <Image
              src="/images/contestant-3.jpg"
              alt="Contestant presenting an innovation project to judges"
              width={300}
              height={400}
              sizes="(max-width: 1024px) 50vw, 25vw"
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
            />
          </div>
          <div className="mt-8 overflow-hidden rounded-2xl">
            <Image
              src="/images/contestant-4.jpg"
              alt="Group of QACI finalists in stunning traditional and modern African fashion"
              width={300}
              height={400}
              sizes="(max-width: 1024px) 50vw, 25vw"
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
            />
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
