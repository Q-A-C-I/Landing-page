import { createClient } from "@supabase/supabase-js"

export function getSupabaseClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL as string
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
  if (!url || !key) {
    throw new Error("Supabase client env missing")
  }
  return createClient(url, key)
}
