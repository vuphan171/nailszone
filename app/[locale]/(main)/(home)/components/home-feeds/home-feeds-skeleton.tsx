import { FeedCardSkeleton } from "@/components/common/feed-card"

type Props = {
  count?: number
}

const HomeFeedsSkeleton: React.FC<Props> = ({ count = 3 }) => {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <FeedCardSkeleton key={index} />
      ))}
    </>
  )
}

export default HomeFeedsSkeleton
