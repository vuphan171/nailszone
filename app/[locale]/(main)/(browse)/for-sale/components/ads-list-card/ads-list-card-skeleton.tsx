import { AdsCardSkeleton } from "@/components/common/ads-card"

const AdsListCardSkeleton = () => {
  return Array.from({ length: 10 }).map((_, index) => (
    <div key={index}>
      <AdsCardSkeleton />
    </div>
  ))
}

export default AdsListCardSkeleton
