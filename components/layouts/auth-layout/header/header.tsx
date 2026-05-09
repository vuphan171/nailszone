import Image from "next/image"

import { APP_ROUTES } from "@/configs/routes"

import { Link } from "@/i18n/navigation"

const Header = async () => {
  return (
    <div className="fixed top-0 right-0 left-0 z-50 flex h-16 items-center justify-between bg-white px-7.5 py-2 border-b">
      <Link href={APP_ROUTES.home}>
        <Image
          alt="NailsZone"
          width={164}
          height={34}
          priority
          src="https://nailszone-stag.sgp1.cdn.digitaloceanspaces.com/levinci/default/Logo_NZ-01_2.png"
        />
      </Link>
      <div className="flex items-center gap-x-7.5"></div>
    </div>
  )
}

export default Header
