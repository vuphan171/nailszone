import { cn } from "@/lib/utils"
import Link from "next/link"
import { useTranslations } from "next-intl"

type Props = {
  slug: string
  icon: React.ReactNode
  title: string
  description: string
}

const PolicyCard: React.FC<Props> = ({ slug, icon, title, description }) => {
  const t = useTranslations("legal_page")

  return (
    <Link
      href={`/terms-and-conditions/${slug}`}
      prefetch
      className={cn(
        "group relative flex flex-col rounded-xl bg-card p-6 shadow-sm transition-all",
        "hover:-translate-y-0.5 hover:border-foreground/15 hover:shadow-md",
        "focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
      )}
    >
      <div
        className="mb-4 flex size-12 items-center justify-center rounded-xl border border-border bg-muted/40 text-foreground transition-colors group-hover:border-foreground/10 group-hover:bg-muted/60"
        aria-hidden
      >
        {icon}
      </div>
      <h2 className="text-lg font-semibold tracking-tight text-foreground group-hover:text-foreground">
        {title}
      </h2>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
      <span className="mt-4 text-sm font-medium text-primary group-hover:underline">
        {t("view_policy")}
      </span>
    </Link>
  )
}

export default PolicyCard
