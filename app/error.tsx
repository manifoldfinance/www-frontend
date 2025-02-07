"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { EVMCodeDisplay } from "@/app/components/evm-code-display"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-black text-green-500 font-mono flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-gray-900 border-2 border-green-500 p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4">EVM EXECUTION ERROR</h1>
        <div className="mb-6 text-xl">
          <p>SMART CONTRACT EXECUTION FAILED</p>
          <p className="mt-2">
            ERROR CODE: 0x
            {Math.floor(Math.random() * 16777215)
              .toString(16)
              .toUpperCase()
              .padStart(6, "0")}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-2">STACK TRACE:</h2>
            <EVMCodeDisplay />
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">ERROR DETAILS:</h2>
            <p className="text-sm mb-2">Message: {error.message}</p>
            <p className="text-sm mb-2">Name: {error.name}</p>
            {error.digest && <p className="text-sm mb-2">Digest: {error.digest}</p>}
            <div className="mt-4">
              <p className="text-sm mb-2">{">"} ATTEMPTING TO REVERT TRANSACTION</p>
              <p className="text-sm mb-2">{">"} ROLLING BACK CHANGES</p>
              <p className="text-sm mb-2">{">"} RESETTING EVM STATE</p>
            </div>
          </div>
        </div>
        <div className="mt-8 flex justify-between items-center">
          <p className="text-xs">PRESS RESET TO ATTEMPT REEXECUTION</p>
          <Button
            onClick={() => reset()}
            variant="gameStyle"
            className="bg-black text-green-500 border-green-500 hover:bg-green-500 hover:text-black"
          >
            RESET
          </Button>
        </div>
      </div>
    </div>
  )
}
