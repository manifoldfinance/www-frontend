import { BackgroundPaths } from "../components/background-paths"
import { FeatureGrid } from "../components/feature-grid"

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-blackA12 text-white">
      <BackgroundPaths title="Our Solutions|" subtitle="Powering Markets across Networks" />
      <main className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Explore Our Solutions</h2>
        <FeatureGrid />
      </main>
    </div>
  )
}
