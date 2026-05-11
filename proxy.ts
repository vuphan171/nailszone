import createMiddleware from "next-intl/middleware"

import { auth } from "@/auth"

import { routing } from "./i18n/routing"

const intlMiddleware = createMiddleware(routing)

export const proxy = auth((req) => {
  return intlMiddleware(req)
})

export const config = {
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
}
