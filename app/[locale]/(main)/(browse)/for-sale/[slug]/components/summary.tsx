import { getTranslations } from "next-intl/server"

import IconLocation from "@/public/icons/ic-location.svg"
import IconReport from "@/public/icons/ic-report.svg"
import IconSend from "@/public/icons/ic-send.svg"
import IconShare from "@/public/icons/ic-share.svg"

import { Advertisement } from "@/types/advertisement"

import { getAdvertisementPrice } from "@/helpers/advertisement"
import { joinText } from "@/helpers/format-string"
import { formatTime } from "@/helpers/format-time"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Typography } from "@/components/ui/typography"

import { BookmarkButton } from "@/components/common/bookmark-button"

type Props = {
  data: Advertisement
}

const Summary = async ({ data }: Props) => {
  const tForSaleDetail = await getTranslations("for_sale_detail_page")
  const tCommon = await getTranslations("Common")

  return (
    <div className="flex-3 flex flex-col gap-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-1">
          <IconLocation className="size-4.5 shrink-0 text-interactive" />
          <Typography
            className="text-interactive font-semibold"
            variant="mediumText"
          >
            {joinText({
              parts: [data?.city, data?.state],
              separator: ", ",
            })}
          </Typography>
        </div>
        <BookmarkButton variant="muted" />
      </div>
      <Typography variant="h3">{data?.title}</Typography>
      <div className="flex items-center gap-x-2 justify-between">
        <div className="flex items-center gap-x-2">
          <Avatar className="size-8.5">
            <AvatarImage
              src={data?.customer?.avatar}
              alt={data?.customer?.firstname}
            />
            <AvatarFallback>
              {data?.customer?.firstname?.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <Typography
            className="text-muted-foreground font-medium"
            variant="mediumText"
          >
            {joinText({
              parts: [data?.customer?.firstname, data?.customer?.lastname],
              separator: " ",
            })}
          </Typography>
        </div>
        <Typography
          className="text-muted-foreground font-medium"
          variant="mediumText"
        >
          {formatTime(data?.created_at)}
        </Typography>
      </div>
      <Typography gradient variant="h3">
        {getAdvertisementPrice({
          data,
          negotiableLabel: tCommon("negotiable"),
        })}
      </Typography>
      <div className="grid grid-cols-12 gap-y-5 gap-x-4.5">
        <Button className="col-span-7 h-12 text-base font-semibold tracking-normal cursor-pointer">
          <IconSend className="size-6" />
          {tForSaleDetail("contact")}
        </Button>
        <Button className="col-span-5 h-12 text-base font-semibold tracking-normal bg-interactive-light text-primary-foreground cursor-pointer">
          <IconShare className="size-6" />
          {tForSaleDetail("share")}
        </Button>
        <Button
          variant="secondary"
          className="col-span-12 h-12 text-base font-semibold tracking-normal"
        >
          <IconReport className="size-5" />
          {tForSaleDetail("report")}
        </Button>
      </div>
    </div>
  )
}

export default Summary
