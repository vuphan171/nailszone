import { notFound } from "next/navigation"
import { Locale, hasLocale, NextIntlClientProvider } from "next-intl"
import { getTranslations, setRequestLocale } from "next-intl/server"
import { clsx } from "clsx"
import { Inter } from "next/font/google"
import { routing } from "@/i18n/routing"

const inter = Inter({ subsets: ["latin"] })

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

type Props = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export async function generateMetadata(props: Props) {
  const { locale } = await props.params

  const t = await getTranslations({
    locale: locale as Locale,
    namespace: "HomePage",
  })

  return {
    title: t("title"),
  }
}

export default async function LocaleLayout({ children, params }: Props) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params

  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  // Enable static rendering
  setRequestLocale(locale)

  return <NextIntlClientProvider>{children}</NextIntlClientProvider>

  //   return (
  //     <html className="h-full" lang={locale}>
  //       <body className={clsx(inter.className, "flex h-full flex-col")}>
  //         <NextIntlClientProvider>{children}</NextIntlClientProvider>
  //       </body>
  //     </html>
  //   )
}
