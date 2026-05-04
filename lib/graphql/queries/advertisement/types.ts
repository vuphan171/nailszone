import { Advertisement, AdvertisementType } from "@/types/advertisement"
import { PageInfo } from "@/types/page_info"
import { SortDirection } from "@/types/sort-direction"

interface GetListAdvertisementResponse {
  getAdsList: {
    items: Advertisement[]
    page_info: PageInfo
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
    is_pinned?: boolean
  }
}

export type { GetListAdvertisementResponse, GetListAdvertisementVariables }
