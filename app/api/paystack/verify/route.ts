import { NextResponse } from "next/server"

export async function GET(req: Request) {
  try {
    const url = new URL(req.url)
    const reference = String(url.searchParams.get("reference") || "")
    const secret = process.env.PAYSTACK_SECRET_KEY
    if (!secret) {
      return NextResponse.json({ error: "Paystack secret missing" }, { status: 500 })
    }
    if (!reference) {
      return NextResponse.json({ error: "reference required" }, { status: 400 })
    }
    const res = await fetch(`https://api.paystack.co/transaction/verify/${reference}`, {
      headers: { Authorization: `Bearer ${secret}` },
    })
    const json = await res.json()
    return NextResponse.json(json)
  } catch (e: any) {
    return NextResponse.json({ error: e.message || "Unknown error" }, { status: 500 })
  }
}
