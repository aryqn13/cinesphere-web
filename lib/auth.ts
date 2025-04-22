// Simple client-side auth implementation for demonstration purposes
// In a real app, you would use a proper auth solution like NextAuth.js

import { create } from "zustand"
import { persist } from "zustand/middleware"

export type User = {
  id: string
  name: string
  username: string
  email: string
  bio?: string
  avatar?: string
  joinedDate: string
  location?: string
  stats: {
    films: number
    lists: number
    followers: number
    following: number
  }
}

type AuthState = {
  user: User | null
  isAuthenticated: boolean
  login: (email: string, password: string) => Promise<boolean>
  signup: (name: string, username: string, email: string, password: string) => Promise<boolean>
  logout: () => void
  updateProfile: (userData: Partial<User>) => void
}

// Demo users
const demoUsers = [
  {
    id: "1",
    email: "demo@example.com",
    password: "password",
    name: "Demo User",
    username: "demouser",
    bio: "Film enthusiast and aspiring critic. I love exploring cinema from around the world.",
    avatar: "/placeholder.svg?height=200&width=200",
    joinedDate: "April 2023",
    location: "New York, NY",
    stats: {
      films: 142,
      lists: 8,
      followers: 56,
      following: 78,
    },
  },
]

export const useAuth = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      login: async (email, password) => {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000))

        const user = demoUsers.find((u) => u.email === email && u.password === password)

        if (user) {
          const { password, ...userWithoutPassword } = user
          set({
            user: userWithoutPassword as User,
            isAuthenticated: true,
          })
          return true
        }
        return false
      },
      signup: async (name, username, email, password) => {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000))

        // Check if user already exists
        if (demoUsers.some((u) => u.email === email)) {
          return false
        }

        // Create new user
        const newUser = {
          id: String(demoUsers.length + 1),
          name,
          username,
          email,
          bio: "",
          avatar: "/placeholder.svg?height=200&width=200",
          joinedDate: new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" }),
          location: "",
          stats: {
            films: 0,
            lists: 0,
            followers: 0,
            following: 0,
          },
        }

        // In a real app, we would save this to a database
        // For demo, we'll just update the state
        set({
          user: newUser,
          isAuthenticated: true,
        })
        return true
      },
      logout: () => {
        set({
          user: null,
          isAuthenticated: false,
        })
      },
      updateProfile: (userData) => {
        set((state) => ({
          user: state.user ? { ...state.user, ...userData } : null,
        }))
      },
    }),
    {
      name: "cinesphere-auth",
    },
  ),
)
