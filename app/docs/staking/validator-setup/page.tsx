export default function ValidatorSetupPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Validator Setup Guide</h1>
      <p className="text-lg text-muted-foreground">
        Learn how to set up and configure your Ethereum validator using Manifold Finance's tools.
      </p>

      <h2 className="text-2xl font-semibold mt-8">Setup Process</h2>
      <ol className="list-decimal list-inside space-y-4">
        <li>Prepare your hardware</li>
        <li>Install the Manifold Finance validator software</li>
        <li>Generate your validator keys</li>
        <li>Configure your validator</li>
        <li>Deposit your stake</li>
        <li>Start your validator</li>
      </ol>

      <p className="mt-8">
        For detailed instructions on each step, please refer to our comprehensive setup guide.
      </p>
    </div>
  )
}
