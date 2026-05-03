import { Suspense } from "react"

import { Locale } from "next-intl"
import { setRequestLocale } from "next-intl/server"

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
                  revalidate: 60,
                  tags: ["home_page"],
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
      <Suspense fallback={<RightSidebarSkeleton />}>
        <RightSidebar />
      </Suspense>
    </>
  )
}

export default Page
