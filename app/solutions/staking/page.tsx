import { TooltipProvider } from "@/components/ui/tooltip";
import { LineChart, Server, Shield, Zap } from "lucide-react";
import { BackgroundPaths } from "../../components/background-paths";
import { FeatureSection } from "../../components/feature-section";
import { LSTAPYGraph } from "../../components/lst-apy-graph";
import { LSTAPYTrendGraph } from "../../components/lst-apy-trend-graph";
import { LSTComparisonTable } from "../../components/lst-comparison-table";

export default function StakingPage() {
  const stakingFeatures = [
    {
      icon: Zap,
      title: "High-Performance Staking",
      description: "Build and manage efficient staking solutions for maximum returns.",
    },
    {
      icon: Shield,
      title: "Advanced Security",
      description: "Multi-layer security protocols to protect your staked assets.",
    },
    {
      icon: LineChart,
      title: "Real-time Analytics",
      description: "Monitor performance and returns with detailed analytics.",
    },
    {
      icon: Server,
      title: "Validator Management",
      description: "Streamlined validator setup and maintenance tools.",
    },
  ];

  return (
    <div className="min-h-screen bg-blackA12 text-white">
      <BackgroundPaths
        title="High-Performance Staking|"
        subtitle="Build and manage efficient staking solutions for maximum returns"
      />
      <main className="container mx-auto px-4 py-12 mt-16 md:mt-20">
        <FeatureSection features={stakingFeatures} />

        <section className="mt-12 md:mt-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-8">LST Comparison</h2>
          <p className="text-base md:text-lg text-muted-foreground mb-6">
            Compare different Liquid Staking Tokens (LSTs) to find the best option for your needs.
          </p>
          <div className="space-y-6 md:space-y-8">
            <div className="bg-blackA6 p-4 md:p-6 rounded-lg">
              <LSTAPYGraph />
            </div>
            <div className="bg-blackA6 p-4 md:p-6 rounded-lg">
              <LSTAPYTrendGraph />
            </div>
            <div className="bg-blackA6 p-4 md:p-6 rounded-lg overflow-x-auto">
              <TooltipProvider>
                <LSTComparisonTable />
              </TooltipProvider>
            </div>
          </div>
        </section>

        <section className="mt-12 md:mt-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-8">
            Why Choose Manifold Finance for Staking?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-blackA6 p-4 md:p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Features</h3>
              <ul className="list-disc list-inside text-mauveA11 space-y-2">
                <li>Optimized validator performance</li>
                <li>Advanced slashing protection</li>
                <li>Real-time monitoring and alerts</li>
                <li>Automated reward distribution</li>
                <li>MEV-boost integration</li>
              </ul>
            </div>
            <div className="bg-blackA6 p-4 md:p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Benefits</h3>
              <ul className="list-disc list-inside text-mauveA11 space-y-2">
                <li>Maximize staking returns</li>
                <li>Reduce operational overhead</li>
                <li>Enhance security and reliability</li>
                <li>Scale your staking operations effortlessly</li>
                <li>Access to advanced MEV strategies</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
