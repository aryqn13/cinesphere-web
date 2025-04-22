"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Film, List, Users, Calendar, Clock, BarChart, Settings } from "lucide-react"
import FilmGrid from "@/components/film-grid"
import UserLists from "@/components/user-lists"
import UserStats from "@/components/user-stats"
import { useAuth } from "@/lib/auth"

export default function ProfilePage({ params }: { params: { username: string } }) {
  const router = useRouter()
  const { user: currentUser, isAuthenticated } = useAuth()
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [isCurrentUser, setIsCurrentUser] = useState(false)

  useEffect(() => {
    // Check if this is the current user's profile
    if (currentUser && currentUser.username === params.username) {
      setUser(currentUser)
      setIsCurrentUser(true)
      setLoading(false)
      return
    }

    // Simulate fetching user data
    const fetchUser = async () => {
      try {
        // For demo purposes, we'll just use a mock user if not the current user
        setUser({
          username: params.username,
          name: params.username.charAt(0).toUpperCase() + params.username.slice(1),
          bio: "Film enthusiast and aspiring critic. I love exploring cinema from around the world and discussing film theory.",
          avatar: "/placeholder.svg?height=200&width=200",
          cover: "/placeholder.svg?height=400&width=1200",
          joinedDate: "January 2022",
          location: "New York, NY",
          stats: {
            films: 842,
            lists: 24,
            followers: 1256,
            following: 348,
          },
        })
      } catch (error) {
        console.error("Error fetching user:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchUser()
  }, [currentUser, params.username])

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">User Not Found</h1>
        <p className="text-muted-foreground mb-8">The user you're looking for doesn't exist or has been removed.</p>
        <Button onClick={() => router.push("/")}>Return Home</Button>
      </div>
    )
  }

  return (
    <div>
      <div className="relative h-48 md:h-64 bg-slate-200">
        <Image src={user.cover || "/placeholder.svg"} alt={`${user.name}'s cover`} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="container mx-auto px-4">
        <div className="relative -mt-16 mb-8 flex flex-col md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col md:flex-row md:items-end">
            <Avatar className="h-32 w-32 border-4 border-background rounded-full">
              <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
              <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
            </Avatar>

            <div className="mt-4 md:mt-0 md:ml-6">
              <h1 className="text-3xl font-bold">{user.name}</h1>
              <p className="text-muted-foreground">@{user.username}</p>
            </div>
          </div>

          <div className="mt-4 md:mt-0 flex gap-2">
            {isCurrentUser ? (
              <Button variant="outline" onClick={() => router.push("/profile/settings")}>
                <Settings className="h-4 w-4 mr-2" />
                Edit Profile
              </Button>
            ) : (
              <Button>Follow</Button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-1">
            <Card>
              <CardContent className="p-6">
                <p className="mb-4">{user.bio}</p>

                <div className="space-y-3 text-sm">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>Joined {user.joinedDate}</span>
                  </div>
                  {user.location && (
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>{user.location}</span>
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="text-center">
                    <p className="text-2xl font-bold">{user.stats.films}</p>
                    <p className="text-xs text-muted-foreground">Films</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold">{user.stats.lists}</p>
                    <p className="text-xs text-muted-foreground">Lists</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold">{user.stats.followers}</p>
                    <p className="text-xs text-muted-foreground">Followers</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold">{user.stats.following}</p>
                    <p className="text-xs text-muted-foreground">Following</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="md:col-span-3">
            <Tabs defaultValue="films">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="films">
                  <Film className="h-4 w-4 mr-2 md:mr-0 lg:mr-2" />
                  <span className="hidden md:inline-block lg:inline-block">Films</span>
                </TabsTrigger>
                <TabsTrigger value="lists">
                  <List className="h-4 w-4 mr-2 md:mr-0 lg:mr-2" />
                  <span className="hidden md:inline-block lg:inline-block">Lists</span>
                </TabsTrigger>
                <TabsTrigger value="stats">
                  <BarChart className="h-4 w-4 mr-2 md:mr-0 lg:mr-2" />
                  <span className="hidden md:inline-block lg:inline-block">Stats</span>
                </TabsTrigger>
                <TabsTrigger value="following">
                  <Users className="h-4 w-4 mr-2 md:mr-0 lg:mr-2" />
                  <span className="hidden md:inline-block lg:inline-block">Following</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="films" className="mt-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold">Recent Films</h2>
                  <Button variant="outline" size="sm">
                    View All
                  </Button>
                </div>
                <FilmGrid />
              </TabsContent>

              <TabsContent value="lists" className="mt-6">
                <UserLists username={user.username} />
              </TabsContent>

              <TabsContent value="stats" className="mt-6">
                <UserStats username={user.username} />
              </TabsContent>

              <TabsContent value="following" className="mt-6">
                <div className="text-center py-12">
                  <Users className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Following</h3>
                  <p className="text-muted-foreground mb-4">See who {user.name} is following</p>
                  <Button>View All Following</Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
