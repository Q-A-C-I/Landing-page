import { NextResponse } from "next/server"
import { getSupabaseServerClient } from "@/lib/supabase-server"

const allowedTables = new Set([
  "contestant_applications",
  "exhibitor_applications",
  "sponsor_contacts",
  "waitlist",
])

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const table = String(body.table || "")
    const id = Number(body.id)
    const updates = body.updates || {}
    const email = String(req.headers.get("x-admin-email") || "").toLowerCase()
    const allowlistRaw =
      (process.env.NEXT_PUBLIC_ADMIN_ALLOWED_EMAILS || process.env.ADMIN_ALLOWED_EMAILS || "").toLowerCase()
    const allow = allowlistRaw.split(",").map((e) => e.trim()).filter(Boolean)
    if (!email || !allow.includes(email)) {
      return NextResponse.json({ error: "forbidden" }, { status: 403 })
    }
    if (!allowedTables.has(table) || !id || typeof updates !== "object") {
      return NextResponse.json({ error: "bad request" }, { status: 400 })
    }
    const supabase = getSupabaseServerClient()
    const { error } = await supabase.from(table).update(updates).eq("id", id)
    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }
    return NextResponse.json({ ok: true })
  } catch (e: any) {
    return NextResponse.json({ error: e.message || "Unknown error" }, { status: 500 })
  }
}
