import Lottie from "lottie-react"
import likeAnimation from "@/public/lottie/like.json"

const LikeIcon = () => {
  return (
    <Lottie
      animationData={likeAnimation}
      loop
      autoplay
      width={28}
      height={28}
    />
  )
}

export default LikeIcon
