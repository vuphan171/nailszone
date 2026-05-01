import { Typography } from "@/components/ui/typography"
import { Accordion } from "@/components/ui/accordion"
import CommunityParticipationAgreement from "./components/community-participation-agreement"
import SellersCommonAgreement from "./components/sellers-common-agreement"
import BuyerAgreement from "./components/buyer-agreement"
import { useTranslations } from "next-intl"

const SpecificAgreements = () => {
  const t = useTranslations("legal_page")
  return (
    <div>
      <Typography variant="h3">{t("specific_agreements")}</Typography>
      <div className="mt-4 rounded-lg bg-white px-5">
        <Accordion type="multiple" className="w-full">
          <CommunityParticipationAgreement value="community-participation-agreement" />
          <SellersCommonAgreement value="sellers-common-agreement" />
          <BuyerAgreement value="buyer-agreement" />
        </Accordion>
      </div>
    </div>
  )
}

export default SpecificAgreements
