import { Metadata } from "next"

import { notFound } from "next/navigation"

import { getTranslations, setRequestLocale } from "next-intl/server"

import Description from "@/app/[locale]/(main)/(browse)/jobs/[slug]/components/description"
import Gallery from "@/app/[locale]/(main)/(browse)/jobs/[slug]/components/gallery"
import Summary from "@/app/[locale]/(main)/(browse)/jobs/[slug]/components/summary"

import { APP_ROUTES } from "@/configs/routes"

import { Link } from "@/i18n/navigation"

import { getJobDetail } from "@/lib/api/jobs"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

type Props = {
  params: Promise<{ locale: string; slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params

  const t = await getTranslations({
    locale,
    namespace: "job_detail_page.metadata",
  })

  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: t("title"),
      description: t("description"),
      locale: locale,
      type: "website",
    },
    alternates: {
      canonical: `/${locale}/jobs/${slug}`,
      languages: {
        en: `/en/jobs/${slug}`,
        vi: `/vi/jobs/${slug}`,
      },
    },
  }
}

const Page = async ({ params }: Props) => {
  const { locale, slug } = await params

  const t = await getTranslations({
    locale,
    namespace: "job_detail_page",
  })

  setRequestLocale(locale)

  const advertisement = await getJobDetail(slug)

  if (!advertisement) {
    notFound()
  }

  return (
    <div className="px-8 pt-6 flex flex-col gap-y-6 pb-5 bg-white min-h-full">
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
              <Link href={APP_ROUTES.home}>{t("breadcrumb.jobs")}</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="[&>svg]:size-4" />
          <BreadcrumbItem>
            <BreadcrumbPage className="text-subtle-foreground">
              {advertisement.title}
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex gap-x-8 max-w-7xl">
        <Gallery data={advertisement} />
        <Summary data={advertisement} />
      </div>
      <Description data={advertisement} />
    </div>
  )
}

export default Page
