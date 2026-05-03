"use client"

import React from "react"

import Image from "next/image"

import Autoplay from "embla-carousel-autoplay"

import { cn } from "@/lib/utils"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel"

import {
  DotButton,
  useDotButton,
} from "@/components/common/hero-banner/pagination"

const MOCK_BANNERS = [
  {
    id: 1,
    banner: "/images/hero-banner.png",
  },
  {
    id: 2,
    banner: "/images/hero-banner.png",
  },
  {
    id: 3,
    banner: "/images/hero-banner.png",
  },
]

const HeroBanner: React.FC = () => {
  const [api, setApi] = React.useState<CarouselApi>()
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(api)

  return (
    <div className="group relative">
      <Carousel
        opts={{
          align: "start",
          slidesToScroll: 1,
        }}
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        setApi={setApi}
        className="w-full"
      >
        <CarouselContent>
          {MOCK_BANNERS.map((banner) => (
            <CarouselItem key={banner.id}>
              <div className="relative aspect-1113/455">
                <Image
                  className="rounded-lg"
                  sizes="100vw"
                  alt="Banner"
                  src={banner.banner}
                  fill
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-8 size-12 translate-x-2 cursor-pointer border-none bg-transparent opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:opacity-100 hover:bg-transparent" />
        <CarouselNext className="right-8 size-12 translate-x-2 cursor-pointer border-none bg-transparent opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:opacity-100 hover:bg-transparent" />
      </Carousel>
      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 transform space-x-1 lg:bottom-5">
        {scrollSnaps.map((_, index) => {
          const selected = index === selectedIndex
          const baseClasses =
            "h-1.5 w-10 rounded transition-all duration-300 cursor-pointer"
          const colorClass = selected ? "bg-white w-8" : "bg-white opacity-60"
          return (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={cn(baseClasses, colorClass)}
            />
          )
        })}
      </div>
    </div>
  )
}

export default HeroBanner
