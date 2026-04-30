import { AdsCardSkeleton } from "@/components/common/ads-card"

const Loading = () => {
  return (
    <div className="grid grid-cols-12 gap-x-6 gap-y-4 px-8 pt-6">
      {Array.from({ length: 10 }).map((_, index) => (
        <div key={index} className="col-span-3">
          <AdsCardSkeleton />
        </div>
      ))}
    </div>
  )
}

export default Loading
