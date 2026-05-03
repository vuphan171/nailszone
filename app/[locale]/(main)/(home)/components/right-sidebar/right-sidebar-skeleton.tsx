import { ScrollArea } from "@/components/ui/scroll-area"

import { MasterClassCardSkeleton } from "@/components/common/master-class-card"

const RightSidebarSkeleton = () => {
  return (
    <ScrollArea className="h-full w-full px-6 pt-4">
      <div className="flex items-center justify-between gap-x-2">
        <div className="h-6 w-22 animate-pulse rounded-sm bg-muted" />
        <div className="h-5 w-17 animate-pulse rounded-sm bg-muted/80" />
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="h-8 min-w-16 animate-pulse rounded-md bg-muted"
          />
        ))}
      </div>

      <div className="mt-4.25 flex flex-col gap-y-5">
        <MasterClassCardSkeleton />
        <MasterClassCardSkeleton />
      </div>
    </ScrollArea>
  )
}

export default RightSidebarSkeleton
