import { ScrollArea } from "@/components/ui/scroll-area"
import { Link } from "@/i18n/navigation"
import { Typography } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import { getTranslations } from "next-intl/server"
import { MasterClassCard } from "@/components/common/master-class-card"
import { VoteCard } from "@/components/common/vote-card"
import { AdsCard } from "@/components/common/ads-card"
import {
  Advertisement,
  ADVERTISEMENT_STATUSES,
  ADVERTISEMENT_TYPES,
} from "@/types/advertisement"

const adsData: Advertisement = {
  advertisement_id: 1,
  type: ADVERTISEMENT_TYPES.FOR_SALES,
  status: ADVERTISEMENT_STATUSES.PUBLISHED,
  enable: 1,
  customer_id: "1",
  title: "New Nails Master Class Live 2024 WITH Jennifer Pham",
  salon_address: "123 Main St, Anytown, USA",
  postal_code: "12345",
  country: "USA",
  city: "Anytown",
  state: "CA",
  salary: {
    split_fixed_salary: 100000,
    negotiation: 100000,
  },
  price: {
    price: "100000",
    negotiation: true,
  },
  description: "New Nails Master Class Live 2024 WITH Jennifer Pham",
  created_at: "2024-01-01",
  lat: "123.456789",
  lng: "123.456789",
  gallery: [
    {
      image: "/images/master-class-card-bg.jpg",
      image_url: "/images/master-class-card-bg.jpg",
    },
  ],
  customer: { email: "test@test.com", firstname: "Test", lastname: "Test" },
  contact: "test@test.com",
  favorites_id: 1,
  url_key: "new-nails-master-class-live-2024-with-jennifer-pham",
}

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
          <AdsCard data={adsData} />
          <VoteCard />
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
