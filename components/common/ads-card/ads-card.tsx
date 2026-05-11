"use client"

import React from "react"

import { useTranslations } from "next-intl"

import IconLocation from "@/public/icons/ic-location.svg"

import { Advertisement } from "@/types/advertisement"

import {
  getAdvertisementDetailPath,
  getAdvertisementPrice,
} from "@/helpers/advertisement"
import { joinText } from "@/helpers/format-string"
import { normalizeText } from "@/helpers/format-string"
import { formatTime } from "@/helpers/format-time"

import { Typography } from "@/components/ui/typography"

import { BookmarkButton } from "@/components/common/bookmark-button"
import { ImageFallback } from "@/components/common/image-fallback"
import { ShareButton } from "@/components/common/share-button"

type Props = {
  data: Advertisement
}

const AdsCard: React.FC<Props> = ({ data }) => {
  const t = useTranslations("Common")

  const price = getAdvertisementPrice({
    data,
    negotiableLabel: t("Negotiable"),
  })

  const shareHref = getAdvertisementDetailPath(data)
  const shareTitle = normalizeText(data?.title)

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
          <ShareButton href={shareHref} title={shareTitle} />
          <BookmarkButton />
        </div>
      </div>
      <div className="mt-3 px-4.5 pb-4.75">
        <div className="flex items-center gap-x-1">
          <IconLocation className="size-3.5 shrink-0 text-interactive" />
          <Typography
            variant="smallText"
            className="leading-none font-normal text-interactive"
          >
            {joinText({ parts: [data?.city, data?.state], separator: ", " })}
          </Typography>
        </div>
        <Typography variant="h6" className="mt-1 font-medium line-clamp-1">
          {normalizeText(data?.title)}
        </Typography>
        <div className="mt-1.25 flex items-center justify-between gap-x-2">
          <Typography variant="mutedText">
            {formatTime(data?.created_at)}
          </Typography>
          <Typography className="font-semibold" variant="mediumText" gradient>
            {price}
          </Typography>
        </div>
      </div>
    </div>
  )
}

export default AdsCard
