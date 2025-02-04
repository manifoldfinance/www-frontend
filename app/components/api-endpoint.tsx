import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function APIEndpoint() {
  return (
    <div className="bg-blackA3 rounded-lg p-6">
      <h3 className="text-xl font-semibold mb-4 text-white">Try Our SecureRPC API</h3>
      <div className="flex items-center space-x-2">
        <Input
          type="text"
          placeholder="https://api.manifoldfinance.com/v1/endpoint"
          className="flex-grow bg-blackA5 text-white"
          readOnly
        />
        <Button variant="outline" className="bg-blackA12 text-white hover:bg-blackA11">
          Copy
        </Button>
      </div>
      <p className="mt-4 text-sm text-mauveA11">
        Get started with our SecureRPC API for reliable and secure blockchain interactions.
      </p>
    </div>
  )
}

