import { Suspense } from "react"

import { notFound } from "next/navigation"

import { Locale } from "next-intl"
import { setRequestLocale } from "next-intl/server"

import { getHomePage } from "@/lib/api/home"

import { FeedCard } from "@/components/common/feed-card"
import { FeedComposer } from "@/components/common/feed-composer"
import { HeroBanner } from "@/components/common/hero-banner"

import { RightSidebar, RightSidebarSkeleton } from "./components/right-sidebar"

const Page = async ({ params }: { params: Promise<{ locale: string }> }) => {
  const { locale } = await params

  setRequestLocale(locale as Locale)

  const data = await getHomePage(1)

  if (!data) {
    return notFound()
  }

  return (
    <>
      <div className="mt-4 flex shrink grow flex-col gap-y-4 bg-surface px-8 pt-16">
        <HeroBanner />
        <FeedComposer />
        <div className="mx-auto flex max-w-3xl flex-col gap-y-4">
          {data?.items?.map((item, index) => {
            return <FeedCard key={index} />
          })}
        </div>
      </div>
      <Suspense fallback={<RightSidebarSkeleton />}>
        <RightSidebar />
      </Suspense>
    </>
  )
}

export default Page
