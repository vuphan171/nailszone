import { ReactNode } from "react"

import Header from "@/components/layouts/main-layout/header"
import SideBar from "@/components/layouts/main-layout/sidebar"

type Props = {
  children?: ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <div className="relative flex min-h-dvh">
        <SideBar />
        {children}
      </div>
    </>
  )
}
