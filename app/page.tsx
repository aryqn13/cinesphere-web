import { Film, Star, List, Users, TrendingUp } from "lucide-react"
import HeroSection from "@/components/hero-section"
import FeaturedFilms from "@/components/featured-films"
import FeatureSection from "@/components/feature-section"
import TestimonialSection from "@/components/testimonial-section"
import CTASection from "@/components/cta-section"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />

      <div className="container px-4 py-12 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Track, Rate, and Discover Films</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join a community of film enthusiasts to track your watching habits, share your thoughts, and discover new
            favorites.
          </p>
        </div>

        <FeaturedFilms />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-16">
          <FeatureSection
            icon={<Film className="h-10 w-10" />}
            title="Track Your Films"
            description="Keep a record of every film you watch and maintain a watchlist of movies you want to see."
          />
          <FeatureSection
            icon={<Star className="h-10 w-10" />}
            title="Rate & Review"
            description="Share your thoughts with detailed reviews and ratings to help others discover great films."
          />
          <FeatureSection
            icon={<List className="h-10 w-10" />}
            title="Create Lists"
            description="Curate and share themed collections of films based on directors, genres, or personal preferences."
          />
          <FeatureSection
            icon={<Users className="h-10 w-10" />}
            title="Connect with Others"
            description="Follow other cinephiles, comment on reviews, and build your film community."
          />
          <FeatureSection
            icon={<TrendingUp className="h-10 w-10" />}
            title="Track Statistics"
            description="Visualize your watching habits with detailed statistics and insights about your preferences."
          />
          <FeatureSection
            icon={<Film className="h-10 w-10" />}
            title="Discover New Films"
            description="Get personalized recommendations based on your taste and watching history."
          />
        </div>
      </div>

      <TestimonialSection />
      <CTASection />
    </div>
  )
}
