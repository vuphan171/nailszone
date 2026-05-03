import { ReactNode } from "react"

type Props = {
  children?: ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <div className="shrink grow bg-surface pt-16 overflow-hidden">
      {children}
    </div>
  )
}
