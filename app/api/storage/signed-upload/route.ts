import { NextResponse } from "next/server"
import { getSupabaseServerClient } from "@/lib/supabase-server"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const bucket = String(body.bucket || "").trim()
    const path = String(body.path || "").trim()
    if (!bucket || !path) {
      return NextResponse.json({ error: "bucket and path required" }, { status: 400 })
    }
    const supabase = getSupabaseServerClient()
    const { data, error } = await supabase.storage.from(bucket).createSignedUploadUrl(path)
    if (error || !data) {
      return NextResponse.json({ error: error?.message || "Could not create signed URL" }, { status: 500 })
    }
    return NextResponse.json({ path, token: data.token })
  } catch (e: any) {
    return NextResponse.json({ error: e.message || "Unknown error" }, { status: 500 })
  }
}
