import Image from "next/image";
import React from "react";

import { useRouter } from "next/router";
import lang from '@/utils/translations.util.js';
import Link from "next/link";

const Services = () => {
  
  //language
  const { locale } = useRouter();
  const { [locale]: t } = lang;

  return (
    <div className="w-full flex justify-center">
      <div className=" max-w-[1300px] w-full px-4 2xl:px-0 py-[100px]">
        <h2 className="text-xl md:text-3xl font-semibold mb-12">{t.ourServices}</h2>
        <div className=" flex lg:flex-row flex-col lg:justify-between">
          <div className="w-[330px] rounded-lg shadow-sm overflow-hidden">
            <div className="w-full h-[200px] ">
              <Image
                width={500}
                height={500}
                className="w-full h-full object-cover"
                src="/imgs/car-1.jpg"
                alt="mrauto"
              />
            </div>
            <h3 className="text-center my-4 text-lg font-semibold px-2">{t.orderACar}</h3>
            <div className="flex justify-center mb-10">
              <Link href={'/consultation'}>
                <button className='px-8 py-2 bg-[#ffffff] text-[#FF7A00] hover:bg-[#FF7A00] transition-all duration-300 rounded-md hover:text-white border border-[#FF7A00]'>
                  {t.viewMore}
                </button>
              </Link>
            </div>
          </div>
          <div className="w-[330px] rounded-lg shadow-sm overflow-hidden">
            <div className="w-full h-[200px] ">
              <Image
                width={500}
                height={500}
                className="w-full h-full object-cover"
                src="/imgs/car-4.jpg"
                alt="mrauto"
              />
            </div>
            <h3 className="text-center my-4 text-lg font-semibold px-2">{t.informationAboutProcess}</h3>
            <div className="flex justify-center mb-10">
              <Link href={'/consultation'}>
                <button className='px-8 py-2 bg-[#ffffff] text-[#FF7A00] hover:bg-[#FF7A00] transition-all duration-300 rounded-md hover:text-white border border-[#FF7A00]'>
                  {t.viewMore}
                </button>
              </Link>
            </div>
          </div>
          <div className="w-[330px] rounded-lg shadow-sm overflow-hidden">
            <div className="w-full h-[200px] ">
              <Image
                width={500}
                height={500}
                className="w-full h-full object-cover"
                src="/imgs/car-7.jpg"
                alt="mrauto"
              />
            </div>
            <h3 className="text-center my-4 text-lg font-semibold px-2">{t.checkTheHistoryOfTheCar}</h3>
            <div className="flex justify-center mb-10">
              <Link href={'/carfax'}>
                <button className='px-8 py-2 bg-[#ffffff] text-[#FF7A00] hover:bg-[#FF7A00] transition-all duration-300 rounded-md hover:text-white border border-[#FF7A00]'>
                  {t.viewMore}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
