import { Advertisement } from "./advertisement"
import { Feed } from "./feed"
import { MasterClass } from "./master-class"
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

type HomePageItem = Feed | Advertisement

export type { NewHomePage, HomePageItem, HomePageResponse }
