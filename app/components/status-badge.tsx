import { CheckCircledIcon } from "@radix-ui/react-icons"

export function StatusBadge() {
  return (
    <div className="flex items-center space-x-2">
      <CheckCircledIcon className="w-4 h-4 text-green-500" />
      <span className="text-sm text-gray-400">All systems operational</span>
    </div>
  )
}
