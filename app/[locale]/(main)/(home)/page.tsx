import { Suspense } from "react"

import { Locale } from "next-intl"
import { setRequestLocale } from "next-intl/server"

import CACHE_KEYS from "@/configs/cache-keys"
import CACHE_TIMES from "@/configs/cache-times"

import { PreloadQuery } from "@/lib/graphql/apollo-client"
import { GET_HOMEPAGE_QUERY } from "@/lib/graphql/queries/home"

import { FeedComposer } from "@/components/common/feed-composer"
import { HeroBanner } from "@/components/common/hero-banner"

import { HomeFeeds, HomeFeedsSkeleton } from "./components/home-feeds"
import { RightSidebar, RightSidebarSkeleton } from "./components/right-sidebar"

const Page = async ({ params }: { params: Promise<{ locale: string }> }) => {
  const { locale } = await params

  setRequestLocale(locale as Locale)

  return (
    <>
      <div className="mt-4 flex shrink grow flex-col gap-y-4 bg-surface px-8 pt-16">
        <HeroBanner />
        <FeedComposer />
        <div className="mx-auto w-full flex max-w-3xl flex-col gap-y-4">
          <PreloadQuery
            query={GET_HOMEPAGE_QUERY}
            variables={{
              currentPage: 1,
            }}
            context={{
              fetchOptions: {
                cache: "force-cache",
                next: {
                  revalidate: CACHE_TIMES.HOME_FEEDS,
                  tags: [CACHE_KEYS.HOME_FEEDS],
                },
              },
            }}
          >
            {(queryRef) => (
              <Suspense fallback={<HomeFeedsSkeleton />}>
                <HomeFeeds queryRef={queryRef} />
              </Suspense>
            )}
          </PreloadQuery>
        </div>
      </div>
      <div className="sticky top-16 max-h-0 min-h-[calc(100dvh-64px)] shrink-0 basis-[396px] bg-white">
        <Suspense fallback={<RightSidebarSkeleton />}>
          <RightSidebar />
        </Suspense>
      </div>
    </>
  )
}

export default Page
