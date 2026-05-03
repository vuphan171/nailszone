import { useTranslations } from "next-intl"

import { Accordion } from "@/components/ui/accordion"
import { Typography } from "@/components/ui/typography"

import AccessibilityStatement from "./components/accessibility-statement"
import CommunityGuidelines from "./components/community-guidelines"
import CookiePolicy from "./components/cookie-policy"
import DataSecurityPolicy from "./components/data-security-policy"
import DisputeResolutionAgreement from "./components/dispute-resolution-agreement"
import PrivacyPolicy from "./components/privacy-policy"
import TermsAndConditions from "./components/terms-and-conditions"

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
