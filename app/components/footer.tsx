import Link from "next/link"
import { GitHubLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons"
import { StatusBadge } from "./status-badge"

/*
const sitemapLinks = [
  { name: "For Validators", href: "/validators" },
  { name: "For Projects", href: "/projects" },
  { name: "For Restaking", href: "/restaking" },
  { name: "For Infrastructure", href: "/infrastructure" },
]
*/

export function Footer() {
  return (
    <footer className="bg-transparent py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="mb-4 md:mb-0">
            <nav>
              <ul className="flex flex-wrap justify-center md:justify-start space-x-4 md:space-x-6">
      {/*          {sitemapLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))
                }
             */} </ul>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/manifoldfinance"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <GitHubLogoIcon className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com/@foldfinance"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <TwitterLogoIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <StatusBadge />
          <div className="mt-4 md:mt-0 text-sm text-gray-400">
            © {new Date().getFullYear()} Manifold Finance. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
