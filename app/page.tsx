import { BackgroundPaths } from "./components/background-paths"

export default function Page() {
  return (
    <div className="min-h-screen bg-[#141414] text-white flex flex-col">
      <main className="flex-grow">
        <BackgroundPaths
          title="Manifold Finance|"
          subtitle="Optimized Infrastructure for the Next Generation of Ethereum"
          primaryCta={{
            href: "/get-started",
            text: "Get Started",
            variant: "default",
            className: "bg-[#31C4B9] hover:bg-[#31C4B9]/90 text-black",
          }}
          secondaryCta={{
            href: "/solutions",
            text: "Explore Solutions",
            variant: "outline",
            className: "border-white/10 hover:bg-white/5",
          }}
        />
      </main>
    </div>
  )
}

