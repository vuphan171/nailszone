import { Advertisement, AdvertisementStatus } from "./advertisement"
import { Feed, FeedStatus } from "./feed"
import { MasterClass, MasterClassStatus } from "./master-class"
import { PageInfo } from "./page_info"
import { Vote } from "./vote"

type NewHomePage = {
  event_list: {
    items: MasterClass[]
  }
  jobs_list: {
    items: Advertisement[]
  }
  forsales_list: {
    items: Advertisement[]
  }
  votes_list: {
    items: Vote[]
  }
}

type HomePageResponse = {
  items: HomePageItem[]
  page_info: PageInfo
}

type HomePageItem = Omit<Feed, "status"> &
  Omit<Advertisement, "status"> &
  Omit<MasterClass, "status"> &
  Vote & {
    status: MasterClassStatus | AdvertisementStatus | FeedStatus
    type_item: "Job" | "feed" | "for_sale" | "vote"
  }

export type { NewHomePage, HomePageItem, HomePageResponse }
