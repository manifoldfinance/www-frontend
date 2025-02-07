export default function MEVStrategiesPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">MEV Strategies</h1>
      <p className="text-lg text-muted-foreground">
        Explore various MEV strategies and learn how to implement them using Manifold Finance's
        tools.
      </p>

      <h2 className="text-2xl font-semibold mt-8">Popular MEV Strategies</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Arbitrage</li>
        <li>Liquidations</li>
        <li>Sandwich trading</li>
        <li>Just-in-time (JIT) Liquidity</li>
        <li>Backrunning</li>
      </ul>

      <p className="mt-8">
        While these strategies can be profitable, they also come with risks. Always conduct thorough
        research and testing before implementation.
      </p>
    </div>
  )
}
