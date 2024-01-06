import Image from "next/image";
import React from "react";

import { useRouter } from "next/router";
import lang from "@/utils/translations.util.js";
import Link from "next/link";

const WhatIsCarfax = () => {
  //language
  const { locale } = useRouter();
  const { [locale]: t } = lang;

  return (
    <section className="w-full flex justify-center" id="ourDifferences">
      <div className="max-w-[1300px] w-full px-4 2xl:px-0 pt-10 pb-[100px]">
        <h2 className="text-[32px] text-center mb-8 font-bold">{t.whatIsCarfax}</h2>
        <div className="flex flex-col lg:flex-row gap-12">
          <div className=" w-full lg:max-w-[600px] h-[350px] rounded-md">
            <iframe
              width="600"
              height="350"
              className="w-full h-full"
              src="https://www.youtube.com/embed/FtiaSn5iCg8?si=FnFmEm9KFgwetsfM"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="">
            <h3 className="md:w-[70%] text-[24px] mb-8 font-semibold">
              Lorem ipsum dolor sit amet dolor sit amet.
            </h3>
            <p className="w-[90%]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
              architecto amet rem temporibus praesentium pariatur.
            </p>
            <div className="mt-10 flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <Image
                  className=""
                  src={"/imgs/checked.svg"}
                  width={14}
                  height={14}
                  alt="mrauto"
                />
                <p>{t.homeConsultation1}</p>
              </div>
              <div className="flex items-center gap-4">
                <Image
                  className=""
                  src={"/imgs/checked.svg"}
                  width={14}
                  height={14}
                  alt="mrauto"
                />
                <p>{t.homeConsultation2}</p>
              </div>
              <div className="flex items-center gap-4">
                <Image
                  className=""
                  src={"/imgs/checked.svg"}
                  width={14}
                  height={14}
                  alt="mrauto"
                />
                <p>{t.homeConsultation3}</p>
              </div>
              <div className="flex items-center gap-4">
                <Image
                  className=""
                  src={"/imgs/checked.svg"}
                  width={14}
                  height={14}
                  alt="mrauto"
                />
                <p>{t.homeConsultation4}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsCarfax;
