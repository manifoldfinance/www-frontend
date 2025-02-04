import { DocsSidebar } from "@/app/components/docs-sidebar"
import { Breadcrumb } from "@/app/components/breadcrumb"
import { ScrollArea } from "@/components/ui/scroll-area"
import type React from "react" // Added import for React

export default function DocsLayout({ children }: { children: React.ReactNode }) {
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
          </div>
        </ScrollArea>
      </div>
    </div>
  )
}

