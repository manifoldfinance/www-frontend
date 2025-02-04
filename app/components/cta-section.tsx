import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="bg-blackA3 py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0 md:mr-8 max-w-2xl">
            <h2 className="text-3xl font-bold mb-4 text-white">
              Ready to optimize your Ethereum infrastructure?
            </h2>
            <p className="text-lg text-mauveA11">
              Join thousands of validators leveraging Manifold's ecosystem for high-performance
              staking, MEV optimization, and secure blockchain interactions.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              variant="default"
              className="bg-green9 hover:bg-green10 text-white rounded-full px-6 h-12">
              <Link href="/get-started" className="flex items-center gap-2">
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
