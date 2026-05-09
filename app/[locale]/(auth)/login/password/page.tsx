import { Metadata } from "next"

import { getTranslations } from "next-intl/server"

import { APP_ROUTES } from "@/configs/routes"

import { redirect } from "@/i18n/navigation"
import { routing } from "@/i18n/routing"

import PasswordForm from "./components/password-form"

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

export default async function Page({
  searchParams,
  params,
}: {
  searchParams: Promise<{ phoneNumber?: string }>
  params: Promise<{ locale: string }>
}) {
  const { phoneNumber } = await searchParams

  const { locale } = await params

  if (!phoneNumber) {
    return redirect({ href: APP_ROUTES.login, locale: locale })
  }

  return <PasswordForm phoneNumber={phoneNumber} />
}
