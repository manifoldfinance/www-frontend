import { BackgroundPaths } from "@/app/components/background-paths";
import { FeatureSection } from "@/app/components/feature-section";
import { Lock, Server, Shield, Zap } from "lucide-react";

const secureRPCFeatures = [
  {
    icon: Shield,
    title: "Enhanced Security",
    description: "Enterprise-grade security for all your RPC calls.",
  },
  {
    icon: Zap,
    title: "High Performance",
    description: "Lightning-fast response times and high throughput.",
  },
  {
    icon: Lock,
    title: "Privacy Protection",
    description: "Advanced measures to protect your transaction privacy.",
  },
  {
    icon: Server,
    title: "Reliable Infrastructure",
    description: "Robust and scalable infrastructure for 24/7 availability.",
  },
];

export default function SecureRPCPage() {
  return (
    <div className="min-h-screen bg-[#1616b4] text-white">
      <BackgroundPaths
        title="SecureRPC|"
        subtitle="Enterprise-grade RPC service for secure blockchain interactions"
      />
      <main className="container mx-auto px-4 py-12">
        <FeatureSection features={secureRPCFeatures} />

        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-6">Why Choose SecureRPC?</h2>
          <p className="text-lg mb-6">
            SecureRPC provides a robust and secure infrastructure for all your blockchain
            interactions. Whether you're building DApps or managing large-scale operations, our
            service ensures reliability and protection.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#88aaf1] bg-opacity-20 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Key Features</h3>
              <ul className="list-disc list-inside space-y-2 text-[#b8faf6]">
                <li>Multi-layer security protocols</li>
                <li>Low-latency global network</li>
                <li>Advanced DDoS protection</li>
                <li>Customizable API endpoints</li>
              </ul>
            </div>
            <div className="bg-[#88aaf1] bg-opacity-20 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Use Cases</h3>
              <ul className="list-disc list-inside space-y-2 text-[#b8faf6]">
                <li>DApp development and deployment</li>
                <li>High-frequency trading operations</li>
                <li>Blockchain data analytics</li>
                <li>Enterprise blockchain solutions</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
