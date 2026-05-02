import React from "react"
import { DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Typography } from "@/components/ui/typography"
import IconArrow from "@/public/icons/ic-arrow.svg"

type Props = {
  title: string
  icon: React.ReactNode
}

const MenuItem: React.FC<Props> = ({ title, icon }) => {
  return (
    <DropdownMenuItem className="flex items-center justify-between rounded-xl border py-2.5 pr-2.5 pl-4 not-first:mt-4">
      <div className="flex items-center gap-x-3.75">
        {icon}
        <Typography variant="mediumText">{title}</Typography>
      </div>
      <IconArrow className="size-5 text-muted-foreground" />
    </DropdownMenuItem>
  )
}

export default MenuItem
