import IcMedia from "@/public/icons/ic-media.svg"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Typography } from "@/components/ui/typography"

const FeedComposer = () => {
  return (
    <div className="mx-auto flex w-full max-w-3xl items-center justify-between rounded-lg bg-feed-composer px-5.5 py-4.25 shadow-feed-composer">
      <div className="flex items-center gap-x-4">
        <Avatar className="size-11.5">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Typography
          variant="largeText"
          className="font-normal text-muted-foreground"
        >
          How was your day?
        </Typography>
      </div>
      <div className="cursor-pointer rounded-lg p-1 transition-all duration-300 hover:bg-black/5">
        <IcMedia className="size-8 text-muted-foreground" />
      </div>
    </div>
  )
}

export default FeedComposer
