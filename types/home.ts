import { Advertisement } from "./advertisement"
import { MasterClass } from "./master-class"
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

export type { NewHomePage }
