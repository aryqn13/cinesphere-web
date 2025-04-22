import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Filter, Users } from "lucide-react"
import CommunityMembers from "@/components/community-members"
import ActivityFeed from "@/components/activity-feed"

export default function CommunityPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Community</h1>
          <p className="text-muted-foreground">Connect with other film enthusiasts and discover new perspectives</p>
        </div>

        <div className="flex w-full md:w-auto gap-2">
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search users..." className="pl-10" />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <Tabs defaultValue="activity" className="mb-8">
        <TabsList className="grid w-full grid-cols-3 md:w-auto md:inline-flex">
          <TabsTrigger value="activity">Activity Feed</TabsTrigger>
          <TabsTrigger value="members">Members</TabsTrigger>
          <TabsTrigger value="following">Following</TabsTrigger>
        </TabsList>
        <TabsContent value="activity">
          <ActivityFeed />
        </TabsContent>
        <TabsContent value="members">
          <CommunityMembers />
        </TabsContent>
        <TabsContent value="following">
          <div className="text-center py-12">
            <Users className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-xl font-semibold mb-2">Your Following</h3>
            <p className="text-muted-foreground mb-4">You need to be logged in to see who you're following</p>
            <Button>Sign In</Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
