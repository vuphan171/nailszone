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

const ShippingPolicy = ({ value }: Props) => {
  const t = useTranslations("shipping_policy_page")

  return (
    <AccordionItem value={value}>
      <AccordionTrigger className="py-4 text-base leading-none font-normal tracking-tight **:data-[slot=accordion-trigger-icon]:size-4.5">
        {t("title")}
      </AccordionTrigger>
      <AccordionContent>
        <Typography variant="h6">{t("overview.title")}</Typography>
        <Typography className="mt-2" variant="p">
          {t("overview.description")}
        </Typography>

        <Typography className="mt-4" variant="h6">
          {t("methods.title")}
        </Typography>
        <Typography className="my-0 list-decimal" variant="ul">
          <Typography variant="p" as="li">
            {t("methods.carriers")}
          </Typography>
          <Typography variant="p" as="li">
            {t("methods.seller_options")}
          </Typography>
          <Typography variant="p" as="li">
            {t("methods.international_options")}
          </Typography>
        </Typography>

        <Typography className="mt-4" variant="h6">
          {t("addresses.title")}
        </Typography>
        <Typography className="my-0 list-decimal" variant="ul">
          <Typography variant="p" as="li">
            {t("addresses.checkout")}
          </Typography>
        </Typography>

        <Typography className="mt-4" variant="h6">
          {t("delivery_times.title")}
        </Typography>
        <Typography className="my-0 list-decimal" variant="ul">
          <Typography variant="p" as="li">
            {t("delivery_times.description")}
          </Typography>
        </Typography>

        <Typography className="mt-4" variant="h6">
          {t("costs.title")}
        </Typography>
        <Typography className="my-0 list-decimal" variant="ul">
          <Typography variant="p" as="li">
            {t("costs.basis")}
          </Typography>
          <Typography variant="p" as="li">
            {t("costs.handling")}
          </Typography>
        </Typography>

        <Typography className="mt-4" variant="h6">
          {t("tracking.title")}
        </Typography>
        <Typography className="my-0 list-decimal" variant="ul">
          <Typography variant="p" as="li">
            {t("tracking.description")}
          </Typography>
        </Typography>

        <Typography className="mt-4" variant="h6">
          {t("international.title")}
        </Typography>
        <Typography className="my-0 list-decimal" variant="ul">
          <Typography variant="p" as="li">
            {t("international.guidelines")}
          </Typography>
          <Typography variant="p" as="li">
            {t("international.restrictions")}
          </Typography>
        </Typography>

        <Typography className="mt-4" variant="h6">
          {t("special.title")}
        </Typography>
        <Typography className="my-0 list-decimal" variant="ul">
          <Typography variant="p" as="li">
            {t("special.description")}
          </Typography>
        </Typography>
      </AccordionContent>
    </AccordionItem>
  )
}

export default ShippingPolicy
