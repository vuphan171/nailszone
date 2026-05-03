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

const TopForSales: React.FC<Props> = ({ topForSales }) => {
  return (
    <div className="group relative">
      <Carousel
        opts={{
          align: "start",
          slidesToScroll: 1,
          breakpoints: {
            "(min-width: 640px)": { slidesToScroll: 2 },
            "(min-width: 1024px)": { slidesToScroll: 3 },
            "(min-width: 1280px)": { slidesToScroll: 4 },
          },
        }}
        className="w-full"
      >
        <CarouselContent>
          {topForSales.map((category) => (
            <CarouselItem
              key={category.advertisement_id}
              className="basis-[40%] 2xl:basis-1/3"
            >
              <TopForSaleCard data={category} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-8 size-12 translate-x-2 cursor-pointer border-none bg-black/30 opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:opacity-100 hover:bg-black/30" />
        <CarouselNext className="right-8 size-12 translate-x-2 cursor-pointer border-none bg-black/30 opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:opacity-100 hover:bg-black/30" />
      </Carousel>
    </div>
  )
}

export default TopForSales
