import Link from "next/link"
import { ArrowRight } from "lucide-react"
export default function FAQPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Frequently Asked Questions</h1>
      <p className="text-lg text-muted-foreground">
        Find answers to common questions about Manifold Finance's products and services.
      </p>

      <h2 className="text-2xl font-semibold mt-8">General Questions</h2>
      <ul className="list-disc list-inside space-y-4">
        <li>
          <strong>What is Manifold Finance?</strong>
          <p className="mt-2">
            Manifold Finance is a suite of optimized infrastructure solutions for Ethereum, offering
            high-performance staking, MEV optimization, and enterprise-grade SecureRPC services.
          </p>
        </li>
        <li>
          <strong>How do I get started with SecureRPC?</strong>
          <p className="mt-2">
            Visit{" "}
            <Link href="https://securerpc.com">
              SecureRPC <ArrowRight></ArrowRight>
            </Link>{" "}
            to get started.
          </p>
        </li>
        <li>
          <strong>What are the benefits of using Manifold Finance's staking solutions?</strong>
          <p className="mt-2">
            Our staking solutions offer optimized validator performance, MEV-boost integration,
            advanced slashing protection, and automated reward distribution, helping you maximize
            your staking returns.
          </p>
        </li>
      </ul>

      <p className="mt-8">
        If you can't find the answer to your question here, please contact our support team for
        assistance.
      </p>
    </div>
  )
}
