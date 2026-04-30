import SideBarItem from "@/components/main-layout/sidebar/components/sidebar-item"
import IconHome from "@/public/icons/ic-home.svg"
import IconBag from "@/public/icons/ic-bag.svg"
import IconMasterClass from "@/public/icons/ic-masterclass.svg"
import IconStore from "@/public/icons/ic-store.svg"
import IconDocument from "@/public/icons/ic-document.svg"
import IconHeadPhone from "@/public/icons/ic-headphone.svg"
import IconFeedBack from "@/public/icons/ic-feedback.svg"
import IconNailsZone from "@/public/icons/ic-nailszone.svg"
import IconSmartPhone from "@/public/icons/ic-smart-phone.svg"
import { SidebarMenuItem } from "@/components/main-layout/sidebar/types"
import { APP_ROUTES } from "@/configs/routes"

const MENUS: SidebarMenuItem[] = [
  {
    title: "Trang chủ",
    href: APP_ROUTES.HOME,
    icon: <IconHome className="h-8 w-8" />,
  },
  {
    title: "Jobs",
    href: APP_ROUTES.JOBS,
    icon: <IconBag className="h-8 w-8" />,
  },
  {
    title: "Master Class",
    href: APP_ROUTES.MASTER_CLASS,
    icon: <IconMasterClass className="h-8 w-8" />,
  },
  {
    title: "For Sale",
    href: APP_ROUTES.FOR_SALE,
    icon: <IconStore className="h-8 w-8" />,
  },
  {
    title: "Legal",
    href: "/legal",
    icon: <IconDocument className="h-8 w-8" />,
  },
  {
    title: "Customer service",
    href: "/customer-service",
    icon: <IconHeadPhone className="h-8 w-8" />,
  },
  {
    title: "Request Support",
    href: "/request-support",
    icon: <IconFeedBack className="h-8 w-8" />,
  },
  {
    title: "About NailsZone",
    href: "/about-nailszone",
    icon: <IconNailsZone className="h-8 w-8" />,
  },
  {
    title: "Add NailsZone to your device",
    href: "/add-nailszone-to-your-device",
    icon: <IconSmartPhone className="h-8 w-8" />,
  },
]

const SideBar = () => {
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
