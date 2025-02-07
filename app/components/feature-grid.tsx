import type React from "react"
import { Zap, Shield, DollarSign } from "lucide-react"

export function FeatureGrid() {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <FeatureCard
          icon={<Zap className="w-6 h-6" />}
          title="High-Performance Staking"
          description="Build and manage efficient staking solutions for maximum returns."
        />
        <FeatureCard
          icon={<Shield className="w-6 h-6" />}
          title="Secure Restaking"
          description="Leverage restaking protocols while ensuring top-notch security."
        />
        <FeatureCard
          icon={<DollarSign className="w-6 h-6" />}
          title="MEV Optimization"
          description="Maximize MEV earnings with our advanced strategies and tools."
        />
        <FeatureCard
          icon={<Shield className="w-6 h-6" />}
          title="Relay+ Protect"
          description="Advanced MEV protection and transaction privacy for Ethereum."
        />
      </div>
    </div>
  )
}

function FeatureCard({
  icon,
  title,
  description,
}: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="p-8 rounded-lg bg-white/5 border border-white/10">
      <div className="w-12 h-12 rounded-lg bg-[#31C4B9]/10 flex items-center justify-center text-[#31C4B9] mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  )
}
