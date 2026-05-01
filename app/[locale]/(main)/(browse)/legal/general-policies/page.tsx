import { setRequestLocale } from "next-intl/server"
import { Accordion } from "@/components/ui/accordion"
import { Typography } from "@/components/ui/typography"
import AccessibilityStatement from "./components/accessibility-statement"
import CommunityGuidelines from "./components/community-guidelines"
import CookiePolicy from "./components/cookie-policy"
import DisputeResolutionAgreement from "./components/dispute-resolution-agreement"
import DataSecurityPolicy from "./components/data-security-policy"
import PrivacyPolicy from "./components/privacy-policy"
import TermsAndConditions from "./components/terms-and-conditions"

type Props = {
  params: Promise<{ locale: string }>
}

const Page = async ({ params }: Props) => {
  const { locale } = await params

  setRequestLocale(locale)

  return (
    <div className="flex flex-col gap-y-6 px-8 pt-6">
      <div>
        <Typography variant="h3">General Policies</Typography>
        <div className="mt-4 rounded-lg bg-white px-5">
          <Accordion
            type="multiple"
            className="w-full"
            defaultValue={["terms-and-conditions"]}
          >
            <TermsAndConditions value="terms-and-conditions" />
            <PrivacyPolicy value="privacy-policy" />
            <DataSecurityPolicy value="data-security-policy" />
            <CookiePolicy value="cookie-policy" />
            <CommunityGuidelines value="community-guidelines" />
            <AccessibilityStatement value="accessibility-statement" />
            <DisputeResolutionAgreement value="dispute-resolution-agreement" />
          </Accordion>
        </div>
      </div>

      <div>
        <Typography variant="h3">Specific Agreements</Typography>
        <div className="mt-4 rounded-lg bg-white px-5">
          <Accordion
            type="multiple"
            className="w-full"
            defaultValue={["terms-and-conditions"]}
          >
            <TermsAndConditions value="terms-and-conditions" />
            <PrivacyPolicy value="privacy-policy" />
            <DataSecurityPolicy value="data-security-policy" />
            <CookiePolicy value="cookie-policy" />
            <CommunityGuidelines value="community-guidelines" />
            <AccessibilityStatement value="accessibility-statement" />
            <DisputeResolutionAgreement value="dispute-resolution-agreement" />
          </Accordion>
        </div>
      </div>

      <div>
        <Typography variant="h3">
          Policies for Transactions and Content
        </Typography>
        <div className="mt-4 rounded-lg bg-white px-5">
          <Accordion
            type="multiple"
            className="w-full"
            defaultValue={["terms-and-conditions"]}
          >
            <TermsAndConditions value="terms-and-conditions" />
            <PrivacyPolicy value="privacy-policy" />
            <DataSecurityPolicy value="data-security-policy" />
            <CookiePolicy value="cookie-policy" />
            <CommunityGuidelines value="community-guidelines" />
            <AccessibilityStatement value="accessibility-statement" />
            <DisputeResolutionAgreement value="dispute-resolution-agreement" />
          </Accordion>
        </div>
      </div>
    </div>
  )
}

export default Page
