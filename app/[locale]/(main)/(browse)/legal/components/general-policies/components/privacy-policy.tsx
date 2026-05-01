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

const PrivacyPolicy = ({ value }: Props) => {
  const t = useTranslations("privacy_policy_page")

  return (
    <AccordionItem value={value}>
      <AccordionTrigger className="py-4 text-base leading-none font-normal tracking-tight **:data-[slot=accordion-trigger-icon]:size-4.5">
        {t("title")}
      </AccordionTrigger>
      <AccordionContent>
        <Typography variant="h6">{t("introduction.title")}</Typography>
        <Typography className="mt-2" variant="p">
          {t("introduction.description")}
        </Typography>
        <Typography variant="h6">
          {t("information_we_collect.title")}
        </Typography>
        <Typography className="my-0 list-decimal" variant="ul">
          <Typography variant="p" as="li">
            {t("information_we_collect.personal_identification")}
          </Typography>
          <Typography variant="p" as="li">
            {t("information_we_collect.payment")}
          </Typography>
          <Typography variant="p" as="li">
            {t("information_we_collect.browsing")}
          </Typography>
        </Typography>

        <Typography className="mt-4" variant="h6">
          {t("how_we_use_information.title")}
        </Typography>
        <Typography className="mt-2" variant="p">
          {t("how_we_use_information.description")}
        </Typography>

        <Typography className="mt-4" variant="h6">
          {t("sharing_of_information.title")}
        </Typography>
        <Typography className="my-0 list-decimal" variant="ul">
          <Typography variant="p" as="li">
            {t("sharing_of_information.service_providers")}
          </Typography>
          <Typography variant="p" as="li">
            {t("sharing_of_information.legal_requirements")}
          </Typography>
          <Typography variant="p" as="li">
            {t("sharing_of_information.consent")}
          </Typography>
        </Typography>

        <Typography className="mt-4" variant="h6">
          {t("data_protection.title")}
        </Typography>
        <Typography className="mt-2" variant="p">
          {t("data_protection.description")}
        </Typography>

        <Typography className="mt-4" variant="h6">
          {t("your_rights.title")}
        </Typography>
        <Typography className="my-0 list-decimal" variant="ul">
          <Typography variant="p" as="li">
            {t("your_rights.access_correction")}
          </Typography>
          <Typography variant="p" as="li">
            {t("your_rights.deletion")}
          </Typography>
          <Typography variant="p" as="li">
            {t("your_rights.consent_withdrawal")}
          </Typography>
          <Typography variant="p" as="li">
            {t("your_rights.data_portability")}
          </Typography>
        </Typography>

        <Typography className="mt-4" variant="h6">
          {t("cookies_and_tracking.title")}
        </Typography>
        <Typography className="mt-2" variant="p">
          {t.rich("cookies_and_tracking.description", {
            link: (chunks) => (
              <Link
                className="text-interactive! no-underline! hover:underline!"
                href="/legal/cookie-policy"
              >
                {chunks}
              </Link>
            ),
          })}
        </Typography>

        <Typography className="mt-4" variant="h6">
          {t("international_transfers.title")}
        </Typography>
        <Typography className="mt-2" variant="p">
          {t("international_transfers.description")}
        </Typography>

        <Typography className="mt-4" variant="h6">
          {t("changes.title")}
        </Typography>
        <Typography className="mt-2" variant="p">
          {t("changes.description")}
        </Typography>

        <Typography className="mt-4" variant="h6">
          {t("contact_us.title")}
        </Typography>
        <Typography className="my-0 list-decimal" variant="ul">
          <Typography variant="p" as="li">
            {t.rich("contact_us.description", {
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

export default PrivacyPolicy
