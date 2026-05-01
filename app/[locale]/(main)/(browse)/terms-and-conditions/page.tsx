import PolicyCard from "./components/policy-card"
import { setRequestLocale } from "next-intl/server"
import { BadgeDollarSignIcon, FileSignatureIcon, ScaleIcon } from "lucide-react"
import { routing } from "@/i18n/routing"

type Props = {
  params: Promise<{ locale: string }>
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

const Page = async ({ params }: Props) => {
  const { locale } = await params

  setRequestLocale(locale)

  return (
    <div className="px-8 pt-6">
      <h3 className="text-2xl font-bold">Terms and Conditions</h3>
      <div className="mt-6 grid grid-cols-3 gap-x-6 gap-y-4">
        <PolicyCard
          slug="general-policies"
          icon={<FileSignatureIcon className="size-6" />}
          title="General Policies"
          description="General policies for NailsZone"
        />
        <PolicyCard
          slug="specific-agreements"
          icon={<ScaleIcon className="size-6" />}
          title="Specific Agreements"
          description="Specific agreements for NailsZone"
        />
        <PolicyCard
          slug="transactions-and-content"
          icon={<BadgeDollarSignIcon className="size-6" />}
          title="Policies for Transactions and Content"
          description="Transactions & content for NailsZone"
        />
      </div>
    </div>
  )
}

export default Page
