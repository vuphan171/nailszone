import React from "react"
import IconLocation from "@/public/icons/ic-location.svg"
import { ImageFallback } from "@/components/common/image-fallback"
import { Advertisement } from "@/types/advertisement"

type Props = {
  data: Advertisement
}

const AdsCard: React.FC<Props> = ({ data }) => {
  return (
    <div className="flex aspect-354/277 flex-col rounded-xl bg-white">
      <div className="relative aspect-354/187">
        <ImageFallback
          preload
          fill
          src={data?.gallery?.[0]?.image_url}
          alt={data?.title}
          className="rounded-t-xl object-cover"
        />
      </div>
      <div className="mt-3 px-4.5 pb-2.5">
        <div className="flex items-center gap-x-1">
          <IconLocation className="size-3.5 shrink-0" />
          <span className="text-caption line-clamp-1 leading-normal font-normal">
            {[data?.city, data?.state].filter(Boolean).join(" ")}
          </span>
        </div>
        <p className="mt-1 line-clamp-2 text-base leading-normal font-normal">
          {data?.title || ""}
        </p>
      </div>
    </div>
  )
}

export default AdsCard
