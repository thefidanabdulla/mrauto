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
          <div className="my-20 flex justify-center flex-wrap items-center gap-10 md:gap-20">
            <div className="flex-shrink-0 w-[310px]  paymentProcessCard flex flex-col group items-center justify-center gap-5">
              <div className="w-[140px] h-[140px] rounded-full shadow-2xl transition-all duration-300 paymentProcessCardGradient overflow-hidden flex justify-center items-center">
                <Image src={'imgs/paymentProcess1.svg'} width={48} height={48} alt="mrauto" />
              </div>
              <h4 className="text-[#24355A] mt-10 text-center text-[20px] md:text-[24px] font-medium">{t.paymentProcessTitle1}</h4>
              <p className="text-center text-[#a9a9a9] text-lg font-medium ">{t.paymentProcessDesc1}</p>
            </div>
            <div className="flex-shrink-0 w-[310px]  paymentProcessCard flex flex-col group items-center justify-center gap-5">
              <div className="w-[140px] h-[140px] rounded-full shadow-2xl transition-all duration-300 paymentProcessCardGradient overflow-hidden flex justify-center items-center">
                <Image src={'imgs/paymentProcess2.svg'} width={48} height={48} alt="mrauto" />
              </div>
              <h4 className="text-[#24355A] mt-10 text-center text-[20px] md:text-[24px] font-medium">{t.paymentProcessTitle2}</h4>
              <p className="text-center text-[#a9a9a9] text-lg font-medium ">{t.paymentProcessDesc2}</p>
            </div>
            <div className="flex-shrink-0 w-[310px]  paymentProcessCard flex flex-col group items-center justify-center gap-5">
              <div className="w-[140px] h-[140px] rounded-full shadow-2xl transition-all duration-300 paymentProcessCardGradient overflow-hidden flex justify-center items-center">
                <Image src={'imgs/paymentProcess3.svg'} width={48} height={48} alt="mrauto" />
              </div>
              <h4 className="text-[#24355A] mt-10 text-center text-[20px] md:text-[24px] font-medium">{t.paymentProcessTitle3}</h4>
              <p className="text-center text-[#a9a9a9] text-lg font-medium ">{t.paymentProcessDesc3}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentProcess;
