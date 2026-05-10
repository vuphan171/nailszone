"use client"

import { useTranslations } from "next-intl"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

import { ImageFallback } from "@/components/common/image-fallback"

const Gallery = () => {
  const t = useTranslations("ForSale.Detail")

  return (
    <div className="flex-5">
      <div className="relative">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent>
            <CarouselItem>
              <div className="relative aspect-908/475">
                <ImageFallback
                  src="/images/bg-nz.png"
                  alt={t("galleryImageAlt")}
                  fill
                  className="object-cover rounded-xl"
                  preload
                />
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  )
}

export default Gallery
