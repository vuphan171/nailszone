import React from "react"

import IconBell from "@/public/icons/ic-bell.svg"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
} from "@/components/ui/dropdown-menu"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Typography } from "@/components/ui/typography"

import NotificationItem from "@/components/layouts/main-layout/header/components/notifications/notification-item"

const Notifications = () => {
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button className="relative size-8 w-fit" variant="ghost" size="icon">
          <IconBell className="size-8" />
          <Badge className="absolute -top-2.5 -right-2.5 h-5 min-w-5 rounded-full px-1 tabular-nums">
            8
          </Badge>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-sm rounded-xl p-0 mt-2" align="end">
        <DropdownMenuGroup className="px-5 py-4">
          <Typography variant="h4">Notification</Typography>
        </DropdownMenuGroup>
        <ScrollArea className="max-h-[75vh] h-[600px]">
          <DropdownMenuGroup>
            <NotificationItem />
            <NotificationItem />
            <NotificationItem />
            <NotificationItem />
            <NotificationItem />
            <NotificationItem />
            <NotificationItem />
            <NotificationItem />
            <NotificationItem />
            <NotificationItem />
            <NotificationItem />
            <NotificationItem />
            <NotificationItem />
            <NotificationItem />
            <NotificationItem />
            <NotificationItem />
          </DropdownMenuGroup>
        </ScrollArea>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default Notifications
