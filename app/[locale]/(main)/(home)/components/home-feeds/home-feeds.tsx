"use client"

import { useCallback, useTransition } from "react"

import { useSuspenseQuery } from "@apollo/client/react"
import { useInView } from "react-intersection-observer"

import { GET_HOMEPAGE_QUERY } from "@/lib/graphql/queries/home"

import { Typography } from "@/components/ui/typography"

import { FeedCard } from "@/components/common/feed-card"

const HomeFeeds: React.FC = () => {
  const { data, fetchMore } = useSuspenseQuery(GET_HOMEPAGE_QUERY, {
    variables: { currentPage: 1 },
  })

  const homepage = data?.getHomepage
  const items = homepage?.items ?? []
  const currentPage = homepage?.page_info.current_page ?? 1
  const totalPage = homepage?.page_info.total_page ?? 1
  const hasMore = currentPage < totalPage

  const [isPending, startTransition] = useTransition()

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

  const { ref } = useInView({
    onChange: (inView) => {
      if (inView) loadMore()
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
          aria-busy={isPending}
        >
          {isPending && (
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
