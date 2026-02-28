import { NextResponse } from "next/server"
import { getSupabaseServerClient } from "@/lib/supabase-server"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const email = String(body.email || "").trim()
    const phone = String(body.phone || "").trim()
    if (!email) {
      return NextResponse.json({ error: "Email required" }, { status: 400 })
    }
    const supabase = getSupabaseServerClient()
    const { error } = await supabase.from("waitlist").insert({ email, phone })
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
