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

const CommunityParticipationAgreement = ({ value }: Props) => {
  const t = useTranslations("community_participation_agreement_page")

  return (
    <AccordionItem value={value}>
      <AccordionTrigger className="py-4 text-lg leading-none font-normal tracking-tight **:data-[slot=accordion-trigger-icon]:size-4.5">
        {t("title")}
      </AccordionTrigger>
      <AccordionContent>
        <Typography variant="h6">{t("introduction.title")}</Typography>
        <Typography className="mt-2" variant="p">
          {t("introduction.description")}
        </Typography>

        <Typography className="mt-4" variant="h6">
          {t("acceptance.title")}
        </Typography>
        <Typography className="my-0 list-decimal" variant="ul">
          <Typography variant="p" as="li">
            {t.rich("acceptance.acknowledgment", {
              label: (chunks) => chunks,
              terms: (chunks) => (
                <Link
                  className="text-interactive! no-underline! hover:underline!"
                  href="/legal/terms-and-conditions"
                >
                  {chunks}
                </Link>
              ),
              privacy: (chunks) => (
                <Link
                  className="text-interactive! no-underline! hover:underline!"
                  href="/legal/privacy-policy"
                >
                  {chunks}
                </Link>
              ),
              cookies: (chunks) => (
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
            {t.rich("acceptance.amendments", {
              label: (chunks) => chunks,
            })}
          </Typography>
        </Typography>

        <Typography className="mt-4" variant="h6">
          {t("community_conduct.title")}
        </Typography>
        <Typography className="my-0 list-decimal" variant="ul">
          <Typography variant="p" as="li">
            {t.rich("community_conduct.respectful_behavior", {
              label: (chunks) => chunks,
            })}
          </Typography>
          <Typography variant="p" as="li">
            {t.rich("community_conduct.compliance", {
              label: (chunks) => chunks,
            })}
          </Typography>
          <Typography variant="p" as="li">
            {t.rich("community_conduct.content_responsibility", {
              label: (chunks) => chunks,
            })}
          </Typography>
        </Typography>

        <Typography className="mt-4" variant="h6">
          {t("transactions.title")}
        </Typography>
        <Typography className="my-0 list-decimal" variant="ul">
          <Typography variant="p" as="li">
            {t.rich("transactions.buyer_seller", {
              label: (chunks) => chunks,
            })}
          </Typography>
          <Typography variant="p" as="li">
            {t.rich("transactions.disputes", {
              label: (chunks) => chunks,
            })}
          </Typography>
        </Typography>

        <Typography className="mt-4" variant="h6">
          {t("limitation_of_liability.title")}
        </Typography>
        <Typography className="mt-2" variant="p">
          {t.rich("limitation_of_liability.acknowledgment_of_risk", {
            label: (chunks) => chunks,
          })}
        </Typography>
        <Typography className="mt-2" variant="p">
          {t.rich("limitation_of_liability.exemption", {
            label: (chunks) => chunks,
          })}
        </Typography>

        <Typography className="mt-4" variant="h6">
          {t("indemnification.title")}
        </Typography>
        <Typography className="mt-2" variant="p">
          {t("indemnification.description")}
        </Typography>

        <Typography className="mt-4" variant="h6">
          {t("governing_law.title")}
        </Typography>
        <Typography className="mt-2" variant="p">
          {t("governing_law.description")}
        </Typography>

        <Typography className="mt-4" variant="h6">
          {t("dispute_resolution.title")}
        </Typography>
        <Typography className="mt-2" variant="p">
          {t("dispute_resolution.description")}
        </Typography>

        <Typography className="mt-4" variant="h6">
          {t("contact_us.title")}
        </Typography>
        <Typography className="mt-2" variant="p">
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
      </AccordionContent>
    </AccordionItem>
  )
}

export default CommunityParticipationAgreement
