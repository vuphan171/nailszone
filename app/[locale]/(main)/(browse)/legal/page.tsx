import { setRequestLocale } from "next-intl/server"
import GeneralPolicies from "./components/general-policies"
import SpecificAgreements from "./components/specific-agreements"
import TransactionsContent from "./components/transactions-content"
import { routing } from "@/i18n/routing"

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

type Props = {
  params: Promise<{ locale: string }>
}

const Page = async ({ params }: Props) => {
  const { locale } = await params

  setRequestLocale(locale)

  return (
    <div className="flex flex-col gap-y-12 px-8 pt-6 pb-10">
      <GeneralPolicies />
      <SpecificAgreements />
      <TransactionsContent />
    </div>
  )
}

export default Page
