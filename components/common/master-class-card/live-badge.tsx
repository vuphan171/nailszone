import { Typography } from "@/components/ui/typography"
import IconLive from "@/public/icons/ic-live.svg"

const LiveBadge = () => {
  return (
    <div className="flex items-start gap-x-0.5 rounded-2xl bg-linear-to-r from-primary to-interactive px-3 py-0.25">
      <IconLive className="size-5.5 text-white" />
      <Typography
        variant="smallText"
        className="leading-5.25 font-semibold text-white uppercase"
      >
        LIVE
      </Typography>
    </div>
  )
}

export default LiveBadge
