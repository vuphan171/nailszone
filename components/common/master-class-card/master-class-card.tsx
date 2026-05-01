import { Typography } from "@/components/ui/typography"
import { ImageFallback } from "../image-fallback"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import LiveBadge from "./live-badge"
import ViewerCountBadge from "./viewer-count-badge"

const MasterClassCard = () => {
  return (
    <div className="relative aspect-323/346 rounded-lg">
      <ImageFallback
        fill
        src="/images/master-card-bg.jpg"
        alt="Master Class Card"
        preload
        className="absolute inset-0 rounded-lg object-cover"
      />
      <div className="relative z-1 flex h-full flex-col justify-between gap-y-2">
        <div className="flex items-center gap-x-2 px-5 pt-4.75">
          <LiveBadge />
          <ViewerCountBadge />
        </div>
        <div className="flex flex-col gap-y-1.25 rounded-b-lg bg-linear-to-t from-black/70 to-transparent px-5 pt-6.25 pb-4.75">
          <div className="flex items-center gap-x-2">
            <Avatar className="size-7">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Typography
              className="font-semibold text-white"
              variant="smallText"
            >
              Courtney Henry
            </Typography>
          </div>
          <Typography
            className="leading-5.75 font-bold text-white"
            variant="h6"
          >
            New Nails Master Class Live 2024 WITH Jennifer Pham
          </Typography>
        </div>
      </div>
    </div>
  )
}

export default MasterClassCard
