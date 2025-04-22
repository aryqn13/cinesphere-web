import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts"

interface UserStatsProps {
  username: string
}

export default function UserStats({ username }: UserStatsProps) {
  // Sample data - in a real app, this would come from an API
  const genreData = [
    { name: "Drama", value: 35 },
    { name: "Sci-Fi", value: 20 },
    { name: "Comedy", value: 15 },
    { name: "Action", value: 10 },
    { name: "Horror", value: 8 },
    { name: "Romance", value: 7 },
    { name: "Documentary", value: 5 },
  ]

  const yearlyData = [
    { year: "2018", count: 45 },
    { year: "2019", count: 68 },
    { year: "2020", count: 120 },
    { year: "2021", count: 95 },
    { year: "2022", count: 87 },
    { year: "2023", count: 110 },
  ]

  const ratingData = [
    { rating: "5", count: 42 },
    { rating: "4.5", count: 65 },
    { rating: "4", count: 120 },
    { rating: "3.5", count: 85 },
    { rating: "3", count: 45 },
    { rating: "2.5", count: 25 },
    { rating: "2", count: 15 },
    { rating: "1.5", count: 8 },
    { rating: "1", count: 5 },
    { rating: "0.5", count: 2 },
  ]

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884d8", "#82ca9d", "#ffc658"]

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Total Films Watched</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold">842</div>
            <p className="text-xs text-muted-foreground mt-1">+156 from last year</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Average Rating</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold">3.8</div>
            <p className="text-xs text-muted-foreground mt-1">Out of 5 stars</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Most Watched Director</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Christopher Nolan</div>
            <p className="text-xs text-muted-foreground mt-1">12 films watched</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Films by Genre</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={genreData}
                    cx="50%"
                    cy="50%"
                    labelLine={true}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {genreData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Films Watched by Year</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={yearlyData}>
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="count" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Rating Distribution</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={ratingData}>
                <XAxis dataKey="rating" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
