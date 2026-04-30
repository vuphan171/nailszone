import React from "react"

const AdsCardSkeleton: React.FC = () => {
  return (
    <div className="flex aspect-354/277 flex-col rounded-xl bg-white">
      <div className="aspect-354/187 animate-pulse rounded-t-xl bg-gray-200" />
      <div className="mt-3 px-4.5 pb-2.5">
        <div className="flex items-center gap-x-1">
          <div className="size-3.5 shrink-0 animate-pulse rounded bg-gray-200" />
          <div className="h-3.5 w-20 animate-pulse rounded bg-gray-200" />
        </div>
        <div className="mt-1 space-y-1.5">
          <div className="h-4 w-full animate-pulse rounded bg-gray-200" />
          <div className="h-4 w-3/4 animate-pulse rounded bg-gray-200" />
        </div>
      </div>
    </div>
  )
}

export default AdsCardSkeleton
