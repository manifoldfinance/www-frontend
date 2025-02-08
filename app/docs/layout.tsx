"use client"
import { usePathname } from "next/navigation"
import { DocsSidebar } from "@/app/components/docs-sidebar"
import { Breadcrumb } from "@/app/components/breadcrumb"
import { ScrollArea } from "@/components/ui/scroll-area"
import { DocsNavigation } from "@/app/components/docs-navigation"
import type React from "react"

const docsPages = [
  { title: "Introduction", href: "/docs/getting-started/introduction" },
  { title: "Quick Start", href: "/docs/getting-started/quick-start" },
  { title: "Staking Overview", href: "/docs/staking/overview" },
  { title: "Validator Setup", href: "/docs/staking/validator-setup" },
  { title: "Understanding MEV", href: "/docs/mev/understanding-mev" },
  { title: "MEV Protection", href: "/docs/mev/mev-protection" },
  { title: "MEV Strategies", href: "/docs/mev/mev-strategies" },
  { title: "FAQ", href: "/docs/faq" },
]

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const currentPageIndex = docsPages.findIndex((page) => page.href === pathname)
  const prevPage = currentPageIndex > 0 ? docsPages[currentPageIndex - 1] : undefined
  const nextPage =
    currentPageIndex < docsPages.length - 1 ? docsPages[currentPageIndex + 1] : undefined

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="hidden lg:block w-64 shrink-0 border-r bg-background">
        <DocsSidebar />
      </div>

      {/* Main content */}
      <div className="flex-1">
        <ScrollArea className="h-full">
          <div className="container max-w-3xl mx-auto py-10 px-4">
            <Breadcrumb />
            {children}
            <DocsNavigation prevPage={prevPage} nextPage={nextPage} />
          </div>
        </ScrollArea>
      </div>
    </div>
  )
}
