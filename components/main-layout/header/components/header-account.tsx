import { getTranslations } from "next-intl/server"

import { auth } from "@/auth"

import { APP_ROUTES } from "@/configs/routes"

import { Link } from "@/i18n/navigation"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { buttonVariants } from "@/components/ui/button"

const HeaderAccount = async () => {
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
    <Avatar className="h-12 w-12">
      <AvatarImage src={session?.user?.avatar} alt={session?.user?.firstname} />
      <AvatarFallback>{session?.user?.firstname.charAt(0)}</AvatarFallback>
    </Avatar>
  )
}

export default HeaderAccount
