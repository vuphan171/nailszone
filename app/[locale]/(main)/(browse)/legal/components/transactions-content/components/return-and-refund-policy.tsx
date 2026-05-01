import { useTranslations } from "next-intl"
import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"
import { Typography } from "@/components/ui/typography"

type Props = {
  value: string
}

const ReturnAndRefundPolicy = ({ value }: Props) => {
  const t = useTranslations("return_and_refund_policy_page")

  return (
    <AccordionItem value={value}>
      <AccordionTrigger className="py-4 text-lg leading-none font-normal tracking-tight **:data-[slot=accordion-trigger-icon]:size-4.5">
        {t("title")}
      </AccordionTrigger>
      <AccordionContent>
        <Typography variant="h6">{t("overview.title")}</Typography>
        <Typography className="mt-2" variant="p">
          {t("overview.description")}
        </Typography>

        <Typography className="mt-4" variant="h6">
          {t("conditions.title")}
        </Typography>
        <Typography className="my-0 list-decimal" variant="ul">
          <Typography variant="p" as="li">
            {t("conditions.within_window")}
          </Typography>
          <Typography variant="p" as="li">
            {t("conditions.accepted_reasons")}
          </Typography>
          <Typography variant="p" as="li">
            {t("conditions.item_state")}
          </Typography>
        </Typography>

        <Typography className="mt-4" variant="h6">
          {t("initiating.title")}
        </Typography>
        <Typography className="my-0 list-decimal" variant="ul">
          <Typography variant="p" as="li">
            {t("initiating.via_menu")}
          </Typography>
          <Typography variant="p" as="li">
            {t("initiating.provide_details")}
          </Typography>
        </Typography>

        <Typography className="mt-4" variant="h6">
          {t("return_process.title")}
        </Typography>
        <Typography className="my-0 list-decimal" variant="ul">
          <Typography variant="p" as="li">
            {t("return_process.seller_review")}
          </Typography>
          <Typography variant="p" as="li">
            {t("return_process.send_back")}
          </Typography>
          <Typography variant="p" as="li">
            {t("return_process.inspection")}
          </Typography>
        </Typography>

        <Typography className="mt-4" variant="h6">
          {t("refund_calculation.title")}
        </Typography>
        <Typography className="my-0 list-decimal" variant="ul">
          <Typography variant="p" as="li">
            {t("refund_calculation.amount_basis")}
          </Typography>
          <Typography variant="p" as="li">
            {t("refund_calculation.fee_responsibility")}
          </Typography>
        </Typography>

        <Typography className="mt-4" variant="h6">
          {t("refund_issuance.title")}
        </Typography>
        <Typography className="my-0 list-decimal" variant="ul">
          <Typography variant="p" as="li">
            {t("refund_issuance.after_approval")}
          </Typography>
          <Typography variant="p" as="li">
            {t("refund_issuance.disputes")}
          </Typography>
        </Typography>

        <Typography className="mt-4" variant="h6">
          {t("restocking_fee.title")}
        </Typography>
        <Typography className="my-0 list-decimal" variant="ul">
          <Typography variant="p" as="li">
            {t("restocking_fee.description")}
          </Typography>
        </Typography>

        <Typography className="mt-4" variant="h6">
          {t("exceptions.title")}
        </Typography>
        <Typography className="my-0 list-decimal" variant="ul">
          <Typography variant="p" as="li">
            {t("exceptions.lost_in_transit")}
          </Typography>
        </Typography>
      </AccordionContent>
    </AccordionItem>
  )
}

export default ReturnAndRefundPolicy
