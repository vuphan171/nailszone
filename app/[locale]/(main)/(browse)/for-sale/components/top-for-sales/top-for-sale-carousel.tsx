"use client"

import React from "react"

import { Advertisement } from "@/types/advertisement"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel"

import { TopForSaleCard } from "@/components/common/top-for-sale-card"

type Props = {
  topForSales: Advertisement[]
}

const TopForSaleCarousel: React.FC<Props> = ({ topForSales }) => {
  return (
    <div className="group relative">
      <Carousel
        opts={{
          align: "start",
          slidesToScroll: 1,
          breakpoints: {
            "(min-width: 768px)": { slidesToScroll: 2 },
            "(min-width: 1536px)": { slidesToScroll: 3 },
          },
        }}
        className="w-full"
      >
        <CarouselContent>
          {topForSales.map((category) => (
            <CarouselItem
              key={category.advertisement_id}
              className="basis-1 md:basis-1/2  2xl:basis-1/3"
            >
              <TopForSaleCard data={category} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-8 size-12 active:data-[slot=carousel-next]:translate-y-[calc(-50%+1px)] and active:data-[slot=carousel-previous]:translate-y-[calc(-50%+1px)] translate-x-2 cursor-pointer border-none bg-black/30 opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:opacity-100 hover:bg-black/30" />
        <CarouselNext className="right-8 size-12 active:data-[slot=carousel-next]:translate-y-[calc(-50%+1px)] and active:data-[slot=carousel-previous]:translate-y-[calc(-50%+1px)] translate-x-2 cursor-pointer border-none bg-black/30 opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:opacity-100 hover:bg-black/30" />
      </Carousel>
    </div>
  )
}

export default TopForSaleCarousel
