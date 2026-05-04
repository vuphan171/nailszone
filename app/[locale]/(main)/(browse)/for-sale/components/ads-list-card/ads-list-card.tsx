"use client"

import { useCallback, useTransition } from "react"

import { AdsListCardSkeleton } from "@/app/[locale]/(main)/(browse)/for-sale/components/ads-list-card"
import { TransportedQueryRef } from "@apollo/client-integration-nextjs"
import { useQueryRefHandlers, useReadQuery } from "@apollo/client/react"
import { useInView } from "react-intersection-observer"

import {
  GetListAdvertisementResponse,
  GetListAdvertisementVariables,
} from "@/lib/graphql/queries/advertisement/types"

import { AdsCard } from "@/components/common/ads-card"

type Props = {
  queryRef: TransportedQueryRef<
    GetListAdvertisementResponse,
    GetListAdvertisementVariables
  >
}

const AdsListCard: React.FC<Props> = ({ queryRef }) => {
  const { fetchMore } = useQueryRefHandlers(queryRef)
  const { data } = useReadQuery(queryRef)

  const [isPending, startTransition] = useTransition()

  const { ref } = useInView({
    onChange: (inView) => {
      if (inView) loadMore()
    },
    rootMargin: "240px",
  })

  const forSales = data?.getAdsList?.items ?? []
  const currentPage = data?.getAdsList?.page_info.current_page ?? 1
  const totalPage = data?.getAdsList?.page_info.total_page ?? 1
  const hasMore = currentPage < totalPage

  const loadMore = useCallback(() => {
    if (!hasMore || isPending) return

    startTransition(() => {
      void fetchMore({
        variables: {
          currentPage: currentPage + 1,
        },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult) return prev

          return {
            getAdsList: {
              ...prev.getAdsList,
              ...fetchMoreResult.getAdsList,
              items: [
                ...(prev.getAdsList?.items ?? []),
                ...(fetchMoreResult.getAdsList?.items ?? []),
              ],
            },
          }
        },
      })
    })
  }, [fetchMore, currentPage, hasMore, isPending])

  return (
    <>
      <div className="grid grid-cols-3 2xl:grid-cols-4 gap-4">
        {forSales.map((item) => {
          return (
            <div key={item.advertisement_id}>
              <AdsCard data={item} />
            </div>
          )
        })}
      </div>
      {hasMore && (
        <div
          ref={ref}
          className="grid grid-cols-3 2xl:grid-cols-4 gap-4"
          aria-busy={isPending}
        >
          {isPending && <AdsListCardSkeleton />}
        </div>
      )}
    </>
  )
}

export default AdsListCard
