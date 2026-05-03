"use client"

import React from "react"

import { useTranslations } from "next-intl"

import { Advertisement } from "@/types/advertisement"

// import ICategory from "@/types/category"

import { cn } from "@/lib/utils"

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

import { TopForSaleCard } from "@/components/common/top-for-sale-card"

// import CategoryCard from "@/components/common/category-card"

// import { DotButton, useDotButton } from "./carousel-dot-pagination"

type Props = {
  topForSales: Advertisement[]
}

const TopForSales: React.FC<Props> = ({ topForSales }) => {
  // const t = useTranslations("layout")
  const [api, setApi] = React.useState<CarouselApi>()
  // const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(api)

  return (
    <div>
      <Carousel
        opts={{
          align: "start",
          slidesToScroll: 1,
          // breakpoints: {
          //   "(min-width: 640px)": { slidesToScroll: 2 },
          //   "(min-width: 1024px)": { slidesToScroll: 3 },
          //   "(min-width: 1280px)": { slidesToScroll: 4 },
          // },
        }}
        setApi={setApi}
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
      </Carousel>
      {/* <div className="flex justify-center space-x-1">
        {scrollSnaps.map((_, index) => {
          const selected = index === selectedIndex
          const baseClasses =
            "h-1.5 w-10 transition-all duration-300 cursor-pointer sm:w-14 lg:w-20"
          const colorClass = selected ? "bg-bg-primary" : "bg-card"
          return (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={cn(baseClasses, colorClass)}
            />
          )
        })}
      </div> */}
    </div>
  )
}

export default TopForSales
