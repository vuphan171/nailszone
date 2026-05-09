"use client"

import * as React from "react"

import { useTranslations } from "next-intl"

import { zodResolver } from "@hookform/resolvers/zod"
import { EyeIcon, EyeOffIcon } from "lucide-react"
import { signIn } from "next-auth/react"
import { Controller, useForm } from "react-hook-form"
import { toast } from "sonner"
import * as z from "zod"

import { Link, useRouter } from "@/i18n/navigation"

import { Button } from "@/components/ui/button"
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Typography } from "@/components/ui/typography"

const PasswordForm = () => {
  const t = useTranslations("login_page")
  const router = useRouter()

  const [showPwd, setShowPwd] = React.useState(false)

  const formSchema = React.useMemo(
    () =>
      z.object({
        password: z.string().min(1, { message: t("password_required") }),
      }),
    [t]
  )

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
    },
  })

  const {
    formState: { isValid, isSubmitting },
  } = form

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const response = await signIn("credentials", {
      phoneNumber: "12139156465",
      password: values.password,
      redirect: false,
    })

    const { error, code } = response

    if (error) {
      toast.error(t(code ?? "invalid_credentials"))
      return
    }

    router.push("/")
  }

  return (
    <div className="px-5 rounded-2xl md:px-13 border pt-15 pb-20 md:rounded-4xl w-full">
      <Typography
        variant="h3"
        className="text-3xl font-bold tracking-normal text-center"
      >
        {t("enter_password")}
      </Typography>
      <Typography variant="mediumText" className="mt-3 text-center font-normal">
        {t("enter_password_to_sign_in")}
      </Typography>
      <form
        className="mt-5"
        id="form-rhf-demo"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FieldGroup className="gap-y-2">
          <Controller
            name="password"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel required htmlFor="password">
                  {t("password")}
                </FieldLabel>
                <div className="relative">
                  <Input
                    {...field}
                    type={showPwd ? "text" : "password"}
                    placeholder="Password"
                    className="pr-9 h-12 text-base placeholder:text-base"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setShowPwd((prevState) => !prevState)}
                    className="text-muted-foreground focus-visible:ring-ring/50 absolute top-2 right-2 rounded-l-none hover:bg-transparent"
                  >
                    {showPwd ? (
                      <EyeIcon className="size-6" />
                    ) : (
                      <EyeOffIcon className="size-6" />
                    )}
                    <span className="sr-only">
                      {showPwd ? "Hide password" : "Show password"}
                    </span>
                  </Button>
                </div>
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
          <div className="flex w-full justify-end">
            <Link
              className="text-interactive hover:underline transition-all duration-300 ease-in-out"
              href="/login/password/forgot"
            >
              {t("forgot_password")}
            </Link>
          </div>
          <div className="mt-6 flex flex-col gap-y-5">
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
              {t("sign_in_with_otp")}
            </Button>
          </div>
        </FieldGroup>
      </form>
    </div>
  )
}

export default PasswordForm
