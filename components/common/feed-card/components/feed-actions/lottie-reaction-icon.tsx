"use client"

import Lottie, { LottieComponentProps } from "lottie-react"

interface Props extends LottieComponentProps {
  animationData: object
  /** Pixel width and height; defaults to 28 */
  size?: number
  className?: string
}

const LottieReactionIcon: React.FC<Props> = ({
  animationData,
  size = 28,
  className,
  ...props
}) => {
  return (
    <Lottie
      className={className}
      animationData={animationData}
      style={{
        width: size,
        height: size,
        margin: 0,
      }}
      {...props}
    />
  )
}

export default LottieReactionIcon
