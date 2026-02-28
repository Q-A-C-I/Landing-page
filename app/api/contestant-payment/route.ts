import { NextResponse } from "next/server"
import { getSupabaseServerClient } from "@/lib/supabase-server"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const email = String(body.email || "").trim().toLowerCase()
    const reference = String(body.reference || "").trim()
    if (!email || !reference) {
      return NextResponse.json({ error: "email and reference required" }, { status: 400 })
    }
    const supabase = getSupabaseServerClient()
    const { error } = await supabase
      .from("contestant_applications")
      .update({ payment_reference: reference, payment_status: "initialized" })
      .eq("email", email)
    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }
    return NextResponse.json({ ok: true })
  } catch (e: any) {
    return NextResponse.json({ error: e.message || "Unknown error" }, { status: 500 })
  }
}
