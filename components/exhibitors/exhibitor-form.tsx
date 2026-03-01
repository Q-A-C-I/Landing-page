"use client"

import { useState } from "react"
import { SectionWrapper } from "@/components/section-wrapper"
import { getSupabaseClient } from "@/lib/supabase-client"
import { africanCountries } from "@/lib/african-countries"

const productCategories = [
  "Fashion & Textiles",
  "Food & Beverage",
  "Arts & Crafts",
  "Beauty & Personal Care",
  "Technology & Innovation",
  "Other",
]

const boothOptions = [
  "Start-Up (N1.5M)",
  "Standard (N3M)",
  "Premium (N5M)",
]

const hearAboutOptions = [
  "Instagram",
  "Facebook",
  "LinkedIn",
  "Twitter/X",
  "Word of mouth",
  "Email",
  "Other",
]

export function ExhibitorForm() {
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
        body: JSON.stringify({ bucket: "exhibitor-assets", path }),
      })
      if (!signedRes.ok) throw new Error("Could not create signed upload url")
      const signed = await signedRes.json()
      const token = String(signed.token || "")
      const { error } = await supabase.storage.from("exhibitor-assets").uploadToSignedUrl(path, token, file, {
        contentType: file.type || "application/octet-stream",
      })
      if (error) throw new Error(error.message)
      const pub = supabase.storage.from("exhibitor-assets").getPublicUrl(path)
      return String(pub.data.publicUrl || "")
    }
    const payload = {
      brand_name: String(fd.get("brand_name") || ""),
      contact_name: String(fd.get("contact_name") || ""),
      email: String(fd.get("email") || ""),
      phone: String(fd.get("phone") || ""),
      country: String(fd.get("country") || ""),
      category: String(fd.get("category") || ""),
      booth: String(fd.get("booth") || ""),
      website_instagram: String(fd.get("website_instagram") || ""),
      brand_description: String(fd.get("brand_description") || ""),
      hear_about: String(fd.get("hear_about") || ""),
      product_photos_urls: [] as string[],
    }
    try {
      const emailKey = payload.email || "unknown"
      const photos = fd.getAll("product_photos") as File[]
      for (const f of photos) {
        if (f && f.size > 0) {
          const url = await uploadFile(f, `exhibitors/${emailKey}/photos`)
          payload.product_photos_urls.push(url)
        }
      }
      const res = await fetch("/api/exhibitor-application", {
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
      <SectionWrapper id="form" className="bg-background">
        <div className="mx-auto max-w-2xl rounded-2xl border border-gold bg-cream p-12 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gold/20">
            <span className="font-serif text-3xl text-gold">{"✓"}</span>
          </div>
          <h2 className="font-serif text-3xl font-black text-charcoal">
            Application Received
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {"We'll review your application within 48 hours and contact you via email or WhatsApp."}
          </p>
        </div>
      </SectionWrapper>
    )
  }

  return (
    <SectionWrapper id="form" className="bg-background">
      <div className="mx-auto max-w-2xl">
        <div className="text-center">
          <p className="mb-2 font-display text-sm tracking-widest text-deep-orange uppercase">
            Application
          </p>
          <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-black leading-tight text-charcoal">
            Reserve Your Booth
          </h2>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-10 flex flex-col gap-5 rounded-2xl border border-border bg-cream p-6 lg:p-10"
        >
          {/* Business Name */}
          <FormField label="Business/Brand Name" required>
            <input
              type="text"
              required
              name="brand_name"
              className="form-input"
              placeholder="Your business name"
            />
          </FormField>

          {/* Contact Name */}
          <FormField label="Contact Name" required>
            <input
              type="text"
              required
              name="contact_name"
              className="form-input"
              placeholder="Full name"
            />
          </FormField>

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
            <FormField label="Phone (WhatsApp preferred)" required>
              <input
                type="tel"
                required
                name="phone"
                className="form-input"
                placeholder="+234..."
              />
            </FormField>
          </div>

          {/* Country + Category */}
          <div className="grid gap-5 sm:grid-cols-2">
            <FormField label="Country" required>
              <select required className="form-input" name="country">
                <option value="">Select country</option>
                {africanCountries.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </FormField>
            <FormField label="Product Category" required>
              <select required className="form-input" name="category">
                <option value="">Select category</option>
                {productCategories.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </FormField>
          </div>

          {/* Booth preference */}
          <FormField label="Preferred Booth Package" required>
            <div className="flex flex-col gap-2 sm:flex-row sm:gap-4">
              {boothOptions.map((opt) => (
                <label
                  key={opt}
                  className="flex cursor-pointer items-center gap-2 rounded-lg border border-border bg-background px-4 py-3 transition-colors has-[:checked]:border-gold has-[:checked]:bg-gold/10"
                >
                  <input
                    type="radio"
                    name="booth"
                    value={opt}
                    required
                    className="accent-[#BF8F00]"
                  />
                  <span className="text-sm font-medium text-charcoal">
                    {opt}
                  </span>
                </label>
              ))}
            </div>
          </FormField>

          {/* Website */}
          <FormField label="Website/Instagram">
            <input
              type="text"
              name="website_instagram"
              className="form-input"
              placeholder="https://... or @handle"
            />
          </FormField>

          {/* Brand description */}
          <FormField label="Tell us about your brand (50-100 words)" required>
            <textarea
              required
              rows={4}
              name="brand_description"
              className="form-input resize-none"
              placeholder="What do you sell? Who are your customers? What makes your brand unique?"
            />
          </FormField>

          {/* Product photos */}
          <FormField label="Upload Product Photos (3-5 images)" required>
            <input
              type="file"
              accept="image/*"
              multiple
              name="product_photos"
              className="form-input file:mr-4 file:rounded-lg file:border-0 file:bg-gold/10 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-gold"
            />
          </FormField>

          {/* How did you hear */}
          <FormField label="How did you hear about QACI?">
            <select className="form-input" name="hear_about">
              <option value="">Select option</option>
              {hearAboutOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </FormField>

          <button
            type="submit"
            disabled={submitting}
            className="mt-4 w-full sm:w-auto rounded-lg bg-gold px-8 py-4 text-lg font-bold text-charcoal transition-transform hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {submitting ? "Submitting..." : "Submit Application \u2192"}
          </button>

          <p className="text-center text-sm text-muted-foreground">
            {"We'll review your application within 48 hours and contact you via email or WhatsApp."}
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
