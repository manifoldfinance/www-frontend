"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { CaretDownIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { Logo } from "@/app/components/logo";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";

const solutions: { title: string; href: string; description: string }[] = [
  {
    title: "Hedging and Execution",
    href: "/solutions/hedging-execution",
    description: "Optimize your trading strategies with advanced hedging and execution tools.",
  },
  {
    title: "MEV Relay and Protection",
    href: "/solutions/mev-relay-protection",
    description: "Safeguard your transactions and maximize value with our MEV protection services.",
  },
  {
    title: "AVS Operations",
    href: "/solutions/avs-operations",
    description: "Streamline your Autonomous Validation System operations for enhanced efficiency.",
  },
  {
    title: "Relay+ Protect",
    href: "/solutions/relay-protect",
    description: "Advanced MEV protection and transaction privacy for Ethereum.",
  },
];

const products: { title: string; href: string; description: string }[] = [
  ...solutions,
  {
    title: "Captive Insurance",
    href: "/products/captive-insurance",
    description: "Tailored insurance solutions for blockchain and DeFi projects.",
  },
  {
    title: "FOLD Token",
    href: "/fold-token",
    description: "Learn about our native ERC20 token powering the Manifold Finance ecosystem.",
  },
];

export function MainNav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-[#1616b4] text-white">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Logo className="h-6 w-6" />
          <span className="hidden font-bold sm:inline-block">Manifold Finance</span>
        </Link>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Menubar className="bg-transparent border-none">
              <MenubarMenu>
                <MenubarTrigger className="text-white hover:bg-[#c9b3f5] hover:bg-opacity-20">
                  Solutions
                </MenubarTrigger>
                <MenubarContent className="bg-[#1616b4]">
                  {solutions.map((item) => (
                    <MenubarItem
                      key={item.href}
                      className="text-white hover:bg-[#c9b3f5] hover:bg-opacity-20">
                      <Link href={item.href}>{item.title}</Link>
                    </MenubarItem>
                  ))}
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger className="text-white hover:bg-[#c9b3f5] hover:bg-opacity-20">
                  Products
                </MenubarTrigger>
                <MenubarContent className="bg-[#1616b4]">
                  {products.map((item) => (
                    <MenubarItem
                      key={item.href}
                      className="text-white hover:bg-[#c9b3f5] hover:bg-opacity-20">
                      <Link href={item.href}>{item.title}</Link>
                    </MenubarItem>
                  ))}
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger className="text-white hover:bg-[#c9b3f5] hover:bg-opacity-20">
                  <Link href="/docs">Documentation</Link>
                </MenubarTrigger>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger className="text-white hover:bg-[#c9b3f5] hover:bg-opacity-20">
                  <Link href="/blog">Blog</Link>
                </MenubarTrigger>
              </MenubarMenu>
            </Menubar>
          </nav>
        </div>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] bg-[#1616b4] text-white">
              <nav className="flex flex-col space-y-4">
                <Link href="/" className="text-lg font-semibold">
                  Manifold Finance
                </Link>
                <MobileNavItem title="Solutions" items={solutions} />
                <MobileNavItem title="Products" items={products} />
                <Link href="/docs" className="py-2">
                  Documentation
                </Link>
                <Link href="/blog" className="py-2">
                  Blog
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

function MobileNavItem({
  title,
  items,
}: { title: string; items: { title: string; href: string }[] }) {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-2 text-left">
        {title}
        <CaretDownIcon className={cn("h-4 w-4 transition-transform", isOpen && "rotate-180")} />
      </button>
      {isOpen && (
        <div className="pl-4 space-y-2">
          {items.map((item) => (
            <Link key={item.href} href={item.href} className="block py-2">
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
