import { BackgroundPaths } from "./components/background-paths"
import { HomepageFooter } from "./components/homepage-footer"

export default function Page() {
  return (
    <div className="min-h-screen text-white flex flex-col">
      <main className="flex-grow flex flex-col justify-center">
        <BackgroundPaths
          title="Manifold Finance"
          subtitle="Powering markets across networks"
          primaryCta={{
            href: "/solutions/mev-relay-protect",
            text: "MEV Protection as a Service",
            variant: "default",
            className: "bg-[#31C4B9] hover:bg-[#31C4B9]/90 text-black",
          }}
          secondaryCta={{
            href: "https://noteforms.com/forms/dacf20c5-d93b-4552-8748-5deab183901f-1",
            text: "Contact →",
            variant: "outline",
            className: "border-white/10 hover:bg-white/5",
          }}
        />
      </main>
      <div className="mt-auto">
        <HomepageFooter />
      </div>
    </div>
  )
}
