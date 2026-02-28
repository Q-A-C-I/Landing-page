import { NextResponse } from "next/server"
import { getSupabaseServerClient } from "@/lib/supabase-server"

const allowedTables = new Set([
  "contestant_applications",
  "exhibitor_applications",
  "sponsor_contacts",
  "waitlist",
])

export async function GET(req: Request) {
  try {
    const url = new URL(req.url)
    const table = String(url.searchParams.get("table") || "")
    const email = String(req.headers.get("x-admin-email") || "").toLowerCase()
    const allowlistRaw =
      (process.env.NEXT_PUBLIC_ADMIN_ALLOWED_EMAILS || process.env.ADMIN_ALLOWED_EMAILS || "").toLowerCase()
    const allow = allowlistRaw.split(",").map((e) => e.trim()).filter(Boolean)
    if (!email || !allow.includes(email)) {
      return NextResponse.json({ error: "forbidden" }, { status: 403 })
    }
    if (!allowedTables.has(table)) {
      return NextResponse.json({ error: "invalid table" }, { status: 400 })
    }
    const supabase = getSupabaseServerClient()
    const { data, error } = await supabase.from(table).select("*").order("id", { ascending: false })
    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }
    return NextResponse.json({ rows: data || [] })
  } catch (e: any) {
    return NextResponse.json({ error: e.message || "Unknown error" }, { status: 500 })
  }
}
