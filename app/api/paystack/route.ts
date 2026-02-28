import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const email = String(body.email || "").trim()
    const phone = String(body.phone || "").trim()
    const name = String(body.name || "").trim()
    const amountNgn = Number(body.amount || 25000)
    const amountKobo = Math.round(amountNgn * 100)
    if (!email) {
      return NextResponse.json({ error: "email required" }, { status: 400 })
    }
    const origin = req.headers.get("origin") || "http://localhost:3000"
    const callback_url = `${origin}/payment-complete`
    const secret = process.env.PAYSTACK_SECRET_KEY
    if (!secret) {
      return NextResponse.json({ error: "Paystack secret missing" }, { status: 500 })
    }
    const txRef = `qaci-${Date.now()}-${Math.floor(Math.random() * 1e6)}`
    const res = await fetch("https://api.paystack.co/transaction/initialize", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${secret}`,
      },
      body: JSON.stringify({
        email,
        amount: amountKobo,
        callback_url,
        reference: txRef,
        metadata: { phone, name },
      }),
    })
    if (!res.ok) {
      const text = await res.text()
      return NextResponse.json({ error: text }, { status: 500 })
    }
    const json = await res.json()
    const url = json?.data?.authorization_url
    const reference = json?.data?.reference
    if (!url) {
      return NextResponse.json({ error: "No authorization_url" }, { status: 500 })
    }
    return NextResponse.json({ link: url, reference })
  } catch (e: any) {
    return NextResponse.json({ error: e.message || "Unknown error" }, { status: 500 })
  }
}
