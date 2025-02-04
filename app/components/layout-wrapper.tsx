"use client";

import { usePathname } from "next/navigation";
import type React from "react"; // Added import for React
import { Footer } from "./footer";

interface LayoutWrapperProps {
  children: React.ReactNode;
}

export function LayoutWrapper({ children }: LayoutWrapperProps) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <>
      {children}
      {!isHomePage && <Footer />}
    </>
  );
}
