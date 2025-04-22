import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Clock, Calendar, User, Plus, Check, Film, List } from "lucide-react"
import FilmReviews from "@/components/film-reviews"
import SimilarFilms from "@/components/similar-films"

export default function FilmPage({ params }: { params: { id: string } }) {
  // This would normally fetch film data based on the ID
  const film = {
    id: params.id,
    title: "Inception",
    tagline: "Your mind is the scene of the crime",
    year: 2010,
    director: "Christopher Nolan",
    poster: "/placeholder.svg?height=600&width=400",
    backdrop: "/placeholder.svg?height=1080&width=1920",
    rating: 4.5,
    runtime: 148,
    genres: ["Action", "Adventure", "Sci-Fi"],
    plot: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
    cast: [
      { name: "Leonardo DiCaprio", character: "Cobb", avatar: "/placeholder.svg?height=100&width=100" },
      { name: "Joseph Gordon-Levitt", character: "Arthur", avatar: "/placeholder.svg?height=100&width=100" },
      { name: "Ellen Page", character: "Ariadne", avatar: "/placeholder.svg?height=100&width=100" },
      { name: "Tom Hardy", character: "Eames", avatar: "/placeholder.svg?height=100&width=100" },
      { name: "Ken Watanabe", character: "Saito", avatar: "/placeholder.svg?height=100&width=100" },
    ],
    stats: {
      watched: 1245678,
      lists: 45678,
      likes: 98765,
      reviews: 12345,
    },
  }

  return (
    <div>
      <div className="relative">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${film.backdrop})` }}>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/20" />
        </div>

        <div className="container relative mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-shrink-0">
              <div className="relative w-full md:w-72 aspect-[2/3] rounded-lg overflow-hidden shadow-xl">
                <Image src={film.poster || "/placeholder.svg"} alt={film.title} fill className="object-cover" />
              </div>

              <div className="mt-4 flex flex-col gap-2">
                <Button className="w-full">
                  <Check className="mr-2 h-4 w-4" />
                  Watched
                </Button>
                <Button variant="outline" className="w-full">
                  <Plus className="mr-2 h-4 w-4" />
                  Add to Watchlist
                </Button>
                <Button variant="outline" className="w-full">
                  <List className="mr-2 h-4 w-4" />
                  Add to List
                </Button>
              </div>
            </div>

            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">{film.title}</h1>
              <p className="text-xl text-muted-foreground mb-4">{film.tagline}</p>

              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400 mr-1" />
                  <span className="font-medium">{film.rating}</span>
                  <span className="text-muted-foreground ml-1">/5</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 mr-1 text-muted-foreground" />
                  <span>{film.year}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-1 text-muted-foreground" />
                  <span>{film.runtime} min</span>
                </div>
                <div className="flex items-center">
                  <User className="h-5 w-5 mr-1 text-muted-foreground" />
                  <span>{film.director}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {film.genres.map((genre) => (
                  <Badge key={genre} variant="secondary">
                    {genre}
                  </Badge>
                ))}
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-2">Overview</h3>
                <p className="text-muted-foreground">{film.plot}</p>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4">Cast</h3>
                <div className="flex overflow-x-auto space-x-4 pb-4">
                  {film.cast.map((person) => (
                    <div key={person.name} className="flex-shrink-0 w-24">
                      <Avatar className="h-24 w-24 rounded-md mb-2">
                        <AvatarImage src={person.avatar || "/placeholder.svg"} alt={person.name} />
                        <AvatarFallback>{person.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <p className="text-sm font-medium line-clamp-1">{person.name}</p>
                      <p className="text-xs text-muted-foreground line-clamp-1">{person.character}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-6 text-center">
                <div>
                  <p className="text-2xl font-bold">{film.stats.watched.toLocaleString()}</p>
                  <p className="text-sm text-muted-foreground">Watched</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">{film.stats.lists.toLocaleString()}</p>
                  <p className="text-sm text-muted-foreground">Lists</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">{film.stats.likes.toLocaleString()}</p>
                  <p className="text-sm text-muted-foreground">Likes</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">{film.stats.reviews.toLocaleString()}</p>
                  <p className="text-sm text-muted-foreground">Reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="reviews" className="mb-8">
          <TabsList className="grid w-full grid-cols-3 md:w-auto md:inline-flex">
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
            <TabsTrigger value="similar">Similar Films</TabsTrigger>
            <TabsTrigger value="lists">In Lists</TabsTrigger>
          </TabsList>
          <TabsContent value="reviews">
            <FilmReviews filmId={params.id} />
          </TabsContent>
          <TabsContent value="similar">
            <SimilarFilms filmId={params.id} />
          </TabsContent>
          <TabsContent value="lists">
            <div className="text-center py-12">
              <Film className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-xl font-semibold mb-2">Lists containing this film</h3>
              <p className="text-muted-foreground mb-4">Discover curated collections featuring this film</p>
              <Button>Browse Lists</Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
