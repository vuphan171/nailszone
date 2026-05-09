import { Typography } from "@/components/ui/typography"

const NotificationItem = () => {
  return (
    <div className="flex items-start justify-between gap-x-4 border-b py-3 hover:bg-muted transition-colors duration-300 px-4">
      <div className="flex items-start gap-x-4">
        <div className="size-14 rounded-full bg-amber-300 shrink-0" />
        <div>
          <Typography className="font-normal text-foreground line-clamp-3">
            Your Master Class will start in 15 minutes.
          </Typography>
          <Typography
            className="font-normal text-muted-foreground"
            variant="smallText"
          >
            1m ago
          </Typography>
        </div>
      </div>
      <div className="size-3 rounded-full bg-primary shrink-0" />
    </div>
  )
}

export default NotificationItem
