import { useTranslations } from "next-intl"
import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"
import { Typography } from "@/components/ui/typography"
import { Link } from "@/i18n/navigation"

type Props = {
  value: string
}

const DataSecurityPolicy = ({ value }: Props) => {
  const t = useTranslations("data_security_policy_page")

  return (
    <AccordionItem value={value}>
      <AccordionTrigger className="py-4 text-lg leading-none font-normal tracking-tight text-primary **:data-[slot=accordion-trigger-icon]:size-4.5">
        {t("title")}
      </AccordionTrigger>
      <AccordionContent>
        <Typography variant="h6">{t("introduction.title")}</Typography>
        <Typography className="mt-2" variant="p">
          {t("introduction.description")}
        </Typography>
        <Typography variant="h6">{t("scope.title")}</Typography>
        <Typography className="mt-2" variant="p">
          {t("scope.description")}
        </Typography>

        <Typography className="mt-4" variant="h6">
          {t("data_collection_and_use.title")}
        </Typography>
        <Typography className="my-0 list-decimal" variant="ul">
          <Typography variant="p" as="li">
            {t.rich("data_collection_and_use.collection", {
              link: (chunks) => (
                <Link
                  className="text-interactive! no-underline! hover:underline!"
                  href="/legal/privacy-policy"
                >
                  {chunks}
                </Link>
              ),
            })}
          </Typography>
          <Typography variant="p" as="li">
            {t("data_collection_and_use.use")}
          </Typography>
        </Typography>

        <Typography className="mt-4" variant="h6">
          {t("data_protection_measures.title")}
        </Typography>
        <Typography className="my-0 list-decimal" variant="ul">
          <Typography variant="p" as="li">
            {t("data_protection_measures.encryption")}
          </Typography>
          <Typography variant="p" as="li">
            {t("data_protection_measures.access_control")}
          </Typography>
          <Typography variant="p" as="li">
            {t("data_protection_measures.regular_audits")}
          </Typography>
        </Typography>

        <Typography className="mt-4" variant="h6">
          {t("data_breach_response.title")}
        </Typography>
        <Typography className="my-0 list-decimal" variant="ul">
          <Typography variant="p" as="li">
            {t("data_breach_response.notification")}
          </Typography>
          <Typography variant="p" as="li">
            {t("data_breach_response.investigation")}
          </Typography>
        </Typography>

        <Typography className="mt-4" variant="h6">
          {t("compliance_and_training.title")}
        </Typography>
        <Typography className="my-0 list-decimal" variant="ul">
          <Typography variant="p" as="li">
            {t("compliance_and_training.legal_compliance")}
          </Typography>
          <Typography variant="p" as="li">
            {t("compliance_and_training.employee_training")}
          </Typography>
        </Typography>

        <Typography className="mt-4" variant="h6">
          {t("third_party_service_providers.title")}
        </Typography>
        <Typography className="my-0 list-decimal" variant="ul">
          <Typography variant="p" as="li">
            {t("third_party_service_providers.contracts")}
          </Typography>
          <Typography variant="p" as="li">
            {t("third_party_service_providers.monitoring")}
          </Typography>
        </Typography>

        <Typography className="mt-4" variant="h6">
          {t("user_rights_and_data_management.title")}
        </Typography>
        <Typography className="my-0 list-decimal" variant="ul">
          <Typography variant="p" as="li">
            {t.rich("user_rights_and_data_management.user_rights", {
              link: (chunks) => (
                <Link
                  className="text-interactive! no-underline! hover:underline!"
                  href="/legal/privacy-policy"
                >
                  {chunks}
                </Link>
              ),
            })}
          </Typography>
          <Typography variant="p" as="li">
            {t("user_rights_and_data_management.data_retention")}
          </Typography>
        </Typography>

        <Typography className="mt-4" variant="h6">
          {t("policy_updates.title")}
        </Typography>
        <Typography className="mt-2" variant="p">
          {t("policy_updates.description")}
        </Typography>

        <Typography className="mt-4" variant="h6">
          {t("contact_information.title")}
        </Typography>
        <Typography className="my-0 list-decimal" variant="ul">
          <Typography variant="p" as="li">
            {t.rich("contact_information.description", {
              email: (chunks) => (
                <Link
                  className="text-interactive! no-underline! hover:underline!"
                  href="mailto:teamnz@levincigroup.com"
                >
                  {chunks}
                </Link>
              ),
            })}
          </Typography>
        </Typography>
      </AccordionContent>
    </AccordionItem>
  )
}

export default DataSecurityPolicy
