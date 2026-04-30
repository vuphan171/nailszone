import { ReactNode } from "react"
import { clsx } from "clsx"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

type Props = {
  children: ReactNode
}

export default async function RootLayout({ children }: Props) {
  return (
    <html>
      <body className={clsx(inter.className)}>{children}</body>
    </html>
  )
}
