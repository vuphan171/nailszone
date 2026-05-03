import { revalidateTag } from "next/cache"
import { NextResponse } from "next/server"

import CACHE_KEYS from "@/configs/cache-keys"

export async function POST() {
  revalidateTag(CACHE_KEYS.FOR_SALES, { expire: 0 })

  return NextResponse.json({
    revalidated: true,
    tag: CACHE_KEYS.FOR_SALES,
    now: Date.now(),
  })
}
