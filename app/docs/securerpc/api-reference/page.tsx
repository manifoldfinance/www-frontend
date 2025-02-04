export default function ApiReferencePage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">API Reference</h1>
      <p className="text-lg text-muted-foreground">
        Complete reference documentation for the Manifold Finance SecureRPC API.
      </p>

      <div className="space-y-8">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Authentication</h2>
          <p>
            All API endpoints require authentication using your API key. Include your API key in the
            request headers:
          </p>
          <pre className="rounded-lg bg-muted p-4">
            <code>{"X-API-Key: your_api_key"}</code>
          </pre>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Base URL</h2>
          <p>The base URL for all API endpoints is:</p>
          <pre className="rounded-lg bg-muted p-4">
            <code>https://api.manifoldfinance.com/v1</code>
          </pre>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Endpoints</h2>

          <div className="rounded-lg border p-4">
            <h3 className="text-xl font-semibold">GET /status</h3>
            <p className="text-muted-foreground mt-2">
              Get the current status of the SecureRPC service.
            </p>
            <pre className="rounded-lg bg-muted p-4 mt-4">
              <code>{`curl -X GET "https://api.manifoldfinance.com/v1/status" \\
  -H "X-API-Key: your_api_key"`}</code>
            </pre>
          </div>

          <div className="rounded-lg border p-4">
            <h3 className="text-xl font-semibold">POST /eth/call</h3>
            <p className="text-muted-foreground mt-2">Make an Ethereum JSON-RPC call.</p>
            <pre className="rounded-lg bg-muted p-4 mt-4">
              <code>{`curl -X POST "https://api.manifoldfinance.com/v1/eth/call" \\
  -H "X-API-Key: your_api_key" \\
  -H "Content-Type: application/json" \\
  -d '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":1}'`}</code>
            </pre>
          </div>
        </section>
      </div>
    </div>
  );
}
