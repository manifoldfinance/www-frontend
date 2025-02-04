"use client";

import * as React from "react";
import Link from "next/link";
import { Logo } from "@/app/components/logo";
import { StatusIndicator } from "@/app/components/status-indicator";
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

const products: { title: string; href: string; description: string }[] = [
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
        <NavigationMenuLink
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}>
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
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
          {/* Add mobile menu items here */}
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
            <span className="ml-2 text-lg font-semibold hidden sm:inline">Manifold Finance</span>
          </Link>
          <div className="flex items-center space-x-4">
            <NavigationMenu className="hidden md:block">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-foreground">
                    Products
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid grid-cols-[1fr_2fr] w-[600px]">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex flex-col justify-between h-full select-none rounded-l-md bg-gradient-to-br from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/solutions/mev">
                          <div>
                            <svg
                              aria-hidden
                              width="38"
                              height="38"
                              viewBox="0 0 25 25"
                              fill="currentColor"
                              className="h-6 w-6 text-primary mb-3">
                              <path d="M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z"></path>
                              <path d="M12 0H4V8H12V0Z"></path>
                              <path d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z"></path>
                            </svg>
                            <div className="text-lg font-medium text-foreground mb-2">
                              MEV Optimization
                            </div>
                            <p className="text-sm text-muted-foreground">
                              Maximize MEV earnings with our advanced strategies and tools.
                            </p>
                          </div>
                          <div className="text-sm font-medium text-primary mt-4">Learn more →</div>
                        </a>
                      </NavigationMenuLink>
                      <ul className="grid gap-3 p-6 bg-background rounded-r-md">
                        {products.map((product) => (
                          <ListItem key={product.title} title={product.title} href={product.href}>
                            {product.description}
                          </ListItem>
                        ))}
                      </ul>
                    </div>
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
            <StatusIndicator status="operational" className="hidden sm:flex" />
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
