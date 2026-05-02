import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const reactIconVariants = cva(
  "relative inline-flex size-9.5 shrink-0 items-center justify-center rounded-full border-2 border-white",
  {
    variants: {
      type: {
        heart: "bg-react-heart",
        like: "bg-react-like",
        laugh: "bg-react-laugh",
        wow: "bg-react-wow",
        cry: "bg-react-cry",
        angry: "bg-react-angry",
      },
    },
    defaultVariants: {
      type: "heart",
    },
  }
)

export type Props = React.ComponentProps<"div"> &
  VariantProps<typeof reactIconVariants> & {
    zIndex: number
  }

const ReactIcon: React.FC<Props> = ({ type, zIndex, ...props }) => {
  return (
    <div
      className={cn(reactIconVariants({ type }))}
      style={{ zIndex: zIndex }}
      {...props}
    />
  )
}

export default ReactIcon
