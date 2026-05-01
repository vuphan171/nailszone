import { setRequestLocale } from "next-intl/server"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Typography } from "@/components/ui/typography"
import { Link } from "@/i18n/navigation"

type Props = {
  params: Promise<{ locale: string }>
}

const Page = async ({ params }: Props) => {
  const { locale } = await params

  setRequestLocale(locale)

  return (
    <div className="px-8 pt-6">
      <Typography variant="h3">General Policies</Typography>
      <div className="mt-6 rounded-lg bg-white px-5 py-4">
        <Accordion
          type="multiple"
          className="w-full"
          defaultValue={["terms-and-conditions"]}
        >
          <AccordionItem value="terms-and-conditions">
            <AccordionTrigger className="text-xl font-semibold tracking-tight text-primary">
              Terms and Conditions for NailsZone
            </AccordionTrigger>
            <AccordionContent>
              <Typography variant="h6">Introduction</Typography>
              <Typography className="mt-2" variant="p">
                At NailsZone, we are committed to protecting your privacy. This
                <Link
                  className="text-interactive"
                  href="/terms-and-conditions/privacy-policy"
                >
                  Our Privacy Policy
                </Link>{" "}
                explains how we collect, use, share, and safeguard your personal
                information when you visit our website, use our services, or
                interact with us. By using NailsZone, you consent to the data
                practices described in this policy.
              </Typography>
              <Typography variant="h6">Information We Collect</Typography>
              <Typography className="my-0 list-decimal" variant="ul">
                <Typography variant="p" as="li">
                  Personal Identification Information: We may collect your name,
                  email address, physical address, phone number, and other
                  contact details when you register, make a purchase, or
                  interact with our services.
                </Typography>
                <Typography variant="p" as="li">
                  Account Registration: You may need to register an account to
                  access certain features. Keep your account information
                  accurate and confidential.
                </Typography>
                <Typography variant="p" as="li">
                  Content: You are responsible for the content you post on
                  NailsZone and must comply with our Community Guidelines.
                </Typography>
              </Typography>

              <Typography className="mt-4" variant="h6">
                Privacy and Data Protection
              </Typography>
              <Typography className="mt-2" variant="p">
                Your privacy is paramount to us. Our Privacy Policy outlines how
                we collect, use, and protect your personal data, in compliance
                with GDPR, CCPA/CPRA, PIPEDA, and other applicable laws.
              </Typography>

              <Typography className="mt-4" variant="h6">
                Intellectual Property
              </Typography>
              <Typography className="my-0 list-decimal" variant="ul">
                <Typography variant="p" as="li">
                  NailsZone Content: The NailsZone website and its contents are
                  protected by intellectual property laws. Use of our content is
                  only permitted as explicitly authorized by these Terms.
                </Typography>
                <Typography variant="p" as="li">
                  User Content: You retain rights to the content you submit to
                  NailsZone but grant us a license to use, modify, and display
                  it as part of our services.
                </Typography>
              </Typography>

              <Typography className="mt-4" variant="h6">
                Purchases, Returns and Refunds
              </Typography>
              <Typography className="my-0 list-decimal" variant="ul">
                <Typography variant="p" as="li">
                  Purchases :When you make a purchase on NailsZone, you agree to
                  our Return and Refund Policy, which outlines the conditions
                  under which returns and refunds are accepted.
                </Typography>
                <Typography variant="p" as="li">
                  Shipping :Our Shipping Policy provides detailed information on
                  shipping methods, costs, and estimated delivery times.
                </Typography>
              </Typography>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}

export default Page
