import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function DocsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Documentation</h1>
      <p className="text-muted-foreground text-lg">
        Welcome to the Manifold Finance documentation. This guide is under construction, so feel
        free to ask questions on our...  <br/>
        <a href="https://forums.manifoldfinance.com">Forums</a>
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Getting Started</CardTitle>
            <CardDescription>
              Learn the basics of Ethereum and Web3 to get started with our solutions.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link
              href="/docs/getting-started/introduction"
              className="text-primary hover:underline inline-flex items-center"
            >
              Read more <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>API Reference</CardTitle>
            <CardDescription>
              Detailed documentation for our SecureRPC API endpoints and features.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link
              href="https://securerpc.com"
              className="text-primary hover:underline inline-flex items-center"
            >
              Read more <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Staking</CardTitle>
            <CardDescription>
              Learn about our high-yield liquid ethereum staking solutions and how to maximize your returns.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link
              href="/docs/staking/overview"
              className="text-primary hover:underline inline-flex items-center"
            >
              Read more <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>FAQ</CardTitle>
            <CardDescription>
              Find answers to frequently asked questions about Manifold Finance and our services.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link
              href="/docs/faq"
              className="text-primary hover:underline inline-flex items-center"
            >
              Read more <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
