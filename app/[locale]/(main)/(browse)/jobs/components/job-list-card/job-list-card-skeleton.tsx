import { PAGE_SIZES } from "@/configs/page_size"

import { AdsCardSkeleton } from "@/components/common/ads-card"

const JobListCardSkeleton = () => {
  return Array.from({ length: PAGE_SIZES.JOB_ADS_LIST }).map((_, index) => (
    <div key={index}>
      <AdsCardSkeleton />
    </div>
  ))
}

export default JobListCardSkeleton
