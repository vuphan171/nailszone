import { Typography } from "@/components/ui/typography"
import IconEye from "@/public/icons/ic-eye.svg"

const ViewerCountBadge = () => {
  return (
    <div className="flex w-fit items-start gap-x-0.5 rounded-2xl bg-black/50 px-2.5 pt-0.5 pb-0.25">
      <IconEye className="size-4.75 text-white" />
      <Typography
        variant="smallText"
        className="leading-5.25 font-semibold text-white"
      >
        209
      </Typography>
    </div>
  )
}

export default ViewerCountBadge
