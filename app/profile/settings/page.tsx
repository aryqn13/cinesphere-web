"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useAuth } from "@/lib/auth"
import { useToast } from "@/hooks/use-toast"

export default function ProfileSettingsPage() {
  const router = useRouter()
  const { user, updateProfile, logout, isAuthenticated } = useAuth()
  const { toast } = useToast()

  const [name, setName] = useState("")
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [bio, setBio] = useState("")
  const [location, setLocation] = useState("")
  const [avatar, setAvatar] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login")
      return
    }

    if (user) {
      setName(user.name)
      setUsername(user.username)
      setEmail(user.email)
      setBio(user.bio || "")
      setLocation(user.location || "")
      setAvatar(user.avatar || "")
    }
  }, [user, isAuthenticated, router])

  const handleProfileUpdate = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      updateProfile({
        name,
        username,
        email,
        bio,
        location,
        avatar,
      })

      toast({
        title: "Profile updated",
        description: "Your profile has been updated successfully.",
      })
    } catch (error) {
      toast({
        title: "Update failed",
        description: "An error occurred while updating your profile.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleLogout = () => {
    logout()
    router.push("/")
    toast({
      title: "Logged out",
      description: "You have been logged out successfully.",
    })
  }

  if (!user) {
    return null
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Account Settings</h1>
          <p className="text-muted-foreground">Manage your account settings and profile information</p>
        </div>
      </div>

      <Tabs defaultValue="profile" className="space-y-8">
        <TabsList>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <Card>
            <form onSubmit={handleProfileUpdate}>
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
                <CardDescription>Update your profile details and public information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-col items-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src={avatar || "/placeholder.svg"} alt={name} />
                    <AvatarFallback>{name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Profile Picture</h3>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <Input
                        type="text"
                        placeholder="Avatar URL"
                        value={avatar}
                        onChange={(e) => setAvatar(e.target.value)}
                      />
                      <Button type="button" variant="outline">
                        Upload
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="username">Username</Label>
                    <Input id="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea
                    id="bio"
                    placeholder="Tell us about yourself and your film interests"
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    rows={4}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    placeholder="City, Country"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button type="button" variant="outline" onClick={() => router.back()}>
                  Cancel
                </Button>
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? "Saving..." : "Save Changes"}
                </Button>
              </CardFooter>
            </form>
          </Card>
        </TabsContent>

        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle>Account Settings</CardTitle>
              <CardDescription>Manage your account email and password</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="current-password">Current Password</Label>
                <Input id="current-password" type="password" />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="new-password">New Password</Label>
                  <Input id="new-password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm New Password</Label>
                  <Input id="confirm-password" type="password" />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button type="button" variant="outline" onClick={() => router.back()}>
                Cancel
              </Button>
              <Button type="button">Update Password</Button>
            </CardFooter>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Danger Zone</CardTitle>
              <CardDescription>Irreversible and destructive actions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-medium">Log out from all devices</h3>
                <p className="text-sm text-muted-foreground">
                  This will log you out from all devices except the current one.
                </p>
                <div>
                  <Button variant="outline" className="mt-2">
                    Log out from all devices
                  </Button>
                </div>
              </div>

              <div className="flex flex-col gap-2 pt-4 border-t">
                <h3 className="text-lg font-medium text-destructive">Delete Account</h3>
                <p className="text-sm text-muted-foreground">
                  Permanently delete your account and all of your content. This action cannot be undone.
                </p>
                <div>
                  <Button variant="destructive" className="mt-2">
                    Delete Account
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>Manage how you receive notifications</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center py-12 text-muted-foreground">Notification settings will be available soon.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="mt-8 text-center">
        <Button variant="outline" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
    </div>
  )
}
