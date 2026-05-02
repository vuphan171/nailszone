"use client"

import { Button } from "@/components/ui/button"
import IconHeart from "@/public/icons/ic-heart.svg"
import IconShareOutLine from "@/public/icons/ic-share-outline.svg"
import IconChat from "@/public/icons/ic-chat.svg"
import { Typography } from "@/components/ui/typography"
import HeartIcon from "./heart-icon"
import LikeIcon from "./like-icon"
import {
  ReactionIconStack,
  type ReactionIconStackItem,
} from "./reaction-icon-stack"

const reactionPreview: ReactionIconStackItem[] = [
  {
    backgroundColor: "#FFEFF9",
    sizeClassName: "size-9.5",
    children: <HeartIcon />,
  },
  {
    backgroundColor: "#EBF5FD",
    sizeClassName: "size-9.5",
    children: <LikeIcon />,
  },
  {
    backgroundColor: "#FFF9E4",
    sizeClassName: "size-8",
  },
]

const FeedActions = () => {
  return (
    <div className="flex flex-col gap-y-3 divide-y divide-border rounded-b-lg bg-white px-5 pt-3 pb-4">
      <div className="flex items-center justify-between gap-x-2 pb-3">
        <div className="flex items-center gap-2">
          <ReactionIconStack items={reactionPreview} />
          <Typography variant="smallText" className="font-normal">
            14
          </Typography>
        </div>
        <Typography variant="smallText" className="font-normal">
          23 Comments
        </Typography>
      </div>
      <div className="flex items-center justify-between gap-x-2">
        <Button
          className="cursor-pointer text-sm font-normal text-foreground"
          variant="ghost"
        >
          <IconHeart className="size-6" />
          Love
        </Button>
        <Button
          className="cursor-pointer text-sm font-normal text-foreground"
          variant="ghost"
        >
          <IconChat className="size-6" />
          Comment
        </Button>
        <Button
          className="cursor-pointer text-sm font-normal text-foreground"
          variant="ghost"
        >
          <IconShareOutLine className="size-6" />
          Share
        </Button>
      </div>
    </div>
  )
}

export default FeedActions
