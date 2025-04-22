import type React from "react"
import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"
import { ThemeProvider } from "@/components/theme-provider"
import "@/app/globals.css"

export const metadata = {
  title: "Cinesphere - Film Tracking and Social Platform",
  description: "Track films you've watched, discover new favorites, and connect with a community of film enthusiasts.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <div className="relative flex min-h-screen flex-col">
            <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="container flex h-16 items-center">
                <MainNav />
              </div>
            </header>
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
