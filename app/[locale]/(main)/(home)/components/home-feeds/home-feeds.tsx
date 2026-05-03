"use client"

import { useCallback, useTransition } from "react"

import { TransportedQueryRef } from "@apollo/client-integration-nextjs"
import { useQueryRefHandlers, useReadQuery } from "@apollo/client/react"
import { useInView } from "react-intersection-observer"

import {
  GetHomePageResponse,
  GetHomePageVariables,
} from "@/lib/graphql/queries/home/types"

import { FeedCard, FeedCardSkeleton } from "@/components/common/feed-card"

type Props = {
  queryRef: TransportedQueryRef<GetHomePageResponse, GetHomePageVariables>
}

const HomeFeeds: React.FC<Props> = ({ queryRef }) => {
  const { fetchMore } = useQueryRefHandlers(queryRef)
  const { data } = useReadQuery(queryRef)

  const [isPending, startTransition] = useTransition()

  const { ref } = useInView({
    onChange: (inView) => {
      if (inView) loadMore()
    },
    rootMargin: "240px",
  })

  const items = data?.getHomepage?.items ?? []
  const currentPage = data?.getHomepage?.page_info.current_page ?? 1
  const totalPage = data?.getHomepage?.page_info.total_page ?? 1
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
            getHomepage: {
              ...prev.getHomepage,
              ...fetchMoreResult.getHomepage,
              items: [
                ...(prev.getHomepage?.items ?? []),
                ...(fetchMoreResult.getHomepage?.items ?? []),
              ],
            },
          }
        },
      })
    })
  }, [fetchMore, currentPage, hasMore, isPending])

  return (
    <>
      {items.map((_item, index) => (
        <FeedCard key={index} />
      ))}

      {hasMore && (
        <div ref={ref} aria-busy={isPending}>
          {isPending && <FeedCardSkeleton />}
        </div>
      )}
    </>
  )
}

export default HomeFeeds
