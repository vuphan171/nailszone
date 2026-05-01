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

const IntellectualPropertyPolicy = ({ value }: Props) => {
  const t = useTranslations("intellectual_property_policy_page")

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
          {t("respect.title")}
        </Typography>
        <Typography className="my-0 list-decimal" variant="ul">
          <Typography variant="p" as="li">
            {t.rich("respect.user_content", {
              label: (chunks) => chunks,
            })}
          </Typography>
          <Typography variant="p" as="li">
            {t.rich("respect.attribution", {
              label: (chunks) => chunks,
            })}
          </Typography>
        </Typography>

        <Typography className="mt-4" variant="h6">
          {t("reporting.title")}
        </Typography>
        <Typography className="mt-2" variant="p">
          {t("reporting.notification_label")} {t("reporting.notification_intro")}
        </Typography>
        <Typography className="my-0 list-decimal" variant="ul">
          <Typography variant="p" as="li">
            {t("reporting.notification_bullet_1")}
          </Typography>
          <Typography variant="p" as="li">
            {t("reporting.notification_bullet_2")}
          </Typography>
          <Typography variant="p" as="li">
            {t("reporting.notification_bullet_3")}
          </Typography>
          <Typography variant="p" as="li">
            {t("reporting.notification_bullet_4")}
          </Typography>
          <Typography variant="p" as="li">
            {t("reporting.notification_bullet_5")}
          </Typography>
        </Typography>
        <Typography className="mt-2" variant="p">
          {t.rich("reporting.response", {
            label: (chunks) => chunks,
          })}
        </Typography>

        <Typography className="mt-4" variant="h6">
          {t("counter_notification.title")}
        </Typography>
        <Typography className="mt-2" variant="p">
          {t("counter_notification.intro")}
        </Typography>
        <Typography className="my-0 mt-2 list-decimal" variant="ul">
          <Typography variant="p" as="li">
            {t("counter_notification.item_1")}
          </Typography>
          <Typography variant="p" as="li">
            {t("counter_notification.item_2")}
          </Typography>
          <Typography variant="p" as="li">
            {t("counter_notification.item_3")}
          </Typography>
          <Typography variant="p" as="li">
            {t("counter_notification.item_4")}
          </Typography>
        </Typography>

        <Typography className="mt-4" variant="h6">
          {t("consequences.title")}
        </Typography>
        <Typography className="mt-2" variant="p">
          {t("consequences.description")}
        </Typography>

        <Typography className="mt-4" variant="h6">
          {t("modifications.title")}
        </Typography>
        <Typography className="mt-2" variant="p">
          {t("modifications.description")}
        </Typography>

        <Typography className="mt-4" variant="h6">
          {t("contact.title")}
        </Typography>
        <Typography className="mt-2" variant="p">
          {t.rich("contact.description", {
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

export default IntellectualPropertyPolicy
