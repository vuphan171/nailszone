import { useTranslations } from "next-intl"

import { Accordion } from "@/components/ui/accordion"
import { Typography } from "@/components/ui/typography"

import IntellectualPropertyPolicy from "./components/intellectual-property-policy"
import ReturnAndRefundPolicy from "./components/return-and-refund-policy"
import ShippingPolicy from "./components/shipping-policy"

const TransactionsContent = () => {
  const t = useTranslations("legal_page")
  return (
    <div>
      <Typography variant="h3">{t("transactions_and_content")}</Typography>
      <div className="mt-4 rounded-lg bg-white px-5">
        <Accordion type="multiple" className="w-full">
          <ReturnAndRefundPolicy value="return-and-refund-policy" />
          <ShippingPolicy value="shipping-policy" />
          <IntellectualPropertyPolicy value="intellectual-property-policy" />
        </Accordion>
      </div>
    </div>
  )
}

export default TransactionsContent
