import { NextResponse } from "next/server"
import crypto from "crypto"
import { getSupabaseServerClient } from "@/lib/supabase-server"

export async function POST(req: Request) {
  try {
    const secret = process.env.PAYSTACK_SECRET_KEY
    if (!secret) {
      return NextResponse.json({ error: "Paystack secret missing" }, { status: 500 })
    }
    const signature = req.headers.get("x-paystack-signature") || ""
    const raw = await req.text()
    const calc = crypto.createHmac("sha512", secret).update(raw).digest("hex")
    if (!signature || calc !== signature) {
      return NextResponse.json({ error: "invalid signature" }, { status: 400 })
    }
    const event = JSON.parse(raw)
    const reference = event?.data?.reference || ""
    try {
      const supabase = getSupabaseServerClient()
      await supabase.from("paystack_webhooks").insert({
        reference,
        event,
      })
      const email = String(event?.data?.customer?.email || "").toLowerCase()
      if (email) {
        if (String(event?.event || "") === "charge.success") {
          await supabase
            .from("contestant_applications")
            .update({ paid: true, payment_status: "success", payment_reference: reference })
            .eq("email", email)
        } else if (String(event?.event || "") === "charge.failed") {
          await supabase
            .from("contestant_applications")
            .update({ payment_status: "failed" })
            .eq("email", email)
        }
      }
    } catch {}
    return NextResponse.json({ ok: true })
  } catch (e: any) {
    return NextResponse.json({ error: e.message || "Unknown error" }, { status: 500 })
  }
}
