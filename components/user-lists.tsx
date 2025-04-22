import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Film } from "lucide-react"

interface UserListsProps {
  username: string
}

export default function UserLists({ username }: UserListsProps) {
  const lists = [
    {
      id: 1,
      title: "Best Sci-Fi Films of the 21st Century",
      description: "My favorite science fiction films released since 2000",
      filmCount: 25,
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
      coverImages: [
        "/placeholder.svg?height=150&width=100",
        "/placeholder.svg?height=150&width=100",
        "/placeholder.svg?height=150&width=100",
        "/placeholder.svg?height=150&width=100",
      ],
    },
  ]

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Curated Lists</h2>
        <Button variant="outline" size="sm">
          Create New List
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {lists.map((list) => (
          <Card key={list.id} className="overflow-hidden">
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
                  <div className="flex items-center">
                    <Film className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-sm">{list.filmCount} films</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
