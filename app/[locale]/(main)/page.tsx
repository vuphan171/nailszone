import { getTranslations, setRequestLocale } from "next-intl/server"
import { Locale } from "next-intl"

const Page = async ({ params }: { params: Promise<{ locale: string }> }) => {
  const { locale } = await params

  const t = await getTranslations("AppMetadata")

  setRequestLocale(locale as Locale)

  return <div className="h-[5000px]">{t("title")}</div>
}

export default Page
