import { NextResponse } from "next/server"
import { getSupabaseServerClient } from "@/lib/supabase-server"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const data = {
      company: String(body.company || "").trim(),
      contact_name: String(body.contact_name || "").trim(),
      title: String(body.title || "").trim(),
      email: String(body.email || "").trim(),
      phone: String(body.phone || "").trim(),
      website: String(body.website || "").trim(),
      budget_range: String(body.budget_range || "").trim(),
      tier: String(body.tier || "").trim(),
      message: String(body.message || "").trim(),
    }
    if (!data.company || !data.contact_name || !data.email || !data.phone) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }
    const supabase = getSupabaseServerClient()
    const { error } = await supabase.from("sponsor_contacts").insert(data)
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
