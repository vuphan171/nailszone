import dayjs from "dayjs"

import { DATE_TIME_FORMATS } from "@/configs/date-time"

const formatTime = (time: string, format = DATE_TIME_FORMATS.DATE) => {
  return dayjs(time).format(format)
}

export { formatTime }
