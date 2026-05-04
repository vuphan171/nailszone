const TopForSaleCardSkeleton = () => {
  return (
    <div className="relative flex aspect-477/300 flex-col justify-between overflow-hidden rounded-xl shadow-ads-card">
      <div className="absolute inset-0 animate-pulse bg-muted" />
      <div className="relative z-10 flex justify-between px-5 py-4">
        <div className="h-8 w-24 animate-pulse rounded-md bg-black/20" />
        <div className="flex items-center gap-x-2.5">
          <div className="size-9 shrink-0 animate-pulse rounded-full bg-black/15" />
          <div className="size-9 shrink-0 animate-pulse rounded-full bg-black/15" />
          <div className="size-9 shrink-0 animate-pulse rounded-full bg-black/15" />
        </div>
      </div>
      <div className="relative z-10 flex flex-col gap-y-1.25 px-5 pb-5 pt-7">
        <div className="h-7 w-full animate-pulse rounded bg-black/20" />
        <div className="h-7 w-4/5 animate-pulse rounded bg-black/20" />
        <div className="flex items-center justify-between gap-x-2 pt-0.5">
          <div className="flex items-center gap-x-1">
            <div className="size-3.5 shrink-0 animate-pulse rounded bg-black/20" />
            <div className="h-4 w-36 animate-pulse rounded bg-black/20" />
          </div>
          <div className="h-4 w-20 shrink-0 animate-pulse rounded bg-black/20" />
        </div>
      </div>
    </div>
  )
}

const TopForSalesSkeleton = () => {
  return (
    <div className="group relative">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 2xl:grid-cols-3">
        <TopForSaleCardSkeleton />
        <TopForSaleCardSkeleton />
        <TopForSaleCardSkeleton />
      </div>
    </div>
  )
}

export default TopForSalesSkeleton
