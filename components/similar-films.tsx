import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, Plus } from "lucide-react"

interface SimilarFilmsProps {
  filmId: string
}

export default function SimilarFilms({ filmId }: SimilarFilmsProps) {
  const similarFilms = [
    {
      id: 1,
      title: "The Matrix",
      year: 1999,
      director: "The Wachowskis",
      poster: "/placeholder.svg?height=450&width=300",
      rating: 4.2,
    },
    {
      id: 2,
      title: "Interstellar",
      year: 2014,
      director: "Christopher Nolan",
      poster: "/placeholder.svg?height=450&width=300",
      rating: 4.6,
    },
    {
      id: 3,
      title: "Memento",
      year: 2000,
      director: "Christopher Nolan",
      poster: "/placeholder.svg?height=450&width=300",
      rating: 4.3,
    },
    {
      id: 4,
      title: "Shutter Island",
      year: 2010,
      director: "Martin Scorsese",
      poster: "/placeholder.svg?height=450&width=300",
      rating: 4.1,
    },
  ]

  return (
    <div>
      <h3 className="text-xl font-semibold mb-6">You might also like</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {similarFilms.map((film) => (
          <Card
            key={film.id}
            className="overflow-hidden bg-card border-0 shadow-md transition-all duration-300 hover:shadow-xl"
          >
            <div className="relative aspect-[2/3] overflow-hidden group">
              <Image
                src={film.poster || "/placeholder.svg"}
                alt={film.title}
                fill
                className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center gap-3 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Button size="sm" variant="secondary" className="w-full">
                  View Details
                </Button>
                <Button size="sm" variant="outline" className="w-full text-white border-white hover:bg-white/20">
                  <Plus className="h-4 w-4 mr-2" />
                  Add to Watchlist
                </Button>
              </div>

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
