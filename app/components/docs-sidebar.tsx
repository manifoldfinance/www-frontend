"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface DocLink {
  title: string;
  href: string;
  items?: { title: string; href: string }[];
}

const docs: DocLink[] = [
  {
    title: "Getting Started",
    href: "/docs/getting-started",
    items: [
      { title: "Introduction", href: "/docs/getting-started/introduction" },
      { title: "Installation", href: "/docs/getting-started/installation" },
      { title: "Quick Start", href: "/docs/getting-started/quick-start" },
    ],
  },
  {
    title: "Staking",
    href: "/docs/staking",
    items: [
      { title: "Overview", href: "/docs/staking/overview" },
      { title: "Validator Setup", href: "/docs/staking/validator-setup" },
      { title: "Advanced Configuration", href: "/docs/staking/advanced-configuration" },
    ],
  },
  {
    title: "MEV",
    href: "/docs/mev",
    items: [
      { title: "Understanding MEV", href: "/docs/mev/understanding-mev" },
      { title: "MEV Protection", href: "/docs/mev/mev-protection" },
      { title: "MEV Strategies", href: "/docs/mev/mev-strategies" },
    ],
  },
  {
    title: "SecureRPC",
    href: "/docs/securerpc",
    items: [
      { title: "API Reference", href: "/docs/securerpc/api-reference" },
      { title: "Authentication", href: "/docs/securerpc/authentication" },
      { title: "Rate Limiting", href: "/docs/securerpc/rate-limiting" },
    ],
  },
  {
    title: "FAQ",
    href: "/docs/faq",
  },
];

export function DocsSidebar() {
  const pathname = usePathname();

  return (
    <ScrollArea className="h-full py-6 pl-4">
      <div className="space-y-4">
        <div className="py-2">
          <h2 className="mb-2 text-lg font-semibold tracking-tight">Documentation</h2>
          <div className="space-y-1">
            {docs.map((section) => (
              <div key={section.href} className="space-y-1">
                <Link
                  href={section.href}
                  className={cn(
                    "block py-1 text-sm font-medium",
                    pathname === section.href
                      ? "text-primary font-semibold"
                      : "text-muted-foreground hover:text-primary",
                  )}>
                  {section.title}
                </Link>
                {section.items?.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "block py-1 text-sm ml-4",
                      pathname === item.href
                        ? "text-primary font-medium"
                        : "text-muted-foreground hover:text-primary",
                    )}>
                    {item.title}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </ScrollArea>
  );
}
