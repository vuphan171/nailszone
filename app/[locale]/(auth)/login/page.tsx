import { LoginForm } from "@/app/[locale]/(auth)/login/components/login-form"

export default function Page() {
  return (
    <div className="flex min-h-svh items-center justify-center px-5 py-4">
      <div className="flex max-w-xl w-full mx-auto">
        <LoginForm />
      </div>
    </div>
  )
}
