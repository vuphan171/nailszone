import { cva, type VariantProps } from "class-variance-authority"

import IconBookmark from "@/public/icons/ic-bookmark.svg"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full transition-all duration-300",
  {
    variants: {
      variant: {
        default: "bg-white text-yellow-500 hover:bg-gray-100",
        muted: "bg-secondary text-yellow-500 hover:bg-secondary/80",
      },
    },
    defaultVariants: {
      variant: "default", 
    },
  }
)

const BookmarkButton = ({ variant }: VariantProps<typeof buttonVariants>) => {
  return (
    <div className={cn(buttonVariants({ variant }))}>
      <IconBookmark className="size-4" />
    </div>
  )
}

export default BookmarkButton
