import { Suspense } from "react"

import { notFound } from "next/navigation"

import { Locale } from "next-intl"
import { setRequestLocale } from "next-intl/server"

import { getHomePage } from "@/lib/api/home"
import { PreloadQuery } from "@/lib/graphql/apollo-client"
import { GET_HOMEPAGE_QUERY } from "@/lib/graphql/queries/home"

import { FeedComposer } from "@/components/common/feed-composer"
import { HeroBanner } from "@/components/common/hero-banner"

import { HomeFeeds } from "./components/home-feeds"
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
        <PreloadQuery
          query={GET_HOMEPAGE_QUERY}
          variables={{
            currentPage: 1,
          }}
        >
          <Suspense fallback={<>loading</>}>
            <HomeFeeds />
          </Suspense>
        </PreloadQuery>
      </div>
      <Suspense fallback={<RightSidebarSkeleton />}>
        <RightSidebar />
      </Suspense>
    </>
  )
}

export default Page
