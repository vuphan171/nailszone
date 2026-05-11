const Loading = () => {
  return (
    <div className="px-8 pt-6 flex flex-col gap-y-6 pb-5 bg-white min-h-full">
      <div className="flex flex-wrap items-center gap-x-2 gap-y-2">
        <div className="h-4 w-12 animate-pulse rounded bg-muted" />
        <div className="size-4 shrink-0 animate-pulse rounded bg-muted" />
        <div className="h-4 w-16 animate-pulse rounded bg-muted" />
        <div className="size-4 shrink-0 animate-pulse rounded bg-muted" />
        <div className="h-4 w-32 animate-pulse rounded bg-muted" />
      </div>
      <div className="flex gap-x-8 max-w-7xl">
        <div className="flex-5 min-w-0">
          <div className="relative aspect-908/475 w-full animate-pulse rounded-xl bg-muted" />
        </div>
        <div className="flex-3 flex min-w-0 flex-col gap-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-1">
              <div className="size-4.5 shrink-0 animate-pulse rounded bg-muted" />
              <div className="h-4 w-28 animate-pulse rounded bg-muted" />
            </div>
            <div className="size-9 shrink-0 animate-pulse rounded-full bg-muted" />
          </div>
          <div className="h-8 w-full max-w-md animate-pulse rounded bg-muted" />
          <div className="flex items-center justify-between gap-x-2">
            <div className="flex items-center gap-x-2">
              <div className="size-8.5 shrink-0 animate-pulse rounded-full bg-muted" />
              <div className="h-4 w-32 animate-pulse rounded bg-muted" />
            </div>
            <div className="h-4 w-20 animate-pulse rounded bg-muted" />
          </div>
          <div className="h-9 w-40 animate-pulse rounded bg-muted" />
          <div className="grid grid-cols-12 gap-y-5 gap-x-4.5">
            <div className="col-span-7 h-12 animate-pulse rounded-md bg-muted" />
            <div className="col-span-5 h-12 animate-pulse rounded-md bg-muted" />
            <div className="col-span-12 h-12 animate-pulse rounded-md bg-muted" />
          </div>
        </div>
      </div>
      <div>
        <div className="px-2.5 py-5 border-b">
          <div className="h-7 w-36 animate-pulse rounded bg-muted" />
        </div>
        <div className="mt-3 flex flex-col gap-y-2">
          <div className="h-4 w-full animate-pulse rounded bg-muted" />
          <div className="h-4 w-full animate-pulse rounded bg-muted" />
          <div className="h-4 w-4/5 max-w-2xl animate-pulse rounded bg-muted" />
        </div>
      </div>
    </div>
  )
}

export default Loading
