import { getTranslations } from "next-intl/server"

import IconBag from "@/public/icons/ic-bag.svg"
import IconDocument from "@/public/icons/ic-document.svg"
import IconFeedBack from "@/public/icons/ic-feedback.svg"
import IconHeadPhone from "@/public/icons/ic-headphone.svg"
import IconHome from "@/public/icons/ic-home.svg"
import IconMasterClass from "@/public/icons/ic-masterclass.svg"
import IconNailsZone from "@/public/icons/ic-nailszone.svg"
import IconSmartPhone from "@/public/icons/ic-smart-phone.svg"
import IconStore from "@/public/icons/ic-store.svg"

import { APP_ROUTES } from "@/configs/routes"

import SideBarItem from "@/components/main-layout/sidebar/components/sidebar-item"
import { SidebarMenuItem } from "@/components/main-layout/sidebar/types"

const SideBar = async () => {
  const t = await getTranslations("Common.Navigation")

  const MENUS: SidebarMenuItem[] = [
    {
      title: t("home"),
      href: APP_ROUTES.HOME,
      icon: <IconHome className="size-7 shrink-0" />,
    },
    {
      title: t("jobs"),
      href: APP_ROUTES.JOBS,
      icon: <IconBag className="size-7 shrink-0" />,
    },
    {
      title: t("master_class"),
      href: APP_ROUTES.MASTER_CLASS,
      icon: <IconMasterClass className="size-7 shrink-0" />,
    },
    {
      title: t("for_sale"),
      href: APP_ROUTES.FOR_SALE,
      icon: <IconStore className="size-7 shrink-0" />,
    },
    {
      title: t("legal"),
      href: APP_ROUTES.LEGAL,
      icon: <IconDocument className="size-7 shrink-0" />,
    },
    {
      title: t("customer_service"),
      href: APP_ROUTES.CUSTOMER_SERVICE,
      icon: <IconHeadPhone className="size-7 shrink-0" />,
    },
    {
      title: t("request_support"),
      href: APP_ROUTES.REQUEST_SUPPORT,
      icon: <IconFeedBack className="size-7 shrink-0" />,
    },
    {
      title: t("about_nailszone"),
      href: APP_ROUTES.ABOUT_NAILZONE,
      icon: <IconNailsZone className="size-7 shrink-0" />,
    },
    {
      title: t("add_nailszone_to_your_device"),
      href: APP_ROUTES.ADD_NAILZONE_TO_YOUR_DEVICE,
      icon: <IconSmartPhone className="size-7 shrink-0" />,
    },
  ]

  return (
    <div className="sticky top-16 max-h-0 min-h-[calc(100dvh-64px)] shrink-0 basis-[296px] bg-white px-2">
      {MENUS.map((item, index) => {
        return (
          <SideBarItem
            key={index}
            icon={item.icon}
            href={item.href}
            title={item.title}
          />
        )
      })}
    </div>
  )
}

export default SideBar
