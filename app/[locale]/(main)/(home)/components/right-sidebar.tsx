import { ScrollArea } from "@/components/ui/scroll-area"
import { Link } from "@/i18n/navigation"
import { Typography } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import { getTranslations } from "next-intl/server"
import { MasterClassCard } from "@/components/common/master-class-card"

const RightSidebar = async () => {
  const t = await getTranslations("home_page")

  return (
    <div className="sticky top-16 max-h-0 min-h-[calc(100dvh-64px)] shrink-0 basis-[396px] bg-white">
      <ScrollArea className="h-full w-full px-6 pt-4">
        <div className="flex items-center justify-between gap-x-2">
          <Typography variant="h6">{t("hot_topic")}</Typography>
          <Link className="text-sm font-medium text-interactive" href="/">
            {t("view_more")}
          </Link>
        </div>
        <div className="mt-3 flex gap-x-3">
          <Button className="cursor-pointer rounded-md px-3">
            {t("master_class")}
          </Button>
          <Button variant="outline" className="cursor-pointer rounded-md px-3">
            {t("vote")}
          </Button>
          <Button variant="outline" className="cursor-pointer rounded-md px-3">
            {t("jobs")}
          </Button>
          <Button variant="outline" className="cursor-pointer rounded-md px-3">
            {t("for_sale")}
          </Button>
        </div>
        <div className="mt-4.25 flex flex-col gap-y-5">
          <MasterClassCard />
          <MasterClassCard />
          <MasterClassCard />
          <MasterClassCard />
          <MasterClassCard />
        </div>
      </ScrollArea>
    </div>
  )
}

export default RightSidebar
