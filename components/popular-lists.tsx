import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Film, Heart } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function PopularLists() {
  const lists = [
    {
      id: 1,
      title: "Best Sci-Fi Films of the 21st Century",
      description: "My favorite science fiction films released since 2000",
      filmCount: 25,
      likes: 1245,
      user: {
        name: "Alex Johnson",
        username: "alexj",
        avatar: "/placeholder.svg?height=100&width=100",
      },
      coverImages: [
        "/placeholder.svg?height=150&width=100",
        "/placeholder.svg?height=150&width=100",
        "/placeholder.svg?height=150&width=100",
        "/placeholder.svg?height=150&width=100",
      ],
    },
    {
      id: 2,
      title: "Essential Film Noir",
      description: "Classic film noir movies every cinephile should watch",
      filmCount: 15,
      likes: 876,
      user: {
        name: "Samantha Lee",
        username: "samlee",
        avatar: "/placeholder.svg?height=100&width=100",
      },
      coverImages: [
        "/placeholder.svg?height=150&width=100",
        "/placeholder.svg?height=150&width=100",
        "/placeholder.svg?height=150&width=100",
        "/placeholder.svg?height=150&width=100",
      ],
    },
    {
      id: 3,
      title: "Underrated Gems",
      description: "Great films that didn't get the recognition they deserved",
      filmCount: 18,
      likes: 543,
      user: {
        name: "Michael Chen",
        username: "mikechen",
        avatar: "/placeholder.svg?height=100&width=100",
      },
      coverImages: [
        "/placeholder.svg?height=150&width=100",
        "/placeholder.svg?height=150&width=100",
        "/placeholder.svg?height=150&width=100",
        "/placeholder.svg?height=150&width=100",
      ],
    },
    {
      id: 4,
      title: "Oscar Winners: Best Picture",
      description: "All films that have won the Academy Award for Best Picture",
      filmCount: 94,
      likes: 2156,
      user: {
        name: "Film Academy",
        username: "filmacademy",
        avatar: "/placeholder.svg?height=100&width=100",
      },
      coverImages: [
        "/placeholder.svg?height=150&width=100",
        "/placeholder.svg?height=150&width=100",
        "/placeholder.svg?height=150&width=100",
        "/placeholder.svg?height=150&width=100",
      ],
    },
    {
      id: 5,
      title: "Criterion Collection Essentials",
      description: "Must-watch films from the prestigious Criterion Collection",
      filmCount: 50,
      likes: 1879,
      user: {
        name: "Cinema Buff",
        username: "cinemabuff",
        avatar: "/placeholder.svg?height=100&width=100",
      },
      coverImages: [
        "/placeholder.svg?height=150&width=100",
        "/placeholder.svg?height=150&width=100",
        "/placeholder.svg?height=150&width=100",
        "/placeholder.svg?height=150&width=100",
      ],
    },
    {
      id: 6,
      title: "A24 Films Ranked",
      description: "All films from A24 studio ranked from best to worst",
      filmCount: 103,
      likes: 3421,
      user: {
        name: "Indie Film Lover",
        username: "indiefilms",
        avatar: "/placeholder.svg?height=100&width=100",
      },
      coverImages: [
        "/placeholder.svg?height=150&width=100",
        "/placeholder.svg?height=150&width=100",
        "/placeholder.svg?height=150&width=100",
        "/placeholder.svg?height=150&width=100",
      ],
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {lists.map((list) => (
        <Card key={list.id} className="overflow-hidden hover:shadow-md transition-shadow">
          <CardContent className="p-0">
            <div className="flex flex-col md:flex-row">
              <div className="relative w-full md:w-1/3 aspect-video md:aspect-auto">
                <div className="grid grid-cols-2 grid-rows-2 h-full">
                  {list.coverImages.map((image, index) => (
                    <div key={index} className="relative">
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`Cover for ${list.title}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 md:w-2/3">
                <h3 className="font-semibold text-lg mb-2">{list.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{list.description}</p>

                <div className="flex items-center mb-4">
                  <Avatar className="h-6 w-6 mr-2">
                    <AvatarImage src={list.user.avatar || "/placeholder.svg"} alt={list.user.name} />
                    <AvatarFallback>{list.user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <span className="text-sm">{list.user.name}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Film className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-sm">{list.filmCount} films</span>
                  </div>
                  <div className="flex items-center">
                    <Heart className="h-4 w-4 mr-2 text-rose-500" />
                    <span className="text-sm">{list.likes}</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
