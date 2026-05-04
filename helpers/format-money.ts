const formatMoney = (
  currency?: string | number,
  locale: string = "en-US",
  currencyCode: string = "USD"
): string => {
  if (currency === undefined || currency === null || currency === "") {
    currency = 0
  } else if (typeof currency !== "number") {
    currency = Number(currency.toString().replace(/[^0-9.-]+/g, ""))
  }

  let amount = isNaN(currency as number) ? 0 : (currency as number)

  if (Object.is(amount, -0)) {
    amount = 0
  }

  const formatter = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currencyCode,
  })

  return formatter.format(amount)
}

export { formatMoney }
