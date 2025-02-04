"use client";

import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Breadcrumb() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  return (
    <nav
      aria-label="Breadcrumb"
      className="mb-6 flex items-center space-x-2 text-sm text-muted-foreground">
      <Link href="/" className="flex items-center hover:text-foreground">
        <Home className="h-4 w-4" />
      </Link>
      {segments.map((segment, index) => {
        const href = `/${segments.slice(0, index + 1).join("/")}`;
        const isLast = index === segments.length - 1;
        const title = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, " ");

        return (
          <div key={href} className="flex items-center">
            <ChevronRight className="h-4 w-4" />
            {isLast ? (
              <span className="ml-2 font-medium text-foreground">{title}</span>
            ) : (
              <Link href={href} className="ml-2 hover:text-foreground">
                {title}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
}
