"use client"

import * as React from "react"
import Link from "next/link"
import { Logo } from "@/app/components/logo"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { HamburgerMenuIcon } from "@radix-ui/react-icons"

const solutions: { title: string; href: string; description: string }[] = [
  {
    title: "High-Performance Staking",
    href: "/solutions/staking",
    description: "+4.7% APY makes us the most efficient staking solution for maximum returns.",
  },
  {
    title: "Secure Restaking",
    href: "/solutions/restaking",
    description: "Leverage restaking protocols while ensuring zero loss to capital.",
  },
  {
    title: "MEV Optimization",
    href: "/solutions/mev",
    description: "Maximize MEV earnings with our advanced integrations and tools.",
  },
  {
    title: "Relay + Protect",
    href: "/solutions/mev-relay-protect",
    description: "Prevent MEV extraction for any protocol/transaction seamlessly.",
  },
]

const products: { title: string; href: string; description: string }[] = [
  {
    title: "FOLD Token",
    href: "/products/fold-staking",
    description: "Stake your FOLD tokens and earn rewards.",
  },
  {
    title: "SecureRPC",
    href: "https://securerpc.com",
    description: "Censorship resistant RPC service for uncompromised blockchain access.",
  },
  {
    title: "XGA",
    href: "https://xga.com",
    description: "eXtensible Gas Auctions",
  },
  {
    title: "mevETH",
    href: "/products/meveth",
    description: "Maximized MEV rewards for Ethereum staking.",
  },
]

const resources: { title: string; href: string; description: string }[] = [
  {
    title: "Blog",
    href: "/blog",
    description: "Insights and updates from the Manifold Finance team.",
  },
  {
    title: "Telegram",
    href: "https://t.me/manifoldfinance",
    description:
      "Join our community and stay up to date with our latest features and improvements.",
  },
  {
    title: "GitHub",
    href: "https://github.com/manifoldfinance",
    description: "Contribute to our open source projects.",
  },
  {
    title: "Forums",
    href: "https://forums.manifoldfinance.com",
    description: "Join the community discussion and get help from other users.",
  },
]

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
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"

/**
 * Mobile menu for the header
 * @returns
 *
 *
 *
 */
function MobileMenu() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div className="md:hidden">
      <Button variant="ghost" size="sm" className="text-base" onClick={() => setIsOpen(!isOpen)}>
        <HamburgerMenuIcon className="h-5 w-5" />
      </Button>
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-background border-b border-border p-4">
          <nav className="flex flex-col space-y-4">
            <Link href="/solutions/staking" className="text-sm font-medium">
              Staking
            </Link>
            <Link href="/products/overview" className="text-sm font-medium">
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
  )
}

/**
 *
 *
 * Desktop menu for the header
 * @returns
 *
 *
 */
export function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-background border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center">
            <Logo />
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
                          href="/solutions/staking"
                        >
                          <div>
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
                            href={solution.href}
                          >
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
  )
}
