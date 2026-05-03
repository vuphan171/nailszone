import React from "react"

import IconEmpty from "@/public/icons/ic-empty.svg"

import { Typography } from "@/components/ui/typography"

type Props = {
  title: string
}

const Empty: React.FC<Props> = ({ title }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-2">
      <IconEmpty />
      <Typography variant="h6">{title}</Typography>
    </div>
  )
}

export default Empty
