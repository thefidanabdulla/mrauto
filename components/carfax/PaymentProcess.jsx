import Image from "next/image";
import React from "react";

import { useRouter } from "next/router";
import lang from "@/utils/translations.util.js";
import Link from "next/link";

const PaymentProcess = () => {
  //language
  const { locale } = useRouter();
  const { [locale]: t } = lang;
  return (
    <section className="w-full flex justify-center" id="ourDifferences">
      <div className="max-w-[1300px] w-full px-4 2xl:px-0 py-[64px]">
        <div className="">
          <h1 className="w-full text-center text-[#24355A] text-[32px] md:text-[36px] font-medium">{t.paymentProcess}</h1>
          <div className="">
            <div className="w-[310px]  paymentProcessCard flex flex-col group items-center justify-center gap-5">
              <div className="w-[140px] h-[140px] rounded-full shadow-xl transition-all duration-300 paymentProcessCardGradient">
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentProcess;
