import Link from "next/link"
import { Button } from "@/components/ui/button"
import { LoadingAnimation } from "@/app/components/loading-animation"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-green-500 font-mono flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-black border-2 border-green-500 p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-4">ERROR 404</h1>
        <div className="mb-6 text-xl">
          <p>
            LOADING GAME WORLD
            <LoadingAnimation />
          </p>
          <p className="mt-2">WORLD "PAGE" NOT FOUND</p>
        </div>
        <div className="space-y-4 text-sm">
          <p>{">"} CHECKING ALTERNATIVE ROUTES</p>
          <p>{">"} RECALIBRATING NAVIGATION SYSTEM</p>
          <p>{">"} INITIATING EMERGENCY PROTOCOL</p>
        </div>
        <div className="mt-8 flex justify-between items-center">
          <p className="text-xs">PRESS START TO RETURN TO MAIN MENU</p>
          <Button
            asChild
            variant="outline"
            className="bg-black text-green-500 border-green-500 hover:bg-green-500 hover:text-black"
          >
            <Link href="/">START</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
