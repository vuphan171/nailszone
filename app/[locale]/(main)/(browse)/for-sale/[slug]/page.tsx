import { Metadata } from "next"

import { getTranslations, setRequestLocale } from "next-intl/server"

import Gallery from "@/app/[locale]/(main)/(browse)/for-sale/[slug]/components/gallery"
import Summary from "@/app/[locale]/(main)/(browse)/for-sale/[slug]/components/summary"

import Description from "./components/description"
import DetailBreadcrumb from "./components/detail-breadcrumb"

type Props = {
  params: Promise<{ locale: string; slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params

  const t = await getTranslations({
    locale,
    namespace: "ForSale.Detail.Metadata",
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
      canonical: `/${locale}/for-sale/${slug}`,
      languages: {
        en: `/en/for-sale/${slug}`,
        vi: `/vi/for-sale/${slug}`,
      },
    },
  }
}

const Page = async ({ params }: Props) => {
  const { locale } = await params

  setRequestLocale(locale)

  return (
    <div className="px-8 pt-6 flex flex-col gap-y-6 pb-5 bg-white min-h-full">
      <DetailBreadcrumb />
      <div className="flex gap-x-8 max-w-7xl">
        <Gallery />
        <Summary />
      </div>
      <Description />
    </div>
  )
}

export default Page
