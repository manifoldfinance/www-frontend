import { Shield } from "lucide-react"

export function PrivacySection() {
  return (
    <div className="bg-white/5 rounded-lg p-6">
      <div className="flex items-center space-x-4 mb-4">
        <Shield className="w-8 h-8 text-[#31C4B9]" />
        <h3 className="text-xl font-semibold">Privacy and Security</h3>
      </div>
      <p className="text-gray-400">
        At Manifold Finance, we prioritize the privacy and security of our users. Our infrastructure is built with
        state-of-the-art encryption and security measures to ensure your data and transactions remain protected.
      </p>
    </div>
  )
}

