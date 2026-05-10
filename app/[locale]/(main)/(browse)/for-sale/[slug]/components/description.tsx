import { getTranslations } from "next-intl/server"

import { Advertisement } from "@/types/advertisement"

import { Typography } from "@/components/ui/typography"

type Props = {
  data: Advertisement
}

const Description = async ({ data }: Props) => {
  const t = await getTranslations("for_sale_detail_page")

  return (
    <div>
      <div className="px-2.5 py-5 border-b">
        <Typography variant="h4">{t("description")}</Typography>
      </div>
      <div
        className="mt-3"
        dangerouslySetInnerHTML={{ __html: data.description }}
      />
    </div>
  )
}

export default Description
