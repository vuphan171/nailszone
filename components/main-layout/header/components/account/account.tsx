import { getTranslations } from "next-intl/server"

import { auth } from "@/auth"

import IconAddressBook from "@/public/icons/ic-address-book.svg"
import IconGlobal from "@/public/icons/ic-global.svg"
import IconLogout from "@/public/icons/ic-logout.svg"
import IconOrder from "@/public/icons/ic-order.svg"
import IconSave from "@/public/icons/ic-save.svg"
import IconSetting from "@/public/icons/ic-setting.svg"
import IconSupport from "@/public/icons/ic-support.svg"
import IconUser from "@/public/icons/ic-user.svg"

import { APP_ROUTES } from "@/configs/routes"

import { Link } from "@/i18n/navigation"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { buttonVariants } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import MenuItem from "@/components/main-layout/header/components/account/menu-item"

const Account = async () => {
  const t = await getTranslations("Common.Header")

  const session = await auth()

  if (!session?.user) {
    return (
      <Link
        className={buttonVariants({
          className: "h-10 rounded-lg px-6 text-base",
        })}
        href={APP_ROUTES.login}
      >
        {t("sign_in")}
      </Link>
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="h-12 w-12 cursor-pointer">
          <AvatarImage
            src={session?.user?.avatar}
            alt={session?.user?.firstname}
          />
          <AvatarFallback>{session?.user?.firstname.charAt(0)}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-sm rounded-xl p-0" align="end">
        <DropdownMenuGroup>
          <MenuItem
            title="My Profile"
            icon={<IconUser className="size-7 text-muted-foreground" />}
          />
          <MenuItem
            title="My Settings"
            icon={<IconSetting className="size-7 text-muted-foreground" />}
          />
          <MenuItem
            title="My Orders"
            icon={<IconOrder className="size-7 text-muted-foreground" />}
          />
          <MenuItem
            title="Address book"
            icon={<IconAddressBook className="size-7 text-muted-foreground" />}
          />
          <MenuItem
            title="Saved"
            icon={<IconSave className="size-7 text-muted-foreground" />}
          />
          <MenuItem
            title="Support"
            icon={<IconSupport className="size-7 text-muted-foreground" />}
          />
          <MenuItem
            title="Language"
            icon={<IconGlobal className="size-7 text-muted-foreground" />}
          />
          <MenuItem
            title="Logout"
            icon={<IconLogout className="size-7 text-muted-foreground" />}
          />
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default Account
