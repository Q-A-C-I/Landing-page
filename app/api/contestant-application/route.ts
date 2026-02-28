import { NextResponse } from "next/server"
import { getSupabaseServerClient } from "@/lib/supabase-server"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const data = {
      full_name: String(body.full_name || "").trim(),
      dob: String(body.dob || "").trim(),
      citizenship_country: String(body.citizenship_country || "").trim(),
      email: String(body.email || "").trim(),
      phone: String(body.phone || "").trim(),
      instagram: String(body.instagram || "").trim(),
      education_level: String(body.education_level || "").trim(),
      talent_category: String(body.talent_category || "").trim(),
      story: String(body.story || "").trim(),
      talent_description: String(body.talent_description || "").trim(),
      social_links: String(body.social_links || "").trim(),
    }
    if (!data.full_name || !data.email || !data.phone) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }
    const supabase = getSupabaseServerClient()
    const { error } = await supabase.from("contestant_applications").insert(data)
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
