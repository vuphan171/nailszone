import PolicyCard from "./components/policy-card"
import { getTranslations, setRequestLocale } from "next-intl/server"
import { BadgeDollarSignIcon, FileSignatureIcon, ScaleIcon } from "lucide-react"
import { routing } from "@/i18n/routing"
import { Typography } from "@/components/ui/typography"

type Props = {
  params: Promise<{ locale: string }>
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

const Page = async ({ params }: Props) => {
  const { locale } = await params

  setRequestLocale(locale)

  const t = await getTranslations("terms_and_conditions_page")

  return (
    <div className="px-8 pt-6">
      <Typography variant="h3">{t("title")}</Typography>
      <div className="mt-6 grid grid-cols-3 gap-x-6 gap-y-4">
        <PolicyCard
          slug="general-policies"
          icon={<FileSignatureIcon className="size-6" />}
          title={t("general_policies.title")}
          description={t("general_policies.description")}
        />
        <PolicyCard
          slug="specific-agreements"
          icon={<ScaleIcon className="size-6" />}
          title={t("specific_agreements.title")}
          description={t("specific_agreements.description")}
        />
        <PolicyCard
          slug="transactions-and-content"
          icon={<BadgeDollarSignIcon className="size-6" />}
          title={t("transactions_and_content.title")}
          description={t("transactions_and_content.description")}
        />
      </div>
    </div>
  )
}

export default Page
