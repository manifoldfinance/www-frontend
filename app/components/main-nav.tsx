"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
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
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

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
    <>
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="text-white">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] bg-black text-white">
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
      <div className="hidden md:block">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {solutions.map((item) => (
                    <ListItem key={item.title} title={item.title} href={item.href}>
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Products</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {products.map((item) => (
                    <ListItem key={item.title} title={item.title} href={item.href}>
                      {item.description}
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
            <NavigationMenuItem>
              <Link href="/blog" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Blog
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </>
  );
}

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
        <Icons.chevronDown className={cn("h-4 w-4 transition-transform", isOpen && "rotate-180")} />
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
