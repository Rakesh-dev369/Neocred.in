// Purpose: Handle OAuth callback and redirect to appropriate page
'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabaseClient'

export default function AuthCallback() {
  const router = useRouter()

  useEffect(() => {
    const handleAuthCallback = async () => {
      try {
        // First, try to get session from URL hash
        const { data: sessionData, error: sessionError } = await supabase.auth.getSession()
        
        if (sessionError) {
          console.error('Session error:', sessionError)
          router.push('/signin?error=session_failed')
          return
        }

        if (sessionData.session?.user) {
          const user = sessionData.session.user
          
          // Store user name if available
          const userName = user.user_metadata?.full_name || 
                          user.user_metadata?.name ||
                          user.email?.split('@')[0]
          
          if (userName) {
            localStorage.setItem('userName', userName)
          }

          // Check if user has completed onboarding
          const hasCompletedOnboarding = localStorage.getItem('userGoal')
          
          if (hasCompletedOnboarding) {
            router.push('/dashboard')
          } else {
            router.push('/welcome?source=oauth')
          }
        } else {
          // Listen for auth state changes (OAuth callback)
          const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
            if (event === 'SIGNED_IN' && session?.user) {
              const user = session.user
              
              // Store user name
              const userName = user.user_metadata?.full_name || 
                              user.user_metadata?.name ||
                              user.email?.split('@')[0]
              
              if (userName) {
                localStorage.setItem('userName', userName)
              }

              // Check onboarding status
              const hasCompletedOnboarding = localStorage.getItem('userGoal')
              
              if (hasCompletedOnboarding) {
                router.push('/dashboard')
              } else {
                router.push('/welcome?source=oauth')
              }
              
              subscription.unsubscribe()
            } else if (event === 'SIGNED_OUT' || (event === 'TOKEN_REFRESHED' && !session)) {
              router.push('/signin?error=auth_failed')
              subscription.unsubscribe()
            }
          })
          
          // Cleanup after 10 seconds if no auth event
          setTimeout(() => {
            subscription.unsubscribe()
            router.push('/signin?error=timeout')
          }, 10000)
        }
      } catch (error) {
        console.error('Callback handling error:', error)
        router.push('/signin?error=callback_failed')
      }
    }

    handleAuthCallback()
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="text-center">
        <div className="animate-spin rounded-full h-10 w-10 sm:h-12 sm:w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600 text-sm sm:text-base">Completing sign in...</p>
      </div>
    </div>
  )
}

// 🔧 Added by AI: OAuth callback handler for proper redirect flow (v1.0)