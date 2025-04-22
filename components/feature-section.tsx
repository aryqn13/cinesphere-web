import type { ReactNode } from "react"

interface FeatureSectionProps {
  icon: ReactNode
  title: string
  description: string
}

export default function FeatureSection({ icon, title, description }: FeatureSectionProps) {
  return (
    <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card shadow-sm transition-all duration-300 hover:shadow-md">
      <div className="p-3 rounded-full bg-primary/10 text-primary mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}
