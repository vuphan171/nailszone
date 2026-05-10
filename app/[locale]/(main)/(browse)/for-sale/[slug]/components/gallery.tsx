"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

import { ImageFallback } from "@/components/common/image-fallback"

const Gallery = () => {
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
                  alt="For sale gallery"
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
