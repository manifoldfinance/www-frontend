export default function QuickStartPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Quick Start Guide</h1>
      <p className="text-lg text-muted-foreground">
        Get up and running with Manifold Finance in just a few minutes.
      </p>

      <h2 className="text-2xl font-semibold mt-8">Steps to Get Started</h2>
      <ol className="list-decimal list-inside space-y-4">
        <li>Sign up for a Manifold Finance account</li>
        <li>Set up your API keys</li>
        <li>Choose your preferred staking solution</li>
        <li>Configure your environment</li>
        <li>Deploy your first staking contract</li>
      </ol>

      <p className="mt-8">
        For more detailed information on each step, please refer to our comprehensive documentation.
      </p>
    </div>
  )
}
