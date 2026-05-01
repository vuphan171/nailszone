import { setRequestLocale } from "next-intl/server"
import { Accordion } from "@/components/ui/accordion"
import { Typography } from "@/components/ui/typography"
import TermsAndConditions from "./components/terms-and-conditions"

type Props = {
  params: Promise<{ locale: string }>
}

const Page = async ({ params }: Props) => {
  const { locale } = await params

  setRequestLocale(locale)

  return (
    <div className="px-8 pt-6">
      <Typography variant="h3">General Policies</Typography>
      <div className="mt-6 rounded-lg bg-white px-5 py-4">
        <Accordion
          type="multiple"
          className="w-full"
          defaultValue={["terms-and-conditions"]}
        >
          <TermsAndConditions value="terms-and-conditions" />
        </Accordion>
      </div>
    </div>
  )
}

export default Page
