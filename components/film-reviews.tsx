import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Star, Heart, MessageSquare, Flag } from "lucide-react"

interface FilmReviewsProps {
  filmId: string
}

export default function FilmReviews({ filmId }: FilmReviewsProps) {
  const reviews = [
    {
      id: 1,
      user: {
        name: "Alex Johnson",
        username: "alexj",
        avatar: "/placeholder.svg?height=100&width=100",
      },
      rating: 4.5,
      date: "2023-05-15",
      content:
        "Christopher Nolan's mind-bending masterpiece is a visual and intellectual tour de force. The concept of dream invasion is brilliantly executed, with stunning visuals and a complex narrative that rewards multiple viewings. DiCaprio delivers one of his finest performances, and the supporting cast is equally impressive. The film's exploration of grief, guilt, and redemption adds emotional depth to the high-concept premise.",
      likes: 245,
      comments: 32,
    },
    {
      id: 2,
      user: {
        name: "Samantha Lee",
        username: "samlee",
        avatar: "/placeholder.svg?height=100&width=100",
      },
      rating: 5,
      date: "2023-04-22",
      content:
        "Inception stands as one of the most innovative films of the 21st century. Nolan crafts a heist movie set within the architecture of the mind, combining thrilling action sequences with profound philosophical questions about reality and perception. The rotating hallway fight scene alone is worth the price of admission. Hans Zimmer's score perfectly complements the film's tone, creating an immersive experience that lingers long after the credits roll.",
      likes: 189,
      comments: 24,
    },
    {
      id: 3,
      user: {
        name: "Michael Chen",
        username: "mikechen",
        avatar: "/placeholder.svg?height=100&width=100",
      },
      rating: 4,
      date: "2023-03-10",
      content:
        "While Inception is undeniably ambitious and visually spectacular, it occasionally sacrifices emotional resonance for conceptual complexity. That said, the film's strengths far outweigh its weaknesses. The ensemble cast is exceptional, with Tom Hardy and Joseph Gordon-Levitt delivering standout performances. The layered dream sequences are masterfully edited, maintaining clarity despite the intricate narrative structure. A modern classic that continues to inspire discussion and debate.",
      likes: 132,
      comments: 18,
    },
  ]

  return (
    <div>
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Write a Review</h3>
        <div className="flex items-center mb-4">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`h-6 w-6 ${star <= 4 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
              />
            ))}
          </div>
          <span className="ml-2 text-sm text-muted-foreground">Your rating</span>
        </div>
        <Textarea placeholder="Share your thoughts on this film..." className="mb-4" rows={4} />
        <div className="flex justify-end">
          <Button>Post Review</Button>
        </div>
      </div>

      <div className="space-y-8">
        {reviews.map((review) => (
          <div key={review.id} className="border-b pb-8">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center">
                <Avatar className="h-10 w-10 mr-3">
                  <AvatarImage src={review.user.avatar || "/placeholder.svg"} alt={review.user.name} />
                  <AvatarFallback>{review.user.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{review.user.name}</p>
                  <p className="text-sm text-muted-foreground">@{review.user.username}</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex mr-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`h-4 w-4 ${star <= review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  {new Date(review.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </span>
              </div>
            </div>

            <p className="mb-4">{review.content}</p>

            <div className="flex gap-4">
              <Button variant="ghost" size="sm" className="text-muted-foreground">
                <Heart className="h-4 w-4 mr-1" />
                {review.likes}
              </Button>
              <Button variant="ghost" size="sm" className="text-muted-foreground">
                <MessageSquare className="h-4 w-4 mr-1" />
                {review.comments}
              </Button>
              <Button variant="ghost" size="sm" className="text-muted-foreground ml-auto">
                <Flag className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Button variant="outline">Load More Reviews</Button>
      </div>
    </div>
  )
}
