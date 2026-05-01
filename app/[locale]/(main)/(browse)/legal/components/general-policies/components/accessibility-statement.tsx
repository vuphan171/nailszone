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

const AccessibilityStatement = ({ value }: Props) => {
  const t = useTranslations("accessibility_statement_page")

  return (
    <AccordionItem value={value}>
      <AccordionTrigger className="py-4 text-lg leading-none font-normal tracking-tight **:data-[slot=accordion-trigger-icon]:size-4.5">
        {t("title")}
      </AccordionTrigger>
      <AccordionContent>
        <Typography variant="h6">{t("commitment.title")}</Typography>
        <Typography className="mt-2" variant="p">
          {t("commitment.description")}
        </Typography>

        <Typography className="mt-4" variant="h6">
          {t("efforts_to_support.title")}
        </Typography>
        <Typography className="my-0 list-decimal" variant="ul">
          <Typography variant="p" as="li">
            {t("efforts_to_support.standards_compliance")}
          </Typography>
          <Typography variant="p" as="li">
            {t("efforts_to_support.training")}
          </Typography>
          <Typography variant="p" as="li">
            {t("efforts_to_support.feedback")}
          </Typography>
          <Typography variant="p" as="li">
            {t("efforts_to_support.accessibility_audit")}
          </Typography>
        </Typography>

        <Typography className="mt-4" variant="h6">
          {t("technical_information.title")}
        </Typography>
        <Typography className="mt-2" variant="p">
          {t("technical_information.description")}
        </Typography>

        <Typography className="mt-4" variant="h6">
          {t("known_limitations.title")}
        </Typography>
        <Typography className="mt-2" variant="p">
          {t("known_limitations.description")}
        </Typography>

        <Typography className="mt-4" variant="h6">
          {t("feedback_and_contact.title")}
        </Typography>
        <Typography className="mt-2" variant="p">
          {t("feedback_and_contact.intro")}
        </Typography>
        <Typography className="my-0 list-decimal" variant="ul">
          <Typography variant="p" as="li">
            {t("feedback_and_contact.phone")}
          </Typography>
          <Typography variant="p" as="li">
            {t.rich("feedback_and_contact.email", {
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
          <Typography variant="p" as="li">
            {t("feedback_and_contact.postal")}
          </Typography>
        </Typography>

        <Typography className="mt-4" variant="h6">
          {t("enforcement_procedure.title")}
        </Typography>
        <Typography className="mt-2" variant="p">
          {t("enforcement_procedure.description")}
        </Typography>

        <Typography className="mt-4" variant="h6">
          {t("external_links.title")}
        </Typography>
        <Typography className="mt-2" variant="p">
          {t("external_links.description")}
        </Typography>

        <Typography className="mt-4" variant="h6">
          {t("additional_information.title")}
        </Typography>
        <Typography className="mt-2" variant="p">
          {t("additional_information.description")}
        </Typography>
        <Typography className="my-0 list-decimal" variant="ul">
          <Typography variant="p" as="li">
            {t("additional_information.features")}
          </Typography>
          <Typography variant="p" as="li">
            {t("additional_information.date_statement")}
          </Typography>
        </Typography>
      </AccordionContent>
    </AccordionItem>
  )
}

export default AccessibilityStatement
