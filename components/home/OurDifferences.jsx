import React from 'react'
import { FaBusinessTime } from "react-icons/fa6";
import { IoPricetag } from "react-icons/io5";
import { AiOutlineFieldTime } from "react-icons/ai";
import { TbShieldCheckFilled } from "react-icons/tb";

import { useRouter } from "next/router";
import lang from '@/utils/translations.util.js';


const OurDifferences = () => {

  //language
  const { locale } = useRouter();
  const { [locale]: t } = lang;

  return (
    <div className='w-full flex justify-center' id='ourDifferences'>
      <div className='max-w-[1300px] w-full px-4 2xl:px-0 pt-10 pb-[100px]'>
        <h2 className="text-xl md:text-3xl font-semibold mb-12">{t.ourServices}</h2>
        <div className='flex justify-center items-stretch flex-wrap gap-10'>
          <div className='shadow-md rounded-md p-2 pt-4 pb-8 flex flex-col justify-start items-center gap-3 w-[280px]'>
            <div className='w-[80px] h-[80px] bg-orange-300 rounded-full flex justify-center items-center'>
              <div className='w-[60px] h-[60px] bg-orange-500 rounded-full flex justify-center items-center text-white text-2xl'>
                <FaBusinessTime />
              </div>
            </div>
            <h4 className='text-center text-xl font-semibold'>{t.experience}</h4>
            <p className='text-center text-[rgba(0,0,0,0.5)]'>{t.aboutOurExperience}</p>
          </div>
          <div className='shadow-md rounded-md p-2 pt-4 pb-8 flex flex-col justify-start items-center gap-3 w-[280px]'>
            <div className='w-[80px] h-[80px] bg-orange-300 rounded-full flex justify-center items-center'>
              <div className='w-[60px] h-[60px] bg-orange-500 rounded-full flex justify-center items-center text-white text-2xl'>
              <IoPricetag />
              </div>
            </div>
            <h4 className='text-center text-xl font-semibold'>{t.price}</h4>
            <p className='text-center text-[rgba(0,0,0,0.5)]'>{t.aboutPrice}</p>
          </div>
          <div className='shadow-md rounded-md p-2 pt-4 pb-8 flex flex-col justify-start items-center gap-3 w-[280px]'>
            <div className='w-[80px] h-[80px] bg-orange-300 rounded-full flex justify-center items-center'>
              <div className='w-[60px] h-[60px] bg-orange-500 rounded-full flex justify-center items-center text-white text-2xl'>
                <AiOutlineFieldTime />
              </div>
            </div>
            <h4 className='text-center text-xl font-semibold'>{t.time}</h4>
            <p className='text-center text-[rgba(0,0,0,0.5)]'>{t.aboutTime}</p>
          </div>
          <div className='shadow-md rounded-md p-2 pt-4 pb-8 flex flex-col justify-start items-center gap-3 w-[280px]'>
            <div className='w-[80px] h-[80px] bg-orange-300 rounded-full flex justify-center items-center'>
              <div className='w-[60px] h-[60px] bg-orange-500 rounded-full flex justify-center items-center text-white text-2xl'>
                <TbShieldCheckFilled />
              </div>
            </div>
            <h4 className='text-center text-xl font-semibold'>{t.warranty}</h4>
            <p className='text-center text-[rgba(0,0,0,0.5)]'>{t.aboutWarranty}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurDifferences