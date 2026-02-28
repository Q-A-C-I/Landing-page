"use client"

import { SectionWrapper } from "@/components/section-wrapper"
import { Crown, Users, Clock, Wifi } from "lucide-react"

const tickets = [
  {
    type: "VIP 3-Day Pass",
    price: "₦75,000",
    icon: Crown,
    accent: "border-gold",
    badge: "bg-gold text-charcoal",
    includes: [
      "Access to all 3 days (trade fair + shows)",
      "VIP lounge with complimentary food & drinks",
      "Reserved seating at finale",
      "Meet & greet with contestants",
      "QACI gift bag",
    ],
  },
  {
    type: "Standard 3-Day Pass",
    price: "₦35,000",
    icon: Users,
    accent: "border-deep-orange",
    badge: "bg-deep-orange text-cream",
    includes: [
      "Access to all 3 days",
      "Trade fair floor access",
      "General admission to preliminary shows",
      "General admission to finale",
    ],
  },
  {
    type: "Day Pass",
    price: "₦15,000",
    icon: Clock,
    accent: "border-charcoal/20",
    badge: "bg-charcoal text-cream",
    includes: [
      "Single day access (Friday, Saturday, OR Sunday)",
      "Trade fair floor access",
      "Show access (if selected day has show)",
    ],
  },
  {
    type: "Virtual Pass",
    price: "₦5,000",
    icon: Wifi,
    accent: "border-turquoise",
    badge: "bg-turquoise text-charcoal",
    includes: [
      "Live stream access to all 3 days",
      "On-demand replay for 30 days",
      "Digital event program",
    ],
  },
]

export function TicketTypes() {
  return (
    <SectionWrapper className="bg-background" pattern="kente">
      <div className="text-center">
        <p className="mb-2 font-display text-sm tracking-widest text-deep-orange uppercase">
          Choose Your Experience
        </p>
        <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-black leading-tight text-charcoal">
          Ticket Options
        </h2>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {tickets.map((ticket) => {
          const Icon = ticket.icon
          return (
            <div
              key={ticket.type}
              className={`group flex flex-col rounded-2xl border-2 ${ticket.accent} bg-cream p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-card">
                  <Icon className="h-5 w-5 text-charcoal" />
                </div>
                <span
                  className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-bold ${ticket.badge}`}
                >
                  {ticket.type}
                </span>
              </div>

              <p className="mt-5 font-serif text-3xl font-black text-charcoal">
                {ticket.price}
              </p>

              <ul className="mt-5 flex flex-1 flex-col gap-2.5">
                {ticket.includes.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    {item}
                  </li>
                ))}
              </ul>

              <button
                disabled
                className="mt-6 rounded-lg border-2 border-charcoal/10 bg-card py-3 text-center text-sm font-bold text-muted-foreground"
              >
                Coming June 2026
              </button>
            </div>
          )
        })}
      </div>
    </SectionWrapper>
  )
}
