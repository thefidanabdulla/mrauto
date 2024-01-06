import Image from "next/image";
import React, { useState } from "react";

import { useRouter } from "next/router";
import lang from "@/utils/translations.util.js";
import Link from "next/link";
import FaqCard from "./FaqCard";
import { nanoid } from "nanoid";

const Faq = () => {
  //language
  const { locale } = useRouter();
  const { [locale]: t } = lang;

  const mockData = [
    {
      id: nanoid(),
      title: "",
      desc: ""
    },
  ]

  return (
    <div className="w-full cursor-pointer bg-[#222732] flex text-white  justify-center" id="orderCar">
      <div className="max-w-[1300px] w-full px-4 2xl:px-0 py-[128px]">
        <div className="flex flex-col items-center gap-10">
          <h2 className="w-full max-w-[500px] text-white uppercase text-center text-[24px] md:text-[32px]">
          {t.frequentlyAskedQuestions}
          </h2>
          <div className="w-full border-b border-white">
            <FaqCard />
            <FaqCard />
            <FaqCard />
            <FaqCard />
            <FaqCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
