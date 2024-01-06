import CarfaxHero from '@/components/carfax/CarfaxHero'
import PaymentProcess from '@/components/carfax/PaymentProcess'
import WhatIsCarfax from '@/components/carfax/WhatIsCarfax'
import WhereIsVIN from '@/components/carfax/WhereIsVIN'
import Faq from '@/components/faq/Faq'
import OurDifferences from '@/components/ourDifferences/OurDifferences'
import React from 'react'

const index = () => {
  return (
    <div>
      <CarfaxHero />
      <PaymentProcess />
      <WhatIsCarfax />
      <OurDifferences />
      <WhereIsVIN />
      <Faq />
    </div>
  )
}

export default index