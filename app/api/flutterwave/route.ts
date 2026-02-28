import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const amount = Number(body.amount || 25000)
    const currency = String(body.currency || "NGN")
    const email = String(body.email || "").trim()
    const phone = String(body.phone || "").trim()
    const name = String(body.name || "").trim()
    const txRef = `qaci-${Date.now()}-${Math.floor(Math.random() * 1e6)}`
    if (!email || !name) {
      return NextResponse.json({ error: "name and email required" }, { status: 400 })
    }

    const origin = req.headers.get("origin") || "http://localhost:3000"
    const redirect_url = `${origin}/payment-complete`

    const secret = process.env.FLW_SECRET_KEY
    if (!secret) {
      return NextResponse.json({ error: "Flutterwave secret missing" }, { status: 500 })
    }

    const res = await fetch("https://api.flutterwave.com/v3/payments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${secret}`,
      },
      body: JSON.stringify({
        tx_ref: txRef,
        amount,
        currency,
        redirect_url,
        customer: {
          email,
          phonenumber: phone,
          name,
        },
        customizations: {
          title: "QACI Contestant Application Fee",
          description: "Application processing and media kit",
        },
      }),
    })
    if (!res.ok) {
      const text = await res.text()
      return NextResponse.json({ error: text }, { status: 500 })
    }
    const json = await res.json()
    const link = json?.data?.link
    if (!link) {
      return NextResponse.json({ error: "No payment link returned" }, { status: 500 })
    }
    return NextResponse.json({ link, tx_ref: txRef })
  } catch (e: any) {
    return NextResponse.json({ error: e.message || "Unknown error" }, { status: 500 })
  }
}
