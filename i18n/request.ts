import { hasLocale } from "next-intl"
import { getRequestConfig } from "next-intl/server"

import { routing } from "./routing"

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale

  return {
    locale,
    messages: {
      ...(await import(`../messages/${locale}/common.json`)).default,
      ...(await import(`../messages/${locale}/for-sale.json`)).default,
      ...(await import(`../messages/${locale}/home.json`)).default,
      ...(await import(`../messages/${locale}/legal.json`)).default,
      ...(await import(`../messages/${locale}/terms-and-conditions.json`))
        .default,
      ...(await import(`../messages/${locale}/privacy-policy.json`)).default,
      ...(await import(`../messages/${locale}/data-security-policy.json`))
        .default,
      ...(await import(`../messages/${locale}/cookie-policy.json`)).default,
      ...(await import(`../messages/${locale}/community-guidelines.json`))
        .default,
      ...(await import(`../messages/${locale}/accessibility-statement.json`))
        .default,
      ...(
        await import(`../messages/${locale}/dispute-resolution-agreement.json`)
      ).default,
      ...(
        await import(
          `../messages/${locale}/community-participation-agreement.json`
        )
      ).default,
      ...(await import(`../messages/${locale}/sellers-common-agreement.json`))
        .default,
      ...(await import(`../messages/${locale}/buyer-agreement.json`)).default,
      ...(await import(`../messages/${locale}/return-and-refund-policy.json`))
        .default,
      ...(await import(`../messages/${locale}/shipping-policy.json`)).default,
      ...(
        await import(`../messages/${locale}/intellectual-property-policy.json`)
      ).default,
      ...(await import(`../messages/${locale}/login.json`)).default,
      ...(await import(`../messages/${locale}/for-sale-detail.json`)).default,
    },
  }
})
