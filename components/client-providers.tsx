"use client"

import { PrivyProvider } from "@privy-io/react-auth"

export function ClientProviders({ children }: { children: React.ReactNode }) {
  const appId = process.env.NEXT_PUBLIC_PRIVY_APP_ID || ""
  if (!appId) {
    return children
  }
  return <PrivyProvider appId={appId}>{children}</PrivyProvider>
}
