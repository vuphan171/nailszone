import { Suspense } from "react"

import Image from "next/image"



import { Account } from "@/components/layouts/main-layout/header/components/account"
import { Notifications } from "@/components/layouts/main-layout/header/components/notifications"
import { QuickMenu } from "@/components/layouts/main-layout/header/components/quick-menu"

const Header = async () => {
  return (
    <div className="fixed top-0 right-0 left-0 z-50 flex h-16 items-center justify-between bg-white px-7.5 py-2">
      <div>
        <Image
          alt="NailsZone"
          width={164}
          height={34}
          priority
          src="https://nailszone-stag.sgp1.cdn.digitaloceanspaces.com/levinci/default/Logo_NZ-01_2.png"
        />
      </div>
      <div className="flex items-center gap-x-7.5">
        <QuickMenu />
        <Notifications />
        <Suspense
          fallback={
            <div
              className="size-12 shrink-0 animate-pulse rounded-full bg-muted"
              aria-hidden
            />
          }
        >
          <Account />
        </Suspense>
      </div>
    </div>
  )
}

export default Header
