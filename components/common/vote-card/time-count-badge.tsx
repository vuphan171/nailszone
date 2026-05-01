import { Typography } from "@/components/ui/typography"
import IconClock from "@/public/icons/ic-clock.svg"

const TimeCountBadge = () => {
  return (
    <div className="flex items-center gap-x-1.25 rounded-2xl bg-linear-to-r from-primary to-interactive px-3 py-0.25">
      <IconClock className="h-4 w-3.5 text-white" />
      <Typography
        variant="smallText"
        className="leading-5.25 font-semibold text-white uppercase"
      >
        23:48:22
      </Typography>
    </div>
  )
}

export default TimeCountBadge
