import IconShare from "@/public/icons/ic-share.svg"

const ShareButton = () => {
  return (
    <div className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-black/30 transition-all duration-300 hover:bg-black/40">
      <IconShare className="size-4 text-white" />
    </div>
  )
}

export default ShareButton
