import IconArticle from "@/public/icons/ic-article.svg"
import IconCalendar from "@/public/icons/ic-calendar.svg"
import IconMenu from "@/public/icons/ic-menu.svg"
import IconStore from "@/public/icons/ic-storefront.svg"
import IconWorker from "@/public/icons/ic-worker.svg"

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
} from "@/components/ui/dropdown-menu"
import { Typography } from "@/components/ui/typography"

import MenuItem from "@/components/layouts/main-layout/header/components/quick-menu/menu-item"

const QuickMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <IconMenu className="size-10" />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="min-w-sm rounded-2xl px-6 pt-5 pb-8"
        align="end"
      >
        <Typography variant="h5">New Post</Typography>
        <DropdownMenuGroup className="mt-2.5">
          <MenuItem
            title="For Sale"
            icon={<IconArticle className="size-8.5" />}
          />
          <MenuItem
            title="Job ads"
            icon={<IconWorker className="size-8.5" />}
          />
          <MenuItem
            title="Master Class"
            icon={<IconCalendar className="size-8.5" />}
          />
          <MenuItem
            title="For Sale"
            icon={<IconStore className="size-8.5" />}
          />
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default QuickMenu
