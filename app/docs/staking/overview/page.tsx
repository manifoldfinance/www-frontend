export default function StakingOverviewPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Staking Overview</h1>
      <p className="text-lg text-muted-foreground">
        Learn about Manifold Finance's high-performance staking solutions and how they can maximize
        your returns.
      </p>

      <h2 className="text-2xl font-semibold mt-8">Key Features</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Optimized validator performance</li>
        <li>MEV-boost integration</li>
        <li>Advanced slashing protection</li>
        <li>Real-time monitoring and alerts</li>
        <li>Automated reward distribution</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8">Staking Options</h2>
      <p>
        Manifold Finance offers various staking options to suit different needs and risk profiles.
        Explore our documentation to find the best solution for you.
      </p>
    </div>
  )
}
