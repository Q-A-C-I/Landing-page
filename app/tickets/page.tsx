import type { Metadata } from "next"
import { TicketHero } from "@/components/tickets/ticket-hero"
import { TicketTypes } from "@/components/tickets/ticket-types"
import { GroupDiscounts } from "@/components/tickets/group-discounts"
import { TicketWaitlist } from "@/components/tickets/ticket-waitlist"

export const metadata: Metadata = {
  title: "Tickets | QACI - Experience QACI Live, August 15-17, 2026",
  description:
    "Get your tickets for QACI 2026. VIP 3-Day Pass, Standard, Day Pass, and Virtual options available. Ticket sales open June 1, 2026.",
}

export default function TicketsPage() {
  return (
    <>
      <TicketHero />
      <TicketTypes />
      <GroupDiscounts />
      <TicketWaitlist />
    </>
  )
}
