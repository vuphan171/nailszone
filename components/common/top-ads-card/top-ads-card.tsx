import React from "react"

import IconLocation from "@/public/icons/ic-location.svg"

import { Advertisement } from "@/types/advertisement"

import {
  getAdvertisementDetailPath,
  getAdvertisementPrice,
} from "@/helpers/advertisement"
import { joinText, normalizeText } from "@/helpers/format-string"
import { formatTime } from "@/helpers/format-time"

import { Typography } from "@/components/ui/typography"

import { BookmarkButton } from "@/components/common/bookmark-button"
import { ContactButton } from "@/components/common/contact-button"
import { ImageFallback } from "@/components/common/image-fallback"
import { ShareButton } from "@/components/common/share-button"

type Props = {
  data: Advertisement
}

const TopAdsCard: React.FC<Props> = ({ data }) => {
  const price = getAdvertisementPrice({
    data,
    negotiableLabel: "Negotiable",
  })

  const shareHref = getAdvertisementDetailPath(data)
  const shareTitle = normalizeText(data?.title)

  return (
    <div className="flex aspect-477/300 relative shadow-ads-card">
      <ImageFallback
        preload
        fill
        src={data?.gallery?.[0]?.image_url}
        alt={data?.title}
        className="rounded-xl object-cover absolute inset-0"
      />
      <div className="z-1 flex flex-col justify-between">
        <div className="flex justify-between px-5 rounded-t-xl py-4 bg-linear-to-b from-black/50 to-transparent">
          <div className="bg-linear-to-r from-primary to-interactive px-2 py-1 rounded-md">
            <Typography
              variant="largeText"
              className="font-semibold text-primary-foreground"
            >
              {price}
            </Typography>
          </div>
          <div className="flex items-center gap-x-2.5">
            <BookmarkButton />
            <ShareButton href={shareHref} title={shareTitle} />
            <ContactButton />
          </div>
        </div>
        <div className="flex flex-col gap-y-1.25 rounded-b-xl bg-linear-to-t from-black/70 to-transparent px-5 pt-7 pb-5">
          <Typography
            variant="h4"
            className="text-primary-foreground font-bold line-clamp-2"
          >
            {normalizeText(data?.title)}
          </Typography>
          <div className="flex items-center gap-x-1 justify-between">
            <div className="flex items-center gap-x-1">
              <IconLocation className="size-3.5 shrink-0 text-primary-foreground" />
              <Typography
                variant="p"
                className="font-normal text-primary-foreground"
              >
                {joinText({
                  parts: [data?.city, data?.state],
                  separator: ", ",
                })}
              </Typography>
            </div>
            <Typography
              variant="p"
              className="font-normal text-primary-foreground"
            >
              {formatTime(data?.created_at)}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopAdsCard
