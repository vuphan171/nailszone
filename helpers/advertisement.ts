import { APP_ROUTES } from "@/configs/routes"

import { Advertisement, ADVERTISEMENT_TYPES } from "@/types/advertisement"

import { formatMoney } from "./format-money"

const getAdvertisementDetailPath = (data: Advertisement): string =>
  data.type === ADVERTISEMENT_TYPES.JOB
    ? APP_ROUTES.jobDetail(data.url_key)
    : APP_ROUTES.forSaleDetail(data.url_key)

const getAdvertisementPrice = ({
  data,
  negotiableLabel,
}: {
  data: Advertisement
  negotiableLabel: string
}) => {
  if (data?.type === ADVERTISEMENT_TYPES.FOR_SALES) {
    return getForSalePrice({
      data,
      negotiableLabel,
    })
  }

  return getJobPrice({
    data,
    negotiableLabel,
  })
}

const getJobPrice = ({
  data,
  negotiableLabel,
}: {
  data: Advertisement
  negotiableLabel: string
}) => {
  if (data?.salary?.negotiation) {
    return negotiableLabel
  }

  return (
    data?.salary?.split_fixed_salary?.fixed ||
    data?.salary?.split_fixed_salary?.split
  )
}

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

export { getAdvertisementDetailPath, getAdvertisementPrice }
