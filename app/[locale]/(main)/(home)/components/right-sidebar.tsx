import { ScrollArea } from "@/components/ui/scroll-area"
import { Link } from "@/i18n/navigation"
import { Typography } from "@/components/ui/typography"
import { getTranslations } from "next-intl/server"
import { MasterClassCard } from "@/components/common/master-class-card"
import { VoteCard } from "@/components/common/vote-card"
import { AdsCard } from "@/components/common/ads-card"
import { getNewHomePage } from "@/lib/api/home"
import { buttonVariants } from "@/components/ui/button"
import { Empty } from "@/components/common/empty"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

const hotTopicTabTrigger = cn(
  buttonVariants({ variant: "outline", size: "default" }),
  "flex-none shrink-0 cursor-pointer rounded-md py-1.5 font-medium font-semibold text-muted-foreground shadow-none after:hidden",
  "data-active:border-transparent data-active:bg-primary data-active:text-primary-foreground data-active:hover:bg-primary/90 data-active:hover:text-primary-foreground dark:data-active:bg-primary dark:data-active:text-primary-foreground"
)

const RightSidebar = async () => {
  const t = await getTranslations("home_page")

  const data = await getNewHomePage()

  const { event_list, jobs_list, forsales_list, votes_list } = data ?? {
    event_list: { items: [] },
    jobs_list: { items: [] },
    forsales_list: { items: [] },
    votes_list: { items: [] },
  }

  return (
    <div className="sticky top-16 max-h-0 min-h-[calc(100dvh-64px)] shrink-0 basis-[396px] bg-white">
      <ScrollArea className="h-full w-full px-6 pt-4">
        <div className="flex items-center justify-between gap-x-2">
          <Typography variant="h6">{t("hot_topic")}</Typography>
          <Link className="text-sm font-medium text-interactive" href="/">
            {t("view_more")}
          </Link>
        </div>
        <Tabs defaultValue="master_class" className="mt-3">
          <TabsList className="flex h-auto flex-wrap gap-2 bg-transparent p-0">
            <TabsTrigger className={hotTopicTabTrigger} value="master_class">
              {t("master_class")}
            </TabsTrigger>
            <TabsTrigger className={hotTopicTabTrigger} value="jobs">
              {t("jobs")}
            </TabsTrigger>
            <TabsTrigger className={hotTopicTabTrigger} value="for_sale">
              {t("for_sale")}
            </TabsTrigger>
            <TabsTrigger className={hotTopicTabTrigger} value="vote">
              {t("vote")}
            </TabsTrigger>
          </TabsList>
          <TabsContent
            className="mt-4.25 flex flex-col gap-y-5"
            value="master_class"
          >
            {event_list?.items?.length > 0 ? (
              event_list?.items?.map((event) => (
                <MasterClassCard key={event.event_id} />
              ))
            ) : (
              <Empty title={t("no_master_class")} />
            )}
          </TabsContent>
          <TabsContent className="mt-4.25 flex flex-col gap-y-5" value="jobs">
            {jobs_list?.items?.length > 0 ? (
              jobs_list?.items?.map((job) => (
                <AdsCard key={job.advertisement_id} data={job} />
              ))
            ) : (
              <Empty title={t("no_jobs")} />
            )}
          </TabsContent>
          <TabsContent
            className="mt-4.25 flex flex-col gap-y-5"
            value="for_sale"
          >
            {forsales_list.items?.length > 0 ? (
              forsales_list.items?.map((for_sale) => (
                <AdsCard key={for_sale.advertisement_id} data={for_sale} />
              ))
            ) : (
              <Empty title={t("no_for_sale")} />
            )}
          </TabsContent>
          <TabsContent className="mt-4.25 flex flex-col gap-y-5" value="vote">
            {votes_list.items?.length > 0 ? (
              votes_list.items?.map((vote) => <VoteCard key={vote.id} />)
            ) : (
              <Empty title={t("no_vote")} />
            )}
          </TabsContent>
        </Tabs>
      </ScrollArea>
    </div>
  )
}

export default RightSidebar
