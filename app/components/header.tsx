"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Logo } from "@/app/components/logo";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const solutions: { title: string; href: string; description: string }[] = [
  {
    title: "High-Performance Staking",
    href: "/solutions/staking",
    description: "Build and manage efficient staking solutions for maximum returns.",
  },
  {
    title: "Secure Restaking",
    href: "/solutions/restaking",
    description: "Leverage restaking protocols while ensuring top-notch security.",
  },
  {
    title: "MEV Optimization",
    href: "/solutions/mev",
    description: "Maximize MEV earnings with our advanced strategies and tools.",
  },
  {
    title: "Enterprise SecureRPC",
    href: "/solutions/securerpc",
    description: "Stable and reliable blockchain interactions for your applications.",
  },
];

const products: { title: string; href: string; description: string }[] = [
  {
    title: "FOLD Staking",
    href: "/products/fold-staking",
    description: "Stake your FOLD tokens and earn rewards.",
  },
  {
    title: "SecureRPC",
    href: "/products/securerpc",
    description: "Enterprise-grade RPC service for secure blockchain interactions.",
  },
  {
    title: "XGA",
    href: "/products/xga",
    description: "Cross-chain Governance Aggregator for decentralized decision-making.",
  },
  {
    title: "mevETH",
    href: "/products/meveth",
    description: "Maximized MEV rewards for Ethereum staking.",
  },
];

const resources: { title: string; href: string; description: string }[] = [
  {
    title: "Documentation",
    href: "/docs",
    description: "Learn how to integrate and leverage our solutions effectively.",
  },
  {
    title: "Blog",
    href: "/blog",
    description: "Insights and updates from the Manifold Finance team.",
  },
  {
    title: "Changelog",
    href: "/changelog",
    description: "Stay up to date with our latest features and improvements.",
  },
  {
    title: "Support",
    href: "/support",
    description: "Get help from our team and community.",
  },
];

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className,
            )}
            {...props}>
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  },
);
ListItem.displayName = "ListItem";

function MobileMenu() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="md:hidden">
      <Button variant="ghost" size="sm" className="text-base" onClick={() => setIsOpen(!isOpen)}>
        <Menu className="h-5 w-5" />
      </Button>
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-background border-b border-border p-4">
          <nav className="flex flex-col space-y-4">
            <Link href="/solutions" className="text-sm font-medium">
              Solutions
            </Link>
            <Link href="/products" className="text-sm font-medium">
              Products
            </Link>
            <Link href="/docs" className="text-sm font-medium">
              Documentation
            </Link>
            <Link href="/blog" className="text-sm font-medium">
              Blog
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}

export function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-background border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center">
            <Logo className="h-8 w-8 md:h-10 md:w-10" />
          </Link>
          <div className="flex items-center space-x-4">
            <NavigationMenu className="hidden md:block">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-foreground">
                    Solutions
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid grid-cols-[1fr_2fr] w-[600px]">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex flex-col justify-between h-full select-none rounded-l-md bg-gradient-to-br from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/solutions/staking">
                          <div>
                            <Image
                              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ethereum2_Logo-G7XZRKQfQ3ujqhgs1ZKjTpoe3zVqab.png"
                              alt="Ethereum Logo"
                              width={38}
                              height={38}
                              className="mb-3"
                            />
                            <div className="text-lg font-medium text-foreground mb-2">
                              High-Performance Staking
                            </div>
                            <p className="text-sm text-muted-foreground">
                              Build and manage efficient staking solutions for maximum returns.
                            </p>
                          </div>
                          <div className="text-sm font-medium text-primary mt-4">Learn more →</div>
                        </a>
                      </NavigationMenuLink>
                      <ul className="grid gap-3 p-6 bg-background rounded-r-md">
                        {solutions.map((solution) => (
                          <ListItem
                            key={solution.title}
                            title={solution.title}
                            href={solution.href}>
                            {solution.description}
                          </ListItem>
                        ))}
                      </ul>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-foreground">
                    Products
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {products.map((product) => (
                        <ListItem key={product.title} title={product.title} href={product.href}>
                          {product.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-foreground">
                    Resources
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {resources.map((resource) => (
                        <ListItem key={resource.title} title={resource.title} href={resource.href}>
                          {resource.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/docs" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Documentation
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
