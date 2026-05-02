import Lottie from "lottie-react"
import heartAnimation from "@/public/lottie/heart.json"

const HeartIcon = () => {
  return (
    <Lottie
      animationData={heartAnimation}
      loop
      autoplay
      style={{
        width: 28,
        height: 28,
        margin: 0,
      }}
    />
  )
}

export default HeartIcon
