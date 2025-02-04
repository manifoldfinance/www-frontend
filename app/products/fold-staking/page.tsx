import { BackgroundPaths } from "@/app/components/background-paths"
import { FeatureSection } from "@/app/components/feature-section"
import { Coins, Lock, BarChart, Zap } from "lucide-react"

const foldStakingFeatures = [
  {
    icon: Coins,
    title: "Earn Rewards",
    description: "Stake your FOLD tokens and earn competitive rewards.",
  },
  {
    icon: Lock,
    title: "Secure Staking",
    description: "Your staked tokens are protected by advanced security measures.",
  },
  {
    icon: BarChart,
    title: "Performance Tracking",
    description: "Monitor your staking performance with real-time analytics.",
  },
  {
    icon: Zap,
    title: "Quick Withdrawals",
    description: "Flexible withdrawal options with minimal waiting periods.",
  },
]

export default function FoldStakingPage() {
  return (
    <div className="min-h-screen bg-[#1616b4] text-white">
      <BackgroundPaths title="FOLD Staking|" subtitle="Maximize your returns by staking FOLD tokens" />
      <main className="container mx-auto px-4 py-12">
        <FeatureSection features={foldStakingFeatures} />

        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-6">Why Stake FOLD?</h2>
          <p className="text-lg mb-6">
            Staking FOLD tokens allows you to earn rewards while supporting the Manifold Finance ecosystem. By
            participating in FOLD staking, you contribute to the network's security and decentralization.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#c9b3f5] bg-opacity-20 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Benefits</h3>
              <ul className="list-disc list-inside space-y-2 text-[#b8faf6]">
                <li>Earn passive income through staking rewards</li>
                <li>Participate in governance decisions</li>
                <li>Contribute to network security</li>
                <li>Potential for long-term token value appreciation</li>
              </ul>
            </div>
            <div className="bg-[#c9b3f5] bg-opacity-20 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">How to Start</h3>
              <ol className="list-decimal list-inside space-y-2 text-[#b8faf6]">
                <li>Acquire FOLD tokens</li>
                <li>Choose your preferred staking method</li>
                <li>Lock your tokens in the staking contract</li>
                <li>Start earning rewards</li>
              </ol>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

