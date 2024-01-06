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
    <div className="w-full flex orderCarGradient justify-center" id="orderCar">
      <div className="max-w-[1300px] w-full px-4 2xl:px-0 py-[64px]">
        <h2 className="text-[32px] md:text-[36px] font-semibold text-center mb-16">
          {t.saleProcess}
        </h2>
        <div className="">
          <Image src={'/imgs/car-3.jpg'} width={400} height={500} className="object-cover rounded-lg md:w-[400px] md:h-[550px]" alt="mrauto" />
          <div className="">

          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCar;
