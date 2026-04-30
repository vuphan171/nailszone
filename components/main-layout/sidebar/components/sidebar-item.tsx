"use client"
import React from "react"
import { Link, usePathname } from "@/i18n/navigation"
import { cn } from "@/lib/utils"

type Props = {
  href: string
  title: string
  icon: React.ReactNode
}

const SideBarItem: React.FC<Props> = ({ href, title, icon }) => {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      className={cn(
        "text-4.5 flex cursor-pointer items-center gap-x-5 rounded-md py-4.5 pl-5.5 leading-4.5 font-medium text-sidebar-foreground transition-colors duration-200 hover:bg-gray-100",
        isActive && "bg-gray-200 text-primary"
      )}
    >
      {icon}
      {title}
    </Link>
  )
}

export default SideBarItem
