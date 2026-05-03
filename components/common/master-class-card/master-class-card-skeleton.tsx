import React from "react"

const MasterClassCardSkeleton: React.FC = () => {
  return (
    <div className="relative aspect-323/346 overflow-hidden rounded-lg">
      <div className="absolute inset-0 animate-pulse bg-muted" />
      <div className="relative z-1 flex h-full flex-col justify-between gap-y-2">
        <div className="flex items-center gap-x-2 px-5 pt-4.75">
          <div className="h-6 w-20 shrink-0 animate-pulse rounded-2xl bg-foreground/18 dark:bg-white/25" />
          <div className="h-6 w-20 animate-pulse rounded-2xl bg-foreground/18 dark:bg-white/25" />
        </div>
        <div className="flex flex-col gap-y-1.25 rounded-b-lg bg-linear-to-t from-black/30 to-transparent px-5 pt-6.25 pb-4.75">
          <div className="flex items-center gap-x-2">
            <div className="size-7 shrink-0 animate-pulse rounded-full bg-white/35" />
            <div className="h-4 w-28 animate-pulse rounded bg-white/35" />
          </div>
          <div className="space-y-2">
            <div className="h-6 w-full animate-pulse rounded bg-white/35" />
            <div className="h-6 w-[85%] animate-pulse rounded bg-white/35" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MasterClassCardSkeleton
