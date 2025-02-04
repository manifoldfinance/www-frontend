import { BackgroundPaths } from "../../components/background-paths";
import { FeatureSection } from "../../components/feature-section";
import { Server, Shield, Zap, LineChart } from "lucide-react";
import { APIEndpoint } from "../../components/api-endpoint";

export default function SecureRpcPage() {
  const secureRpcFeatures = [
    {
      icon: Server,
      title: "Enterprise SecureRPC",
      description: "Stable and reliable blockchain interactions for your applications.",
    },
    {
      icon: Shield,
      title: "Enhanced Security",
      description: "Advanced security measures to protect your RPC endpoints.",
    },
    {
      icon: Zap,
      title: "High Performance",
      description: "Lightning-fast response times and minimal latency.",
    },
    {
      icon: LineChart,
      title: "Scalable Infrastructure",
      description: "Enterprise-grade infrastructure that scales with your needs.",
    },
  ];

  return (
    <div className="min-h-screen bg-blackA12 text-white">
      <BackgroundPaths
        title="Enterprise SecureRPC|"
        subtitle="Stable and reliable blockchain interactions for your applications"
      />
      <main className="container mx-auto px-4 py-12">
        <FeatureSection features={secureRpcFeatures} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-blackA6 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Features</h3>
            <ul className="list-disc list-inside text-mauveA11">
              <li>High-performance RPC endpoints</li>
              <li>Advanced security measures</li>
              <li>Load balancing and failover</li>
              <li>Customizable rate limiting</li>
            </ul>
          </div>
          <div className="bg-blackA6 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Benefits</h3>
            <ul className="list-disc list-inside text-mauveA11">
              <li>Ensure reliable blockchain interactions</li>
              <li>Protect against malicious attacks</li>
              <li>Scale your dApp infrastructure effortlessly</li>
              <li>Reduce operational costs and complexity</li>
            </ul>
          </div>
        </div>
        <APIEndpoint />
      </main>
    </div>
  );
}
