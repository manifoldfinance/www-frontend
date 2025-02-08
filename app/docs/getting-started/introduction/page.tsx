import { DocsNavigation } from "@/app/components/docs-navigation"

export default function IntroductionPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Introduction</h1>
      <p className="text-lg text-muted-foreground">
        Manifold Finance provides Powering Markets across Networks, offering high-performance
        staking, MEV optimization, and enterprise-grade SecureRPC.
      </p>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">What is Manifold Finance?</h2>
        <p>
          Manifold Finance is a comprehensive suite of tools and services designed to optimize your
          Ethereum infrastructure. Our platform helps you maximize returns through efficient
          staking, MEV optimization, and secure RPC endpoints.
        </p>

        <h3 className="text-xl font-semibold">Key Features</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>High-performance staking solutions</li>
          <li>MEV optimization and protection</li>
          <li>Enterprise-grade SecureRPC</li>
          <li>Advanced analytics and monitoring</li>
        </ul>
      </div>
      <DocsNavigation
        nextPage={{ title: "Installation", href: "/docs/getting-started/installation" }}
      />
    </div>
  )
}
