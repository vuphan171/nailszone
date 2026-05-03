import React from "react"

import IconLocation from "@/public/icons/ic-location.svg"

import { Advertisement } from "@/types/advertisement"

import { joinText } from "@/helpers/format-string"
import { normalizeText } from "@/helpers/format-string"

import { Typography } from "@/components/ui/typography"

import ButtonShare from "@/components/common/ads-card/share-button"
import { ImageFallback } from "@/components/common/image-fallback"

import BookmarkButton from "./bookmark-button"

type Props = {
  data: Advertisement
}

const AdsCard: React.FC<Props> = ({ data }) => {
  return (
    <div className="flex aspect-354/277 flex-col rounded-xl bg-white shadow-ads-card">
      <div className="relative aspect-354/187">
        <ImageFallback
          preload
          fill
          src={data?.gallery?.[0]?.image_url}
          alt={data?.title}
          className="rounded-t-xl object-cover"
        />
        <div className="absolute top-3.5 right-4 flex flex-col gap-y-2">
          <BookmarkButton />
          <ButtonShare />
        </div>
      </div>
      <div className="mt-3 px-4.5 pb-4.75">
        <div className="flex items-center gap-x-1">
          <IconLocation className="size-3.5 shrink-0" />
          <Typography
            variant="smallText"
            className="leading-none font-normal text-interactive"
          >
            {joinText(data?.city, data?.state)}
          </Typography>
        </div>
        <Typography variant="h6" className="mt-1 font-medium">
          {normalizeText(data?.title)}
        </Typography>
        <div className="mt-1.25 flex items-center justify-between gap-x-2">
          <Typography variant="mutedText">2023/04/17</Typography>
          <Typography className="font-semibold" variant="mediumText" gradient>
            $4,125.00
          </Typography>
        </div>
      </div>
    </div>
  )
}

export default AdsCard
