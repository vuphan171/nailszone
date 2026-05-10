import { getTranslations } from "next-intl/server"

import { APP_ROUTES } from "@/configs/routes"

import { Link } from "@/i18n/navigation"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

const DetailBreadcrumb = async () => {
  const t = await getTranslations("ForSale.Detail")

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href={APP_ROUTES.home}>{t("breadcrumb.home")}</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="[&>svg]:size-4" />
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href={APP_ROUTES.forSale}>{t("breadcrumb.forSale")}</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="[&>svg]:size-4" />
        <BreadcrumbItem>
          <BreadcrumbPage className="text-subtle-foreground">
            {t("listingTitle")}
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}

export default DetailBreadcrumb
