"use client"

import type { MouseEvent } from "react"

import { useLocale, useTranslations } from "next-intl"

import { toast } from "sonner"

import IconShare from "@/public/icons/ic-share.svg"

import { getPathname } from "@/i18n/navigation"

import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"

type Props = {
  href: string
  title: string
  text?: string
  className?: string
}

const isAbortError = (error: unknown) =>
  error instanceof DOMException && error.name === "AbortError"

const ShareButton = ({ href, title, text, className }: Props) => {
  const locale = useLocale()
  const t = useTranslations("Common.Share")

  const handleClick = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    event.stopPropagation()

    const pathname = getPathname({ locale, href })
    const url = `${window.location.origin}${pathname}`

    const sharePayload = {
      title,
      text: text ?? title,
      url,
    }

    try {
      if (typeof navigator !== "undefined" && navigator.share) {
        try {
          await navigator.share(sharePayload)
          return
        } catch (error) {
          if (isAbortError(error)) return
        }
      }

      if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(url)
        toast.success(t("link_copied"))
        return
      }

      toast.error(t("share_failed"))
    } catch {
      toast.error(t("share_failed"))
    }
  }

  return (
    <Button
      type="button"
      aria-label={t("label")}
      className={cn(
        "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-black/30 transition-all duration-300 hover:bg-black/40",
        className
      )}
      onClick={(e) => {
        void handleClick(e)
      }}
    >
      <IconShare className="size-6 text-white" aria-hidden />
    </Button>
  )
}

export default ShareButton
