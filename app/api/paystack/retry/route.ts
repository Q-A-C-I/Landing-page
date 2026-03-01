import { NextResponse } from "next/server"

export async function GET(req: Request) {
  try {
    const url = new URL(req.url)
    const reference = String(url.searchParams.get("reference") || "")
    const origin = url.searchParams.get("origin") || "http://localhost:3000"
    const secret = process.env.PAYSTACK_SECRET_KEY
    if (!secret) {
      return NextResponse.json({ error: "Paystack secret missing" }, { status: 500 })
    }
    if (!reference) {
      return NextResponse.json({ error: "reference required" }, { status: 400 })
    }
    const verifyRes = await fetch(`https://api.paystack.co/transaction/verify/${reference}`, {
      headers: { Authorization: `Bearer ${secret}` },
    })
    const verifyJson = await verifyRes.json()
    const status = String(verifyJson?.data?.status || "")
    const email = String(verifyJson?.data?.customer?.email || "")
    const phone = String(verifyJson?.data?.metadata?.phone || "")
    const name = String(verifyJson?.data?.metadata?.name || "")
    if (!email) {
      return NextResponse.json({ error: "email missing from original transaction" }, { status: 400 })
    }
    if (status === "success") {
      return NextResponse.json({ message: "already successful" })
    }
    const callback_url = `${origin}/payment-complete`
    const initRes = await fetch("https://api.paystack.co/transaction/initialize", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${secret}`,
      },
      body: JSON.stringify({
        email,
        amount: Math.round(25000 * 100),
        callback_url,
        metadata: { phone, name },
      }),
    })
    const initJson = await initRes.json()
    const link = initJson?.data?.authorization_url
    if (!link) {
      return NextResponse.json({ error: "Could not initialize" }, { status: 500 })
    }
    return NextResponse.json({ link })
  } catch (e: any) {
    return NextResponse.json({ error: e.message || "Unknown error" }, { status: 500 })
  }
}
