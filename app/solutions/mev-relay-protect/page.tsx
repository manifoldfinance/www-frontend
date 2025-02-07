import { BackgroundPaths } from "@/app/components/background-paths"
import { FeatureSection } from "@/app/components/feature-section"
import { Shield, Zap, Lock, Eye } from "lucide-react"

const mevRelayProtectFeatures = [
  {
    icon: Shield,
    title: "MEV Protection",
    description: "Safeguard your transactions against frontrunning and sandwich attacks.",
  },
  {
    icon: Zap,
    title: "High-Performance Relay",
    description: "Fast and reliable transaction relay to the Ethereum network.",
  },
  {
    icon: Lock,
    title: "Transaction Privacy",
    description: "Enhanced privacy features to protect your transaction details.",
  },
  {
    icon: Eye,
    title: "Transparent Execution",
    description: "Full visibility into transaction execution and MEV capture.",
  },
]

export default function MEVRelayProtectPage() {
  return (
    <div className="min-h-screen bg-blackA12 text-white">
      <BackgroundPaths
        title="MEV Relay+Protect|"
        subtitle="Advanced MEV protection and transaction privacy for Ethereum"
      />
      <main className="container mx-auto px-4 py-12">
        <FeatureSection features={mevRelayProtectFeatures} />

        <section className="mt-12">
          <h2 className="text-3xl font-bold mb-6">How MEV Relay+Protect Works</h2>
          <p className="text-lg mb-6">
            MEV Relay+Protect combines advanced MEV protection techniques with a high-performance
            relay network to ensure your transactions are executed fairly and privately on the
            Ethereum network.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blackA6 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Key Features</h3>
              <ul className="list-disc list-inside space-y-2 text-mauveA11">
                <li>Real-time MEV detection and mitigation</li>
                <li>Private mempool for sensitive transactions</li>
                <li>Optimized transaction ordering</li>
                <li>Transparent MEV redistribution</li>
              </ul>
            </div>
            <div className="bg-blackA6 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Benefits</h3>
              <ul className="list-disc list-inside space-y-2 text-mauveA11">
                <li>Reduced slippage on large trades</li>
                <li>Enhanced transaction privacy</li>
                <li>Lower risk of frontrunning</li>
                <li>Improved overall trading performance</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
