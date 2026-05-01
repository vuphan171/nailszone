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

const BuyerAgreement = ({ value }: Props) => {
  const t = useTranslations("buyer_agreement_page")

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

        <Typography className="mt-4" variant="h6">
          {t("acceptance.title")}
        </Typography>
        <Typography className="mt-2" variant="p">
          {t.rich("acceptance.description", {
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

        <Typography className="mt-4" variant="h6">
          {t("buyer_responsibilities.title")}
        </Typography>
        <Typography className="mt-2" variant="p">
          {t.rich("buyer_responsibilities.description", {
            accurate: (chunks) => chunks,
            respectful: (chunks) => chunks,
            compliance: (chunks) => chunks,
            policy: (chunks) => (
              <Link
                className="text-interactive! no-underline! hover:underline!"
                href="/legal/return-and-refund-policy"
              >
                {chunks}
              </Link>
            ),
          })}
        </Typography>

        <Typography className="mt-4" variant="h6">
          {t("transactions.title")}
        </Typography>
        <Typography className="mt-2" variant="p">
          {t.rich("transactions.description", {
            direct: (chunks) => chunks,
            payment: (chunks) => chunks,
          })}
        </Typography>

        <Typography className="mt-4" variant="h6">
          {t("limitation_of_liability.title")}
        </Typography>
        <Typography className="mt-2" variant="p">
          {t.rich("limitation_of_liability.description", {
            transactional: (chunks) => chunks,
            content: (chunks) => chunks,
          })}
        </Typography>

        <Typography className="mt-4" variant="h6">
          {t("disclaimers.title")}
        </Typography>
        <Typography className="mt-2" variant="p">
          {t.rich("disclaimers.description", {
            asis: (chunks) => chunks,
            thirdparty: (chunks) => chunks,
          })}
        </Typography>

        <Typography className="mt-4" variant="h6">
          {t("governing_law.title")}
        </Typography>
        <Typography className="mt-2" variant="p">
          {t("governing_law.description")}
        </Typography>

        <Typography className="mt-4" variant="h6">
          {t("amendments.title")}
        </Typography>
        <Typography className="mt-2" variant="p">
          {t("amendments.description")}
        </Typography>

        <Typography className="mt-4" variant="h6">
          {t("acknowledgment.title")}
        </Typography>
        <Typography className="mt-2" variant="p">
          {t("acknowledgment.description")}
        </Typography>
      </AccordionContent>
    </AccordionItem>
  )
}

export default BuyerAgreement
