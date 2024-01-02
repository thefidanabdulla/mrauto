import Image from 'next/image'
import React from 'react'


import { useRouter } from "next/router";
import lang from '@/utils/translations.util.js';

const Consultation = () => {
  //language
  const { locale } = useRouter();
  const { [locale]: t } = lang;

  return (
    <div className='w-full flex justify-center' id='ourDifferences'>
      <div className='max-w-[1300px] w-full px-4 2xl:px-0 pt-10 pb-[100px]'>
        <div className='flex flex-col lg:flex-row gap-12'> 
          <Image src={'/imgs/consultation.jpg'} alt='mrauto' width={600} height={450} className=' w-full lg:max-w-[600px]  object-cover rounded-md' />
          <div className=''>
            <p className='w-[90%]'>
              {t.homeConsultation}
            </p>
            <div className='mt-10 flex flex-col gap-4'>
              <div className='flex items-center gap-4'>
                <Image className='' src={'/imgs/checked.svg'} width={14} height={14} alt='mrauto' />
                <p>{t.homeConsultation1}</p>
              </div>
              <div className='flex items-center gap-4'>
                <Image className='' src={'/imgs/checked.svg'} width={14} height={14} alt='mrauto' />
                <p>{t.homeConsultation2}</p>
              </div>
              <div className='flex items-center gap-4'>
                <Image className='' src={'/imgs/checked.svg'} width={14} height={14} alt='mrauto' />
                <p>{t.homeConsultation3}</p>
              </div>
              <div className='flex items-center gap-4'>
                <Image className='' src={'/imgs/checked.svg'} width={14} height={14} alt='mrauto' />
                <p>{t.homeConsultation4}</p>
              </div>
              <div className='flex items-center gap-4'>
                <Image className='' src={'/imgs/checked.svg'} width={14} height={14} alt='mrauto' />
                <p>{t.homeConsultation5}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Consultation