import { BackgroundPaths } from "../../components/background-paths"
import { FeatureSection } from "../../components/feature-section"
import { Shield, Lock, Repeat, BarChart3 } from "lucide-react"

export default function RestakingPage() {
  const restakingFeatures = [
    {
      icon: Shield,
      title: "Secure Restaking",
      description: "Leverage restaking protocols while ensuring top-notch security.",
    },
    {
      icon: Lock,
      title: "Risk Management",
      description: "Advanced risk assessment and mitigation strategies.",
    },
    {
      icon: Repeat,
      title: "Automated Restaking",
      description: "Efficient automation of restaking operations.",
    },
    {
      icon: BarChart3,
      title: "Yield Optimization",
      description: "Maximize returns through optimized restaking strategies.",
    },
  ]

  return (
    <div className="min-h-screen bg-blackA12 text-white">
      <BackgroundPaths
        title="Secure Restaking|"
        subtitle="Leverage restaking protocols while ensuring top-notch security"
      />
      <main className="container mx-auto px-4 py-12">
        <FeatureSection features={restakingFeatures} />
        {/* Rest of the content remains the same */}
        {/* <h2 className="text-3xl font-bold mb-8 text-center">Secure Restaking</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-blackA6 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Features</h3>
            <ul className="list-disc list-inside text-mauveA11">
              <li>Multi-layer security protocols</li>
              <li>Automated risk assessment</li>
              <li>Diversified restaking strategies</li>
              <li>Transparent reporting and analytics</li>
            </ul>
          </div>
          <div className="bg-blackA6 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Benefits</h3>
            <ul className="list-disc list-inside text-mauveA11">
              <li>Enhance yield through restaking</li>
              <li>Mitigate risks associated with restaking</li>
              <li>Access a wider range of DeFi opportunities</li>
              <li>Maintain control and flexibility over your assets</li>
            </ul>
          </div>
        </div> */}
      </main>
    </div>
  )
}

