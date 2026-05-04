import TopForSaleCarousel from "@/app/[locale]/(main)/(browse)/for-sale/components/top-for-sales/top-for-sale-carousel"

import { getTopForSales } from "@/lib/api/for-sales"

const TopForSales = async () => {
  const topForSales = await getTopForSales()
  return <TopForSaleCarousel topForSales={topForSales} />
}

export default TopForSales
