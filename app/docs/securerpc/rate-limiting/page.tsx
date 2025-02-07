export default function RateLimitingPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">SecureRPC Rate Limiting</h1>
      <p className="text-lg text-muted-foreground">
        Understand the rate limiting policies for Manifold Finance's SecureRPC service.
      </p>

      <h2 className="text-2xl font-semibold mt-8">Rate Limiting Details</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Request limits per second</li>
        <li>Burst allowances</li>
        <li>Handling rate limit errors</li>
        <li>Upgrading your plan for higher limits</li>
      </ul>

      <p className="mt-8">
        Familiarize yourself with our rate limiting policies to ensure uninterrupted service for
        your applications.
      </p>
    </div>
  )
}
