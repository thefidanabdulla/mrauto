import ConsultationHero from '@/components/consultation/ConsultationHero'
import OrderCar from '@/components/consultation/OrderCar'
import SaleProcess from '@/components/consultation/SaleProcess'
import Faq from '@/components/faq/Faq'
import OurDifferences from '@/components/ourDifferences/OurDifferences'
import React from 'react'

const index = () => {
  return (
    <div>
      <ConsultationHero />
      <OurDifferences />
      <SaleProcess />
      <OrderCar />
      <Faq />
    </div>
  )
}

export default index