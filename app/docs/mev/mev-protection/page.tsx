export default function MEVProtectionPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">MEV Protection</h1>
      <p className="text-lg text-muted-foreground">
        Discover how Manifold Finance's MEV protection solutions safeguard your transactions.
      </p>

      <h2 className="text-2xl font-semibold mt-8">Protection Strategies</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Private mempool implementation</li>
        <li>Transaction bundling</li>
        <li>Slippage protection</li>
        <li>Frontrunning mitigation</li>
        <li>Sandwich attack prevention</li>
      </ul>

      <p className="mt-8">
        Our MEV protection solutions help ensure fair execution of your transactions and minimize
        value extraction.
      </p>
    </div>
  )
}
