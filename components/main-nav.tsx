"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Film, Search, Menu, X, User, LogOut, List } from "lucide-react"
import { useAuth } from "@/lib/auth"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function MainNav() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { user, isAuthenticated, logout } = useAuth()

  const routes = [
    {
      href: "/",
      label: "Home",
      active: pathname === "/",
    },
    {
      href: "/discover",
      label: "Discover",
      active: pathname === "/discover",
    },
    {
      href: "/lists",
      label: "Lists",
      active: pathname === "/lists",
    },
    {
      href: "/community",
      label: "Community",
      active: pathname === "/community",
    },
  ]

  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        <Link href="/" className="flex items-center mr-6">
          <Film className="h-6 w-6 mr-2 text-primary" />
          <span className="font-bold text-xl">Cinesphere</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                route.active ? "text-primary" : "text-muted-foreground",
              )}
            >
              {route.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="hidden md:flex items-center space-x-4">
        <Button variant="ghost" size="icon">
          <Search className="h-5 w-5" />
        </Button>

        {isAuthenticated && user ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                  <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">{user.name}</p>
                  <p className="text-xs leading-none text-muted-foreground">@{user.username}</p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href={`/profile/${user.username}`}>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/profile/settings">
                  <Film className="mr-2 h-4 w-4" />
                  <span>My Films</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/profile/settings">
                  <List className="mr-2 h-4 w-4" />
                  <span>My Lists</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/profile/settings">Settings</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => logout()}>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <>
            <Button variant="outline" size="sm" asChild>
              <Link href="/login">Log In</Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/signup">Sign Up</Link>
            </Button>
          </>
        )}
      </div>

      <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {isMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-background border-b z-50 md:hidden">
          <div className="flex flex-col p-4 space-y-3">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary p-2",
                  route.active ? "text-primary" : "text-muted-foreground",
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {route.label}
              </Link>
            ))}
            <div className="pt-2 border-t flex flex-col space-y-2">
              {isAuthenticated && user ? (
                <>
                  <div className="flex items-center p-2">
                    <Avatar className="h-8 w-8 mr-2">
                      <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                      <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">{user.name}</p>
                      <p className="text-xs text-muted-foreground">@{user.username}</p>
                    </div>
                  </div>
                  <Link
                    href={`/profile/${user.username}`}
                    className="text-sm font-medium p-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Profile
                  </Link>
                  <Link
                    href="/profile/settings"
                    className="text-sm font-medium p-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Settings
                  </Link>
                  <Button
                    variant="outline"
                    size="sm"
                    className="justify-center mt-2"
                    onClick={() => {
                      logout()
                      setIsMenuOpen(false)
                    }}
                  >
                    Log Out
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="outline" size="sm" className="justify-center" asChild>
                    <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                      Log In
                    </Link>
                  </Button>
                  <Button size="sm" className="justify-center" asChild>
                    <Link href="/signup" onClick={() => setIsMenuOpen(false)}>
                      Sign Up
                    </Link>
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
