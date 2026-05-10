import IconWorld from "@/public/icons/ic-world.svg"

import { Feed } from "@/types/feed"

import { joinText } from "@/helpers/format-string"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Typography } from "@/components/ui/typography"

import { FeedActions } from "./components/feed-actions"
import PhotoGrid from "./components/photo-grid"
import SettingButton from "./components/setting-button"

type Props = {
  data: Feed
}

const FeedCard: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-full max-w-3xl rounded-lg bg-white">
      <div className="relative mb-3 px-5 pt-5">
        <div className="flex items-center gap-x-2">
          <Avatar className="size-10">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            <Typography className="font-semibold">
              {joinText({
                parts: [data?.customer?.firstname, data?.customer?.lastname],
              })}
            </Typography>
            <div className="flex items-center gap-x-1">
              <Typography className="font-semibold" gradient>
                Role Badge
              </Typography>
              <Typography variant="mutedText" className="ml-1">
                1m ago
              </Typography>
              <IconWorld className="size-4 text-muted-foreground" />
            </div>
          </div>
        </div>
        <div className="absolute top-5 right-4">
          <SettingButton />
        </div>
        <div className="mt-2">
          <div dangerouslySetInnerHTML={{ __html: data?.content }} />
        </div>
      </div>
      <PhotoGrid />
      <FeedActions />
    </div>
  )
}

export default FeedCard
