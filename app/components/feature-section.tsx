import type { LucideIcon } from "lucide-react"

interface Feature {
  icon: LucideIcon
  title: string
  description: string
}

interface FeatureSectionProps {
  features: Feature[]
}

export function FeatureSection({ features }: FeatureSectionProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-12">
      {features.map((feature, index) => (
        <div
          key={index}
          className="relative p-6 rounded-lg border border-white/[0.08] bg-black/40 backdrop-blur-sm hover:border-white/[0.12] transition-colors"
        >
          <div className="w-12 h-12 rounded-lg bg-[#31C4B9]/10 flex items-center justify-center mb-4">
            <feature.icon className="w-6 h-6 text-[#31C4B9]" />
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
          <p className="text-gray-400 text-sm">{feature.description}</p>
        </div>
      ))}
    </div>
  )
}

