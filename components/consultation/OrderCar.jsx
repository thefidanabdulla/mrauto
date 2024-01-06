import Image from "next/image";
import React, { useState } from "react";

import { useRouter } from "next/router";
import lang from "@/utils/translations.util.js";
import Link from "next/link";

const OrderCar = () => {
  //language
  const { locale } = useRouter();
  const { [locale]: t } = lang;
  return (
    <div className="w-full flex  justify-center" id="orderCar">
      <div className="max-w-[1300px] w-full px-4 2xl:px-0 py-[64px]">
        <h2 className="text-[32px] md:text-[36px] font-semibold text-center my-16">
          {t.saleProcess}
        </h2>
        <div className="flex flex-col md:flex-row gap-20">
          <Image
            src={"/imgs/car-3.jpg"}
            width={400}
            height={500}
            className="object-cover rounded-lg w-full md:w-[400px] "
            alt="mrauto"
          />
          <div className="w-full">
            <form className="w-full flex flex-col gap-6">
              <input
                className="w-full border border-[#22222210] py-3 px-4 rounded-xl outline-none"
                placeholder={t.phone}
              />
              <input
                className="w-full border border-[#22222210] py-3 px-4 rounded-xl outline-none"
                placeholder={t.email}
              />
              <select className="w-full border border-[#22222210] py-3 px-4 rounded-xl outline-none">
                <option>BMW</option>
                <option>Tesla</option>
                <option>Toyota</option>
                <option>Nissan</option>
              </select>
              <button className=" w-full px-8 py-2 bg-[#FF7A00] text-[#ffffff] hover:bg-[#ffffff] transition-all duration-300 rounded-md hover:text-[#FF7A00] border border-[#FF7A00]">
                {t.send}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCar;
