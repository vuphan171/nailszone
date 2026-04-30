import { getTranslations, setRequestLocale } from "next-intl/server"
import { Locale } from "next-intl"
import { ScrollArea } from "@/components/ui/scroll-area"

const Page = async ({ params }: { params: Promise<{ locale: string }> }) => {
  const { locale } = await params

  const t = await getTranslations("Common.Metadata")

  setRequestLocale(locale as Locale)

  return (
    <>
      <div className="shrink grow bg-surface pt-16">
        <div className="h-[5000px]">{t("title")}</div>
      </div>
      <div className="sticky top-16 max-h-0 min-h-[calc(100dvh-64px)] shrink-0 basis-[396px] bg-white">
        <ScrollArea className="h-full w-full">
          <div className="h-[5000px]">Right sidebar</div>
        </ScrollArea>
      </div>
    </>
  )
}

export default Page
