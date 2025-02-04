import Link from "next/link";
import { Twitter, Github } from "lucide-react";
import { Logo } from "./logo";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";

// This would typically come from an environment variable or build-time constant
const GIT_VERSION_HASH = "a1b2c3d";

export function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col items-center md:items-start space-y-2">
            <Link href="/" className="text-lg font-semibold text-white">
              <Logo className="h-8 w-8" />
            </Link>
            <p className="text-sm text-gray-400 text-center md:text-left">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              href="https://twitter.com/manifoldfinance"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors">
              <Twitter className="w-5 h-5" />
            </Link>
            <Link
              href="https://github.com/manifoldfinance"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </Link>
          </div>
        </div>
        <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-800">
          <HoverCard>
            <HoverCardTrigger asChild>
              <div className="flex items-center space-x-2 cursor-pointer">
                <div className="h-2 w-2 rounded-full bg-[#b8faf6]" />
                <span className="text-sm text-muted-foreground">Operational</span>
              </div>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="flex justify-between space-x-4">
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">System Status</h4>
                  <p className="text-sm">All systems are operational.</p>
                  <div className="flex items-center pt-2">
                    <span className="text-xs text-muted-foreground">
                      Last checked: {new Date().toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
          <span className="text-xs text-gray-500">Version: {GIT_VERSION_HASH}</span>
        </div>
      </div>
    </footer>
  );
}
