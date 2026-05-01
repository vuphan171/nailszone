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

const TermsAndConditions = ({ value }: Props) => {
  const t = useTranslations("terms_and_conditions_page")

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
        <Typography variant="h6">{t("use_of_services.title")}</Typography>
        <Typography className="my-0 list-decimal" variant="ul">
          <Typography variant="p" as="li">
            {t("use_of_services.eligibility")}
          </Typography>
          <Typography variant="p" as="li">
            {t("use_of_services.account_registration")}
          </Typography>
          <Typography variant="p" as="li">
            {t("use_of_services.content")}
          </Typography>
        </Typography>

        <Typography className="mt-4" variant="h6">
          {t("privacy_and_data_protection.title")}
        </Typography>
        <Typography className="mt-2" variant="p">
          {t.rich("privacy_and_data_protection.description", {
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

        <Typography className="mt-4" variant="h6">
          {t("intellectual_property.title")}
        </Typography>
        <Typography className="my-0 list-decimal" variant="ul">
          <Typography variant="p" as="li">
            {t("intellectual_property.nailszone_content")}
          </Typography>
          <Typography variant="p" as="li">
            {t("intellectual_property.user_content")}
          </Typography>
        </Typography>

        <Typography className="mt-4" variant="h6">
          {t("purchases_returns_and_refunds.title")}
        </Typography>
        <Typography className="my-0 list-decimal" variant="ul">
          <Typography variant="p" as="li">
            {t.rich("purchases_returns_and_refunds.purchases", {
              link: (chunks) => (
                <Link
                  className="text-interactive! no-underline! hover:underline!"
                  href="/legal/return-and-refund-policy"
                >
                  {chunks}
                </Link>
              ),
            })}
          </Typography>
          <Typography variant="p" as="li">
            {t.rich("purchases_returns_and_refunds.shipping", {
              link: (chunks) => (
                <Link
                  className="text-interactive! no-underline! hover:underline!"
                  href="/legal/shipping-policy"
                >
                  {chunks}
                </Link>
              ),
            })}
          </Typography>
        </Typography>

        <Typography className="mt-4" variant="h6">
          {t("cookies_and_data_security.title")}
        </Typography>
        <Typography className="my-0 list-decimal" variant="ul">
          <Typography variant="p" as="li">
            {t.rich("cookies_and_data_security.cookies", {
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
          <Typography variant="p" as="li">
            {t.rich("cookies_and_data_security.data_security", {
              link: (chunks) => (
                <Link
                  className="text-interactive! no-underline! hover:underline!"
                  href="/legal/data-security-policy"
                >
                  {chunks}
                </Link>
              ),
            })}
          </Typography>
        </Typography>

        <Typography className="mt-4" variant="h6">
          {t("dispute_resolution.title")}
        </Typography>
        <Typography className="my-0 list-decimal" variant="ul">
          <Typography variant="p" as="li">
            {t.rich("dispute_resolution.governing_law", {
              link: (chunks) => (
                <Link
                  className="text-interactive! no-underline! hover:underline!"
                  href="/legal/governing-law"
                >
                  {chunks}
                </Link>
              ),
            })}
          </Typography>
          <Typography variant="p" as="li">
            {t.rich("dispute_resolution.dispute_resolution_process", {
              link: (chunks) => (
                <Link
                  className="text-interactive! no-underline! hover:underline!"
                  href="/legal/dispute-resolution-and-arbitration-agreement"
                >
                  {chunks}
                </Link>
              ),
            })}
          </Typography>
        </Typography>

        <Typography className="mt-4" variant="h6">
          {t("accessibility.title")}
        </Typography>
        <Typography className="my-0 list-decimal" variant="ul">
          <Typography variant="p" as="li">
            {t.rich("accessibility.description", {
              link: (chunks) => (
                <Link
                  className="text-interactive! no-underline! hover:underline!"
                  href="/legal/accessibility-statement"
                >
                  {chunks}
                </Link>
              ),
            })}
          </Typography>
        </Typography>

        <Typography className="mt-4" variant="h6">
          {t("modifications_to_terms.title")}
        </Typography>
        <Typography className="my-0 list-decimal" variant="ul">
          <Typography variant="p" as="li">
            {t.rich("modifications_to_terms.description", {
              link: (chunks) => (
                <Link
                  className="text-interactive! no-underline! hover:underline!"
                  href="/legal/modifications-to-terms"
                >
                  {chunks}
                </Link>
              ),
            })}
          </Typography>
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

export default TermsAndConditions
