import Header from "@/components/main-layout/header"
import SideBar from "@/components/main-layout/sidebar"
import { ReactNode } from "react"

type Props = {
  children?: ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <div className="relative flex min-h-dvh">
        <SideBar />
        <div className="bg-surface shrink grow pt-16">{children}</div>
      </div>
    </>
  )
}
