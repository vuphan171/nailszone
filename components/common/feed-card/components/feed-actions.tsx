import { Button } from "@/components/ui/button"
import IconHeart from "@/public/icons/ic-heart.svg"
import IconShareOutLine from "@/public/icons/ic-share-outline.svg"
import IconChat from "@/public/icons/ic-chat.svg"
import { Typography } from "@/components/ui/typography"

const FeedActions = () => {
  return (
    <div className="flex flex-col gap-y-3 divide-y divide-border rounded-b-lg bg-white px-5 pt-3 pb-4">
      <div className="flex items-center justify-between gap-x-2 pb-3">
        <div className="flex items-center gap-2">
          <div className="isolate flex -space-x-2" aria-hidden>
            <span className="relative z-1 inline-flex size-8 shrink-0 rounded-full border-2 border-white bg-[#FFEFF9]" />
            <span className="relative z-2 inline-flex size-8 shrink-0 rounded-full border-2 border-white bg-[#EBF5FD]" />
            <span className="relative z-3 inline-flex size-8 shrink-0 rounded-full border-2 border-white bg-[#FFF9E4]" />
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
