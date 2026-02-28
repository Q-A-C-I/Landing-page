"use client"
import { Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { SectionWrapper } from "@/components/section-wrapper"

export const dynamic = "force-dynamic"

function PaymentContent() {
  const params = useSearchParams()
  const status = params.get("status") || ""
  const txRef = params.get("tx_ref") || ""
  const transactionId = params.get("transaction_id") || ""
  const reference = params.get("reference") || ""
  const success = status.toLowerCase() === "successful"

  return (
    <div className="mx-auto max-w-2xl rounded-2xl border border-gold bg-cream p-12 text-center">
      <h1 className="font-serif text-3xl font-black text-charcoal">
        {success ? "Payment Successful" : "Payment Incomplete"}
      </h1>
      <p className="mt-4 text-lg text-muted-foreground">
        {success
          ? "Thank you. Your application fee has been received."
          : "If you closed the window or the payment failed, you can retry from the application page."}
      </p>
      <div className="mt-6 text-sm text-muted-foreground">
        <p>Reference: <span className="font-medium text-charcoal">{txRef || "N/A"}</span></p>
        <p>Transaction ID: <span className="font-medium text-charcoal">{transactionId || "N/A"}</span></p>
        <p>Paystack Ref: <span className="font-medium text-charcoal">{reference || "N/A"}</span></p>
      </div>
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
