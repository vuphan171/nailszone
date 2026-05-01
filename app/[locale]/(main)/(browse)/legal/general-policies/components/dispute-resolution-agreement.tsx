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

const DisputeResolutionAgreement = ({ value }: Props) => {
  const t = useTranslations("dispute_resolution_agreement_page")

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
        <Typography variant="h6">{t("purpose.title")}</Typography>
        <Typography className="mt-2" variant="p">
          {t("purpose.description")}
        </Typography>
        <Typography variant="h6">{t("scope.title")}</Typography>
        <Typography className="mt-2" variant="p">
          {t("scope.description")}
        </Typography>

        <Typography className="mt-4" variant="h6">
          {t("arbitration_process.title")}
        </Typography>
        <Typography className="my-0 list-decimal" variant="ul">
          <Typography variant="p" as="li">
            {t("arbitration_process.initiation")}
          </Typography>
          <Typography variant="p" as="li">
            {t("arbitration_process.provider")}
          </Typography>
          <Typography variant="p" as="li">
            {t("arbitration_process.rules")}
          </Typography>
          <Typography variant="p" as="li">
            {t("arbitration_process.location")}
          </Typography>
          <Typography variant="p" as="li">
            {t("arbitration_process.arbitrator_decision")}
          </Typography>
        </Typography>

        <Typography className="mt-4" variant="h6">
          {t("exceptions_to_arbitration.title")}
        </Typography>
        <Typography className="my-0 list-decimal" variant="ul">
          <Typography variant="p" as="li">
            {t("exceptions_to_arbitration.small_claims")}
          </Typography>
          <Typography variant="p" as="li">
            {t("exceptions_to_arbitration.injunctive_relief")}
          </Typography>
        </Typography>

        <Typography className="mt-4" variant="h6">
          {t("waiver_of_jury_trial.title")}
        </Typography>
        <Typography className="mt-2" variant="p">
          {t("waiver_of_jury_trial.description")}
        </Typography>

        <Typography className="mt-4" variant="h6">
          {t("opt_out_provision.title")}
        </Typography>
        <Typography className="mt-2" variant="p">
          {t("opt_out_provision.description")}
        </Typography>

        <Typography className="mt-4" variant="h6">
          {t("changes.title")}
        </Typography>
        <Typography className="mt-2" variant="p">
          {t("changes.description")}
        </Typography>

        <Typography className="mt-4" variant="h6">
          {t("governing_law.title")}
        </Typography>
        <Typography className="mt-2" variant="p">
          {t("governing_law.description")}
        </Typography>

        <Typography className="mt-4" variant="h6">
          {t("contact_information.title")}
        </Typography>
        <Typography className="mt-2" variant="p">
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
      </AccordionContent>
    </AccordionItem>
  )
}

export default DisputeResolutionAgreement
