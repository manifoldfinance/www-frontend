import { BackgroundPaths } from "@/app/components/background-paths";
import { FeatureSection } from "@/app/components/feature-section";
import { Zap, TrendingUp, Shield, Coins } from "lucide-react";

const mevETHFeatures = [
  {
    icon: Zap,
    title: "MEV Optimization",
    description: "Maximize your staking rewards through advanced MEV strategies.",
  },
  {
    icon: TrendingUp,
    title: "Enhanced Yields",
    description: "Benefit from higher yields compared to traditional staking.",
  },
  {
    icon: Shield,
    title: "Secure Staking",
    description: "Your staked ETH is protected by robust security measures.",
  },
  {
    icon: Coins,
    title: "Liquid Staking",
    description: "Receive mevETH tokens while your ETH is staked.",
  },
];

export default function MevETHPage() {
  return (
    <div className="min-h-screen bg-[#1616b4] text-white">
      <BackgroundPaths title="mevETH|" subtitle="Maximized MEV rewards for Ethereum staking" />
      <main className="container mx-auto px-4 py-12">
        <FeatureSection features={mevETHFeatures} />

        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-6">What is mevETH?</h2>
          <p className="text-lg mb-6">
            mevETH is a revolutionary staking solution that optimizes your Ethereum staking rewards
            by capturing Miner Extractable Value (MEV). By staking with mevETH, you can potentially
            earn higher returns compared to traditional staking methods.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#b8faf6] bg-opacity-20 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Benefits of mevETH</h3>
              <ul className="list-disc list-inside space-y-2 text-[#f0cdc2]">
                <li>Higher staking yields through MEV capture</li>
                <li>Liquid staking tokens for improved capital efficiency</li>
                <li>Participation in Ethereum network security</li>
                <li>Transparent and fair reward distribution</li>
              </ul>
            </div>
            <div className="bg-[#b8faf6] bg-opacity-20 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">How to Get Started</h3>
              <ol className="list-decimal list-inside space-y-2 text-[#f0cdc2]">
                <li>Connect your wallet to the mevETH platform</li>
                <li>Deposit your ETH for staking</li>
                <li>Receive mevETH tokens in return</li>
                <li>Start earning optimized staking rewards</li>
              </ol>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
