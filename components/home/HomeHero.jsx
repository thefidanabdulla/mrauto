import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';
import Link from 'next/link';

import { useRouter } from "next/router";
import lang from '@/utils/translations.util.js';


const HomeHero = () => {
  //language
  const { locale } = useRouter();
  const { [locale]: t } = lang;
  
  return (
    <header className='w-full flex justify-center'>
      <div className='homeHero max-w-[1300px] w-full'>
        <Swiper
          spaceBetween={0}
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className='h-[500px] relative'>
              <Image 
                width={500} 
                height={500} 
                className="w-full h-full object-cover" 
                src="/imgs/car-1.jpg"
                alt='mrauto'
              />
              <Link href={'/consultation'}>
                <button className='absolute bottom-16 right-16 px-8 py-2 bg-[#FF7A00] text-[#ffffff] hover:bg-[#ffffff] transition-all duration-300 rounded-md hover:text-[#FF7A00] border border-[#FF7A00]'>
                  {t.viewMore}
                </button>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='h-[500px] relative'>
              <Image 
                width={500} 
                height={500} 
                className="w-full h-full object-cover" 
                src="/imgs/car-2.jpg"
                alt='mrauto'
              />
              <Link href={'/consultation'}>
                <button className='absolute bottom-16 right-16 px-8 py-2 bg-[#FF7A00] text-[#ffffff] hover:bg-[#ffffff] transition-all duration-300 rounded-md hover:text-[#FF7A00] border border-[#FF7A00]'>
                  {t.viewMore}
                </button>
              </Link>

            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='h-[500px] relative'>
              <Image 
                width={500} 
                height={500} 
                className="w-full h-full object-cover" 
                src="/imgs/car-3.jpg"
                alt='mrauto'
              />
              <Link href={'/consultation'}>
                <button className='absolute bottom-16 right-16 px-8 py-2 bg-[#FF7A00] text-[#ffffff] hover:bg-[#ffffff] transition-all duration-300 rounded-md hover:text-[#FF7A00] border border-[#FF7A00]'>
                  {t.viewMore}
                </button>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='h-[500px] relative'>
              <Image 
                width={500} 
                height={500} 
                className="w-full h-full object-cover" 
                src="/imgs/car-4.jpg"
                alt='mrauto'
              />
              <Link href={'/consultation'}>
                <button className='absolute bottom-16 right-16 px-8 py-2 bg-[#FF7A00] text-[#ffffff] hover:bg-[#ffffff] transition-all duration-300 rounded-md hover:text-[#FF7A00] border border-[#FF7A00]'>
                  {t.viewMore}
                </button>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='h-[500px] relative'>
              <Image 
                width={500} 
                height={500} 
                className="w-full h-full object-cover" 
                src="/imgs/car-5.jpg"
                alt='mrauto'
              />
              <Link href={'/consultation'}>
                <button className='absolute bottom-16 right-16 px-8 py-2 bg-[#FF7A00] text-[#ffffff] hover:bg-[#ffffff] transition-all duration-300 rounded-md hover:text-[#FF7A00] border border-[#FF7A00]'>
                  {t.viewMore}
                </button>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='h-[500px] relative'>
              <Image 
                width={500} 
                height={500} 
                className="w-full h-full object-cover" 
                src="/imgs/car-6.jpg"
                alt='mrauto'
              />
              <Link href={'/consultation'}>
                <button className='absolute bottom-16 right-16 px-8 py-2 bg-[#FF7A00] text-[#ffffff] hover:bg-[#ffffff] transition-all duration-300 rounded-md hover:text-[#FF7A00] border border-[#FF7A00]'>
                  {t.viewMore}
                </button>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='h-[500px] relative'>
              <Image 
                width={500} 
                height={500} 
                className="w-full h-full object-cover" 
                src="/imgs/car-7.jpg"
                alt='mrauto'
              />
              <Link href={'/consultation'}>
                <button className='absolute bottom-16 right-16 px-8 py-2 bg-[#FF7A00] text-[#ffffff] hover:bg-[#ffffff] transition-all duration-300 rounded-md hover:text-[#FF7A00] border border-[#FF7A00]'>
                  {t.viewMore}
                </button>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='h-[500px] relative'>
              <Image 
                width={500} 
                height={500} 
                className="w-full h-full object-cover" 
                src="/imgs/car-8.jpg"
                alt='mrauto'
              />
              <Link href={'/consultation'}>
                <button className='absolute bottom-16 right-16 px-8 py-2 bg-[#FF7A00] text-[#ffffff] hover:bg-[#ffffff] transition-all duration-300 rounded-md hover:text-[#FF7A00] border border-[#FF7A00]'>
                  {t.viewMore}
                </button>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='h-[500px] relative'>
              <Image 
                width={500} 
                height={500} 
                className="w-full h-full object-cover" 
                src="/imgs/car-9.jpg"
                alt='mrauto'
              />
              <Link href={'/consultation'}>
                <button className='absolute bottom-16 right-16 px-8 py-2 bg-[#FF7A00] text-[#ffffff] hover:bg-[#ffffff] transition-all duration-300 rounded-md hover:text-[#FF7A00] border border-[#FF7A00]'>
                  {t.viewMore}
                </button>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='h-[500px] relative'>
              <Image 
                width={500} 
                height={500} 
                className="w-full h-full object-cover" 
                src="/imgs/car-10.jpg"
                alt='mrauto'
              />
              <Link href={'/consultation'}>
                <button className='absolute bottom-16 right-16 px-8 py-2 bg-[#FF7A00] text-[#ffffff] hover:bg-[#ffffff] transition-all duration-300 rounded-md hover:text-[#FF7A00] border border-[#FF7A00]'>
                  {t.viewMore}
                </button>
              </Link>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </header>
  )
}

export default HomeHero