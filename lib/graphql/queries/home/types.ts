import { Advertisement } from "@/types/advertisement"
import { MasterClass } from "@/types/master-class"
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

export type { GetNewHomePageResponse }
