"use client"

import { Advertisement } from "@/types/advertisement"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

import { ImageFallback } from "@/components/common/image-fallback"

type Props = {
  data: Advertisement
}

const Gallery: React.FC<Props> = ({ data }) => {
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
            {data?.gallery?.length ? (
              data?.gallery?.map((image) => (
                <CarouselItem key={image.image}>
                  <div className="relative aspect-908/475">
                    <ImageFallback
                      src={image.image_url}
                      alt={image.image}
                      fill
                      className="object-cover rounded-xl"
                      preload
                    />
                  </div>
                </CarouselItem>
              ))
            ) : (
              <CarouselItem>
                <div className="relative aspect-908/475">
                  <ImageFallback
                    src="/images/bg-nz.png"
                    alt="Jobs gallery"
                    fill
                    className="object-cover rounded-xl"
                    preload
                  />
                </div>
              </CarouselItem>
            )}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  )
}

export default Gallery
