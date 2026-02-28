import { NextResponse } from "next/server"
import { getSupabaseServerClient } from "@/lib/supabase-server"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const data = {
      brand_name: String(body.brand_name || "").trim(),
      contact_name: String(body.contact_name || "").trim(),
      email: String(body.email || "").trim(),
      phone: String(body.phone || "").trim(),
      country: String(body.country || "").trim(),
      category: String(body.category || "").trim(),
      booth: String(body.booth || "").trim(),
      website_instagram: String(body.website_instagram || "").trim(),
      brand_description: String(body.brand_description || "").trim(),
      hear_about: String(body.hear_about || "").trim(),
      product_photos_urls: Array.isArray(body.product_photos_urls) ? body.product_photos_urls : [],
    }
    if (!data.brand_name || !data.contact_name || !data.email || !data.phone) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }
    const supabase = getSupabaseServerClient()
    const { error } = await supabase.from("exhibitor_applications").insert(data)
    if (error) {
      if ((error as any).code === "23505") {
        return NextResponse.json({ error: "Already submitted" }, { status: 409 })
      }
      return NextResponse.json({ error: error.message }, { status: 500 })
    }
    return NextResponse.json({ ok: true })
  } catch (e: any) {
    return NextResponse.json({ error: e.message || "Unknown error" }, { status: 500 })
  }
}
