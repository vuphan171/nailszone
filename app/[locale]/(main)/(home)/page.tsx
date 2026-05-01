import { getTranslations, setRequestLocale } from "next-intl/server"
import { Locale } from "next-intl"
import RightSidebar from "./components/right-sidebar"

const Page = async ({ params }: { params: Promise<{ locale: string }> }) => {
  const { locale } = await params

  const t = await getTranslations("Common.Metadata")

  setRequestLocale(locale as Locale)

  return (
    <>
      <div className="shrink grow bg-surface pt-16">
        <div className="h-[5000px]">{t("title")}</div>
      </div>
      <RightSidebar />
    </>
  )
}

export default Page
