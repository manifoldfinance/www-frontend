import { Space_Grotesk, Noto_Sans } from "next/font/google"
import ErrorBoundary from "./components/error-boundary"
import "./globals.css"
import type { Metadata } from "next"
import { CommandMenu } from "./components/command-menu"
import { Header } from "./components/header"
import type React from "react"
import { LayoutWrapper } from "./components/layout-wrapper"
import { Analytics } from "@vercel/analytics/react"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-noto-sans",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://manifoldfinance.com"),
  title: {
    default: "Manifold Finance - Powering Markets across Networks",
    template: "%s | Manifold Finance",
  },
  description: "Powering Markets across Networks",
  keywords: [
    "Manifold Finance",
    "Ethereum",
    "Staking",
    "MEV",
    "SecureRPC",
    "Blockchain Infrastructure",
  ],
  authors: [{ name: "Manifold Finance" }],
  creator: "Manifold Finance",
  publisher: "Manifold Finance",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://manifoldfinance.com",
    siteName: "Manifold Finance",
    title: "Manifold Finance - Powering Markets across Networks",
    description: "Unifying networks and markets together",
    images: [
      {
        url: "https://manifoldfinance.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Manifold Finance - Optimized Ethereum Infrastructure",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Manifold Finance - Powering Markets across Networks",
    description: "Unifying networks and markets together",
    images: ["https://manifoldfinance.com/og-image.jpg"],
    creator: "@manifoldfinance",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "https://manifoldfinance.com/site.webmanifest",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  //const pathname = usePathname()
  //const isHomePage = pathname === "/"

  return (
    <html lang="en" className={`dark ${spaceGrotesk.variable} ${notoSans.variable}`}>
      <body
        className={`min-h-screen bg-background text-foreground flex flex-col ${notoSans.className}`}
      >
        <ErrorBoundary>
          <Header />
          <LayoutWrapper>
            <main className="flex-grow pt-20">{children}</main>
          </LayoutWrapper>
          <CommandMenu />
          <Analytics />
        </ErrorBoundary>
      </body>
    </html>
  )
}
