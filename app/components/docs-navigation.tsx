import Link from "next/link"

interface DocsNavigationProps {
  prevPage?: { title: string; href: string } | undefined
  nextPage?: { title: string; href: string } | undefined
}

export function DocsNavigation({ prevPage, nextPage }: DocsNavigationProps) {
  return (
    <div className="grid grid-cols-2 gap-4 mt-12 pt-4">
      {prevPage ? (
        <Link
          href={prevPage.href}
          className="group rounded-lg border p-4 hover:border-gray-300 transition-colors"
        >
          <div className="text-sm text-gray-500">Previous page</div>
          <div className="text-white-500 font-medium">{prevPage.title}</div>
        </Link>
      ) : (
        <div /> // Empty div to maintain layout when there's no previous page
      )}
      {nextPage ? (
        <Link
          href={nextPage.href}
          className="group rounded-lg border p-4 hover:border-gray-300 transition-colors text-right"
        >
          <div className="text-sm text-gray-500">Next page</div>
          <div className="text-white-500 font-medium">{nextPage.title}</div>
        </Link>
      ) : (
        <div /> // Empty div to maintain layout when there's no next page
      )}
    </div>
  )
}
