import { BackgroundPaths } from "../components/background-paths";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ExternalLink, FileText, ShieldCheck, Zap } from "lucide-react";

export default function FoldTokenPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <BackgroundPaths
        title="FOLD Token|"
        subtitle="The ERC20 token powering Manifold Finance's ecosystem"
      />
      <main className="container mx-auto px-4 py-12">
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">What is FOLD?</h2>
          <p className="text-base sm:text-lg mb-4">
            FOLD is the native ERC20 token of the Manifold Finance ecosystem. It serves multiple
            purposes within our platform, including governance, staking, and accessing premium
            features.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">ERC20</Badge>
            <Badge variant="secondary">Governance</Badge>
            <Badge variant="secondary">Staking</Badge>
            <Badge variant="secondary">Utility</Badge>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Token Mechanics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="mr-2" /> Token Details
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    <strong>Name:</strong> FOLD Token
                  </li>
                  <li>
                    <strong>Symbol:</strong> FOLD
                  </li>
                  <li>
                    <strong>Decimals:</strong> 18
                  </li>
                  <li>
                    <strong>Total Supply:</strong> 100,000,000 FOLD
                  </li>
                  <li>
                    <strong>Contract Address:</strong> 0x123...abc (Ethereum Mainnet)
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="mr-2" /> Token Utility
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>Governance voting rights</li>
                  <li>Staking for network security</li>
                  <li>Access to premium features</li>
                  <li>Fee discounts on Manifold services</li>
                  <li>Participation in liquidity mining programs</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Token Distribution</h2>
          <p className="text-base sm:text-lg mb-4">
            The initial distribution of FOLD tokens is designed to ensure a fair launch and
            sustainable growth of the Manifold Finance ecosystem:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>40% - Community Treasury</li>
            <li>25% - Team and Advisors (vested over 4 years)</li>
            <li>20% - Liquidity Mining and Staking Rewards</li>
            <li>10% - Initial DEX Offering (IDO)</li>
            <li>5% - Ecosystem Development Fund</li>
          </ul>
          <p className="text-base sm:text-lg mb-4">
            This distribution ensures that a significant portion of tokens is allocated to the
            community and ecosystem growth, while also incentivizing long-term commitment from the
            team and early supporters.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Governance</h2>
          <p className="text-base sm:text-lg mb-4">
            FOLD token holders have the power to participate in the governance of the Manifold
            Finance protocol. This includes:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Proposing and voting on protocol upgrades</li>
            <li>Deciding on new feature implementations</li>
            <li>Adjusting protocol parameters</li>
            <li>Allocating resources from the Community Treasury</li>
          </ul>
          <p className="text-base sm:text-lg">
            The governance process is designed to be transparent and inclusive, ensuring that all
            token holders have a voice in the future direction of Manifold Finance.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Staking and Rewards</h2>
          <p className="text-base sm:text-lg mb-4">
            FOLD token holders can stake their tokens to earn rewards and contribute to the security
            of the Manifold Finance network. Staking benefits include:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Earning passive income through staking rewards</li>
            <li>Increased voting power in governance decisions</li>
            <li>Access to exclusive features and services</li>
            <li>Participation in network security and validation</li>
          </ul>
          <p className="text-base sm:text-lg">
            The staking mechanism is designed to encourage long-term holding and active
            participation in the ecosystem.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Token Security</h2>
          <div className="flex items-center space-x-2 mb-4">
            <ShieldCheck className="text-green-500" />
            <span className="text-base sm:text-lg font-semibold">Audited and Secure</span>
          </div>
          <p className="text-base sm:text-lg mb-4">
            The FOLD token smart contract has undergone rigorous security audits by leading
            blockchain security firms to ensure the safety of our users' funds and the integrity of
            the Manifold Finance ecosystem.
          </p>
          <Button asChild variant="outline">
            <Link href="/security" className="inline-flex items-center">
              View Security Audits <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </section>

        <section>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Get FOLD</h2>
          <p className="text-base sm:text-lg mb-4">
            FOLD tokens are available on several decentralized exchanges and can be earned through
            participation in Manifold Finance's services.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild variant="default">
              <Link href="/swap">Swap for FOLD</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/earn">Earn FOLD</Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
