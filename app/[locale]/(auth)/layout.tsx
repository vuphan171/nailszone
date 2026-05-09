import { ReactNode } from "react"

import { Header } from "@/components/layouts/auth-layout/header"

type Props = {
  children?: ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <div className="relative flex min-h-dvh">
        <div className="mt-4 w-full flex md:items-center justify-center gap-y-4 px-5 md:px-8 pt-16">
          <div className="flex max-w-xl w-full mx-auto">{children}</div>
        </div>
      </div>
    </>
  )
}
