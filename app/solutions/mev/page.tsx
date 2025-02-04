import { BackgroundPaths } from "../../components/background-paths"
import { FeatureSection } from "../../components/feature-section"
import { DollarSign, Zap, Shield, LineChart } from "lucide-react"

export default function MevPage() {
  const mevFeatures = [
    {
      icon: DollarSign,
      title: "MEV Optimization",
      description: "Maximize MEV earnings with our advanced strategies and tools.",
    },
    {
      icon: Zap,
      title: "Fast Execution",
      description: "Lightning-fast execution of MEV opportunities.",
    },
    {
      icon: Shield,
      title: "Sandwich Protection",
      description: "Advanced protection against sandwich attacks.",
    },
    {
      icon: LineChart,
      title: "MEV Analytics",
      description: "Detailed analytics and reporting of MEV activities.",
    },
  ]

  return (
    <div className="min-h-screen bg-blackA12 text-white">
      <BackgroundPaths
        title="MEV Optimization|"
        subtitle="Maximize MEV earnings with our advanced strategies and tools"
      />
      <main className="container mx-auto px-4 py-12">
        <FeatureSection features={mevFeatures} />
        {/* Rest of the content remains the same */}
      </main>
    </div>
  )
}

