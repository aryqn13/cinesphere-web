"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/auth"

export default function ProfileRedirect() {
  const router = useRouter()
  const { user, isAuthenticated } = useAuth()

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login")
      return
    }

    if (user) {
      router.push(`/profile/${user.username}`)
    }
  }, [user, isAuthenticated, router])

  return null
}
