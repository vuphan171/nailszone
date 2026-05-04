import { Advertisement } from "@/types/advertisement"

import { formatMoney } from "./format-money"

const getForSalePrice = ({
  data,
  negotiableLabel,
}: {
  data: Advertisement
  negotiableLabel: string
}) => {
  if (data?.price?.negotiation) {
    return negotiableLabel
  }

  return formatMoney(data?.price?.price)
}

export { getForSalePrice }
