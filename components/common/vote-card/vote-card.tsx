import { Typography } from "@/components/ui/typography"
import { ImageFallback } from "../image-fallback"
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import TimeCountBadge from "./time-count-badge"
import TotalVoteBadge from "./total-vote-badge"

const VoteCard = () => {
  return (
    <div className="relative aspect-323/346 rounded-lg">
      <ImageFallback
        fill
        src="/images/vote-card-bg.png"
        alt="Vote Card"
        preload
        className="absolute inset-0 rounded-lg object-cover"
      />
      <div className="relative z-1 flex h-full flex-col justify-between gap-y-2">
        <div className="flex items-center gap-x-2 px-5 pt-4.75">
          <TimeCountBadge />
          <TotalVoteBadge />
        </div>
        <div className="flex flex-col gap-y-1.25 rounded-b-lg bg-linear-to-t from-black/70 to-transparent px-5 pt-6.25 pb-4.75">
          <Typography
            className="leading-5.75 font-bold text-white"
            variant="h6"
          >
            8 Election-Style Nails That Totally Get Our Vote
          </Typography>
          <div className="flex items-center gap-x-6">
            <Button className="h-10 cursor-pointer px-6" size="lg">
              Vote now
            </Button>
            <AvatarGroup className="grayscale">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage
                  src="https://github.com/maxleiter.png"
                  alt="@maxleiter"
                />
                <AvatarFallback>LR</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage
                  src="https://github.com/evilrabbit.png"
                  alt="@evilrabbit"
                />
                <AvatarFallback>ER</AvatarFallback>
              </Avatar>
              <AvatarGroupCount>+3</AvatarGroupCount>
            </AvatarGroup>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VoteCard
