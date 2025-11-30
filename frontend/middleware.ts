// Purpose: Simplified middleware to avoid OAuth interference
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export async function middleware(req: NextRequest) {
  // Skip auth checks for OAuth callback
  if (req.nextUrl.pathname === '/auth/callback') {
    return NextResponse.next()
  }

  // Temporarily disable middleware to fix OAuth flow
  return NextResponse.next()
}

export const config = {
  matcher: ["/dashboard/:path*"],
}