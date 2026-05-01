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

const CommunityGuidelines = ({ value }: Props) => {
  const t = useTranslations("community_guidelines_page")

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
          {t("respectful_interaction.title")}
        </Typography>
        <Typography className="my-0 list-decimal" variant="ul">
          <Typography variant="p" as="li">
            {t("respectful_interaction.courtesy")}
          </Typography>
          <Typography variant="p" as="li">
            {t("respectful_interaction.no_harassment")}
          </Typography>
        </Typography>

        <Typography className="mt-4" variant="h6">
          {t("content_standards.title")}
        </Typography>
        <Typography className="my-0 list-decimal" variant="ul">
          <Typography variant="p" as="li">
            {t("content_standards.relevant")}
          </Typography>
          <Typography variant="p" as="li">
            {t("content_standards.no_hate")}
          </Typography>
          <Typography variant="p" as="li">
            {t("content_standards.safe_legal")}
          </Typography>
        </Typography>

        <Typography className="mt-4" variant="h6">
          {t("intellectual_property.title")}
        </Typography>
        <Typography className="mt-2" variant="p">
          {t("intellectual_property.description")}
        </Typography>

        <Typography className="mt-4" variant="h6">
          {t("privacy_and_confidentiality.title")}
        </Typography>
        <Typography className="mt-2" variant="p">
          {t("privacy_and_confidentiality.description")}
        </Typography>

        <Typography className="mt-4" variant="h6">
          {t("engagement_and_interaction.title")}
        </Typography>
        <Typography className="my-0 list-decimal" variant="ul">
          <Typography variant="p" as="li">
            {t("engagement_and_interaction.positive")}
          </Typography>
          <Typography variant="p" as="li">
            {t("engagement_and_interaction.reporting")}
          </Typography>
        </Typography>

        <Typography className="mt-4" variant="h6">
          {t("enforcement_and_consequences.title")}
        </Typography>
        <Typography className="mt-2" variant="p">
          {t("enforcement_and_consequences.description")}
        </Typography>

        <Typography className="mt-4" variant="h6">
          {t("amendments.title")}
        </Typography>
        <Typography className="mt-2" variant="p">
          {t("amendments.description")}
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

export default CommunityGuidelines
