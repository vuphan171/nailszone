const SORT_DIRECTIONS = {
  ASC: "ASC",
  DESC: "DESC",
} as const

type SortDirection = (typeof SORT_DIRECTIONS)[keyof typeof SORT_DIRECTIONS]

export { SORT_DIRECTIONS }

export type { SortDirection }
