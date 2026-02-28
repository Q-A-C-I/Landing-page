"use client"

import { useState } from "react"
import { SectionWrapper } from "@/components/section-wrapper"
import { Bell } from "lucide-react"

export function TicketWaitlist() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (submitting) return
    setSubmitting(true)
    const form = e.currentTarget
    const formData = new FormData(form)
    const payload = {
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
    }
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error("Failed to join waitlist")
      setSubmitted(true)
    } catch (err) {
      console.error(err)
      alert("Could not submit. Please try again.")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <SectionWrapper className="bg-background" pattern="mudcloth">
      <div className="mx-auto max-w-xl">
        <div className="rounded-2xl border border-gold/30 bg-cream p-8 text-center lg:p-12">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gold/10">
            <Bell className="h-6 w-6 text-gold" />
          </div>

          <h2 className="font-serif text-[clamp(1.5rem,3vw,2.5rem)] font-black text-charcoal">
            Get Notified When Tickets Drop
          </h2>
          <p className="mt-3 text-muted-foreground">
            Ticket sales open June 1, 2026. Join the waitlist for early bird
            pricing.
          </p>

          {submitted ? (
            <div className="mt-8 rounded-xl bg-gold/10 p-6">
              <p className="font-serif text-lg font-bold text-gold">
                {"You're on the list!"}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {"We'll notify you as soon as tickets go on sale."}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-3">
              <input
                type="email"
                required
                name="email"
                className="form-input text-center"
                placeholder="Enter your email"
              />
              <input
                type="tel"
                name="phone"
                className="form-input text-center"
                placeholder="Phone number (optional)"
              />
              <button
                type="submit"
                disabled={submitting}
                className="rounded-lg bg-gold px-6 py-3.5 font-bold text-charcoal transition-transform hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submitting ? "Submitting..." : "Join Waitlist"}
              </button>
            </form>
          )}
        </div>
      </div>
    </SectionWrapper>
  )
}
