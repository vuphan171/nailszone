import React from "react"

import { DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Typography } from "@/components/ui/typography"

type Props = {
  title: string
  icon: React.ReactNode
}

const MenuItem: React.FC<Props> = ({ title, icon }) => {
  return (
    <DropdownMenuItem className="flex items-center justify-between rounded-none border-b py-4 px-4">
      <div className="flex items-center gap-x-3.75">
        {icon}
        <Typography className="font-normal" variant="mediumText">
          {title}
        </Typography>
      </div>
    </DropdownMenuItem>
  )
}

export default MenuItem
