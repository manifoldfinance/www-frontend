import { BackgroundPaths } from "@/app/components/background-paths";
import { FeatureSection } from "@/app/components/feature-section";
import { Globe, Link, Users, VoteIcon } from "lucide-react";

const xgaFeatures = [
  {
    icon: Globe,
    title: "Cross-Chain Governance",
    description: "Participate in governance across multiple blockchain networks.",
  },
  {
    icon: Users,
    title: "Community-Driven",
    description: "Empower your community with decentralized decision-making.",
  },
  {
    icon: Link,
    title: "Interoperability",
    description: "Seamless integration with various blockchain ecosystems.",
  },
  {
    icon: VoteIcon,
    title: "Efficient Voting",
    description: "Streamlined voting process for quick and secure decisions.",
  },
];

export default function XGAPage() {
  return (
    <div className="min-h-screen bg-[#1616b4] text-white">
      <BackgroundPaths
        title="XGA: Cross-chain Governance Aggregator|"
        subtitle="Empowering decentralized decision-making across blockchains"
      />
      <main className="container mx-auto px-4 py-12">
        <FeatureSection features={xgaFeatures} />

        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-6">What is XGA?</h2>
          <p className="text-lg mb-6">
            XGA (Cross-chain Governance Aggregator) is a revolutionary platform that enables
            seamless governance across multiple blockchain networks. It provides a unified interface
            for participating in decentralized decision-making processes.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#f0cdc2] bg-opacity-20 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Key Benefits</h3>
              <ul className="list-disc list-inside space-y-2 text-[#b8faf6]">
                <li>Unified governance across multiple chains</li>
                <li>Increased community engagement</li>
                <li>Enhanced transparency in decision-making</li>
                <li>Reduced governance fragmentation</li>
              </ul>
            </div>
            <div className="bg-[#f0cdc2] bg-opacity-20 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">How It Works</h3>
              <ol className="list-decimal list-inside space-y-2 text-[#b8faf6]">
                <li>Connect your wallet to XGA</li>
                <li>Browse active proposals across chains</li>
                <li>Cast your votes securely</li>
                <li>Track proposal outcomes in real-time</li>
              </ol>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
