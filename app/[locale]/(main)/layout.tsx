import { ReactNode } from "react"

import Header from "@/components/main-layout/header"
import SideBar from "@/components/main-layout/sidebar"

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
