import type { ReactNode } from "react"

import { Empty } from "@/components/common/empty"

type Props<T> = {
  items: T[]
  emptyText: string
  renderItem: (item: T) => ReactNode
}

const TabItems = <T,>({ items, emptyText, renderItem }: Props<T>) => {
  const list = items ?? []

  if (list.length === 0) {
    return <Empty title={emptyText} />
  }

  return <>{list.map(renderItem)}</>
}

export default TabItems
