const ADVERTISEMENT_TYPES = {
  FOR_SALES: "Forsales",
  JOB: "Job",
} as const

type AdvertisementType =
  (typeof ADVERTISEMENT_TYPES)[keyof typeof ADVERTISEMENT_TYPES]

const ADVERTISEMENT_STATUSES = {
  PUBLISHED: "Published",
  DRAFT: "Draft",
  ARCHIVED: "Archived",
} as const

type AdvertisementStatus =
  (typeof ADVERTISEMENT_STATUSES)[keyof typeof ADVERTISEMENT_STATUSES]

interface Advertisement {
  advertisement_id: number
  type: AdvertisementType
  status: AdvertisementStatus
  enable: number
  customer_id: string
  title: string
  salon_address: string
  postal_code: string
  country: string
  city: string
  state: string
  salary: {
    split_fixed_salary: number | null
    negotiation: number | null
  }
  price: {
    price: string
    negotiation: boolean
  }
  description: string | null
  created_at: string
  lat: string
  lng: string
  gallery: {
    image: string
    image_url: string
  }[]
  customer: {
    email: string
    firstname: string
    lastname: string
  }
  contact: string | null
  favorites_id: number
  url_key: string
}

export { ADVERTISEMENT_TYPES, ADVERTISEMENT_STATUSES }

export type { Advertisement, AdvertisementType, AdvertisementStatus }
