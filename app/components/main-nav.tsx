"use client"

import type * as React from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

import { cn } from "@/lib/utils"
import { Logo } from "@/app/components/logo"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"
import { ScrollArea } from "@/components/ui/scroll-area"

const solutions: { title: string; href: string; description: string }[] = [
  {
    title: "High-Performance Staking",
    href: "/solutions/staking",
    description: "Build and manage efficient staking solutions for maximum returns.",
  },
  {
    title: "Native Restaking",
    href: "/solutions/restaking",
    description: "Leverage restaking protocols while ensuring top-notch security.",
  },
  {
    title: "MEV Optimization",
    href: "/solutions/mev",
    description: "Maximize MEV earnings with our advanced strategies and tools.",
  },
  {
    title: "MEV Protection+Relay",
    href: "/solutions/mev-relay-protect",
    description: "Advanced MEV protection and transaction privacy for Ethereum.",
  },
]

const products: { title: string; href: string; description: string }[] = [
  {
    title: "FOLD Staking",
    href: "/products/fold-staking",
    description: "Stake your FOLD tokens and earn rewards.",
  },
  {
    title: "SecureRPC",
    href: "https://securerpc.com",
    description: "",
  },
  {
    title: "XGA",
    href: "https://xga.com",
    description: "Cross-chain Governance Aggregator for decentralized decision-making.",
  },
  {
    title: "mevETH",
    href: "/products/meveth",
    description: "Maximized MEV rewards for Ethereum staking.",
  },
]

export function MainNav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-black text-white">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Logo className="h-6 w-6" />
          <span className="hidden font-bold sm:inline-block">Manifold Finance</span>
        </Link>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {solutions.map((item) => (
                        <li key={item.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={item.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">{item.title}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {item.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {products.map((item) => (
                        <li key={item.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={item.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">{item.title}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {item.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/docs" legacyBehavior passHref>
                    <NavigationMenuLink>Documentation</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/blog" legacyBehavior passHref>
                    <NavigationMenuLink>Blog</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
        </div>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0">
              <MobileLink href="/" className="flex items-center" onOpenChange={() => {}}>
                <Logo className="mr-2 h-4 w-4" />
                <span className="font-bold">Manifold Finance</span>
              </MobileLink>
              <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
                <div className="flex flex-col space-y-3">
                  {solutions.map(
                    (item) =>
                      item.href && (
                        <MobileLink key={item.href} href={item.href} onOpenChange={() => {}}>
                          {item.title}
                        </MobileLink>
                      ),
                  )}
                </div>
                <div className="flex flex-col space-y-2">
                  {products.map(
                    (item) =>
                      item.href && (
                        <MobileLink key={item.href} href={item.href} onOpenChange={() => {}}>
                          {item.title}
                        </MobileLink>
                      ),
                  )}
                </div>
              </ScrollArea>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

interface MobileLinkProps extends React.PropsWithChildren {
  href: string
  onOpenChange?: (open: boolean) => void
  className?: string
}

function MobileLink({ href, onOpenChange, className, children, ...props }: MobileLinkProps) {
  return (
    <Link
      href={href}
      onClick={() => {
        onOpenChange?.(false)
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </Link>
  )
}
