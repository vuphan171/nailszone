import { Metadata } from "next"

import { getTranslations } from "next-intl/server"

import { LoginForm } from "@/app/[locale]/(auth)/login/form"
import { SessionProvider } from "next-auth/react"

import { routing } from "@/i18n/routing"

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params

  const t = await getTranslations({ locale, namespace: "login_page.metadata" })

  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: t("title"),
      description: t("description"),
      locale: locale,
      type: "website",
    },
    alternates: {
      canonical: `/${locale}/login`,
      languages: {
        ...routing.locales.map((locale) => ({
          [locale]: `/${locale}/login`,
        })),
      },
    },
  }
}

export default function Page() {
  return (
    <SessionProvider>
      <LoginForm />
    </SessionProvider>
  )
}
