import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Search, Filter } from "lucide-react"
import FilmGrid from "@/components/film-grid"

export default function DiscoverPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Discover Films</h1>
          <p className="text-muted-foreground">Explore and discover new films based on your preferences</p>
        </div>

        <div className="flex w-full md:w-auto gap-2">
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search films..." className="pl-10" />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <Tabs defaultValue="trending" className="mb-8">
        <TabsList className="grid w-full grid-cols-4 md:w-auto md:inline-flex">
          <TabsTrigger value="trending">Trending</TabsTrigger>
          <TabsTrigger value="top-rated">Top Rated</TabsTrigger>
          <TabsTrigger value="new-releases">New Releases</TabsTrigger>
          <TabsTrigger value="recommended">For You</TabsTrigger>
        </TabsList>
        <TabsContent value="trending">
          <FilmGrid />
        </TabsContent>
        <TabsContent value="top-rated">
          <FilmGrid />
        </TabsContent>
        <TabsContent value="new-releases">
          <FilmGrid />
        </TabsContent>
        <TabsContent value="recommended">
          <FilmGrid />
        </TabsContent>
      </Tabs>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <Card className="md:col-span-1">
          <CardContent className="p-6">
            <h3 className="font-semibold text-lg mb-4">Filters</h3>

            <div className="space-y-6">
              <div>
                <label className="text-sm font-medium mb-2 block">Genres</label>
                <div className="flex flex-wrap gap-2">
                  {["Action", "Drama", "Comedy", "Sci-Fi", "Horror", "Romance", "Thriller", "Animation"].map(
                    (genre) => (
                      <Button key={genre} variant="outline" size="sm" className="text-xs">
                        {genre}
                      </Button>
                    ),
                  )}
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Year Range</label>
                <Slider defaultValue={[1990, 2023]} min={1900} max={2023} step={1} />
                <div className="flex justify-between mt-2 text-sm text-muted-foreground">
                  <span>1990</span>
                  <span>2023</span>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Rating</label>
                <Slider defaultValue={[3]} min={0} max={5} step={0.5} />
                <div className="flex justify-between mt-2 text-sm text-muted-foreground">
                  <span>0</span>
                  <span>5</span>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Runtime (minutes)</label>
                <Slider defaultValue={[180]} min={0} max={240} step={10} />
                <div className="flex justify-between mt-2 text-sm text-muted-foreground">
                  <span>0</span>
                  <span>240+</span>
                </div>
              </div>

              <Button className="w-full">Apply Filters</Button>
            </div>
          </CardContent>
        </Card>

        <div className="md:col-span-3">
          <FilmGrid />
        </div>
      </div>
    </div>
  )
}
