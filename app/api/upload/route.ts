import { NextResponse } from "next/server"
import { getSupabaseServerClient } from "@/lib/supabase-server"

export async function POST(req: Request) {
  try {
    const form = await req.formData()
    const file = form.get("file") as File | null
    const bucket = String(form.get("bucket") || "")
    const path = String(form.get("path") || "")
    if (!file || !bucket || !path) {
      return NextResponse.json({ error: "file, bucket, and path required" }, { status: 400 })
    }
    const supabase = getSupabaseServerClient()
    const arrayBuffer = await file.arrayBuffer()
    const res = await supabase.storage.from(bucket).upload(path, arrayBuffer, {
      contentType: file.type || "application/octet-stream",
      upsert: true,
    })
    if (res.error) {
      return NextResponse.json({ error: res.error.message }, { status: 500 })
    }
    const pub = supabase.storage.from(bucket).getPublicUrl(path)
    return NextResponse.json({ url: pub.data.publicUrl, path })
  } catch (e: any) {
    return NextResponse.json({ error: e.message || "Unknown error" }, { status: 500 })
  }
}
