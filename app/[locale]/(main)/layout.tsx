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
        <div className="shrink grow bg-surface pt-16">{children}</div>
      </div>
    </>
  )
}
