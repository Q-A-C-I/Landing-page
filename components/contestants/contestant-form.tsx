"use client"

import { useState } from "react"
import { SectionWrapper } from "@/components/section-wrapper"
import { getSupabaseClient } from "@/lib/supabase-client"
import { africanCountries } from "@/lib/african-countries"

const educationLevels = [
  "High School",
  "Some University",
  "Bachelor's Degree",
  "Master's Degree",
  "Doctorate",
]

const talentCategories = [
  "Fashion Design",
  "Music/Dance",
  "Entrepreneurship/Business",
  "Arts & Crafts",
  "Technology/Innovation",
  "Social Impact",
  "Other",
]

export function ContestantForm() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (submitting) return
    setSubmitting(true)
    const fd = new FormData(e.currentTarget)
    async function uploadFile(file: File, keyPrefix: string) {
      const supabase = getSupabaseClient()
      const safeName = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9._-]/g, "_")}`
      const path = `${keyPrefix}/${safeName}`
      const signedRes = await fetch("/api/storage/signed-upload", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ bucket: "contestant-assets", path }),
      })
      if (!signedRes.ok) throw new Error("Could not create signed upload url")
      const signed = await signedRes.json()
      const token = String(signed.token || "")
      const { error } = await supabase.storage.from("contestant-assets").uploadToSignedUrl(path, token, file, {
        contentType: file.type || "application/octet-stream",
      })
      if (error) throw new Error(error.message)
      const pub = supabase.storage.from("contestant-assets").getPublicUrl(path)
      return String(pub.data.publicUrl || "")
    }
    const payload = {
      full_name: String(fd.get("full_name") || ""),
      dob: String(fd.get("dob") || ""),
      citizenship_country: String(fd.get("citizenship_country") || ""),
      email: String(fd.get("email") || ""),
      phone: String(fd.get("phone") || ""),
      instagram: String(fd.get("instagram") || ""),
      education_level: String(fd.get("education_level") || ""),
      talent_category: String(fd.get("talent_category") || ""),
      story: String(fd.get("story") || ""),
      talent_description: String(fd.get("talent_description") || ""),
      social_links: String(fd.get("social_links") || ""),
      video_url: "",
      portfolio_urls: [] as string[],
      headshot_url: "",
      full_body_url: "",
    }
    try {
      const emailKey = payload.email || "unknown"
      const video = fd.get("video") as File | null
      if (video && video.size > 0) {
        payload.video_url = await uploadFile(video, `contestants/${emailKey}`)
      }
      const portfolio = fd.getAll("portfolio") as File[]
      for (const f of portfolio) {
        if (f && f.size > 0) {
          const url = await uploadFile(f, `contestants/${emailKey}/portfolio`)
          payload.portfolio_urls.push(url)
        }
      }
      const headshot = fd.get("headshot") as File | null
      if (headshot && headshot.size > 0) {
        payload.headshot_url = await uploadFile(headshot, `contestants/${emailKey}`)
      }
      const fullBody = fd.get("full_body") as File | null
      if (fullBody && fullBody.size > 0) {
        payload.full_body_url = await uploadFile(fullBody, `contestants/${emailKey}`)
      }
      const res = await fetch("/api/contestant-application", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error("Submission failed")
      setSubmitted(true)
      const payRes = await fetch("/api/paystack", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: 25000,
          email: payload.email,
          phone: payload.phone,
          name: payload.full_name,
        }),
      })
      if (!payRes.ok) throw new Error("Payment initialization failed")
      const payJson = await payRes.json()
      const link = String(payJson.link || "")
      const reference = String(payJson.reference || "")
      if (reference) {
        await fetch("/api/contestant-payment", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: payload.email, reference }),
        })
      }
      if (!link) throw new Error("No payment link")
      window.location.href = link
    } catch (err) {
      console.error(err)
      alert("Could not submit. Please try again.")
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <SectionWrapper id="application-form" className="bg-card">
        <div className="mx-auto max-w-2xl rounded-2xl border border-gold bg-cream p-12 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gold/20">
            <span className="font-serif text-3xl text-gold">{"✓"}</span>
          </div>
          <h2 className="font-serif text-3xl font-black text-charcoal">
            Application Submitted
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            You will be redirected to complete your{" "}
            <span className="font-bold text-charcoal">{"₦"}25,000</span>{" "}
            application fee payment. Your application is only considered after
            payment confirmation.
          </p>
        </div>
      </SectionWrapper>
    )
  }

  return (
    <SectionWrapper id="application-form" className="bg-card">
      <div className="mx-auto max-w-2xl">
        <div className="text-center">
          <p className="mb-2 font-display text-sm tracking-widest text-deep-orange uppercase">
            Application
          </p>
          <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-black leading-tight text-charcoal">
            Start Your Application
          </h2>
          <div className="mx-auto mt-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-2">
            <span className="text-sm font-medium text-charcoal">
              Application fee:{" "}
              <span className="font-bold text-gold">{"₦"}25,000</span>
            </span>
            <span className="text-xs text-muted-foreground">
              (non-refundable, covers audition processing + media kit)
            </span>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-10 flex flex-col gap-5 rounded-2xl border border-border bg-cream p-6 lg:p-10"
        >
          {/* Full Name */}
          <FormField label="Full Legal Name" required>
            <input
              type="text"
              required
              name="full_name"
              className="form-input"
              placeholder="As it appears on your passport"
            />
          </FormField>

          {/* DOB + Country */}
          <div className="grid gap-5 sm:grid-cols-2">
            <FormField label="Date of Birth" required>
              <input type="date" required className="form-input" name="dob" />
            </FormField>
            <FormField label="Country of Citizenship" required>
              <select required className="form-input" name="citizenship_country">
                <option value="">Select country</option>
                {africanCountries.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
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
                placeholder="email@example.com"
              />
            </FormField>
            <FormField label="Phone (WhatsApp)" required>
              <input
                type="tel"
                required
                name="phone"
                className="form-input"
                placeholder="+234..."
              />
            </FormField>
          </div>

          {/* Instagram */}
          <FormField label="Instagram Handle" required>
            <input
              type="text"
              required
              name="instagram"
              className="form-input"
              placeholder="@yourhandle"
            />
          </FormField>

          {/* Education + Talent */}
          <div className="grid gap-5 sm:grid-cols-2">
            <FormField label="Highest Education Level" required>
              <select required className="form-input" name="education_level">
                <option value="">Select level</option>
                {educationLevels.map((l) => (
                  <option key={l} value={l}>
                    {l}
                  </option>
                ))}
              </select>
            </FormField>
            <FormField label="Primary Talent/Category" required>
              <select required className="form-input" name="talent_category">
                <option value="">Select category</option>
                {talentCategories.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </FormField>
          </div>

          {/* Story */}
          <FormField
            label="Tell us your story (200-300 words): Why do you want to represent your country at QACI? What makes you unique?"
            required
          >
            <textarea
              required
              rows={6}
              name="story"
              className="form-input resize-none"
              placeholder="Share your passion, your background, and why you're the one to represent your country..."
            />
          </FormField>

          {/* Talent Description */}
          <FormField
            label="Describe your talent/business/project (100-200 words)"
            required
          >
            <textarea
              required
              rows={4}
              name="talent_description"
              className="form-input resize-none"
              placeholder="What is your talent, business, or creative project? What have you accomplished so far?"
            />
          </FormField>

          {/* Video Upload */}
          <FormField label="Upload Introduction Video (2 minutes max)" required>
            <p className="mb-2 text-xs text-muted-foreground">
              Introduce yourself, share your passion, explain why you should
              represent your country. Be authentic!
            </p>
            <input
              type="file"
              accept="video/*"
              name="video"
              className="form-input file:mr-4 file:rounded-lg file:border-0 file:bg-gold/10 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-gold"
            />
          </FormField>

          {/* Portfolio Upload */}
          <FormField
            label="Upload Portfolio/Work Samples (3-5 images or 1 PDF)"
            required
          >
            <p className="mb-2 text-xs text-muted-foreground">
              Photos of your work, fashion designs, business products,
              performance stills, etc.
            </p>
            <input
              type="file"
              multiple
              name="portfolio"
              className="form-input file:mr-4 file:rounded-lg file:border-0 file:bg-gold/10 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-gold"
            />
          </FormField>

          {/* Photo Uploads */}
          <div className="grid gap-5 sm:grid-cols-2">
            <FormField label="Upload Recent Headshot" required>
              <input
                type="file"
                accept="image/*"
                name="headshot"
                className="form-input file:mr-4 file:rounded-lg file:border-0 file:bg-gold/10 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-gold"
              />
            </FormField>
            <FormField label="Upload Full-Body Photo" required>
              <input
                type="file"
                accept="image/*"
                name="full_body"
                className="form-input file:mr-4 file:rounded-lg file:border-0 file:bg-gold/10 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-gold"
              />
            </FormField>
          </div>

          {/* Social Links */}
          <FormField label="Social Media Links (optional)">
            <textarea
              rows={2}
              name="social_links"
              className="form-input resize-none"
              placeholder="TikTok, YouTube, LinkedIn, etc."
            />
          </FormField>

          <button
            type="submit"
            disabled={submitting}
            className="animate-pulse-gold mt-4 w-full sm:w-auto rounded-lg bg-gold px-8 py-4 text-lg font-bold text-charcoal transition-transform hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {submitting ? "Submitting..." : "Submit Application & Pay ₦25,000 →"}
          </button>

          <p className="text-center text-xs text-muted-foreground">
            After submitting, you will be redirected to Paystack for a secure{" "}
            {"₦"}25,000 payment. Your application is only considered after
            payment confirmation.
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
