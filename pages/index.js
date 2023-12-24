import Image from 'next/image'
import { Inter } from 'next/font/google'
import HomeHero from '@/components/home/HomeHero'
import Services from '@/components/home/Services'
import OurDifferences from '@/components/home/OurDifferences'
import Consultation from '@/components/home/Consultation'
import Carfax from '@/components/home/Carfax'
import Contact from '@/components/home/Contact'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <HomeHero />
      <Services />
      <OurDifferences />
      <Consultation />
      <Carfax />
      <Contact />
    </div>
  )
}
