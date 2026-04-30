import { Advertisement, AdvertisementType } from "@/types/advertisement"
import { SortDirection } from "@/types/sort-direction"

interface GetListAdvertisementResponse {
  getAdsList: {
    items: Advertisement[]
  }
}

interface GetListAdvertisementVariables {
  pageSize: number
  currentPage: number
  sort: {
    [key: string]: SortDirection
  }[]
  filter: {
    type: AdvertisementType
  }
}

export type { GetListAdvertisementResponse, GetListAdvertisementVariables }
