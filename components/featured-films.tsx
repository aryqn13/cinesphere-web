"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, Plus, Eye } from "lucide-react"

const featuredFilms = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    year: 1994,
    director: "Frank Darabont",
    poster: "/placeholder.svg?height=450&width=300",
    rating: 4.8,
  },
  {
    id: 2,
    title: "The Godfather",
    year: 1972,
    director: "Francis Ford Coppola",
    poster: "/placeholder.svg?height=450&width=300",
    rating: 4.7,
  },
  {
    id: 3,
    title: "Pulp Fiction",
    year: 1994,
    director: "Quentin Tarantino",
    poster: "/placeholder.svg?height=450&width=300",
    rating: 4.6,
  },
  {
    id: 4,
    title: "The Dark Knight",
    year: 2008,
    director: "Christopher Nolan",
    poster: "/placeholder.svg?height=450&width=300",
    rating: 4.5,
  },
]

export default function FeaturedFilms() {
  const [hoveredFilm, setHoveredFilm] = useState<number | null>(null)

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-bold">Featured Films</h3>
        <Button variant="outline">View All</Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {featuredFilms.map((film) => (
          <Card
            key={film.id}
            className="overflow-hidden bg-card border-0 shadow-md transition-all duration-300 hover:shadow-xl"
            onMouseEnter={() => setHoveredFilm(film.id)}
            onMouseLeave={() => setHoveredFilm(null)}
          >
            <div className="relative aspect-[2/3] overflow-hidden">
              <Image
                src={film.poster || "/placeholder.svg"}
                alt={film.title}
                fill
                className="object-cover transition-transform duration-500 ease-in-out"
                style={{
                  transform: hoveredFilm === film.id ? "scale(1.05)" : "scale(1)",
                }}
              />

              {hoveredFilm === film.id && (
                <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center gap-3 p-4 opacity-0 animate-fade-in">
                  <Button size="sm" variant="secondary" className="w-full">
                    <Eye className="h-4 w-4 mr-2" />
                    Details
                  </Button>
                  <Button size="sm" variant="outline" className="w-full text-white border-white hover:bg-white/20">
                    <Plus className="h-4 w-4 mr-2" />
                    Add to Watchlist
                  </Button>
                </div>
              )}

              <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded-md text-sm font-medium">
                {film.year}
              </div>
            </div>

            <CardContent className="p-4">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-semibold line-clamp-1">{film.title}</h4>
                  <p className="text-sm text-muted-foreground">{film.director}</p>
                </div>
                <div className="flex items-center">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                  <span className="text-sm font-medium">{film.rating}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
