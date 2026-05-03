"use client"

import { useCallback, useState } from "react"

import { TransportedQueryRef } from "@apollo/client-integration-nextjs"
import { useQueryRefHandlers, useReadQuery } from "@apollo/client/react"
import { useInView } from "react-intersection-observer"

import type { HomePageItem } from "@/types/home"

import {
  GetHomePageResponse,
  GetHomePageVariables,
} from "@/lib/graphql/queries/home/types"

import { Typography } from "@/components/ui/typography"

import { FeedCard } from "@/components/common/feed-card"

type Props = {
  queryRef: TransportedQueryRef<
    NoInfer<GetHomePageResponse>,
    NoInfer<GetHomePageVariables>
  >
}

const HomeFeeds: React.FC<Props> = ({ queryRef }) => {
  const { data } = useReadQuery(queryRef)
  const { fetchMore } = useQueryRefHandlers(queryRef)

  const homepage = data?.getHomepage

  const items: HomePageItem[] = homepage?.items ?? []
  const currentPage = homepage?.page_info.current_page ?? 1
  const totalPage = homepage?.page_info.total_page ?? 1

  const hasMore = currentPage < totalPage

  const [isLoading, setIsLoading] = useState(false)

  const loadMore = useCallback(async () => {
    if (!hasMore || isLoading) return

    setIsLoading(true)

    try {
      await fetchMore({
        variables: {
          currentPage: currentPage + 1,
        },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult) return prev

          return {
            getHomepage: {
              ...fetchMoreResult.getHomepage,
              items: [
                ...(prev.getHomepage?.items ?? []),
                ...(fetchMoreResult.getHomepage?.items ?? []),
              ],
            },
          }
        },
      })
    } finally {
      setIsLoading(false)
    }
  }, [fetchMore, currentPage, hasMore, isLoading])

  const { ref } = useInView({
    onChange: (inView) => {
      if (inView) void loadMore()
    },
    rootMargin: "240px",
  })

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-y-4">
      {items.map((item, index) => (
        <FeedCard key={index} />
      ))}

      {hasMore && (
        <div
          ref={ref}
          className="flex min-h-12 items-center justify-center py-4"
          aria-busy={isLoading}
        >
          {isLoading && (
            <Typography variant="mutedText" className="text-sm">
              Loading…
            </Typography>
          )}
        </div>
      )}
    </div>
  )
}

export default HomeFeeds
