import { Metadata } from "next"

import { getTranslations } from "next-intl/server"
import { setRequestLocale } from "next-intl/server"

import { getForSales } from "@/lib/api/for-sales"

import { AdsCard } from "@/components/common/ads-card"

import { TopForSales } from "./components/top-for-sales"

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params

  const t = await getTranslations({ locale, namespace: "ForSale.Metadata" })

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
      canonical: `/${locale}/for-sale`,
      languages: {
        en: "/en/for-sale",
        vi: "/vi/for-sale",
      },
    },
  }
}

const Page = async ({ params }: Props) => {
  const { locale } = await params

  setRequestLocale(locale)

  const forSales = await getForSales()

  return (
    <div className="px-8 pt-6 flex flex-col gap-y-6">
      <TopForSales topForSales={forSales} />
      <div className="grid grid-cols-3 2xl:grid-cols-4 gap-4">
        {forSales.map((item) => {
          return (
            <div key={item.advertisement_id}>
              <AdsCard data={item} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Page
