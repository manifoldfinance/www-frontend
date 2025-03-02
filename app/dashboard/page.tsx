import { EligibleAddresses } from "../components/eligible-addresses"
import { PayoutsSection } from "../components/payouts-section"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-blackA12 text-white">
      <main className="container mx-auto px-4 py-12 mt-16 md:mt-20">
        <h1 className="text-3xl font-bold mb-6">Staking Dashboard</h1>
        <div className="space-y-6">
          <EligibleAddresses />
          <PayoutsSection />
        </div>
      </main>
    </div>
  )
}

