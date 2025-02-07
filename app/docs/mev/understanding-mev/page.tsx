export default function UnderstandingMEVPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Understanding MEV</h1>
      <p className="text-lg text-muted-foreground">
        Learn about Miner Extractable Value (MEV) and its impact on the Ethereum ecosystem.
      </p>

      <h2 className="text-2xl font-semibold mt-8">Key Concepts</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>What is MEV?</li>
        <li>Types of MEV opportunities</li>
        <li>Impact on users and the network</li>
        <li>MEV extraction techniques</li>
        <li>Ethical considerations</li>
      </ul>

      <p className="mt-8">
        Understanding MEV is crucial for validators, traders, and DeFi users to navigate the
        Ethereum ecosystem effectively.
      </p>
    </div>
  )
}
