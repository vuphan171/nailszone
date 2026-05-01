import React from "react"

const AdsCardSkeleton: React.FC = () => {
  return (
    <div className="flex aspect-354/277 flex-col rounded-xl bg-white shadow-ads-card">
      <div className="relative aspect-354/187">
        <div className="absolute inset-0 animate-pulse rounded-t-xl bg-muted" />
        <div className="pointer-events-none absolute top-3.5 right-4 flex flex-col gap-y-2">
          <div className="size-9 shrink-0 animate-pulse rounded-full bg-white/45" />
          <div className="size-9 shrink-0 animate-pulse rounded-full bg-black/25" />
        </div>
      </div>
      <div className="mt-3 px-4.5 pb-4.75">
        <div className="flex items-center gap-x-1">
          <div className="size-3.5 shrink-0 animate-pulse rounded bg-muted" />
          <div className="h-3.5 w-20 animate-pulse rounded bg-muted" />
        </div>
        <div className="mt-1 h-4 w-full animate-pulse rounded bg-muted" />
        <div className="mt-1.25 flex items-center justify-between gap-x-2">
          <div className="h-3.5 w-24 animate-pulse rounded bg-muted" />
          <div className="h-4 w-20 animate-pulse rounded bg-muted" />
        </div>
      </div>
    </div>
  )
}

export default AdsCardSkeleton
