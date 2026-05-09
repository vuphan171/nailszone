import Image from "next/image"

import IconBell from "@/public/icons/ic-bell.svg"
import IconCart from "@/public/icons/ic-cart.svg"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

import SiteMenu from "./components/site-menu"
import { getCustomerProfile } from "@/lib/api/customer"

const Header = async () => {
  const customer = await getCustomerProfile()

  

  return (
    <div className="fixed top-0 right-0 left-0 z-50 flex h-16 items-center justify-between bg-white px-7.5 py-2">
      <div>
        <Image
          alt="NailsZone"
          width={164}
          height={34}
          priority
          src="https://nailszone-stag.sgp1.cdn.digitaloceanspaces.com/levinci/default/Logo_NZ-01_2.png"
        />
      </div>
      <div className="flex items-center gap-x-7.5">
        <SiteMenu />
        <Button className="relative size-8 w-fit" variant="ghost" size="icon">
          <IconCart className="size-8" />
          <Badge className="absolute -top-2.5 -right-2.5 h-5 min-w-5 rounded-full px-1 tabular-nums">
            20
          </Badge>
        </Button>
        <Button className="relative size-8 w-fit" variant="ghost" size="icon">
          <IconBell className="size-8" />
          <Badge className="absolute -top-2.5 -right-2.5 h-5 min-w-5 rounded-full px-1 tabular-nums">
            8
          </Badge>
        </Button>
        <Avatar className="h-12 w-12">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  )
}

export default Header
