// Purpose: Analytics client for backend communication
// /frontend/lib/analytics/client.ts

import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
const backendApi = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8001"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

/**
 * Sends analytics events to backend.
 * Automatically includes Supabase user JWT for verification.
 */
export async function sendAnalyticsEvent(
  eventType: string,
  metadata: Record<string, any> = {}
): Promise<boolean> {
  try {
    const { data: userData } = await supabase.auth.getUser()
    const user = userData?.user

    if (!user) {
      console.warn("[Analytics] Skipped — no user authenticated.")
      return false
    }

    const tokenResponse = await supabase.auth.getSession()
    const token = tokenResponse.data?.session?.access_token

    if (!token) {
      console.warn("[Analytics] No access token found.")
      return false
    }

    const payload = {
      user_id: user.id,
      event_type: eventType,
      metadata,
    }

    const res = await fetch(`${backendApi}/analytics/events`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    }).catch(err => {
      console.warn('[Analytics] Backend unavailable, skipping event')
      return { ok: false, text: () => Promise.resolve('Backend unavailable') }
    })

    if (!res.ok) {
      console.error(`[Analytics] Failed to send event (${eventType}):`, await res.text())
      return false
    }

    console.log(`[Analytics] Event sent: ${eventType}`)
    return true
  } catch (err) {
    console.error("[Analytics] Error sending event:", err)
    return false
  }
}
