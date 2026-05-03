const FeedCardSkeleton = () => {
  return (
    <div className="w-full max-w-3xl rounded-lg bg-white">
      <div className="relative mb-3 px-5 pt-5">
        <div className="flex items-center gap-x-2">
          <div className="size-10 shrink-0 animate-pulse rounded-full bg-muted" />
          <div className="flex flex-col gap-y-1.5">
            <div className="h-4 w-32 animate-pulse rounded bg-muted" />
            <div className="flex items-center gap-x-2">
              <div className="h-3.5 w-20 animate-pulse rounded bg-muted/80" />
              <div className="h-3.5 w-12 animate-pulse rounded bg-muted/80" />
              <div className="size-4 animate-pulse rounded-full bg-muted/80" />
            </div>
          </div>
        </div>
        <div className="absolute top-5 right-4">
          <div className="size-8 animate-pulse rounded-full bg-muted" />
        </div>
        <div className="mt-3 flex flex-col gap-y-2">
          <div className="h-4 w-full animate-pulse rounded bg-muted" />
          <div className="h-4 w-[92%] animate-pulse rounded bg-muted" />
          <div className="h-4 w-[60%] animate-pulse rounded bg-muted" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-px">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="relative aspect-401/293 animate-pulse bg-muted"
          />
        ))}
      </div>
      <div className="flex flex-col gap-y-3 divide-y divide-border rounded-b-lg bg-white px-5 pt-3 pb-4">
        <div className="flex items-center justify-between gap-x-2 pb-3">
          <div className="flex items-center gap-2">
            <div className="isolate flex -space-x-2.5">
              {Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className="size-5 animate-pulse rounded-full border-2 border-white bg-muted"
                />
              ))}
            </div>
            <div className="h-3.5 w-6 animate-pulse rounded bg-muted" />
          </div>
          <div className="h-3.5 w-24 animate-pulse rounded bg-muted" />
        </div>
        <div className="flex items-center justify-between gap-x-2">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="h-9 w-full max-w-28 animate-pulse rounded-md bg-muted"
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default FeedCardSkeleton
