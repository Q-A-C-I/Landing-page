"use client"

import { useState } from "react"
import { SectionWrapper } from "@/components/section-wrapper"

const budgetRanges = [
  "Less than ₦10M",
  "₦10M - ₦50M",
  "₦50M - ₦100M",
  "₦100M+",
]

const tierOptions = ["Platinum", "Gold", "Silver", "Bronze", "Not sure yet"]

export function SponsorContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (submitting) return
    setSubmitting(true)
    const fd = new FormData(e.currentTarget)
    const payload = {
      company: String(fd.get("company") || ""),
      contact_name: String(fd.get("contact_name") || ""),
      title: String(fd.get("title") || ""),
      email: String(fd.get("email") || ""),
      phone: String(fd.get("phone") || ""),
      website: String(fd.get("website") || ""),
      budget_range: String(fd.get("budget_range") || ""),
      tier: String(fd.get("tier") || ""),
      message: String(fd.get("message") || ""),
    }
    try {
      const res = await fetch("/api/sponsor-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error("Submission failed")
      setSubmitted(true)
    } catch (err) {
      console.error(err)
      alert("Could not submit. Please try again.")
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <SectionWrapper id="sponsor-form" className="bg-card">
        <div className="mx-auto max-w-2xl rounded-2xl border border-gold bg-cream p-12 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gold/20">
            <span className="font-serif text-3xl text-gold">{"✓"}</span>
          </div>
          <h2 className="font-serif text-3xl font-black text-charcoal">
            Request Received
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {"Our sponsorship deck has been sent to your email. A member of our partnerships team will be in touch within 24 hours."}
          </p>
        </div>
      </SectionWrapper>
    )
  }

  return (
    <SectionWrapper id="sponsor-form" className="bg-card">
      <div className="mx-auto max-w-2xl">
        <div className="text-center">
          <p className="mb-2 font-display text-sm tracking-widest text-deep-orange uppercase">
            Get in Touch
          </p>
          <h2 className="font-serif text-[clamp(1.75rem,4vw,3.25rem)] font-black leading-tight text-charcoal">
            {"Let's Discuss Partnership"}
          </h2>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-10 flex flex-col gap-5 rounded-2xl border border-border bg-cream p-6 lg:p-10"
        >
          {/* Company Name */}
          <FormField label="Company Name" required>
            <input
              type="text"
              required
              name="company"
              className="form-input"
              placeholder="Your company name"
            />
          </FormField>

          {/* Contact + Title */}
          <div className="grid gap-5 sm:grid-cols-2">
            <FormField label="Contact Name" required>
              <input
                type="text"
                required
                name="contact_name"
                className="form-input"
                placeholder="Full name"
              />
            </FormField>
            <FormField label="Title/Role" required>
              <input
                type="text"
                required
                name="title"
                className="form-input"
                placeholder="e.g. Head of Marketing"
              />
            </FormField>
          </div>

          {/* Email + Phone */}
          <div className="grid gap-5 sm:grid-cols-2">
            <FormField label="Email" required>
              <input
                type="email"
                required
                name="email"
                className="form-input"
                placeholder="email@company.com"
              />
            </FormField>
            <FormField label="Phone" required>
              <input
                type="tel"
                required
                name="phone"
                className="form-input"
                placeholder="+234..."
              />
            </FormField>
          </div>

          {/* Website */}
          <FormField label="Company Website">
            <input
              type="url"
              name="website"
              className="form-input"
              placeholder="https://..."
            />
          </FormField>

          {/* Budget + Tier */}
          <div className="grid gap-5 sm:grid-cols-2">
            <FormField label="Estimated Marketing Budget" required>
              <select required className="form-input" name="budget_range">
                <option value="">Select range</option>
                {budgetRanges.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </FormField>
            <FormField label="Preferred Sponsorship Tier">
              <select className="form-input" name="tier">
                <option value="">Select tier</option>
                {tierOptions.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </FormField>
          </div>

          {/* Message */}
          <FormField label="Message (optional)">
            <textarea
              rows={3}
              name="message"
              className="form-input resize-none"
              placeholder="Tell us about your goals for this partnership..."
            />
          </FormField>

          <button
            type="submit"
            disabled={submitting}
            className="mt-4 rounded-lg bg-gold px-8 py-4 text-lg font-bold text-charcoal transition-transform hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {submitting ? "Submitting..." : "Request Sponsorship Deck \u2192"}
          </button>

          <p className="text-center text-sm text-muted-foreground">
            PDF sponsorship deck emailed immediately upon submission.
          </p>
        </form>
      </div>
    </SectionWrapper>
  )
}

function FormField({
  label,
  required,
  children,
}: {
  label: string
  required?: boolean
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-semibold text-charcoal">
        {label}
        {required && <span className="ml-1 text-burgundy">*</span>}
      </label>
      {children}
    </div>
  )
}
