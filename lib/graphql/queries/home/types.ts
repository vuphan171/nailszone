import { Advertisement } from "@/types/advertisement"
import { HomePageItem } from "@/types/home"
import { MasterClass } from "@/types/master-class"
import { PageInfo } from "@/types/page_info"
import { Vote } from "@/types/vote"

interface GetNewHomePageResponse {
  getNewHomepage: {
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
}

interface GetHomePageResponse {
  getHomepage: {
    items: HomePageItem[]
    page_info: PageInfo
  }
}

interface GetHomePageVariables {
  currentPage: number
}

export type {
  GetNewHomePageResponse,
  GetHomePageResponse,
  GetHomePageVariables,
}
