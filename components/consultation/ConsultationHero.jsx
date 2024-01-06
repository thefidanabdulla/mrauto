import Image from "next/image";
import React, { useState } from "react";

import { useRouter } from "next/router";
import lang from "@/utils/translations.util.js";
import Link from "next/link";
import DetailModal from "../detailModal/DetailModal";

const ConsultationHero = () => {
  //language
  const { locale } = useRouter();
  const { [locale]: t } = lang;
  
  const [isModalShow, setIsModalShow] = useState(false)

  return (
    <div className="w-full flex justify-center">
      <div className="max-w-[1300px] w-full px-4 2xl:px-0 py-[64px]">
        <div className="w-full  flex flex-col justify-center items-center lg:items-stretch lg:flex-row lg:justify-between">
          <div>
            <h1 className="text-[36px] md:text-[52px] text-center lg:text-start font-semibold mb-10">{t.consultationHeader}</h1>
            <div className="w-full justify-center lg:justify-start flex items-center gap-3 md:gap-8">
              <Link className="" href={"/consultation/#orderCar"}>
                <button className="h-[64px] px-10 text-sm md:text-lg font-semibold bg-[#000000] text-[#ffffff] hover:bg-[#1e1e1e] transition-all duration-300 rounded-md  border ">
                  {t.buyNow}
                </button>
              </Link>
              <button onClick={() => setIsModalShow(true)} className="flex items-center gap-3 text-sm md:text-lg font-semibold shadow-md hover:shadow-xl transition-all rounded-md  py-2 px-4">
                <Image src={'imgs/play.svg'} width={48} height={48} alt='mrauto' />
                {t.detailVideo}
              </button>
            </div>
          </div>
          <Image src={'imgs/consultationCar.svg'} className="max-w-[300px] sm:max-w-[500px] xl:max-w-[600px]" width={704} height={528} alt="mrauto" />
        </div>
        <DetailModal isModalShow={isModalShow} setIsModalShow={setIsModalShow} />
      </div>
    </div>
  );
};

export default ConsultationHero;
