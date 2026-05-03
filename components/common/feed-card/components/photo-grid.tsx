import { Typography } from "@/components/ui/typography"

import { ImageFallback } from "@/components/common/image-fallback"

const PhotoGrid = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="relative aspect-401/293">
        <ImageFallback
          src="/images/feed-bg-2.jpg"
          alt="Photo"
          fill
          className="h-full w-full object-cover"
        />
      </div>
      <div className="relative aspect-401/293">
        <ImageFallback
          src="/images/feed-bg-3.png"
          alt="Photo"
          fill
          className="h-full w-full object-cover"
        />
      </div>
      <div className="relative aspect-401/293">
        <ImageFallback
          src="/images/feed-bg-4.jpg"
          alt="Photo"
          fill
          className="h-full w-full object-cover"
        />
      </div>
      <div className="relative aspect-401/293">
        <div className="absolute inset-0 z-1 flex items-center justify-center bg-black/40">
          <Typography variant="h3" className="text-3xl font-bold text-white">
            +3
          </Typography>
        </div>
        <ImageFallback
          src="/images/feed-bg-1.jpg"
          alt="Photo"
          fill
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  )
}

export default PhotoGrid
