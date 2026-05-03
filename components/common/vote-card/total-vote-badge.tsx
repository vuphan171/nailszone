import IconVote from "@/public/icons/ic-vote.svg"

import { Typography } from "@/components/ui/typography"

const TotalVoteBadge = () => {
  return (
    <div className="flex w-fit items-center gap-x-1 rounded-2xl bg-black/50 px-2.5 pt-0.5 pb-0.25">
      <IconVote className="h-4 w-3.5 text-white" />
      <Typography
        variant="smallText"
        className="leading-5.25 font-semibold text-white"
      >
        120
      </Typography>
    </div>
  )
}

export default TotalVoteBadge
