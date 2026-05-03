import { getTranslations } from "next-intl/server"

import TabItems from "@/app/[locale]/(main)/(home)/components/right-sidebar/tab-items"

import { Link } from "@/i18n/navigation"

import { getNewHomePage } from "@/lib/api/home"
import { cn } from "@/lib/utils"

import { buttonVariants } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Typography } from "@/components/ui/typography"

import { AdsCard } from "@/components/common/ads-card"
import { MasterClassCard } from "@/components/common/master-class-card"
import { VoteCard } from "@/components/common/vote-card"

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
            <TabItems
              items={event_list?.items}
              emptyText={t("no_master_class")}
              renderItem={(event) => (
                <MasterClassCard key={event.event_id} data={event} />
              )}
            />
          </TabsContent>
          <TabsContent className="mt-4.25 flex flex-col gap-y-5" value="jobs">
            <TabItems
              items={jobs_list?.items}
              emptyText={t("no_jobs")}
              renderItem={(job) => (
                <AdsCard key={job.advertisement_id} data={job} />
              )}
            />
          </TabsContent>
          <TabsContent
            className="mt-4.25 flex flex-col gap-y-5"
            value="for_sale"
          >
            <TabItems
              items={forsales_list?.items}
              emptyText={t("no_for_sale")}
              renderItem={(for_sale) => (
                <AdsCard key={for_sale.advertisement_id} data={for_sale} />
              )}
            />
          </TabsContent>
          <TabsContent className="mt-4.25 flex flex-col gap-y-5" value="vote">
            <TabItems
              items={votes_list?.items}
              emptyText={t("no_vote")}
              renderItem={(vote) => <VoteCard key={vote.id} />}
            />
          </TabsContent>
        </Tabs>
      </ScrollArea>
    </div>
  )
}

export default RightSidebar
