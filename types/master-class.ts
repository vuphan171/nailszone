import { Customer } from "@/types/customer"

const MasterClassStatues = {
  PUBLISHED: "published",
} as const

type MasterClassStatus =
  (typeof MasterClassStatues)[keyof typeof MasterClassStatues]

type EventTrigger = {
  event_trigger_id: number
  sku: string
  event_id: number
  trigger_time: string
  name: string
  description: string
}

type MasterClass = {
  event_id: number
  url_key: string
  title: string
  status: MasterClassStatus
  image_url: string
  link_live_stream: string
  time_start: string
  time_end: string
  duration: number
  customer_id: number
  description: string
  created_at: string
  customer: Customer
  remindMe_id: number
  event_trigger: EventTrigger[]
}

export { MasterClassStatues }

export type { MasterClass, MasterClassStatus }
