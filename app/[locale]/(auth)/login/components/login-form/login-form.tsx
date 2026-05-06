"use client"

import * as React from "react"

import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { toast } from "sonner"
import * as z from "zod"

import IconGoogle from "@/public/icons/ic-google.svg"

import { Button } from "@/components/ui/button"
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { PhoneInput } from "@/components/ui/phone-input"
import { Typography } from "@/components/ui/typography"

const formSchema = z.object({
  title: z
    .string()
    .min(5, "Bug title must be at least 5 characters.")
    .max(32, "Bug title must be at most 32 characters."),
  description: z
    .string()
    .min(20, "Description must be at least 20 characters.")
    .max(100, "Description must be at most 100 characters."),
})

export default function LoginForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  })

  function onSubmit(data: z.infer<typeof formSchema>) {
    toast("You submitted the following values:", {
      description: (
        <pre className="mt-2 w-[320px] overflow-x-auto rounded-md bg-code p-4 text-code-foreground">
          <code>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
      position: "bottom-right",
      classNames: {
        content: "flex flex-col gap-2",
      },
      style: {
        "--border-radius": "calc(var(--radius)  + 4px)",
      } as React.CSSProperties,
    })
  }

  return (
    <div className="px-5  md:px-13 border pt-15 pb-20 rounded-4xl w-full">
      <Typography
        variant="h3"
        className="text-3xl font-bold tracking-normal text-center"
      >
        Sign up or Sign in
      </Typography>
      <Typography variant="mediumText" className="mt-3 text-center font-normal">
        Enter your phone Number to Sign up / Sign in.
      </Typography>
      <form
        className="mt-5"
        id="form-rhf-demo"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FieldGroup className="gap-y-8">
          <Controller
            name="title"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel required htmlFor="phone-number">
                  Phone Number
                </FieldLabel>
                <PhoneInput
                  {...field}
                  id="phone-number"
                  aria-invalid={fieldState.invalid}
                  placeholder="Enter your phone number"
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
          <div className="flex flex-col gap-y-5">
            <Button
              className="w-full h-12 text-base font-medium tracking-normal"
              size="lg"
              type="submit"
            >
              Sign up / Sign in
            </Button>
            <Button
              className="w-full h-12 text-base font-medium tracking-normal"
              size="lg"
              variant="secondary"
              type="button"
            >
              <IconGoogle className="size-6 mr-1" />
              Sign up via Google account
            </Button>
          </div>
        </FieldGroup>
      </form>
    </div>
  )
}
