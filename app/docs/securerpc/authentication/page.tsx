export default function AuthenticationPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">SecureRPC Authentication</h1>
      <p className="text-lg text-muted-foreground">
        Learn how to authenticate your requests to Manifold Finance's SecureRPC service.
      </p>

      <h2 className="text-2xl font-semibold mt-8">Authentication Methods</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>API Key Authentication</li>
        <li>JWT Token Authentication</li>
        <li>OAuth 2.0</li>
      </ul>

      <p className="mt-8">
        Proper authentication is crucial for securing your RPC calls and ensuring authorized access
        to Manifold Finance's services.
      </p>
    </div>
  )
}
