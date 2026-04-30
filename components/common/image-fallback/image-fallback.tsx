"use client"

import { useState } from "react"

import Image, { ImageProps } from "next/image"

interface Props extends ImageProps {
  fallback?: ImageProps["src"]
}

const ImageFallback = ({
  fallback = "/images/bg-nz.png",
  alt,
  src,
  ...props
}: Props) => {
  const [error, setError] = useState<React.SyntheticEvent<
    HTMLImageElement,
    Event
  > | null>(null)

  if (!src) {
    return <Image alt={alt} onError={setError} src={fallback} {...props} />
  }

  return (
    <Image
      alt={alt}
      onError={setError}
      src={error ? fallback : src}
      {...props}
    />
  )
}

export default ImageFallback
