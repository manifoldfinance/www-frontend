import { BackgroundPaths } from "../../components/background-paths"
import { FeatureSection } from "../../components/feature-section"
import { MEVProtectionComparison } from "../../components/mev-protection-comparison"
import { Shield, Zap, Lock, Eye } from "lucide-react"

export default function RelayProtectPage() {
  const relayProtectFeatures = [
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

  return (
    <div className="min-h-screen bg-blackA12 text-white">
      <BackgroundPaths
        title="Relay+ Protect|"
        subtitle="Advanced MEV protection and transaction privacy for Ethereum"
      />
      <main className="container mx-auto px-4 py-12">
        <FeatureSection features={relayProtectFeatures} />

        <section className="mt-12">
          <h2 className="text-3xl font-bold mb-6">How Relay+ Protect Works</h2>
          <p className="text-lg mb-6">
            Relay+ Protect combines advanced MEV protection techniques with a high-performance relay
            network to ensure your transactions are executed fairly and privately on the Ethereum
            network.
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

        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-6">Comparing MEV Protection Solutions</h2>
          <p className="text-lg mb-6">
            See how Relay+ Protect compares to other MEV protection solutions in the market. Our
            advanced architecture and focus on privacy set us apart from the competition.
          </p>
          <MEVProtectionComparison />
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-6">Why Choose Relay+ Protect?</h2>
          <p className="text-lg mb-6">
            Relay+ Protect offers superior MEV protection through its unique architecture and focus
            on transaction privacy. Here's why it stands out:
          </p>
          <ul className="list-disc list-inside space-y-4 text-lg text-mauveA11">
            <li>
              <span className="text-white font-semibold">Complete Transaction Isolation:</span> Our
              private mempool implementation ensures your transactions remain fully private until
              validator commitment, minimizing the risk of frontrunning and other MEV attacks.
            </li>
            <li>
              <span className="text-white font-semibold">Highest Market Impact:</span> Relay+
              Protect reduces overall MEV extraction by 85-95%, significantly outperforming other
              solutions in the market.
            </li>
            <li>
              <span className="text-white font-semibold">User-Centric Economic Model:</span> Users
              retain 70-80% of MEV protection benefits, ensuring that the value captured from MEV
              protection primarily benefits you, not intermediaries.
            </li>
            <li>
              <span className="text-white font-semibold">Scalability and Efficiency:</span> Our
              solution is highly scalable with minimal bottlenecks and low network overhead,
              ensuring consistent performance as the network grows.
            </li>
            <li>
              <span className="text-white font-semibold">Future-Proof Design:</span> With a clear
              upgrade path and backward compatibility, Relay+ Protect is designed to evolve with the
              Ethereum ecosystem while maintaining its core benefits.
            </li>
          </ul>
        </section>
      </main>
    </div>
  )
}
