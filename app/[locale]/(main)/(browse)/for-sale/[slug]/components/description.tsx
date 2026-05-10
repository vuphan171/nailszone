import { getTranslations } from "next-intl/server"

import { Typography } from "@/components/ui/typography"

const Description = async () => {
  const t = await getTranslations("ForSale.Detail")

  return (
    <div>
      <div className="px-2.5 py-5 border-b">
        <Typography variant="h4">{t("descriptionHeading")}</Typography>
      </div>
      <Typography className="mt-3">{t("descriptionBody")}</Typography>
    </div>
  )
}

export default Description
