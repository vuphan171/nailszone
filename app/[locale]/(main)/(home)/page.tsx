import { setRequestLocale } from "next-intl/server"
import { Locale } from "next-intl"
import RightSidebar from "./components/right-sidebar"
import { FeedCard } from "@/components/common/feed-card"

const Page = async ({ params }: { params: Promise<{ locale: string }> }) => {
  const { locale } = await params

  setRequestLocale(locale as Locale)

  return (
    <>
      <div className="shrink grow bg-surface pt-16">
        <div className="mx-auto mt-10 max-w-3xl px-8">
          <FeedCard />
        </div>
      </div>
      <RightSidebar />
    </>
  )
}

export default Page
