"use client"

import { useEffect, useMemo, useState } from "react"
import { SectionWrapper } from "@/components/section-wrapper"
import { usePrivy } from "@privy-io/react-auth"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import Image from "next/image"

type Row = Record<string, any>

const tables = [
  { key: "contestant_applications", label: "Contestants" },
  { key: "exhibitor_applications", label: "Exhibitors" },
  { key: "sponsor_contacts", label: "Sponsors" },
  { key: "waitlist", label: "Ticket Waitlist" },
]

export default function AdminPanelPage() {
  const { ready, authenticated, login, logout, user } = usePrivy()
  const [activeTable, setActiveTable] = useState(tables[0].key)
  const [rows, setRows] = useState<Row[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState<Row | null>(null)

  const email = user?.email?.address || ""
  const emailLc = email.toLowerCase()
  const allowedEmails = useMemo(() => {
    const raw = process.env.NEXT_PUBLIC_ADMIN_ALLOWED_EMAILS || process.env.ADMIN_ALLOWED_EMAILS || ""
    return raw.split(",").map((e) => e.trim().toLowerCase()).filter(Boolean)
  }, [])
  const permitted = !!emailLc && allowedEmails.includes(emailLc)

  useEffect(() => {
    async function fetchData() {
      if (!authenticated || !permitted) return
      setLoading(true)
      setError(null)
      try {
        const res = await fetch(`/api/admin/list?table=${encodeURIComponent(activeTable)}`, {
          headers: { "x-admin-email": email },
        })
        if (!res.ok) throw new Error(await res.text())
        const json = await res.json()
        setRows(json.rows || [])
      } catch (e: any) {
        setError(e.message || "Failed to load")
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [activeTable, authenticated, permitted, email])

  function downloadCSV() {
    if (!rows.length) return
    const headers = Object.keys(rows[0])
    const lines = [headers.join(",")]
    for (const r of rows) {
      const line = headers.map((h) => JSON.stringify(r[h] ?? "")).join(",")
      lines.push(line)
    }
    const blob = new Blob([lines.join("\n")], { type: "text/csv;charset=utf-8;" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `${activeTable}.csv`
    a.click()
    URL.revokeObjectURL(url)
  }

  async function updateCell(id: number, field: string, value: any) {
    try {
      const res = await fetch(`/api/admin/update`, {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-admin-email": email },
        body: JSON.stringify({ table: activeTable, id, updates: { [field]: value } }),
      })
      if (!res.ok) throw new Error(await res.text())
    } catch (e) {
      alert("Update failed")
    }
  }

  return (
    <SectionWrapper>
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="font-serif text-3xl font-black text-charcoal">Admin Panel</h1>
          {!ready ? (
            <span className="text-sm text-muted-foreground">Loading auth...</span>
          ) : authenticated ? (
            <button className="rounded-lg border px-3 py-2 text-sm" onClick={() => logout()}>
              Logout ({email || "Unknown"})
            </button>
          ) : (
            <button className="rounded-lg border px-3 py-2 text-sm" onClick={() => login()}>
              Login with Privy
            </button>
          )}
        </div>

        {authenticated && !permitted && (
          <div className="rounded-lg border border-red-300 bg-red-50 p-4 text-red-800">
            Access denied. Your email is not permitted.
          </div>
        )}

        {authenticated && permitted && (
          <>
            <div className="mb-4 flex flex-wrap gap-2">
              {tables.map((t) => (
                <button
                  key={t.key}
                  className={`rounded-lg border px-3 py-2 text-sm ${activeTable === t.key ? "bg-gold/20 border-gold" : ""}`}
                  onClick={() => setActiveTable(t.key)}
                >
                  {t.label}
                </button>
              ))}
              <button className="rounded-lg border px-3 py-2 text-sm" onClick={downloadCSV}>
                Download CSV
              </button>
            </div>

            {loading ? (
              <div className="text-sm text-muted-foreground">Loading...</div>
            ) : error ? (
              <div className="rounded-lg border border-red-300 bg-red-50 p-4 text-red-800">{error}</div>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {rows.map((r) => {
                    const displayName =
                      r.full_name || r.brand_name || r.company || r.email || `ID ${r.id}`
                    const paid = r.paid === true || String(r.payment_status || "").toLowerCase() === "success"
                    return (
                      <button
                        key={r.id}
                        className="rounded-lg border bg-background px-4 py-3 text-left hover:border-gold"
                        onClick={() => {
                          setSelected(r)
                          setOpen(true)
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-semibold text-charcoal">{displayName}</span>
                          <span className="flex items-center gap-2">
                            {activeTable === "contestant_applications" && (
                              <span className={`rounded px-2 py-0.5 text-xs ${paid ? "bg-gold/20 text-gold" : "bg-red-100 text-red-700"}`}>
                                {paid ? "Paid" : "Unpaid"}
                              </span>
                            )}
                            <span className="text-xs text-muted-foreground">#{r.id}</span>
                          </span>
                        </div>
                        {activeTable === "contestant_applications" && r.headshot_url ? (
                          <div className="mt-2 overflow-hidden rounded-md">
                            <Image
                              src={r.headshot_url}
                              alt="Headshot"
                              width={400}
                              height={300}
                              className="h-28 w-full object-cover"
                            />
                          </div>
                        ) : null}
                      </button>
                    )
                  })}
                </div>

                <Dialog open={open} onOpenChange={setOpen}>
                  <DialogContent className="w-[calc(100vw-2rem)] sm:max-w-xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle>Details</DialogTitle>
                    </DialogHeader>
                    {selected ? (
                      <div className="space-y-3">
                        {activeTable === "contestant_applications" && selected.headshot_url ? (
                          <div className="overflow-hidden rounded-md">
                            <Image
                              src={selected.headshot_url}
                              alt="Headshot"
                              width={600}
                              height={400}
                              className="h-48 w-full object-cover"
                            />
                          </div>
                        ) : null}
                        <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm">
                          {Object.entries(selected).map(([k, v]) => {
                            if (["portfolio_urls", "video_url", "full_body_url"].includes(k)) return null
                            return (
                              <div key={k} className="rounded border p-2">
                                <div className="text-[10px] font-semibold text-muted-foreground">{k}</div>
                                <div className="mt-0.5 break-words text-charcoal">
                                  {typeof v === "object" ? JSON.stringify(v) : String(v ?? "")}
                                </div>
                              </div>
                            )
                          })}
                        </div>

                        {activeTable === "contestant_applications" ? (
                          <div className="space-y-2">
                            {selected.video_url ? (
                              <button
                                className="w-full rounded border px-3 py-2 text-sm hover:border-gold"
                                onClick={() => window.open(String(selected.video_url), "_blank")}
                              >
                                View Intro Video
                              </button>
                            ) : null}
                            {selected.full_body_url ? (
                              <button
                                className="w-full rounded border px-3 py-2 text-sm hover:border-gold"
                                onClick={() => window.open(String(selected.full_body_url), "_blank")}
                              >
                                View Full-Body Photo
                              </button>
                            ) : null}
                            {Array.isArray(selected.portfolio_urls) && selected.portfolio_urls.length > 0 ? (
                              <button
                                className="w-full rounded border px-3 py-2 text-sm hover:border-gold"
                                onClick={() => {
                                  const urls = selected.portfolio_urls as any[]
                                  urls.forEach((u) => {
                                    const link = typeof u === "string" ? u : u?.url || ""
                                    if (link) window.open(link, "_blank")
                                  })
                                }}
                              >
                                View Portfolio Files
                              </button>
                            ) : null}
                          </div>
                        ) : null}
                      </div>
                    ) : null}
                  </DialogContent>
                </Dialog>
              </>
            )}
          </>
        )}
      </div>
    </SectionWrapper>
  )
}
