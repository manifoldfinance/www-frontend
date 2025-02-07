import { BackgroundPaths } from "../../components/background-paths"

export default function CaptiveInsurancePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <BackgroundPaths
        title="Captive Insurance|"
        subtitle="Tailored insurance solutions for blockchain and DeFi projects"
      />
      <main className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Captive Insurance</h2>
        <p className="text-lg mb-6">
          Our Captive Insurance product offers tailored insurance solutions designed specifically
          for blockchain and DeFi projects, providing robust protection against unique risks in the
          crypto space.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Key Features</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Customized coverage for smart contract vulnerabilities</li>
              <li>Protection against hacks and exploits</li>
              <li>Liquidity pool insurance</li>
              <li>Governance token coverage</li>
            </ul>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Benefits</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Reduced risk exposure for DeFi protocols</li>
              <li>Enhanced user trust and confidence</li>
              <li>Flexible and scalable coverage options</li>
              <li>Expert risk assessment and management</li>
            </ul>
          </div>
        </div>
        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-4">How It Works</h3>
          <p className="text-lg mb-4">
            Our Captive Insurance solution leverages blockchain technology to provide transparent,
            efficient, and automated insurance processes:
          </p>
          <ol className="list-decimal list-inside space-y-2 ml-4">
            <li>Risk Assessment: We analyze your project's specific risks and vulnerabilities.</li>
            <li>
              Custom Policy Creation: We design a tailored insurance policy to address your unique
              needs.
            </li>
            <li>
              Smart Contract Integration: Insurance policies are implemented as smart contracts for
              automated claims processing.
            </li>
            <li>
              Continuous Monitoring: Our systems continuously monitor for potential risks and
              automatically adjust coverage as needed.
            </li>
            <li>
              Streamlined Claims: In the event of a covered incident, claims are processed quickly
              and efficiently through our blockchain-based system.
            </li>
          </ol>
        </div>
      </main>
    </div>
  )
}
