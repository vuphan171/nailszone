import { Customer } from "@/types/customer"

const FeedStatues = {
  APPROVED: "approved",
} as const

type FeedStatus = (typeof FeedStatues)[keyof typeof FeedStatues]

const FeedPrivacies = {
  PUBLIC: "public",
} as const

type FeedPrivacy = (typeof FeedPrivacies)[keyof typeof FeedPrivacies]

type Feed = {
  feed_id: number
  status: FeedStatus
  content: string
  is_pinned: boolean
  customer_id: number
  created_at: string
  privacy: FeedPrivacy
  is_show_thumbnail: boolean
  link: string
  link_title: string
  link_description: string
  link_thumbnail: string
  short_time: string
  customer: Customer
  total_like: number
  total_comment: number
  background: number
  font: string
}

export { FeedStatues, FeedPrivacies }

export type { Feed, FeedStatus }
