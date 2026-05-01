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

const CookiePolicy = ({ value }: Props) => {
  const t = useTranslations("cookie_policy_page")

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
        <Typography variant="h6">{t("what_are_cookies.title")}</Typography>
        <Typography className="mt-2" variant="p">
          {t("what_are_cookies.description")}
        </Typography>

        <Typography className="mt-4" variant="h6">
          {t("how_we_use_cookies.title")}
        </Typography>
        <Typography className="my-0 list-decimal" variant="ul">
          <Typography variant="p" as="li">
            {t("how_we_use_cookies.essential")}
          </Typography>
          <Typography variant="p" as="li">
            {t("how_we_use_cookies.performance_analytics")}
          </Typography>
          <Typography variant="p" as="li">
            {t("how_we_use_cookies.functionality")}
          </Typography>
          <Typography variant="p" as="li">
            {t("how_we_use_cookies.advertising")}
          </Typography>
        </Typography>

        <Typography className="mt-4" variant="h6">
          {t("third_party_cookies.title")}
        </Typography>
        <Typography className="mt-2" variant="p">
          {t("third_party_cookies.description")}
        </Typography>
        <Typography className="my-0 list-decimal" variant="ul">
          <Typography variant="p" as="li">
            {t("third_party_cookies.analytics_providers")}
          </Typography>
          <Typography variant="p" as="li">
            {t("third_party_cookies.social_media")}
          </Typography>
        </Typography>

        <Typography className="mt-4" variant="h6">
          {t("managing_your_cookies.title")}
        </Typography>
        <Typography className="mt-2" variant="p">
          {t("managing_your_cookies.description")}
        </Typography>

        <Typography className="mt-4" variant="h6">
          {t("changes.title")}
        </Typography>
        <Typography className="mt-2" variant="p">
          {t("changes.description")}
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

export default CookiePolicy
