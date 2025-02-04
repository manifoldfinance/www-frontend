import { cn } from "@/lib/utils";

type StatusIndicatorProps = {
  status: "operational" | "degraded" | "outage";
};

export function StatusIndicator({ status }: StatusIndicatorProps) {
  return (
    <div className="flex items-center space-x-2">
      <div
        className={cn(
          "h-2 w-2 rounded-full",
          status === "operational" && "bg-green-500",
          status === "degraded" && "bg-yellow-500",
          status === "outage" && "bg-red-500",
        )}
      />
      <span className="text-sm text-muted-foreground capitalize">{status}</span>
    </div>
  );
}
