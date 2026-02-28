"use client"

import { useSearchParams } from "next/navigation"
import { SectionWrapper } from "@/components/section-wrapper"

export default function PaymentCompletePage() {
  const params = useSearchParams()
  const status = params.get("status") || ""
  const txRef = params.get("tx_ref") || ""
  const transactionId = params.get("transaction_id") || ""

  const success = status.toLowerCase() === "successful"

  return (
    <SectionWrapper>
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
        </div>
      </div>
    </SectionWrapper>
  )
}
