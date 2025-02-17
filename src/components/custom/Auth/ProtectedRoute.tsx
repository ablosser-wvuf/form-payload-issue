'use client'

import { useSession, signIn } from 'next-auth/react'
import { useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'

interface ProtectedRouteProps {
  children: React.ReactNode
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { data: session, status } = useSession()
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    if (status === 'unauthenticated') {
      // Store the attempted URL for redirect after login
      sessionStorage.setItem('intendedUrl', pathname)
      signIn('onelogin')
    }
  }, [status, pathname])

  if (status === 'loading') {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="h-32 w-32 animate-spin rounded-full border-b-2 border-t-2 border-gray-900"></div>
      </div>
    )
  }

  if (!session) {
    return null
  }

  return <>{children}</>
}
