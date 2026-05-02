"use client"

import { Button } from "@/components/ui/button"
import { Typography } from "@/components/ui/typography"
import IconHeart from "@/public/icons/ic-heart.svg"
import IconShareOutLine from "@/public/icons/ic-share-outline.svg"
import IconChat from "@/public/icons/ic-chat.svg"
import heartAnimation from "@/public/lottie/heart.json"
import likeAnimation from "@/public/lottie/like.json"
import laughAnimation from "@/public/lottie/laugh.json"
import wowAnimation from "@/public/lottie/wow.json"
import cryAnimation from "@/public/lottie/cry.json"
import angryAnimation from "@/public/lottie/angry.json"
import LottieReactionIcon from "./lottie-reaction-icon"
import ReactIcon from "./react-icon"

const FeedActions = () => {
  return (
    <div className="flex flex-col gap-y-3 divide-y divide-border rounded-b-lg bg-white px-5 pt-3 pb-4">
      <div className="flex items-center justify-between gap-x-2 pb-3">
        <div className="flex items-center gap-2">
          <div className="isolate flex -space-x-2.5">
            <ReactIcon zIndex={6} type="heart">
              <LottieReactionIcon animationData={heartAnimation} />
            </ReactIcon>
            <ReactIcon zIndex={5} type="like">
              <LottieReactionIcon animationData={likeAnimation} />
            </ReactIcon>
            <ReactIcon zIndex={4} type="laugh">
              <LottieReactionIcon animationData={laughAnimation} />
            </ReactIcon>
            <ReactIcon zIndex={3} type="wow">
              <LottieReactionIcon animationData={wowAnimation} />
            </ReactIcon>
            <ReactIcon zIndex={2} type="cry">
              <LottieReactionIcon animationData={cryAnimation} />
            </ReactIcon>
            <ReactIcon zIndex={1} type="angry">
              <LottieReactionIcon animationData={angryAnimation} />
            </ReactIcon>
          </div>
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
