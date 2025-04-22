import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Film, Star, List, Heart, MessageSquare } from "lucide-react"
import Image from "next/image"

export default function ActivityFeed() {
  const activities = [
    {
      id: 1,
      type: "review",
      user: {
        name: "Alex Johnson",
        username: "alexj",
        avatar: "/placeholder.svg?height=100&width=100",
      },
      film: {
        title: "The Shawshank Redemption",
        year: 1994,
        poster: "/placeholder.svg?height=150&width=100",
      },
      content:
        "A masterpiece of storytelling and character development. The performances are outstanding, particularly from Tim Robbins and Morgan Freeman.",
      rating: 5,
      timestamp: "2 hours ago",
      likes: 24,
      comments: 5,
    },
    {
      id: 2,
      type: "watched",
      user: {
        name: "Samantha Lee",
        username: "samlee",
        avatar: "/placeholder.svg?height=100&width=100",
      },
      film: {
        title: "Inception",
        year: 2010,
        poster: "/placeholder.svg?height=150&width=100",
      },
      timestamp: "5 hours ago",
    },
    {
      id: 3,
      type: "list",
      user: {
        name: "Michael Chen",
        username: "mikechen",
        avatar: "/placeholder.svg?height=100&width=100",
      },
      list: {
        title: "Best Sci-Fi Films of the 21st Century",
        filmCount: 25,
      },
      timestamp: "Yesterday",
      likes: 56,
      comments: 12,
    },
    {
      id: 4,
      type: "review",
      user: {
        name: "Emma Wilson",
        username: "emmaw",
        avatar: "/placeholder.svg?height=100&width=100",
      },
      film: {
        title: "Parasite",
        year: 2019,
        poster: "/placeholder.svg?height=150&width=100",
      },
      content:
        "Bong Joon-ho's masterpiece is a perfect blend of dark comedy, thriller, and social commentary. The cinematography and set design are incredible.",
      rating: 4.5,
      timestamp: "2 days ago",
      likes: 87,
      comments: 15,
    },
  ]

  return (
    <div className="space-y-6">
      {activities.map((activity) => (
        <Card key={activity.id} className="overflow-hidden hover:shadow-sm transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <Avatar className="h-10 w-10 mr-3">
                <AvatarImage src={activity.user.avatar || "/placeholder.svg"} alt={activity.user.name} />
                <AvatarFallback>{activity.user.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium">{activity.user.name}</div>
                <div className="text-sm text-muted-foreground">@{activity.user.username}</div>
              </div>
              <div className="ml-auto text-sm text-muted-foreground">{activity.timestamp}</div>
            </div>

            {activity.type === "review" && (
              <div>
                <div className="flex items-start mb-4">
                  <div className="relative w-16 h-24 mr-4 flex-shrink-0">
                    <Image
                      src={activity.film.poster || "/placeholder.svg"}
                      alt={activity.film.title}
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                  <div>
                    <div className="flex items-center mb-1">
                      <h3 className="font-semibold">{activity.film.title}</h3>
                      <span className="text-sm text-muted-foreground ml-2">({activity.film.year})</span>
                    </div>
                    <div className="flex mb-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`h-4 w-4 ${
                            star <= activity.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-sm">{activity.content}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Button variant="ghost" size="sm" className="text-muted-foreground">
                    <Heart className="h-4 w-4 mr-1" />
                    {activity.likes}
                  </Button>
                  <Button variant="ghost" size="sm" className="text-muted-foreground">
                    <MessageSquare className="h-4 w-4 mr-1" />
                    {activity.comments}
                  </Button>
                </div>
              </div>
            )}

            {activity.type === "watched" && (
              <div>
                <div className="flex items-center mb-4">
                  <Film className="h-5 w-5 mr-2 text-primary" />
                  <span>watched</span>
                  <div className="relative w-10 h-14 mx-2 flex-shrink-0">
                    <Image
                      src={activity.film.poster || "/placeholder.svg"}
                      alt={activity.film.title}
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                  <div className="font-semibold">{activity.film.title}</div>
                  <span className="text-sm text-muted-foreground ml-2">({activity.film.year})</span>
                </div>
              </div>
            )}

            {activity.type === "list" && (
              <div>
                <div className="flex items-center mb-4">
                  <List className="h-5 w-5 mr-2 text-primary" />
                  <span>created a new list</span>
                </div>
                <div className="bg-muted p-4 rounded-md mb-4">
                  <h3 className="font-semibold">{activity.list.title}</h3>
                  <p className="text-sm text-muted-foreground">{activity.list.filmCount} films</p>
                </div>
                <div className="flex gap-4">
                  <Button variant="ghost" size="sm" className="text-muted-foreground">
                    <Heart className="h-4 w-4 mr-1" />
                    {activity.likes}
                  </Button>
                  <Button variant="ghost" size="sm" className="text-muted-foreground">
                    <MessageSquare className="h-4 w-4 mr-1" />
                    {activity.comments}
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      ))}

      <div className="flex justify-center">
        <Button variant="outline">Load More</Button>
      </div>
    </div>
  )
}
