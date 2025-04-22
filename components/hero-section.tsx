"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import Link from "next/link"

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="relative bg-black text-white">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
          backgroundPosition: "center 30%",
        }}
      />
      <div className="relative container mx-auto px-4 py-24 md:py-32 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Your Personal Film Journey</h1>
        <p className="text-xl md:text-2xl max-w-2xl mb-10">
          Track films you've watched, discover new favorites, and connect with a community of film enthusiasts.
        </p>

        <div className="flex w-full max-w-md gap-2 mb-10">
          <Input
            type="text"
            placeholder="Search for a film..."
            className="bg-black/50 border-gray-700 text-white placeholder:text-gray-400"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button variant="default">
            <Search className="h-4 w-4 mr-2" />
            Search
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="bg-rose-600 hover:bg-rose-700" asChild>
            <Link href="/signup">Get Started</Link>
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
            <Link href="/discover">Explore Films</Link>
          </Button>
        </div>

        <div className="mt-16 flex items-center justify-center gap-8">
          <div className="text-center">
            <p className="text-3xl font-bold">100K+</p>
            <p className="text-sm text-gray-300">Films</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold">50K+</p>
            <p className="text-sm text-gray-300">Users</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold">1M+</p>
            <p className="text-sm text-gray-300">Reviews</p>
          </div>
        </div>
      </div>
    </div>
  )
}
