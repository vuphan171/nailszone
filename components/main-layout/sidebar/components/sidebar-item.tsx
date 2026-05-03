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
        "flex cursor-pointer items-center gap-x-5 rounded-md py-4 pl-5 text-base font-medium text-sidebar-foreground transition-colors duration-200 hover:bg-sidebar-accent/80",
        isActive && "bg-sidebar-accent text-sidebar-accent-foreground"
      )}
    >
      {icon}
      {title}
    </Link>
  )
}

export default SideBarItem
