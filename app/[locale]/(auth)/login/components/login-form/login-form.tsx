"use client"

import * as React from "react"

import { useTranslations } from "next-intl"

import { useMutation } from "@apollo/client/react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { isValidPhoneNumber } from "react-phone-number-input"
import * as z from "zod"

import IconGoogle from "@/public/icons/ic-google.svg"

import { APP_DEFAULTS } from "@/configs/app-defaults"
import { APP_ROUTES } from "@/configs/routes"

import { LoggerService } from "@/helpers/logger-service"
import { normalizePhoneNumber } from "@/helpers/phone"

import { useRouter } from "@/i18n/navigation"

import { CHECK_PHONE_NUMBER_EXIST_MUTATION } from "@/lib/graphql/mutations/auth"
import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { PhoneInput } from "@/components/ui/phone-input"
import { Typography } from "@/components/ui/typography"

const LoginForm = () => {
  const router = useRouter()

  const t = useTranslations("login_page")

  const [checkPhoneNumberRequest] = useMutation(
    CHECK_PHONE_NUMBER_EXIST_MUTATION
  )

  const formSchema = React.useMemo(
    () =>
      z.object({
        phoneNumber: z
          .string()
          .min(1, { message: t("phone_required") })
          .refine(
            (value) => isValidPhoneNumber(value, APP_DEFAULTS.COUNTRY_CODE),
            {
              message: t("phone_invalid"),
            }
          ),
        agreeToTextMessage: z.boolean().refine((value) => value, {
          message: t("text_message_agreement"),
        }),
        agreeToTermsAndConditions: z.boolean().refine((value) => value, {
          message: t("terms_and_conditions_agreement"),
        }),
      }),
    [t]
  )

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phoneNumber: "",
    },
  })

  const {
    formState: { isValid, isSubmitting },
  } = form

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const cleanedPhoneNumber = normalizePhoneNumber(values.phoneNumber)

      const response = await checkPhoneNumberRequest({
        variables: {
          phoneNumber: cleanedPhoneNumber,
        },
      })

      if (!response?.data?.checkPhoneNumberOrEmailExist) {
        throw new Error("Failed to check phone number")
      }

      const { result } = response?.data?.checkPhoneNumberOrEmailExist

      if (result) {
        router.push(APP_ROUTES.loginPassword(cleanedPhoneNumber))
      }
    } catch (error) {
      LoggerService.logError(error)
    }
  }

  return (
    <div className="px-5 rounded-2xl md:px-13 border pt-15 pb-20 md:rounded-4xl w-full">
      <Typography
        variant="h3"
        className="text-3xl font-bold tracking-normal text-center"
      >
        {t("title")}
      </Typography>
      <Typography variant="mediumText" className="mt-3 text-center font-normal">
        {t("description")}
      </Typography>
      <form
        className="mt-5"
        id="form-rhf-demo"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FieldGroup className="gap-y-6">
          <Controller
            name="phoneNumber"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel required htmlFor="phone-number">
                  {t("phone_number")}
                </FieldLabel>
                <PhoneInput
                  {...field}
                  id="phone-number"
                  aria-invalid={fieldState.invalid}
                  placeholder={t("phone_number_placeholder")}
                  autoComplete="off"
                  countries={["US"]}
                  defaultCountry="US"
                  className="h-12"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
          <div className="flex flex-col gap-y-4">
            <Controller
              name="agreeToTextMessage"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field
                  data-invalid={fieldState.invalid}
                  orientation="horizontal"
                >
                  <Checkbox
                    id="agree-to-text-message"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    aria-invalid={fieldState.invalid}
                    name="agree-to-text-message"
                  />
                  <FieldLabel
                    htmlFor="agree-to-text-message"
                    className={cn("text-sm", {
                      "text-muted-foreground": !fieldState.invalid,
                    })}
                  >
                    {t("text_message_agreement")}
                  </FieldLabel>
                </Field>
              )}
            />
            <Controller
              name="agreeToTermsAndConditions"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field
                  data-invalid={fieldState.invalid}
                  orientation="horizontal"
                >
                  <Checkbox
                    checked={field.value}
                    aria-invalid={fieldState.invalid}
                    onCheckedChange={field.onChange}
                    id="agree-to-terms-and-conditions"
                    name="agree-to-terms-and-conditions"
                  />
                  <FieldLabel
                    htmlFor="agree-to-terms-and-conditions"
                    className={cn("text-sm", {
                      "text-muted-foreground": !fieldState.invalid,
                    })}
                  >
                    {t("terms_and_conditions_agreement")}
                  </FieldLabel>
                </Field>
              )}
            />
          </div>
          <div className="mt-3 flex flex-col gap-y-5">
            <Button
              loading={isSubmitting}
              className="w-full h-12 text-base font-medium tracking-normal"
              size="lg"
              disabled={!isValid || isSubmitting}
              type="submit"
            >
              {t("sign_in")}
            </Button>
            <Button
              className="w-full h-12 text-base font-medium tracking-normal"
              size="lg"
              variant="secondary"
              type="button"
            >
              <IconGoogle className="size-6 mr-1" />
              {t("sign_in_with_google")}
            </Button>
          </div>
        </FieldGroup>
      </form>
    </div>
  )
}

export default LoginForm
