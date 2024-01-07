import Image from "next/image";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

import { useRouter } from "next/router";
import lang from "@/utils/translations.util.js";
import Link from "next/link";

const CarfaxHero = () => {
  //language
  const { locale } = useRouter();
  const { [locale]: t } = lang;

  const [vinCode, setVinCode] = useState("");
  const [isModalShow, setIsModalShow] = useState(false);

  return (
    <section className="w-full flex justify-center" id="ourDifferences">
      <div className="max-w-[1300px] w-full px-4 2xl:px-0 py-[64px]">
        <div
          className={`${
            isModalShow ? "fixed" : "hidden"
          } w-full h-full  top-0 left-0 bg-[rgba(0,0,0,0.5)] z-[100] flex justify-center items-center`}
        >
          <div className="relative max-w-[800px] w-full bg-white m-4 h-[350px] md:h-[500px] lg:h-[400px] transparent overflow-hidden rounded-2xl flex justify-center items-center">
            <button
              onClick={() => setIsModalShow(false)}
              className="p-3 bg-[rgba(0,0,0,0.6)] rounded-full text-white border border-[rgba(255,255,255,.5)] text-xl absolute top-4 right-4 z-[200]"
            >
              <AiOutlineClose />
            </button>
            <form className="flex flex-col gap-3 w-[70%]">
              <input
                className="p-3 rounded-md border outline-none font-semibold"
                placeholder={t.enterTheVinNumber}
                value={vinCode}
                onChange={(e) => setVinCode(e.target.value)}
              />
              <input
                className="p-3 rounded-md border outline-none font-semibold"
                placeholder={t.phone}
                type="email"
              />
              <input
                className="p-3 rounded-md bg-[#FF4605] text-white  outline-none border-none font-semibold cursor-pointer hover:bg-[#ff4805e7] transition-all"
                value={t.send}
                type="submit"
              />
            </form>
          </div>
        </div>
        <div className="w-full flex gap-4">
          <Image
            src={"imgs/vinCarHero.svg"}
            width={560}
            height={366}
            alt="mrauto"
            className=""
          />
          <div>
            <h1 className="text-[32px] md:text-[48px] font-bold">
              Lorem ipsum dolor, sit amet consectetur.
            </h1>
            <p className="text-[#666] text-[20px] md:text-[24px] font-medium mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="w-full mt-10 items-center  flex justify-between border-[4px] overflow-hidden rounded-full border-[#CC6119] ">
              <input
                onChange={(e) => setVinCode(e.target.value)}
                type="text"
                className="w-full h-full p-4 outline-none border-none"
                placeholder={t.enterTheVinNumber}
              />
              <button
                onClick={() => setIsModalShow(true)}
                className="m-2 px-8 py-3 rounded-full transition-all hover:bg-[#b15416] bg-[#CC6119] text-white"
              >
                {t.check}
              </button>
            </div>
            <div className="mt-4">
              <Link href={'#whereIsVin'}>
                <p className="text-blue-400 text-lg font-medium hover:underline">{t.whereIsVin}</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarfaxHero;
