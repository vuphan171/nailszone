import { ReactNode } from "react"

import { Header } from "@/components/layouts/auth-layout/header"

type Props = {
  children?: ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <div className="relative flex min-h-dvh">{children}</div>
    </>
  )
}
