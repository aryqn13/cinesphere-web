import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, Plus, Eye, Bookmark } from "lucide-react"

const films = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    year: 1994,
    director: "Frank Darabont",
    poster: "/placeholder.svg?height=450&width=300",
    rating: 4.8,
    genres: ["Drama"],
  },
  {
    id: 2,
    title: "The Godfather",
    year: 1972,
    director: "Francis Ford Coppola",
    poster: "/placeholder.svg?height=450&width=300",
    rating: 4.7,
    genres: ["Crime", "Drama"],
  },
  {
    id: 3,
    title: "Pulp Fiction",
    year: 1994,
    director: "Quentin Tarantino",
    poster: "/placeholder.svg?height=450&width=300",
    rating: 4.6,
    genres: ["Crime", "Drama"],
  },
  {
    id: 4,
    title: "The Dark Knight",
    year: 2008,
    director: "Christopher Nolan",
    poster: "/placeholder.svg?height=450&width=300",
    rating: 4.5,
    genres: ["Action", "Crime", "Drama"],
  },
  {
    id: 5,
    title: "Fight Club",
    year: 1999,
    director: "David Fincher",
    poster: "/placeholder.svg?height=450&width=300",
    rating: 4.4,
    genres: ["Drama"],
  },
  {
    id: 6,
    title: "Inception",
    year: 2010,
    director: "Christopher Nolan",
    poster: "/placeholder.svg?height=450&width=300",
    rating: 4.3,
    genres: ["Action", "Adventure", "Sci-Fi"],
  },
  {
    id: 7,
    title: "The Matrix",
    year: 1999,
    director: "The Wachowskis",
    poster: "/placeholder.svg?height=450&width=300",
    rating: 4.2,
    genres: ["Action", "Sci-Fi"],
  },
  {
    id: 8,
    title: "Goodfellas",
    year: 1990,
    director: "Martin Scorsese",
    poster: "/placeholder.svg?height=450&width=300",
    rating: 4.1,
    genres: ["Biography", "Crime", "Drama"],
  },
  {
    id: 9,
    title: "The Silence of the Lambs",
    year: 1991,
    director: "Jonathan Demme",
    poster: "/placeholder.svg?height=450&width=300",
    rating: 4.0,
    genres: ["Crime", "Drama", "Thriller"],
  },
]

export default function FilmGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {films.map((film) => (
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
                <Eye className="h-4 w-4 mr-2" />
                Details
              </Button>
              <Button size="sm" variant="outline" className="w-full text-white border-white hover:bg-white/20">
                <Plus className="h-4 w-4 mr-2" />
                Add to Watchlist
              </Button>
            </div>

            <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded-md text-sm font-medium">
              {film.year}
            </div>

            <Button variant="ghost" size="icon" className="absolute top-2 left-2 text-white hover:bg-black/20 h-8 w-8">
              <Bookmark className="h-4 w-4" />
            </Button>
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
            <div className="mt-2 flex flex-wrap gap-1">
              {film.genres.map((genre) => (
                <span key={genre} className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                  {genre}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
