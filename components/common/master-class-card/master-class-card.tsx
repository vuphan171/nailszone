import { MasterClass } from "@/types/master-class"

import { joinText, normalizeText } from "@/helpers/format-string"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Typography } from "@/components/ui/typography"

import { ImageFallback } from "../image-fallback"
import LiveBadge from "./live-badge"
import ViewerCountBadge from "./viewer-count-badge"

type Props = {
  data: MasterClass
}

const MasterClassCard = ({ data }: Props) => {
  const fullName = joinText(data?.customer?.firstname, data?.customer?.lastname)
  return (
    <div className="relative aspect-323/346 rounded-lg">
      <ImageFallback
        fill
        src={data?.image_url}
        alt={data?.title}
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
              <AvatarImage src={data?.customer?.avatar} alt={fullName} />
              <AvatarFallback>{fullName?.charAt(0)}</AvatarFallback>
            </Avatar>
            <Typography
              className="font-semibold text-white"
              variant="smallText"
            >
              {fullName}
            </Typography>
          </div>
          <Typography
            className="leading-5.75 font-bold text-white"
            variant="h6"
          >
            {normalizeText(data?.title)}
          </Typography>
        </div>
      </div>
    </div>
  )
}

export default MasterClassCard
