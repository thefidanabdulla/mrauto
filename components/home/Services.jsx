import Image from "next/image";
import React from "react";
import Link from "next/link";

import { useRouter } from "next/router";
import lang from '@/utils/translations.util.js';

const Services = () => {
  
  //language
  const { locale } = useRouter();
  const { [locale]: t } = lang;

  return (
    <section className="w-full flex justify-center">
      <div className=" max-w-[1300px] w-full px-4 2xl:px-0 py-[100px]">
        <h2 className="text-xl md:text-3xl font-semibold mb-12">{t.ourServices}</h2>
        <div className=" flex flex-row justify-center flex-wrap gap-8  lg:justify-between">
          <div className="w-[330px] rounded-lg shadow-md overflow-hidden">
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
                <button className='px-8 py-2 bg-[#FF7A00] text-[#ffffff] hover:bg-[#ffffff] transition-all duration-300 rounded-md hover:text-[#FF7A00] border border-[#FF7A00]'>
                  {t.viewMore}
                </button>
              </Link>
            </div>
          </div>
          <div className="w-[330px] rounded-lg shadow-md overflow-hidden">
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
                <button className='px-8 py-2 bg-[#FF7A00] text-[#ffffff] hover:bg-[#ffffff] transition-all duration-300 rounded-md hover:text-[#FF7A00] border border-[#FF7A00]'>
                  {t.viewMore}
                </button>
              </Link>
            </div>
          </div>
          <div className="w-[330px] rounded-lg shadow-md overflow-hidden">
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
                <button className='px-8 py-2 bg-[#FF7A00] text-[#ffffff] hover:bg-[#ffffff] transition-all duration-300 rounded-md hover:text-[#FF7A00] border border-[#FF7A00]'>
                  {t.viewMore}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
