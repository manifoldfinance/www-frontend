import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ArrowRight } from "lucide-react"
import Link from "next/link"

interface ChangelogEntry {
  date: string
  version: string
  platform: string
  title: string
  type: "public" | "beta" | "alpha"
  changes: string[]
  previousRelease?: {
    date: string
    version: string
    platform: string
    type: "public" | "beta" | "alpha"
  }
  nextRelease?: {
    date: string
    version: string
    platform: string
    type: "public" | "beta" | "alpha"
  }
}

const changelog: ChangelogEntry = {
  date: "January 31, 2025",
  version: "1.8.4",
  platform: "Desktop",
  title: "No longer broken",
  type: "public",
  changes: [
    "Fixed bug where pressing Enter inside a blockquote would not continue the blockquote onto the next line.",
    "Fixed bug where Canvas preview image would sometimes fail to display.",
    "Fixed bug causing some plugins to not focus the correct tab when they open a file.",
  ],
  previousRelease: {
    date: "January 30, 2025",
    version: "1.8",
    platform: "Mobile",
    type: "public",
  },
  nextRelease: {
    date: "January 31, 2025",
    version: "1.8.4",
    platform: "Mobile",
    type: "public",
  },
}

function VersionBadge({ type }: { type: ChangelogEntry["type"] }) {
  return (
    <Badge
      variant="secondary"
      className={
        type === "public"
          ? "bg-green-500/10 text-green-500 hover:bg-green-500/20"
          : type === "beta"
            ? "bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20"
            : "bg-blue-500/10 text-blue-500 hover:bg-blue-500/20"
      }
    >
      {type}
    </Badge>
  )
}

function ReleaseNavigation({
  type,
  direction,
  date,
  version,
  platform,
}: {
  type: "previous" | "next"
  direction: "left" | "right"
  date: string
  version: string
  platform: string
}) {
  return (
    <Link
      href="#"
      className="block p-6 rounded-lg border border-border bg-card hover:bg-accent transition-colors"
    >
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
        {direction === "left" && <ArrowLeft className="w-4 h-4" />}
        {type === "previous" ? "Previous" : "Next"} release
        {direction === "right" && <ArrowRight className="w-4 h-4" />}
      </div>
      <div className="space-y-1">
        <div className="font-heading text-lg">{date}</div>
        <div className="text-sm text-muted-foreground">
          {version} {platform}
        </div>
      </div>
    </Link>
  )
}

export default function ChangelogPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-4xl mx-auto px-4 py-24">
        <article className="space-y-8">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <h1 className="text-4xl font-heading">{changelog.date}</h1>
              <VersionBadge type={changelog.type} />
            </div>
            <div className="text-lg text-muted-foreground">
              {changelog.version} {changelog.platform}
            </div>
          </div>

          <h2 className="text-3xl font-heading">{changelog.title}</h2>

          <ul className="space-y-4 text-lg">
            {changelog.changes.map((change, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-4 text-muted-foreground">•</span>
                <span>
                  {change.includes("Enter") ? (
                    <>
                      Fixed bug where pressing{" "}
                      <code className="px-1.5 py-0.5 rounded-md bg-muted font-mono text-sm">
                        Enter
                      </code>{" "}
                      inside a blockquote would not continue the blockquote onto the next line.
                    </>
                  ) : (
                    change
                  )}
                </span>
              </li>
            ))}
          </ul>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-8">
            {changelog.previousRelease && (
              <ReleaseNavigation
                type="previous"
                direction="left"
                date={changelog.previousRelease.date}
                version={changelog.previousRelease.version}
                platform={changelog.previousRelease.platform}
              />
            )}
            {changelog.nextRelease && (
              <ReleaseNavigation
                type="next"
                direction="right"
                date={changelog.nextRelease.date}
                version={changelog.nextRelease.version}
                platform={changelog.nextRelease.platform}
              />
            )}
          </div>
        </article>
      </div>
    </div>
  )
}
