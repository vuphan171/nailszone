import TopJobsCarousel from "@/app/[locale]/(main)/(browse)/jobs/components/top-jobs/top-jobs-carousel"

import { getTopJobs } from "@/lib/api/jobs"

const TopJobs = async () => {
  const topJobs = await getTopJobs()
  return <TopJobsCarousel topJobs={topJobs} />
}

export default TopJobs
