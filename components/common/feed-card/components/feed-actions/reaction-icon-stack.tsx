import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

export type ReactionIconStackItem = {
  backgroundColor: string
  /** e.g. `size-8`, `size-9.5` */
  sizeClassName?: string
  className?: string
  children?: ReactNode
}

type ReactionIconStackProps = {
  items: ReactionIconStackItem[]
  className?: string
  "aria-hidden"?: boolean | "true" | "false"
}

export function ReactionIconStack({
  items,
  className,
  "aria-hidden": ariaHidden = true,
}: ReactionIconStackProps) {
  return (
    <div
      className={cn("isolate flex -space-x-2", className)}
      aria-hidden={ariaHidden}
    >
      {items.map((item, index) => (
        <span
          key={index}
          className={cn(
            "relative inline-flex shrink-0 rounded-full border-2 border-white",
            item.sizeClassName ?? "size-8",
            item.children != null && "items-center justify-center",
            item.className,
          )}
          style={{
            backgroundColor: item.backgroundColor,
            zIndex: index + 1,
          }}
        >
          {item.children}
        </span>
      ))}
    </div>
  )
}
