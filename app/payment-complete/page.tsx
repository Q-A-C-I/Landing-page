"use client"
import { Suspense, useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { SectionWrapper } from "@/components/section-wrapper"

export const dynamic = "force-dynamic"

function PaymentContent() {
  const params = useSearchParams()
  const status = params.get("status") || ""
  const txRef = params.get("tx_ref") || ""
  const transactionId = params.get("transaction_id") || ""
  const reference = params.get("reference") || ""
  const [verified, setVerified] = useState<boolean | null>(null)
  const [retrying, setRetrying] = useState(false)
  useEffect(() => {
    async function run() {
      if (!reference) {
        setVerified(null)
        return
      }
      try {
        const res = await fetch(`/api/paystack/verify?reference=${encodeURIComponent(reference)}`)
        const json = await res.json()
        const ok = String(json?.data?.status || "").toLowerCase() === "success"
        setVerified(ok)
      } catch {
        setVerified(null)
      }
    }
    run()
  }, [reference])

  return (
    <div className="mx-auto max-w-2xl rounded-2xl border border-gold bg-cream p-12 text-center">
      <h1 className="font-serif text-3xl font-black text-charcoal">
        {verified === true ? "Payment Successful" : "Payment Incomplete"}
      </h1>
      <p className="mt-4 text-lg text-muted-foreground">
        {verified === true
          ? "Thank you. Your application fee has been received."
          : "If the payment failed or was interrupted, you can complete it below."}
      </p>
      <div className="mt-6 text-sm text-muted-foreground">
        <p>Reference: <span className="font-medium text-charcoal">{txRef || "N/A"}</span></p>
        <p>Transaction ID: <span className="font-medium text-charcoal">{transactionId || "N/A"}</span></p>
        <p>Paystack Ref: <span className="font-medium text-charcoal">{reference || "N/A"}</span></p>
      </div>
      {verified !== true && reference && (
        <div className="mt-8">
          <button
            disabled={retrying}
            onClick={async () => {
              try {
                setRetrying(true)
                const origin = typeof window !== "undefined" ? window.location.origin : ""
                const res = await fetch(`/api/paystack/retry?reference=${encodeURIComponent(reference)}&origin=${encodeURIComponent(origin)}`)
                const json = await res.json()
                const link = String(json?.link || "")
                if (link) window.location.href = link
              } finally {
                setRetrying(false)
              }
            }}
            className="inline-flex items-center justify-center rounded-lg bg-gold px-6 py-3 text-sm font-bold text-charcoal transition-transform hover:scale-105 disabled:opacity-60"
          >
            {retrying ? "Preparing..." : "Complete Payment"}
          </button>
        </div>
      )}
    </div>
  )
}

export default function PaymentCompletePage() {
  return (
    <SectionWrapper>
      <Suspense fallback={<div className="mx-auto max-w-2xl p-12 text-center">Loading...</div>}>
        <PaymentContent />
      </Suspense>
    </SectionWrapper>
  )
}
