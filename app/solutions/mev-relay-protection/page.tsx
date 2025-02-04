import { BackgroundPaths } from "../../components/background-paths"

export default function MevRelayProtectionPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <BackgroundPaths
        title="MEV Relay and Protection|"
        subtitle="Safeguard your transactions and maximize value with our MEV protection services"
      />
      <main className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">MEV Relay and Protection</h2>
        <p className="text-lg mb-6">
          Our MEV relay and protection services help safeguard your transactions and maximize value in the face of MEV
          extraction.
        </p>
        {/* Add more content here */}
      </main>
    </div>
  )
}

