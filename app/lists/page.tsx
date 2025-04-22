import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Plus } from "lucide-react"
import UserLists from "@/components/user-lists"
import PopularLists from "@/components/popular-lists"

export default function ListsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Film Lists</h1>
          <p className="text-muted-foreground">Discover and create curated collections of films</p>
        </div>

        <div className="flex w-full md:w-auto gap-2">
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search lists..." className="pl-10" />
          </div>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Create List
          </Button>
        </div>
      </div>

      <Tabs defaultValue="popular" className="mb-8">
        <TabsList className="grid w-full grid-cols-3 md:w-auto md:inline-flex">
          <TabsTrigger value="popular">Popular</TabsTrigger>
          <TabsTrigger value="recent">Recent</TabsTrigger>
          <TabsTrigger value="my-lists">My Lists</TabsTrigger>
        </TabsList>
        <TabsContent value="popular">
          <PopularLists />
        </TabsContent>
        <TabsContent value="recent">
          <PopularLists />
        </TabsContent>
        <TabsContent value="my-lists">
          <UserLists username="current-user" />
        </TabsContent>
      </Tabs>
    </div>
  )
}
