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

const SellersCommonAgreement = ({ value }: Props) => {
  const t = useTranslations("sellers_common_agreement_page")

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
          {t("compliance.title")}
        </Typography>
        <Typography className="mt-2" variant="p">
          {t("compliance.description")}
        </Typography>

        <Typography className="mt-4" variant="h6">
          {t("seller_registration.title")}
        </Typography>
        <Typography className="mt-2" variant="p">
          {t("seller_registration.description")}
        </Typography>

        <Typography className="mt-4" variant="h6">
          {t("product_listing.title")}
        </Typography>
        <Typography className="mt-2" variant="p">
          {t.rich("product_listing.description", {
            detailing: (chunks) => chunks,
            imagery: (chunks) => chunks,
            accuracy: (chunks) => chunks,
          })}
        </Typography>

        <Typography className="mt-4" variant="h6">
          {t("customer_service.title")}
        </Typography>
        <Typography className="mt-2" variant="p">
          {t.rich("customer_service.description", {
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
          {t("prohibited.title")}
        </Typography>
        <Typography className="mt-2" variant="p">
          {t("prohibited.description")}
        </Typography>

        <Typography className="mt-4" variant="h6">
          {t("sales_shipping.title")}
        </Typography>
        <Typography className="mt-2" variant="p">
          {t("sales_shipping.description")}
        </Typography>

        <Typography className="mt-4" variant="h6">
          {t("pricing.title")}
        </Typography>
        <Typography className="mt-2" variant="p">
          {t("pricing.description")}
        </Typography>

        <Typography className="mt-4" variant="h6">
          {t("responsibilities.title")}
        </Typography>
        <Typography className="mt-2" variant="p">
          {t("responsibilities.description")}
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

export default SellersCommonAgreement
