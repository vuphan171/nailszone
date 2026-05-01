import { Typography } from "@/components/ui/typography"
import { Accordion } from "@/components/ui/accordion"
import TermsAndConditions from "./components/terms-and-conditions"
import PrivacyPolicy from "./components/privacy-policy"
import DataSecurityPolicy from "./components/data-security-policy"
import CookiePolicy from "./components/cookie-policy"
import CommunityGuidelines from "./components/community-guidelines"
import AccessibilityStatement from "./components/accessibility-statement"
import DisputeResolutionAgreement from "./components/dispute-resolution-agreement"
import { useTranslations } from "next-intl"

const GeneralPolicies = () => {
  const t = useTranslations("legal_page")

  return (
    <div>
      <Typography variant="h3">{t("general_policies")}</Typography>
      <div className="mt-4 rounded-lg bg-white px-5">
        <Accordion type="multiple" className="w-full">
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
  )
}

export default GeneralPolicies
