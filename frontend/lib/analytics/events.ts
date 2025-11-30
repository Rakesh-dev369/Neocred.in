// Purpose: Frontend analytics event tracking
// /frontend/lib/analytics/events.ts

import { sendAnalyticsEvent } from "./client"

let debounceMap: Record<string, number> = {}

/**
 * Prevent duplicate event firing for same user within 5 seconds.
 */
function debounceEvent(eventType: string, wait = 5000): boolean {
  const now = Date.now()
  if (debounceMap[eventType] && now - debounceMap[eventType] < wait) {
    return false
  }
  debounceMap[eventType] = now
  return true
}

// -------------------- Event Wrappers --------------------

export async function trackSignup(provider: string) {
  if (!debounceEvent("signup")) return
  await sendAnalyticsEvent("signup", { provider })
}

export async function trackLogin(provider: string) {
  if (!debounceEvent("login")) return
  await sendAnalyticsEvent("login", { provider })
}

export async function trackToolUsage(toolName: string) {
  if (!debounceEvent(`tool_${toolName}`)) return
  await sendAnalyticsEvent("tool_used", { tool: toolName })
}

export async function trackLessonCompleted(lessonId: string, level: string) {
  if (!debounceEvent(`lesson_${lessonId}`)) return
  await sendAnalyticsEvent("lesson_completed", { lessonId, level })
}

export async function trackProfileUpdate(fieldChanged: string) {
  if (!debounceEvent("profile_update")) return
  await sendAnalyticsEvent("profile_update", { fieldChanged })
}

export async function trackRewardClaimed(rewardId: string, points: number) {
  if (!debounceEvent(`reward_${rewardId}`)) return
  await sendAnalyticsEvent("reward_claimed", { rewardId, points })
}

// Generic event tracking function
export async function trackEvent(eventType: string, metadata: Record<string, any> = {}) {
  if (!debounceEvent(eventType)) return
  // Temporarily disabled - backend analytics endpoint not ready
  console.log(`[Analytics] Event tracked: ${eventType}`, metadata)
  return true
}
