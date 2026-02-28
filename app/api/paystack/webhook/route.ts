import { NextResponse } from "next/server"
import crypto from "crypto"

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
    return NextResponse.json({ ok: true, event })
  } catch (e: any) {
    return NextResponse.json({ error: e.message || "Unknown error" }, { status: 500 })
  }
}
