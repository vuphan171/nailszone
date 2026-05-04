import { getForSales } from "@/lib/api/for-sales"

import { AdsCard } from "@/components/common/ads-card"

const AdsListCard = async () => {
  const forSales = await getForSales()

  return (
    <>
      {forSales.map((item) => {
        return (
          <div key={item.advertisement_id}>
            <AdsCard data={item} />
          </div>
        )
      })}
    </>
  )
}

export default AdsListCard
