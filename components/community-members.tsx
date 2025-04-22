import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Film, List, Users } from "lucide-react"

export default function CommunityMembers() {
  const members = [
    {
      id: 1,
      name: "Alex Johnson",
      username: "alexj",
      avatar: "/placeholder.svg?height=100&width=100",
      bio: "Film critic and blogger. I love exploring cinema from around the world.",
      stats: {
        films: 842,
        lists: 24,
        followers: 1256,
      },
    },
    {
      id: 2,
      name: "Samantha Lee",
      username: "samlee",
      avatar: "/placeholder.svg?height=100&width=100",
      bio: "Aspiring filmmaker with a passion for documentaries and indie films.",
      stats: {
        films: 567,
        lists: 15,
        followers: 876,
      },
    },
    {
      id: 3,
      name: "Michael Chen",
      username: "mikechen",
      avatar: "/placeholder.svg?height=100&width=100",
      bio: "Film student studying at NYU. Interested in experimental cinema and animation.",
      stats: {
        films: 423,
        lists: 8,
        followers: 543,
      },
    },
    {
      id: 4,
      name: "Emma Wilson",
      username: "emmaw",
      avatar: "/placeholder.svg?height=100&width=100",
      bio: "Horror film enthusiast and podcast host. Always looking for the next scare.",
      stats: {
        films: 912,
        lists: 32,
        followers: 2156,
      },
    },
    {
      id: 5,
      name: "David Kim",
      username: "davidk",
      avatar: "/placeholder.svg?height=100&width=100",
      bio: "Screenwriter and film buff. Obsessed with classic Hollywood and film noir.",
      stats: {
        films: 1245,
        lists: 45,
        followers: 1879,
      },
    },
    {
      id: 6,
      name: "Olivia Martinez",
      username: "oliviam",
      avatar: "/placeholder.svg?height=100&width=100",
      bio: "Film festival organizer and curator. Passionate about world cinema and representation.",
      stats: {
        films: 1567,
        lists: 67,
        followers: 3421,
      },
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {members.map((member) => (
        <Card key={member.id} className="overflow-hidden hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
              </Avatar>

              <div className="flex-1">
                <h3 className="font-semibold text-lg">{member.name}</h3>
                <p className="text-sm text-muted-foreground mb-2">@{member.username}</p>
                <p className="text-sm mb-4 line-clamp-2">{member.bio}</p>

                <div className="flex justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center">
                    <Film className="h-4 w-4 mr-1" />
                    <span>{member.stats.films}</span>
                  </div>
                  <div className="flex items-center">
                    <List className="h-4 w-4 mr-1" />
                    <span>{member.stats.lists}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    <span>{member.stats.followers}</span>
                  </div>
                </div>

                <Button variant="outline" size="sm" className="w-full">
                  Follow
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
