import IconEllipsis from "@/public/icons/ic-ellipsis.svg"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const SettingButton = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <IconEllipsis className="size-8 cursor-pointer rounded-full p-1 text-foreground/80 transition-colors duration-300 hover:bg-black/10" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Notification</DropdownMenuItem>
          <DropdownMenuItem>Privacy</DropdownMenuItem>
          <DropdownMenuItem>Logout</DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default SettingButton
