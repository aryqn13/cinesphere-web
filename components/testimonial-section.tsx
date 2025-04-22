import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    content:
      "Cinesphere has completely changed how I discover new films. The recommendations are spot-on, and I love being able to share my thoughts with other film enthusiasts.",
    author: "Alex Johnson",
    role: "Film Blogger",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    content:
      "As someone who watches a lot of movies, having a place to track everything and see my stats over time is incredibly valuable. The social features make it even better!",
    author: "Samantha Lee",
    role: "Cinephile",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    content:
      "I've found so many hidden gems through Cinesphere that I would have never discovered otherwise. The curated lists from other users are fantastic.",
    author: "Michael Chen",
    role: "Film Student",
    avatar: "/placeholder.svg?height=100&width=100",
  },
]

export default function TestimonialSection() {
  return (
    <div className="bg-slate-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">What Our Users Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of film enthusiasts who are tracking, sharing, and discovering films on Cinesphere.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border-0 shadow-md">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-primary/40 mb-4" />
                <p className="mb-6 text-muted-foreground">{testimonial.content}</p>
                <div className="flex items-center">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
