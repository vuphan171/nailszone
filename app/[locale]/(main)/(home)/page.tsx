import { setRequestLocale } from "next-intl/server"
import { Locale } from "next-intl"
import RightSidebar from "./components/right-sidebar"
import { FeedCard } from "@/components/common/feed-card"
import { HeroBanner } from "@/components/common/hero-banner"
import { FeedComposer } from "@/components/common/feed-composer"

const Page = async ({ params }: { params: Promise<{ locale: string }> }) => {
  const { locale } = await params

  setRequestLocale(locale as Locale)

  return (
    <>
      <div className="mt-4 flex shrink grow flex-col gap-y-4 bg-surface px-8 pt-16">
        <HeroBanner />
        <FeedComposer />
        <div className="mx-auto flex max-w-3xl flex-col gap-y-4">
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
        </div>
      </div>
      <RightSidebar />
    </>
  )
}

export default Page
