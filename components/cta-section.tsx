import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CTASection() {
  return (
    <div className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Ready to Start Your Film Journey?</h2>
        <p className="text-lg max-w-2xl mx-auto mb-8 text-primary-foreground/90">
          Join Cinesphere today and become part of a community that celebrates the art of cinema.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary" asChild>
            <Link href="/signup">Sign Up Now</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
            asChild
          >
            <Link href="/discover">Learn More</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
