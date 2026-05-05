import { Suspense } from "react"

import { Metadata } from "next"

import { getTranslations, setRequestLocale } from "next-intl/server"

import {
  AdsListCard,
  AdsListCardSkeleton,
} from "@/app/[locale]/(main)/(browse)/for-sale/components/ads-list-card"
import {
  TopForSales,
  TopForSalesSkeleton,
} from "@/app/[locale]/(main)/(browse)/for-sale/components/top-for-sales"

import CACHE_KEYS from "@/configs/cache-keys"
import CACHE_TIMES from "@/configs/cache-times"
import { PAGE_SIZES } from "@/configs/page_size"

import { ADVERTISEMENT_TYPES } from "@/types/advertisement"
import { SORT_DIRECTIONS } from "@/types/sort-direction"

import { PreloadQuery } from "@/lib/graphql/apollo-client"
import { GET_LIST_ADVERTISEMENT_QUERY } from "@/lib/graphql/queries/advertisement"

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

  return (
    <div className="px-8 pt-6 flex flex-col gap-y-6 pb-5">
      <Suspense fallback={<TopForSalesSkeleton />}>
        <TopForSales />
      </Suspense>

      <PreloadQuery
        query={GET_LIST_ADVERTISEMENT_QUERY}
        variables={{
          currentPage: 1,
          pageSize: PAGE_SIZES.FOR_SALE_ADS_LIST * 2,
          filter: {
            type: ADVERTISEMENT_TYPES.FOR_SALES,
          },
          sort: [
            {
              created_at: SORT_DIRECTIONS.DESC,
            },
          ],
        }}
        context={{
          fetchOptions: {
            cache: "force-cache",
            next: {
              revalidate: CACHE_TIMES.FOR_SALES_LIST,
              tags: [CACHE_KEYS.FOR_SALES_LIST],
            },
          },
        }}
      >
        {(queryRef) => (
          <Suspense
            fallback={
              <div className="grid grid-cols-3 2xl:grid-cols-4 gap-4">
                <AdsListCardSkeleton />
              </div>
            }
          >
            <AdsListCard queryRef={queryRef} />
          </Suspense>
        )}
      </PreloadQuery>
    </div>
  )
}

export default Page
