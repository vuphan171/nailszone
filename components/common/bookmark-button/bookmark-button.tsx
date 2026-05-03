import IconBookmark from "@/public/icons/ic-bookmark.svg"

const BookmarkButton = () => {
  return (
    <div className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white transition-all duration-300 hover:bg-gray-100">
      <IconBookmark className="size-4 text-yellow-500" />
    </div>
  )
}

export default BookmarkButton
