import { getTranslations } from "next-intl/server"

import IconLocation from "@/public/icons/ic-location.svg"
import IconReport from "@/public/icons/ic-report.svg"
import IconSend from "@/public/icons/ic-send.svg"
import IconShare from "@/public/icons/ic-share.svg"

import { Button } from "@/components/ui/button"
import { Typography } from "@/components/ui/typography"

import { BookmarkButton } from "@/components/common/bookmark-button"

const Summary = async () => {
  const t = await getTranslations("ForSale.Detail")

  return (
    <div className="flex-3 flex flex-col gap-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-1">
          <IconLocation className="size-4.5 shrink-0 text-interactive" />
          <Typography
            className="text-interactive font-semibold"
            variant="mediumText"
          >
            {t("location")}
          </Typography>
        </div>
        <BookmarkButton variant="muted" />
      </div>
      <Typography variant="h3">{t("listingTitle")}</Typography>
      <div className="flex items-center gap-x-2 justify-between">
        <div className="flex items-center gap-x-2">
          <div className="size-8.5 rounded-full bg-primary" />
          <Typography
            className="text-muted-foreground font-medium"
            variant="mediumText"
          >
            {t("sellerName")}
          </Typography>
        </div>
        <Typography
          className="text-muted-foreground font-medium"
          variant="mediumText"
        >
          {t("postedDate")}
        </Typography>
      </div>
      <Typography gradient variant="h1">
        {t("price")}
      </Typography>
      <div className="grid grid-cols-12 gap-y-5 gap-x-4.5">
        <Button className="col-span-7 h-12 text-base font-semibold tracking-normal cursor-pointer">
          <IconSend className="size-6" />
          {t("contact")}
        </Button>
        <Button className="col-span-5 h-12 text-base font-semibold tracking-normal bg-interactive-light text-primary-foreground cursor-pointer">
          <IconShare className="size-6" />
          {t("share")}
        </Button>
        <Button
          variant="secondary"
          className="col-span-12 h-12 text-base font-semibold tracking-normal"
        >
          <IconReport className="size-5" />
          {t("reportListing")}
        </Button>
      </div>
    </div>
  )
}

export default Summary
